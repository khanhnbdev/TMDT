import type { Product } from "../shop";
export type PanelMode =
  "search" | "cart" | "wishlist" | "quick" | "info" | "signup" | "language";
export type PanelProps = {
  mode: PanelMode;
  catalog: Product[];
  cart: Product[];
  wishlist: Product[];
  product: Product | null;
  colorIndex: number;
  query: string;
  category: string;
  infoTitle: string;
  language: string;
  onClose: () => void;
  onMode: (mode: PanelMode) => void;
  onQuery: (query: string) => void;
  onSelect: (product: Product) => void;
  onColorIndex: (index: number) => void;
  onAdd: (product: Product) => void;
  onWish: (product: Product) => void;
  onRemoveWish: (name: string) => void;
  onQuantity: (name: string, delta: number) => void;
  onLanguage: (language: string) => void;
  onNotice: (text: string) => void;
};
