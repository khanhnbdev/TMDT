import { useState } from "react";
import type { FormEvent } from "react";
import type { Product } from "./shop";

export type Route = "/" | "/signup" | "/login" | "/wishlist" | "/cart" | "/checkout" | "/account" | "/about" | "/contact" | "/product" | "/404";

export const pageHeights: Record<Route, number> = {
  "/": 5902, "/signup": 1561, "/login": 1561, "/wishlist": 1786,
  "/cart": 1743, "/checkout": 1795, "/account": 1533, "/about": 2905,
  "/contact": 1360, "/product": 2093, "/404": 1278,
};

type Props = {
  route: Route;
  cart: Product[];
  wishlist: Product[];
  catalog: Product[];
  product: Product | null;
  navigate: (route: Route) => void;
  addToCart: (product: Product) => void;
  toggleWishlist: (product: Product) => void;
  setQuantity: (name: string, delta: number) => void;
  clearCart: () => void;
  clearWishlist: () => void;
  showNotice: (message: string) => void;
  selectProduct: (product: Product) => void;
};

const money = (value: number) => `$${value.toLocaleString()}`;
const cartTotal = (items: Product[]) => items.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
async function passwordDigest(password: string, salt: string) {
  const bytes = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
}

function Crumb({ items, navigate }: { items: string[]; navigate: Props["navigate"] }) {
  return <div className="page-crumb"><button onClick={() => navigate("/")}>Home</button>{items.map((item, i) => <span key={i}>/ &nbsp; <b>{item}</b></span>)}</div>;
}

function AuthPage({ route, navigate, showNotice }: Pick<Props, "route" | "navigate" | "showNotice">) {
  const signup = route === "/signup";
  const [error, setError] = useState("");
  const [forgot, setForgot] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const identifier = String(fields.get("identifier") ?? "").trim();
    const password = String(fields.get("password") ?? "");
    if (forgot) { setError(""); showNotice("Password reset is unavailable without an email service."); return; }
    if (signup) {
      const name = String(fields.get("name") ?? "").trim();
      if (password.length < 6) { setError("Use at least 6 characters for your password."); return; }
      const salt = crypto.randomUUID();
      localStorage.setItem("exclusive-account", JSON.stringify({ name, identifier, salt, passwordHash: await passwordDigest(password, salt) }));
      localStorage.setItem("exclusive-session", "1");
      showNotice("Account created successfully"); navigate("/account"); return;
    }
    const saved = JSON.parse(localStorage.getItem("exclusive-account") || "null");
    if (!saved || saved.identifier !== identifier || saved.passwordHash !== await passwordDigest(password, saved.salt)) { setError("Email or password does not match."); return; }
    localStorage.setItem("exclusive-session", "1");
    showNotice(`Welcome back, ${saved.name}`); navigate("/account");
  }
  return <main className="auth-stage">
    <div className="auth-art"><img src="/assets/auth-shopping.png" alt="Shopping bags, basket and smartphone" /></div>
    <div className="auth-copy">
      <h1>{forgot ? "Reset your password" : signup ? "Create an account" : "Log in to Exclusive"}</h1>
      <p>{forgot ? "Enter your email to request a password reset" : "Enter your details below"}</p>
      <form onSubmit={submit} className="auth-form">
        {signup && <input name="name" required placeholder="Name" aria-label="Name" />}
        <input name="identifier" required placeholder="Email or Phone Number" aria-label="Email or Phone Number" />
        {!forgot && <input name="password" required type="password" placeholder="Password" aria-label="Password" />}
        {error && <div className="form-error" role="alert">{error}</div>}
        {signup ? <><button className="red-button auth-submit" type="submit">Create Account</button><button className="google-button" type="button" onClick={() => showNotice("Google sign-in needs an OAuth provider to be configured.")}><span className="google-g">G</span> Sign up with Google</button><div className="auth-switch">Already have account? <button type="button" onClick={() => navigate("/login")}>Log in</button></div></> : <div className="login-actions"><button className="red-button" type="submit">{forgot ? "Request Reset" : "Log In"}</button><button type="button" className="text-red" onClick={() => { setForgot(!forgot); setError(""); }}>{forgot ? "Back to Log In" : "Forgot Password?"}</button></div>}
      </form>
    </div>
  </main>;
}

