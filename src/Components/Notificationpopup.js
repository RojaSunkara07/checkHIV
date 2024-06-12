import React, { useState, useEffect, useRef } from 'react';
import "../Styles/Notificationpopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function NotificationDropdown() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(['Notification 1']);
  const notificationRef = useRef(null);

  // Function to add a new notification
  const addNotification = (message) => {
    setNotifications([...notifications, message]);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    // Event listener to close the notification dropdown when clicking outside of it
    const handleDocumentClick = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleDocumentClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="notification-dropdown" ref={notificationRef}>
      <div className="notification-toggle" onClick={toggleNotifications}>
        {showNotifications && (
          <div className="notification-list">
            <h1>Notifications</h1>
            <hr />
            {notifications.map((notification, index) => (
              <div key={index} className="notification-item">
                <span className='notification-icon'><FontAwesomeIcon icon={faEnvelope} /></span>
                <span className='notification-message'>{notification}</span>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationDropdown;
