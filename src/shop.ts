import type { Product } from "./types/product";
export type { Product } from "./types/product";
export { fallbackCatalog } from "./data/products";

const ignored = /^(?:-?\d+%|\$[\d,]+|\(\d+\)|NEW|Add To Cart)$/i;

export function readProduct(card: HTMLElement): Product | null {
  const name = Array.from(card.querySelectorAll("p"))
    .map((node) => node.textContent?.trim() ?? "")
    .find((value) => value.length > 3 && !ignored.test(value));
  if (!name) return null;
  const price = Number(
    card.textContent?.match(/\$([\d,]+)/)?.[1].replaceAll(",", "") ?? 0,
  );
  const image =
    Array.from(card.querySelectorAll("img"))
      .map((node) => node.getAttribute("src") ?? "")
      .find((src) => src.endsWith(".png")) ?? "";
  return {
    name,
    price,
    image,
    hasColors: !!card.querySelector('[data-name="Colour Chnage"]'),
  };
}

export function readCatalog(): Product[] {
  const products = Array.from(
    document.querySelectorAll<HTMLElement>("[data-product-card]"),
  )
    .map(readProduct)
    .filter((product): product is Product => product !== null);
  const names = new Set<string>();
  return products.filter(
    (product) => !names.has(product.name) && !!names.add(product.name),
  );
}

export function categoryMatches(product: Product, category: string) {
  const terms: Record<string, RegExp> = {
    Phone: /phone/i,
    Computer: /laptop|keyboard|monitor|computer|cooler/i,
    SmartWatch: /watch/i,
    Camera: /camera|canon/i,
    Headphone: /headphone|speaker/i,
    Gaming: /gamepad|gaming|controller|playstation/i,
    Electronics: /laptop|keyboard|monitor|cooler|camera|gamepad/i,
    "Woman’s Fashion": /coat|jacket|bag|perfume/i,
    "Men’s Fashion": /coat|jacket|bag|shoe|cleat/i,
    "Home & Lifestyle": /chair|bookshelf|cooler/i,
    Medicine: /curology/i,
    "Sports & Outdoor": /cleat|soccer/i,
    "Baby’s & Toys": /kids|car/i,
    "Groceries & Pets": /dog|food/i,
    "Health & Beauty": /curology|perfume/i,
  };
  return (terms[category] ?? /./).test(product.name);
}
