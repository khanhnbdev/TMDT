import { useState } from "react";
import type { Product } from "./shop";
import { categoryMatches } from "./shop";

export type PanelMode = "search" | "cart" | "wishlist" | "quick" | "info" | "signup" | "language";

type Props = {
  mode: PanelMode;
  catalog: Product[];
  cart: Product[];
  wishlist: Product[];
  product: Product | null;
  colorIndex: number;
  query: string;
  category: string;
  infoTitle: string;
  language: string;
  onClose: () => void;
  onMode: (mode: PanelMode) => void;
  onQuery: (query: string) => void;
  onSelect: (product: Product) => void;
  onColorIndex: (index: number) => void;
  onAdd: (product: Product) => void;
  onWish: (product: Product) => void;
  onRemoveWish: (name: string) => void;
  onQuantity: (name: string, delta: number) => void;
  onLanguage: (language: string) => void;
  onNotice: (text: string) => void;
};

function ProductRow({ product, onSelect, action }: { product: Product; onSelect: () => void; action?: React.ReactNode }) {
  return <div className="panel-product">
    <button className="panel-product-image" onClick={onSelect} aria-label={`View ${product.name}`}>
      {product.image && <img src={product.image} alt="" />}
    </button>
    <div className="panel-product-copy">
      <button className="panel-product-name" onClick={onSelect}>{product.name}</button>
      <span>${product.price.toLocaleString()}</span>
      {action}
    </div>
  </div>;
}

export default function ShopPanel(props: Props) {
  const [signupComplete, setSignupComplete] = useState(false);
  const total = props.cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);
  const filtered = props.catalog.filter((item) =>
    (!props.category || categoryMatches(item, props.category)) &&
    (!props.query || item.name.toLowerCase().includes(props.query.toLowerCase()))
  );
  const title = {
    search: props.category ? props.category : "All products",
    cart: "Your cart",
    wishlist: "Wishlist",
    quick: "Product details",
    info: props.infoTitle,
    signup: "Sign Up",
    language: "Language",
  }[props.mode];
  return <div className="panel-backdrop" onMouseDown={props.onClose}>
    <section className="shop-panel" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => event.stopPropagation()}>
      <div className="panel-head"><h2>{title}</h2><button onClick={props.onClose} aria-label="Close panel">×</button></div>
      {props.mode === "search" && <>
        <input autoFocus className="panel-search" type="search" value={props.query} onChange={(event) => props.onQuery(event.target.value)} placeholder="Search products" aria-label="Search products" />
        <p className="panel-muted">{filtered.length} product{filtered.length === 1 ? "" : "s"} found</p>
        {filtered.length ? filtered.map((item) => <ProductRow key={item.name} product={item} onSelect={() => props.onSelect(item)} action={<button className="panel-link" onClick={() => props.onAdd(item)}>Add to cart</button>} />) : <p className="panel-empty">No matching products. Try another search.</p>}
      </>}
      {props.mode === "quick" && props.product && <div className="quick-product">
        {props.product.image && <img src={props.product.image} alt={props.product.name} />}
        <h3>{props.product.name}</h3><strong>${props.product.price.toLocaleString()}</strong>
        <p className="panel-muted">Explore this item from the Exclusive collection.</p>
        {props.product.hasColors && <div className="panel-colors"><span>Color option:</span>{[0, 1].map((index) => <button key={index} className={props.colorIndex === index ? "active" : ""} onClick={() => props.onColorIndex(index)} aria-label={"Choose color option " + (index + 1)}>{index + 1}</button>)}</div>}
        <button className="panel-primary" onClick={() => props.onAdd(props.product!)}>Add to cart</button>
        <button className="panel-secondary" onClick={() => props.onWish(props.product!)}>Add to wishlist</button>
      </div>}
      {props.mode === "cart" && <>
        {props.cart.length ? props.cart.map((item) => <ProductRow key={item.name} product={item} onSelect={() => props.onSelect(item)} action={<div className="qty-control"><button aria-label={`Remove one ${item.name}`} onClick={() => props.onQuantity(item.name, -1)}>−</button><span>{item.quantity ?? 1}</span><button aria-label={`Add one ${item.name}`} onClick={() => props.onQuantity(item.name, 1)}>+</button></div>} />) : <p className="panel-empty">Your cart is empty. Browse products to add something.</p>}
        <div className="panel-total"><span>Subtotal</span><strong>${total.toLocaleString()}</strong></div>
        <button className="panel-primary" disabled={!props.cart.length} onClick={() => props.onNotice("Checkout is not connected to a store yet.")}>Checkout</button>
      </>}
      {props.mode === "wishlist" && <>
        {props.wishlist.length ? props.wishlist.map((item) => <ProductRow key={item.name} product={item} onSelect={() => props.onSelect(item)} action={<div className="panel-row-actions"><button className="panel-link" onClick={() => props.onAdd(item)}>Add to cart</button><button className="panel-link" onClick={() => props.onRemoveWish(item.name)}>Remove</button></div>} />) : <p className="panel-empty">No saved products yet. Tap a heart on a product card.</p>}
      </>}
      {props.mode === "info" && <div className="info-content">
        {props.infoTitle === "Contact" ? <><p>Have a question about the shop?</p><a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a><p>+88015-88888-9999</p></> : props.infoTitle === "About" ? <p>Exclusive brings together fashion, electronics, home goods and more in one storefront.</p> : <p>This is an interactive front-end preview. The {props.infoTitle.toLowerCase()} page is not connected to a backend service.</p>}
        <button className="panel-secondary" onClick={() => props.onMode("search")}>Browse products</button>
      </div>}
      {props.mode === "signup" && <div className="info-content">
        {signupComplete ? <p>Thanks for joining the demo. No account was created.</p> : <form className="signup-form" onSubmit={(event) => { event.preventDefault(); setSignupComplete(true); }}>
          <p>Join this demo storefront for updates.</p>
          <label>Name<input required minLength={2} placeholder="Your name" /></label>
          <label>Email<input required type="email" placeholder="you@example.com" /></label>
          <button className="panel-primary" type="submit">Join the demo</button>
          <small>No account or password is stored.</small>
        </form>}
      </div>}
      {props.mode === "language" && <div className="language-options">
        {["English", "Tiếng Việt"].map((choice) => <button key={choice} onClick={() => { props.onLanguage(choice); props.onClose(); }}>{choice}{props.language === choice && " ✓"}</button>)}
        <p className="panel-muted">Product copy remains in the source design language.</p>
      </div>}
    </section>
  </div>;
}
