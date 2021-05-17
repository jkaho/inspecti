import React, { useState, useEffect, useRef } from "react";
import SideMenu from "../../components/SideMenu";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./style.css";
// import MonthlyCalendar from "../../components/MonthlyCalendar";
import FormModal from "../../components/FormModal";
import eventsAPI from "../../utils/eventsAPI";
import moment from "moment";
import { useHistory } from "react-router-dom";
import domainAPI from "../../utils/domainAPI";

export default function MonthlySchedule() {
  const [addEventModalIsOpen, setAddEventModalState] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = React.useState("Inspection");
  const [hasAuction, setAuctionState] = React.useState(false);
  const [propertySpecs, setPropertySpecs] = React.useState({});
  const [address, setAddress] = React.useState();
  const [addressQuery, setAddressQuery] = React.useState("");
  const [addressSuggestions, setAddressSuggestions] = React.useState([]);
  const [addEventPopupIsOpen, setAddEventPopupState] = React.useState(false);

  const history = useHistory();

  const typeRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = () => {
    eventsAPI.getAllEvents()
      .then(res => {
        console.log(res);
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
      .catch(err => console.log(err))
  };

  const handleDateClick = (info) => {
    console.log(info.dateStr);
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
    const newEvent = {
      eventType: typeRef.current.children[1].children[0].value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value,
      propertyAddress: address,
      propertyType: propertySpecs.propertyType,
      bedrooms: propertySpecs.bedrooms,
      bathrooms: propertySpecs.bathrooms,
      carSpaces: propertySpecs.carSpaces,
      landSize: propertySpecs.landSize,
      hasAuction: hasAuction,
    };

    eventsAPI.createEvent(newEvent)
      .then(res => {
        console.log(res);
        handleModalClose();
        setAddEventPopupState(true);
        getAllEvents();
      })
      .catch(err => console.log(err))
  };

  const handlePopupClose = () => {
    setAddEventPopupState(false);
  };

  const handleAddressInputChange = () => {
    const newValue = addressRef.current.children[0].children[1].children[0].value;
    setAddressQuery(newValue);

    if (newValue === "") {
      setAddressSuggestions([]);
    } else {
      domainAPI.getAddressSuggestions(newValue)
      .then(res => {
        setAddressSuggestions(res.data.splice(0, 10));
      })
      .catch(err => console.log(err))
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
      .catch(err => console.log(err));
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
              center: 'eventButton dayGridMonth,timeGridDay',
              left: 'title',
              right: 'prev,next',
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
            addEventPopupIsOpen={addEventPopupIsOpen}
            handlePopupClose={handlePopupClose}
          />

        </div>
      </div>
    </div>
  );
};