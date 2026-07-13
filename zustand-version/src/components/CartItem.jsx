import useStore from "../store/useStore";
import useRenderCount from "../hooks/useRenderCount";

const CartItem = ({ item }) => {
  const renderCount = useRenderCount();
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);

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
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;
