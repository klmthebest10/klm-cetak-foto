# KLM Cetak Foto

Aplikasi web (PWA) untuk studio foto dan digital printing: pas foto, layout grid, KTP depan-belakang, dan dokumen.

## Isi folder
- `index.html` — seluruh aplikasi
- `manifest.json`, `sw.js`, `icons/` — agar bisa dipasang (install) dan jalan offline

## Cara pakai cepat
1. Buka `index.html` di Chrome/Edge (bisa langsung dari file, tapi tombol "Pasang App" baru muncul jika di-hosting HTTPS).
2. Tambah foto → pilih mode di atas → atur → **Cetak**, **PDF**, **PNG**, atau **JPG**.
3. Saat dialog cetak muncul: pilih ukuran kertas yang sama, **Margin: None/Tidak ada**, **Skala 100% / Actual size**.

## Agar bisa di-install (PWA)
Upload SEMUA isi folder ini ke hosting HTTPS, misalnya:
- **GitHub Pages**: buat repo → upload file → Settings › Pages › Branch `main` / root → Save.
- **Netlify Drop**: buka app.netlify.com/drop lalu seret folder ini.

Buka alamatnya di Chrome → tombol **Pasang App** muncul di kanan atas (atau menu ⋮ › Instal aplikasi).
Di iPhone: Safari → Bagikan → Tambahkan ke Layar Utama.

## Fitur
- **Pas Foto**: 2×3, 3×4, 4×6, 3×3, 4×4, paspor 3,5×4,5, visa 2×2 inci, 2R/3R/4R, ukuran sendiri. Campur beberapa ukuran dalam satu lembar, tombol "Penuhi lembar", paket cepat, panduan posisi wajah, teks nama di bawah foto.
- **Layout Grid**: 1×1 s.d. 5×6 atau bebas (kolom × baris), 1 foto diulang atau berurutan, putar otomatis, teks keterangan.
- **KTP & Kartu**: depan + belakang (atas-bawah / kiri-kanan), ukuran asli 85,6×54 mm atau diperbesar, beberapa salinan per lembar, hitam-putih, sudut bulat. **Luruskan** foto KTP yang difoto miring dengan menggeser 4 sudut.
- **Dokumen**: ijazah, akta, KK, surat; 1/2/4 halaman per lembar, filter **Scan bersih** (memutihkan kertas, hapus bayangan) dan **Scan H/P**.
- **Edit foto**: perbaiki otomatis (warna pudar, noise, perbesar resolusi, pertajam), haluskan kulit, kecerahan/kontras/saturasi/kehangatan, filter, putar, cermin.
- **Ganti warna latar** (merah, biru, putih, dll.) dengan AI deteksi orang (MediaPipe, unduh model sekali) atau deteksi warna dinding polos.
- **Bingkai**: warna, polaroid, garis, garis ganda, putus-putus, titik, gelombang, sudut bulat.
- **Panduan potong**: garis bantu, tanda sudut, garis tepi.
- **Kertas**: A4, F4, Letter, Legal, A5, A3, 4R, 5R, 6R, 8R, ukuran sendiri; tegak/mendatar; margin.
- **Kalibrasi printer**: cetak halaman uji, ukur garis 100 mm, aplikasi menyesuaikan skala dan geser.
- **Hitung biaya** per lembar, tema terang/gelap, tempel foto (Ctrl+V), seret-lepas, kamera HP.

Catatan: foto tidak disimpan setelah aplikasi ditutup (pengaturan tetap tersimpan). Semua pemrosesan dilakukan di perangkat; tidak ada foto yang diunggah ke server.
