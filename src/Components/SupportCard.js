import React from "react";
function SupportCard(props) {
  return (
    <div className="support-cards">
      <div className="front">
        <img src={props.image} alt={props.title} className="Support-card-image" />
        <p className="Support-card-title">{props.title}</p>
      </div>
    </div>
  );
}

export default SupportCard;