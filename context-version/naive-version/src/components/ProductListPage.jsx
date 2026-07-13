import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import useRenderCount from "../hooks/useRenderCount";
import ProductCard from "./ProductCard";
import PRODUCTS from "../data/products";

const ProductListPage = () => {
  const renderCount = useRenderCount();
  const { dispatch } = useContext(AppContext);

  return (
    <div className="product-list-page">
      <h2>Products</h2>
      <span className="render-count">ProductListPage renders: {renderCount}</span>
      <div className="product-grid">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
