import { useState } from "react";
import type { PageProps } from "./types";
import type { Product } from "../shop";
import Breadcrumb from "./Breadcrumb";
import { money } from "../utils/pricing";
import { cartTotal } from "../utils/pricing";

export default function CartPage(props: PageProps) {
  const [coupon, setCoupon] = useState("");
  return (
    <main className="route-main cart-page">
      <Breadcrumb items={["Cart"]} navigate={props.navigate} />
      <div className="cart-table">
        <div className="cart-table-head">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        {props.cart.length ? (
          props.cart.map((item) => (
            <div className="cart-table-row" key={item.name}>
              <div className="cart-product">
                <button
                  className="remove-item"
                  onClick={() =>
                    props.setQuantity(item.name, -(item.quantity ?? 1))
                  }
                  aria-label={`Remove ${item.name}`}
                >
                  ×
                </button>
                <img src={item.image} alt="" />
                <button onClick={() => props.selectProduct(item)}>
                  {item.name}
                </button>
              </div>
              <span>{money(item.price)}</span>
              <div className="quantity-stepper">
                <button
                  onClick={() => props.setQuantity(item.name, -1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span>{item.quantity ?? 1}</span>
                <button
                  onClick={() => props.setQuantity(item.name, 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <span>{money(item.price * (item.quantity ?? 1))}</span>
            </div>
          ))
        ) : (
          <div className="empty-state">
            Your cart is empty.{" "}
            <button onClick={() => props.navigate("/")}>Start shopping</button>
          </div>
        )}
      </div>
      <div className="cart-mid-actions">
        <button className="outline-button" onClick={() => props.navigate("/")}>
          Return To Shop
        </button>
        <button
          className="outline-button"
          onClick={() => props.showNotice("Cart updated")}
        >
          Update Cart
        </button>
      </div>
      <div className="cart-bottom">
        <div className="coupon-row">
          <input
            placeholder="Coupon Code"
            value={coupon}
            onChange={(event) => setCoupon(event.target.value)}
          />
          <button
            className="red-button"
            onClick={() =>
              props.showNotice(
                coupon
                  ? "This coupon code is not valid."
                  : "Enter a coupon code first.",
              )
            }
          >
            Apply Coupon
          </button>
        </div>
        <div className="cart-summary">
          <h2>Cart Total</h2>
          <div>
            Subtotal: <span>{money(cartTotal(props.cart))}</span>
          </div>
          <div>
            Shipping: <span>Free</span>
          </div>
          <div>
            Total: <span>{money(cartTotal(props.cart))}</span>
          </div>
          <button
            className="red-button"
            disabled={!props.cart.length}
            onClick={() => props.navigate("/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </main>
  );
}
