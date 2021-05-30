// React
import React, { useState } from 'react';
// Child components
import Popup from "../Popup";
// import PopupMessage from '../PopupMessage';
import SearchAutocomplete from "../../components/SearchAutocomplete";
// Material design
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Modal from '@material-ui/core/Modal';
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import PlaceIcon from "@material-ui/icons/Place";
import TextField from "@material-ui/core/TextField";
// CSS
import "./style.css";
// Moment.js
import moment from "moment";

// Modal style
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

// Class styles
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  typeTextField: {
    width: '18ch',
  },
  addressTextField: {
    width: "42ch",
  },
  createButton: {
    color: "rgb(255, 235, 255)",
    background: "purple",
    "&:hover": {
      background: "rgb(99, 0, 99)",
    }
  },
  cancelButton: {
    color: "purple",
    background: "rgb(255, 235, 255)",
    "&:hover": {
      background: "rgb(255, 225, 255)",
    },
    marginLeft: 20,
  },
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
}));

export default function FormModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [popup, setPopup] = useState({ open: false, type: "", severity: "", warning: "" });

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">New property event</h2>
      <form onSubmit={props.handleFormSubmit}>
        <div className="event-type-div event-div">
          <FormControl className={clsx(classes.margin, classes.typeTextField)} variant="outlined">
            <TextField
              ref={props.typeRef}
              id="outlined-select-event-type"
              select
              label="Event type"
              value={props.eventType}
              onChange={props.handleEventTypeChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <option key="inspection-event-type" value="Inspection">
                Inspection
              </option>
              <option key="auction-event-type" value="Auction">
                Auction
              </option>
            </TextField>
          </FormControl>
        </div>
        <div className="event-address-div event-div">
          <SearchAutocomplete
            addressRef={props.addressRef}
            onInputChange={props.handleAddressInputChange}
            suggestions={props.addressSuggestions}
            onChange={props.handleSuggestionClick}
          />
        </div>
        <div className="event-time-div event-div">
          <label htmlFor="event-startTime">Start time</label><br/>
          <input type="datetime-local" id="event-startTime"
            ref={props.startTimeRef} noValidate
            name="event-startTime" defaultValue={moment().format("yyyy-MM-DDTHH:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
          />
        </div>
        {props.eventType === "Inspection" ? 
          <div className="event-time-div-2 event-div">
            <label htmlFor="event-endTime">End time</label><br/>
            <input type="datetime-local" id="event-endTime"
              ref={props.endTimeRef} noValidate
              name="event-endTime" defaultValue={moment().format("yyyy-MM-DDTHH:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
            />
          </div> : ""
        }
        {/* {eventType === "Inspection" ?
          <div className="event-hasAuction-div event-div">
            <Button
              variant="contained" 
              onClick={() => {
                hasAuction ? setAuctionState(false) : setAuctionState(true)
              }}
            >{hasAuction ? "REMOVE AUCTION" : "ADD AUCTION"}</Button>
            <div className=
              {
                `event-hasAuction-input 
                ${hasAuction ? classes.show : classes.hide}`
              }
            >
              <label htmlFor="auction-time">Auction time</label><br/>
              <input type="datetime-local" id="auction-time"
                className={`${hasAuction ? classes.show : classes.hide}`}
                ref={auctionTimeRef}
                name="auction-time" defaultValue={moment().format("yyyy-MM-DDThh:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
              />
            </div>
          </div>
          : 
          ""
        } */}
        <div className="event-create-div event-div">
          <Button className={classes.createButton} variant="contained" type="submit">CREATE EVENT</Button>
          <Button className={classes.cancelButton} variant="contained" onClick={props.close}>CANCEL</Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {/* <Popup
        open={props.popupOpen}
        handleClose={props.popupClose}
        severity={props.popupSeverity}
        message={props.popupMessage}
      /> */}
    </div>
  );
}
