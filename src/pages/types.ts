import type { Product } from "../shop";
export type Route =
  | "/"
  | "/signup"
  | "/login"
  | "/wishlist"
  | "/cart"
  | "/checkout"
  | "/account"
  | "/about"
  | "/contact"
  | "/product"
  | "/404";
export type PageProps = {
  route: Route;
  cart: Product[];
  wishlist: Product[];
  catalog: Product[];
  product: Product | null;
  navigate: (route: Route) => void;
  addToCart: (product: Product) => void;
  toggleWishlist: (product: Product) => void;
  setQuantity: (name: string, delta: number) => void;
  clearCart: () => void;
  clearWishlist: () => void;
  showNotice: (message: string) => void;
  selectProduct: (product: Product) => void;
};
