import React from "react";
import { useCart } from "../contexts/CartContext";
import useRenderCount from "../hooks/useRenderCount";

const CartItem = React.memo(({ item }) => {
  const renderCount = useRenderCount();
  const { cartDispatch } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-emoji">{item.image}</div>
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">${item.price.toFixed(2)}</div>
        <span className="render-count">CartItem renders: {renderCount}</span>
      </div>
      <div className="cart-item-controls">
        <button
          className="qty-btn"
          onClick={() =>
            cartDispatch({
              type: "UPDATE_QUANTITY",
              payload: { id: item.id, quantity: item.quantity - 1 },
            })
          }
        >
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() =>
            cartDispatch({
              type: "UPDATE_QUANTITY",
              payload: { id: item.id, quantity: item.quantity + 1 },
            })
          }
        >
          +
        </button>
        <button
          className="remove-btn"
          onClick={() =>
            cartDispatch({ type: "REMOVE_FROM_CART", payload: item.id })
          }
        >
          🗑️
        </button>
      </div>
    </div>
  );
});

CartItem.displayName = "CartItem";
export default CartItem;
