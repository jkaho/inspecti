// React
import React, { useState, useEffect, useRef } from "react";
// Children components
import PropertyTable from "../../components/PropertyTable";
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
import SideMenu from "../../components/SideMenu";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Modal from "@material-ui/core/Modal";
import Tooltip from "@material-ui/core/Tooltip";
// react-draft-wysiwyg
import { convertToHTML } from 'draft-convert';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// CSS
import "./style.css";
// API routes
import domainAPI from "../../utils/domainAPI";
import notesAPI from "../../utils/notesAPI";
import propertiesAPI from "../../utils/propertiesAPI";
import reviewsAPI from "../../utils/reviewsAPI";

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
    overflow: "auto",
  },
  tallModal: {
    height: 500,
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
}));

// Options for sort select
const sortOptions = [
  {
    label: "Select category",
    disabled: true,
    value: null
  },
  {
    label: "Price guide (from lowest)",
    disabled: false,
    value: "priceGuideAsc"
  },
  {
    label: "Price guide (from highest)",
    disabled: false,
    value: "priceGuideDesc"
  },
  {
    label: "Sold price (from lowest)",
    disabled: false,
    value: "soldPriceAsc"
  },
  {
    label: "Sold price (from highest)",
    disabled: false,
    value: "soldPriceDesc"
  },
  {
    label: "Land size (from lowest)",
    disabled: false,
    value: "landSizeAsc"
  },
  {
    label: "Land size (from highest)",
    disabled: false,
    value: "landSizeDesc"
  }
];

// Options for filter select
const filterOptions = [
  {
    label: "Select category",
    disabled: true,
    value: null
  },
  {
    label: "House",
    disabled: false,
    value: "house"
  },
  {
    label: "Apartment",
    disabled: false,
    value: "apartment"
  },
  {
    label: "Townhouse",
    disabled: false,
    value: "townhouse"
  },
  {
    label: "Attended auction",
    disabled: false,
    value: "attendedAuction"
  },
  {
    label: "Did not attend auction",
    disabled: false,
    value: "didNotAttendAuction"
  },
  {
    label: "No auction",
    disabled: false,
    value: "noAuction"
  },
  {
    label: "Has notes",
    disabled: false,
    value: "hasNotes"
  },
  {
    label: "No notes",
    disabled: false,
    value: "noNotes"
  }
];

// Rating criteria tooltips
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

