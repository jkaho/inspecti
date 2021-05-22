import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';

export default function LocationSearchBar(props) {
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
          onInputChange={props.handleLocationInputChange}
          onChange={(event, value) => props.handleSuggestionClick(value)}
          options={props.locationSuggestions}
          getOptionLabel={(option) => formatLocationSuggestion(option)}
          renderInput={(params) => <TextField {...params} label="Search for a suburb, state or postcode" variant="outlined"
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
        startIcon={<SearchIcon />}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};