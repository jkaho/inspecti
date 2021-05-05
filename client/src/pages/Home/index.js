import React, { useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import SuggestionMenu from "../../components/SuggestionMenu";
import FilterDiv from "../../components/FilterDiv";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import { Typography } from "@material-ui/core";
import userAPI from "../../utils/userAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  guide: {
    padding: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 0
  },
  heading: {
    textAlign: "center",
    color: "white",
    paddingTop: 20,
    paddingBottom: 20
  }
}));

export default function Home() {
  const classes = useStyles();
  const searchRef = useRef();
  // const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleInputChange = () => {
    const query = searchRef.current.value;
    setSearch(query);
    setSuggestions([]);
    if (query !== "") {
      userAPI.getLocationSuggestions(query)
      .then(res => {
        setSuggestions(res.data);
        if (res.data.length > 0) {
          setSuggestionOpen(true);
        } else {
          setSuggestionOpen(false);
        }
      })
      .catch(err => console.log(err));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSuggestionOpen(false);
    setSuggestions([]);
    // API.getPropertyListings(search)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
  };

  const handleLocationSuggestionClick = (event) => {
    event.stopPropagation();
    const locationEl = event.target;
    let locationQuery = "";
    if (locationEl.value) {
      locationQuery += locationEl.value.trim();
    } else {
      locationQuery += locationEl.textContent.trim();
    }

    setSearch(locationQuery);
    searchRef.current.value = locationQuery;
  };

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid item xs={12}>
        <div className="bg">
          <Typography variant="h4" className={classes.heading}>Search properties for sale</Typography>
          <SearchBar
            placeholder="Search by suburb, state or postcode"
            inputRef={searchRef}
            onSubmit={handleFormSubmit}
            onChange={handleInputChange}
          />
          <SuggestionMenu
            suggestions={suggestions}
            open={suggestionOpen}
            onClick={handleLocationSuggestionClick}
          />
          <FilterDiv />
        </div>
      </Grid>
      <Grid container spacing={2} className={classes.guide} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            How to use Inspecti
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Anyone can view property reviews
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Take property notes
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Rate properties and share your reviews
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Keep track of scheduled inspections and auctions
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            View all of your previously inspected properties
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
