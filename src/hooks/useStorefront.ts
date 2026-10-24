import { useEffect, useState } from "react";
import useHeroAutoplay from "./useHeroAutoplay";
import type { PanelMode } from "../panels/types";
import { fallbackCatalog, readCatalog, readProduct } from "../shop";
import type { Product } from "../shop";
import useNavigation from "./useNavigation";
import useNotice from "./useNotice";
import useShoppingLists from "./useShoppingLists";
import type { Route } from "../pages/types";
import { heroPromos, categoryNames } from "../data/home";
import { loadSaved } from "../utils/storage";

// Ghép các hook và nối thao tác từ các component xuất từ Figma.
export default function useStorefront() {
  const { route, scale, navigateTo } = useNavigation();
  const { notice, showNotice } = useNotice();
  const {
    cart,
    wishlist,
    setCart,
    setWishlist,
    addToCart,
    toggleWishlist,
    updateQuantity,
  } = useShoppingLists(showNotice);

  const [catalog, setCatalog] = useState<Product[]>(fallbackCatalog);

  const [panel, setPanel] = useState<PanelMode | null>(null);
  const [selected, setSelected] = useState<Product | null>(() =>
    loadSaved<Product | null>("exclusive-selected", null),
  );
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [language, setLanguage] = useState("English");

  const [flashIndex, setFlashIndex] = useState(0);
  const {
    index: heroIndex,
    setIndex: setHeroIndex,
    setHovered: setHeroHovered,
    setFocused: setHeroFocused,
  } = useHeroAutoplay(heroPromos.length, route === "/");
  const [categoryIndex, setCategoryIndex] = useState(3);
  const [colorIndex, setColorIndex] = useState(0);
  const [categoryMenu, setCategoryMenu] = useState("");
  const [accountMenu, setAccountMenu] = useState(false);
  function navigate(next: Route) {
    navigateTo(next);
    setPanel(null);
    setCategoryMenu("");
    setAccountMenu(false);
  }
  useEffect(() => {
    const products = readCatalog();
    if (products.length) setCatalog(products);
  }, []);

  useEffect(() => {
    if (route === "/") {
      const products = readCatalog();
      if (products.length) setCatalog(products);
    }
  }, [route]);

  useEffect(() => {
    const onPop = () => setPanel(null);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>("[data-product-card]")
      .forEach((card) => {
        const product = readProduct(card);
        const heart = card.querySelector<HTMLElement>(
          '[data-name="Fill Heart"]',
        );
        if (heart && product)
          heart.dataset.saved = String(
            wishlist.some((item) => item.name === product.name),
          );
      });
  }, [wishlist]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPanel(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  function showCatalog(nextCategory = "", nextQuery = "") {
    setCategory(nextCategory);
    setQuery(nextQuery);
    setPanel("search");
  }

  function cardProduct(target: HTMLElement) {
    const card = target.closest<HTMLElement>("[data-product-card]");
    return card ? readProduct(card) : null;
  }
  function selectProduct(product: Product) {
    setSelected(product);
    localStorage.setItem("exclusive-selected", JSON.stringify(product));
    setColorIndex(0);
    navigate("/product");
  }
  // Trang chủ dùng data-* để nhận diện thẻ và nút trong thiết kế gốc.
  // Các trang trong pages/ gọi hàm xử lý trực tiếp qua props.
  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.closest("[data-account-menu]")) {
      setAccountMenu((value) => !value);
      return;
    }
    const routeTarget = target.closest<HTMLElement>("[data-route]");
    if (routeTarget) {
      navigate(routeTarget.dataset.route as Route);
      return;
    }
    const dot = target.closest<HTMLElement>("[data-hero-dot]");
    if (dot) {
      setHeroIndex(Number(dot.dataset.heroDot));
      return;
    }
    const product = cardProduct(target);
    if (target.closest("[data-add-cart]") && product) {
      addToCart(product);
      return;
    }
    const swatch = target.closest<HTMLElement>('[data-name="Colour Chnage"]');
    if (swatch && product) {
      setSelected(product);
      setColorIndex(0);
      setPanel("quick");
      return;
    }
    if (target.closest('[data-name="Fill Heart"]') && product) {
      toggleWishlist(product);
      return;
    }
    if (target.closest('[data-name="Fill Eye"]') && product) {
      selectProduct(product);
      return;
    }
    if (target.closest('[data-name="Wishlist"]')) {
      navigate("/wishlist");
      return;
    }
    if (target.closest('[data-name="Cart1 with buy"]')) {
      navigate("/cart");
      return;
    }
    if (target.closest('[data-name="Component 2"]')) {
      const input = document.querySelector<HTMLInputElement>(
        '[aria-label="Search products"]',
      );
      showCatalog("", input?.value ?? "");
      return;
    }
    const arrow = target.closest<HTMLElement>('[data-name*="Arrow"]');
    if (arrow && /fill with/i.test(arrow.dataset.name ?? "")) {
      const direction = /right/i.test(arrow.dataset.name ?? "") ? 1 : -1;
      if (target.closest(".flash-sales"))
        setFlashIndex((value) => Math.min(2, Math.max(0, value + direction)));
      else if (target.closest(".categories")) {
        const next =
          (categoryIndex + direction + categoryNames.length) %
          categoryNames.length;
        setCategoryIndex(next);
        document
          .querySelectorAll<HTMLElement>("[data-category]")
          .forEach((item) => {
            item.dataset.selected = String(
              item.dataset.category === categoryNames[next],
            );
          });
      } else if (target.closest(".products")) {
        document
          .querySelector(
            direction > 0
              ? '[data-node-id="91:2454"]'
              : '[data-node-id="91:2453"]',
          )
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    const categoryCard = target.closest<HTMLElement>("[data-category]");
    if (categoryCard) {
      const name = categoryCard.dataset.category ?? "";
      setCategoryIndex(Math.max(0, categoryNames.indexOf(name)));
      document
        .querySelectorAll<HTMLElement>("[data-category]")
        .forEach((item) => {
          item.dataset.selected = String(item === categoryCard);
        });
      showCatalog(name);
      return;
    }
    const text = target.textContent?.trim() ?? "";
    if (
      product &&
      (text === "Add To Cart" ||
        target.closest('[class*="bg-black"][class*="bottom-0"]'))
    ) {
      addToCart(product);
      return;
    }
    if (product) {
      selectProduct(product);
      return;
    }
    if (text === "ShopNow") {
      document
        .getElementById("flash-sales")
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (
      target.closest(".top-header") &&
      (text === language || target.closest('[data-name="DropDown"]'))
    ) {
      setPanel("language");
      return;
    }
    if (text === "Shop Now" || target.closest('[data-node-id="45:286"]')) {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (text === "Buy Now!") {
      addToCart({
        name: "JBL Boombox 2",
        price: 299,
        image: "/assets/69e50770-aac2-4764-bbec-091943f91e4c.png",
      });
      navigate("/cart");
      return;
    }
    if (
      text === "View All" ||
      (text === "View All Products" && target.closest(".products"))
    ) {
      showCatalog();
      return;
    }
    if (target.closest(".main-header")) {
      if (text === "Home" || text === "Exclusive") navigate("/");
      else if (text === "Sign Up") navigate("/signup");
      else if (text === "Contact") navigate("/contact");
      else if (text === "About") navigate("/about");
      return;
    }
    if (target.closest(".footer")) {
      if (target.closest("[data-social]")) {
        showNotice("Social links are not configured in this demo.");
        return;
      }
      if (text === "Cart") navigate("/cart");
      else if (text === "Wishlist") navigate("/wishlist");
      else if (text === "Shop") showCatalog();
      else if (text === "Login / Register") navigate("/login");
      else if (text === "Contact") navigate("/contact");
      else if (text === "My Account") navigate("/account");
      else if (["Privacy Policy", "Terms Of Use", "FAQ"].includes(text)) {
        setInfoTitle(text);
        setPanel("info");
      } else if (text.includes("Google Play") || text.includes("App Store"))
        showNotice("The mobile app is not available in this demo.");
    }
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (
      target.matches('[aria-label="Search products"]') &&
      event.key === "Enter"
    ) {
      event.preventDefault();
      showCatalog("", (target as HTMLInputElement).value);
    } else if (
      (event.key === "Enter" || event.key === " ") &&
      target.getAttribute("role") === "button"
    ) {
      event.preventDefault();
      target.click();
    }
  }
  return {
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
    flashIndex,
    heroIndex,
    categoryMenu,
    accountMenu,
    colorIndex,
    setCart,
    setWishlist,
    setPanel,
    setQuery,
    setColorIndex,
    setLanguage,
    setCategoryMenu,
    setHeroHovered,
    setHeroFocused,
    navigate,
    showNotice,
    showCatalog,
    addToCart,
    toggleWishlist,
    selectProduct,
    updateQuantity,
    handleClick,
    handleKeyDown,
  };
}
export type Storefront = ReturnType<typeof useStorefront>;
