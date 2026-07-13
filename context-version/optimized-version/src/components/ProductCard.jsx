import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNotification } from "../contexts/NotificationContext";
import useRenderCount from "../hooks/useRenderCount";

const ProductCard = React.memo(({ product }) => {
  const renderCount = useRenderCount();
  const { cartDispatch } = useCart();
  const { notificationDispatch } = useNotification();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    notificationDispatch({
      type: "SHOW_NOTIFICATION",
      payload: { message: `${product.name} added to cart`, type: "success" },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card">
      <div className="product-emoji">{product.image}</div>
      <div className="product-name">{product.name}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <button
        className={`add-to-cart-btn ${added ? "added" : ""}`}
        onClick={handleAdd}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
      <span className="render-count">ProductCard renders: {renderCount}</span>
    </div>
  );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;
