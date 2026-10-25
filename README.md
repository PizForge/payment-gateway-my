# Banding Payment Gateway Malaysia

Halaman statik untuk membandingkan payment gateway di Malaysia: kadar, yuran tetap, tempoh settlement, kaedah bayaran dan sokongan Shopify/WooCommerce. Ada kalkulator kos bulanan.

## Guna

Jalankan folder ini melalui pelayan HTTP setempat kerana halaman mengambil data daripada `data.json`. Dalam VS Code, pasang sambungan **Live Server**, kemudian klik kanan `index.html` dan pilih **Open with Live Server**. Tiada build atau dependency.

Dalam VS Code, pasang sambungan **Live Server** untuk pratonton automatik.

## Kemas kini data

Data gateway dan kadar kalkulator disimpan dalam `data.json` masing-masing di bawah `gateways` dan `plans`. Gaya berada dalam `style.css`, manakala logik penapisan dan kalkulator berada dalam `app.js`.

Kadar adalah anggaran daripada sumber awam (Oktober 2026). Sahkan di laman rasmi setiap gateway sebelum membuat keputusan.

Gunakan butang **Laporkan kadar salah** pada halaman untuk membuka GitHub Issue menggunakan templat laporan kadar.

## Terbitkan dengan GitHub Pages

Settings > Pages > Source: `main` branch, folder `/ (root)`.

## Lesen

MIT