function ProductCard({ item, addToCart, selectProduct, toggleWishlist, saved }: { item: Product; addToCart: Props["addToCart"]; selectProduct: Props["selectProduct"]; toggleWishlist: Props["toggleWishlist"]; saved: boolean }) {
  return <article className="route-product-card">
    <div className="route-product-image"><button className="mini-heart" onClick={() => toggleWishlist(item)} aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}>{saved ? "♥" : "♡"}</button><button className="product-image-button" onClick={() => selectProduct(item)}><img src={item.image} alt={item.name} /></button><button className="black-add" onClick={() => addToCart(item)}>Add To Cart</button></div>
    <button className="product-name-link" onClick={() => selectProduct(item)}>{item.name}</button><div className="product-price">{money(item.price)}</div><div className="rating">★★★★★ <span>(65)</span></div>
  </article>;
}

function WishlistPage(props: Props) {
  const picks = props.catalog.filter(item => !props.wishlist.some(saved => saved.name === item.name)).slice(0, 4);
  return <main className="route-main wishlist-page"><div className="section-title-row"><h1>Wishlist ({props.wishlist.length})</h1><button className="outline-button" onClick={() => { props.wishlist.forEach(props.addToCart); props.clearWishlist(); props.showNotice("Wishlist items moved to cart"); }}>Move All To Bag</button></div>
    <div className="route-products">{props.wishlist.length ? props.wishlist.slice(0, 4).map(item => <ProductCard key={item.name} item={item} {...props} saved />) : <div className="empty-state">Your wishlist is empty. <button onClick={() => props.navigate("/")}>Explore products</button></div>}</div>
    <div className="recommend-heading"><div><span className="red-marker" /> Just For You</div><button className="outline-button" onClick={() => props.navigate("/")}>See All</button></div>
    <div className="route-products">{picks.map(item => <ProductCard key={item.name} item={item} {...props} saved={false} />)}</div>
  </main>;
}

function CartPage(props: Props) {
  const [coupon, setCoupon] = useState("");
  return <main className="route-main cart-page"><Crumb items={["Cart"]} navigate={props.navigate} />
    <div className="cart-table"><div className="cart-table-head"><span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span></div>
      {props.cart.length ? props.cart.map(item => <div className="cart-table-row" key={item.name}><div className="cart-product"><button className="remove-item" onClick={() => props.setQuantity(item.name, -(item.quantity ?? 1))} aria-label={`Remove ${item.name}`}>×</button><img src={item.image} alt="" /><button onClick={() => props.selectProduct(item)}>{item.name}</button></div><span>{money(item.price)}</span><div className="quantity-stepper"><button onClick={() => props.setQuantity(item.name, -1)} aria-label="Decrease quantity">−</button><span>{item.quantity ?? 1}</span><button onClick={() => props.setQuantity(item.name, 1)} aria-label="Increase quantity">+</button></div><span>{money(item.price * (item.quantity ?? 1))}</span></div>) : <div className="empty-state">Your cart is empty. <button onClick={() => props.navigate("/")}>Start shopping</button></div>}
    </div><div className="cart-mid-actions"><button className="outline-button" onClick={() => props.navigate("/")}>Return To Shop</button><button className="outline-button" onClick={() => props.showNotice("Cart updated")}>Update Cart</button></div>
    <div className="cart-bottom"><div className="coupon-row"><input placeholder="Coupon Code" value={coupon} onChange={event => setCoupon(event.target.value)} /><button className="red-button" onClick={() => props.showNotice(coupon ? "This coupon code is not valid." : "Enter a coupon code first.")}>Apply Coupon</button></div><div className="cart-summary"><h2>Cart Total</h2><div>Subtotal: <span>{money(cartTotal(props.cart))}</span></div><div>Shipping: <span>Free</span></div><div>Total: <span>{money(cartTotal(props.cart))}</span></div><button className="red-button" disabled={!props.cart.length} onClick={() => props.navigate("/checkout")}>Proceed to checkout</button></div></div>
  </main>;
}

