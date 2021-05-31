// React 
import React, { useEffect, useState, useRef } from "react";
// Children components 
import BoxContainer from "../../components/BoxContainer";
import NoteListItem from "../../components/NoteListItem";
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
import ReviewCard from "../../components/ReviewCard";
import SearchAutocomplete from "../../components/SearchAutocomplete";
import SideMenu from "../../components/SideMenu";
import SimpleModal from "../../components/Modal";
import TextEditor from "../../components/TextEditor";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOffIcon from "@material-ui/icons/LocationOff";
import Modal from "@material-ui/core/Modal";
import PlaceIcon from "@material-ui/icons/Place";
import RateReviewIcon from "@material-ui/icons/RateReview";
import SaveIcon from "@material-ui/icons/Save";
import Tooltip from "@material-ui/core/Tooltip";
// CSS
import "./style.css";
// API routes
import domainAPI from "../../utils/domainAPI";
import notesAPI from "../../utils/notesAPI";
import propertiesAPI from "../../utils/propertiesAPI";
import reviewsAPI from "../../utils/reviewsAPI";
import userAPI from "../../utils/userAPI";
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
  showSpan: {
    display: "inline-block",
  },
  iconButton: {
    padding: 2,
    margin: "0 2px",
  },
  shareButton: {
    borderRadius: 20,
    marginLeft: 5,
    fontSize: 12,
    padding: 2,
    background: "white",
    border: "1px solid rgb(0, 0, 0, 0.82)",
  },
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "auto"
  },
  createButton: {
    color: "rgb(255, 235, 255)",
    background: "purple",
    "&:hover": {
      background: "rgb(99, 0, 99)",
    },
    marginRight: 10,
  },
  cancelButton: {
    color: "purple",
    background: "rgb(255, 235, 255)",
    "&:hover": {
      background: "rgb(255, 225, 255)",
    },
  },
  reviewModal: {
    width: 400,
  },
}));

const ratingTooltips = {
  condition: "The state of the property relative to its age.",
  potential: "How much potential the property has to add value to it.",
  surroundings: "How are the immediate surroundings? Is the property located on a tree-lined street? Is it close to an industrial area?",
  neighbours: "The property's similarity in value and style to its neighbouring properties.",
  accessibility: "Is the property located at the bottom/top of a steep hill? Is it tucked away into a narrow lane way or at the end of a long driveway?",
  privacy: "How much of the inside of the property can be seen from neighbouring properties or from public areas?",
  floorplan: "How functional is the floor plan? Are the dining room and kitchen on separate sides of the home?",
  outdoorSpace: "The amount of outdoor space (garden, balcony, courtyard, etc.) relative to indoor space. How well-balanced is the indoor space to outdoor space ratio?",
  indoorOutdoorFlow: "Does the internal floor plan flow seamlessly to the outdoors?",
  naturalLight: "How well is the property illuminated with sunlight?"
};

