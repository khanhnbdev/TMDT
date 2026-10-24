import Header from "../Header";
import WishlistBadge from "../WishlistBadge";
import type { Storefront } from "../../hooks/useStorefront";

export default function SiteHeader({
  route,
  cart,
  wishlist,
  showCatalog,
  navigate,
  showNotice,
  accountMenu,
}: Pick<
  Storefront,
  | "route"
  | "cart"
  | "wishlist"
  | "showCatalog"
  | "navigate"
  | "showNotice"
  | "accountMenu"
>) {
  return (
    <>
      <div className="main-header">
        {route === "/" ? (
          <>
            <Header wishlistCount={wishlist.length} />
            {localStorage.getItem("exclusive-session") === "1" && (
              <button
                className="home-account-button"
                data-account-menu
                aria-label="Account menu"
              >
                ♙
              </button>
            )}
          </>
        ) : (
          <div className="route-header">
            <button className="route-logo" data-route="/">
              Exclusive
            </button>
            <nav>
              <button data-route="/">Home</button>
              <button
                data-route="/contact"
                className={route === "/contact" ? "active" : ""}
              >
                Contact
              </button>
              <button
                data-route="/about"
                className={route === "/about" ? "active" : ""}
              >
                About
              </button>
              <button
                data-route="/signup"
                className={route === "/signup" ? "active" : ""}
              >
                Sign Up
              </button>
            </nav>
            <div className="route-header-search">
              <input
                aria-label="Search products"
                placeholder="What are you looking for?"
              />
              <button
                aria-label="Search"
                onClick={() => {
                  const input = document.querySelector<HTMLInputElement>(
                    ".route-header-search input",
                  );
                  showCatalog("", input?.value ?? "");
                }}
              >
                ⌕
              </button>
            </div>
            {route !== "/signup" && route !== "/login" && (
              <div className="route-header-icons">
                <button
                  className="wishlist-icon-button"
                  data-route="/wishlist"
                  aria-label="Open wishlist"
                >
                  <img
                    src="/assets/3931428d-caaa-4652-8c0d-380a5cf9c543.svg"
                    alt=""
                  />
                  <WishlistBadge count={wishlist.length} />
                </button>
                <button data-route="/cart" aria-label="Open cart">
                  <img
                    src="/assets/d253498a-d73d-435a-a7ef-72fdd8f7150a.svg"
                    alt=""
                  />
                </button>
                <button data-account-menu aria-label="Account menu">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M4 21c0-5 3-8 8-8s8 3 8 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
        {cart.length > 0 && route !== "/signup" && route !== "/login" && (
          <span className="cart-count">
            {cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0)}
          </span>
        )}
      </div>
      {accountMenu && (
        <div className="account-dropdown">
          {localStorage.getItem("exclusive-session") === "1" ? (
            <>
              <button data-route="/account">♙ &nbsp; Manage My Account</button>
              <button data-route="/cart">▣ &nbsp; My Order</button>
              <button data-route="/wishlist">♡ &nbsp; My Wishlist</button>
              <button
                onClick={() => {
                  localStorage.removeItem("exclusive-session");
                  navigate("/login");
                  showNotice("Logged out");
                }}
              >
                ↪ &nbsp; Logout
              </button>
            </>
          ) : (
            <>
              <button data-route="/login">↪ &nbsp; Log In</button>
              <button data-route="/signup">♙ &nbsp; Create Account</button>
              <button data-route="/wishlist">♡ &nbsp; My Wishlist</button>
            </>
          )}
        </div>
      )}
      <div className="header-rule" />
    </>
  );
}
