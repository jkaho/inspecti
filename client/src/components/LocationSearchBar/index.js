import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import "./style.css";
const url = window.location.hostname.includes("localhost") ?
  "http://localhost:3001" : "https://inspecti.herokuapp.com"

export default function LocationSearchBar(props) {
  // States
  const [inputFocus, setInputFocusState] = useState(false);

  // useEffect(() => {
  //   console.log(props.locationSuggestions);
  // }, [props.locationSuggestions]);
  
  // Format locations from API data 
  function formatLocationSuggestion(obj) {
    let location = `${obj.name}, ${obj.state.toUpperCase()}`;
    if (obj.type === "suburb") {
      location += ` ${obj.postcode}`;
    } 

    return location;
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
          onBlur={() => setInputFocusState(false)}
          onInputChange={props.handleLocationInputChange}
          onChange={(event, value) => props.handleSuggestionClick(value)}
          options={props.locationSuggestions}
          getOptionLabel={(option) => formatLocationSuggestion(option)}
          // renderInput={(params) => <TextField {...params} label="Search for a suburb, state or postcode" variant="outlined"
          // TextField must have label or doesn't work (even just whitespace)
          renderInput={(params) => <TextField {...params} label={inputFocus ? " " : "Search for a suburb, state or postcode"} variant="outlined"
          InputLabelProps={{ shrink: false }}  
          // InputProps={{
            //   endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
            // }}
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
      {/* <button type="submit"></button> */}
    </form>
  );
};