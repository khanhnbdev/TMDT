# Exclusive homepage

React, Tailwind CSS, and Vite recreation of the Figma frame `34:213` in file `Yg99kerzbaitMxaQe2DrIH`.

Run locally:

```sh
npm install
npm run dev
```

Open `http://localhost:5173/`. The layout uses the original 1440 px design canvas and scales to narrower browser windows. Images and SVGs supplied by Figma MCP are stored in `public/assets`.

Interactive demo features include search and category filtering, product details and image zoom, a persistent cart and wishlist, wishlist count badges, automatic banner rotation, countdown timers, and local demo forms. Cart, wishlist, account, and profile data are saved in this browser. Checkout displays a local success message and clears the cart. Authentication is a local demo; Google OAuth, password-reset email, subscriptions, and mobile app downloads are not connected to external services.

The Figma Starter MCP call limit prevented a detailed read of the footer and the service icon component, so those two areas were reconstructed from the visible structure and surrounding design styles.
