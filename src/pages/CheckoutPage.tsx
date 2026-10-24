import { useState } from "react";
import type { FormEvent } from "react";
import type { PageProps } from "./types";
import type { Product } from "../shop";
import Breadcrumb from "./Breadcrumb";
import { money } from "../utils/pricing";
import { cartTotal } from "../utils/pricing";

export default function CheckoutPage(props: PageProps) {
  const [payment, setPayment] = useState("cash");
  function order(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!props.cart.length) {
      props.navigate("/cart");
      return;
    }
    props.clearCart();
    props.showNotice("Your order has been placed successfully");
    props.navigate("/");
  }
  return (
    <main className="route-main checkout-page">
      <Breadcrumb
        items={["Account", "My Account", "Product", "View Cart", "CheckOut"]}
        navigate={props.navigate}
      />
      <h1>Billing Details</h1>
      <form onSubmit={order} className="checkout-grid">
        <div className="billing-fields">
          {[
            "First Name",
            "Company Name",
            "Street Address",
            "Apartment, floor, etc. (optional)",
            "Town/City",
            "Phone Number",
            "Email Address",
          ].map((label, i) => (
            <label key={label}>
              {label}
              {i !== 1 && i !== 3 && <em>*</em>}
              <input
                required={i !== 1 && i !== 3}
                type={i === 6 ? "email" : "text"}
              />
            </label>
          ))}
          <label className="save-info">
            <input type="checkbox" defaultChecked /> Save this information for
            faster check-out next time
          </label>
        </div>
        <div className="order-summary">
          <div className="checkout-items">
            {props.cart.map((item) => (
              <div key={item.name}>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
                <b>{money(item.price * (item.quantity ?? 1))}</b>
              </div>
            ))}
          </div>
          <div className="summary-line">
            Subtotal: <span>{money(cartTotal(props.cart))}</span>
          </div>
          <div className="summary-line">
            Shipping: <span>Free</span>
          </div>
          <div className="summary-line">
            Total: <span>{money(cartTotal(props.cart))}</span>
          </div>
          <label className="radio-line">
            <input
              type="radio"
              name="payment"
              checked={payment === "bank"}
              onChange={() => setPayment("bank")}
            />{" "}
            Bank <span>💳 VISA</span>
          </label>
          <label className="radio-line">
            <input
              type="radio"
              name="payment"
              checked={payment === "cash"}
              onChange={() => setPayment("cash")}
            />{" "}
            Cash on delivery
          </label>
          <div className="coupon-row">
            <input placeholder="Coupon Code" />
            <button
              className="red-button"
              type="button"
              onClick={() => props.showNotice("This coupon code is not valid.")}
            >
              Apply Coupon
            </button>
          </div>
          <button className="red-button place-order" type="submit">
            Place Order
          </button>
        </div>
      </form>
    </main>
  );
}
