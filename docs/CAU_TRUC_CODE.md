# Đọc và tự sửa project Exclusive

Project dùng **React + TypeScript + Tailwind CSS + Vite**. Mã nguồn đã được chia theo từng trách nhiệm: trang, component, logic, dữ liệu và CSS.

## 1. Bắt đầu từ đâu?

Đọc theo thứ tự sau, mỗi lần chỉ tập trung một file:

1. `src/main.tsx`: tìm phần tử `root` trong HTML và gắn ứng dụng React vào đó.
2. `src/App.tsx`: ghép đầu trang, trang đang mở, cuối trang và các panel lại với nhau.
3. `src/pages/HomePage.tsx`: xem trang chủ gồm những khu vực nào.
4. `src/pages/AuthPage.tsx`: ví dụ về một trang có form, state và xử lý submit.
5. `src/hooks/useShoppingLists.ts`: xem cách thêm giỏ hàng, tăng/giảm số lượng và yêu thích.
6. `src/hooks/useStorefront.ts`: xem cách nối các phần trên và xử lý thao tác từ trang chủ.

Không cần đọc hết các file icon trước khi bắt đầu sửa nội dung.

## 2. Các thư mục

```text
Project/
├── index.html                  Trang HTML có thẻ <div id="root">
├── package.json                Thư viện và các lệnh npm
├── package-lock.json           Phiên bản thư viện dùng khi cài đặt
├── vite.config.ts              Cấu hình Vite, React và Tailwind
├── tsconfig.json               Cấu hình TypeScript
├── public/
│   └── assets/                 Ảnh sản phẩm, banner, SVG
├── src/
│   ├── main.tsx                Điểm khởi động React, import CSS
│   ├── App.tsx                 Bố cục chung và kết nối các phần
│   ├── components/
│   │   ├── layout/             Đầu trang và cuối trang dùng chung
│   │   ├── home/               Component nhỏ của các mục trên trang chủ
│   │   ├── FlashSales.tsx      Tiêu đề, nút mũi tên, danh sách Flash Sales
│   │   ├── Products.tsx        Khu Explore Our Products
│   │   ├── Categories.tsx      Danh mục sản phẩm
│   │   ├── BestSelling.tsx     Best Selling Products
│   │   ├── MusicBanner.tsx     Banner loa và đồng hồ Categories
│   │   ├── Featured.tsx        Khu New Arrival
│   │   ├── Hero.tsx            Banner iPhone gốc
│   │   ├── Header.tsx          Đầu trang chủ theo thiết kế gốc
│   │   ├── TopHeader.tsx       Thanh khuyến mãi trên cùng
│   │   ├── ProductCard.tsx     Thẻ sản phẩm trên wishlist/trang chi tiết
│   │   ├── ProductGallery.tsx  Chọn ảnh và phóng to ảnh sản phẩm
│   │   └── WishlistBadge.tsx   Vòng tròn đỏ hiển thị số yêu thích
│   ├── pages/                  Mỗi trang là một file
│   ├── hooks/                  Logic có state hoặc effect
│   ├── panels/                 Nội dung cửa sổ trượt bên phải
│   ├── data/                   Dữ liệu sản phẩm, banner, danh mục
│   ├── types/                  Kiểu dữ liệu Product
│   ├── utils/                  Hàm hỗ trợ lưu trữ, giá tiền, mật khẩu demo
│   ├── styles/                 CSS chia theo phần/trang
│   ├── style.css               Import Tailwind và các file styles
│   ├── product-interactions.css CSS hover, badge, zoom, thông báo
│   ├── productDetails.ts       Nội dung mô tả và danh sách ảnh từng góc
│   ├── shop.ts                 Đọc thẻ sản phẩm, lọc danh mục
│   └── ShopPanel.tsx           Khung chung của panel
├── docs/                       Tài liệu đọc code
├── node_modules/               Thư viện npm đã cài
└── dist/                       Kết quả npm run build
```

Bạn chủ yếu sửa `src/` và `public/assets/`. `node_modules/`, `dist/` và `*.tsbuildinfo` là thư viện hoặc kết quả sinh tự động. `.git/` lưu lịch sử Git.

