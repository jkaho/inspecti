import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../../components/SideMenu";
import BoxContainer from "../../components/BoxContainer";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import PlaceIcon from "@material-ui/icons/Place";
import RateReviewIcon from "@material-ui/icons/RateReview";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./style.css";
// import { Icon } from "@material-ui/core";
import notesAPI from "../../utils/notesAPI";
import SuggestionSearch from "../../components/SuggestionSearch";

const useStyles = makeStyles({
  noteSection: {
    background: "rgb(233, 233, 233)",
    fontSize: 20,
    fontWeight: "bold"
  },
  noteList: {
    padding: 0,
  },
  maxHeight: {
    height: "100%",
  },
  overflow: {
    overflow: "auto",
    height: "100%",
  },
  note: {
    overflow: "auto",
    height: "100%",
  },
  attachButton: {
    fontSize: 12,
    borderRadius: "25px",
    marginBottom: 0
  },
  hide: {
    display: "none",
  }, 
  show: {
    display: "block",
  },
});

export default function Notes(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [currentNoteId, setCurrentNoteId] = useState();
  const [allNotes, setAllNotes] = useState([]);
  const [addressInputIsOpen, setAddressInputState] = useState(false);
  const [ratingButtonIsOpen, setRatingButtonState] = useState(false);
  const [ratingSectionIsOpen, setRatingSectionState] = useState(false);
  const [addressSearch, setAddressSearch] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [address, setAddress] = useState("");
  const [addressInfoIsOpen, setAddressInfoState] = useState(false);

  let sideTitle = "";

  const titleRef = useRef();
  const textRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    // Check user's saved notes 
    notesAPI.getAllNotes(props.id)
      .then(res => {
        console.log(res);
        setAllNotes(res.data.reverse());
        // If there are no existing notes, create a new blank note
        if (res.data.length < 1) {
          titleRef.current.value = "";
          textRef.current.value = "";
          setTitle("");
          setText("");

          const newNote = {
            starred: false,
            title: title,
            text: text,
            propertyAddress: null,
            userId: props.id
          }
          console.log("NEW NOTE")
          notesAPI.createNote(newNote)
            .then(res => {
              console.log(res.data);
              setCurrentNoteId(res.data.id);
            })
            .catch(err => console.log(err))
        // Else render the latest note 
        } else {
          // Render latest note
          const lastNote = res.data[0];
          console.log(lastNote)
          setCurrentNoteId(lastNote.id);
          console.log("ALREADY NOTE")
          setTitle(lastNote.title);
          setText(lastNote.text);
        }
      })
      .catch(err => console.log(err))
  }, []);

  const handleNewNoteButtonClick = () => {
    // titleRef.current.value = "";
    // textRef.current.value = "";
    setTitle("");
    setText("");

    const noteData = {
      starred: false,
      title: "No title",
      text: "",
      propertyAddress: null,
      userId: props.id
    }

    notesAPI.createNote(noteData)
      .then(res => {
        console.log(res);
        setCurrentNoteId(res.data.id);
      })
      .catch(err => console.log(err))
  };

  const handleTitleInputChange = () => {
    const titleValue = titleRef.current.value;
    let nonEmptyTitleValue = titleValue;

    if (titleValue === "") {
      nonEmptyTitleValue = "No title"
    }

    setTitle(nonEmptyTitleValue);

    const titleData = {
      title: nonEmptyTitleValue
    }
    notesAPI.updateNote(currentNoteId, titleData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      console.log(title)
  };

  const handleTextInputChange = () => {
    const textValue = textRef.current.value;
    setText(textValue);

    const textData = {
      text: textValue
    }
    notesAPI.updateNote(currentNoteId, textData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  const handleNoteButtonClick = (event) => {
    let clickedNoteId;
    if (event.target.id) {
      clickedNoteId = parseInt(event.target.id.split("-")[1]);
    } else {
      clickedNoteId = parseInt(event.target.parentElement.id.split("-")[1]);
    }

    setCurrentNoteId(clickedNoteId);
    console.log(clickedNoteId)
    notesAPI.getAllNotes(props.id)
      .then(res => {
        setAllNotes(res.data.reverse());
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].id === clickedNoteId) {
            setTitle(res.data[i].title);
            sideTitle = res.data[i].title;
            setText(res.data[i].text);
          }
        }
      })
    // for (let i = 0; i < allNotes.length; i++) {
    //   if (allNotes[i].id === clickedNoteId) {
    //     setTitle(allNotes[i].title);
    //     setText(allNotes[i].text);
    //   }
    // }
    console.log(title)
  };

  const handleLinkAddressButtonClick = () => {
    if (addressInputIsOpen) {
      setAddressInputState(false);
    } else {
      setAddressInputState(true);
    }
  };

  const handleUnlinkAddressButtonClick = () => {
    setAddress("");
    setAddressInfoState(false);
    setAddressInputState(false);
  };

  const handleAddressInputChange = () => {
    const address = addressRef.current.value.trim();
    setAddressSearch(address);
    if (address !== "") {
      notesAPI.getAddressSuggestions(address)
      .then(res => {
        setAddressSuggestions(res.data);
      })
      .catch(err => console.log(err))
    } else {
      setAddressSuggestions([]);
    }
    console.log(addressSuggestions)
  };

  const handleAddressSuggestionClick = (event) => {
    const address = event.target.textContent;
    console.log(event.target)
    console.log(address);
    setAddress(address);
    setAddressInfoState(true);
    setAddressInputState(false);
  }

  return (
    <div>
      <SideMenu />
      <BoxContainer>
        <Grid container className={classes.maxHeight}>
          <Grid id="note-bar" item className={classes.overflow}>
            <div className="note-list-div box-seg">
              <div className="note-search-div">
                <input id="note-search-input" type="text" placeholder="Search your notes"/>
              </div>
              <div className="starred-notes-div">
                <List component="nav" aria-label="" className={classes.noteList}>
                  <ListItem className={classes.noteSection}>
                    <ListItemText disableTypography primary="Starred"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Note 1" />
                  </ListItem>
                  <Divider light/>
                  <ListItem button>
                    <ListItemText primary="Note 2" />
                  </ListItem>
                </List>
              </div>
              <div className="all-notes-div">
                <List component="nav" aria-label="" className={classes.noteList}>
                  <ListItem className={classes.noteSection}>
                    <ListItemText disableTypography primary="Notes"/>
                  </ListItem>
                  {allNotes.length > 0 ? 
                    allNotes.map(note => (
                      <div key={`note-${note.id}`}>
                        <ListItem id={`note-${note.id}`} button onClick={handleNoteButtonClick}>
                          <ListItemText id={`notetitle-${note.id}`}
                            primary={currentNoteId === note.id && sideTitle !== "" ? sideTitle
                              : note.title
                            } />
                        </ListItem>
                        <Divider light/>
                      </div>
                    )) : 
                    <div>
                      <ListItem>
                        <ListItemText
                          primary="No existing notes"
                        />
                      </ListItem>
                    </div> 
                  }
                </List>
              </div>
            </div>
          </Grid>
          <Grid item id="note-area" className={classes.note}>
            <div className="current-note-div box-seg">
              <div className="new-note-btn">
                <IconButton
                  onClick={handleNewNoteButtonClick}
                  id="new-note-btn"
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
              <div className="note-title-input-div">
                <input 
                  ref={titleRef} 
                  type="text" 
                  placeholder="Title" 
                  onChange={handleTitleInputChange}
                  value={title}
                />
              </div>
              <div className="note-address note-seg">
                <div className="note-address-btn">
                  <Button
                    className={classes.attachButton}
                    variant="contained"
                    color="secondary"
                    startIcon={<PlaceIcon />}
                    onClick={!addressInfoIsOpen ? handleLinkAddressButtonClick
                    : handleUnlinkAddressButtonClick}
                  >
                    {addressInfoIsOpen ? "Unlink address" : "Link an address"}
                  </Button>
                </div>
                <div 
                  className={
                    `note-address-input 
                    ${addressInputIsOpen ? classes.show : classes.hide}`}
                >
                  <div className="address-search-input">
                    <input 
                      ref={addressRef}
                      type="text" 
                      placeholder="Search an address" 
                      onChange={handleAddressInputChange}
                    />
                    <div className="address-suggestion-box">
                      {addressSuggestions.splice(0, 10).map(suggestion => (
                        <li 
                          key={suggestion.address} 
                          value={suggestion.address}
                          onClick={handleAddressSuggestionClick}
                        >{suggestion.address}</li>
                      ))}
                    </div>
                  </div>

                  
                  {/* <SuggestionSearch
                    suggestions={addressSuggestions}
                    onChange={handleAddressInputChange}
                    addressRef={addressRef}
                  /> */}
                </div>
                <div 
                  className={
                    `note-address-text 
                    ${addressInfoIsOpen ? classes.show : classes.hide}`
                  }>
                  <div className="note-address-text">
                    {address}
                  </div>
                  <div className="note-address-specs"></div>
                </div>
              </div>
              <div className="under-suggestion-box">
  
              <div 
                className={
                  `note-review-attach-button
                  ${ratingButtonIsOpen ? classes.show : classes.hide}`
                }
              >
                <Button
                  className={classes.attachButton}
                  variant="contained"
                  color="secondary"
                  startIcon={<RateReviewIcon />}
                >
                  Rate the property
                </Button>
              </div>
              <div 
                className=
                {`note-review-section note-seg
                ${ratingSectionIsOpen ? classes.show : classes.hide}`}
              >
                <table>
                  <thead>
                    <tr>
                      <th className="note-section-heading">PROPERTY REVIEW</th>
                      <th className="note-action-btns">
                        <IconButton aria-label="share">
                          <PresentToAllIcon />
                        </IconButton>
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="review-criteria-row">
                      <td>Property condition</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Potential to capitalise</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Surroundings</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Consistency with neighbours</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Accessibility</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Privacy</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Floorplan</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Outdoor space</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Indoor-to-outdoow flow</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="note-text-section note-seg">
                <table>
                  <thead>
                    <tr>
                      <th className="note-section-heading">PROPERTY NOTES</th>
                      <th className="note-action-btns">
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <textarea 
                          ref={textRef}
                          onChange={handleTextInputChange}
                          value={text}
                        ></textarea>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </BoxContainer>
    </div>
  )
}