function CheckoutPage(props: Props) {
  const [payment, setPayment] = useState("cash");
  function order(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (!props.cart.length) { props.navigate("/cart"); return; } props.clearCart(); props.showNotice("Your order has been placed successfully"); props.navigate("/"); }
  return <main className="route-main checkout-page"><Crumb items={["Account", "My Account", "Product", "View Cart", "CheckOut"]} navigate={props.navigate} /><h1>Billing Details</h1><form onSubmit={order} className="checkout-grid"><div className="billing-fields">{["First Name", "Company Name", "Street Address", "Apartment, floor, etc. (optional)", "Town/City", "Phone Number", "Email Address"].map((label, i) => <label key={label}>{label}{i !== 1 && i !== 3 && <em>*</em>}<input required={i !== 1 && i !== 3} type={i === 6 ? "email" : "text"} /></label>)}<label className="save-info"><input type="checkbox" defaultChecked /> Save this information for faster check-out next time</label></div><div className="order-summary"><div className="checkout-items">{props.cart.map(item => <div key={item.name}><img src={item.image} alt="" /><span>{item.name}</span><b>{money(item.price * (item.quantity ?? 1))}</b></div>)}</div><div className="summary-line">Subtotal: <span>{money(cartTotal(props.cart))}</span></div><div className="summary-line">Shipping: <span>Free</span></div><div className="summary-line">Total: <span>{money(cartTotal(props.cart))}</span></div><label className="radio-line"><input type="radio" name="payment" checked={payment === "bank"} onChange={() => setPayment("bank")} /> Bank <span>💳 VISA</span></label><label className="radio-line"><input type="radio" name="payment" checked={payment === "cash"} onChange={() => setPayment("cash")} /> Cash on delivery</label><div className="coupon-row"><input placeholder="Coupon Code" /><button className="red-button" type="button" onClick={() => props.showNotice("This coupon code is not valid.")}>Apply Coupon</button></div><button className="red-button place-order" type="submit">Place Order</button></div></form></main>;
}