## 3. Các phần kết nối như thế nào?

```text
index.html
  └─ main.tsx
      └─ App.tsx
          ├─ useStorefront() → dữ liệu và hàm xử lý
          │   ├─ useNavigation() → URL, tiêu đề, tỉ lệ hiển thị
          │   ├─ useShoppingLists() → giỏ hàng, yêu thích
          │   ├─ useNotice() → thông báo
          │   └─ useHeroAutoplay() → tự đổi banner
          ├─ TopHeader + SiteHeader
          ├─ HomePage hoặc PageRouter → trang tương ứng với URL
          ├─ SiteFooter
          └─ ShopPanel → nội dung trong panels/
```

**Component** là một hàm trả về JSX, ví dụ `WishlistBadge`. JSX mô tả giao diện gần giống HTML. **Props** là dữ liệu cha truyền cho con. **State** là dữ liệu có thể thay đổi; khi gọi hàm cập nhật state, React sẽ cập nhật giao diện tương ứng.

Ví dụ `SiteHeader` nhận `wishlist` từ `App`, rồi truyền `wishlist.length` vào `WishlistBadge`. Component badge hiển thị số đó. Khi bấm tim, `toggleWishlist()` cập nhật state, nên badge tự đổi số mà không cần sửa nội dung HTML bằng tay.

**Hook** là hàm bắt đầu bằng `use`, gom các phần xử lý có liên quan. Tách hook giúp file giao diện tập trung vào bố cục, còn việc đọc/lưu giỏ hàng nằm ở một chỗ.

`import` lấy một component, kiểu hoặc hàm từ file khác. `export` cho phép file khác lấy nó. Đường dẫn `./` tính từ thư mục hiện tại; `../` đi lên một cấp.

## 4. Muốn sửa gì thì mở file nào?

| Muốn sửa | File |
| --- | --- |
| Bố cục chung của ứng dụng | `src/App.tsx` |
| Thứ tự các khu vực trang chủ | `src/pages/HomePage.tsx` |
| Menu đầu trang, liên kết, tìm kiếm | `src/components/layout/SiteHeader.tsx` |
| Bố cục đầu trang chủ gốc | `src/components/Header.tsx` |
| Nội dung cuối trang | `src/components/layout/SiteFooter.tsx` |
| Nội dung các slide banner | `src/data/home.ts` → `heroPromos` |
| Thời gian tự chuyển banner | `src/hooks/useHeroAutoplay.ts` → `5000` là 5 giây |
| Đồng hồ Flash Sales, số Minutes | `src/components/home/FlashSaleTimer.tsx` |
| Logic đếm ngược chung | `src/hooks/useCountdown.ts` |
| Đồng hồ trong banner loa Categories | `src/components/MusicBanner.tsx` |
| Danh sách thẻ Flash Sales, hai ảnh ghế | `src/components/FlashSales.tsx` |
| Nội dung/ảnh trong thẻ Flash Sales | `src/components/home/FlashSaleCard.tsx` |
| Thẻ sản phẩm trong Explore Our Products | `src/components/home/ExploreProductCard.tsx` |
| Thẻ Curology trong Explore Our Products | `src/components/home/SkincareProductCard.tsx` |
| Danh sách sản phẩm dự phòng | `src/data/products.ts` |
| Cấu trúc dữ liệu của một sản phẩm | `src/types/product.ts` |
| Mô tả và thêm ảnh góc khác | `src/productDetails.ts` |
| Trang chi tiết, nút mua, số lượng | `src/pages/ProductPage.tsx` |
| Thumbnail, phóng to ảnh | `src/components/ProductGallery.tsx` |
| Giỏ hàng và yêu thích | `src/hooks/useShoppingLists.ts` |
| Badge số trên trái tim | `src/components/WishlistBadge.tsx` |
| Nội dung, thời gian hiện thông báo | `src/hooks/useNotice.ts` và nơi gọi `showNotice()` |
| Hover Add to Cart, zoom, badge | `src/product-interactions.css` |
| CSS đăng ký/đăng nhập | `src/styles/auth.css` |
| CSS giỏ hàng | `src/styles/cart.css` |
| CSS trang chi tiết | `src/styles/product.css` |
| Đường dẫn và chiều cao các trang | `src/pages/routes.ts`, `src/pages/types.ts`, `src/pages/PageRouter.tsx` |

