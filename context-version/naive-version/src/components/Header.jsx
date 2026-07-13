import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import useRenderCount from "../hooks/useRenderCount";

const Header = () => {
  const renderCount = useRenderCount();
  const { state, dispatch } = useContext(AppContext);
  const { cart, user, theme } = state;

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">🛒 ShopBench</div>
        <span className="render-count">Header renders: {renderCount}</span>
      </div>

      <div className="header-right">
        {/* User Info */}
        {user.isLoggedIn ? (
          <div className="user-info">
            <div className="user-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span>{user.name}</span>
            <button
              className="logout-btn"
              onClick={() => {
                dispatch({ type: "LOGOUT" });
                dispatch({
                  type: "SHOW_NOTIFICATION",
                  payload: { message: "Logged out successfully", type: "info" },
                });
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="login-btn"
            onClick={() => {
              dispatch({ type: "LOGIN" });
              dispatch({
                type: "SHOW_NOTIFICATION",
                payload: { message: "Welcome back, Sreenita!", type: "success" },
              });
            }}
          >
            👤 Login
          </button>
        )}

        {/* Theme Switcher */}
        <button
          className="theme-btn"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Cart Button */}
        <button
          className="cart-btn"
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
        >
          🛒
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
