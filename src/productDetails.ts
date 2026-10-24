import type { Product } from "./shop";
import type { ProductPhoto } from "./components/ProductGallery";

// Thêm ảnh từng góc ở đây, theo đúng tên sản phẩm. Gallery tự tạo thumbnail.
// Ví dụ: "Tên sản phẩm": [{ src: "/assets/mat-truoc.png", label: "Front view" }, ...]
export const productPhotos: Record<string, ProductPhoto[]> = {};

// Nội dung giới thiệu theo loại sản phẩm; không tự gán thông số chưa được cung cấp.
const descriptions = [
  {
    match: /gamepad|controller/i,
    category: "Gaming",
    text: "Bring your favourite games to a familiar handheld layout. Two thumbsticks, a directional pad and grouped action buttons put movement and actions within reach.",
    features: [
      "Two-handed grip for your gaming setup",
      "Check platform and game compatibility before ordering",
    ],
  },
  {
    match: /keyboard/i,
    category: "Computers",
    text: "A wired keyboard for a desktop gaming or everyday workspace. The full keyboard layout keeps typing, shortcuts and game controls together in one place.",
    features: [
      "Wired connection for your desk setup",
      "Check connector type and keyboard layout before ordering",
    ],
  },
  {
    match: /monitor/i,
    category: "Computers",
    text: "Build your desktop setup around a dedicated gaming display. Use it for games, creative work or a larger everyday viewing area alongside your computer.",
    features: [
      "Desktop display with a separate stand",
      "Confirm screen size, refresh rate and video ports before ordering",
    ],
  },
  {
    match: /chair/i,
    category: "Home & Lifestyle",
    text: "A comfortable-looking addition to a home office, study corner or gaming desk. Compare the seat, backrest and finish in the product photo to choose the style that suits your space.",
    features: [
      "Choose the displayed chair colour before adding it to your cart",
      "Confirm dimensions, adjustment options and load capacity before ordering",
    ],
  },
  {
    match: /coat|jacket/i,
    category: "Fashion",
    text: "Layer this piece over your everyday outfit for a coordinated seasonal look. Explore the photographed finish and silhouette, then choose a size for your preferred fit.",
    features: [
      "Easy to combine with casual everyday outfits",
      "Check the size guide and garment care label",
    ],
  },
  {
    match: /bag/i,
    category: "Fashion",
    text: "A duffle-style bag to complement a travel or daily outfit. Its structured silhouette and carry handles make it a versatile addition to your accessories collection.",
    features: [
      "Duffle silhouette with carry handles",
      "Confirm measurements and material before ordering",
    ],
  },
  {
    match: /cooler/i,
    category: "Computers",
    text: "Complete your desktop build with a liquid CPU cooler. Consider how its radiator and cooling assembly will fit into your case alongside your other components.",
    features: [
      "Designed for a desktop cooling setup",
      "Verify CPU socket, radiator size and case clearance",
    ],
  },
  {
    match: /books[eh]lf/i,
    category: "Home & Lifestyle",
    text: "Create a dedicated place for books, small decorative objects and everyday essentials. The open shelf design makes your collection easy to see and arrange.",
    features: [
      "Open shelves for display and organisation",
      "Check dimensions and assembly instructions",
    ],
  },
  {
    match: /camera|canon/i,
    category: "Photography",
    text: "Explore everyday photography, portraits and creative compositions with a DSLR-style camera. Review the pictured body and lens, and confirm the package contents for your intended setup.",
    features: [
      "Camera and lens shown in the product image",
      "Confirm included lens, battery and memory-card requirements",
    ],
  },
  {
    match: /laptop/i,
    category: "Computers",
    text: "Bring your gaming, study and everyday work into a portable setup. A built-in display and keyboard let you move between a desk and other workspaces.",
    features: [
      "All-in-one portable computer format",
      "Confirm processor, graphics, memory and storage configuration",
    ],
  },
  {
    match: /curology/i,
    category: "Health & Beauty",
    text: "Organise your skincare routine around the products shown in this set. Review each label and choose products suited to your existing routine.",
    features: [
      "Skincare set as pictured",
      "Check ingredients, quantities and usage directions on the packaging",
    ],
  },
  {
    match: /dog|food/i,
    category: "Groceries & Pets",
    text: "Choose food for your pet with attention to the product label, life stage and portion guidance. Store the pack according to the instructions after opening.",
    features: [
      "Packaged pet food as pictured",
      "Check ingredients, pack weight and feeding guidance",
    ],
  },
  {
    match: /car/i,
    category: "Kids & Toys",
    text: "A car-inspired ride-on toy for imaginative play. Review the pictured design and make sure its intended age range and dimensions suit the child and available space.",
    features: [
      "Car-inspired styling",
      "Confirm age guidance, battery details and supervision instructions",
    ],
  },
  {
    match: /soccer|cleat/i,
    category: "Sports",
    text: "Complete your football kit with a pair of sport-focused shoes. Choose a suitable size and sole for your playing surface before heading onto the pitch.",
    features: [
      "Sport-focused shape and sole",
      "Check sizing and intended playing surface",
    ],
  },
];

export function getProductDetails(item: Product) {
  const description = descriptions.find((entry) =>
    entry.match.test(item.name),
  ) || {
    category: "Shop",
    text: `Explore ${item.name} in the product photo and review its design before adding it to your collection.`,
    features: [
      "Product appearance as pictured",
      "Confirm specifications and package contents before ordering",
    ],
  };
  const suppliedPhotos = item.photos?.length
    ? item.photos
    : productPhotos[item.name];
  const photos: ProductPhoto[] = suppliedPhotos?.length
    ? suppliedPhotos
    : [{ src: item.image, label: "Product overview" }];
  return {
    ...description,
    photos,
    hasSizes: /coat|jacket|soccer|cleat/i.test(item.name),
  };
}