**Lưu ý về dữ liệu trang chủ:** một số thẻ từ thiết kế Figma vẫn chứa tên, giá và ảnh trực tiếp trong component. `shop.ts` đọc các thẻ đó để tạo danh mục dùng cho tìm kiếm và các trang khác. `data/products.ts` là danh sách dự phòng khi chưa đọc được thẻ trên trang chủ; sửa riêng danh sách dự phòng sẽ không thay tên/giá đã viết trực tiếp trong thẻ trang chủ.

## 5. Các trang đã tách

| URL | File |
| --- | --- |
| `/` | `HomePage.tsx` |
| `/signup`, `/login` | `AuthPage.tsx` — chung bố cục, khác nội dung theo URL |
| `/wishlist` | `WishlistPage.tsx` |
| `/cart` | `CartPage.tsx` |
| `/checkout` | `CheckoutPage.tsx` |
| `/account` | `AccountPage.tsx` |
| `/about` | `AboutPage.tsx` |
| `/contact` | `ContactPage.tsx` |
| `/product` | `ProductPage.tsx` |
| `/404` hoặc URL không tồn tại | `ErrorPage.tsx` |

Các file trên nằm trong `src/pages/`. `Breadcrumb.tsx` là đường dẫn nhỏ “Home / ...”. `types.ts` mô tả props dùng chung. `PageRouter.tsx` đọc `route`, dùng `switch` để trả về component đúng.

`AuthPage` dùng chung cho đăng ký và đăng nhập vì hai trang có cùng khung giao diện. `route === "/signup"` quyết định hiển thị form tạo tài khoản hay form đăng nhập.

## 6. Ví dụ tự sửa

### Đổi thời gian tự chuyển banner

Mở `src/hooks/useHeroAutoplay.ts`, tìm `5000` trong `setTimeout`. Đổi thành `3000` để chuyển mỗi 3 giây. `1000` mili giây bằng 1 giây.

### Sửa Minutes không xuống dòng

Mở `src/components/home/FlashSaleTimer.tsx`, tìm `{countdown.minutes}`. Thẻ `<p>` tương ứng có:

```tsx
min-w-[46px] whitespace-nowrap
```

`min-w-[46px]` đặt chiều rộng tối thiểu 46px. `whitespace-nowrap` giữ nội dung trên cùng một dòng.

### Đổi ảnh ghế

Ảnh mới nằm trong `public/assets/chair-green.png` và `chair-black.png`. Trong code, đường dẫn bắt đầu từ `/assets/`, ví dụ:

```tsx
<img src="/assets/chair-green.png" alt="Green chair" />
```

Không thêm chữ `public` vào URL. Các thẻ Flash Sales dùng `chairVariant="green"` hoặc `chairVariant="black"` trong `FlashSales.tsx`.

### Thêm ảnh sản phẩm từ góc khác

Đặt ảnh của bạn vào `public/assets/`, sau đó thêm vào `productPhotos` trong `src/productDetails.ts`:

```tsx
export const productPhotos: Record<string, ProductPhoto[]> = {
  "HAVIT HV-G92 Gamepad": [
    { src: "/assets/gamepad-front.png", label: "Front view" },
    { src: "/assets/gamepad-back.png", label: "Back view" },
  ],
};
```

Tên sản phẩm phải khớp hoàn toàn. Các tên ảnh trong ví dụ chỉ là minh họa; cần có file ảnh thật trước khi dùng. `getProductDetails()` chuyển danh sách ảnh sang `ProductPage`, rồi `ProductGallery` tạo các thumbnail để bấm chọn. Nếu chưa có ảnh bổ sung, chỉ hiện ảnh gốc.

