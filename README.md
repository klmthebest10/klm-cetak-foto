# KLM Cetak Foto

Aplikasi web (PWA) untuk studio foto dan digital printing: pas foto, layout grid, KTP depan-belakang, dan dokumen.

## Isi folder
- `index.html` — seluruh aplikasi
- `sender/` — KLM Sender (bertema Cetak Foto)
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
- **Nomor foto otomatis**: setiap foto/dokumen yang diunggah langsung diberi nomor (01, 02, …) yang tampil di daftar, pilihan foto, slot KTP, dan dokumen. Cari cepat lewat kolom "Cari no. foto / nama" (Enter membuka foto), nama bisa diganti di halaman Edit (mis. nama pelanggan). Nomor mulai lagi dari 01 setelah semua foto dihapus.
- **Zoom lembar kerja**: perbesar pratinjau kertas hingga 600% (scroll, cubit dua jari, tombol − +, klik 2×) dan geser untuk melihat detail.
- **Lembar kerja**: tombol **+ Lembar baru** untuk membuat beberapa lembar kerja sekaligus (mis. Lembar 1 pas foto pelanggan A, Lembar 2 KTP pelanggan B). Tiap lembar punya mode, kertas, dan isinya sendiri; cetak/PDF/PNG bisa untuk **Lembar ini** atau **Semua lembar**.
- **Pas Foto**: 2×3, 3×4, 4×6, 3×3, 4×4, paspor 3,5×4,5, visa 2×2 inci, 2R/3R/4R, ukuran sendiri. Campur beberapa ukuran dalam satu lembar, tombol "Penuhi lembar", paket cepat, panduan posisi wajah, teks nama di bawah foto.
- **Layout Grid**: 1×1 s.d. 5×6 atau bebas (kolom × baris), 1 foto diulang atau berurutan, putar otomatis, teks keterangan.
- **KTP & Kartu**: depan + belakang (atas-bawah / kiri-kanan), sakelar **On/Off** per sisi untuk mencetak depan saja atau belakang saja, ukuran asli 85,6×54 mm atau diperbesar, beberapa salinan per lembar, hitam-putih, sudut bulat. **Luruskan** foto KTP yang difoto miring dengan menggeser 4 sudut.
- **Dokumen**: ijazah, akta, KK, surat; 1/2/4 halaman per lembar, filter **Scan bersih** (memutihkan kertas, hapus bayangan) dan **Scan H/P**.
- **Edit foto** (bisa zoom: cubit dua jari, scroll, tombol − +, ketuk 2×): perbaiki otomatis (warna pudar, noise, perbesar resolusi, pertajam), haluskan kulit, kecerahan/kontras/saturasi/kehangatan, filter, putar, cermin.
- **Ganti warna latar** (merah, biru, putih, dll.): AI potret MODNet (unduh model ±25 MB sekali) dengan pemulihan helai rambut dan pembersihan sisa warna latar lama, atau deteksi warna dinding polos. Ada alat **Hapus & Pulihkan** layar penuh seperti di Canva: kuas Hapus / Pulihkan, ukuran & kekerasan kuas, perbesar (cubit dua jari / scroll), geser, urungkan/ulangi, tahan untuk lihat asli, plus **Kuas warna** untuk menyelaraskan warna: Cat, Warnai (ganti warna, tekstur tetap), Cerahkan, Gelapkan, Haluskan, Klon/stempel, ambil warna dari foto, kekuatan kuas. Coretan kuas dan masker latar menyatu dengan foto: ikut berputar, miring, cermin, dan luruskan.
- **Putar & arah per foto**: tiap foto, KTP, paspor, dan dokumen bisa diputar ↺ ↻ 90° (mis. dokumen terbalik), diluruskan bila miring (−45° s.d. 45°), dan diatur tegak/mendatar sendiri-sendiri — mis. KTP depan tegak, belakang mendatar.
- **KLM Sender (menu baru)**: kirim/terima file antar PC dan HP langsung dari aplikasi ini (salinan utuh KLM Sender dengan tema Cetak Foto). Foto dan PDF yang diterima otomatis masuk ke daftar Foto; hasil cetak bisa dikirim sebagai PDF lewat tombol **Kirim**.
- **Popup proses transfer KLM Sender**: setiap kiriman punya kartu sendiri (status, progres, kecepatan, sisa waktu, daftar file per file). Kiriman tidak gagal karena lama menunggu diterima; jika koneksi putus, kiriman diparkir lalu disambung & dikirim ulang otomatis. Kiriman gagal/dibatalkan bisa **Kirim ulang**. Popup bisa dikecilkan per kartu atau semua sekaligus jadi tombol kecil (progres & jumlah yang perlu konfirmasi), dan semua kiriman tetap terlihat di halaman KLM Sender (**Lihat semua**). Perangkat yang sudah terhubung **tetap terhubung** (tidak tampil terputus; jalur dipulihkan diam-diam di belakang layar, layar dijaga tetap menyala) sampai diputuskan manual di salah satu perangkat. File masuk **selalu menunggu konfirmasi Terima** (tidak ada terima otomatis).
- **Unduh QR KLM Sender** sebagai gambar PNG siap cetak (tombol "Unduh QR" atau ketuk QR-nya).
- **PDF**: file PDF bisa diunggah, tiap halaman jadi gambar siap cetak.
- **Bingkai**: warna, polaroid, garis, garis ganda, putus-putus, titik, gelombang, sudut bulat.
- **Panduan potong**: garis bantu, tanda sudut, garis tepi.
- **Kertas**: A4, F4, Letter, Legal, A5, A3, 4R, 5R, 6R, 8R, ukuran sendiri; tegak/mendatar; margin.
- **Kalibrasi printer**: cetak halaman uji, ukur garis 100 mm, aplikasi menyesuaikan skala dan geser.
- **Angka bisa diketik manual**: setiap slider (mm, derajat kemiringan, %, ukuran kuas, dll.) punya kotak angka; ketik lalu Enter, atau panah atas/bawah. Ukuran mm dan kemiringan boleh melebihi batas slider.
- Tema terang/gelap, tempel foto (Ctrl+V), seret-lepas, kamera HP.

Foto yang diunggah dan pengerjaannya (edit, posisi, layout) tersimpan di perangkat, jadi tidak hilang saat halaman di-refresh atau aplikasi ditutup. Semua pemrosesan dilakukan di perangkat; tidak ada foto yang diunggah ke server.
