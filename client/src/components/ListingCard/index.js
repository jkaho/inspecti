import React from "react";
// CSS
import "./style.css";
// Moment.js
import moment from "moment";

export default function ListingCard(props) {
  return (
    <div data-listing={`listingCardBox-${props.id}`} className="listingCard-box" onClick={props.onClick}>
      <div data-listing={`listingCardBox-${props.id}`} className="listingCard-image">
        <img data-listing={`listingCardBox-${props.id}`} src={props.src} alt={props.alt} />
      </div>
      <div data-listing={`listingCardBox-${props.id}`} className="listingCard-info">
        <div data-listing={`listingCardBox-${props.id}`} className="listingCard-agency-logo"
          style={{ background: props.agencyColour }}
        >
          <img data-listing={`listingCardBox-${props.id}`} src={props.agencyLogo} alt="" />
        </div>
        <div data-listing={`listingCardBox-${props.id}`} className="listingCard-priceHeading">
          {props.priceDetails}
        </div>
        <div data-listing={`listingCardBox-${props.id}`} className="listingCard-address">
          {props.address}
        </div>
        <div data-listing={`listingCardBox-${props.id}`} className="listingCard-propertySpecs">
          <i data-listing={`listingCardBox-${props.id}`} className="fas fa-bed"></i>&nbsp;
          <span data-listing={`listingCardBox-${props.id}`} className="num-beds">{props.bedrooms ? props.bedrooms : "-"}</span>&nbsp;&nbsp;
          <i data-listing={`listingCardBox-${props.id}`} className="fas fa-shower"></i>&nbsp;
          <span data-listing={`listingCardBox-${props.id}`} className="num-baths">{props.bathrooms ? props.bathrooms : "-"}</span>&nbsp;&nbsp;
          <i data-listing={`listingCardBox-${props.id}`} className="fas fa-car"></i>&nbsp;
          <span data-listing={`listingCardBox-${props.id}`} className="num-cars">{props.carSpaces ? props.carSpaces : "-"}</span>&nbsp;&nbsp;
          <i data-listing={`listingCardBox-${props.id}`} className="fas fa-ruler-combined"></i>&nbsp;
          <span data-listing={`listingCardBox-${props.id}`} className="num-land">{props.landSize ? props.landSize : "- "}m²</span>&nbsp;&nbsp;
        </div>
        <div data-listing={`listingCardBox-${props.id}`} className="listingCard-inspection">
          {props.inspectionTime ? 
            `NEXT INSPECTION ON ${moment(props.inspectionTime).format("Mo MMM")} @${moment(props.inspectionTime).format("hA")}` :
            "NO INSPECTIONS SCHEDULED"
          }
        </div>
        <hr />
        <div data-listing={`listingCardBox-${props.id}`} className="listingCard-agent">
          <div data-listing={`listingCardBox-${props.id}`} className="listingCard-agent-photo">
            <img data-listing={`listingCardBox-${props.id}`} src={props.agentSrc} alt="" />
          </div>
          <div data-listing={`listingCardBox-${props.id}`} className="listingCard-agent-info">
            <div data-listing={`listingCardBox-${props.id}`} className="listingCard-agent-info-name">{props.agentName}</div>
            <div data-listing={`listingCardBox-${props.id}`} className="listingCard-agent-info-agency">{props.agency}</div>
          </div>
        </div>
      </div>
    </div>
  );
};