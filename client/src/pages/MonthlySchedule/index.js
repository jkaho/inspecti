import React from "react";
import SideMenu from "../../components/SideMenu";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
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
            plugins={[ dayGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
          />
        </div>
        {/* <MonthlyCalendar /> */}
      </div>
    </div>
  );
};