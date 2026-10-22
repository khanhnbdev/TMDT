# Exclusive homepage

React, Tailwind CSS, and Vite recreation of the Figma frame `34:213` in file `Yg99kerzbaitMxaQe2DrIH`.

Run locally:

```sh
npm install
npm run dev
```

Open `http://localhost:5173/`. The layout uses the original 1440 px design canvas and scales to narrower browser windows. Images and SVGs supplied by Figma MCP are stored in `public/assets`.

Interactive demo features include search and category filtering, product quick view, a persistent cart and wishlist, promotional and product navigation, and local demo forms. Cart and wishlist data are saved in this browser. Checkout, account creation, mobile app downloads, and email delivery require a backend and therefore display an explicit demo message.

The Figma Starter MCP call limit prevented a detailed read of the footer and the service icon component, so those two areas were reconstructed from the visible structure and surrounding design styles.
