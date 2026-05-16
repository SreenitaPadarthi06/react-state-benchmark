import Header from "./components/Header";
import ProductListPage from "./components/ProductListPage";
import CartSidebar from "./components/CartSidebar";

function App() {
  return (
    <div>
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ProductListPage />
        <CartSidebar />
      </div>
    </div>
  );
}

export default App;