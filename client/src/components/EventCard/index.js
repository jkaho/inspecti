import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import "./style.css";
// import eventsAPI from "../../utils/eventsAPI";
// import moment from "moment";
// import Button from "@material-ui/core/Button";
// import Modal from "@material-ui/core/Modal";
// import TextField from "@material-ui/core/TextField";
// import FormControl from "@material-ui/core/FormControl";
// import PopupMessage from "../../components/PopupMessage";

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// };

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
//   margin: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
//   typeTextField: {
//     width: '18ch',
//   },
//   addressTextField: {
//     width: "42ch",
//   },
//   createButton: {
//     color: "rgb(255, 235, 255)",
//     background: "purple",
//     "&:hover": {
//       background: "rgb(99, 0, 99)",
//     }
//   },
//   cancelButton: {
//     color: "purple",
//     background: "rgb(255, 235, 255)",
//     "&:hover": {
//       background: "rgb(255, 225, 255)",
//     },
//     marginLeft: 20,
//   },
//   hide: {
//     display: "none",
//   },
//   show: {
//     display: "block",
//   },
// }));

export default function EventCard(props) {
  // const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);
  // const [eventType, setEventType] = React.useState("Inspection");
  // const [addEventPopupIsOpen, setAddEventPopupState] = React.useState(false);
  // const [eventToModify, setEventToModify] = React.useState();

  // const typeRef = useRef();
  // const startTimeRef = useRef();
  // const endTimeRef = useRef();

  // const handleModalOpen = () => {
  //   setOpen(true);
  // };

  // const handleModalClose = () => {
  //   setOpen(false);
  // };

  // const handleClose = () => {
  //   setAddEventPopupState(false);
  // };

  // const handleEventTypeChange = (event) => {
  //   setEventType(event.target.value);
  // };

  // const handleEditEventButtonClick = (event) => {
  //   const cardId = event.target.id.split("-")[1];
  //   setEventToModify(cardId);
  //   handleModalOpen();
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const updatedValues = {
  //     eventType: typeRef.current.children[1].children[0].value,
  //     startTime: startTimeRef.current.value,
  //     endTime: endTimeRef.current.value,
  //   };

  //   console.log(updatedValues)

  //   console.log(eventToModify)
  //   eventsAPI.updateEvent(eventToModify, updatedValues)
  //     .then(res => {
  //       console.log(res);
  //       handleModalClose();
  //       setAddEventPopupState(true);
  //     })
  //     .catch(err => console.log(err))
  // };

  // const handleDeleteButtonClick = (event) => {
  //   const buttonId = event.target.id.split("-")[1];
  //   eventsAPI.deleteEvent(buttonId)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // };

  // const body = (
  //   <div style={modalStyle} className={classes.paper}>
  //     <h2 id="simple-modal-title">New property event</h2>
  //     <form onSubmit={handleFormSubmit}>
  //       <div className="event-type-div event-div">
  //         <FormControl className={clsx(classes.margin, classes.typeTextField)} variant="outlined">
  //           <TextField
  //             ref={typeRef}
  //             id="outlined-select-event-type"
  //             select
  //             label="Event type"
  //             value={eventType}
  //             onChange={handleEventTypeChange}
  //             SelectProps={{
  //               native: true,
  //             }}
  //             variant="outlined"
  //           >
  //             <option key="inspection-event-type" value="Inspection">
  //               Inspection
  //             </option>
  //             <option key="auction-event-type" value="Auction">
  //               Auction
  //             </option>
  //           </TextField>
  //         </FormControl>
  //       </div>
  //       <div className="event-time-div event-div">
  //         <label htmlFor="event-startTime">Start time</label><br/>
  //         <input type="datetime-local" id="event-startTime"
  //           ref={startTimeRef} noValidate
  //           name="event-startTime" defaultValue={moment().format("yyyy-MM-DDThh:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
  //         />
  //       </div>
  //       <div className="event-time-div-2 event-div">
  //         <label htmlFor="event-endTime">End time</label><br/>
  //         <input type="datetime-local" id="event-endTime"
  //           ref={endTimeRef} noValidate
  //           name="event-endTime" defaultValue={moment().format("yyyy-MM-DDThh:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
  //         />
  //       </div>
  //       <div className="event-create-div event-div">
  //         <Button className={classes.createButton} variant="contained" type="submit">UPDATE EVENT</Button>
  //         <Button className={classes.cancelButton} variant="contained" onClick={handleModalClose}>CANCEL</Button>
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <div>
      <div className="eventcard-container">
        <div className="eventcard-heading eventcard-block">
          <div className="eventcard-timetype">
            <div className="eventcard-time">
              <i className="fas fa-clock"></i>&nbsp;
              {props.type === "Inspection" ? 
                `${props.startTime} - ${props.endTime}` : props.startTime
              }
            </div>
            <div 
              className={
                `eventcard-type 
                ${props.type === "Inspection" ? "inspection-event" : "auction-event"}`
              }
            >
              <i className="fas fa-glasses"></i>&nbsp;
              {props.type.toUpperCase()}
            </div>
          </div>
          <div className="eventcard-actions">
            <button id={`editbtn-${props.id}`} onClick={props.editClick}>
              <i id={`editicon-${props.id}`} className="fas fa-edit"></i>
            </button>
            <button id={`deletebtn-${props.id}`} onClick={props.deleteClick}>
              <i id={`deleteicon-${props.id}`} className="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="eventcard-content eventcard-block">
          <div className="eventcard-address">
            {props.address}
          </div>
          <div className="eventcard-specs">
            <i className="fas fa-bed"></i>&nbsp;
            <span className="num-beds">{props.bedrooms}</span>&nbsp;&nbsp;
            <i className="fas fa-shower"></i>&nbsp;
            <span className="num-baths">{props.bathrooms}</span>&nbsp;&nbsp;
            <i className="fas fa-car"></i>&nbsp;
            <span className="num-cars">{props.carSpaces}</span>&nbsp;&nbsp;
            <i className="fas fa-ruler-combined"></i>&nbsp;
            <span className="num-land">{props.landSize}m²</span>&nbsp;&nbsp;
          </div>
        </div>
      </div>
      {/* <div>
        <button type="button" onClick={handleModalOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <PopupMessage
          open={addEventPopupIsOpen}
          handleClose={handleClose}
          severity="success"
          message="Event successully updated!"
        />
      </div> */}
    </div>
  )
};
