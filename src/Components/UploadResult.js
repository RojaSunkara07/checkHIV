import React, { useState } from 'react';
import '../Styles/UploadResult.css';
import backImage from '../Assets/back.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

import {
  faUser,
  faSignOutAlt,
  faUsers,
  faQuestionCircle,
  faReceipt,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

function UploadResult() {
  const [additionalData, setAdditionalData] = useState({
    testKitID: '',
    suburb: '',
    symptoms: [],
    otherSymptoms: '', // New field for other symptoms
    resultStatus: '', // New field for HIV status dropdown
    gender: '', // New field for gender
    uploadedFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAdditionalData({
      ...additionalData,
      [name]: value,
    });
  };

  const handleSymptomsChange = (e) => {
    const { name, checked } = e.target;
    const updatedSymptoms = checked
      ? [...additionalData.symptoms, name]
      : additionalData.symptoms.filter((symptom) => symptom !== name);

    setAdditionalData({
      ...additionalData,
      symptoms: updatedSymptoms,
    });
  };

  const handleOtherSymptomsChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData({
      ...additionalData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAdditionalData({
      ...additionalData,
      uploadedFile: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', additionalData);
    // Add logic to handle form submission, including file upload
  };

  return (
    <div className="additional-info">
      <h2>Anonymous Upload</h2>
      <a className='anonymous-back' href="/checkhiv">
      <span className='anonymous-back-icon'><FontAwesomeIcon icon={faArrowLeft} size="lg" /></span>
        <span className='anonymous-back-title'> Back</span> 
        </a>
      <form className="additional-info-form" onSubmit={handleSubmit}>
        <div className="form-columns">
          <div className="left-column">
            <div className="anonymous-form-group">
              <label htmlFor="testKitID" className="anonymous-form-label">
                Test Kit ID
              </label>
              <input
                type="text"
                id="testKitID"
                name="testKitID"
                value={additionalData.testKitID}
                onChange={handleChange}
                className="anonymous-form-input"
                required
              />
            </div>

            <div className="anonymous-form-group">
              <label htmlFor="suburb" className="anonymous-form-label">
                Suburb
              </label>
              <input
                type="text"
                id="suburb"
                name="suburb"
                value={additionalData.suburb}
                onChange={handleChange}
                className="anonymous-form-input"
                required
              />
            </div>
          </div>

          <div className="right-column">
            {/* Add the HIV Status dropdown */}
            <div className="anonymous-form-group">
              <label htmlFor="resultStatus" className="anonymous-form-label">
                HIV Status
              </label>
              <select
                id="resultStatus"
                name="resultStatus"
                value={additionalData.resultStatus}
                onChange={handleChange}
                className="anonymous-form-input"
                required
              >
                <option value="">Select</option>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
              </select>
            </div>

            {/* Add the gender dropdown */}
            <div className="anonymous-form-group">
              <label htmlFor="gender" className="anonymous-form-label">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={additionalData.gender}
                onChange={handleChange}
                className="anonymous-form-input"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
           {/* Submit button below left column */}
     
        </div>

       
      </form>
      <button type="submit" className="submit-button">
          Submit
        </button>
    </div>
  );
}

export default UploadResult;
