import { useEffect, useState } from "react";
import type { Product } from "../shop";
import { loadSaved } from "../utils/storage";

// Giỏ hàng và yêu thích được dùng chung giữa tất cả các trang.
export default function useShoppingLists(
  showNotice: (message: string) => void,
) {
  const [cart, setCart] = useState<Product[]>(() =>
    loadSaved<Product[]>("exclusive-cart", []),
  );
  const [wishlist, setWishlist] = useState<Product[]>(() =>
    loadSaved<Product[]>("exclusive-wishlist", []),
  );
  function addToCart(product: Product) {
    setCart((items) => {
      const exists = items.find((item) => item.name === product.name);
      return exists
        ? items.map((item) =>
            item.name === product.name
              ? { ...item, quantity: (item.quantity ?? 1) + 1 }
              : item,
          )
        : [...items, { ...product, quantity: 1 }];
    });
    showNotice(product.name + " added to cart");
  }
  function toggleWishlist(product: Product) {
    const exists = wishlist.some((item) => item.name === product.name);
    setWishlist((items) =>
      exists
        ? items.filter((item) => item.name !== product.name)
        : [...items, product],
    );
    showNotice(
      exists
        ? product.name + " removed from wishlist"
        : "♥ " + product.name + " added to wishlist",
    );
  }
  useEffect(() => {
    localStorage.setItem("exclusive-cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("exclusive-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  function updateQuantity(name: string, delta: number) {
    setCart((items) =>
      items
        .map((item) =>
          item.name === name
            ? { ...item, quantity: (item.quantity ?? 1) + delta }
            : item,
        )
        .filter((item) => (item.quantity ?? 1) > 0),
    );
  }
  return {
    cart,
    wishlist,
    setCart,
    setWishlist,
    addToCart,
    toggleWishlist,
    updateQuantity,
  };
}
