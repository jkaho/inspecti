import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./style.css";
// import MonthlyCalendar from "../../components/MonthlyCalendar";
import FormModal from "../../components/FormModal";

export default function MonthlySchedule() {
  const [addEventModalIsOpen, setAddEventModalState] = useState(false);

  const handleDateClick = () => {
    console.log("Go to daily view page!");
  };

  const handleModalClose = () => {
    setAddEventModalState(false);
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
                text: "ADD EVENT +",
                click: () => setAddEventModalState(true)
              }
            }}
            headerToolbar={{
              center: 'eventButton dayGridMonth,timeGridDay',
              left: 'title',
              right: 'prev,next',
            }}
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