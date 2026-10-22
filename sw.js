// KLM Cetak Foto — service worker (offline)
const VERSION = 'klm-cetak-v17';
const CORE = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './sender/index.html', './sender/vendor/qrcode.js', './txdock.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (/huggingface\.co|hf\.co|cdn-lfs/.test(url.hostname)) return;   // model AI dicache sendiri oleh pustaka AI
  // Halaman aplikasi: utamakan jaringan agar selalu versi terbaru, cadangan dari cache saat offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req, { cache: 'no-store' }).then(r => { if (r.ok) { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); } return r; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(h => h || caches.match(url.pathname.includes('/sender/') ? './sender/index.html' : './index.html'))));
    return;
  }
  // Aset lain (ikon, font, pustaka PDF, model AI): cache dulu, lalu simpan dari jaringan
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); }
    return r;
  }).catch(() => hit)));
});
