import React, { useState, useEffect, useRef } from "react";
import SideMenu from "../../components/SideMenu";
import PropertyTable from "../../components/PropertyTable";
import PopupMessage from "../../components/PopupMessage";
import "./style.css";
import propertiesAPI from "../../utils/propertiesAPI";
import domainAPI from "../../utils/domainAPI";

export default function InspectedProperties() {
  // States
  const [properties, setProperties] = useState([]);
  const [fillInputsPopupIsOpen, setFillInputsPopupState] = useState(false);
  const [createSuccessPopupIsOpen, setCreateSuccessPopupState] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = React.useState([]);
  // const [addressQuery, setAddressQuery] = React.useState("");
  const [address, setAddress] = React.useState();

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
          setFillInputsPopupState(true);
          return;
        }

        propertiesAPI.createProperty(propertyEntry)
          .then(res => {
            console.log(res);
            setCreateSuccessPopupState(true);
            getAllProperties();
          })
          .catch(err => console.log(err));

      })
      .catch(err => console.log(err))
  };

  const handleFillInputsPopupClose = () => {
    setFillInputsPopupState(false);
  };

  const handleCreateSuccessPopupClose = () => {
    setCreateSuccessPopupState(false);
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
          properties={properties}
          handleAddressInputChange={handleAddressInputChange}
          handleSuggestionClick={handleSuggestionClick}
          addressSuggestions={addressSuggestions}
          handleNewEntryButtonClick={handleNewEntryButtonClick}
        />
      </div>
      <PopupMessage 
        open={fillInputsPopupIsOpen}
        onClose={handleFillInputsPopupClose}
        severity="warning"
        message="Required fields: DATE, ADDRESS, and AUCTION"
      />
      <PopupMessage 
        open={createSuccessPopupIsOpen}
        onClose={handleCreateSuccessPopupClose}
        severity="success"
        message="Property entry successfully created!"
      />
    </div>
  );
};