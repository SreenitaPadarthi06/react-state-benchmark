import { createContext, useContext, useReducer } from "react";

const NotificationContext = createContext();

const initialState = { message: "", type: "info", id: null };

function notificationReducer(state, action) {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        message: action.payload.message,
        type: action.payload.type || "info",
        id: Date.now(),
      };
    case "CLEAR_NOTIFICATION":
      return { message: "", type: "info", id: null };
    default:
      return state;
  }
}

export const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(notificationReducer, initialState);
  return (
    <NotificationContext.Provider
      value={{ notification, notificationDispatch: dispatch }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "useNotification must be used within NotificationProvider"
    );
  return context;
};

export default NotificationContext;
