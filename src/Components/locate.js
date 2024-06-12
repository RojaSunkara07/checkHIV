import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import "../Styles/locate.css";

function LocationMap() {
  // Define an array of locations with their names, coordinates, and categories
  const locations = [
    {
      name: "Hospital 1",
      latitude: -37.8136,
      longitude: 144.9631,
      category: "Hospitals",
    },
    {
      name: "Hospital 2",
      latitude: -37.8111,
      longitude: 144.9514,
      category: "Hospitals",
    },
    {
      name: "Counseling Center 1",
      latitude: -37.81,
      longitude: 144.955,
      category: "Counseling",
    },
    {
      name: "Counseling Center 2",
      latitude: -37.815,
      longitude: 144.957,
      category: "Counseling",
    },
    {
      name: "Support Group 1",
      latitude: -37.814,
      longitude: 144.962,
      category: "HIV Support Groups",
    },
    {
      name: "Support Group 2",
      latitude: -37.812,
      longitude: 144.965,
      category: "HIV Support Groups",
    },
    {
      name: "Mental Health Center 1",
      latitude: -37.809,
      longitude: 144.954,
      category: "Mental Health",
    },
    {
      name: "Mental Health Center 2",
      latitude: -37.8115,
      longitude: 144.9565,
      category: "Mental Health",
    },
    {
      name: "Financial Support Office 1",
      latitude: -37.8105,
      longitude: 144.9635,
      category: "Finance",
    },
    {
      name: "Legal Support Office 1",
      latitude: -37.8135,
      longitude: 144.9645,
      category: "Legal Support",
    },
    // Add more locations as needed
  ];

  // Set the default selected category and location
  const defaultCategory = "Hospitals";
  const defaultLocationName = "Hospital 1";

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Filter locations based on the selected category
  const filteredLocations = locations.filter(
    (location) => location.category === selectedCategory
  );

  // Function to handle the selection of a category
  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setSelectedLocation(null); // Reset the selected location when changing the category
  };

  // Function to handle the selection of a location within the selected category
  const handleLocationChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLocation(selectedValue);
  };

  // Effect to initialize the selected category and location when the component mounts
  useEffect(() => {
    setSelectedCategory(defaultCategory);
    const defaultLocationIndex = filteredLocations.findIndex(
      (location) => location.name === defaultLocationName
    );
    setSelectedLocation(defaultLocationIndex);
  }, []);

  return (
    <div className="locate-main">
      <div id="maps">
                <div className="profile-picture">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                </div>

                {/* Notification Toggle */}
                <div className="notification-toggle">
                    <FontAwesomeIcon icon={faBell} size="lg" />
                </div>
    <div className="locate-body">
      <h1>Support Locations</h1>
      <div className="locate-selectors">
        <div className="locate-category">
            <label htmlFor="categorySelect">Select a category:</label>
            <select
            id="categorySelect"
            onChange={handleCategoryChange}
            value={selectedCategory}
            >
            <option value="Hospitals">Hospitals</option>
            <option value="Counseling">Counseling</option>
            <option value="HIV Support Groups">HIV Support Groups</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Finance">Finance</option>
            <option value="Legal Support">Legal Support</option>
            </select>
        </div>
    
      {filteredLocations.length > 0 && (
        <div className="locate-location">
          <label htmlFor="locationSelect">Select a location:</label>
          <select
            id="locationSelect"
            onChange={handleLocationChange}
            value={selectedLocation}
          >
            <option value="">Select a location</option>
            {filteredLocations.map((location, index) => (
              <option key={index} value={index}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
       
        
      )}
       </div>
      {selectedLocation !== null && (
        <div className="locate-maps"> 
          <p>You selected: {filteredLocations[selectedLocation].name}</p>
          <iframe
            title="Google Maps"
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://www.google.com/maps?q=${filteredLocations[selectedLocation].latitude},${filteredLocations[selectedLocation].longitude}&output=embed`}
          ></iframe>
        </div>
        
      )}
        </div>
    </div>
    </div>
  );
}

export default LocationMap;
