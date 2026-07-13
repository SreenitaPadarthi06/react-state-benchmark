import React from "react";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";
import { useNotification } from "../contexts/NotificationContext";
import useRenderCount from "../hooks/useRenderCount";

const Header = React.memo(() => {
  const renderCount = useRenderCount();
  const { cartState, cartDispatch } = useCart();
  const { userState, userDispatch } = useUser();
  const { theme, themeDispatch } = useTheme();
  const { notificationDispatch } = useNotification();

  const itemCount = cartState.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">🛒 ShopBench</div>
        <span className="render-count">Header renders: {renderCount}</span>
      </div>

      <div className="header-right">
        {userState.isLoggedIn ? (
          <div className="user-info">
            <div className="user-avatar">
              {userState.name.charAt(0).toUpperCase()}
            </div>
            <span>{userState.name}</span>
            <button
              className="logout-btn"
              onClick={() => {
                userDispatch({ type: "LOGOUT" });
                notificationDispatch({
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
              userDispatch({ type: "LOGIN" });
              notificationDispatch({
                type: "SHOW_NOTIFICATION",
                payload: {
                  message: "Welcome back, Sreenita!",
                  type: "success",
                },
              });
            }}
          >
            👤 Login
          </button>
        )}

        <button
          className="theme-btn"
          onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button
          className="cart-btn"
          onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
        >
          🛒
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
