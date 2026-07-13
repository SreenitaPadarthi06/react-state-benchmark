import Header from "./components/Header";
import ProductListPage from "./components/ProductListPage";
import CartSidebar from "./components/CartSidebar";
import Notification from "./components/Notification";
import useRenderCount from "./hooks/useRenderCount";
import "./App.css";

function App() {
  const renderCount = useRenderCount();

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ProductListPage />
      </div>
      <CartSidebar />
      <Notification />
      <div style={{ position: "fixed", bottom: 8, left: 8 }}>
        <span className="render-count">App renders: {renderCount}</span>
      </div>
    </div>
  );
}

export default App;
