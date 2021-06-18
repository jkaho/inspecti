import React, { useState, useEffect } from "react";
// react-router-dom
import { useHistory, useLocation } from "react-router-dom";
// Child components
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
import SimpleModal from "../../components/Modal";
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
import eventsAPI from "../../utils/eventsAPI";

export default function SingleListing(props) {
  const history = useHistory();
  let { state, results, searchWord, searchData } = useLocation();
  // States
  const [listing, setListing] = useState();
  const [eventToAdd, setEventToAdd] = useState();
  const [popup, setPopupState] = useState({ open: false, type: "", severity: "success", message: "" });
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "",
    title: "",
    text: ""
  });

  useEffect(() => {
    domainAPI.getSingleListing(state.id)
      .then(res => {
        setListing(res.data);
      })
      .catch(err => {
        console.log(err);
        setPopupState({
          open: true,
          type: "error",
          severity: "error",
          message: "An error occurred while retrieving data from the database. Please try again later."
        });
      });
  }, [state]);

  // Helper functions
  const handleBackToSearchResultsClick = () => {
    history.push({
      pathname: "/results",
      state: results,
      searchData: searchData,
      searchWord: searchWord
    });
  };

  const handleAddEventButtonClick = (event) => {
    let eventData;
    if (event.target.matches("svg")) {
      eventData = event.target.parentElement.parentElement.dataset;
    } else if (event.target.matches("path")) {
      eventData = event.target.parentElement.parentElement.parentElement.dataset;
    }

    const eventToAddData = {
      eventType: eventData.event,
      startTime: eventData.start,
      endTime: eventData.event === "Inspection" ? eventData.end : null,
      propertyAddress: eventData.address,
      propertyType: eventData.property,
      bedrooms: eventData.bedrooms === "" ? null : eventData.bedrooms,
      bathrooms: eventData.bathrooms === "" ? null : eventData.bathrooms,
      carSpaces: eventData.carspaces === "" ? null : eventData.carspaces,
      landSize: eventData.area === "" ? null : eventData.area,
    };

    setEventToAdd(eventToAddData);
    eventsAPI.getPropertyEvents(eventToAddData.propertyAddress)
      .then(res => {
        console.log(res);
        if (res.data.length > 0) {
          res.data.forEach(item => {
            console.log(moment(eventToAddData.startTime).format("YYYY-MM-DD HH:mm:ss"), moment(item.startTime).format("YYYY-MM-DD HH:mm:ss"))
            if (
              item.eventType === eventToAddData.eventType &&
              moment(item.startTime).format("YYYY-MM-DD HH:mm:ss") === 
              moment(eventToAddData.startTime).format("YYYY-MM-DD HH:mm:ss")
            ) {
              setPopupState({
                open: true,
                type: "eventAddBlock",
                severity: "warning",
                message: "This event is already in your schedule"
              });
            } else {
              setModalState({
                isOpen: true,
                type: "eventAdd",
                title: `Add ${eventToAddData.eventType} Event`,
                text: `Are you sure you want to add an ${eventToAddData.eventType.toLowerCase()} event for 
                "${eventToAddData.propertyAddress}" on ${moment(eventToAddData.startTime).format("dddd Do MMMM, h:mma")}?`
              });
            }
          });
        } else {
          setModalState({
            isOpen: true,
            type: "eventAdd",
            title: `Add ${eventToAddData.eventType} Event`,
            text: `Are you sure you want to add an ${eventToAddData.eventType.toLowerCase()} event for 
            "${eventToAddData.propertyAddress}" on ${moment(eventToAddData.startTime).format("dddd Do MMMM, h:mma")}?`
          });
        }
      })
      .catch(err => {
        console.log(err);
        setPopupState({ open: false, type: "", severity: "success", message: "" });
      });
  };

  const handleAddEventConfirm = () => {
    eventsAPI.createEvent(eventToAdd)
      .then(res => {
        console.log(res);
        setModalState({
          isOpen: false,
          type: "",
          title: "",
          message: ""
        });
        setPopupState({
          open: true,
          type: "addEventSuccess",
          severity: "success",
          message: "Event successfully added to schedule!"
        });
      })
      .catch(err => {
        console.log(err);
        setPopupState({
          open: true,
          type: "error",
          severity: "error",
          message: "An error occurred while adding data to the database. Please try again later."
        });
      });
  };

  const formatPropertyType = (str) => {
    let propertyType;
    str.toLowerCase() === "apartmentunitflat" ? propertyType = "Apartment" :
    str.toLowerCase() === "house" ? propertyType = "House" :
    str.toLowerCase() === "townhouse" ? propertyType = "Townhouse" :
    propertyType = str;

    return propertyType;
  };

  const listingInfoSection = (
    <>
    {listing ? 
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
            <span>{formatPropertyType(listing.propertyTypes[0])}</span>
          </div>
          <div className="single-listing-images-responsive">
            {listing.media.map(image => (
              <img key={image.url} src={image.url} alt={image.url} />
            ))}
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
                      {props.id !== "" ? 
                        <td>
                          <IconButton aria-label="add-to-schedule"
                            style={{ padding: "5px" }}
                            onClick={handleAddEventButtonClick}
                            data-event="Inspection"
                            data-start={inspection.openingDateTime}
                            data-end={inspection.closingDateTime}
                            data-bedrooms={listing.bedrooms ? listing.bedrooms : ""}
                            data-bathrooms={listing.bathrooms ? listing.bathrooms : ""}
                            data-carspaces={listing.carspaces ? listing.carspaces : ""}
                            data-area={listing.buildingAreaSqm ? listing.buildingAreaSqm : ""}
                            data-address={listing.addressParts.displayAddress}
                            data-property={formatPropertyType(listing.propertyTypes[0])}
                          >
                            <AddCircleIcon
                              className="addcircle-icon"
                            />
                          </IconButton>
                        </td> : <></>
                      }
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
                    {props.id !== "" ? 
                      <td>
                        <IconButton aria-label="add-to-schedule"
                          onClick={handleAddEventButtonClick}
                          data-event="Auction"
                          data-start={listing.saleDetails.auctionDetails.auctionSchedule.openingDateTime}
                          data-bedrooms={listing.bedrooms ? listing.bedrooms : ""}
                          data-bathrooms={listing.bathrooms ? listing.bathrooms : ""}
                          data-carspaces={listing.carspaces ? listing.carspaces : ""}
                          data-area={listing.buildingAreaSqm ? listing.buildingAreaSqm : ""}
                          data-address={listing.addressParts.displayAddress}
                          data-property={formatPropertyType(listing.propertyTypes[0])}
                          style={{ padding: "5px" }}
                        >
                          <AddCircleIcon
                            className="addcircle-icon"
                          />
                        </IconButton>
                      </td> : <></>
                    }
                  </tr>
                </tbody>
              </table>
              : <span>No auction scheduled</span>
            } 
          </div>
          <hr />
          <div className="domain-listing-url">
            <a href={listing.seoUrl} target="_blank" rel="noreferrer noopener">
              View this listing at domain.com.au
            </a>
          </div>
          <hr />
          <div className="single-listing-agent">
            <h4>{state.advertiser.name}</h4>
            <div className="single-listing-agent-info">
              <table>
                <tbody>
                  {state.advertiser.contacts.map(agent => (
                    <tr key={agent.name}>
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
              <img src={state.advertiser.logoUrl} alt=""></img>
            </div>
          </div>
        </div> : <></>
      }
    </>
  );

  return (
    <>
      <NavBar />
      <div className="back-to-search-results">
        {/* <Link to="/results" style={{ textDecoration: "none" }}> */}
        <Button startIcon={<ChevronLeftIcon />}
          onClick={handleBackToSearchResultsClick}
        >
          SEARCH RESULTS
        </Button>
        {/* </Link> */}
      </div>
      {listing ? <div className="single-listing-box">
        <div className="listing-info-responsive"> {listingInfoSection}</div>
          <div className="single-listing-images">
            {listing.media.map(image => (
              <img key={image.url} src={image.url} alt={image.url} />
            ))}
          </div>
          <div className="listing-info-side">{listingInfoSection}</div>
        </div>: ""}
      <SimpleModal
        title={modalState.title}
        text={modalState.text}
        yesClick={handleAddEventConfirm}
        noClick={() => setModalState({
          isOpen: false,
          type: "",
          title: "",
          text: ""
        })}
        modalState={modalState.isOpen}
      />
      {listing ? <Footer /> : <></>}
      <Popup 
        open={popup.open}
        handleClose={() => setPopupState({ open: false, type: "", severity: "success", message: "" })}
        severity={popup.severity}
        message={popup.message}
      />
    </>
  );
};