import React from "react";
// CSS
import "./style.css";

export default function ListingCard(props) {
  return (
    <div className="listingCard-box">
      <div className="listingCard-image">
        <img src={props.src} alt={props.alt} width="355px" />
      </div>
      <div className="listingCard-info">
        <div className="listingCard-priceHeading">
          {props.priceDetails}
        </div>
        <div className="listingCard-address">
          {props.address}
        </div>
        <div className="listingCard-propertySpecs">
          <i className="fas fa-bed"></i>&nbsp;
          <span className="num-beds">{props.bedrooms ? props.bedrooms : "-"}</span>&nbsp;&nbsp;
          <i className="fas fa-shower"></i>&nbsp;
          <span className="num-baths">{props.bathrooms ? props.bathrooms : "-"}</span>&nbsp;&nbsp;
          <i className="fas fa-car"></i>&nbsp;
          <span className="num-cars">{props.carSpaces ? props.carSpaces : "-"}</span>&nbsp;&nbsp;
          <i className="fas fa-ruler-combined"></i>&nbsp;
          <span className="num-land">{props.landSize ? props.landSize : "- "}m²</span>&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};