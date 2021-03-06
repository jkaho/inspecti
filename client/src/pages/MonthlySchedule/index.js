// React
import React, { useState, useEffect, useRef } from "react";
// react-router-dom
import { useHistory } from "react-router-dom";
// Child components
import FormModal from "../../components/FormModal";
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
import SideMenu from "../../components/SideMenu";
// Full Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// CSS
import "./style.css";
// API routes
import domainAPI from "../../utils/domainAPI";
import eventsAPI from "../../utils/eventsAPI";
// Moment.js
import moment from "moment";

export default function MonthlySchedule() {
  // States
  const [addEventModalIsOpen, setAddEventModalState] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState("Inspection");
  // const [hasAuction, setAuctionState] = useState(false);
  const [propertySpecs, setPropertySpecs] = useState({});
  const [address, setAddress] = useState();
  // const [addressQuery, setAddressQuery] = React.useState("");
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [addEventPopupIsOpen, setAddEventPopupState] = useState(false);
  const [popup, setPopup] = useState({ open: false, type: "", severity: "error", message: "" });
  const popupTimeout = 6000;

  // History
  const history = useHistory();

  // Refs
  const typeRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const addressRef = useRef();

  // Initial render
  useEffect(() => {
    getAllEvents();
  }, []);

  // Helper functions
  const getAllEvents = () => {
    eventsAPI.getAllEvents()
      .then(res => {
        let eventGroups = [];
        res.data.forEach(eventObj => {
          const eventObjDate = moment(eventObj.startTime).format("YYYY-MM-DD");
          const eventObjType = eventObj.eventType;
          eventGroups.push(eventObjDate + " " + eventObjType);
        });

        let existingEvents = [];
        for (let i = 0; i < eventGroups.length; i++) {
          if (!existingEvents.includes(eventGroups[i])) {
            existingEvents.push(eventGroups[i]);
            existingEvents.push(1);
          } else {
            const indexOfCounter = existingEvents.indexOf(eventGroups[i]) + 1;
            existingEvents[indexOfCounter]++;
          }
        }
        
        let events = [];
        for (let i = 0; i < existingEvents.length - 1; i += 2) {
          const eventType = existingEvents[i].split(" ")[1];
          const eventDate = existingEvents[i].split(" ")[0];
          let color = "rgb(105, 175, 224)";
          if (eventType === "Auction") {
            color = "rgb(240, 77, 93)";
          }

          let eventWithCounter = {
            title: `${eventType}s: ${existingEvents[i + 1]}`,
            date: eventDate,
            color: color
          };

          events.push(eventWithCounter);
        }
        
        setEvents(events);
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };

  const handleDateClick = (info) => {
    const dateStr = info.dateStr;
    history.push({
      pathname: "/daily",
      state: dateStr
    })
  };

  const handleModalClose = () => {
    setAddEventModalState(false);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!address) {
      setPopup({
        open: true,
        type: "noAddress",
        severity: "warning",
        message: "You must input a valid property address"
      });
      setTimeout(function() {
        setPopup({ open: false, type: "", severity: "warning", message: "" });
      }, popupTimeout);
      return;
    }
    
    const newEvent = {
      eventType: typeRef.current.children[1].children[0].value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current ? endTimeRef.current.value : null,
      propertyAddress: address,
      propertyType: propertySpecs.propertyType,
      bedrooms: propertySpecs.bedrooms,
      bathrooms: propertySpecs.bathrooms,
      carSpaces: propertySpecs.carSpaces,
      landSize: propertySpecs.landSize,
      // hasAuction: hasAuction,
    };

    eventsAPI.getPropertyEvents(encodeURIComponent(newEvent.propertyAddress))
      .then(res => {
        console.log(res)
        if (res.data.length > 0) {
          res.data.forEach(item => {
            if (
              item.eventType === newEvent.eventType &&
              moment(item.startTime).format("YYYY-MM-DD HH:mm:ss") === 
              moment(newEvent.startTime).format("YYYY-MM-DD HH:mm:ss")
            ) {
              setPopup({
                open: true,
                type: "eventAddBlock",
                severity: "warning",
                message: "This event is already in your schedule"
              });
              setTimeout(function() {
                setPopup({ open: false, type: "", severity: "warning", message: "" });
              }, popupTimeout);
            } else {
              eventsAPI.createEvent(newEvent)
              .then(res => {
                handleModalClose();
                setAddEventPopupState(true);
                getAllEvents();
              })
              .catch(err => {
                console.log(err);
                setPopup({ 
                  open: true, type: "error", severity: "error", 
                  message: "An error was encountered while submitting your data. Please try again later." 
                });
                setTimeout(function() {
                  setPopup({ open: false, type: "", severity: "error", message: "" });
                }, popupTimeout);
              });
            }
          });
        } else {
          eventsAPI.createEvent(newEvent)
          .then(res => {
            handleModalClose();
            setPopup({ open: true, type: "addEventSuccess", severity: "success",
              message: "Event successfully added!"
            });
            setTimeout(function() {
              setPopup({ open: false, type: "", severity: "error", message: "" });
            }, popupTimeout);
            getAllEvents();
          })
          .catch(err => {
            console.log(err);
            setPopup({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while submitting your data. Please try again later." 
            });
            setTimeout(function() {
              setPopup({ open: false, type: "", severity: "error", message: "" });
            }, popupTimeout);
          });
        }
      });
  };

  const handleClose = () => {
    setPopup({ open: false, type: "", severity: "error", message: "" });
  };

  const handleAddressInputChange = () => {
    const newValue = addressRef.current.children[0].children[1].children[0].value;
    if (newValue === "") {
      setAddressSuggestions([]);
    } else {
      domainAPI.getAddressSuggestions(encodeURIComponent(newValue))
      .then(res => {
        setAddressSuggestions(res.data.splice(0, 10));
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
    }
  };

  const handleSuggestionClick = (value) => {
    const newValue = value.address;
    setAddress(newValue);
    domainAPI.getPropertyInfo(value.id)
      .then(res => {
        setPropertySpecs({
          propertyType: res.data.propertyCategory,
          bedrooms: res.data.bedrooms,
          bathrooms: res.data.bathrooms,
          carSpaces: res.data.carSpaces,
          landSize: res.data.areaSize,
        });
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };
  
  return (
    <div>
      <SideMenu />
      <div className="calendar-container">
        <div className="calendar-wrapper">
          <div className="monthly-page-heading">
            <h1 className="monthly-heading">MONTHLY SCHEDULE</h1>
          </div>
          <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            customButtons={{
              eventButton: {
                text: "+ EVENT",
                click: () => setAddEventModalState(true)
              }
            }}
            headerToolbar={{
              // center: 'eventButton dayGridMonth,timeGridDay',
              left: 'title',
              right: 'eventButton prev,next',
            }}
            events={events}
          />
          <FormModal
            open={addEventModalIsOpen}
            close={handleModalClose}
            handleSuggestionClick={handleSuggestionClick}
            handleFormSubmit={handleFormSubmit}
            handleEventTypeChange={handleEventTypeChange}
            handleAddressInputChange={handleAddressInputChange}
            addressRef={addressRef}
            typeRef={typeRef}
            startTimeRef={startTimeRef}
            endTimeRef={endTimeRef}
            eventType={eventType}
            addressSuggestions={addressSuggestions}
          />

        </div>
      </div>
      <Popup 
        handleClose={handleClose}
        open={popup.open}
        message={popup.message}
        severity={popup.severity}
      />
    </div>
  );
};