export default function InspectedProperties(props) {
  const classes = useStyles();
  // States
  const [properties, setProperties] = useState([]);
  const [modifiedProperties, setModifiedProperties] = useState([]);
  const [popup, setPopup] = useState({ open: false, type: "", severity: "success", message: "" });
  const popupTimeout = 6000;
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  // const [addressQuery, setAddressQuery] = React.useState("");
  const [address, setAddress] = useState();
  const [propertyNoteInfo, setPropertyNoteInfo] = useState({});
  const [editModeIsOn, setEditMode] = useState(false);
  const [propertyToEditId, setPropertyToEditId] = useState();
  const [modalStyle] = useState(getModalStyle);
  // const [noteModalIsOpen, setNoteModalState] = useState(false);
  const [modal, setModalState] = useState({
    open: false,
    type: "deleteConfirm",
  });
  const [titleCheckboxState, setTitleCheckboxState] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("Select category");
  const [filterCriteria, setFilterCriteria] = useState("Select category");

  // Initial render
  useEffect(() => {
    getAllProperties();
  }, []);

  // Refs
  const dateRef    = useRef();
  const addressRef = useRef();
  // const typeRef    = useRef();
  // const bedRef     = useRef();
  // const bathRef    = useRef();
  // const carRef     = useRef();
  // const landRef    = useRef();
  const guideRef   = useRef();
  const soldRef    = useRef();
  const auctionRef = useRef();

  const editDateRef    = useRef();
  const editGuideRef   = useRef();
  const editSoldRef    = useRef();
  const editAuctionRef = useRef ();

  const titleRef = useRef();
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

  const searchRef = useRef();

  // Helper functions
  const getAllProperties = () => {
    propertiesAPI.getPropertyNotes()
      .then(res => {
        setModifiedProperties(res.data);
        setProperties(res.data);
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving your data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };

  const handleAddressInputChange = () => {
    const newValue = addressRef.current.children[0].children[1].children[0].value;
    if (newValue === "") {
      setAddressSuggestions([]);
    } else {
      domainAPI.getAddressSuggestions(encodeURIComponent(newValue))
      .then(res => {
        setAddressSuggestions(res.data.splice(0, 10));
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      })
    }
  };

  const handleSuggestionClick = (value) => {
    setAddress(value);
  };

  const handleNewEntryButtonClick = () => {
    if (address) {
      domainAPI.getPropertyInfo(address.id)
      .then(res => {
        const propertyEntry = {
          dateInspected: dateRef.current.value,
          propertyAddress: address.address,
          bedrooms: res.data.bedrooms,
          bathrooms: res.data.bathrooms,
          carSpaces: res.data.carSpaces,
          landSize: res.data.areaSize,
          propertyType: res.data.propertyCategory,
          priceGuide: isNaN(parseInt(guideRef.current.value)) ? null : guideRef.current.value,
          soldPrice: isNaN(parseInt(soldRef.current.value)) ? null : soldRef.current.value,
          attendedAuction: auctionRef.current.value === "true" ? true : false,
        };
        console.log(propertyEntry)
    
        if (
          !propertyEntry.dateInspected || 
          !propertyEntry.propertyAddress 
        ) {
          setPopup(
            { 
              open: true, 
              type: "inputsRequired", 
              severity: "warning",
              message: "Required fields: DATE, ADDRESS, AUCTION"
            }
          );
          setTimeout(function() {
            setPopup({ open: false, type: "", severity: "warning", message: "" });
          }, popupTimeout);
          return;
        }

        properties.forEach(property => {
          if (property.propertyAddress === propertyEntry.propertyAddress) {
            setPopup(
              { 
                open: true, 
                type: "addressExists", 
                severity: "warning",
                message: "A record already exists for the property you're trying to add!"
              }
            );
            setTimeout(function() {
              setPopup({ open: false, type: "", severity: "warning", message: "" });
            }, popupTimeout);
            return;
          }
        });
        
        propertiesAPI.createProperty(propertyEntry)
          .then(res => {
            getAllProperties();
            setPopup(
              { 
                open: true, 
                type: "createSuccess", 
                severity: "success",
                message: "Property successfully added to table!"
              }
            );
            setTimeout(function() {
              setPopup({ open: false, type: "", severity: "success", message: "" });
            }, popupTimeout);
          })
          .catch(err => {
            console.log(err);
            setPopup({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while submitting your data. Please try again later." 
            });
            setTimeout(function() {
              setPopup({ open: false, type: "", severity: "error", message: "" });
            }, popupTimeout);
          });
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
    } else {
      return;
    }
  };

  const handlePopupClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPopup({ open: false, type: "", severity: "", message: ""});
  };

  const handleEditButtonClick = (event) => {
    const propertyId = event.target.id.split("-")[1];
    setPropertyToEditId(parseInt(propertyId));
    setEditMode(true);
  };

  const handleSaveButtonClick = (event) => {
    setEditMode(false);
    const propertyId = event.target.id.split("-")[1];
    const updatedPropertyData = {
      dateInspected: editDateRef.current.value,
      priceGuide: parseInt(editGuideRef.current.value.trim()),
      soldPrice: parseInt(editSoldRef.current.value.trim()),
      attendedAuction: editAuctionRef.current.value === "true" ? true : false
    };

    propertiesAPI.updateProperty(propertyId, updatedPropertyData)
      .then(res => {
        getAllProperties();
        setPopup(
          { 
            open: true, 
            type: "editSuccess", 
            severity: "success",
            message: "Property successfully updated!"
          }
        );
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "success", message: "" });
        }, popupTimeout);
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while updating your data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };

  const handleDeleteButtonClick = (event) => {
    const propertyId = event.target.id.split("-")[1];
    setPropertyToEditId(propertyId);
    setModalState({ open: true, type: "confirmDelete"});
  };

  const confirmDeleteClick = (event) => {
    event.preventDefault();
    propertiesAPI.deleteProperty(propertyToEditId)
      .then(res => {
        handleModalClose();
        getAllProperties();
        setPopup(
          { 
            open: true, 
            type: "deleteSuccess", 
            severity: "success",
            message: "Property successfully deleted from table"
          }
        );
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "success", message: "" });
        }, popupTimeout);
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error occurred. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };

  const handleInputClickAway = () => {
    setEditMode(false);
  };

  const handleModalClose = () => {
    // setNoteModalState(false);
    setModalState({ open: false, type: "" });
  };

  const deleteBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title-delete">Delete inspected property</h2>
      <p>Are you sure you want to delete this property from the table?</p>
      <form onSubmit={confirmDeleteClick}>
        <div className="property-delete-div">
          <Button className={classes.createButton} variant="contained" type="submit">DELETE PROPERTY</Button>
          <Button className={classes.cancelButton} variant="contained" onClick={handleModalClose}>CANCEL</Button>
        </div>
      </form>
    </div>
  );

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const  [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  };

  function NoteTextEditor() {
    // useEffect(() => {
    //   setEditorState(() => EditorState.createEmpty());
    // }, [noteModalIsOpen]);

    return (
      <div>
        <Editor 
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          // onChange={handleTextInputChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            options: ['inline', 'list', 'emoji', 'image', 'link'],
            inline: {
              inDropdown: true,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
              bold: { className: undefined },
              italic: { className: undefined },
              underline: { className: undefined },
              strikethrough: { className: undefined },
              monospace: { className: undefined },
              superscript: { className: undefined },
              subscript: { className: undefined },
            },
            list: {
              inDropdown: true,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['unordered', 'ordered'],
            },
            link: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              dropdownClassName: undefined,
              showOpenOptionOnHover: true,
              defaultTargetOption: '_self',
              options: ['link', 'unlink'],
              link: { className: undefined },
              unlink: { className: undefined },
              linkCallback: undefined
            },
            emoji: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              emojis: [
                '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                '✅', '❎', '💯',
              ],
            },
            image: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: undefined,
              previewImage: false,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            },
          }}
        />
      </div>
    );
  };

  const handleCreateNoteClick = (event) => {
    // setNoteModalState(true);
    setEditorState(() => EditorState.createEmpty());
    setModalState({ open: true, type: "createNote" });
    setPropertyNoteInfo({
      propertyId: event.target.id.split("-")[1],
      address: event.target.dataset.address,
      bedrooms: event.target.dataset.beds,
      bathrooms: event.target.dataset.baths,
      carSpaces: event.target.dataset.cars,
      landSize: event.target.dataset.land
    });
  };

  const handleConfirmNewNoteButtonClick = (event) => {
    event.preventDefault();
    // setNoteModalState(false);
    const newNote = {
      propertyAddress: propertyNoteInfo.address,
      title: titleRef.current.value,
      userId: props.id,
      // propertyId: propertyNoteInfo.address,
      hasReview: true,
      shared: false,
      propertyId: parseInt(propertyNoteInfo.propertyId),
      bedrooms: parseInt(propertyNoteInfo.bedrooms),
      bathrooms: parseInt(propertyNoteInfo.bathrooms),
      carSpaces: parseInt(propertyNoteInfo.carSpaces),
      landSize: parseInt(propertyNoteInfo.landSize),
      text: createMarkup(convertedContent).__html
    };

    notesAPI.createNote(newNote)
      .then(res => {
        const newReview = {
          propertyConditionRating: parseInt(conditionRef.current.value),
          potentialRating: parseInt(potentialRef.current.value),
          surroundingsRating: parseInt(surroundingsRef.current.value),
          neighbourComparisonRating: parseInt(neighboursRef.current.value),
          accessibilityRating: parseInt(accessibilityRef.current.value),
          privacyRating: parseInt(privacyRef.current.value),
          floorplanRating: parseInt(floorplanRef.current.value),
          outdoorSpaceRating: parseInt(outdoorSpaceRef.current.value),
          indoorOutdoorFlowRating: parseInt(indoorOutdoorRef.current.value),
          naturalLightRating: parseInt(lightingRef.current.value),
          noteId: res.data.id
        };

        reviewsAPI.createReview(res.data.id, newReview)
          .then(res => {
            handleModalClose();
            setPopup({ open: true, type: "createNote", severity: "success", message: "Note successfully created!" });
            setTimeout(function() {
              setPopup({ open: false, type: "", severity: "success", message: "" });
            }, popupTimeout);
            getAllProperties();
          })
          .catch(err => {
            console.log(err);
            setPopup({ 
              open: true, type: "error", severity: "error", 
              message: "An error was encountered while submitting your data. Please try again later." 
            });
            setTimeout(function() {
              setPopup({ open: false, type: "", severity: "error", message: "" });
            }, popupTimeout);
          });
        
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving your data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };

  const handleTitleCheckboxChange = (event) => {
    setTitleCheckboxState(event.target.checked);
    if (event.target.checked) {
      titleRef.current.value = propertyNoteInfo.address;
    } else {
      titleRef.current.value = "";
    }
  };

  const createNoteBody = (
    <div id="create-note-body" style={modalStyle} className={`${classes.paper} ${classes.tallModal}`}>
      <h2 id="simple-modal-note-create">
        Create a property note for<br/>
        <span id="view-note-address">{propertyNoteInfo.address}</span>
      </h2>
      <form onSubmit={handleConfirmNewNoteButtonClick}>
        <div className="property-note-content">
          <input id="property-note-create-title" ref={titleRef} type="text" placeholder="Title" />
        </div>
        <div className="auto-title">
          <FormControlLabel
            control={<Checkbox checked={titleCheckboxState} onChange={handleTitleCheckboxChange} name="checked" />}
            label="Use property address as title"
          />
        </div>
        <div className="property-note-content">
          <table>
            <tbody>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.condition}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Property condition&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={conditionRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.potential}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Potential&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={potentialRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.surroundings}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Surroundings&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={surroundingsRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.neighbours}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Consistency with neighbours&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={neighboursRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.accessibility}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Accessibility&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={accessibilityRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.privacy}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Privacy&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={privacyRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.floorplan}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Floor plan&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={floorplanRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.outdoorSpace}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Outdoor space&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={outdoorSpaceRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.indoorOutdoorFlow}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Indoor-to-outdoor flow&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={indoorOutdoorRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">
                  <div className="rating-tooltip-div">
                    <Tooltip title={ratingTooltips.naturalLight}>
                      <i className="fas fa-info-circle"></i>
                    </Tooltip>&nbsp;
                    <div className="rating-heading-div" style={{ display: "inline-block" }}>Natural light&nbsp;</div>
                  </div>
                </td>
                <td className="property-note-rating">
                  <input ref={lightingRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="property-note-content">
          <NoteTextEditor />
        </div>
        <div className="property-note-actions">
          <Button className={classes.createButton} variant="contained" type="submit">CREATE NOTE</Button>
          <Button className={classes.cancelButton} variant="contained" onClick={handleModalClose}>CANCEL</Button>
        </div>
      </form>
    </div>
  );

  const handleViewNoteButtonClick = (event) => {
    const noteId = event.target.id.split("-")[1];
    setModalState({ open: true, type: "viewNote" });
    reviewsAPI.getReview(noteId)
      .then(res => {
        if (res.data) {
          setPropertyNoteInfo({
            noteId: noteId,
            address: event.target.dataset.address,
            bedrooms: event.target.dataset.beds,
            bathrooms: event.target.dataset.baths,
            carSpaces: event.target.dataset.cars,
            landSize: event.target.dataset.land,
            title: event.target.dataset.title,
            text: event.target.dataset.text,
            propertyConditionRating: res.data.propertyConditionRating,
            potentialRating: res.data.potentialRating,
            surroundingsRating: res.data.surroundingsRating,
            neighbourComparisonRating: res.data.neighbourComparisonRating,
            accessibilityRating: res.data.accessibilityRating,
            privacyRating: res.data.privacyRating,
            floorplanRating: res.data.floorplanRating,
            outdoorSpaceRating: res.data.outdoorSpaceRating,
            indoorOutdoorFlowRating: res.data.indoorOutdoorFlowRating,
            naturalLightRating: res.data.naturalLightRating
          });
        } else {
          setPropertyNoteInfo({
            noteId: noteId,
            address: event.target.dataset.address,
            bedrooms: event.target.dataset.beds,
            bathrooms: event.target.dataset.baths,
            carSpaces: event.target.dataset.cars,
            landSize: event.target.dataset.land,
            title: event.target.dataset.title,
            text: event.target.dataset.text,
          });
        }
      })
  };

  const viewNoteBody = (
    <div id="view-note" style={modalStyle} className={`${classes.paper} ${classes.tallModal}`}>
      <div id="view-note-body">
        <h2 id="simple-modal-note-view">{propertyNoteInfo.title}</h2>
        <div className="note-view-address">{propertyNoteInfo.address}</div>
        <div className="note-view-specs">
          <i className="fas fa-bed"></i>&nbsp;
          <span className="num-beds">{propertyNoteInfo.bedrooms ? propertyNoteInfo.bedrooms : "-"}</span>&nbsp;&nbsp;
          <i className="fas fa-shower"></i>&nbsp;
          <span className="num-baths">{propertyNoteInfo.bathrooms ? propertyNoteInfo.bathrooms : "-"}</span>&nbsp;&nbsp;
          <i className="fas fa-car"></i>&nbsp;
          <span className="num-cars">{propertyNoteInfo.carSpaces ? propertyNoteInfo.carSpaces : "-"}</span>&nbsp;&nbsp;
          <i className="fas fa-ruler-combined"></i>&nbsp;
          <span className="num-land">{propertyNoteInfo.landSize ? propertyNoteInfo.landSize : "- "}m²</span>&nbsp;&nbsp;
        </div>
        <div className="property-note-content">
          {
            propertyNoteInfo.propertyConditionRating ? 
            <table>
              <tbody>
                <tr>
                  <td className="property-note-rating-category">Property condition</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.propertyConditionRating ? propertyNoteInfo.propertyConditionRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Potential</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.potentialRating ? propertyNoteInfo.potentialRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Surroundings</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.surroundingsRating ? propertyNoteInfo.surroundingsRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Consistency with neighbours</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.neighbourComparisonRating ? propertyNoteInfo.neighbourComparisonRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Accessibility</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.accessibilityRating ? propertyNoteInfo.accessibilityRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Privacy</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.privacyRating ? propertyNoteInfo.privacyRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Floorplan</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.floorplanRating ? propertyNoteInfo.floorplanRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Outdoor space</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.outdoorSpaceRating ? propertyNoteInfo.outdoorSpaceRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Indoor-to-outdoor flow</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.indoorOutdoorFlowRating ? propertyNoteInfo.indoorOutdoorFlowRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
                <tr>
                  <td className="property-note-rating-category">Natural lighting</td>
                  <td className="property-note-rating">
                    {propertyNoteInfo.naturalLightRating ? propertyNoteInfo.naturalLightRating : "-"}
                    <span>/5</span>
                  </td>
                </tr>
              </tbody>
            </table> : 
            ""
          }
        </div>
        {propertyNoteInfo.text !== "" ? 
          <div className="property-note-content property-note-text"
            dangerouslySetInnerHTML={{ __html: propertyNoteInfo.text }}
          ></div> : 
          <div className="no-note-text">
            Go to your notes page to add text to this note.
          </div>
        }
      </div>
      <div className="property-note--view-actions">
        <Button id="close-view-note" className={classes.cancelButton} variant="contained" onClick={handleModalClose}>CLOSE</Button>
      </div>
    </div>
  );

  const handleSearchChange = () => {
    const query = searchRef.current.value;
    let searchResults = [];
    if (query !== "") {
      modifiedProperties.forEach(item => {
        if (item.propertyAddress.toLowerCase().includes(query)) {
          searchResults.push(item);
        }
      });
  
      setModifiedProperties(searchResults);
    } else {
      setModifiedProperties(properties);
    }
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
    let sortedResults = [];
    switch(event.target.value) {
      case "priceGuideAsc":
        sortedResults = [...modifiedProperties].sort(function(a, b) {
          return a.priceGuide - b.priceGuide;
        });
        break;
      case "priceGuideDesc":
        sortedResults = [...modifiedProperties].sort(function(a, b) {
          return b.priceGuide - a.priceGuide;
        });
        break;
      case "soldPriceAsc":
        sortedResults = [...modifiedProperties].sort(function(a, b) {
          return a.soldPrice - b.soldPrice;
        });
        break;
      case "soldPriceDesc":
        sortedResults = [...modifiedProperties].sort(function(a, b) {
          return b.soldPrice - a.soldPrice;
        });
        break;
      case "landSizeAsc":
        sortedResults = [...modifiedProperties].sort(function(a, b) {
          return a.landSize - b.landSize;
        });
        break;
      case "landSizeDesc":
        sortedResults = [...modifiedProperties].sort(function(a, b) {
          return b.landSize - a.landSize;
        });
        break;
      default: 
        break;
    }
    setModifiedProperties(sortedResults);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
    let filteredResults = [];
    let propertiesCopy = [...modifiedProperties];
    switch(event.target.value) {
      case "house":
        propertiesCopy.forEach(item => {
          if (item.propertyType === "House") {
            filteredResults.push(item);
          }
        });
        break;
      case "apartment":
        propertiesCopy.forEach(item => {
          if (item.propertyType === "Apartment") {
            filteredResults.push(item);
          }
        });
        break;
      case "townhouse":
        propertiesCopy.forEach(item => {
          if (item.propertyType === "Townhouse") {
            filteredResults.push(item);
          }
        });
        break;
      case "attendedAuction":
        propertiesCopy.forEach(item => {
          if (item.attendedAuction) {
            filteredResults.push(item);
          }
        });
        break;
      case "didNotAttendAuction":
        propertiesCopy.forEach(item => {
          if (item.attendedAuction === false) {
            filteredResults.push(item);
          }
        });
        break;
      case "noAuction":
        propertiesCopy.forEach(item => {
          if (item.attendedAuction === null) {
            filteredResults.push(item);
          }
        });
        break;
      case "hasNotes":
        propertiesCopy.forEach(item => {
          if (item.notes.length > 0) {
            filteredResults.push(item);
          }
        });
        break;
      case "noNotes":
        propertiesCopy.forEach(item => {
          if (item.notes.length < 1) {
            filteredResults.push(item);
          }
        });
        break;
      default:
        break;
    }
    
    setModifiedProperties(filteredResults);
  };

  const handleClearButtonClick = () => {
    setModifiedProperties(properties);
  };

  return (
    <div>
      <SideMenu />
      <div className="property-container">
        <PropertyTable
          dateRef={dateRef}        
          addressRef={addressRef}
          // typeRef={typeRef}
          // bedRef={bedRef}
          // bathRef={bathRef}
          // carRef={carRef}
          // landRef={landRef}
          guideRef={guideRef}
          soldRef={soldRef}
          auctionRef={auctionRef}
          editDateRef={editDateRef}
          editGuideRef={editGuideRef}
          editSoldRef={editSoldRef}
          editAuctionRef={editAuctionRef}
          searchRef={searchRef}
          modifiedProperties={modifiedProperties}
          handleAddressInputChange={handleAddressInputChange}
          handleSuggestionClick={handleSuggestionClick}
          addressSuggestions={addressSuggestions}
          handleNewEntryButtonClick={handleNewEntryButtonClick}
          editMode={editModeIsOn}
          handleEditButtonClick={handleEditButtonClick}
          handleSaveButtonClick={handleSaveButtonClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
          handleCreateNoteClick={handleCreateNoteClick}
          handleViewNoteButtonClick={handleViewNoteButtonClick}
          propertyToEditId={propertyToEditId}
          handleInputClickAway={handleInputClickAway}
          sortCriteria={sortCriteria}
          filterCriteria={filterCriteria}
          sortOptions={sortOptions}
          filterOptions={filterOptions}
          handleSortChange={handleSortChange}
          handleFilterChange={handleFilterChange}
          handleClearButtonClick={handleClearButtonClick}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <Modal
        open={modal.open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modal.type === "confirmDelete" ? deleteBody : 
        modal.type === "viewNote" ? viewNoteBody : 
        createNoteBody}
      </Modal>
      <Popup 
        open={popup.open}
        handleClose={handlePopupClose}
        severity={popup.severity}
        message={popup.message}
      />
    </div>
  );
};