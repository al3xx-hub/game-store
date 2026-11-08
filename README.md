# Game Store (versi awal)

## Cara jalanin
1. Install Node.js 18+ lalu jalankan `npm install`.
2. Copy `.env.example` jadi `.env.local` dan isi data R2 kamu.
3. Upload file game ke bucket R2 dengan path sama seperti `fileKey` di `data/games.json`.
4. Tambah game baru di `data/games.json`.
5. Jalankan `npm run dev` lalu buka http://localhost:3000.

## Deploy
Push ke GitHub, lalu import ke Vercel atau Cloudflare Pages. Jangan lupa isi env variable yang sama di dashboard hosting.

## Catatan
- Belum dites end-to-end di mesin kamu. Kalau ada error, kirim pesan errornya.
- Halaman ini terbuka untuk semua orang, belum ada login.
