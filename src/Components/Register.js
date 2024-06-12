import React from "react";
import "../Styles/Register.css";
import Image from "../Assets/login.png";
import Facebook from "../Assets/faceboook.png";
import Google from "../Assets/google.png";
import Twitter from "../Assets/twitter.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const personalinfobutton = () => {
  
    navigate("/redirect");
  };

  return (
    <div class="register-container">
      <div class="register-right-section">
        <form>
          <div className="register-right-section-heading">
            <div className="register-right-section-title">Register</div>
            <div className="register-right-section-sub-title">
              Already have a account?<a href="#">SignIn to your account</a>
            </div>
          </div>

          <div class="register-input-container">
            <div className="name">
              <input
                type="text"
                id="firstname"
                name="firstname"
                required
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                required
                placeholder="Last Name"
              />
            </div>
            <div className="name">
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                required
                placeholder="Phone Number"
              />
            </div>
            <div className="name">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
              />
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                required
                placeholder="Confirm Password"
              />
            </div>
            
          </div>
          <div className="register-forgotpassword">
            <input
              type="checkbox"
              id="rememberme"
              name="rememberme"
              className="check-box"
            />
            <label for="rememberme" className="check-box">
              Remember me
            </label>
          </div>
          <div className="register-terms">
            <input
              type="checkbox"
              id="rememberme"
              name="rememberme"
              className="check-box"
            />
            <label for="register-terms" className="check-box">
              I agree to the<a href="#">Terms and Privacy Policy</a>
            </label>

           
          </div>

          <button type="submit" onclick={personalinfobutton}>Register</button>
          <div className="social">
            <p>or login with</p>
            <br></br>
            <div className="icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="social-icon"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={Twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={Google} alt="Google" />
              </a>
            </div>
          </div>
        </form>
      </div>
      <div class="register-left-section">
        <img src={Image} alt="login" className="register-left-section-img" />
        <p className="register-left-section-description">
          No judgment, No hassle just accurate results Choose our HIV
          self-testing kit
        </p>
      </div>
    </div>
  );
}

export default Register;
