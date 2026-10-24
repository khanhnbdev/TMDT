import { useState } from "react";
import type { PageProps } from "./types";
import type { Product } from "../shop";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "../components/ProductCard";
import { money } from "../utils/pricing";
import ProductGallery from "../components/ProductGallery";
import { getProductDetails } from "../productDetails";

export default function ProductPage(props: PageProps) {
  const item = props.product || props.catalog[0];
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  if (!item)
    return (
      <main className="route-main">
        <Breadcrumb items={["Product"]} navigate={props.navigate} />
        <p>Product unavailable.</p>
      </main>
    );
  const details = getProductDetails(item);
  const saved = props.wishlist.some((product) => product.name === item.name);
  return (
    <main className="route-main details-page">
      <Breadcrumb
        items={[details.category, item.name]}
        navigate={props.navigate}
      />
      <div className="details-grid">
        <ProductGallery
          key={item.name}
          name={item.name}
          photos={details.photos}
        />
        <div className="detail-info">
          <h1>{item.name}</h1>
          <div className="rating">
            ★★★★★{" "}
            <span>
              (150 Reviews) | <span className="in-stock">In Stock</span>
            </span>
          </div>
          <div className="detail-price">{money(item.price)}</div>
          <p>{details.text}</p>
          <ul className="product-features">
            {details.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <hr />
          {details.hasSizes && (
            <div className="detail-sizes">
              Size:{" "}
              {["XS", "S", "M", "L", "XL"].map((value) => (
                <button
                  key={value}
                  aria-pressed={size === value}
                  className={size === value ? "active" : ""}
                  onClick={() => setSize(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          )}
          <div className="detail-buy">
            <div className="quantity-stepper">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="red-button"
              onClick={() => {
                for (let i = 0; i < quantity; i++) props.addToCart(item);
                props.navigate("/cart");
              }}
            >
              Buy Now
            </button>
            <button
              className="outline-button detail-wishlist"
              aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={saved}
              onClick={() => props.toggleWishlist(item)}
            >
              {saved ? "♥" : "♡"}
            </button>
          </div>
          <div className="detail-delivery">
            <div>
              🚚 <strong>Free Delivery</strong>
              <small>Enter your postal code for Delivery Availability</small>
            </div>
            <div>
              ↩ <strong>Return Delivery</strong>
              <small>Free 30 Days Delivery Returns. Details</small>
            </div>
          </div>
        </div>
      </div>
      <div className="related-heading">
        <span className="red-marker" /> Related Item
      </div>
      <div className="route-products">
        {props.catalog
          .filter((product) => product.name !== item.name)
          .slice(0, 4)
          .map((product) => (
            <ProductCard
              key={product.name}
              item={product}
              {...props}
              saved={props.wishlist.some(
                (entry) => entry.name === product.name,
              )}
            />
          ))}
      </div>
    </main>
  );
}