### Đọc luồng thêm giỏ hàng

1. Người dùng bấm `Add To Cart`.
2. Thẻ trang chủ có `data-add-cart`; `handleClick()` trong `useStorefront.ts` nhận thao tác và đọc sản phẩm. Các trang React khác gọi `addToCart(item)` trực tiếp qua props.
3. `addToCart()` trong `useShoppingLists.ts` tìm sản phẩm theo tên. Nếu đã có thì tăng số lượng; chưa có thì thêm với `quantity: 1`.
4. React cập nhật state. `CartPage`, badge và các phần nhận `cart` hiển thị dữ liệu mới.
5. `useEffect()` lưu giỏ hàng vào `localStorage`, nên tải lại trang vẫn còn dữ liệu trong trình duyệt đó.
6. `showNotice()` hiện thông báo và tự tắt sau 3,5 giây.

`useStorefront.ts` vẫn có phần xử lý sự kiện chung cho các component xuất từ Figma. Những thuộc tính như `data-name`, `data-node-id`, `data-product-card` đang được dùng để nhận diện thao tác; nếu đổi chúng, hãy tìm nơi sử dụng bằng chức năng tìm kiếm của VS Code trước.

### Thêm một trang mới

1. Tạo `src/pages/ExamplePage.tsx` có `export default function ExamplePage()` và JSX.
2. Thêm `"/example"` vào kiểu `Route` trong `src/pages/types.ts`.
3. Thêm chiều cao `"/example"` vào `pageHeights` trong `src/pages/routes.ts`.
4. Import component và thêm `case "/example"` trong `PageRouter.tsx`.
5. Ở thành phần điều hướng, gọi `navigate("/example")` hoặc thêm nút `data-route="/example"` trong vùng ứng dụng có xử lý chung.
6. Nếu cần CSS, tạo file trong `src/styles/` rồi import nó trong `src/style.css`.

Chiều cao được khai báo vì giao diện dùng canvas 1440px với nhiều vị trí cố định. Thêm nhiều nội dung có thể cần tăng chiều cao để tránh bị che hoặc cắt.

## 7. CSS và Tailwind

`main.tsx` import `style.css` trước, `product-interactions.css` sau. `style.css` import Tailwind và các file trong `styles/` theo thứ tự. Thứ tự này ảnh hưởng tới quy tắc CSS được áp dụng, nên hãy giữ khi chỉ sửa nội dung.

Tailwind là các class CSS viết ngay trong JSX, ví dụ `flex`, `gap-[16px]`, `text-[32px]`. CSS riêng như `.detail-info` nằm trong `styles/`. Có thể tìm tên class trong toàn project bằng **Ctrl + Shift + F**.

Các component trang chủ vẫn giữ nhiều tọa độ và SVG từ Figma để giữ bố cục. File `*Icons.tsx` chỉ gom phần icon/đánh giá sao, giúp file nội dung chính ngắn hơn.

## 8. Chạy và kiểm tra

Mở thư mục `D:\Project` bằng VS Code, mở terminal rồi chạy:

```sh
npm install
npm run dev
```

Vite sẽ in địa chỉ xem web; thường là `http://localhost:5173/`. Khi lưu file, trình duyệt tự cập nhật.

```sh
npm run build         # Kiểm tra TypeScript và tạo bản build trong dist/
npm run format        # Tự định dạng code
npm run format:check  # Kiểm tra định dạng mà không sửa file
```

## 9. Giới hạn của bản demo

Giỏ hàng, yêu thích, tài khoản và hồ sơ là dữ liệu lưu trong trình duyệt. Đăng ký/đăng nhập dùng thông tin demo ở `localStorage`; chưa có máy chủ xác thực. Thanh toán hiện xử lý đơn ở phía giao diện và xóa giỏ hàng. Google OAuth, gửi email, đặt lại mật khẩu và tải app chưa được kết nối dịch vụ.

Việc tách file không đưa dữ liệu lên GitHub hoặc CodeSandbox. Cần commit/push để repo và môi trường đồng bộ nhận thay đổi.
