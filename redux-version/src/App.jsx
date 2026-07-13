import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "./store/cartSlice"
import products from "./data/products"
import ProductCard from "./components/ProductCard"
import CartSidebar from "./components/CartSidebar"
import { useState } from "react"
function App() {
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.items)
  const [search, setSearch] = useState("")
  const renderCount = useRef(0)
renderCount.current += 1
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Shopping Cart</h1>
      <p data-testid="render-count">
  Renders: {renderCount.current}
</p>

      <h2 data-testid="cart-count">
        Cart Items: {cartItems.length}
      </h2>
      <input
  data-testid="search-input"
  type="text"
  placeholder="Search products"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    padding: "10px",
    marginBottom: "20px",
    width: "300px",
  }}
/>
<CartSidebar />
     {filteredProducts.map((product) => (
        
  <ProductCard
    key={product.id}
    product={product}
    
  />
  
))}

    </div>
    
  )
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
)
}

export default App