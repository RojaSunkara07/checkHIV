import React, { useState, useEffect } from "react";

import "../Styles/Login.css";

import Image from "../Assets/login.png";

import Facebook from "../Assets/faceboook.png";

import Google from "../Assets/google.png";

import Twitter from "../Assets/twitter.png";

import AuthenticationCodePopup from "../Components/Authentication";

import axios from "axios";

import { useNavigate } from "react-router-dom";

 

 

 

 

function Login() {

  const [isAuthCodePopupOpen, setIsAuthCodePopupOpen] = useState(false);
  
   const adminlogin = () => {
    navigate("/adminlogin");
  };

  const [values, setValues] = useState({

    email: "",

    password: "",

  });

  const [error, setError] = useState(null);

   const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const [browserInfo, setBrowserInfo] = useState("");

  const [locationInfo, setLocationInfo] = useState("");

  const [ipInfo, setIpInfo] = useState("");

  const [id, setId] = useState("");

  useEffect(() => {

    // Fetch browser info

    const browserInfo = window.navigator.userAgent;

    setBrowserInfo(browserInfo);

 

    // Fetch location info (assuming you have a function to get location details)

    getLocationInfo();

 

    // Fetch IP info from ipinfo.io

    axios

      .get("https://ipinfo.io/json")

      .then((response) => {

        const ipData = response.data;

        setIpInfo(ipData);

      })

      .catch((error) => {

        console.error("Error fetching IP info:", error);

      });

  }, []);

 

  const getLocationInfo = () => {

    // You can implement your own function to fetch location info here

    // For example, using the Geolocation API

    if ("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition((position) => {

        const location = `${position.coords.latitude},${position.coords.longitude}`;

        setLocationInfo(location);

      });

    }

  };

 

 

 

  const handleLoginClick = () => {

    setError(null); // Clear any previous error message

 

    // Check if email and password are provided and in the required format

    if (!values.email || !values.password) {

      setError("Email and password are required fields.");

      return;

    }

 

    // Prepare data to send to the server

    const loginData = {

      ...values,

      browserInfo,

      locationInfo,

      ipInfo,

    };

 

    // Perform authentication check using axios

    axios

      .post("http://localhost:8081/login", loginData)

      .then((res) => {

        if (res.data.Status === "Success") {

          const id = res.data.id;

          setId(id);

          console.log(id);

          localStorage.setItem('id', id);

 

 

 

         //console.log(res.data.OTP);

     const Rotp = res.data.OTP;

     setOtp(Rotp)

          setIsAuthCodePopupOpen(true);

        } else {

          setError("Invalid email or password");

        }

      })

      .catch((err) => {

        setError("An error occurred while logging in. Please try again.");

        console.log(err);

      });

  };

 

const handleCodeSubmit = (code) => {

  // Handle the authentication code submission here

  console.log("Authentication code submitted:", code);

  // You can perform further actions like setting the user as authenticated

 

  // Close the AuthenticationCodePopup

  setIsAuthCodePopupOpen(false);

 

  // Redirect to the dashboard page with the email as a query parameter

  const queryParams = new URLSearchParams();

  queryParams.append("email", values.email); // Include the email in the query parameter

 

  // Use the `navigate` function to navigate to the dashboard with the query parameter

 

  const email = queryParams.toString();

  navigate('/dashboard/'+id);

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

            <div className="right-section-title">Login</div>

            <div className="right-section-sub-title">

              Don't have an account?<a href="register.js"> Create Account</a>

            </div>

          </div>

          {error && <div className="error-message">{error}</div>}

 

          <div className="input-container">

            <input

              type="email"

              id="email"

              name="email"

              required

              placeholder="Email"

              onChange={(e) =>

                setValues({ ...values, email: e.target.value })

              }

            />

            <br />

            <input

              type="password"

              id="password"

              name="password"

              required

              placeholder="Password"

              onChange={(e) =>

                setValues({ ...values, password: e.target.value })

              }

            />

          </div>

          <div className="forgotpassword">

            <a href="/forgotpassword/#">Forgot password?</a>

          </div>

          <button type="button" onClick={handleLoginClick}>

            Login

          </button>
		  <a onClick={adminlogin}>Admin Login</a>

          <div className="social">

            <p>or login with</p>

            <br />

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

 

      {isAuthCodePopupOpen && (

        <AuthenticationCodePopup

          isOpen={isAuthCodePopupOpen}

          onRequestClose={() => setIsAuthCodePopupOpen(false)}

          onSubmit={handleCodeSubmit}

      otp={otp}

        />

      )}

    </div>

  );

}

 

export default Login;