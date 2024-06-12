import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the close icon
import "../Styles/Authentication.css";
import { useNavigate } from "react-router-dom";

const AuthenticationCodePopup = ({ isOpen, onRequestClose, onSubmit }) => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    // Call the onSubmit function with the code
    onSubmit(code);
    // Close the pop-up
    onRequestClose();
  };
  
  const navigate = useNavigate();
  const loginbutton = () => {
    navigate("/admindashboard");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Authentication Code"
    >
      <button className="close-button" onClick={onRequestClose}>
        <FontAwesomeIcon icon={faTimes} /> {/* Close icon */}
      </button>
      <h2 className="auth-title">Authentication</h2>
      <p className="auth-para">Enter your OTP here</p>
      <input
        className="auth-input"
        type="text"
        placeholder=""
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="button" className="authbutton" onClick={loginbutton}>Submit</button>
    </Modal>
  );
};

export default AuthenticationCodePopup;
