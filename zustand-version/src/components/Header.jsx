import useStore from "../store/useStore";
import useRenderCount from "../hooks/useRenderCount";

const Header = () => {
  const renderCount = useRenderCount();
  const cartItems = useStore((state) => state.cartItems);
  const toggleCart = useStore((state) => state.toggleCart);
  const user = useStore((state) => state.user);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const showNotification = useStore((state) => state.showNotification);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">🛒 ShopBench</div>
        <span className="render-count">Header renders: {renderCount}</span>
      </div>

      <div className="header-right">
        {user.isLoggedIn ? (
          <div className="user-info">
            <div className="user-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span>{user.name}</span>
            <button
              className="logout-btn"
              onClick={() => {
                logout();
                showNotification("Logged out successfully", "info");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="login-btn"
            onClick={() => {
              login();
              showNotification("Welcome back, Sreenita!", "success");
            }}
          >
            👤 Login
          </button>
        )}

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button className="cart-btn" onClick={toggleCart}>
          🛒
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
