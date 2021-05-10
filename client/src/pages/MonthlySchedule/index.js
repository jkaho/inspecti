import React, { useState, useEffect } from "react";
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

export default function MonthlySchedule() {
  const [addEventModalIsOpen, setAddEventModalState] = useState(false);
  const [events, setEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = () => {
    eventsAPI.getAllEvents()
      .then(res => {
        console.log(res);
        let eventGroups = [];
        res.data.forEach(eventObj => {
          const eventObjDate = moment(eventObj.date).format("YYYY-MM-DD");
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
            title: `${eventType}s - ${existingEvents[i + 1]}`,
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
                text: "ADD EVENT +",
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
          />

        </div>
        {/* <MonthlyCalendar /> */}

      </div>
    </div>
  );
};