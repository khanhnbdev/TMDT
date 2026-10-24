import type { PageProps } from "./types";
import ProductCard from "../components/ProductCard";

export default function WishlistPage(props: PageProps) {
  const picks = props.catalog
    .filter((item) => !props.wishlist.some((saved) => saved.name === item.name))
    .slice(0, 4);
  return (
    <main className="route-main wishlist-page">
      <div className="section-title-row">
        <h1>Wishlist ({props.wishlist.length})</h1>
        <button
          className="outline-button"
          onClick={() => {
            props.wishlist.forEach(props.addToCart);
            props.clearWishlist();
            props.showNotice("Wishlist items moved to cart");
          }}
        >
          Move All To Bag
        </button>
      </div>
      <div className="route-products">
        {props.wishlist.length ? (
          props.wishlist
            .slice(0, 4)
            .map((item) => (
              <ProductCard key={item.name} item={item} {...props} saved />
            ))
        ) : (
          <div className="empty-state">
            Your wishlist is empty.{" "}
            <button onClick={() => props.navigate("/")}>
              Explore products
            </button>
          </div>
        )}
      </div>
      <div className="recommend-heading">
        <div>
          <span className="red-marker" /> Just For You
        </div>
        <button className="outline-button" onClick={() => props.navigate("/")}>
          See All
        </button>
      </div>
      <div className="route-products">
        {picks.map((item) => (
          <ProductCard key={item.name} item={item} {...props} saved={false} />
        ))}
      </div>
    </main>
  );
}
