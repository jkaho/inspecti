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
        for (let i = 0; i < propertiesToRender.length; i++) {
          propertiesToRender[i].hadAuction === true ? 
          propertiesToRender[i].hadAuction = "true" : 
          propertiesToRender[i].hadAuction = "false"
          propertiesToRender[i].hasNote = "false";
          let propertyQuery = propertiesToRender[i].propertyAddress.replace("/", "%2F");
          notesAPI.searchNoteAddress(propertyQuery)
            .then(res => {
              console.log(res);
              if (res.data.length > 0) {
                propertiesToRender[i].hasNote = "true";
                console.log(i, res.data[0])
              }
              if (i === res.data.length - 1) {
                setProperties(propertiesToRender);
                console.log(propertiesToRender)
              }
            })
            .catch(err => console.log(err));
        };
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