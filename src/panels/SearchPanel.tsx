import type { PanelProps } from "./types";
import ProductRow from "./ProductRow";
import { categoryMatches } from "../shop";

export default function SearchPanel(props: PanelProps) {
  const filtered = props.catalog.filter(
    (item) =>
      (!props.category || categoryMatches(item, props.category)) &&
      (!props.query ||
        item.name.toLowerCase().includes(props.query.toLowerCase())),
  );
  return (
    <>
      <input
        autoFocus
        className="panel-search"
        type="search"
        value={props.query}
        onChange={(event) => props.onQuery(event.target.value)}
        placeholder="Search products"
        aria-label="Search products"
      />
      <p className="panel-muted">
        {filtered.length} product{filtered.length === 1 ? "" : "s"} found
      </p>
      {filtered.length ? (
        filtered.map((item) => (
          <ProductRow
            key={item.name}
            product={item}
            onSelect={() => props.onSelect(item)}
            action={
              <button className="panel-link" onClick={() => props.onAdd(item)}>
                Add to cart
              </button>
            }
          />
        ))
      ) : (
        <p className="panel-empty">No matching products. Try another search.</p>
      )}
    </>
  );
}
