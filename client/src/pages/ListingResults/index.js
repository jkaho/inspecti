import React, { useState, useRef } from "react";
import LocationSearchBar from "../../components/LocationSearchBar";

export default function ListingResults() {
  // States 
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  // Refs
  const locationRef = useRef();

  // Helper functions 
  const handleLocationInputChange = () => {
    const newValue = locationRef.current.children[0].children[1].children[0].value;
    if (newValue === "") {
      setLocationSuggestions([]);
    } else {
      domainAPI.getLocationSuggestions(newValue)
      .then(res => {
        setLocationSuggestions(res.data);
      })
      .catch(err => console.log(err))
    }
  };

  const handleSuggestionClick = (value) => {
    setLocation(value);
  };

  const handleLocationFormSubmit = () => {

  };

  return (
    <div>
      <div className="results-searchbar">
        <LocationSearchBar
          handleLocationFormSubmit={handleLocationFormSubmit}
          handleLocationInputChange={handleLocationInputChange}
          locationRef={locationRef}
          handleSuggestionClick={handleSuggestionClick}
          locationSuggestions={locationSuggestions}
        />
      </div>
      <div className="results-container"></div>
    </div>
  );
};