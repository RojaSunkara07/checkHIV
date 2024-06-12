import React, { useState } from "react";
import "../Styles/Login.css";
import Image from "../Assets/login.png";
import Facebook from "../Assets/faceboook.png";
import Google from "../Assets/google.png";
import Twitter from "../Assets/twitter.png";
import AuthenticationCodePopup from "../Components/AdminAuthentication"; // Import the AuthenticationCodePopup component

function Login() {
  const [isAuthCodePopupOpen, setIsAuthCodePopupOpen] = useState(false);

  const handleLoginClick = () => {
    // Perform your authentication logic here
    // For this example, we'll assume authentication was successful and open the code pop-up
    setIsAuthCodePopupOpen(true);
  };

  return (
    <div className="login-container" id="login">
      <div className="left-section">
        <img src={Image} alt="login" className="left-section-img" />
        <p className="left-section-description">
          No judgment, No hassle just accurate results Choose our HIV
          self-testing kit
        </p>
      </div>
      <div className="right-section">
        <form>
          <div className="right-section-heading">
            <div className="right-section-title">Admin Login</div>
           
          </div>

          <div className="input-container">
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="forgotpassword">
            <input
              type="checkbox"
              id="rememberme"
              name="rememberme"
              className="check-box"
            />
            <label htmlFor="rememberme" className="check-box">
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="button" onClick={handleLoginClick}>
            Login
          </button>
      
          
            
        </form>
      </div>

      {/* Render the AuthenticationCodePopup if isAuthCodePopupOpen is true */}
      {isAuthCodePopupOpen && (
        <AuthenticationCodePopup
          isOpen={isAuthCodePopupOpen}
          onRequestClose={() => setIsAuthCodePopupOpen(false)}
          onSubmit={(code) => {
            // Handle the authentication code submission here
            console.log("Authentication code submitted:", code);
            // You can perform further actions like setting the user as authenticated
          }}
        />
      )}
    </div>
  );
}

export default Login;
