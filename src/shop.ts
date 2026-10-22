export type Product = { name: string; price: number; image: string; quantity?: number; hasColors?: boolean };

export const fallbackCatalog: Product[] = [
  { name: "HAVIT HV-G92 Gamepad", price: 120, image: "/assets/2d7315c9-880c-4078-a72f-0cb56feffc7e.png" },
  { name: "AK-900 Wired Keyboard", price: 960, image: "/assets/2d858331-5c8d-48ba-a327-d66bd0f23696.png" },
  { name: "IPS LCD Gaming Monitor", price: 370, image: "/assets/bcc8389c-3ee1-41e9-b8f3-401b499d7b15.png" },
  { name: "S-Series Comfort Chair", price: 375, image: "/assets/5a92cb64-6f40-4f4c-9eae-6397b2449883.png" },
  { name: "The north coat", price: 260, image: "/assets/41b2df1b-3c74-44b6-940d-1408b8f221bc.png" },
  { name: "Gucci duffle bag", price: 960, image: "/assets/b641f447-e136-4d22-be62-940b7fa89e2f.png" },
  { name: "RGB liquid CPU Cooler", price: 160, image: "/assets/75b1f090-54b3-47a0-b0ee-39cfbb595f91.png" },
  { name: "Small BookSelf", price: 360, image: "/assets/be737e9f-11f8-400a-b894-a7023e6a343e.png" },
  { name: "CANON EOS DSLR Camera", price: 360, image: "/assets/90fec332-190d-4496-895f-8fee7c4357a1.png" },
  { name: "ASUS FHD Gaming Laptop", price: 700, image: "/assets/c9894fff-2c12-432c-90fc-d8883c4805ea.png" },
  { name: "Curology Product Set", price: 500, image: "/assets/13323d94-a5bd-48de-ab2b-16501505b6f1.png" },
  { name: "Kids Electric Car", price: 960, image: "/assets/4d30d3ca-a2af-4323-86da-b820a5764c6d.png" },
];

const ignored = /^(?:-?\d+%|\$[\d,]+|\(\d+\)|NEW|Add To Cart)$/i;

export function readProduct(card: HTMLElement): Product | null {
  const name = Array.from(card.querySelectorAll("p"))
    .map((node) => node.textContent?.trim() ?? "")
    .find((value) => value.length > 3 && !ignored.test(value));
  if (!name) return null;
  const price = Number(card.textContent?.match(/\$([\d,]+)/)?.[1].replaceAll(",", "") ?? 0);
  const image = Array.from(card.querySelectorAll("img"))
    .map((node) => node.getAttribute("src") ?? "")
    .find((src) => src.endsWith(".png")) ?? "";
  return { name, price, image, hasColors: !!card.querySelector('[data-name="Colour Chnage"]') };
}

export function readCatalog(): Product[] {
  const products = Array.from(document.querySelectorAll<HTMLElement>("[data-product-card]"))
    .map(readProduct).filter((product): product is Product => product !== null);
  const names = new Set<string>();
  return products.filter((product) => !names.has(product.name) && !!names.add(product.name));
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
