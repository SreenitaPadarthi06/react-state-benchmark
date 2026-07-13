import React, { useEffect } from "react";
import { useNotification } from "../contexts/NotificationContext";
import useRenderCount from "../hooks/useRenderCount";

const Notification = React.memo(() => {
  const renderCount = useRenderCount();
  const { notification, notificationDispatch } = useNotification();

  useEffect(() => {
    if (notification.id) {
      const timer = setTimeout(() => {
        notificationDispatch({ type: "CLEAR_NOTIFICATION" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.id, notificationDispatch]);

  if (!notification.message) return null;

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
      <span className="render-count" style={{ marginLeft: 8 }}>
        Notification renders: {renderCount}
      </span>
    </div>
  );
});

Notification.displayName = "Notification";
export default Notification;
