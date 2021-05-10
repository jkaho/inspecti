import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../../components/SideMenu";
import "./style.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import moment from "moment";
import eventsAPI from "../../utils/eventsAPI";
import EventCard from "../../components/EventCard";

const useStyles = makeStyles({
  arrowButton: {
    padding: 0,
  },
});

export default function DailySchedule(props) {
  const classes = useStyles();
  let { state } = useLocation();
  const [date, setDate] = useState();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setDate(state);
    getDailyEvents(state);
  }, []);

  const getDailyEvents = (dateQuery) => {
    let startTime = moment(dateQuery).format("YYYY-MM-DD HH:mm:ss");
    let endTime = moment(dateQuery).add(1, "d").format("YYYY-MM-DD HH:mm:ss");
    eventsAPI.getDailySchedule(startTime, endTime)
      .then(res => {
        console.log(res);
        setEvents(res.data);
      })
      .catch(err => console.log(err))
  };

  const handleForwardButtonClick = () => {
    state = moment(date).add(1, "d");
    setDate(state);
    getDailyEvents(state);
  };

  const handleBackButtonClick = () => {
    state = moment(date).add(-1, "d");
    setDate(state);
    getDailyEvents(state);
  };

  return (
    <div>
      <SideMenu />
      <div className="daily-container">
        <div className="back-to-monthly-view">
          <Link to="/monthly" style={{ textDecoration: "none" }}>
            <Button startIcon={<ChevronLeftIcon />}>
              MONTHLY SCHEDULE
            </Button>
          </Link>
        </div>
        <div className="daily-page-heading">
          <h1 className="daily-heading">DAILY SCHEDULE</h1>
        </div>
        <div className="date-carousel">
          <table>
            <tbody>
              <tr>
                <td>
                  <IconButton aria-label="arrow back" onClick={handleBackButtonClick}>
                    <ArrowBackIosIcon/>
                  </IconButton>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment(date).add(-1, "d").format("ddd").toUpperCase()}</div>
                    <div className="day-of-month">{moment(date).add(-1, "d").format("DD")}</div>
                  </div>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment(date).format("ddd").toUpperCase()}</div>
                    <div className="day-of-month today">{moment(date).format("DD")}</div>
                  </div>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment(date).add(1, "d").format("ddd").toUpperCase()}</div>
                    <div className="day-of-month">{moment(date).add(1, "d").format("DD")}</div>
                  </div>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment(date).add(2, "d").format("ddd").toUpperCase()}</div>
                    <div className="day-of-month">{moment(date).add(2, "d").format("DD")}</div>
                  </div>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment(date).add(3, "d").format("ddd").toUpperCase()}</div>
                    <div className="day-of-month">{moment(date).add(3, "d").format("DD")}</div>
                  </div>
                </td>
                <td className="next-day">
                  <IconButton aria-label="arrow forward" onClick={handleForwardButtonClick}>
                    <ArrowForwardIosIcon/>
                  </IconButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daily-box-container">
          {events.length > 0 ? events.map(item => (
            <EventCard
              key={item.id}
              id={item.id}
              startTime={moment(item.startTime).format("h:mmA")}
              endTime={moment(item.endTime).format("h:mmA")}
              type={item.eventType}
              address={item.propertyAddress}
              bedrooms={item.bedrooms}
              bathrooms={item.bathrooms}
              carSpaces={item.carSpaces}
              landSize={item.landSize}
            />
          )) : 
          <div className="no-events">
            <h2>No scheduled events</h2>
          </div> 
          } 
        </div>
      </div>
    </div>
  );
};