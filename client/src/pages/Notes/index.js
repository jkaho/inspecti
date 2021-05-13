// React 
import React, { useEffect, useState, useRef } from "react";
// Children components 
import SideMenu from "../../components/SideMenu";
import BoxContainer from "../../components/BoxContainer";
import NoteListItem from "../../components/NoteListItem";
import TextEditor from "../../components/TextEditor";
import ReviewCard from "../../components/ReviewCard";
import SimpleModal from "../../components/Modal";
import PopupMessage from "../../components/PopupMessage";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import PlaceIcon from "@material-ui/icons/Place";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import RateReviewIcon from "@material-ui/icons/RateReview";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// CSS
import "./style.css";
// API 
import notesAPI from "../../utils/notesAPI";
import reviewsAPI from "../../utils/reviewsAPI";
import propertiesAPI from "../../utils/propertiesAPI";
import domainAPI from "../../utils/domainAPI";
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

export default function Notes(props) {
  // States
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState({});
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
  const [isShared, setSharedState] = useState(false);
  const [reviewModalIsOpen, setReviewModalState] = useState(false);
  let sideTitle = "";

  // Refs
  const searchRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
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
    renderAllNotes();
  }, []);

  // Helper functions
  const renderAllNotes = () => {
    // Check user's saved notes 
    notesAPI.getNotesWithReviews(props.id)
    .then(res => {
      console.log(res);
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
        };

        notesAPI.createNote(newNote)
          .then(res => {
            console.log(res.data);
            setCurrentNoteId(res.data.id);
          })
          .catch(err => console.log(err))
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
        res.data.reverse(); // to display latest note
        starredNotes.reverse(); // to display starred notes list
        nonStarredNotes.reverse(); // to display all notes list 
        setStarredNotes(starredNotes);
        setNonStarredNotes(nonStarredNotes);

        // Render latest note
        const lastNote = res.data[0];
        setCurrentNoteId(lastNote.id);
        setTitle(lastNote.title);
        setText(lastNote.text);
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
            console.log(lastNote.review)
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
    .catch(err => console.log(err));
  };
  // const renderAllNotes = () => {
  //   // Check user's saved notes 
  //   notesAPI.getAllNotes(props.id)
  //   .then(res => {
  //     console.log(res);
  //     // If there are no existing notes, create a new blank note
  //     if (res.data.length < 1) {
  //       titleRef.current.value = "";
  //       textRef.current.value = "";
  //       setTitle("");
  //       setText("");
        
  //       const newNote = {
  //         starred: false,
  //         title: title,
  //         text: text,
  //         propertyAddress: null,
  //         userId: props.id
  //       };

  //       notesAPI.createNote(newNote)
  //         .then(res => {
  //           console.log(res.data);
  //           setCurrentNoteId(res.data.id);
  //         })
  //         .catch(err => console.log(err))
  //     // Else render the latest note 
  //     } else {
  //       // Separate starred and non-starred notes 
  //       let starredNotes = [];
  //       let nonStarredNotes = [];
  //       res.data.forEach(note => {
  //         if (note.starred) {
  //           starredNotes.push(note);
  //         } else {
  //           nonStarredNotes.push(note);
  //         };
  //       });

  //       // Reverse order of notes to display newest first 
  //       res.data.reverse(); // to display latest note
  //       starredNotes.reverse(); // to display starred notes list
  //       nonStarredNotes.reverse(); // to display all notes list 
  //       setStarredNotes(starredNotes);
  //       setNonStarredNotes(nonStarredNotes);

  //       // Render latest note
  //       const lastNote = res.data[0];
  //       setCurrentNoteId(lastNote.id);
  //       setTitle(lastNote.title);
  //       setText(lastNote.text);
  //       if (lastNote.propertyAddress) {
  //         setAddress(lastNote.propertyAddress);
  //         setPropertySpecs({
  //           bedrooms: lastNote.bedrooms,
  //           bathrooms: lastNote.bathrooms,
  //           carSpaces: lastNote.carSpaces,
  //           land: lastNote.landSize,
  //         });
  //         setAddressInfoState(true);
  //         // Determine whether or not note has review
  //         if (lastNote.hasReview) {
  //           reviewsAPI.getAllReviews()
  //             .then(res => {
  //               for (let i = 0; i < res.data.length; i++) {
  //                 if (res.data[i].noteId === lastNote.id) {
  //                   setPropertyReview(res.data[i]);
  //                   setSharedState(res.data[i].shared);
  //                   console.log(res.data[i].shared)
  //                 }
  //               }
  //             })
  //             .catch(err => console.log(err))
  //           setRatingSectionState(true);
  //         } else {
  //           setRatingButtonState(true);
  //         }
  //       } else {
  //         setAddressInfoState(false);
  //         setRatingSectionState(false);
  //         setRatingButtonState(false);
  //       }
  //     }
  //   })
  //   .catch(err => console.log(err));
  // };

  const handleNewNoteButtonClick = () => {
    // titleRef.current.value = "";
    // textRef.current.value = "";
    setTitle("");
    setText("");
    setAddress("");
    setAddressInputState(false);
    setAddressInfoState(false);
    setRatingButtonState(false);
    setRatingEditState(false);

    const noteData = {
      starred: false,
      title: "",
      text: "",
      propertyAddress: null,
      userId: props.id
    };

    notesAPI.createNote(noteData)
      .then(res => {
        console.log(res);
        setCurrentNoteId(res.data.id);
      })
      .catch(err => console.log(err));
  };

  const handleTitleInputChange = () => {
    const titleValue = titleRef.current.value;
    setTitle(titleValue);

    const titleData = {
      title: titleValue
    };

    notesAPI.updateNote(currentNoteId, titleData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // const handleTextInputChange = () => {
  //   const textValue = textRef.current.value;
  //   setText(textValue);

  //   const textData = {
  //     text: textValue
  //   }
  //   notesAPI.updateNote(currentNoteId, textData)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // };

  const handleNoteButtonClick = (event) => {
    setTextEditorMode(false);

    let clickedNoteId;
    if (event.target.id) {
      clickedNoteId = parseInt(event.target.id.split("-")[1]);
    } else {
      clickedNoteId = parseInt(event.target.parentElement.id.split("-")[1]);
    }

    setCurrentNoteId(clickedNoteId);
    notesAPI.getNotesWithReviews(props.id)
      .then(res => {
        console.log(res)
        // setAllNotes(res.data.reverse());
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].id === clickedNoteId) {
            setTitle(res.data[i].title);
            sideTitle = res.data[i].title;
            setText(res.data[i].text);
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
    // for (let i = 0; i < allNotes.length; i++) {
    //   if (allNotes[i].id === clickedNoteId) {
    //     setTitle(allNotes[i].title);
    //     setText(allNotes[i].text);
    //   }
    // }
  };
  // const handleNoteButtonClick = (event) => {
  //   setTextEditorMode(false);

  //   let clickedNoteId;
  //   if (event.target.id) {
  //     clickedNoteId = parseInt(event.target.id.split("-")[1]);
  //   } else {
  //     clickedNoteId = parseInt(event.target.parentElement.id.split("-")[1]);
  //   }

  //   setCurrentNoteId(clickedNoteId);
  //   notesAPI.getAllNotes(props.id)
  //     .then(res => {
  //       // setAllNotes(res.data.reverse());
  //       for (let i = 0; i < res.data.length; i++) {
  //         if (res.data[i].id === clickedNoteId) {
  //           setTitle(res.data[i].title);
  //           sideTitle = res.data[i].title;
  //           setText(res.data[i].text);
  //           console.log(res.data[i].text)
  //           setAddress(res.data[i].propertyAddress);
  //           setPropertySpecs({
  //             bedrooms: res.data[i].bedrooms,
  //             bathrooms: res.data[i].bathrooms,
  //             carSpaces: res.data[i].carSpaces,
  //             landSize: res.data[i].landSize,
  //           });
  //           if (res.data[i].propertyAddress) {
  //             setAddressInfoState(true);
  //             if (res.data[i].hasReview) {
  //               reviewsAPI.getAllReviews()
  //               .then(res => {
  //                 for (let i = 0; i < res.data.length; i++) {
  //                   if (res.data[i].noteId === clickedNoteId) {
  //                     setPropertyReview(res.data[i]);
  //                     setSharedState(res.data[i].shared);
  //                   }
  //                 }
  //               })
  //               .catch(err => console.log(err))
  //               setRatingSectionState(true);
  //               setRatingButtonState(false);
  //               setRatingEditState(false);
  //             } else {
  //               setRatingSectionState(false);
  //               setRatingButtonState(true);
  //             }
  //           } else {
  //             setAddressInfoState(false);
  //             setRatingButtonState(false);
  //             setRatingSectionState(false);
  //           }
  //         }
  //       }
  //     })
  //   // for (let i = 0; i < allNotes.length; i++) {
  //   //   if (allNotes[i].id === clickedNoteId) {
  //   //     setTitle(allNotes[i].title);
  //   //     setText(allNotes[i].text);
  //   //   }
  //   // }
  // };

  const handleLinkAddressButtonClick = () => {
    if (addressInputIsOpen) {
      setAddressInputState(false);
    } else {
      setAddressInputState(true);
    }
  };

  const handleUnlinkAddressButtonClick = () => {
    setModalState({ isOpen: true, type: "addressUnlink", title: "Confirmation", text: "Are you sure you want to unlink this address?" });
  };

  const unlinkModalYesClick = () => {
    setAddress("");
    setModalState({ isOpen: false, type: "", title: "", text: "" });
    setAddressInfoState(false);
    setAddressInputState(false);
    setRatingButtonState(false);
    notesAPI.updateNote(currentNoteId, {
      propertyAddress: null
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  const handleModalNoClick = () => {
    setModalState({ isOpen: false, type: "", title: "", text: "" });
  };

  const handleAddressInputChange = () => {
    const address = addressRef.current.value.trim();
    // setAddressSearch(address);
    if (address !== "") {
      domainAPI.getAddressSuggestions(address)
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
    let propertyId;
    setAddress(address);

    propertiesAPI.getAllProperties()
      .then(res => {
        console.log(res.data);
        res.data.forEach(item => {
          if (address === item.propertyAddress) {
            propertyId = item.id;
          }
        });

        domainAPI.getPropertyInfo(event.target.id)
        .then(res => {
          const propertyInfo = {
            bedrooms: res.data.bedrooms,
            bathrooms: res.data.bathrooms,
            carSpaces: res.data.carSpaces,
            landSize: res.data.areaSize,
            propertyId: propertyId
          };
  
          setPropertySpecs(propertyInfo);
  
          propertyInfo.propertyAddress = address;
          notesAPI.updateNote(currentNoteId, propertyInfo)
            .then(res => {
              console.log(res);
              setAddressInfoState(true);
              setAddressInputState(false);
              setRatingButtonState(true);
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
      })
      .catch(err => console.log(err));

    // notesAPI.updateNote(currentNoteId, {
    //   propertyAddress: address,
    //   beds: propertySpecs.beds,
    //   baths: propertySpecs.baths,
    //   carSpaces: propertySpecs.carSpaces,
    //   landSize: propertySpecs.land
    // })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
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
    reviewsAPI.createReview(currentNoteId, review)
      .then(res => {
        console.log(res);
        notesAPI.updateNote(currentNoteId, {
          hasReview: true
        })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  };

  const handleRatingInputChange = (event) => {
    const target = event.target.id.split("-")[0];
    console.log(target)
    const review = propertyReview;
    switch(target) {
      case "condition":
        review.propertyConditionRating = parseInt(conditionRef.current.value);
        break;
      case "potential":
        review.potentialRating = parseInt(potentialRef.current.value);
        break;
      case "surroundings":
        review.surroundingsRating = parseInt(surroundingsRef.current.value);
        break;
      case "neighbours":
        review.neighbourComparisonRating = parseInt(neighboursRef.current.value);
        break;
      case "accessibility":
        review.accessibilityRating = parseInt(accessibilityRef.current.value);
        break;
      case "privacy":
        review.privacyRating = parseInt(privacyRef.current.value);
        break;
      case "floorplan":
        review.floorplanRating = parseInt(floorplanRef.current.value);
        break;
      case "outdoorSpace":
        review.outdoorSpaceRating = parseInt(outdoorSpaceRef.current.value);
        break;
      case "indoorOutdoor":
        review.indoorOutdoorFlowRating = parseInt(indoorOutdoorRef.current.value);
        break;
      case "lighting":
        review.naturalLightRating = parseInt(lightingRef.current.value);
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
      .catch(err => console.log(err));
  };

  const handleDeleteNoteButtonClick = (event) => {
    event.stopPropagation();
    console.log(event.target)
    const noteId = event.target.id.split("-")[1];
    setModalState({ isOpen: true, type: "noteDelete", title: "Confirmation", text: "Are you sure you want to delete this note?" });
    setNoteReviewToDelete(noteId);
  };

  const handleConfirmDeleteNoteYesClick = () => {
    notesAPI.deleteNote(noteReviewToDelete)
      .then(res => {
        console.log(res);
        handleModalNoClick();
        notesAPI.getAllNotes(props.id)
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
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  };

  const handleDeleteReviewButtonClick = () => {
    setModalState({ isOpen: true, type: "reviewDelete", title: "Confirmation", text: "Are you sure you want to delete this review?" });
  };

  const handleConfirmDeleteReviewYesClick = () => {
    reviewsAPI.deleteReview(currentNoteId)
      .then(res => {
        console.log(res);
        setPropertyReview({});
        setRatingSectionState(false);
        setRatingButtonState(true);
        setModalState({ isOpen: false, type: "", title: "", text: "" });

        notesAPI.updateNote(currentNoteId, {
          hasReview: false,
        })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  };

  const handleStarButtonClick = (event, isStarred) => {
    const noteId = event.target.id.split("-")[1];
    let starred = !isStarred;
    notesAPI.updateNote(noteId, {
      starred: starred,
    })
      .then(res => {
        console.log(res);
        notesAPI.getAllNotes(props.id)
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
            res.data.reverse(); // to display latest note
            starredNotes.reverse(); // to display starred notes list
            nonStarredNotes.reverse(); // to display all notes list 
            setStarredNotes(starredNotes);
            setNonStarredNotes(nonStarredNotes);
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  };

  const handleEditTextButtonClick = () => {
    notesAPI.getOneNote(currentNoteId)
    .then(res => {
      console.log(res);
      setText(res.data.text);
      console.log(res.data.text)
      setTextEditorMode(!textEditorModeOn);
    })
    .catch(err => console.log(err));
  };

  const handleNoteSearchInputChange = () => {
    const query = searchRef.current.value;
    // setSearchword(query);

    if (query !== "") {
      notesAPI.searchNotes(props.id, query)
      .then(res => {
        console.log(res);
        if (res.data.length > 0) {
          res.data.reverse();
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
                  .catch(err => console.log(err))
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
      .catch(err => console.log(err));
    } else {
      renderAllNotes();
    }
  };

  const handleShareButtonClick = () => {
    userAPI.getOneUser(props.id)
      .then(res => {
        console.log(res);
        setAuthor({ firstName: res.data.firstName, lastName: res.data.lastName });
        setReviewModalState(true);
      })
      .catch(err => console.log(err))
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
      console.log(res);
      handleModalNoClick();
      setPopupState({ open: true, type: "unshareSuccess", severity: "success", message: "Review successfully unshared"});
      setSharedState(!isShared);
    })
    .catch(err => console.log(err));
  };

  const confirmReviewShare = () => {
    notesAPI.updateNote(currentNoteId, {
      shared: !isShared,
      dateShared: moment().format("YYYY-MM-DD")
    })
    .then(res => {
      console.log(res);
      setReviewModalState(false);
      setPopupState({ open: true, type: "shareSuccess", severity: "success", message: "Review successfully shared!"});
      setSharedState(!isShared);
    })
    .catch(err => console.log(err));
  };

  const handlePopupClose = () => {
    setPopupState({ open: false, type: "", severity: "success", message: "" });
  };

  const handleReviewModalClose = () => {
    setReviewModalState(false);
  };

  const reviewModalBody = (
    <div style={modalStyle} className={classes.paper}>
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
      {/* <p>Tweak your note before sharing it as a review for others to see (your original note will not be modified).</p> */}
      {/* <form onSubmit={confirmReviewShare}>
        <div className="review-modal-div">
          <div className="review-modal-title">
            <input type="text" defaultValue={title} />
          </div>
          <div className="review-modal-ratings">
            <table>
              <tbody>
                <tr>
                  <td className="review-modal-rating-category">Property condition</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.propertyConditionRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Potential</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.potentialRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Surroundings</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.surroundingsRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Consistency with neighbours</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.neighbourComparisonRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Accessibility</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.accessibilityRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Privacy</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.privacyRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Floorplan</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.floorplanRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Outdoor space</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.outdoorSpaceRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Indoor-outdoor flow</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.indoorOutdoorFlowRating} />
                  </td>
                </tr>
                <tr>
                  <td className="review-modal-rating-category">Natural lighting</td>
                  <td className="review-modal-rating">
                    <input type="number" defaultValue={propertyReview.naturalLightRating} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="review-modal-text">
            <TextEditor
              currentNoteId={currentNoteId}
              editorModeOn={textEditorModeOn}
              text={text}
            />
          </div>
          <div className="review-modal-actions">
            <Button className={classes.createButton} variant="contained" type="submit">SHARE REVIEW</Button>
            <Button className={classes.cancelButton} variant="contained" onClick={handleReviewModalClose}>CANCEL</Button>
          </div>
        </div>
      </form> */}
    </div>
  );

  return (
    <div>
      <SideMenu />
      <BoxContainer>
        <Grid container className={classes.maxHeight}>
          <Grid id="note-bar" item className={classes.overflow}>
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
                          id={suggestion.id}
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
                        <Button onClick={isShared ? handleUnshareButtonClick : handleShareButtonClick} variant="contained" aria-label="share">
                          {isShared ? "UNSHARE" : "SHARE"}  
                        </Button>
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
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="review-criteria-row">
                      <td>Property condition</td>
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
                      <td>Potential to capitalise</td>
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
                      <td>Surroundings</td>
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
                      <td>Consistency with neighbours</td>
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
                      <td>Accessibility</td>
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
                      <td>Privacy</td>
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
                      <td>Floorplan</td>
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
                      <td>Outdoor space</td>
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
                      <td>Indoor-to-outdoor flow</td>
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
                      <td>Natural light</td>
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
              <div className="note-text-section note-seg">
                <table>
                  <thead>
                    <tr>
                      <th className="note-section-heading">PROPERTY NOTES</th>
                      <th className="note-action-btns">
                        <IconButton
                          onClick={handleEditTextButtonClick}
                        >
                          <EditIcon />
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
      <PopupMessage 
        open={popup.open}
        handleClose={handlePopupClose}
        severity={popup.severity}
        message={popup.message}
      />
    </div>
  )
}