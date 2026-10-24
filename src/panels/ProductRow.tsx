import type { Product } from "../shop";
export default function ProductRow({
  product,
  onSelect,
  action,
}: {
  product: Product;
  onSelect: () => void;
  action?: React.ReactNode;
}) {
  return (
    <div className="panel-product">
      <button
        className="panel-product-image"
        onClick={onSelect}
        aria-label={`View ${product.name}`}
      >
        {product.image && <img src={product.image} alt="" />}
      </button>
      <div className="panel-product-copy">
        <button className="panel-product-name" onClick={onSelect}>
          {product.name}
        </button>
        <span>${product.price.toLocaleString()}</span>
        {action}
      </div>
    </div>
  );
}
