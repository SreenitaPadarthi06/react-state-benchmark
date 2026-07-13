import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNotification } from "../contexts/NotificationContext";
import useRenderCount from "../hooks/useRenderCount";
import CartItem from "./CartItem";

const CartSidebar = React.memo(() => {
  const renderCount = useRenderCount();
  const { cartState, cartDispatch } = useCart();
  const { notificationDispatch } = useNotification();
  const { items, isOpen } = cartState;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
      />
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Shopping Cart ({itemCount})</h3>
          <button
            className="cart-close-btn"
            onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
          >
            ✕
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Subtotal ({itemCount} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="cart-summary-total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button
              className="checkout-btn"
              onClick={() =>
                notificationDispatch({
                  type: "SHOW_NOTIFICATION",
                  payload: {
                    message: "Checkout coming soon!",
                    type: "info",
                  },
                })
              }
            >
              Proceed to Checkout
            </button>
          </div>
        )}
        <span className="render-count" style={{ padding: "8px 24px" }}>
          CartSidebar renders: {renderCount}
        </span>
      </div>
    </>
  );
});

CartSidebar.displayName = "CartSidebar";
export default CartSidebar;
