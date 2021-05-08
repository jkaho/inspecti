import React from 'react';
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import PlaceIcon from "@material-ui/icons/Place";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";
import moment from "moment";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
}));

export default function FormModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [eventType, setEventType] = React.useState("Inspection");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setEventType(event.target.value);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">New property event</h2>
      <form>
        <div className="event-type-div event-div">
          <FormControl className={clsx(classes.margin, classes.typeTextField)} variant="outlined">
            <TextField
              id="outlined-select-event-type"
              select
              label="Event type"
              value={eventType}
              onChange={handleChange}
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
          <FormControl className={clsx(classes.margin, classes.addressTextField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-address">Search for an address</InputLabel>
            <OutlinedInput
              labelWidth={160}
              type="text"
              id="outlined-adornment-address"
              endAdornment={
                <InputAdornment position="end">
                  <PlaceIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="event-time-div event-div">
          <label htmlFor="event-time">Event time</label><br/>
          <input type="datetime-local" id="event-time"
            name="event-time" defaultValue={moment().format("yyyy-MM-DDThh:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
          />
        </div>
        <div className="event-create-div event-div">
          <Button className={classes.createButton} variant="contained">CREATE EVENT</Button>
          <Button className={classes.cancelButton} variant="contained" onClick={handleClose}>CANCEL</Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
