# Copilot Instructions: Compare Payment Gateways in Malaysia

## About the project
A static page for comparing payment gateways in Malaysia. Use plain HTML, CSS, JavaScript, and JSON without frameworks or a build step.

## Data structure
- `index.html`: page structure and static content.
- `style.css`: dark blue theme, responsive layout, and keyboard focus styles.
- `app.js`: gateway filtering, cost calculator, and data loading.
- `data.json`: `lastUpdated` uses the `YYYY-MM-DD` format, with `gateways` for the table and `plans` for the calculator. Gateway fields: `n` name, `r` rate, `ratesChecked` month the rate was checked (`YYYY-MM`), `f` fixed fees, `s` settlement, `b` best for, `p` Shopify/WooCommerce, `t` filter tags. Calculator plan fields: `n` name, `p` percentage rate, `fx` fee per transaction, `m` monthly fee.
- `.github/ISSUE_TEMPLATE/rate-report.md`: GitHub issue template for reporting an incorrect rate, linked from the page button.

## Rules
- Display language: English. Keep interface text in English when updating it.
- Never invent rates or facts. If unsure, write "Check the official website."
- Every rate must have a public source and be checked in the current month. Include the source in the commit message.
- Keep the project free of frameworks and build dependencies.
- Preserve the dark blue theme, responsive layout, and clear keyboard focus styles.
- Keep loading `data.json` over HTTP; do not direct users to open the page using `file://`.
- Use `esc()` when inserting data text into `innerHTML`.
- Display data loading errors clearly; do not hide failures or silently use fallback data.