export default function Notes(props) {
  // States
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState({});
  const [dateUpdated, setDateUpdated] = useState();
  const [currentNoteId, setCurrentNoteId] = useState();
  // const [allNotes, setAllNotes] = useState([]);
  const [starredNotes, setStarredNotes] = useState([]);
  const [nonStarredNotes, setNonStarredNotes] = useState([]);
  const [addressInputIsOpen, setAddressInputState] = useState(false);
  const [ratingButtonIsOpen, setRatingButtonState] = useState(false);
  const [ratingSectionIsOpen, setRatingSectionState] = useState(false);
  // const [addressSearch, setAddressSearch] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [address, setAddress] = useState("");
  const [addressInfoIsOpen, setAddressInfoState] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "",
    title: "",
    text: ""
  });
  const [propertySpecs, setPropertySpecs] = useState({
    bedrooms: 1,
    bathrooms: 1,
    carSpaces: 1,
    landSize: 100
  });
  const [propertyReview, setPropertyReview] = useState({});
  const [ratingEditIsOpen, setRatingEditState] = useState(false);
  const [textEditorModeOn, setTextEditorMode] = useState(false);
  const [noteReviewToDelete, setNoteReviewToDelete] = useState();
  // const [searchword, setSearchword] = useState();
  const [popup, setPopupState] = useState({ open: false, type: "", severity: "success", message: "" });
  const popupTimeout = 6000;
  const [isShared, setSharedState] = useState(false);
  const [reviewModalIsOpen, setReviewModalState] = useState(false);
  const [responsiveNoteListOpen, setResponsiveNoteListState] = useState(false);
  let sideTitle = "";

  // Refs
  const searchRef = useRef();
  const titleRef = useRef();
  // const textRef = useRef();
  const addressRef = useRef();
  const conditionRef = useRef();
  const potentialRef = useRef();
  const surroundingsRef = useRef();
  const neighboursRef = useRef();
  const accessibilityRef = useRef();
  const privacyRef = useRef();
  const floorplanRef = useRef();
  const outdoorSpaceRef = useRef();
  const indoorOutdoorRef = useRef();
  const lightingRef = useRef();

  // Initial render
  useEffect(() => {
    // Check user's saved notes 
    notesAPI.getNotesWithReviews()
    .then(res => {
      // If there are no existing notes, create a new blank note
      if (res.data.length < 1) {
        titleRef.current.value = "";
        // textRef.current.value = "";
        setTitle("");
        setText("");
        setDateUpdated(moment());
        
        const newNote = {
          starred: false,
          title: "",
          text: "",
          propertyAddress: null,
        };

        notesAPI.createNote(newNote)
          .then(res => {
            setCurrentNoteId(res.data.id);
          })
          .catch(err => {
            console.log(err);
            setPopupState({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while submitting your data. Please try again later." 
            });
            setTimeout(function() {
              setPopupState({ open: false, type: "", severity: "", message: "" });
            }, popupTimeout);
          });
      // Else render the latest note 
      } else {
        // Separate starred and non-starred notes 
        let starredNotes = [];
        let nonStarredNotes = [];
        res.data.forEach(note => {
          if (note.starred) {
            starredNotes.push(note);
          } else {
            nonStarredNotes.push(note);
          };
        });

        // Reverse order of notes to display newest first 
        // res.data.reverse(); // to display latest note
        // starredNotes.reverse(); // to display starred notes list
        // nonStarredNotes.reverse(); // to display all notes list 
        setStarredNotes(starredNotes);
        setNonStarredNotes(nonStarredNotes);

        // Render latest note
        const lastNote = res.data[0];
        setCurrentNoteId(lastNote.id);
        setTitle(lastNote.title);
        setText(lastNote.text);
        setDateUpdated(lastNote.updatedAt);
        if (lastNote.propertyAddress) {
          setAddress(lastNote.propertyAddress);
          setPropertySpecs({
            bedrooms: lastNote.bedrooms,
            bathrooms: lastNote.bathrooms,
            carSpaces: lastNote.carSpaces,
            land: lastNote.landSize,
          });
          setAddressInfoState(true);
          // Determine whether or not note has review
          if (lastNote.review) {    
            setSharedState(lastNote.shared) 
            setRatingSectionState(true);
            setPropertyReview(lastNote.review);
          } else {
            setRatingButtonState(true);
          }
        } else {
          setAddressInfoState(false);
          setRatingSectionState(false);
          setRatingButtonState(false);
        }
      }
    })
    .catch(err => {
      console.log(err);
      setPopupState({ 
        open: true, type: "error", severity: "error", 
        message: "An error was encountered while retrieving data. Please try again later." 
      });
      setTimeout(function() {
        setPopupState({ open: false, type: "", severity: "", message: "" });
      }, popupTimeout);
    });
  }, []);

  // Helper functions
  const renderAllNotes = () => {
    // Check user's saved notes 
    notesAPI.getNotesWithReviews()
    .then(res => {
      // If there are no existing notes, create a new blank note
      if (res.data.length < 1) {
        titleRef.current.value = "";
        // textRef.current.value = "";
        setTitle("");
        setText("");
        
        const newNote = {
          starred: false,
          title: title,
          text: text,
          propertyAddress: null,
        };

        notesAPI.createNote(newNote)
          .then(res => {
            setCurrentNoteId(res.data.id);
          })
          .catch(err => {
            console.log(err);
            setPopupState({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while submitting your data. Please try again later." 
            });
            setTimeout(function() {
              setPopupState({ open: false, type: "", severity: "", message: "" });
            }, popupTimeout);
          });
      // Else render the latest note 
      } else {
        // Separate starred and non-starred notes 
        let starredNotes = [];
        let nonStarredNotes = [];
        res.data.forEach(note => {
          if (note.starred) {
            starredNotes.push(note);
          } else {
            nonStarredNotes.push(note);
          };
        });

        // Reverse order of notes to display newest first 
        // res.data.reverse(); // to display latest note
        // starredNotes.reverse(); // to display starred notes list
        // nonStarredNotes.reverse(); // to display all notes list 
        setStarredNotes(starredNotes);
        setNonStarredNotes(nonStarredNotes);

        // Render latest note
        const lastNote = res.data[0];
        setCurrentNoteId(lastNote.id);
        setTitle(lastNote.title);
        setText(lastNote.text);
        setDateUpdated(lastNote.updatedAt);
        if (lastNote.propertyAddress) {
          setAddress(lastNote.propertyAddress);
          setPropertySpecs({
            bedrooms: lastNote.bedrooms,
            bathrooms: lastNote.bathrooms,
            carSpaces: lastNote.carSpaces,
            land: lastNote.landSize,
          });
          setAddressInfoState(true);
          // Determine whether or not note has review
          if (lastNote.review) {    
            setSharedState(lastNote.shared) 
            setRatingSectionState(true);
            setPropertyReview(lastNote.review);
          } else {
            setRatingButtonState(true);
          }
        } else {
          setAddressInfoState(false);
          setRatingSectionState(false);
          setRatingButtonState(false);
        }
      }
    })
    .catch(err => {
      console.log(err);
      setPopupState({ 
        open: true, type: "error", severity: "error", 
        message: "An error was encountered while retrieving data. Please try again later." 
      });
      setTimeout(function() {
        setPopupState({ open: false, type: "", severity: "", message: "" });
      }, popupTimeout);
    });
  };

  const handleNewNoteButtonClick = () => {
    // titleRef.current.value = "";
    // textRef.current.value = "";
    setTitle("");
    setText("");
    setAddress("");
    setDateUpdated(moment());
    setAddressInputState(false);
    setAddressInfoState(false);
    setRatingButtonState(false);
    setSharedState(false);
    setRatingSectionState(false);
    setRatingEditState(false);

    const noteData = {
      starred: false,
      title: "",
      text: "",
      propertyAddress: null,
    };

    notesAPI.createNote(noteData)
      .then(res => {
        setCurrentNoteId(res.data.id);
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while submitting your data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleTitleInputChange = () => {
    const titleValue = titleRef.current.value;
    setTitle(titleValue);

    const titleData = {
      title: titleValue
    };

    notesAPI.updateNote(currentNoteId, titleData)
      .then(res => {
        // Check user's saved notes to update list
        notesAPI.getNotesWithReviews()
        .then(res => {    
        // Separate starred and non-starred notes 
        let starredNotes = [];
        let nonStarredNotes = [];
        res.data.forEach(note => {
          if (note.starred) {
            starredNotes.push(note);
          } else {
            nonStarredNotes.push(note);
          };
        });

        // Reverse order of notes to display newest first 
        // res.data.reverse(); // to display latest note
        // starredNotes.reverse(); // to display starred notes list
        // nonStarredNotes.reverse(); // to display all notes list 
        setStarredNotes(starredNotes);
        setNonStarredNotes(nonStarredNotes);
        })
        .catch(err => {
          console.log(err);
          setPopupState({ 
            open: true, type: "error", severity: "error", 
            message: "An error was encountered while retrieving data. Please try again later." 
          });
          setTimeout(function() {
            setPopupState({ open: false, type: "", severity: "", message: "" });
          }, popupTimeout);
        });
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while updating data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };


  const handleNoteButtonClick = (event) => {
    setTextEditorMode(false);
    if (!event.target.matches("i")) {
      setResponsiveNoteListState(false);
    }
    
    let clickedNoteId;
    if (event.target.id) {
      clickedNoteId = parseInt(event.target.id.split("-")[1]);
    } else {
      clickedNoteId = parseInt(event.target.parentElement.id.split("-")[1]);
    }

    setCurrentNoteId(clickedNoteId);
    notesAPI.getNotesWithReviews()
      .then(res => {
        // setAllNotes(res.data.reverse());
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].id === clickedNoteId) {
            setTitle(res.data[i].title);
            sideTitle = res.data[i].title;
            setText(res.data[i].text);
            setDateUpdated(res.data[i].updatedAt);
            setAddress(res.data[i].propertyAddress);
            setPropertySpecs({
              bedrooms: res.data[i].bedrooms,
              bathrooms: res.data[i].bathrooms,
              carSpaces: res.data[i].carSpaces,
              landSize: res.data[i].landSize,
            });
            if (res.data[i].propertyAddress) {
              setAddressInfoState(true);
              if (res.data[i].review) {
                setPropertyReview(res.data[i].review);
                setSharedState(res.data[i].shared);
                setRatingSectionState(true);
                setRatingButtonState(false);
                setRatingEditState(false);
              } else {
                setRatingSectionState(false);
                setRatingButtonState(true);
              }
            } else {
              setAddressInfoState(false);
              setRatingButtonState(false);
              setRatingSectionState(false);
            }
          }
        }
      })
  };
  
  const handleLinkAddressButtonClick = () => {
    if (addressInputIsOpen) {
      setAddressInputState(false);
    } else {
      setAddressInputState(true);
    }
  };

  const handleUnlinkAddressButtonClick = () => {
    setModalState({ isOpen: true, type: "addressUnlink", title: "Confirmation", 
    text: "Are you sure you want to unlink this address? If applicable, ratings will be deleted and this note will be unshared." });
  };

  const unlinkModalYesClick = () => {
    setAddress("");
    setModalState({ isOpen: false, type: "", title: "", text: "" });
    setAddressInfoState(false);
    setAddressInputState(false);
    setRatingButtonState(false);
    setRatingSectionState(false);
    notesAPI.updateNote(currentNoteId, {
      propertyAddress: null,
      hasReview: false,
      shared: false,
    })
      .then(res => {
        reviewsAPI.deleteReview(currentNoteId)
          .then(res => console.log(res))
          .catch(err => {
            console.log(err);
            setPopupState({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while updating data. Please try again later." 
            });
            setTimeout(function() {
              setPopupState({ open: false, type: "", severity: "", message: "" });
            }, popupTimeout);
          })
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while updating data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleModalNoClick = () => {
    setModalState({ isOpen: false, type: "", title: "", text: "" });
  };

  const handleAddressInputChange = () => {
    const address = addressRef.current.children[0].children[1].children[0].value.trim();
    // setAddressSearch(address);
    if (address !== "") {
      domainAPI.getAddressSuggestions(encodeURIComponent(address))
      .then(res => {
        setAddressSuggestions(res.data);
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
    } else {
      setAddressSuggestions([]);
    }
  };

  const handleAddressSuggestionClick = (value) => {
    let propertyId;
    setAddress(value.address);
    console.log(value);

    propertiesAPI.getAllProperties()
      .then(res => {
        res.data.forEach(item => {
          if (address === item.propertyAddress) {
            propertyId = item.id;
          }
        });

        console.log(value.id)
        domainAPI.getPropertyInfo(value.id)
        .then(res => {
          console.log(value.id)
          const propertyInfo = {
            bedrooms: res.data.bedrooms,
            bathrooms: res.data.bathrooms,
            carSpaces: res.data.carSpaces,
            landSize: res.data.areaSize,
            propertyId: propertyId
          };
  
          setPropertySpecs(propertyInfo);
  
          propertyInfo.propertyAddress = value.address;
          notesAPI.updateNote(currentNoteId, propertyInfo)
            .then(res => {
              setAddressInfoState(true);
              setAddressInputState(false);
              setRatingButtonState(true);
            })
            .catch(err => {
              console.log(err);
              setPopupState({ 
                open: true, type: "error", severity: "error", 
                message: "An error was encountered while updating data. Please try again later." 
              });
              setTimeout(function() {
                setPopupState({ open: false, type: "", severity: "", message: "" });
              }, popupTimeout);
            });
        })
        .catch(err => {
          console.log(err);
          setPopupState({ 
            open: true, type: "error", severity: "error", 
            message: "An error was encountered while retrieving data. Please try again later." 
          });
          setTimeout(function() {
            setPopupState({ open: false, type: "", severity: "", message: "" });
          }, popupTimeout);
        });
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleRatingButtonClick = () => {
    setRatingSectionState(true);
    setRatingButtonState(false);

    const review = {
      propertyConditionRating: null,
      potentialRating: null,
      surroundingsRating: null,
      neighbourComparisonRating: null,
      accessibilityRating: null,
      privacyRating: null,
      floorplanRating: null,
      outdoorSpaceRating: null,
      indoorOutdoorFlowRating: null,
      naturalLightRating: null,
    };

    setPropertyReview(review);
    reviewsAPI.createReview(currentNoteId, review)
      .then(res => {
        notesAPI.updateNote(currentNoteId, {
          hasReview: true
        })
          .then(res => console.log(res))
          .catch(err => {
            console.log(err);
            setPopupState({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while updating data. Please try again later." 
            });
            setTimeout(function() {
              setPopupState({ open: false, type: "", severity: "", message: "" });
            }, popupTimeout);
          });
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while submitting your data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleRatingInputChange = (event) => {
    const target = event.target.id.split("-")[0];
    const review = propertyReview;
    switch(target) {
      case "condition":
        review.propertyConditionRating = isNaN(parseInt(conditionRef.current.value)) ? 
        null : parseInt(conditionRef.current.value);
        break;
      case "potential":
        review.potentialRating = isNaN(parseInt(potentialRef.current.value)) ?
        null: parseInt(potentialRef.current.value);
        break;
      case "surroundings":
        review.surroundingsRating = isNaN(parseInt(surroundingsRef.current.value)) ?
        null: parseInt(surroundingsRef.current.value);
        break;
      case "neighbours":
        review.neighbourComparisonRating = isNaN(parseInt(neighboursRef.current.value)) ?
        null: parseInt(neighboursRef.current.value);
        break;
      case "accessibility":
        review.accessibilityRating = isNaN(parseInt(accessibilityRef.current.value)) ? 
        null: parseInt(accessibilityRef.current.value);
        break;
      case "privacy":
        review.privacyRating = isNaN(parseInt(privacyRef.current.value)) ?
        null: parseInt(privacyRef.current.value);
        break;
      case "floorplan":
        review.floorplanRating = isNaN(parseInt(floorplanRef.current.value)) ?
        null: parseInt(floorplanRef.current.value);
        break;
      case "outdoorSpace":
        review.outdoorSpaceRating = isNaN(parseInt(outdoorSpaceRef.current.value)) ?
        null: parseInt(outdoorSpaceRef.current.value);
        break;
      case "indoorOutdoor":
        review.indoorOutdoorFlowRating = isNaN(parseInt(indoorOutdoorRef.current.value)) ?
        null: parseInt(indoorOutdoorRef.current.value);
        break;
      case "lighting":
        review.naturalLightRating = isNaN(parseInt(lightingRef.current.value)) ?
        null: parseInt(lightingRef.current.value);
        break;
      default: 
        break;
    }

    setPropertyReview(review);
  };

  const handleReviewSaveButtonClick = () => {
    setRatingEditState(false);
    reviewsAPI.updateReview(currentNoteId, propertyReview)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while updating data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleDeleteNoteButtonClick = (event) => {
    event.stopPropagation();
    const noteId = event.target.id.split("-")[1];
    setModalState({ isOpen: true, type: "noteDelete", title: "Confirmation", text: "Are you sure you want to delete this note?" });
    setNoteReviewToDelete(noteId);
  };

  const handleConfirmDeleteNoteYesClick = () => {
    notesAPI.deleteNote(noteReviewToDelete)
      .then(res => {
        handleModalNoClick();
        setPopupState({ 
          open: true, type: "deleteSuccess", severity: "success", 
          message: "Note successfully deleted!" 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);

        notesAPI.getAllNotes()
          .then(res => {
            // setAllNotes(res.data.reverse());
            if (currentNoteId === noteReviewToDelete) {
              if (res.data.length > 0) {
                setCurrentNoteId(res.data[0].id);
                setTitle(res.data[0].title);
                setText(res.data[0].text);
                if (res.data[0].propertyAddress) {
                  setAddress(res.data[0].propertyAddress);
                  setPropertySpecs({
                    bedrooms: res.data[0].bedrooms,
                    bathrooms: res.data[0].bathrooms,
                    carSpaces: res.data[0].carSpaces,
                    landSize: res.data[0].landSize
                  });
                  setAddressInfoState(true);
                  if (res.data[0].hasReview) {
                    setRatingButtonState(false);
                    setRatingSectionState(true);
                    setRatingEditState(false);
                  } else {
                    setRatingButtonState(true);
                  }
                } else {
                  setAddressInfoState(false);
                  setRatingButtonState(false);
                  setRatingSectionState(false);
                }
              } else {
                setTitle("");
                setText("");
                setAddressInfoState(false);
                setAddress("");
                setRatingButtonState(false);
                setRatingSectionState(false);
                setPropertySpecs({});
              }
            }
            renderAllNotes();
          })
          .catch(err => {
            console.log(err);
            setPopupState({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while retrieving data. Please try again later." 
            });
            setTimeout(function() {
              setPopupState({ open: false, type: "", severity: "", message: "" });
            }, popupTimeout);
          });
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error has occurred. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleDeleteReviewButtonClick = () => {
    setModalState({ isOpen: true, type: "reviewDelete", title: "Confirmation", text: "Are you sure you want to delete this review?" });
  };

  const handleConfirmDeleteReviewYesClick = () => {
    reviewsAPI.deleteReview(currentNoteId)
      .then(res => {
        setPropertyReview({});
        setRatingSectionState(false);
        setRatingButtonState(true);
        setModalState({ isOpen: false, type: "", title: "", text: "" });

        notesAPI.updateNote(currentNoteId, {
          hasReview: false,
        })
          .then(res => console.log(res))
          .catch(err => {
            console.log(err);
            setPopupState({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while updating data. Please try again later." 
            });
            setTimeout(function() {
              setPopupState({ open: false, type: "", severity: "", message: "" });
            }, popupTimeout);
          });
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error has occurred. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleStarButtonClick = (event, isStarred) => {
    const noteId = event.target.id.split("-")[1];
    let starred = !isStarred;
    notesAPI.updateNote(noteId, {
      starred: starred,
    })
      .then(res => {
        notesAPI.getAllNotes()
          .then(res => {
            // Update starred and non-starred notes
            let starredNotes = [];
            let nonStarredNotes = [];
            res.data.forEach(note => {
              if (note.starred) {
                starredNotes.push(note);
              } else {
                nonStarredNotes.push(note);
              };
            });

            // Reverse order of notes to display newest first 
            // res.data.reverse(); // to display latest note
            // starredNotes.reverse(); // to display starred notes list
            // nonStarredNotes.reverse(); // to display all notes list 
            setStarredNotes(starredNotes);
            setNonStarredNotes(nonStarredNotes);
          })
          .catch(err => {
            console.log(err);
            setPopupState({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while retrieving data. Please try again later." 
            });
            setTimeout(function() {
              setPopupState({ open: false, type: "", severity: "", message: "" });
            }, popupTimeout);
          });
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while updating data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleEditTextButtonClick = () => {
    notesAPI.getOneNote(currentNoteId)
    .then(res => {
      setText(res.data.text);
      setTextEditorMode(!textEditorModeOn);
    })
    .catch(err => {
      console.log(err);
      setPopupState({ 
        open: true, type: "error", severity: "error", 
        message: "An error was encountered while retrieving data. Please try again later." 
      });
      setTimeout(function() {
        setPopupState({ open: false, type: "", severity: "", message: "" });
      }, popupTimeout);
    });
  };

  const handleNoteSearchInputChange = () => {
    const query = searchRef.current.value;
    // setSearchword(query);

    if (query !== "") {
      notesAPI.searchNotes(encodeURIComponent(query))
      .then(res => {
        if (res.data.length > 0) {
          // res.data.reverse();
          let starredNotes = [];
          let nonStarredNotes = [];
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].starred) {
              starredNotes.push(res.data[i]);
            } else {
              nonStarredNotes.push(res.data[i]);
            }
            setStarredNotes(starredNotes);
            setNonStarredNotes(nonStarredNotes);

            let topSearchResult = starredNotes[0];
            setTitle(topSearchResult.title);
            setText(topSearchResult.text);
            if (topSearchResult.propertyAddress) {
              setAddress(topSearchResult.propertyAddress);
              setPropertySpecs({
                bedrooms: topSearchResult.bedrooms,
                bathrooms: topSearchResult.bathrooms,
                carSpaces: topSearchResult.carSpaces,
                land: topSearchResult.landSize,
              });
              setAddressInfoState(true);
              // Determine whether or not note has review
              if (topSearchResult.hasReview) {
                reviewsAPI.getAllReviews()
                  .then(res => {
                    for (let i = 0; i < res.data.length; i++) {
                      if (res.data[i].noteId === topSearchResult.id) {
                        setPropertyReview(res.data[i]);
                      }
                    }
                  })
                  .catch(err => {
                    console.log(err);
                    setPopupState({ 
                      open: true, type: "error", severity: "error", 
                      message: "An error was encountered while retrieving data. Please try again later." 
                    });
                    setTimeout(function() {
                      setPopupState({ open: false, type: "", severity: "", message: "" });
                    }, popupTimeout);
                  });
                setRatingSectionState(true);
              } else {
                setRatingButtonState(true);
              }
            } else {
              setAddressInfoState(false);
              setRatingSectionState(false);
              setRatingButtonState(false);
            }
          }
        } else {
          setStarredNotes([]);
          setNonStarredNotes([]);
        }
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
    } else {
      renderAllNotes();
    }
  };

  const handleShareButtonClick = () => {
    console.log(props.id)
    userAPI.getOneUser(props.id)
      .then(res => {
        setAuthor({ firstName: res.data.firstName, lastName: res.data.lastName });
        setReviewModalState(true);
      })
      .catch(err => {
        console.log(err);
        setPopupState({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopupState({ open: false, type: "", severity: "", message: "" });
        }, popupTimeout);
      });
  };

  const handleUnshareButtonClick = () => {
    setModalState({ isOpen: true, type: "reviewUnshare", title: "Confirmation", 
    text: "Unsharing this review will remove it from public view on the reviews page. Would you like to proceed?" });
  };

  const handleConfirmUnshareYesClick = () => {
    notesAPI.updateNote(currentNoteId, {
      shared: !isShared,
      dateShared: null
    })
    .then(res => {
      handleModalNoClick();
      setPopupState({ open: true, type: "unshareSuccess", severity: "success", message: "Review successfully unshared"});
      setTimeout(function() {
        setPopupState({ open: false, type: "", severity: "", message: "" });
      }, popupTimeout);
      setSharedState(!isShared);
    })
    .catch(err => {
      console.log(err);
      setPopupState({ 
        open: true, type: "error", severity: "error", 
        message: "An error was encountered while updating data. Please try again later." 
      });
      setTimeout(function() {
        setPopupState({ open: false, type: "", severity: "", message: "" });
      }, popupTimeout);
    });
  };

  const confirmReviewShare = () => {
    notesAPI.updateNote(currentNoteId, {
      shared: !isShared,
      dateShared: moment().format("YYYY-MM-DD")
    })
    .then(res => {
      setReviewModalState(false);
      setPopupState({ open: true, type: "shareSuccess", severity: "success", message: "Review successfully shared!"});
      setTimeout(function() {
        setPopupState({ open: false, type: "", severity: "", message: "" });
      }, popupTimeout);
      setSharedState(!isShared);
    })
    .catch(err => {
      console.log(err);
      setPopupState({ 
        open: true, type: "error", severity: "error", 
        message: "An error was encountered while updating data. Please try again later." 
      });
      setTimeout(function() {
        setPopupState({ open: false, type: "", severity: "", message: "" });
      }, popupTimeout);
    });
  };

  const handlePopupClose = () => {
    setPopupState({ open: false, type: "", severity: "success", message: "" });
  };

  const handleReviewModalClose = () => {
    setReviewModalState(false);
  };

  const reviewModalBody = (
    <div id="notes-review-modal-preview" style={modalStyle} className={classes.paper}>
      <h2 id="review-modal-heading" style={{ textAlign: "center" }}>Preview</h2>
      <ReviewCard
        title={title}
        text={text}
        address={address}
        date={moment().format("DD/MM/YY")}
        author={`${author.firstName} ${author.lastName}`}
        beds={propertySpecs.bedrooms}
        baths={propertySpecs.bathrooms}
        cars={propertySpecs.carSpaces}
        land={propertySpecs.landSize}
        propertyConditionRating={propertyReview.propertyConditionRating}
        potentialRating={propertyReview.privacyRating}
        surroundingsRating={propertyReview.surroundingsRating}
        neighbourComparisonRating={propertyReview.neighbourComparisonRating}
        accessibilityRating={propertyReview.accessibilityRating}
        privacyRating={propertyReview.privacyRating}
        floorplanRating={propertyReview.floorplanRating}
        outdoorSpaceRating={propertyReview.outdoorSpaceRating}
        indoorOutdoorFlowRating={propertyReview.indoorOutdoorFlowRating}
        naturalLightRating={propertyReview.naturalLightRating}
      />
      <div className="review-modal-action" style={{ textAlign: "center", paddingTop: "10px" }}>
        <Button className={classes.createButton} variant="contained" onClick={confirmReviewShare}>SHARE REVIEW</Button>
        <Button className={classes.cancelButton} variant="contained" onClick={handleReviewModalClose}>CANCEL</Button>
      </div>
    </div>
  );

  const handleAllNotesButtonClick = () => {
    setResponsiveNoteListState(true);
  };

  return (
    <div>
      <SideMenu />
      <BoxContainer>
        <Grid container className={classes.maxHeight}>
          <Grid id={responsiveNoteListOpen ? "note-bar-responsive" : "note-bar"} item className={classes.overflow}>
            <div className="note-list-div box-seg">
              <div className="note-search-div">
                <input 
                  ref={searchRef}
                  id="note-search-input" 
                  type="text" 
                  placeholder="Search your notes"
                  onChange={handleNoteSearchInputChange}
                />
              </div>
              <div className="starred-notes-div">
                <List component="nav" aria-label="" className={classes.noteList}>
                  <ListItem className={classes.noteSection}>
                    <ListItemText disableTypography primary="Starred"/>
                  </ListItem>
                  {starredNotes.length > 0 ? 
                    starredNotes.map(note => (
                      <NoteListItem
                        key={`note-${note.id}`}
                        noteId={note.id}
                        listItemOnClick={handleNoteButtonClick}
                        currentNoteId={currentNoteId}
                        sideTitle={sideTitle}
                        noteTitle={note.title}
                        deleteOnClick={handleDeleteNoteButtonClick}
                        starOnClick={handleStarButtonClick}
                        noteIsStarred={note.starred}
                        title={title}
                      />
                    )) : 
                    <div>
                      <ListItem>
                        <ListItemText
                          primary="No starred notes"
                        />
                      </ListItem>
                    </div> 
                  }
                </List>
              </div>
              <div className="all-notes-div">
                <List component="nav" aria-label="" className={classes.noteList}>
                  <ListItem className={classes.noteSection}>
                    <ListItemText disableTypography primary="Notes"/>
                  </ListItem>
                  {nonStarredNotes.length > 0 ? 
                    nonStarredNotes.map(note => (
                      <NoteListItem
                        key={`note-${note.id}`}
                        noteId={note.id}
                        listItemOnClick={handleNoteButtonClick}
                        currentNoteId={currentNoteId}
                        sideTitle={sideTitle}
                        noteTitle={note.title}
                        deleteOnClick={handleDeleteNoteButtonClick}
                        starOnClick={handleStarButtonClick}
                        noteIsStarred={note.starred}
                        title={title}
                      />
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
          <Grid item id={responsiveNoteListOpen ? "note-area-responsive" : "note-area"} className={classes.note}>
            <div className="current-note-div box-seg">
              <div className="current-note-top">
                <div className="current-note-responsive">
                  <Button onClick={handleAllNotesButtonClick} startIcon={<ArrowBackIosIcon />}>All Notes</Button>
                </div>
                <div className="current-note-date">
                  {moment(dateUpdated).format("DD/MM/YY h:mma")}
                </div>
                <div className="new-note-btn">
                  <IconButton
                    onClick={handleNewNoteButtonClick}
                    id="new-note-btn"
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
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
              <div id="note-address" className="note-address note-seg">
                <div className="note-address-btn">
                  {addressInfoIsOpen ? 
                    <IconButton
                      className={classes.attachButton}
                      variant="contained"
                      color="secondary"
                      onClick={!addressInfoIsOpen ? handleLinkAddressButtonClick
                      : handleUnlinkAddressButtonClick}
                    >
                      <LocationOffIcon />
                    </IconButton> : 
                    <Button
                      className={classes.attachButton}
                      variant="contained"
                      color="secondary"
                      startIcon={<PlaceIcon />}
                      onClick={!addressInfoIsOpen ? handleLinkAddressButtonClick
                      : handleUnlinkAddressButtonClick}
                    >
                      LINK A PROPERTY
                    </Button>
                  }
                </div>
                <div 
                  className={
                    `note-address-input 
                    ${addressInputIsOpen ? classes.show : classes.hide}`}
                >
                <SearchAutocomplete
                  id="search-autocomplete-notes"
                  className="notes-search-address"
                  // style={{ position: "fixed" }}
                  addressRef={addressRef}
                  onInputChange={handleAddressInputChange}
                  suggestions={addressSuggestions}
                  onChange={handleAddressSuggestionClick}
                  smallInput={true}
                />
                </div>
                <div 
                  className={
                    `note-address-text 
                    ${addressInfoIsOpen ? classes.showSpan : classes.hide}`
                  }>
                  <div className="note-address-text">
                    {address}
                  </div>
                  <div className="note-address-specs">
                    <i className="fas fa-bed"></i>&nbsp;
                    <span className="num-beds">{propertySpecs.bedrooms ? propertySpecs.bedrooms : "- "}</span>&nbsp;&nbsp;
                    <i className="fas fa-shower"></i>&nbsp;
                    <span className="num-baths">{propertySpecs.bathrooms ? propertySpecs.bathrooms : "- "}</span>&nbsp;&nbsp;
                    <i className="fas fa-car"></i>&nbsp;
                    <span className="num-cars">{propertySpecs.carSpaces ? propertySpecs.carSpaces : "- "}</span>&nbsp;&nbsp;
                    <i className="fas fa-ruler-combined"></i>&nbsp;
                    <span className="num-land">{propertySpecs.landSize ? propertySpecs.landSize : "- "}m²</span>&nbsp;&nbsp;
                  </div>
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
                  onClick={handleRatingButtonClick}
                >
                  Rate property
                </Button>
              </div>
              <div 
                className=
                {`note-review-section note-seg
                ${ratingSectionIsOpen ? classes.show : classes.hide}`}
              >
                <table>
                  <thead>
                    <tr style={{ paddingBottom: "10px" }}>
                      <th className="note-section-heading">RATINGS</th>
                      <th className="note-action-btns">
                        {ratingEditIsOpen ? 
                          <IconButton onClick={handleReviewSaveButtonClick} className={classes.iconButton} aria-label="save">
                            <SaveIcon/>
                          </IconButton> : 
                          <IconButton className={classes.iconButton} aria-label="edit" onClick={() => setRatingEditState(true)}>
                            <EditIcon />
                          </IconButton>
                        }
                        <IconButton className={classes.iconButton}  aria-label="delete" onClick={handleDeleteReviewButtonClick}>
                          <DeleteIcon />
                        </IconButton>
                        <Button className={classes.shareButton} onClick={isShared ? handleUnshareButtonClick : handleShareButtonClick} variant="contained" aria-label="share">
                          {isShared ? "UNSHARE" : "SHARE"}  
                        </Button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.condition}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Property condition&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.propertyConditionRating ? propertyReview.propertyConditionRating : "-"}
                        </span>
                        <input 
                            id="condition-input" 
                            ref={conditionRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.propertyConditionRating ? propertyReview.propertyConditionRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td> 
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                          <Tooltip title={ratingTooltips.potential}>
                            <i className="fas fa-info-circle"></i>
                          </Tooltip>&nbsp;
                          <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Potential to capitalise&nbsp;</div>
                        </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.potentialRating ? propertyReview.potentialRating : "-"}
                        </span>
                        <input 
                            id="potential-input" 
                            ref={potentialRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.potentialRating ? propertyReview.potentialRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.surroundings}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Surroundings&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.surroundingsRating ? propertyReview.surroundingsRating : "-"}
                        </span>
                        <input 
                            id="surroundings-input" 
                            ref={surroundingsRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.surroundingsRating ? propertyReview.surroundingsRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.neighbours}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Consistency with neighbours&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.neighbourComparisonRating ? propertyReview.neighbourComparisonRating : "-"}
                        </span>
                        <input 
                            id="neighbours-input" 
                            ref={neighboursRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.neighbourComparisonRating ? propertyReview.neighbourComparisonRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.accessibility}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Accessibility&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.accessibilityRating ? propertyReview.accessibilityRating : "-"}
                        </span>
                        <input 
                            id="accessibility-input" 
                            ref={accessibilityRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.accessibilityRating ? propertyReview.accessibilityRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.privacy}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Privacy&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.privacyRating ? propertyReview.privacyRating : "-"}
                        </span>
                        <input 
                            id="privacy-input" 
                            ref={privacyRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.privacyRating ? propertyReview.privacyRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.floorplan}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Floor plan&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.floorplanRating ? propertyReview.floorplanRating : "-"}
                        </span>
                        <input 
                            id="floorplan-input" 
                            ref={floorplanRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.floorplanRating ? propertyReview.floorplanRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.outdoorSpace}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Outdoor space&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.outdoorSpaceRating ? propertyReview.outdoorSpaceRating : "-"}
                        </span>
                        <input 
                            id="outdoorSpace-input" 
                            ref={outdoorSpaceRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.outdoorSpaceRating ? propertyReview.outdoorSpaceRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.indoorOutdoorFlow}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Indoor-to-outdoor flow&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.indoorOutdoorFlowRating ? propertyReview.indoorOutdoorFlowRating : "-"}
                        </span>
                        <input 
                            id="indoorOutdoor-input" 
                            ref={indoorOutdoorRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.indoorOutdoorFlowRating ? propertyReview.indoorOutdoorFlowRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>
                        <Tooltip title={ratingTooltips.naturalLight}>
                          <i className="fas fa-info-circle"></i>
                        </Tooltip>&nbsp;
                        <div className="notes-rating-tooltip-div" style={{ display: "inline-block" }}>Natural light&nbsp;</div>
                      </td>
                      <td>
                        <span 
                          className={
                            `review-rating
                            ${ratingEditIsOpen ? classes.hide : classes.showSpan}`
                          }
                        >
                          {propertyReview.naturalLightRating ? propertyReview.naturalLightRating : "-"}
                        </span>
                        <input 
                            id="lighting-input" 
                            ref={lightingRef} 
                            onChange={handleRatingInputChange} 
                            className={`rating-input ${ratingEditIsOpen ? classes.showSpan : classes.hide}`} 
                            type="number" 
                            min="1" 
                            max="5" 
                            placeholder={propertyReview.naturalLightRating ? propertyReview.naturalLightRating : "-"}/>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr id="note-text-hr"/>
              <div id="note-text-section" className="note-text-section note-seg">
                <table>
                  <thead>
                    <tr>
                      <th className="note-section-heading">NOTES</th>
                      <th className="note-action-btns">
                        <IconButton
                          onClick={handleEditTextButtonClick}
                        >
                          {textEditorModeOn ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        {/* Standard textarea for notes */}
                        {/* <textarea 
                          ref={textRef}
                          onChange={handleTextInputChange}
                          value={text}
                        ></textarea> */}
                        <TextEditor
                          currentNoteId={currentNoteId}
                          editorModeOn={textEditorModeOn}
                          text={text}
                        />
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
              </div>
            </div>
            <SimpleModal
              title={modalState.title}
              text={modalState.text}
              yesClick={
                modalState.type === "addressUnlink" ? unlinkModalYesClick : 
                modalState.type === "reviewDelete" ? handleConfirmDeleteReviewYesClick : 
                modalState.type === "noteDelete" ? handleConfirmDeleteNoteYesClick :
                handleConfirmUnshareYesClick
              }
              noClick={handleModalNoClick}
              modalState={modalState.isOpen}
              id={modalState.noteId ? modalState.noteId : ""}
            />
            <Modal
              // className={classes.reviewModal}
              open={reviewModalIsOpen}
              onClose={handleReviewModalClose}
              aria-labelledby="review-modal-title"
              aria-describedby="review-modal-description"
            >
              {reviewModalBody}
            </Modal>
          </Grid>
        </Grid>
      </BoxContainer>
      <Popup 
        open={popup.open}
        handleClose={handlePopupClose}
        severity={popup.severity}
        message={popup.message}
      />
    </div>
  );
};