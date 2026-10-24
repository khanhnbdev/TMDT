import type { PageProps } from "../pages/types";
import type { Product } from "../shop";
import { money } from "../utils/pricing";

export default function ProductCard({
  item,
  addToCart,
  selectProduct,
  toggleWishlist,
  saved,
}: {
  item: Product;
  addToCart: PageProps["addToCart"];
  selectProduct: PageProps["selectProduct"];
  toggleWishlist: PageProps["toggleWishlist"];
  saved: boolean;
}) {
  return (
    <article className="route-product-card">
      <div className="route-product-image">
        <button
          className="mini-heart"
          onClick={() => toggleWishlist(item)}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          {saved ? "♥" : "♡"}
        </button>
        <button
          className="product-image-button"
          onClick={() => selectProduct(item)}
        >
          <img src={item.image} alt={item.name} />
        </button>
        <button className="black-add" onClick={() => addToCart(item)}>
          Add To Cart
        </button>
      </div>
      <button className="product-name-link" onClick={() => selectProduct(item)}>
        {item.name}
      </button>
      <div className="product-price">{money(item.price)}</div>
      <div className="rating">
        ★★★★★ <span>(65)</span>
      </div>
    </article>
  );
}
