import React, { useState, useRef } from "react";
// Child components 
import FilterDiv from "../../components/FilterDiv";
import ListingCard from "../../components/ListingCard";
import LocationSearchBar from "../../components/LocationSearchBar";
import NavBar from "../../components/NavBar";
// CSS 
import "./style.css";
// API routes 
import domainAPI from "../../utils/domainAPI";

export default function ListingResults() {
  // States 
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [location, setLocation] = useState("");

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
      <NavBar />
      <div className="results-searchbar">
        <LocationSearchBar
          handleLocationFormSubmit={handleLocationFormSubmit}
          handleLocationInputChange={handleLocationInputChange}
          locationRef={locationRef}
          handleSuggestionClick={handleSuggestionClick}
          locationSuggestions={locationSuggestions}
        />
      </div>
      <div className="results-filterdiv">
        <FilterDiv />
      </div>
      <div className="results-container">
        <ListingCard />
      </div>
    </div>
  );
};