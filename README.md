# Wanderlust Travel & AI Assistant

Wanderlust adalah sebuah *Landing Page* travel berdesain premium dan modern yang dilengkapi dengan fitur **AI Chatbot Assistant** terintegrasi. Web ini dirancang dengan tema natural (bumi, hijau alam, dan pasir hangat) serta menyediakan fitur obrolan interaktif menggunakan teknologi Google Gemini AI untuk membantu calon pelancong merencanakan liburan mereka.

## Fitur Utama

- **Desain Premium & Responsif**: Antarmuka pengguna yang indah dengan efek *glassmorphism* dan palet warna alam.
- **Floating Chatbot Widget**: Asisten AI melayang di pojok kanan bawah yang siap sedia kapan saja tanpa mengganggu navigasi utama.
- **Google Gemini AI Integration**: Ditenagai oleh model bahasa AI dari Google (Gemini) untuk memberikan rekomendasi travel yang cerdas dan humanis.
- **Auto-Formatting Teks AI**: Mampu membaca format *markdown* (seperti cetak tebal) dan paragraf dari AI secara otomatis.

## Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda telah memasang:
- [Node.js](https://nodejs.org/) (versi terbaru sangat direkomendasikan)
- [NPM](https://www.npmjs.com/) (terpasang secara otomatis bersama Node.js)
- **API Key Google Gemini**: Anda bisa mendapatkannya di [Google AI Studio](https://aistudio.google.com/).

## Cara Instalasi dan Penggunaan

1. **Unduh atau Clone Repositori**
   Buka terminal/command prompt di dalam direktori proyek ini.

2. **Instal Dependensi**
   Jalankan perintah berikut untuk menginstal semua library (seperti `express` dan library Google Gen AI):
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**
   Buat sebuah file baru bernama `.env` di direktori utama (root) proyek ini, dan tambahkan API Key Gemini Anda:
   ```env
   GEMINI_API_KEY=masukkan_api_key_gemini_anda_disini
   PORT=3000
   ```

4. **Jalankan Server**
   Mulai server lokal dengan perintah:
   ```bash
   node index.js
   ```

5. **Buka di Browser**
   Buka peramban (browser) Anda dan kunjungi:
   `http://localhost:3000`

## Struktur Direktori

- `/public`: Berisi file statis untuk frontend.
  - `index.html`: Struktur utama landing page.
  - `style.css`: Desain, *layout*, dan palet warna.
  - `script.js`: Logika *toggle* chatbot dan komunikasi ke backend.
  - `/images`: Tempat menyimpan semua aset gambar beresolusi tinggi (contoh: Hero, Bali, Swiss).
- `index.js`: Server backend Node.js (menjalankan API dan berinteraksi dengan Google Gemini).
- `.env`: (Harus dibuat manual) Menyimpan variabel rahasia.

