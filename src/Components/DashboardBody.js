import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/DashboardBody.css"; // Import your dashboard styles
import NotificationPopup from "./Notificationpopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function DashboardBody() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dashboardtestDate, dashboardsetTestDate] = useState("");
  const [dashboardhivStatus, dashboardsetHivStatus] = useState("negative");
  // Change the component name here
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // Notification state
 // ... (other code)


// ... (other code)

  

 

  // Define the states for the form elements here
  const [testDate, setTestDate] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [hivStatus, setHivStatus] = useState("negative");

  const dashboardhandleTestDateChange = (e) => {
    setTestDate(e.target.value);
  };

  const handleSymptomsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
      option.value
    );
    setSelectedSymptoms(selectedOptions);
  };

  const dashboardhandleHivStatusChange = (status) => {
    setHivStatus(status);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };

  const handleTestDateChange = (e) => {
    setTestDate(e.target.value);
  };

  const handleHivStatusChange = (status) => {
    setHivStatus(status);
  };

  return (
    <div className="dashboard">
      {/* Profile Picture */}
      <div className="profile-picture">
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>

      {/* Notification Toggle */}
      <div className="notification-toggle">
        <FontAwesomeIcon icon={faBell} size="lg" />
      </div>
      <div className="logout">
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
      </div>

      {isNotificationOpen && (
        
        <div className="notification-popup">
          {/* Notification content goes here */}
          <p>You have a new notification!</p>
        </div>
      )}
      <NotificationPopup/>

      

      <div className="top-left">
        <div className="dashboard-dp">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>

        <div className="user-name">James Kennel</div>
        <div className="gender">
          <p>
            Gender : <span id="gender">Male</span>{" "}
          </p>
        </div>
        <div className="hiv-status">
          <p>
            HIV status : <span id="hiv-status">Positive</span>
          </p>
        </div>
        <div className="last-tested">
          <p>
            Last tested : <span id="last-tested-date">4th March 2023</span>
          </p>
        </div>
      </div>
      <div className="top-right">
        <h2>Add Test Results</h2>
        <form>
        <div className="form-group">
            <label htmlFor="testDate">Test Date:</label>
            <input
              type="date"
              id="testDate"
              name="testDate"
              placeholder="mm/dd/yyyy"
              value={testDate}
              onChange={handleTestDateChange}
            />
          </div>
        <div className="form-group">
            <label htmlFor="symptoms">Symptoms:</label>
            <div className="form-group">
              <div className="dropdown">
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                  Select Options
                </button>
                {isOpen && (
                  <div className="dropdown-content">
                    <label>
                      <input
                        type="checkbox"
                        value="Option 1"
                        checked={selectedOptions.includes("Option 1")}
                        onChange={handleOptionChange}
                      />{" "}
                      Option 1
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Option 2"
                        checked={selectedOptions.includes("Option 2")}
                        onChange={handleOptionChange}
                      />{" "}
                      Option 2
                    </label>
                    {/* Add more checkbox options as needed */}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="hivStatus">HIV Status:</label>
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  name="hivStatus"
                  value="negative"
                  checked={hivStatus === "negative"}
                  onChange={() => handleHivStatusChange("negative")}
                />
                Negative
              </label>
              <label>
                <input
                  type="radio"
                  name="hivStatus"
                  value="positive"
                  checked={hivStatus === "positive"}
                  onChange={() => handleHivStatusChange("positive")}
                />
                Positive
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );

  // Implement the logout function
  function handleLogout() {
    // Add logic for logging out the user
  }
}

export default DashboardBody;
