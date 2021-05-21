import React from "react";
// CSS
import "./style.css";

export default function ListingCard(props) {
  return (
    <div className="listingCard-box">
      <div className="listingCard-image">
        <img src="" alt="" />
      </div>
      <div className="listingCard-info">
        <div className="listingCard-priceHeading">
          Contact Agent
        </div>
        <div className="listingCard-address">
          54 Artarmon Rd Artarmon, NSW 2064
        </div>
        <div className="listingCard-propertySpecs">
          <i className="fas fa-bed"></i>&nbsp;
          <span className="num-beds">4</span>&nbsp;&nbsp;
          <i className="fas fa-shower"></i>&nbsp;
          <span className="num-baths">3</span>&nbsp;&nbsp;
          <i className="fas fa-car"></i>&nbsp;
          <span className="num-cars">2</span>&nbsp;&nbsp;
          <i className="fas fa-ruler-combined"></i>&nbsp;
          <span className="num-land">627m²</span>&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};