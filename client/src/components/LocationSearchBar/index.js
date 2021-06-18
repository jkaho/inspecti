import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import "./style.css";

export default function LocationSearchBar(props) {
  // States
  const [inputFocus, setInputFocusState] = useState(false);

  // Format locations from API data 
  function formatLocationSuggestion(obj) {
    let location = `${obj.name}, ${obj.state.toUpperCase()}`;
    if (obj.type === "suburb") {
      location += ` ${obj.postcode}`;
    } 
    return location;
  };

  const handleInputBlur = () => {
    props.locationRef.current.children[0].children[1].children[0].value.trim() !== "" ?
    setInputFocusState(true) : setInputFocusState(false);
  };

  return (
    <form onSubmit={props.handleLocationFormSubmit}>
      <div className="location-autocomplete-wrapper">
        <Autocomplete
          id="location-autocomplete"
          freeSolo
          fullWidth={false}
          ref={props.locationRef}
          onFocus={() => setInputFocusState(true)}
          onBlur={handleInputBlur}
          onInputChange={props.handleLocationInputChange}
          onChange={(event, value) => props.handleSuggestionClick(value)}
          options={props.locationSuggestions}
          getOptionLabel={(option) => typeof(option) !== "string" ? formatLocationSuggestion(option) : option}
          // renderInput={(params) => <TextField {...params} label="Search for a suburb, state or postcode" variant="outlined"
          // TextField must have label or doesn't work (even just whitespace)
          renderInput={(params) => <TextField {...params} label={inputFocus ? " " : "Search for a suburb, state or postcode"} variant="outlined"
          />}
        />
      </div>
      <Button
        id="home-listing-search-btn"
        variant="contained"
        color="secondary"
        endIcon={<SearchIcon style={{ fontSize: "30px" }}/>}
        type="submit"
      >
        <span id="search-bar-span">Search</span>
      </Button>
    </form>
  );
};