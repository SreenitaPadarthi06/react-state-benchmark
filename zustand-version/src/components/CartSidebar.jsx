import useStore from "../store/useStore";
import useRenderCount from "../hooks/useRenderCount";
import CartItem from "./CartItem";

const CartSidebar = () => {
  const renderCount = useRenderCount();
  const cartItems = useStore((state) => state.cartItems);
  const isCartOpen = useStore((state) => state.isCartOpen);
  const toggleCart = useStore((state) => state.toggleCart);
  const showNotification = useStore((state) => state.showNotification);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? "open" : ""}`}
        onClick={toggleCart}
      />
      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Shopping Cart ({itemCount})</h3>
          <button className="cart-close-btn" onClick={toggleCart}>
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {cartItems.length > 0 && (
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
                showNotification("Checkout coming soon!", "info")
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
};

export default CartSidebar;
