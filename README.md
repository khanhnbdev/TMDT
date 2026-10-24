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

## Đọc và tự sửa code

Xem [hướng dẫn cấu trúc code cho người mới](docs/CAU_TRUC_CODE.md) để biết luồng chạy, chức năng của từng thư mục và bảng “muốn sửa gì → mở file nào”.

- `src/pages/`: từng trang riêng, `PageRouter.tsx` chọn trang theo URL.
- `src/components/layout/`: đầu trang và cuối trang dùng chung.
- `src/components/home/`: thẻ sản phẩm, icon và đồng hồ của trang chủ.
- `src/hooks/`: điều hướng, giỏ hàng/yêu thích, thông báo, banner và đếm ngược.
- `src/data/`, `src/types/`, `src/utils/`: dữ liệu, kiểu dữ liệu và hàm hỗ trợ.
- `src/panels/`: nội dung từng cửa sổ trượt.
- `src/styles/`: CSS chia theo trang và chức năng.

```sh
npm run build
npm run format
npm run format:check
```

Đồng hồ Flash Sales đã chuyển sang `src/components/home/FlashSaleTimer.tsx`. Logic đếm ngược dùng chung nằm ở `src/hooks/useCountdown.ts`.
