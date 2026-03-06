// Import modul http dari Node.js
import * as http from 'http';

// Tentukan port yang akan digunakan
const PORT = 3000;

// Buat server HTTP
const server = http.createServer((req, res) => {

  // Middleware sederhana untuk menghitung waktu eksekusi
  const startTime = Date.now();

  // Ambil URL dan metode HTTP
  const url = req.url || '/';
  const method = req.method || 'GET';

  console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);

  // --- ROUTING MANUAL ---

  // GET /
  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>🏠 Halaman Utama</h1><p>Selamat datang di server Node.js + TypeScript!</p>');
  }

  // GET /about
  else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>📄 Tentang Kami</h1><p>Ini adalah contoh routing manual sederhana.</p>');
  }

  // GET /api/users
  else if (url === '/api/users' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]));
  }

  // POST /api/users
  else if (url === '/api/users' && method === 'POST') {
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User berhasil dibuat (contoh)' }));
  }

  // ===============================
  // LATIHAN 1
  // GET /products
  // ===============================

  else if (url === '/products' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify([
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mouse" }
    ]));
  }

  // POST /products

  else if (url === '/products' && method === 'POST') {

    res.writeHead(201, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
      message: "Produk berhasil ditambahkan"
    }));
  }

  // ===============================
  // LATIHAN 2
  // Dynamic route /users/:id
  // ===============================

  else if (url.startsWith('/users/') && method === 'GET') {

    const id = url.split('/')[2];

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
      id: id,
      name: `User dengan ID ${id}`
    }));
  }

  // ===============================
  // 404 NOT FOUND
  // ===============================

  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>❌ 404 - Halaman Tidak Ditemukan</h1>');
  }

  // Middleware waktu selesai
  const endTime = Date.now();
  console.log(`Request selesai dalam ${endTime - startTime} ms`);

});

// Jalankan server
server.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});