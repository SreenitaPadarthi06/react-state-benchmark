import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice"
import { useRef } from "react"

function ProductCard({ product }) {
  const dispatch = useDispatch()

  const renderCount = useRef(0)
  renderCount.current += 1

  return (
    <div
      data-testid="product-item"
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{product.name}</h3>

      <p>₹ {product.price}</p>

      <p data-testid="render-count">
        Renders: {renderCount.current}
      </p>

      <button
        data-testid="add-to-cart-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard