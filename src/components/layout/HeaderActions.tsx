import WishlistBadge from "../WishlistBadge";

export type HeaderActionsProps = {
  wishlistCount: number;
  cartCount: number;
  accountMenu: boolean;
};

// Mỗi số lượng nằm trong chính nút của nó để không lệch khi đổi trang.
export default function HeaderActions({
  wishlistCount,
  cartCount,
  accountMenu,
}: HeaderActionsProps) {
  return (
    <div className="header-actions">
      <button
        className="wishlist-icon-button"
        data-route="/wishlist"
        aria-label="Open wishlist"
      >
        <img src="/assets/3931428d-caaa-4652-8c0d-380a5cf9c543.svg" alt="" />
        <WishlistBadge count={wishlistCount} />
      </button>
      <button
        className="cart-icon-button"
        data-route="/cart"
        aria-label="Open cart"
      >
        <img src="/assets/d253498a-d73d-435a-a7ef-72fdd8f7150a.svg" alt="" />
        {cartCount > 0 && (
          <span
            className="cart-count"
            role="status"
            aria-label={`${cartCount} items in cart`}
          >
            {cartCount > 99 ? "99+" : cartCount}
          </span>
        )}
      </button>
      <button
        className="account-icon-button"
        data-account-menu
        aria-label="Account menu"
        aria-expanded={accountMenu}
        aria-controls="account-dropdown"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="16" cy="10" r="5" />
          <path d="M6 28c0-6 4-10 10-10s10 4 10 10" />
        </svg>
      </button>
    </div>
  );
}