function AccountPage(props: Props) {
  const saved = localStorage.getItem("exclusive-session") === "1" ? JSON.parse(localStorage.getItem("exclusive-account") || "null") : null;
  const [section, setSection] = useState("My Profile");
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!saved) { props.showNotice("Log in to save your profile."); props.navigate("/login"); return; }
    const fields = new FormData(event.currentTarget);
    const current = String(fields.get("currentPassword") ?? "");
    const next = String(fields.get("newPassword") ?? "");
    const confirm = String(fields.get("confirmPassword") ?? "");
    if (next) {
      if (!saved || !current || saved.passwordHash !== await passwordDigest(current, saved.salt)) { props.showNotice("Current password is incorrect."); return; }
      if (next.length < 6 || next !== confirm) { props.showNotice("New passwords must match and have at least 6 characters."); return; }
      saved.passwordHash = await passwordDigest(next, saved.salt);
    }
    const profile = { firstName: String(fields.get("firstName") ?? ""), lastName: String(fields.get("lastName") ?? ""), email: String(fields.get("email") ?? ""), address: String(fields.get("address") ?? "") };
    localStorage.setItem("exclusive-profile", JSON.stringify(profile));
    if (saved) localStorage.setItem("exclusive-account", JSON.stringify({ ...saved, name: `${profile.firstName} ${profile.lastName}`.trim(), identifier: profile.email || saved.identifier }));
    event.currentTarget.querySelectorAll<HTMLInputElement>('input[type="password"]').forEach(input => { input.value = ""; });
    props.showNotice("Profile saved");
  }
  return <main className="route-main account-page"><Crumb items={["My Account"]} navigate={props.navigate} /><div className="account-welcome">Welcome! <span>{saved?.name || "Guest"}</span></div><div className="account-layout"><aside><h3>Manage My Account</h3>{["My Profile", "Address Book", "My Payment Options"].map(x => <button key={x} className={section === x ? "active" : ""} onClick={() => setSection(x)}>{x}</button>)}<h3>My Orders</h3>{["My Returns", "My Cancellations"].map(x => <button key={x} onClick={() => setSection(x)}>{x}</button>)}<h3>My WishList</h3><button onClick={() => props.navigate("/wishlist")}>View Wishlist</button></aside><div className="profile-card"><h2>{section === "My Profile" ? "Edit Your Profile" : section}</h2>{section === "My Profile" ? <form onSubmit={save}><div className="profile-grid"><label>First Name<input name="firstName" defaultValue={saved?.name?.split(" ")[0] || ""} /></label><label>Last Name<input name="lastName" defaultValue={saved?.name?.split(" ").slice(1).join(" ") || ""} /></label><label>Email<input name="email" defaultValue={saved?.identifier || ""} /></label><label>Address<input name="address" placeholder="Street address" /></label></div><h3>Password Changes</h3><input name="currentPassword" type="password" placeholder="Current Password" /><input name="newPassword" type="password" placeholder="New Password" /><input name="confirmPassword" type="password" placeholder="Confirm New Password" /><div className="profile-actions"><button type="button" onClick={() => props.navigate("/")}>Cancel</button><button className="red-button">Save Changes</button></div></form> : <p>Your {section.toLowerCase()} will appear here.</p>}</div></div></main>;
}

function ContactPage(props: Props) {
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); event.currentTarget.reset(); props.showNotice("Message saved locally. Connect an email service to send it."); }
  return <main className="route-main contact-page"><Crumb items={["Contact"]} navigate={props.navigate} /><div className="contact-grid"><aside><section><div className="contact-heading"><span>☎</span><h2>Call To Us</h2></div><p>We are available 24/7, 7 days a week.</p><p>Phone: +8801611112222</p></section><section><div className="contact-heading"><span>✉</span><h2>Write To US</h2></div><p>Fill out our form and we will contact you within 24 hours.</p><p>Emails: customer@exclusive.com</p><p>Emails: support@exclusive.com</p></section></aside><form onSubmit={submit}><div className="contact-inputs"><input required placeholder="Your Name *" /><input required type="email" placeholder="Your Email *" /><input required placeholder="Your Phone *" /></div><textarea required placeholder="Your Massage" /><button className="red-button">Send Massage</button></form></div></main>;
}

function AboutPage(props: Props) {
  return <main className="about-page"><div className="route-main"><Crumb items={["About"]} navigate={props.navigate} /><div className="about-story"><div><h1>Our Story</h1><p>Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p><p>Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.</p></div><div className="about-photo"><img src="/assets/about-shopping.png" alt="People enjoying shopping" /></div></div><div className="about-stats">{[["▣", "10.5k", "Sellers active on our site"], ["＄", "33k", "Monthly Product Sale"], ["♧", "45.5k", "Customer active in our site"], ["◉", "25k", "Annual gross sale in our site"]].map(([icon,num,label]) => <div key={num}><span>{icon}</span><strong>{num}</strong><p>{label}</p></div>)}</div><div className="about-team">{["Tom Cruise", "Emma Watson", "Will Smith"].map((name,i) => <div key={name}><div className={`team-image team-image-${i+1}`} role="img" aria-label={`${name} portrait`} /><h2>{name}</h2><p>{["Founder & Chairman", "Managing Director", "Product Designer"][i]}</p></div>)}</div><div className="about-service-strip"><div>🚚 <strong>FREE AND FAST DELIVERY</strong><p>Free delivery for all orders over $140</p></div><div>☎ <strong>24/7 CUSTOMER SERVICE</strong><p>Friendly 24/7 customer support</p></div><div>✓ <strong>MONEY BACK GUARANTEE</strong><p>We return money within 30 days</p></div></div></div></main>;
}

