import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../../components/SideMenu";
import PropertyTable from "../../components/PropertyTable";
import PopupMessage from "../../components/PopupMessage";
// import TextEditor from "../../components/TextEditor";
import "./style.css";
import propertiesAPI from "../../utils/propertiesAPI";
import domainAPI from "../../utils/domainAPI";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import notesAPI from "../../utils/notesAPI";
import reviewsAPI from "../../utils/reviewsAPI";

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

export default function InspectedProperties(props) {
  const classes = useStyles();
  // States
  const [properties, setProperties] = useState([]);
  // const [fillInputsPopupIsOpen, setFillInputsPopupState] = useState(false);
  // const [createSuccessPopupIsOpen, setCreateSuccessPopupState] = useState(false);
  const [popup, setPopup] = useState({ open: false, type: "", severity: "success", message: "" });
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  // const [addressQuery, setAddressQuery] = React.useState("");
  const [address, setAddress] = useState();
  const [propertyNoteInfo, setPropertyNoteInfo] = useState({});
  const [editModeIsOn, setEditMode] = useState(false);
  const [propertyToEditId, setPropertyToEditId] = useState();
  const [modalStyle] = useState(getModalStyle);
  const [noteModalIsOpen, setNoteModalState] = useState(false);
  const [modal, setModalState] = useState({
    open: false,
    type: "deleteConfirm",
  });

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

  // Helpers 
  const getAllProperties = () => {
    // let propertyQuery = propertiesToRender[i].propertyAddress.replace("/", "%2F");
    propertiesAPI.getPropertyNotes()
      .then(res => {
        console.log(res);
        setProperties(res.data);
      })
      .catch(err => console.log(err))
  };

  const handleAddressInputChange = () => {
    const newValue = addressRef.current.children[0].children[1].children[0].value;
    if (newValue === "") {
      setAddressSuggestions([]);
    } else {
      domainAPI.getAddressSuggestions(newValue)
      .then(res => {
        setAddressSuggestions(res.data.splice(0, 10));
      })
      .catch(err => console.log(err))
    }
  };

  const handleSuggestionClick = (value) => {
    setAddress(value);
    console.log(value);
  };

  const handleNewEntryButtonClick = () => {
    if (address) {
      domainAPI.getPropertyInfo(address.id)
      .then(res => {
        console.log(res);
        const propertyEntry = {
          dateInspected: dateRef.current.value,
          propertyAddress: address.address,
          bedrooms: res.data.bedrooms,
          bathrooms: res.data.bathrooms,
          carSpaces: res.data.carSpaces,
          landSize: res.data.areaSize,
          propertyType: res.data.propertyCategory,
          priceGuide: guideRef.current.value,
          soldPrice: soldRef.current.value,
          hadAuction: auctionRef.current.value === "true" ? true : false,
        };
    
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
          return;
        }

        propertiesAPI.createProperty(propertyEntry)
          .then(res => {
            console.log(res);
            getAllProperties();
            setPopup(
              { 
                open: true, 
                type: "createSuccess", 
                severity: "success",
                message: "Property successfully added to table!"
              }
            );
          })
          .catch(err => console.log(err));

      })
      .catch(err => console.log(err));
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
    console.log(event.target)
    setEditMode(true);
    console.log(editModeIsOn)
  };

  const handleSaveButtonClick = (event) => {
    setEditMode(false);
    const propertyId = event.target.id.split("-")[1];
    const updatedPropertyData = {
      dateInspected: editDateRef.current.value,
      priceGuide: parseInt(editGuideRef.current.value.trim()),
      soldPrice: parseInt(editSoldRef.current.value.trim()),
      hadAuction: editAuctionRef.current.value === "true" ? true : false
    };

    propertiesAPI.updateProperty(propertyId, updatedPropertyData)
      .then(res => {
        console.log(res);
        getAllProperties();
        setPopup(
          { 
            open: true, 
            type: "editSuccess", 
            severity: "success",
            message: "Property successfully updated!"
          }
        );
      })
      .catch(err => console.log(err));
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
        console.log(res);
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
      })
      .catch(err => console.log(err));
  };

  const handleInputClickAway = () => {
    setEditMode(false);
  };

  const handleModalClose = () => {
    setNoteModalState(false);
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
    setNoteModalState(true);
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
    setNoteModalState(false);
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
    console.log(newNote)

    notesAPI.createNote(newNote)
      .then(res => {
        console.log(res);
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

        console.log(newReview)

        reviewsAPI.createReview(res.data.id, newReview)
          .then(res => {
            console.log(res);
            getAllProperties();
          })
          .catch(err => console.log(err));
        
      })
      .catch(err => console.log(err))
  };

  const noteBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title-note">Create a property note</h2>
      <p>{propertyNoteInfo.address}</p>
      <form onSubmit={handleConfirmNewNoteButtonClick}>
        <div className="property-note-content">
          <input ref={titleRef} type="text" placeholder="Title" />
        </div>
        <div className="property-note-content">
          <table>
            <tbody>
              <tr>
                <td className="property-note-rating-category">Property condition</td>
                <td className="property-note-rating">
                  <input ref={conditionRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Potential</td>
                <td className="property-note-rating">
                  <input ref={potentialRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Surroundings</td>
                <td className="property-note-rating">
                  <input ref={surroundingsRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Consistency with neighbours</td>
                <td className="property-note-rating">
                  <input ref={neighboursRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Accessibility</td>
                <td className="property-note-rating">
                  <input ref={accessibilityRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Privacy</td>
                <td className="property-note-rating">
                  <input ref={privacyRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Floorplan</td>
                <td className="property-note-rating">
                  <input ref={floorplanRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Outdoor space</td>
                <td className="property-note-rating">
                  <input ref={outdoorSpaceRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Indoor-to-outdoor flow</td>
                <td className="property-note-rating">
                  <input ref={indoorOutdoorRef} type="number" defaultValue="" /><span>&nbsp;/5</span>
                </td>
              </tr>
              <tr>
                <td className="property-note-rating-category">Natural lighting</td>
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
          properties={properties}
          handleAddressInputChange={handleAddressInputChange}
          handleSuggestionClick={handleSuggestionClick}
          addressSuggestions={addressSuggestions}
          handleNewEntryButtonClick={handleNewEntryButtonClick}
          editMode={editModeIsOn}
          handleEditButtonClick={handleEditButtonClick}
          handleSaveButtonClick={handleSaveButtonClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
          handleCreateNoteClick={handleCreateNoteClick}
          propertyToEditId={propertyToEditId}
          handleInputClickAway={handleInputClickAway}
        />
      </div>
      <Modal
        open={modal.open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modal.type === "confirmDelete" ? deleteBody : noteBody}
      </Modal>
      <PopupMessage 
        open={popup.open}
        handleClose={handlePopupClose}
        severity={popup.severity}
        message={popup.message}
      />
    </div>
  );
};