# Yayasan Pendidikan Islam Al Hikmah - Website Profil

![Yayasan Al Hikmah Logo](https://ypialhikmahsukamanahtanara.org/assets/logo-BRMZPrtr.png)

Website profil resmi untuk **Yayasan Pendidikan Islam Al Hikmah Sukamanah**, sebuah lembaga sosial kemanusiaan yang berlokasi di Tanara, Serang, Banten. Website ini dirancang untuk memberikan informasi mengenai profil yayasan, program-program pendidikan dan sosial, dokumentasi kegiatan, serta memfasilitasi donasi digital.

## 🌟 Fitur Utama

* **Profil Yayasan:** Informasi visi, misi, dan sejarah singkat yayasan.
* **Program & Kegiatan:** Penjelasan detail mengenai program beasiswa, bantuan sosial (sembako), renovasi rumah, dan pemberdayaan UMKM.
* **Galeri Dokumentasi:** Foto-foto kegiatan sosial yang telah dilaksanakan.
* **Informasi Donasi:** Panduan lengkap cara berdonasi melalui Transfer Bank (BRI), QRIS, dan PayPal.
* **Fitur Copy:** Memudahkan pengguna menyalin nomor rekening dengan satu klik.
* **Kontak Langsung:** Tombol interaktif yang terhubung ke WhatsApp dan Email resmi yayasan.
* **Desain Responsif:** Tampilan yang rapi dan optimal di perangkat desktop maupun smartphone.

## 🛠️ Teknologi

Proyek ini dibangun menggunakan teknologi web modern:

* [React](https://react.dev/) (v19) - Library JavaScript untuk antarmuka pengguna.
* [Vite](https://vitejs.dev/) - Build tool yang cepat.
* [TypeScript](https://www.typescriptlang.org/) - Bahasa pemrograman berbasis JavaScript dengan tipe data.
* [Tailwind CSS](https://tailwindcss.com/) - Framework CSS (dimuat via CDN untuk styling cepat).
* [Lucide React](https://lucide.dev/) - Ikon vektor yang ringan.

## 📋 Prasyarat

Sebelum menjalankan proyek ini, pastikan komputer Anda sudah terinstal:

1.  **Node.js** (Versi 18 atau lebih baru).
2.  **npm** (Node Package Manager).

## 🚀 Cara Instalasi dan Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan website di komputer lokal Anda:

1.  **Clone atau Download** repository ini.

2.  **Masuk ke direktori proyek** melalui terminal:
    ```bash
    cd yayasan-al-hikmah
    ```

3.  **Instal dependensi:**
    ```bash
    npm install
    ```

4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```

5.  **Buka Website:**
    Akses URL yang muncul di terminal (biasanya `http://localhost:3000` atau `http://localhost:5173`) di browser Anda.

    > **⚠️ Catatan Penting:** Karena Tailwind CSS dimuat menggunakan CDN (`<script src="https://cdn.tailwindcss.com"></script>`) di file `index.html`, pastikan komputer Anda **terhubung ke internet** saat menjalankan aplikasi agar tampilan (styling) muncul dengan benar.

## 📦 Build untuk Produksi

Jika Anda ingin mengunggah website ini ke hosting, jalankan perintah build:

```bash
npm run build