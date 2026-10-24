import type { PanelProps } from "./types";
import ProductRow from "./ProductRow";

export default function WishlistPanel(props: PanelProps) {
  return (
    <>
      {props.wishlist.length ? (
        props.wishlist.map((item) => (
          <ProductRow
            key={item.name}
            product={item}
            onSelect={() => props.onSelect(item)}
            action={
              <div className="panel-row-actions">
                <button
                  className="panel-link"
                  onClick={() => props.onAdd(item)}
                >
                  Add to cart
                </button>
                <button
                  className="panel-link"
                  onClick={() => props.onRemoveWish(item.name)}
                >
                  Remove
                </button>
              </div>
            }
          />
        ))
      ) : (
        <p className="panel-empty">
          No saved products yet. Tap a heart on a product card.
        </p>
      )}
    </>
  );
}
