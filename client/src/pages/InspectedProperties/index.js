import React, { useState, useEffect, useRef } from "react";
import SideMenu from "../../components/SideMenu";
import PropertyTable from "../../components/PropertyTable";
import "./style.css";
import propertiesAPI from "../../utils/propertiesAPI";
import notesAPI from "../../utils/notesAPI";

export default function InspectedProperties() {
  // States
  const [properties, setProperties] = useState([]);

  // Initial render
  useEffect(() => {
    getAllProperties();
  }, []);

  // Refs
  const dateRef    = useRef();
  const addressRef = useRef();
  const typeRef    = useRef();
  const bedRef     = useRef();
  const bathRef    = useRef();
  const carRef     = useRef();
  const landRef    = useRef();
  const guideRef   = useRef();
  const soldRef    = useRef();
  const auctionRef = useRef();

  // Helpers 
  const getAllProperties = () => {
    propertiesAPI.getAllProperties()
      .then(res => {
        console.log(res);
        let propertiesToRender = res.data;
        propertiesToRender.forEach(item => {
          item.hadAuction === true ? 
          item.hadAuction = "true" : 
          item.hadAuction = "false"
          item.hasNote = "false";
          // Note: this searches for title and content too, not just address
          notesAPI.searchNotes(item.propertyAddress)
            .then(res => {
              console.log(res);
              if (res.data.length > 0) {
                item.hasNote = "true";
              }
            })
            .catch(err => console.log(err));
        });
        setProperties(propertiesToRender);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <SideMenu />
      <div className="property-container">
        <PropertyTable
          dateRef={dateRef}
          addressRef={addressRef}
          typeRef={typeRef}
          bedRef={bedRef}
          bathRef={bathRef}
          carRef={carRef}
          landRef={landRef}
          guideRef={guideRef}
          soldRef={soldRef}
          auctionRef={auctionRef}
          properties={properties}
        />
      </div>
    </div>
  );
};