import React from "react";
import "./style.css";

export default function EventCard(props) {
  return(
    <div className="eventcard-container">
      <div className="eventcard-heading eventcard-block">
        <div className="eventcard-time">
          <i className="fas fa-clock"></i>&nbsp;
          {props.startTime} - {props.endTime}
        </div>
        <div 
          className={
            `eventcard-type 
            ${props.type === "Inspection" ? "inspection-event" : "auction-event"}`
          }
        >
          <i className="fas fa-glasses"></i>&nbsp;
          {props.type.toUpperCase()}
        </div>
      </div>
      <div className="eventcard-content eventcard-block">
        <div className="eventcard-address">
          {props.address}
        </div>
        <div className="eventcard-specs">
          <i className="fas fa-bed"></i>&nbsp;
          <span className="num-beds">{props.bedrooms}</span>&nbsp;&nbsp;
          <i className="fas fa-shower"></i>&nbsp;
          <span className="num-baths">{props.bathrooms}</span>&nbsp;&nbsp;
          <i className="fas fa-car"></i>&nbsp;
          <span className="num-cars">{props.carSpaces}</span>&nbsp;&nbsp;
          <i className="fas fa-ruler-combined"></i>&nbsp;
          <span className="num-land">{props.landSize}m²</span>&nbsp;&nbsp;
        </div>
      </div>
    </div>
  )
};
