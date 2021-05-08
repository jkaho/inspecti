// import React from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'

// export default class MonthlyCalendar extends React.Component {
//   render() {
//     return (
//       <FullCalendar
//         plugins={[ dayGridPlugin ]}
//         initialView="dayGridMonth"
//       />
//     )
//   }
// }
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
// import "./style.css";

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