# GT-R - Landing Page

Halaman web statis pengenalan mobil sport legendaris **Nissan GT-R** yang dibangun menggunakan HTML5 semantik dan Tailwind CSS CLI.

---

## Teknologi yang Digunakan

- **HTML**: Menggunakan tag semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Tailwind CSS**: CSS framework berbasis untuk styling.
- **Struktur Halaman**: Header, section pengenalan, kartu spesifikasi/fitur, galeri visual, dan footer.

---

## Cara Menjalankan

### 1. Wajib
Diwajibkan untuk menginstall [Node.js](https://nodejs.org/) di dalam device.

### 2. Clone atau Download Repo
```bash
git clone [https://github.com/Daitoryo/nissan-gtr-web.git](https://github.com/Daitoryo/nissan-gtr-web.git)
cd nissan-gtr-web
```

### 3. Cara Running Tailwind
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
Alternatif jika npx tidak dapat dijalankan di dalam terminal: 
```bash
npx.cmd @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
Jika kendala larangan menjalankan command di terminal (aturan Execution Policy) lakukan:
1. Buka powershell
2. Paste command berikut : Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
3. Pilih Opsi [A] Yes to All
4. Seharusnya sekarang larangan menjalankan script di terminal sudah hilang
