import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import useRenderCount from "../hooks/useRenderCount";

const CartItem = ({ item }) => {
  const renderCount = useRenderCount();

  const { dispatch } = useContext(AppContext);

  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        padding: "10px 0",
      }}
    >
      <h4>{item.name}</h4>

      <p>Qty: {item.quantity}</p>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: item.id,
          })
        }
      >
        Remove
      </button>

      <small data-testid="render-count">
        CartItem renders: {renderCount}
      </small>
    </div>
  );
};

export default CartItem;