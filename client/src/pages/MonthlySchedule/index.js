import React from "react";
import SideMenu from "../../components/SideMenu";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./style.css";
// import MonthlyCalendar from "../../components/MonthlyCalendar";

export default function MonthlySchedule() {
  const handleDateClick = () => {
    console.log("Go to daily view page!");
  };

  return (
    <div>
      <SideMenu />
      <div className="calendar-container">
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            customButtons={{
              eventButton: {
                text: "ADD EVENT",
                click: () => console.log("Add event!")
              }
            }}
            headerToolbar={{
              center: 'eventButton dayGridMonth,timeGridDay',
              left: 'title',
              right: 'prev,next',
            }}
          />
        </div>
        {/* <MonthlyCalendar /> */}
      </div>
    </div>
  );
};