import type { PanelProps } from "./types";
import ProductRow from "./ProductRow";

export default function CartPanel(props: PanelProps) {
  const total = props.cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0,
  );
  return (
    <>
      {props.cart.length ? (
        props.cart.map((item) => (
          <ProductRow
            key={item.name}
            product={item}
            onSelect={() => props.onSelect(item)}
            action={
              <div className="qty-control">
                <button
                  aria-label={`Remove one ${item.name}`}
                  onClick={() => props.onQuantity(item.name, -1)}
                >
                  −
                </button>
                <span>{item.quantity ?? 1}</span>
                <button
                  aria-label={`Add one ${item.name}`}
                  onClick={() => props.onQuantity(item.name, 1)}
                >
                  +
                </button>
              </div>
            }
          />
        ))
      ) : (
        <p className="panel-empty">
          Your cart is empty. Browse products to add something.
        </p>
      )}
      <div className="panel-total">
        <span>Subtotal</span>
        <strong>${total.toLocaleString()}</strong>
      </div>
      <button
        className="panel-primary"
        disabled={!props.cart.length}
        onClick={() =>
          props.onNotice("Checkout is not connected to a store yet.")
        }
      >
        Checkout
      </button>
    </>
  );
}
