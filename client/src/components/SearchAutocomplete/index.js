/* eslint-disable no-use-before-define */
// React
import React from 'react';
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
// CSS
import "./style.css";

// Class styles
const useStyles = makeStyles({
  smallInput: {
    width: "100%!important",
    // height: "30px!important"
  },
});

export default function SearchAutocomplete(props) {
  const classes = useStyles();

  return (
    <Autocomplete
      id="search-autocomplete"
      className={props.smallInput ? `${classes.smallInput} smallInput` : ""}
      freeSolo
      ref={props.addressRef}
      onInputChange={props.onInputChange}
      onChange={(event, value) => props.onChange(value)}
      options={props.suggestions}
      getOptionLabel={(option) => option.address}
      style={{ padding: 0 }}
      renderInput={(params) => <TextField {...params} label="Search for an address" variant="outlined"
      />}
    />
  );
};