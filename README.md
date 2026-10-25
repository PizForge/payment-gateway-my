# Compare Payment Gateways in Malaysia

A static page for comparing payment gateways in Malaysia, including rates, fixed fees, settlement times, payment methods, and Shopify/WooCommerce support. Includes a monthly cost calculator.

## Usage

Serve this folder over a local HTTP server because the page loads data from `data.json`. In VS Code, install the **Live Server** extension, then right-click `index.html` and select **Open with Live Server**. No build step or dependencies are required.

In VS Code, install the **Live Server** extension for automatic previews.

## Updating data

Gateway data and calculator rates are stored in `data.json` under `gateways` and `plans`, respectively. Styles are in `style.css`, while filtering and calculator logic are in `app.js`.

Rates are estimates based on public sources (October 2026). Confirm them on each gateway's official website before making a decision.

Use the **Report an incorrect rate** button on the page to open a GitHub issue using the rate report template.

## Publish with GitHub Pages

Settings > Pages > Source: `main` branch, folder `/ (root)`.

## License

MIT
