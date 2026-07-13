import { useSelector } from "react-redux"
import { useRef } from "react"

function CartSidebar() {
  const items = useSelector((state) => state.cart.items)

  const renderCount = useRef(0)
  renderCount.current += 1

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Cart Sidebar</h2>

      <p data-testid="render-count">
        Renders: {renderCount.current}
      </p>

      {items.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid gray",
              marginBottom: "10px",
            }}
          >
            <h4>{item.name}</h4>

            <p>₹ {item.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default CartSidebar