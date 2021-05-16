// React
import React, { useState, useRef } from "react";
// Child components
import NavBar from "../../components/NavBar";
import InfographicCard from "../../components/InfographicCard";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterDiv from "../../components/FilterDiv";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
// import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
// CSS
import "./style.css";
// Images
import reviewsImage from "../../images/social.png";
import propertyImage from "../../images/house.png";
import noteImage from "../../images/idea.png";
import scheduleImage from "../../images/calendar.png";
import profileImage from "../../images/stats.png";
// API routes
import domainAPI from "../../utils/domainAPI";

// Class styles
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

// Format locations from API data 
function formatLocationSuggestion(obj) {
  let location = `${obj.name}, ${obj.state.toUpperCase()}`;
  if (obj.type === "suburb") {
    location += ` ${obj.postcode}`;
  } 

  return location;
};

// Infographic data
const infographicData = {
  reviews: {
    src: reviewsImage,
    alt: "Graphic of social media UI on smartphone screen",
    title: "Read reviews",
    text: "See what other people have to say about properties they’ve inspected."
  },
  notes: {
    src: noteImage,
    alt: "Graphic of turned on lightbulb",
    title: "Share your thoughts",
    text: "Write notes about the properties you inspect. You can turn a note into a public review by sharing it."
  },
  properties: {
    src: propertyImage,
    alt: "Graphic of white house in front of tall trees",
    title: "Look back",
    text: "Keep track of all the properties you inspect by adding entries to your inspected properties table."
  },
  schedule: {
    src: scheduleImage,
    alt: "Graphic of a calendar",
    title: "Look forward",
    text: "Stay organised by adding inspection and auction events to your schedule."
  },
  profile: {
    src: profileImage,
    alt: "Graphic of bar chart and pie chart",
    title: "Get insights",
    text: "View useful personalised inspection and auction stats on your profile page."
  }
};

export default function Home() {
  const classes = useStyles();
  // States
  const searchRef = useRef();
  // const [search, setSearch] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [location, setLocation] = useState();
  // const [suggestionOpen, setSuggestionOpen] = useState(false);
  // const [search, setSearch] = useState("");
  // Refs
  const locationRef = useRef();
  // const handleInputChange = () => {
  //   const query = searchRef.current.value;
  //   setSearch(query);
  //   setSuggestions([]);
  //   if (query !== "") {
  //     domainAPI.getLocationSuggestions(query)
  //     .then(res => {
  //       setSuggestions(res.data);
  //       if (res.data.length > 0) {
  //         setSuggestionOpen(true);
  //       } else {
  //         setSuggestionOpen(false);
  //       }
  //     })
  //     .catch(err => console.log(err));
  //   }
  // };

  const handleLocationInputChange = () => {
    const newValue = locationRef.current.children[0].children[1].children[0].value;
    if (newValue === "") {
      setLocationSuggestions([]);
    } else {
      domainAPI.getLocationSuggestions(newValue)
      .then(res => {
        setLocationSuggestions(res.data.splice(0, 10));
      })
      .catch(err => console.log(err))
    }
  };

  const handleSuggestionClick = (value) => {
    setLocation(value);
    console.log(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setSuggestionOpen(false);
    setLocationSuggestions([]);
    // API.getPropertyListings(search)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
  };

  // const handleLocationSuggestionClick = (event) => {
  //   event.stopPropagation();
  //   const locationEl = event.target;
  //   let locationQuery = "";
  //   if (locationEl.value) {
  //     locationQuery += locationEl.value.trim();
  //   } else {
  //     locationQuery += locationEl.textContent.trim();
  //   }

  //   setSearch(locationQuery);
  //   searchRef.current.value = locationQuery;
  // };

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid item xs={12}>
        <div className="bg">
          <Typography variant="h3" className={classes.heading}>Search properties for sale</Typography>
          <form onSubmit={handleFormSubmit}>
            <div className="location-autocomplete-wrapper">
              <Autocomplete
                id="location-autocomplete"
                freeSolo
                // fullWidth={true}
                ref={locationRef}
                onInputChange={handleLocationInputChange}
                onChange={(event, value) => handleSuggestionClick(value)}
                // style={{ width: "90% ", display: "inline-block" }}
                options={locationSuggestions}
                getOptionLabel={(option) => formatLocationSuggestion(option)}
                // style={{ width: 300, padding: 0 }}
                renderInput={(params) => <TextField {...params} label="Search for a suburb, state or postcode" variant="outlined"
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                  }}
                />}
              />
              {/* <div className="search-location-icon">
                <SearchIcon />
              </div> */}
            </div>
          </form>
          <FilterDiv />
        </div>
      </Grid>
      <div className="home-content">
        <div className="home-heading-div">
          <Typography variant="h4" align="center">
            How to use Inspecti
          </Typography>
        </div>
        <hr />
        <div className="infographics-home">
          <div className="infographics-subheading">
            <Typography variant="h5" align="center">
              For everyone
            </Typography>
          </div>
          <div className="infographics-everyone">
            <InfographicCard
              src={infographicData.reviews.src}
              alt={infographicData.reviews.alt}
              title={infographicData.reviews.title}
              text={infographicData.reviews.text}
            />
          </div>
          <hr />
          <div className="infographics-subheading">
            <Typography variant="h5" align="center">
              For members only
            </Typography>
          </div>
          <div className="infographics-members">
            <InfographicCard
              src={infographicData.notes.src}
              alt={infographicData.notes.alt}
              title={infographicData.notes.title}
              text={infographicData.notes.text}
            />
            <InfographicCard
              src={infographicData.properties.src}
              alt={infographicData.properties.alt}
              title={infographicData.properties.title}
              text={infographicData.properties.text}
            />
            <InfographicCard
              src={infographicData.schedule.src}
              alt={infographicData.schedule.alt}
              title={infographicData.schedule.title}
              text={infographicData.schedule.text}
            />
            <InfographicCard
              src={infographicData.profile.src}
              alt={infographicData.profile.alt}
              title={infographicData.profile.title}
              text={infographicData.profile.text}
            />
          </div>
        </div>
      </div>
      {/* <Grid container spacing={2} className={classes.guide} alignItems="center">
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
      </Grid> */}
    </div>
  );
}
