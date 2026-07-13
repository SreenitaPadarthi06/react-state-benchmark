import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  cart: { items: [], isOpen: false },
  user: { name: "", isLoggedIn: false },
  theme: "light",
  notification: { message: "", type: "info", id: null },
};

function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cart.items.find(
        (item) => item.id === action.payload.id
      );
      let newItems;
      if (existing) {
        newItems = state.cart.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.cart.items, { ...action.payload, quantity: 1 }];
      }
      return { ...state, cart: { ...state.cart, items: newItems } };
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter((item) => item.id !== action.payload),
        },
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.filter((item) => item.id !== id),
          },
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        },
      };
    }

    case "TOGGLE_CART":
      return {
        ...state,
        cart: { ...state.cart, isOpen: !state.cart.isOpen },
      };

    case "LOGIN":
      return {
        ...state,
        user: { name: "Sreenita", isLoggedIn: true },
      };

    case "LOGOUT":
      return {
        ...state,
        user: { name: "", isLoggedIn: false },
      };

    case "TOGGLE_THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      return { ...state, theme: newTheme };
    }

    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notification: {
          message: action.payload.message,
          type: action.payload.type || "info",
          id: Date.now(),
        },
      };

    case "CLEAR_NOTIFICATION":
      return {
        ...state,
        notification: { message: "", type: "info", id: null },
      };

    default:
      return state;
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
