# Arahan untuk Copilot: Banding Payment Gateway Malaysia

## Tentang projek
Halaman statik untuk membandingkan payment gateway di Malaysia. Gunakan HTML, CSS, JavaScript biasa dan JSON tanpa framework atau build step.

## Struktur data
- `index.html`: struktur halaman dan kandungan statik.
- `style.css`: tema gelap biru, susun atur responsif dan gaya fokus papan kekunci.
- `app.js`: penapisan gateway, kalkulator kos dan pemuatan data.
- `data.json`: `lastUpdated` menggunakan format `YYYY-MM-DD`, tatasusunan `gateways` untuk jadual dan `plans` untuk kalkulator. Medan gateway: `n` nama, `r` kadar, `ratesChecked` bulan kadar disemak (`YYYY-MM`), `f` yuran tetap, `s` settlement, `b` sesuai untuk, `p` Shopify/WooCommerce, `t` tag penapis. Medan pelan kalkulator: `n` nama, `p` kadar peratus, `fx` yuran setiap transaksi, `m` yuran bulanan.
- `.github/ISSUE_TEMPLATE/rate-report.md`: templat GitHub Issue untuk laporan kadar yang salah, dipautkan daripada butang pada halaman.

## Peraturan
- Bahasa paparan semasa: Bahasa Inggeris. Kekalkan bahasa ini apabila mengemas kini teks antara muka.
- JANGAN reka kadar atau fakta. Kalau tak pasti, tulis "Rujuk laman rasmi" atau "Semak laman rasmi".
- Setiap kadar mesti ada sumber awam dan disemak pada bulan semasa. Nyatakan sumber dalam mesej commit.
- Kekalkan projek tanpa framework dan dependency build.
- Kekalkan tema gelap biru, susun atur responsif dan fokus papan kekunci yang jelas.
- Kekalkan pemuatan `data.json` melalui HTTP; jangan mengarahkan pengguna membuka halaman melalui `file://`.
- Guna `esc()` apabila memasukkan teks data ke dalam `innerHTML`.
- Paparkan ralat pemuatan data dengan jelas; jangan sembunyikan kegagalan atau gunakan data gantian senyap.
