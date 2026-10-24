import Header from "../Header";
import HeaderActions from "./HeaderActions";
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
  const actions = {
    wishlistCount: wishlist.length,
    cartCount: cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0),
    accountMenu,
  };

  return (
    <>
      <div className="main-header">
        {route === "/" ? (
          <Header {...actions} />
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
              <HeaderActions {...actions} />
            )}
          </div>
        )}
      </div>
      {accountMenu && (
        <div
          className="account-dropdown"
          id="account-dropdown"
          aria-label="Account options"
        >
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
        </div>
      )}
      <div className="header-rule" />
    </>
  );
}
