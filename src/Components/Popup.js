// Popup.js
import React from "react";
import "../Styles/Popup.css";

function Popup({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
