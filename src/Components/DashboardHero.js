import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/DashboardHero.css";

function DashboardHero() { // Change the component name here
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/redirect");
  };

  const openWebLink = () => {
    window.open("https://atomohivtest.com/home.php", "_blank");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      {/* Profile Picture */}
      <div className="profile-picture">
        <FontAwesomeIcon icon={faUser} size="lg" />
        {/* You can replace the above FontAwesome icon with your actual profile picture */}
      </div>

      {/* Notification Toggle */}
      <div className="notification-toggle">
        <FontAwesomeIcon icon={faBell} size="lg" />
        {/* You can add functionality to toggle notifications when this icon is clicked */}
      </div>

      

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default DashboardHero; // Change the export name here
