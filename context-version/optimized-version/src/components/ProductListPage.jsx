import React from "react";
import useRenderCount from "../hooks/useRenderCount";
import ProductCard from "./ProductCard";
import PRODUCTS from "../data/products";

const ProductListPage = React.memo(() => {
  const renderCount = useRenderCount();

  return (
    <div className="product-list-page">
      <h2>Products</h2>
      <span className="render-count">
        ProductListPage renders: {renderCount}
      </span>
      <div className="product-grid">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
});

ProductListPage.displayName = "ProductListPage";
export default ProductListPage;
