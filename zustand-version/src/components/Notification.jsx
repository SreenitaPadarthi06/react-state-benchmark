import { useEffect } from "react";
import useStore from "../store/useStore";
import useRenderCount from "../hooks/useRenderCount";

const Notification = () => {
  const renderCount = useRenderCount();
  const notification = useStore((state) => state.notification);
  const clearNotification = useStore((state) => state.clearNotification);

  useEffect(() => {
    if (notification.id) {
      const timer = setTimeout(() => {
        clearNotification();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.id, clearNotification]);

  if (!notification.message) return null;

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
