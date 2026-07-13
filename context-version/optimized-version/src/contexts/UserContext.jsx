import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = { name: "", isLoggedIn: false };

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { name: "Sreenita", isLoggedIn: true };
    case "LOGOUT":
      return { name: "", isLoggedIn: false };
    default:
      return state;
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};

export default UserContext;
