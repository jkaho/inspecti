import React, { useState, useEffect, useRef } from "react";
// react-router-dom
import { useLocation } from "react-router-dom";
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
  let { state } = useLocation();
  // States 
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [location, setLocation] = useState("");
  const [minMax, setMinMax] = useState("min");
  const [beds, setBeds] = useState({
    state: "",
  });
  const [baths, setBaths] = useState({
    state: "",
  });
  const [cars, setCars] = useState({
    state: "",
  });
  const [size, setSize] = useState({
    state: "",
  });
  const [price, setPrice] = useState({
    state: "",
  });
  const [type, setType] = useState({
    state: "",
  });

  // Refs
  const locationRef = useRef();

  // Initial render
  useEffect(() => {
    console.log(state);
  }, [state]);

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

  const handleLocationFormSubmit = (event) => {
    event.preventDefault();
    // setSuggestionOpen(false);
    setLocationSuggestions([]);
    const search = {
      location: location,
      minMax: minMax,
      beds: beds.state === "" ? null : beds.state,
      baths: baths.state === "" ? null : baths.state,
      cars: cars.state === "" ? null : cars.state,
      size: size.state === "" ? null : size.state,
      type: type.state === "" ? null : type.state,
      price: price.state === "" ? null : price.state,
    }

    domainAPI.getPropertyListings(search)
      .then(res => {
        console.log(res.data);
        // setSearchResults(res.data);
        // history.push({
        //   pathname: "/results",
        //   state: res.data
        // })
      })
      .catch(err => console.log(err))
  };

  const handleRadioChange = (event) => {
    setMinMax(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.id;
    switch (category) {
      case "beds":
        setBeds({ state: parseInt(event.target.value) });
        break;
      case "baths":
        setBaths({ state: parseInt(event.target.value) });
        break;
      case "cars":
        setCars({ state: parseInt(event.target.value) });
        break;
      case "size":
        setSize({ state: parseInt(event.target.value) });
        break;
      case "price":
        setPrice({ state: parseInt(event.target.value) });
        break;
      case "type":
        setType({ state: event.target.value });
        break;
      default: 
        break;
    }
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
        <FilterDiv
          handleRadioChange={handleRadioChange}
          minMax={minMax}
          handleCategoryChange={handleCategoryChange}
          beds={beds}
          baths={baths}
          cars={cars}
          size={size}
          type={type}
          price={price}
        />
      </div>
      <div className="results-container">
        <ListingCard />
      </div>
    </div>
  );
};