// React
import React from "react";
// Full Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

class MonthlyCalendar extends React.Component {
  handleDateClick = () => {
    console.log("Go to daily view page!");
  };

  render() {
    return (
      <div className="calendar-container">
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }
};

export default MonthlyCalendar;