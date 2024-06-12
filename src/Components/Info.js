import React, { useState } from "react";
import InformationCard from "./InformationCard";
import SupportCard from "./SupportCard";
import TestKit from "../Assets/TestKit.png";
import Lancet from "../Assets/Lancet.png";
import AlcoholSwab from "../Assets/AlcoholSwab.png";
import Stabilizer from "../Assets/Stabilizer.png";
import Referrals from "../Assets/Referrals.png";
import Councelling from "../Assets/Counseling.png";
import SupportGroups from "../Assets/SupportGroups.png";
import MentalHealth from "../Assets/MentalHealth.png";
import Financial from "../Assets/Financial.png";
import Legal from "../Assets/Legal.png";
import vedio from "../Assets/Testvedio.mp4";
import "../Styles/Info.css";

function Info() {
  const [showReferralsPopup, setShowReferralsPopup] = useState(false);
  const [showCounsellingPopup, setShowCounsellingPopup] = useState(false);
  const [showsupportpopup, setshowsupportpopup] = useState(false);
  const [showmentalpopup, setshowmentalpopup] = useState(false);

  const openWebLink = () => {
    window.open("https://atomohivtest.com/ARST-OA-001_Atomo_HIV_ST_Galileo_Platform_IFUArtwork_TGA_rev_7_Web_Version.pdf", "_blank");
  };


  function openReferralsPopup() {
    setShowReferralsPopup(true);
  }

  function closeReferralsPopup() {
    setShowReferralsPopup(false);
  }
  
  function openCounsellingPopup() {
    setShowCounsellingPopup(true);
  }

  function closeCounsellingPopup() {
    setShowCounsellingPopup(false);
  }
  function opensupportpopup() {
    setshowsupportpopup(true);
  }

  function closesupportpopup() {
    setshowsupportpopup(false);
  }
 

  return (
    <div className="info-section" id="guide">
      <div className="info-title-content">
        <div className="info-left">
          <h3 className="info-title">
            <span>How can I use the Kit?</span>
          </h3>
          <p className="info-sub-title">
            <span>Testing made easy</span>
          </p>
          <p className="info-description">
            Your Guide to Hassle-Free HIV self testing
            <br />
            <a href="#" className="instruction-manual" onClick={openWebLink}>
              Learn More
            </a>
          </p>
        </div>
        <div className="info-right">
          <video width="640" height="360" controls>
            <source id="vedio" src={vedio} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Test Kit"
          description="The main component that detects HIV antibodies or antigens in the sample."
          image={TestKit}
        />

        <InformationCard
          title="Lancet"
          description="Tool used to prick the finger for blood collection."
          image={Lancet}
        />

        <InformationCard
          title="Alcohol Swab"
          description="Used to clean the area before pricking the finger."
          image={AlcoholSwab}
        />
        <InformationCard
          title="Stabilizer"
          description="Liquid used to prepare the blood sample for testing."
          image={Stabilizer}
        />
      </div>
      <div className="Support-section">
        <p className="Support-title">
          <span id="help">Need Help?</span>
        </p>
        <div className="support-cards-content">
          <div className="support-card" onClick={openReferralsPopup}>
            <SupportCard image={Referrals} title="Referrals"/>
          </div>
          <div className="support-card" onClick={openCounsellingPopup}>
          <SupportCard image={Councelling} title="Councelling" />
          </div>
          <div className="support-card" onClick={opensupportpopup}>
          <SupportCard image={SupportGroups} title="Support Groups" />
          </div>
          <div className="support-card" >
          <SupportCard image={MentalHealth} title="Mental Health" />
          </div>
          <div className="support-card" onClick={openReferralsPopup}>
          <SupportCard image={Financial} title="Financials" />
          </div>
          <div className="support-card" onClick={openReferralsPopup}>
          <SupportCard image={Legal} title="Legal Support" />
          </div>
        </div>
      </div>

      {showReferralsPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Referrals</h2>
            <table>
              <thead>
                <tr>
                  <th>Hospital Name</th>
                  <th>Number</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hospital 1</td>
                  <td>123-456-7890</td>
                  <td>hospital1@example.com</td>
                  <td>123 Main St, City</td>
                </tr>
                <tr>
                  <td>Hospital 2</td>
                  <td>987-654-3210</td>
                  <td>hospital2@example.com</td>
                  <td>456 Elm St, Town</td>
                </tr>
              </tbody>
            </table>
            <button onClick={closeReferralsPopup}>Close</button>
          </div>
        </div>
      )}
      {showCounsellingPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Councelling</h2>
            <table>
              <thead>
                <tr>
                  <th>Councelling Name</th>
                  <th>Number</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Councelling 1</td>
                  <td>123-456-7890</td>
                  <td>hospital1@example.com</td>
                  <td>123 Main St, City</td>
                </tr>
                <tr>
                  <td>Councelling 2</td>
                  <td>987-654-3210</td>
                  <td>hospital2@example.com</td>
                  <td>456 Elm St, Town</td>
                </tr>
              </tbody>
            </table>
            <button onClick={closeCounsellingPopup}>Close</button>
          </div>
        </div>
      )}
      {showsupportpopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Support</h2>
            <table>
              <thead>
                <tr>
                  <th>Councelling Name</th>
                  <th>Number</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Councelling 1</td>
                  <td>123-456-7890</td>
                  <td>hospital1@example.com</td>
                  <td>123 Main St, City</td>
                </tr>
                <tr>
                  <td>Councelling 2</td>
                  <td>987-654-3210</td>
                  <td>hospital2@example.com</td>
                  <td>456 Elm St, Town</td>
                </tr>
              </tbody>
            </table>
            <button onClick={closesupportpopup}>Close</button>
          </div>
        </div>
      )}
     
     
    </div>
  );
}

export default Info;
