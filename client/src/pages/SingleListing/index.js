import React, { useState, useEffect } from "react";
// react-router-dom
import { Link, useLocation } from "react-router-dom";
// Child components
import NavBar from "../../components/NavBar";
// Material Design 
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// CSS
import "./style.css";
// Moment.js
import moment from "moment";
// API routes
import domainAPI from "../../utils/domainAPI";

export default function SingleListing() {
  let { state } = useLocation();
  // States
  const [listing, setListing] = useState({});

  useEffect(() => {
    console.log(state)
    domainAPI.getSingleListing(state.id)
      .then(res => {
        setListing(res.data);
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
            <img key={image.url} src={image.url} alt={image.url} />
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
            {listing.headline}
          </div>
          <div className="single-listing-description"
            dangerouslySetInnerHTML={{ __html: listing.description }}
          ></div>
          <hr />
          <div className="single-listing-inspections">
            <h4>Inspection Times</h4>
            {listing.inspectionDetails.inspections.length > 0 ?
              <table>
                <tbody>
                  {listing.inspectionDetails.inspections.map(inspection => (
                    <tr key={inspection.openingDateTime}>
                      <td>
                        <i className="far fa-calendar"></i>&nbsp;
                        {moment(inspection.openingDateTime).format("ddd D MMMM")}
                      </td>
                      <td>
                        {`${moment(inspection.openingDateTime).format("h:mma")} - 
                        ${moment(inspection.closingDateTime).format("h:mma")}`}
                      </td>
                      <td>
                        <IconButton aria-label="add-to-schedule"
                          style={{ padding: "5px" }}
                        >
                          <AddCircleIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> : <span>No inspections scheduled</span>
            }
          </div>
          <div className="single-listing-auction">
            <h4>Auction</h4>
            {listing.saleDetails.saleMethod === "auction" ?
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i className="fas fa-gavel"></i>&nbsp;
                      <span className="single-listing-auction-span">
                        {`${moment(listing.saleDetails.auctionDetails.auctionSchedule.openingDateTime).format("ddd D MMMM")} 
                        (${listing.saleDetails.auctionDetails.auctionSchedule.locationDescription})`}
                      </span>
                    </td>
                    <td>
                      {moment(listing.saleDetails.auctionDetails.auctionSchedule.openingDateTime).format("h:mma")} 
                    </td>
                    <td>
                      <IconButton aria-label="add-to-schedule"
                        style={{ padding: "5px" }}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </td>
                  </tr>
                </tbody>
              </table>
              : <span>No auction scheduled</span>
            } 
          </div>
          <hr />
          <div className="single-listing-agent">
            <h4>{state.advertiser.name}</h4>
            <div className="single-listing-agent-info">
              <table>
                <tbody>
                  {state.advertiser.contacts.map(agent => (
                    <tr>
                      <td className="single-listing-agent-image">
                        <img src={agent.photoUrl} alt="" />
                      </td>
                      <td>{agent.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="single-listing-agency"
              style={{ background: state.advertiser.preferredColourHex }}
            >
              <img src={state.advertiser.logoUrl}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};