import React from "react";
// Material Design 
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
// import ReportProblemIcon from "@material-ui/icons/ReportProblem";
// import InfoIcon from "@material-ui/icons/Info";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// CSS
import "./style.css";

const useStyles = makeStyles({
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
});

export default function Popup() {
  const classes = useStyles();
  
  return (
    <div className={`popup-bg
      ${classes.show}
    `}>
      <div className="popup-container"
        style={{ background: "#F44336"}}
      >
        <div className="popup-message-icon">
          <ErrorOutlineIcon />
        </div>
        <div className="popup-message">
          This is an error message!
        </div>
        <div className="popup-clear-div">
          <button className="popup-clear">
            <ClearIcon />
          </button>
        </div>
      </div>
    </div>
  );
};