import type { Product } from "../shop";
export const money = (value: number) => `$${value.toLocaleString()}`;
export const cartTotal = (items: Product[]) =>
  items.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
