import type { PanelProps } from "./types";
export default function QuickPanel(props: PanelProps) {
  if (!props.product) return null;
  return (
    <div className="quick-product">
      {props.product.image && (
        <img src={props.product.image} alt={props.product.name} />
      )}
      <h3>{props.product.name}</h3>
      <strong>${props.product.price.toLocaleString()}</strong>
      <p className="panel-muted">
        Explore this item from the Exclusive collection.
      </p>
      {props.product.hasColors && (
        <div className="panel-colors">
          <span>Color option:</span>
          {[0, 1].map((index) => (
            <button
              key={index}
              className={props.colorIndex === index ? "active" : ""}
              onClick={() => props.onColorIndex(index)}
              aria-label={"Choose color option " + (index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      <button
        className="panel-primary"
        onClick={() => props.onAdd(props.product!)}
      >
        Add to cart
      </button>
      <button
        className="panel-secondary"
        onClick={() => props.onWish(props.product!)}
      >
        Add to wishlist
      </button>
    </div>
  );
}