function ProductPage(props: Props) {
  const item = props.product || props.catalog[0];
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(0);
  if (!item) return <main className="route-main"><Crumb items={["Product"]} navigate={props.navigate} /><p>Product unavailable.</p></main>;
  return <main className="route-main details-page"><Crumb items={["Account", "Gaming", item.name]} navigate={props.navigate} /><div className="details-grid"><div className="detail-thumbs">{[0,1,2,3].map(i => <button key={i} onClick={() => setColor(i)}><img src={item.image} alt="" /></button>)}</div><div className="detail-hero"><img src={item.image} alt={item.name} /></div><div className="detail-info"><h1>{item.name}</h1><div className="rating">★★★★★ <span>(150 Reviews)　|　<span className="in-stock">In Stock</span></span></div><div className="detail-price">{money(item.price)}</div><p>High quality design with the performance you need. Shop this product with fast, free delivery.</p><hr /><div className="detail-choices">Colours: {['#a0bce0','#db4444'].map((c,i) => <button key={c} className={color === i ? "active" : ""} style={{background:c}} onClick={() => setColor(i)} aria-label={`Colour ${i+1}`} />)}</div><div className="detail-sizes">Size: {['XS','S','M','L','XL'].map(s => <button key={s} onClick={e => { document.querySelectorAll('.detail-sizes button').forEach(b => b.classList.remove('active')); e.currentTarget.classList.add('active'); }}>{s}</button>)}</div><div className="detail-buy"><div className="quantity-stepper"><button onClick={() => setQuantity(Math.max(1,quantity-1))}>−</button><span>{quantity}</span><button onClick={() => setQuantity(quantity+1)}>+</button></div><button className="red-button" onClick={() => { for(let i=0;i<quantity;i++) props.addToCart(item); props.navigate("/cart"); }}>Buy Now</button><button className="outline-button" onClick={() => props.toggleWishlist(item)}>♡</button></div><div className="detail-delivery"><div>🚚 <strong>Free Delivery</strong><small>Enter your postal code for Delivery Availability</small></div><div>↩ <strong>Return Delivery</strong><small>Free 30 Days Delivery Returns. Details</small></div></div></div></div><div className="related-heading"><span className="red-marker" /> Related Item</div><div className="route-products">{props.catalog.filter(p=>p.name!==item.name).slice(0,4).map(p => <ProductCard key={p.name} item={p} {...props} saved={props.wishlist.some(x=>x.name===p.name)} />)}</div></main>;
}

function ErrorPage({ navigate }: Pick<Props,"navigate">) { return <main className="route-main error-page"><Crumb items={["404 Error"]} navigate={navigate} /><h1>404 Not Found</h1><p>Your visited page not found. You may go home page.</p><button className="red-button" onClick={() => navigate("/")}>Back to home page</button></main>; }

export default function Pages(props: Props) {
  switch(props.route) {
    case "/signup": case "/login": return <AuthPage route={props.route} navigate={props.navigate} showNotice={props.showNotice} />;
    case "/wishlist": return <WishlistPage {...props} />;
    case "/cart": return <CartPage {...props} />;
    case "/checkout": return <CheckoutPage {...props} />;
    case "/account": return <AccountPage {...props} />;
    case "/contact": return <ContactPage {...props} />;
    case "/about": return <AboutPage {...props} />;
    case "/product": return <ProductPage {...props} />;
    default: return <ErrorPage navigate={props.navigate} />;
  }
}
