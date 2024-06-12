import React from "react";
import Doctor from "../Assets/HIV_test_report.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };
  const anonymousuploadbutton = () => {
    navigate("/anonymousupload");
  };


  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content" id="results">
        <h3 className="ba-title">
          <span>Why Submit your Test Results ?</span>
        </h3>
        <p className="ba-description">
          Your decision to upload your HIV test results can save lives. It's a
          simple action with profound impacts. Your privacy is safeguarded, and your
          choice can help reduce stigma and improve healthcare for everyone.
          Join us in making a difference – upload your results now.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Easy Kit Accessability
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Access to Support Services
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Access to Care and Treatment
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Enrollment Easy and Quick
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Register
        </button>
        <button
          className="text-appointment-btn"
          type="button"
          onClick={anonymousuploadbutton}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Anonmoyous Upload
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
