import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../../components/SideMenu";
import PropertyTable from "../../components/PropertyTable";
import PopupMessage from "../../components/PopupMessage";
import "./style.css";
import propertiesAPI from "../../utils/propertiesAPI";
import domainAPI from "../../utils/domainAPI";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

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

export default function InspectedProperties() {
  const classes = useStyles();
  // States
  const [properties, setProperties] = useState([]);
  // const [fillInputsPopupIsOpen, setFillInputsPopupState] = useState(false);
  // const [createSuccessPopupIsOpen, setCreateSuccessPopupState] = useState(false);
  const [popup, setPopup] = useState({ open: false, type: "", severity:"", message:"" });
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  // const [addressQuery, setAddressQuery] = React.useState("");
  const [address, setAddress] = useState();
  const [editModeIsOn, setEditMode] = useState(false);
  const [propertyToEditId, setPropertyToEditId] = useState();
  const [modalStyle] = useState(getModalStyle);
  const [deletePropertyModalIsOpen, setDeletePropertyModalState] = useState(false);

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
    setDeletePropertyModalState(true);
  };

  const confirmDeleteClick = () => {
    propertiesAPI.deleteProperty(propertyToEditId)
      .then(res => {
        console.log(res);
        setDeletePropertyModalState(false);
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
    console.log(editModeIsOn)
  };

  const handleDeleteModalClose = () => {
    setDeletePropertyModalState(false);
  };

  const deleteBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title-delete">Delete inspected property</h2>
      <p>Are you sure you want to delete this property from the table?</p>
      <form onSubmit={confirmDeleteClick}>
        <div className="property-delete-div">
          <Button className={classes.createButton} variant="contained" type="submit">DELETE PROPERTY</Button>
          <Button className={classes.cancelButton} variant="contained" onClick={handleDeleteModalClose}>CANCEL</Button>
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
          propertyToEditId={propertyToEditId}
          handleInputClickAway={handleInputClickAway}
        />
      </div>
      <Modal
        open={deletePropertyModalIsOpen}
        onClose={handleDeleteModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {deleteBody}
      </Modal>
      <PopupMessage 
        open={popup.open}
        handleClose={handlePopupClose}
        severity={popup.severity}
        message={popup.message}
      />
      {/* <PopupMessage 
        open={createSuccessPopupIsOpen}
        onClose={handleCreateSuccessPopupClose}
        severity="success"
        message="Property entry successfully created!"
      />
      <PopupMessage 
        open={editSuccessPopupIsOpen}
        onClose={handleCreateSuccessPopupClose}
        severity="success"
        message="Property entry successfully created!"
      />
      <PopupMessage 
        open={createSuccessPopupIsOpen}
        onClose={handleCreateSuccessPopupClose}
        severity="success"
        message="Property entry successfully created!"
      /> */}
    </div>
  );
};