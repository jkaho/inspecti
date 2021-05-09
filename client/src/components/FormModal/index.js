import React, { useRef } from 'react';
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import PlaceIcon from "@material-ui/icons/Place";
import SearchAutocomplete from "../../components/SearchAutocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";
import moment from "moment";
import eventsAPI from '../../utils/eventsAPI';
import domainAPI from "../../utils/domainAPI";

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

export default function FormModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [eventType, setEventType] = React.useState("Inspection");
  const [hasAuction, setAuctionState] = React.useState(false);
  const [propertySpecs, setPropertySpecs] = React.useState({});
  const [address, setAddress] = React.useState();

  const typeRef = useRef();
  const addressRef = useRef();
  const timeRef = useRef();
  const auctionTimeRef = useRef();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(timeRef.current.value,)
    const newEvent = {
      eventType: typeRef.current.children[1].children[0].value,
      date: timeRef.current.value,
      propertyAddress: address,
      propertyType: propertySpecs.propertyType,
      bedrooms: propertySpecs.bedrooms,
      bathrooms: propertySpecs.bathrooms,
      carSpaces: propertySpecs.carSpaces,
      landSize: propertySpecs.landSize,
      hasAuction: hasAuction,
    };
    console.log(newEvent)

    eventsAPI.createEvent(newEvent)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  };

  // const handleAddressInputChange = () => {
  //   const search = addressRef.current.children[1].children[0].value;
  //   console.log(addressRef.current)
  //   setAddressSuggestions(search);
  //   domainAPI.getAddressSuggestions(search)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err))
  // };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    setAddress(item.address);
    domainAPI.getPropertyInfo(item.id)
      .then(res => {
        console.log(res);
        let propertyInfo = {
          bedrooms: res.data.bedrooms,
          bathrooms: res.data.bathrooms,
          carSpaces: res.data.carSpaces,
          landSize: res.data.areaSize,
          propertyType: res.data.propertyCategory
        };

        setPropertySpecs(propertyInfo);
      })
      .catch(err => console.log(err));
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">New property event</h2>
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
        <div className="event-address-div event-div">
          {/* <FormControl className={clsx(classes.margin, classes.addressTextField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-address">Search for an address</InputLabel>
            <OutlinedInput
              ref={addressRef}
              labelWidth={160}
              type="text"
              id="outlined-adornment-address"
              onChange={handleAddressInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <PlaceIcon />
                </InputAdornment>
              }
            />
          </FormControl> */}
          <SearchAutocomplete
            handleOnSelect={handleOnSelect}
          />
        </div>
        <div className="event-time-div event-div">
          <label htmlFor="event-time">Event time</label><br/>
          <input type="datetime-local" id="event-time"
            ref={timeRef} noValidate
            name="event-time" defaultValue={moment().format("yyyy-MM-DDThh:mm")} min={moment().format("yyyy-MM-DDThh:mm")}
          />
        </div>
        {eventType === "Inspection" ?
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
        }
        <div className="event-create-div event-div">
          <Button className={classes.createButton} variant="contained" type="submit">CREATE EVENT</Button>
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
