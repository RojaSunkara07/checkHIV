import React, { useState } from 'react';
import '../Styles/Personalinfo.css';

function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    dateOfBirth: '',
    sexualOrientation: '',
    suburb: '',
    city: '',
    consentEmails: false,
    consentDataUsage: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <div className="personal-info">
      <h2>Complete Your <span className="account-color">Account</span> Setup</h2>
      <form className="personal-info-form">
        <div className="form-group">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sexualOrientation" className="form-label">
            Sexual Orientation:
          </label>
          <select
            id="sexualOrientation"
            name="sexualOrientation"
            value={formData.sexualOrientation}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select an option</option>
            <option value="heterosexual">Heterosexual</option>
            <option value="homosexual">Homosexual</option>
            <option value="bisexual">Bisexual</option>
            <option value="pansexual">Pansexual</option>
            <option value="asexual">Asexual</option>
            <option value="demisexual">Demisexual</option>
            <option value="queer">Queer</option>
            <option value="Other">Other</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="suburb" className="form-label">
            Suburb:
          </label>
          <input
            type="text"
            id="suburb"
            name="suburb"
            value={formData.suburb}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select a city</option>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Perth">Perth</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Canberra">Canberra</option>
            <option value="Hobart">Hobart</option>
            <option value="Darwin">Darwin</option>
            <option value="Other">Other</option>
            {/* Add more city options */}
          </select>
        </div>
        <div className="form-group-checked">
          <label htmlFor="consentEmails" className="form-label">
            <input
              type="checkbox"
              id="consentEmails"
              name="consentEmails"
              checked={formData.consentEmails}
              onChange={handleChange}
              className="checkbox-input" 
            />
            I consent to receive emails or notifications about HIV testing and related information
          </label>
        </div>

        <div className="form-group-checked">
          <label htmlFor="consentDataUsage" className="form-label">
            <input
              type="checkbox"
              id="consentDataUsage"
              name="consentDataUsage"
              checked={formData.consentDataUsage}
              onChange={handleChange}
              className="checkbox-input" 
            />
            I consent to allow my data to be used for research or statistical purposes
          </label>
        </div>

        <button type="button" className="skip-button">
          Skip
        </button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
