import useStorefront from "./hooks/useStorefront";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import TopHeader from "./components/TopHeader";
import HomePage from "./pages/HomePage";
import PageRouter from "./pages/PageRouter";
import ShopPanel from "./ShopPanel";
import type { PanelMode } from "./panels/types";
import type { Route } from "./pages/types";
import { pageHeights } from "./pages/routes";

export default function App() {
  const store = useStorefront();
  const {
    route,
    scale,
    catalog,
    cart,
    wishlist,
    panel,
    selected,
    query,
    category,
    infoTitle,
    language,
    notice,
    colorIndex,
    setCart,
    setWishlist,
    setPanel,
    setQuery,
    setColorIndex,
    setLanguage,
    navigate,
    showNotice,
    addToCart,
    toggleWishlist,
    selectProduct,
    updateQuantity,
    handleClick,
    handleKeyDown,
  } = store;
  function openPanel(mode: PanelMode) {
    const routes: Partial<Record<PanelMode, Route>> = {
      cart: "/cart",
      wishlist: "/wishlist",
      quick: "/product",
      signup: "/signup",
    };
    if (routes[mode]) navigate(routes[mode]);
    else setPanel(mode);
  }

  return (
    <>
      <div
        className="page-shell"
        style={{ width: 1440 * scale, height: pageHeights[route] * scale }}
      >
        <div
          className="page"
          style={{
            height: pageHeights[route],
            transform: "scale(" + scale + ")",
            transformOrigin: "top left",
          }}
          onClickCapture={handleClick}
          onKeyDownCapture={handleKeyDown}
        >
          <div className="top-header">
            <TopHeader language={language} />
          </div>
          <SiteHeader {...store} />
          {route === "/" ? (
            <HomePage {...store} />
          ) : (
            <PageRouter
              route={route}
              cart={cart}
              wishlist={wishlist}
              catalog={catalog}
              product={selected}
              navigate={navigate}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              setQuantity={updateQuantity}
              clearCart={() => setCart([])}
              clearWishlist={() => setWishlist([])}
              showNotice={showNotice}
              selectProduct={selectProduct}
            />
          )}
          <div
            className="route-footer-wrap"
            style={{ top: pageHeights[route] - 440 }}
          >
            <SiteFooter
              onSubscribe={() =>
                showNotice(
                  "Subscription requires an email service to be configured.",
                )
              }
            />
          </div>
        </div>
      </div>
      {panel && (
        <ShopPanel
          mode={panel}
          catalog={catalog}
          cart={cart}
          wishlist={wishlist}
          product={selected}
          colorIndex={colorIndex}
          query={query}
          category={category}
          infoTitle={infoTitle}
          language={language}
          onClose={() => setPanel(null)}
          onMode={openPanel}
          onQuery={setQuery}
          onColorIndex={setColorIndex}
          onSelect={selectProduct}
          onAdd={addToCart}
          onWish={toggleWishlist}
          onRemoveWish={(name) =>
            setWishlist((items) => items.filter((item) => item.name !== name))
          }
          onQuantity={updateQuantity}
          onLanguage={setLanguage}
          onNotice={showNotice}
        />
      )}
      {notice && (
        <div className="cart-toast" role="status">
          {notice}
        </div>
      )}
    </>
  );
}
