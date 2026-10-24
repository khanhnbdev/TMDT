import { useState } from "react";
import type { PanelProps } from "./panels/types";
export type { PanelMode } from "./panels/types";
import SearchPanel from "./panels/SearchPanel";
import QuickPanel from "./panels/QuickPanel";
import CartPanel from "./panels/CartPanel";
import WishlistPanel from "./panels/WishlistPanel";
import InfoPanel from "./panels/InfoPanel";
import SignupPanel from "./panels/SignupPanel";
import LanguagePanel from "./panels/LanguagePanel";

export default function ShopPanel(props: PanelProps) {
  const [signupComplete, setSignupComplete] = useState(false);

  const title = {
    search: props.category ? props.category : "All products",
    cart: "Your cart",
    wishlist: "Wishlist",
    quick: "Product details",
    info: props.infoTitle,
    signup: "Sign Up",
    language: "Language",
  }[props.mode];
  return (
    <div className="panel-backdrop" onMouseDown={props.onClose}>
      <section
        className="shop-panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="panel-head">
          <h2>{title}</h2>
          <button onClick={props.onClose} aria-label="Close panel">
            ×
          </button>
        </div>
        {props.mode === "search" && <SearchPanel {...props} />}
        {props.mode === "quick" && <QuickPanel {...props} />}
        {props.mode === "cart" && <CartPanel {...props} />}
        {props.mode === "wishlist" && <WishlistPanel {...props} />}
        {props.mode === "info" && <InfoPanel {...props} />}
        {props.mode === "signup" && (
          <SignupPanel
            {...props}
            signupComplete={signupComplete}
            setSignupComplete={setSignupComplete}
          />
        )}
        {props.mode === "language" && <LanguagePanel {...props} />}
      </section>
    </div>
  );
}
