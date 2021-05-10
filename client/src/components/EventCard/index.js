import React from "react";
import "./style.css";

export default function EventCard(props) {
  return(
    <div className="eventcard-container">
      <div className="eventcard-heading">
        <div className="eventcard-time">
          {props.time}
        </div>
        <div className="eventcard-type">
          {props.type}
        </div>
      </div>
      <div className="eventcard-content">
        <div className="eventcard-address">
          {props.address}
        </div>
        <div className="eventcard-specs">
          {props.specs}
        </div>
      </div>
    </div>
  )
};
