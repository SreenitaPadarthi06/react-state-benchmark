import { create } from "zustand";

const useStore = create((set) => ({
  // Cart State
  cartItems: [],
  isCartOpen: false,

  addToCart: (product) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return { cartItems: state.cartItems.filter((item) => item.id !== id) };
      }
      return {
        cartItems: state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  // User State
  user: { name: "", isLoggedIn: false },

  login: () => set({ user: { name: "Sreenita", isLoggedIn: true } }),
  logout: () => set({ user: { name: "", isLoggedIn: false } }),

  // Theme State
  theme: "light",

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      return { theme: newTheme };
    }),

  // Notification State
  notification: { message: "", type: "info", id: null },

  showNotification: (message, type = "info") =>
    set({ notification: { message, type, id: Date.now() } }),

  clearNotification: () =>
    set({ notification: { message: "", type: "info", id: null } }),
}));

export default useStore;
