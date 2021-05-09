import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../../components/SideMenu";
import "./style.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  arrowButton: {
    padding: 0,
  },
});

export default function DailySchedule() {
  const classes = useStyles();

  const [dayOfWeek, setDayOfWeek] = useState(moment().format("ddd").toUpperCase());
  const [dayOfMonth, setDayOfMonth] = useState(moment().format("DD"));

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
                  <IconButton aria-label="arrow back">
                    <ArrowBackIosIcon/>
                  </IconButton>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment().add(-1, "d").format("ddd").toUpperCase()}</div>
                    <div className="day-of-month">{moment().add(-1, "d").format("DD")}</div>
                  </div>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{dayOfWeek}</div>
                    <div className="day-of-month today">{dayOfMonth}</div>
                  </div>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment().add(1, "d").format("ddd").toUpperCase()}</div>
                    <div className="day-of-month">{moment().add(1, "d").format("DD")}</div>
                  </div>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment().add(2, "d").format("ddd").toUpperCase()}</div>
                    <div className="day-of-month">{moment().add(2, "d").format("DD")}</div>
                  </div>
                </td>
                <td>
                  <div className="date-box">
                    <div className="day-of-week">{moment().add(3, "d").format("ddd").toUpperCase()}</div>
                    <div className="day-of-month">{moment().add(3, "d").format("DD")}</div>
                  </div>
                </td>
                <td className="next-day">
                  <IconButton aria-label="arrow forward">
                    <ArrowForwardIosIcon/>
                  </IconButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="daily-box-container"></div>
      </div>
    </div>
  );
};