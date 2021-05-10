import React, { useState, useEffect, useRef } from "react";
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
import clsx from "clsx";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import PopupMessage from "../../components/PopupMessage";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

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
  const [date, setDate] = useState();
  const [events, setEvents] = useState([]);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [eventType, setEventType] = React.useState("Inspection");
  const [editEventPopupIsOpen, setEditEventPopupState] = React.useState(false);
  const [deleteEventPopupIsOpen, setDeleteEventPopupState] = React.useState(false);
  const [deleteEventModalIsOpen, setDeleteEventModalState] = React.useState(false);
  const [eventToModify, setEventToModify] = React.useState();

  useEffect(() => {
    setDate(state);
    getDailyEvents(state);
  }, []);

  const typeRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();

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

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleDeleteModalClose = () => {
    setDeleteEventModalState(false);
  };

  const handleEditPopupClose = () => {
    setEditEventPopupState(false);
  };

  const handleDeletePopupClose = () => {
    setDeleteEventPopupState(false);
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

    console.log(updatedValues)

    console.log(eventToModify)
    eventsAPI.updateEvent(eventToModify, updatedValues)
      .then(res => {
        console.log(res);
        handleModalClose();
        setEditEventPopupState(true);
        getDailyEvents(date);
      })
      .catch(err => console.log(err))
  };

  const handleDeleteButtonClick = (event) => {
    const buttonId = event.target.id.split("-")[1];
    setEventToModify(buttonId)
    setDeleteEventModalState(true);
  };

  const handleDeleteFormSubmit = () => {
    eventsAPI.deleteEvent(eventToModify)
      .then(res => {
        console.log(res);
        setDeleteEventPopupState(true);
        getDailyEvents(date);
      })
      .catch(err => console.log(err))
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
            name="event-startTime" defaultValue={moment().format("yyyy-MM-DDThh:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
          />
        </div>
        <div className="event-time-div-2 event-div">
          <label htmlFor="event-endTime">End time</label><br/>
          <input type="datetime-local" id="event-endTime"
            ref={endTimeRef} noValidate
            name="event-endTime" defaultValue={moment().format("yyyy-MM-DDThh:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
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
      {/* <button type="button" onClick={handleModalOpen}>
        Open Modal
      </button> */}
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
      <PopupMessage
        open={editEventPopupIsOpen}
        handleClose={handleEditPopupClose}
        severity="success"
        message="Event successully updated!"
      />
      <PopupMessage
        open={deleteEventPopupIsOpen}
        handleClose={handleDeletePopupClose}
        severity="success"
        message="Event successully deleted"
      />
    </div>
    </div>
  );
};