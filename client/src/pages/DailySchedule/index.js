// React
import React, { useState, useEffect, useRef } from "react";
// react-router-dom
import { Link, useLocation } from "react-router-dom";
// Child components
import EventCard from "../../components/EventCard";
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
import SideMenu from "../../components/SideMenu";
// Material Design
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
// CSS
import "./style.css";
// Moment.js
import moment from "moment";
// API routes
import eventsAPI from "../../utils/eventsAPI";

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
  arrowButton: {
    padding: 0,
  },
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

export default function DailySchedule(props) {
  const classes = useStyles();
  let { state } = useLocation();
  // States
  const [date, setDate] = useState();
  const [events, setEvents] = useState([]);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [eventType, setEventType] = useState("Inspection");
  const [popup, setPopupState] = useState({ open: false, type: "", severity: "success", message: ""});
  const popupTimeout = 6000;
  const [deleteEventModalIsOpen, setDeleteEventModalState] = useState(false);
  const [eventToModify, setEventToModify] = useState();

  // Initial render
  useEffect(() => {
    console.log(state)
    setDate(state);
    getDailyEvents(state);
  }, [state]);

  // Refs
  const typeRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();

  // Helper functions
  const getDailyEvents = (dateQuery) => {
    let startTime = moment(dateQuery).format("YYYY-MM-DD HH:mm:ss");
    let endTime = moment(dateQuery).add(1, "d").format("YYYY-MM-DD HH:mm:ss");
    eventsAPI.getDailySchedule(startTime, endTime)
      .then(res => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
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

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleDeleteModalClose = () => {
    setDeleteEventModalState(false);
  };

  const handlePopupClose = () => {
    setPopupState({ open: false, type: "", severity: "success", message: "" });
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleEditEventButtonClick = (event) => {
    const cardId = event.target.id.split("-")[1];
    setEventToModify(cardId);
    handleModalOpen();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedValues = {
      eventType: typeRef.current.children[1].children[0].value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value,
    };

    eventsAPI.updateEvent(eventToModify, updatedValues)
      .then(res => {
        handleModalClose();
        setPopupState({ 
          open: true, type: "editEvent", severity: "success", message: "Event successfully updated!"
        })
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "success", message: "" });
        }, popupTimeout);
        // setEditEventPopupState(true);
        getDailyEvents(date);
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while updating data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };

  const handleDeleteButtonClick = (event) => {
    const buttonId = event.target.id.split("-")[1];
    setEventToModify(buttonId)
    setDeleteEventModalState(true);
  };

  const handleDeleteFormSubmit = (event) => {
    event.preventDefault();
    eventsAPI.deleteEvent(eventToModify)
      .then(res => {
        setDeleteEventModalState(false);
        setPopupState({ 
          open: true, type: "deleteEvent", severity: "success", message: "Event successfully deleted"
        })
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "success", message: "" });
        }, popupTimeout);
        // setDeleteEventPopupState(true);
        getDailyEvents(date);
      })
      .catch(err => {
        console.log(err);
        setDeleteEventModalState(false);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error has occurred. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };

  const editBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Update property event</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="event-type-div event-div">
          <FormControl className={clsx(classes.margin, classes.typeTextField)} variant="outlined">
            <TextField
              ref={typeRef}
              id="outlined-select-event-type"
              select
              label="Event type"
              value={eventType}
              onChange={handleEventTypeChange}
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
        <div className="event-time-div event-div">
          <label htmlFor="event-startTime">Start time</label><br/>
          <input type="datetime-local" id="event-startTime"
            ref={startTimeRef} noValidate
            name="event-startTime" defaultValue={moment().format("yyyy-MM-DDTHH:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
          />
        </div>
        <div className="event-time-div-2 event-div">
          <label htmlFor="event-endTime">End time</label><br/>
          <input type="datetime-local" id="event-endTime"
            ref={endTimeRef} noValidate
            name="event-endTime" defaultValue={moment().format("yyyy-MM-DDTHH:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
          />
        </div>
        <div className="event-create-div event-div">
          <Button className={classes.createButton} variant="contained" type="submit">UPDATE EVENT</Button>
          <Button className={classes.cancelButton} variant="contained" onClick={handleModalClose}>CANCEL</Button>
        </div>
      </form>
    </div>
  );

  const deleteBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title-delete">Delete property event</h2>
      <p>Are you sure you want to delete this event?</p>
      <form onSubmit={handleDeleteFormSubmit}>
        <div className="event-create-div event-div">
          <Button className={classes.createButton} variant="contained" type="submit">DELETE EVENT</Button>
          <Button className={classes.cancelButton} variant="contained" onClick={handleDeleteModalClose}>CANCEL</Button>
        </div>
      </form>
    </div>
  );

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
              editClick={handleEditEventButtonClick}
              deleteClick={handleDeleteButtonClick}
            />
          )) : 
          <div className="no-events">
            <h2>No scheduled events</h2>
          </div> 
          } 
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {editBody}
        </Modal>
        <Modal
          open={deleteEventModalIsOpen}
          onClose={handleDeleteModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {deleteBody}
        </Modal>
        <Popup
          open={popup.open}
          handleClose={handlePopupClose}
          severity={popup.severity}
          message={popup.message}
        />
      </div>
    </div>
  );
};