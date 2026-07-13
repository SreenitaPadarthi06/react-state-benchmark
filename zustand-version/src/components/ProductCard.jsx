import { useState } from "react";
import useStore from "../store/useStore";
import useRenderCount from "../hooks/useRenderCount";

const ProductCard = ({ product }) => {
  const renderCount = useRenderCount();
  const addToCart = useStore((state) => state.addToCart);
  const showNotification = useStore((state) => state.showNotification);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    showNotification(`${product.name} added to cart`, "success");
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
};

export default ProductCard;
