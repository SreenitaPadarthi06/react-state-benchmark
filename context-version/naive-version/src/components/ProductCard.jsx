import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import useRenderCount from "../hooks/useRenderCount";

const ProductCard = ({ product }) => {
  const renderCount = useRenderCount();
  const { dispatch } = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch({
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
};

export default ProductCard;
