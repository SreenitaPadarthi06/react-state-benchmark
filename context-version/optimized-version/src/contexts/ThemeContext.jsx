import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const newTheme = state === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    }
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, "light");
  return (
    <ThemeContext.Provider value={{ theme, themeDispatch: dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export default ThemeContext;
