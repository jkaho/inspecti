import React, { useState, useEffect } from "react";
// react-router-dom
import { Link, useLocation } from "react-router-dom";
// Child components
import NavBar from "../../components/NavBar";
// Material Design 
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// CSS
import "./style.css";
// API routes
import domainAPI from "../../utils/domainAPI";

export default function SingleListing() {
  let { state } = useLocation();
  // States
  const [listing, setListing] = useState({});

  useEffect(() => {
    domainAPI.getSingleListing(state)
      .then(res => {
        setListing(res.data);
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }, [state]);

  return (
    <div>
      <NavBar />
      <div className="back-to-search-results">
        <Link to="/results" style={{ textDecoration: "none" }}>
          <Button startIcon={<ChevronLeftIcon />}>
            SEARCH RESULTS
          </Button>
        </Link>
      </div>
      <div className="single-listing-box">
        <div className="single-listing-images">
          {listing.media.map(image => (
            <img src={image.url} alt={image.url} />
          ))}
        </div>
        <div className="single-listing-info">
          <div className="single-listing-priceHeading">
            <h3>
              {listing.priceDetails.displayPrice ? listing.priceDetails.displayPrice : ""}
            </h3>
          </div>
          <div className="single-listing-address">
            {listing.addressParts.displayAddress}
          </div>
          <div className="single-listing-propertySpecs">
            <i className="fas fa-bed"></i>&nbsp;
            <span className="num-beds">
              {listing.bedrooms ? listing.bedrooms : "-"}
            </span>&nbsp;&nbsp;
            <i className="fas fa-shower"></i>&nbsp;
            <span className="num-baths">
              {listing.bathrooms ? listing.bathrooms : "-"}
            </span>&nbsp;&nbsp;
            <i className="fas fa-car"></i>&nbsp;
            <span className="num-cars">
              {listing.carspaces ? listing.carspaces : "-"}
            </span>&nbsp;&nbsp;
            <i className="fas fa-ruler-combined"></i>&nbsp;
            <span className="num-land">
              {listing.buildingAreaSqm ? listing.buildingAreaSqm : "- "}m²
            </span>&nbsp;&nbsp;
          </div>
          <hr />
          <div className="single-listing-heading">
            <h5>{listing.headline}</h5>
          </div>
          <div className="single-listing-description"
            dangerouslySetInnerHTML={{ __html: listing.description }}
          ></div>
          <hr />
          <div className="single-listing-inspections">
            <h4>Inspection Times</h4>
          </div>
          <div className="single-listing-auction">
            <h4>Auction</h4>
          </div>
          <hr />
          <div className="single-listing-agent">
            <h4>Agent</h4>
          </div>
        </div>
      </div>
    </div>
  );
};