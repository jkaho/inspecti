import React, { useState, useEffect } from "react";
// Material Design 
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ClearIcon from "@material-ui/icons/Clear";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
// import Fade from "@material-ui/core/Fade"; <- deprecated message
import InfoIcon from "@material-ui/icons/Info";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
// CSS
import "./style.css";

function getPopupStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top + 40}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
    // opacity: "0",
    // transition: "0.3s",
  },
  show: {
    display: "block",
    // opacity: "1",
    // transition: "0.3s",
  },
}));

export default function Popup(props) {
  const classes = useStyles();
  // States
  const [popupOpen, setPopupState] = useState(false);
  const [popupStyle] = useState(getPopupStyle);

  // Render upon prop change
  useEffect(() => {
    setPopupState(props.open);
    // if (props.open === false) {
    //   setPopupState(props.open);
    // } else {
    //   autoHide();
    // }
  }, [props.open]);

  // Helper functions
  // const autoHide = () => {
  //   setPopupState(props.open);
  //   setTimeout(function() {
  //     setPopupState(!props.open);
  //   }, 4000);
  // };

  // const handleClickAway = () => {
  //   setPopupState(false);
  // };

  return (
    <div className={`popup-bg
      ${popupOpen ? classes.show : classes.hide} 
      `}   
    >
      {/* The popup doesn't reappear if needed when the clickaway listener is used */}
      {/* <ClickAwayListener onClickAway={handleClickAway}>
        <div> */}
          {/* {popupOpen ?  */}
              <div className={`popup-container 
                ${props.severity === "error" ? "error" :
                  props.severity === "success" ? "success" :
                  props.severity === "warning" ? "warning" :
                  ""
                }`
              }
                // style={
                //   props.severity === "error" ? { background: "#F44336" } : 
                //   props.severity === "success" ? { background: "#4CAF50" } :
                //   props.severity === "warning" ? { background: "#FF9800" } : 
                //   { background: "#2196F3" }
                // }
                style={popupStyle}
              >
                <div className="popup-message-icon">
                  {
                    props.severity === "error" ? <ErrorOutlineIcon /> : 
                    props.severity === "success" ? <CheckCircleOutlineIcon /> :
                    props.severity === "warning" ? <ReportProblemOutlinedIcon /> : 
                    <InfoIcon />
                  }
                </div>
                <div className="popup-message">
                  {props.message}
                </div>
                <div className="popup-clear-div">
                  <button className="popup-clear" onClick={props.handleClose}>
                    <ClearIcon />
                  </button>
                </div>
              </div>
            {/* : null
          } */}
        {/* </div>
      </ClickAwayListener> */}
    </div> 
  );
};