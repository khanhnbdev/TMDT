import { useEffect, useState } from "react";
import ShopPanel from "./ShopPanel";
import type { PanelMode } from "./ShopPanel";
import { fallbackCatalog, readCatalog, readProduct } from "./shop";
import type { Product } from "./shop";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import Categories from "./components/Categories";
import BestSelling from "./components/BestSelling";
import MusicBanner from "./components/MusicBanner";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Pages, { pageHeights } from "./Pages";
import type { Route } from "./Pages";

const departments = [
  "Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle",
  "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets",
  "Health & Beauty"
];

function Services() {
  const items = [
    ["🚚", "FREE AND FAST DELIVERY", "Free delivery for all orders over $140"],
    ["☎", "24/7 CUSTOMER SERVICE", "Friendly 24/7 customer support"],
    ["✓", "MONEY BACK GUARANTEE", "We return money within 30 days"],
  ];
  return <div className="services">{items.map(([icon, title, subtitle]) =>
    <div className="service" key={title}><div className="service-icon">{icon}</div><strong>{title}</strong><span>{subtitle}</span></div>
  )}</div>;
}

function Footer({ onSubscribe }: { onSubscribe: (email: string) => void }) {
  return <footer className="footer">
    <div className="footer-columns">
      <div><h3>Exclusive</h3><h4>Subscribe</h4><p>Get 10% off your first order</p><form onSubmit={event => { event.preventDefault(); const input = event.currentTarget.querySelector("input")!; onSubscribe(input.value); input.value = ""; }}><input type="email" required placeholder="Enter your email" aria-label="Email address" /><button aria-label="Subscribe">➤</button></form></div>
      <div><h4>Support</h4><p>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p><a className="footer-link" href="mailto:exclusive@gmail.com">exclusive@gmail.com</a><a className="footer-link" href="tel:+88015888889999">+88015-88888-9999</a></div>
      <div><h4>Account</h4>{["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((label) => <button className="footer-link" key={label}>{label}</button>)}</div>
      <div><h4>Quick Link</h4>{["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((label) => <button className="footer-link" key={label}>{label}</button>)}</div>
      <div><h4>Download App</h4><small>Save $3 with App New User Only</small><div className="app-placeholder"><button>▦ &nbsp; Google Play</button><button>▦ &nbsp; App Store</button></div><div className="social-links">{["◉", "𝕏", "◎", "in"].map((label) => <button key={label} data-social={label} aria-label={"Open social channel " + label}>{label}</button>)}</div></div>
    </div>
    <div className="copyright">© Copyright Rimel 2022. All rights reserved</div>
  </footer>;
}

function loadSaved(key: string): Product[] {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; }
}

const heroPromos = [
  { eyebrow: "Featured Collection", title: "Discover New Arrivals", image: "/assets/9674ff14-663d-447a-950c-7f02c271b2f1.png" },
  { eyebrow: "Gaming Essentials", title: "Play More For Less", image: "/assets/2d7315c9-880c-4078-a72f-0cb56feffc7e.png" },
  null,
  { eyebrow: "Sound & Music", title: "Make Every Beat Count", image: "/assets/69e50770-aac2-4764-bbec-091943f91e4c.png" },
  { eyebrow: "Best Sellers", title: "Find Your Next Favorite", image: "/assets/41b2df1b-3c74-44b6-940d-1408b8f221bc.png" },
];

export default function App() {
  const [route, setRoute] = useState<Route>(() => (Object.hasOwn(pageHeights, window.location.pathname) ? window.location.pathname : "/404") as Route);
  const [scale, setScale] = useState(() => Math.min(1, document.documentElement.clientWidth / 1440));
  const [catalog, setCatalog] = useState<Product[]>(fallbackCatalog);
  const [cart, setCart] = useState<Product[]>(() => loadSaved("exclusive-cart"));
  const [wishlist, setWishlist] = useState<Product[]>(() => loadSaved("exclusive-wishlist"));
  const [panel, setPanel] = useState<PanelMode | null>(null);
  const [selected, setSelected] = useState<Product | null>(() => { try { return JSON.parse(localStorage.getItem("exclusive-selected") || "null"); } catch { return null; } });
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [language, setLanguage] = useState("English");
  const [notice, setNotice] = useState("");
  const [flashIndex, setFlashIndex] = useState(0);
  const [heroIndex, setHeroIndex] = useState(2);
  const [categoryIndex, setCategoryIndex] = useState(3);
  const [colorIndex, setColorIndex] = useState(0);
  const [categoryMenu, setCategoryMenu] = useState("");
  const [accountMenu, setAccountMenu] = useState(false);
  const categoryNames = ["Phone", "Computer", "SmartWatch", "Camera", "Headphone", "Gaming"];

  function navigate(next: Route) {
    if (window.location.pathname !== next) window.history.pushState({}, "", next);
    setRoute(next);
    setPanel(null);
    setCategoryMenu("");
    setAccountMenu(false);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const update = () => setScale(Math.min(1, document.documentElement.clientWidth / 1440));
    window.addEventListener("resize", update);
    const products = readCatalog();
    if (products.length) setCatalog(products);
    return () => window.removeEventListener("resize", update);
  }, []);
  useEffect(() => { localStorage.setItem("exclusive-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("exclusive-wishlist", JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { if (route === "/") { const products = readCatalog(); if (products.length) setCatalog(products); } }, [route]);
  useEffect(() => { document.title = `Exclusive — ${route === "/" ? "Home" : route.slice(1).replace(/^./, letter => letter.toUpperCase())}`; }, [route]);
  useEffect(() => {
    const onPop = () => { setRoute((Object.hasOwn(pageHeights, window.location.pathname) ? window.location.pathname : "/404") as Route); setPanel(null); };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-product-card]").forEach((card) => {
      const product = readProduct(card);
      const heart = card.querySelector<HTMLElement>('[data-name="Fill Heart"]');
      if (heart && product) heart.dataset.saved = String(wishlist.some((item) => item.name === product.name));
    });
  }, [wishlist]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setPanel(null); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  function showNotice(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  }
  function showCatalog(nextCategory = "", nextQuery = "") {
    setCategory(nextCategory);
    setQuery(nextQuery);
    setPanel("search");
  }
  function addToCart(product: Product) {
    setCart((items) => {
      const exists = items.find((item) => item.name === product.name);
      return exists ? items.map((item) => item.name === product.name ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item) : [...items, { ...product, quantity: 1 }];
    });
    showNotice(product.name + " added to cart");
  }
  function toggleWishlist(product: Product) {
    const exists = wishlist.some((item) => item.name === product.name);
    setWishlist((items) => exists ? items.filter((item) => item.name !== product.name) : [...items, product]);
    showNotice(exists ? "Removed from wishlist" : product.name + " saved");
  }
  function cardProduct(target: HTMLElement) {
    const card = target.closest<HTMLElement>("[data-product-card]");
    return card ? readProduct(card) : null;
  }
  function selectProduct(product: Product) { setSelected(product); localStorage.setItem("exclusive-selected", JSON.stringify(product)); setColorIndex(0); navigate("/product"); }
  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.closest("[data-account-menu]")) { setAccountMenu(value => !value); return; }
    const routeTarget = target.closest<HTMLElement>("[data-route]");
    if (routeTarget) { navigate(routeTarget.dataset.route as Route); return; }
    const dot = target.closest<HTMLElement>("[data-hero-dot]");
    if (dot) { setHeroIndex(Number(dot.dataset.heroDot)); return; }
    const product = cardProduct(target);
    const swatch = target.closest<HTMLElement>('[data-name="Colour Chnage"]');
    if (swatch && product) { setSelected(product); setColorIndex(0); setPanel("quick"); return; }
    if (target.closest('[data-name="Fill Heart"]') && product) { toggleWishlist(product); return; }
    if (target.closest('[data-name="Fill Eye"]') && product) { selectProduct(product); return; }
    if (target.closest('[data-name="Wishlist"]')) { navigate("/wishlist"); return; }
    if (target.closest('[data-name="Cart1 with buy"]')) { navigate("/cart"); return; }
    if (target.closest('[data-name="Component 2"]')) {
      const input = document.querySelector<HTMLInputElement>('[aria-label="Search products"]');
      showCatalog("", input?.value ?? "");
      return;
    }
    const arrow = target.closest<HTMLElement>('[data-name*="Arrow"]');
    if (arrow && /fill with/i.test(arrow.dataset.name ?? "")) {
      const direction = /right/i.test(arrow.dataset.name ?? "") ? 1 : -1;
      if (target.closest(".flash-sales")) setFlashIndex((value) => Math.min(2, Math.max(0, value + direction)));
      else if (target.closest(".categories")) {
        const next = (categoryIndex + direction + categoryNames.length) % categoryNames.length;
        setCategoryIndex(next);
        document.querySelectorAll<HTMLElement>("[data-category]").forEach((item) => { item.dataset.selected = String(item.dataset.category === categoryNames[next]); });
      } else if (target.closest(".products")) {
        document.querySelector(direction > 0 ? '[data-node-id="91:2454"]' : '[data-node-id="91:2453"]')?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    const categoryCard = target.closest<HTMLElement>("[data-category]");
    if (categoryCard) {
      const name = categoryCard.dataset.category ?? "";
      setCategoryIndex(Math.max(0, categoryNames.indexOf(name)));
      document.querySelectorAll<HTMLElement>("[data-category]").forEach((item) => { item.dataset.selected = String(item === categoryCard); });
      showCatalog(name);
      return;
    }
    const text = target.textContent?.trim() ?? "";
    if (product && (text === "Add To Cart" || target.closest('[class*="bg-black"][class*="bottom-0"]'))) { addToCart(product); return; }
    if (product) { selectProduct(product); return; }
    if (text === "ShopNow") { document.getElementById("flash-sales")?.scrollIntoView({ behavior: "smooth" }); return; }
    if (target.closest(".top-header") && (text === language || target.closest('[data-name="DropDown"]'))) { setPanel("language"); return; }
    if (text === "Shop Now" || target.closest('[data-node-id="45:286"]')) { document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); return; }
    if (text === "Buy Now!") {
      addToCart({ name: "JBL Boombox 2", price: 299, image: "/assets/69e50770-aac2-4764-bbec-091943f91e4c.png" });
      navigate("/cart");
      return;
    }
    if (text === "View All" || (text === "View All Products" && target.closest(".products"))) { showCatalog(); return; }
    if (target.closest(".main-header")) {
      if (text === "Home" || text === "Exclusive") navigate("/");
      else if (text === "Sign Up") navigate("/signup");
      else if (text === "Contact") navigate("/contact");
      else if (text === "About") navigate("/about");
      return;
    }
    if (target.closest(".footer")) {
      if (target.closest("[data-social]")) { showNotice("Social links are not configured in this demo."); return; }
      if (text === "Cart") navigate("/cart");
      else if (text === "Wishlist") navigate("/wishlist");
      else if (text === "Shop") showCatalog();
      else if (text === "Login / Register") navigate("/login");
      else if (text === "Contact") navigate("/contact");
      else if (text === "My Account") navigate("/account");
      else if (["Privacy Policy", "Terms Of Use", "FAQ"].includes(text)) { setInfoTitle(text); setPanel("info"); }
      else if (text.includes("Google Play") || text.includes("App Store")) showNotice("The mobile app is not available in this demo.");
    }
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.matches('[aria-label="Search products"]') && event.key === "Enter") {
      event.preventDefault();
      showCatalog("", (target as HTMLInputElement).value);
    } else if ((event.key === "Enter" || event.key === " ") && target.getAttribute("role") === "button") {
      event.preventDefault();
      target.click();
    }
  }

  return <>
    <div className="page-shell" style={{ width: 1440 * scale, height: pageHeights[route] * scale }}>
      <div className="page" style={{ height: pageHeights[route], transform: "scale(" + scale + ")", transformOrigin: "top left" }} onClickCapture={handleClick} onKeyDownCapture={handleKeyDown}>
        <div className="top-header"><TopHeader language={language} /></div>
        <div className="main-header">{route === "/" ? <><Header />{localStorage.getItem("exclusive-session") === "1" && <button className="home-account-button" data-account-menu aria-label="Account menu">♙</button>}</> : <div className="route-header"><button className="route-logo" data-route="/">Exclusive</button><nav><button data-route="/">Home</button><button data-route="/contact" className={route === "/contact" ? "active" : ""}>Contact</button><button data-route="/about" className={route === "/about" ? "active" : ""}>About</button><button data-route="/signup" className={route === "/signup" ? "active" : ""}>Sign Up</button></nav><div className="route-header-search"><input aria-label="Search products" placeholder="What are you looking for?" /><button aria-label="Search" onClick={() => { const input = document.querySelector<HTMLInputElement>('.route-header-search input'); showCatalog("", input?.value ?? ""); }}>⌕</button></div>{route !== "/signup" && route !== "/login" && <div className="route-header-icons"><button data-route="/wishlist" aria-label="Open wishlist"><img src="/assets/3931428d-caaa-4652-8c0d-380a5cf9c543.svg" alt="" /></button><button data-route="/cart" aria-label="Open cart"><img src="/assets/d253498a-d73d-435a-a7ef-72fdd8f7150a.svg" alt="" /></button><button data-account-menu aria-label="Account menu"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M4 21c0-5 3-8 8-8s8 3 8 8" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></button></div>}</div>}{cart.length > 0 && route !== "/signup" && route !== "/login" && <span className="cart-count">{cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0)}</span>}</div>
        {accountMenu && <div className="account-dropdown">{localStorage.getItem("exclusive-session") === "1" ? <><button data-route="/account">♙ &nbsp; Manage My Account</button><button data-route="/cart">▣ &nbsp; My Order</button><button data-route="/wishlist">♡ &nbsp; My Wishlist</button><button onClick={() => { localStorage.removeItem("exclusive-session"); navigate("/login"); showNotice("Logged out"); }}>↪ &nbsp; Logout</button></> : <><button data-route="/login">↪ &nbsp; Log In</button><button data-route="/signup">♙ &nbsp; Create Account</button><button data-route="/wishlist">♡ &nbsp; My Wishlist</button></>}</div>}
        <div className="header-rule" />
        {route === "/" ? <>
        <aside className="departments">{departments.map((label, i) =>
          <a href="#products" key={label} onClick={(event) => { event.preventDefault(); if (i < 2) setCategoryMenu(categoryMenu === label ? "" : label); else showCatalog(label); }}>{label}{i < 2 && <span>›</span>}</a>
        )}</aside>
        {categoryMenu && <div className="category-dropdown">{(categoryMenu.startsWith("Woman") ? ["Dresses", "Tops", "Handbags", "Footwear"] : ["Clothing", "Shoes", "Watches", "Accessories"]).map(label => <button key={label} onClick={() => { setCategoryMenu(""); showCatalog(categoryMenu); }}>{label}</button>)}</div>}
        <div className="hero-divider" />
        <section className="hero">
          {heroIndex === 2 ? <Hero /> : <div className="alternate-hero">
            <div><p>{heroPromos[heroIndex]?.eyebrow}</p><h2>{heroPromos[heroIndex]?.title}</h2><button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>Shop Now →</button></div>
            <img src={heroPromos[heroIndex]?.image} alt="" />
          </div>}
          <div className="hero-dots">{heroPromos.map((_, index) => <button key={index} data-hero-dot={index} className={heroIndex === 2 ? "" : index === heroIndex ? "selected" : ""} aria-label={"Show promotion " + (index + 1)} />)}</div>
        </section>
        <section id="flash-sales" className="flash-sales" style={{ "--flash-offset": -300 * flashIndex + "px" } as React.CSSProperties}><FlashSales /></section>
        <div className="sales-button"><a href="#products">View All Products</a></div>
        <div className="separator separator-one" />
        <section id="categories" className="categories"><Categories /></section>
        <div className="separator separator-two" />
        <section className="best-selling"><BestSelling /></section>
        <section className="music-banner"><MusicBanner /></section>
        <section id="products" className="products"><Products /></section>
        <section className="featured"><Featured /></section>
        <Services />
        <a className="back-top" href="#" aria-label="Back to top">↑</a>
        </> : <Pages route={route} cart={cart} wishlist={wishlist} catalog={catalog} product={selected} navigate={navigate} addToCart={addToCart} toggleWishlist={toggleWishlist} setQuantity={(name, delta) => setCart((items) => items.map((item) => item.name === name ? { ...item, quantity: (item.quantity ?? 1) + delta } : item).filter((item) => (item.quantity ?? 1) > 0))} clearCart={() => setCart([])} clearWishlist={() => setWishlist([])} showNotice={showNotice} selectProduct={selectProduct} />}
        <div className="route-footer-wrap" style={{ top: pageHeights[route] - 440 }}><Footer onSubscribe={() => showNotice("Subscription requires an email service to be configured.")} /></div>
      </div>
    </div>
    {panel && <ShopPanel mode={panel} catalog={catalog} cart={cart} wishlist={wishlist} product={selected} colorIndex={colorIndex} query={query} category={category} infoTitle={infoTitle} language={language} onClose={() => setPanel(null)} onMode={(mode) => { const routes: Partial<Record<PanelMode, Route>> = { cart: "/cart", wishlist: "/wishlist", quick: "/product", signup: "/signup" }; if (routes[mode]) navigate(routes[mode]); else setPanel(mode); }} onQuery={setQuery} onColorIndex={setColorIndex} onSelect={selectProduct} onAdd={addToCart} onWish={toggleWishlist} onRemoveWish={(name) => setWishlist((items) => items.filter((item) => item.name !== name))} onQuantity={(name, delta) => setCart((items) => items.map((item) => item.name === name ? { ...item, quantity: (item.quantity ?? 1) + delta } : item).filter((item) => (item.quantity ?? 1) > 0))} onLanguage={setLanguage} onNotice={showNotice} />}
    {notice && <div className="cart-toast" role="status">{notice}</div>}
  </>;
}
