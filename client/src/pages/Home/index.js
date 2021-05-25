// React
import React, { useState, useRef } from "react";
// react-router-dom
import { Link, useHistory } from "react-router-dom";
// Child components
import Popup from "../../components/Popup";
import FilterDiv from "../../components/FilterDiv";
import InfographicCard from "../../components/InfographicCard";
import LocationSearchBar from "../../components/LocationSearchBar";
import NavBar from "../../components/NavBar";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
// import SearchIcon from "@material-ui/icons/Search";
// import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
// CSS
import "./style.css";
// Images
import attachRatingImage from "../../images/opinion.png";
import noteImage from "../../images/idea.png";
import noThoughtsImage from "../../images/no-thoughts.png";
import profileImage from "../../images/stats.png";
import propertyImage from "../../images/house.png";
import ratingImage from "../../images/rating.png";
import reviewsImage from "../../images/social.png";
import scheduleImage from "../../images/calendar.png";
import shareImage from "../../images/share.png";
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
  },
  attachRating: {
    src: attachRatingImage,
    alt: "Graphic of hands holding smartphone with speech bubble coming out of screen containing a red unhappy face, a yellow neutral face and a green happy face",
    title: "1. Attach ratings",
    text: "After creating a note, you must link a property to the note before being able to attach ratings."
  },
  rating: {
    src: ratingImage,
    alt: "Graphic of five yellow stars, two on top and three at the bottom, with a hand holding the star on the bottom right",
    title: "2. Rate criteria",
    text: function ratingText() {
      return (
        <>
          Use the standard rating criteria provided to rate a property out of five. 
          View <a id="rating-text-link" href="#rating-criteria-explanation">below</a> for more info.
        </>
      )
    }
  },
  noThoughts: {
    src: noThoughtsImage,
    alt: "Graphic of girl with brown hair to the left of an orange thought bubble containing an ellipsis",
    title: "3. No pressure",
    text: "Don't worry if you don't have thoughts on a certain rating criteria - you can leave ratings blank."
  },
  share: {
    src: shareImage,
    alt: "Graphic of blue smartphone with a share icon coming out of the screen",
    title: "4. Share your note",
    text: "Click on the share button to share your thoughts with the world!"
  },
};

const ratingCriteria = [
  {
    name: "Property condition", 
    description: "The state of the property relative to its age.",
  },
  {
    name: "Potential to capitalise",
    description: "How much potential the property has to add value to it."
  },
  {
    name: "Surroundings",
    description: "How are the immediate surroundings? Is the property located on a tree-lined street? Is it close to an industrial area?",
  },
  {
    name: "Consistency with neighbours",
    description: "The property's similarity in value and style to its neighbouring properties.",
  },
  {
    name: "Accessibility",
    description: "Is the property located at the bottom/top of a steep hill? Is it tucked away into a narrow lane way or at the end of a long driveway?",
  },
  {
    name: "Privacy",
    description: "How much of the inside of the property can be seen from neighbouring properties or from public areas?",
  },
  {
    name: "Floor plan",
    description: "How functional is the floor plan? Are the dining room and kitchen on separate sides of the home?",
  },
  {
    name: "Outdoor space",
    description: "The amount of outdoor space (garden, balcony, courtyard, etc.) relative to indoor space. How well-balanced is the indoor space to outdoor space ratio?",
  },
  {
    name: "Indoor-to-outfoor flow",
    description: "Does the internal floor plan flow seamlessly to the outdoors?",
  },
  {
    name: "Natural light",
    description: "How well is the home illuminated with sunlight?",
  }
];

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  // States
  // const searchRef = useRef();
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [location, setLocation] = useState();
  // const [search, setSearch] = useState("");
  // const [showLabel, setLabelState] = useState(true);
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
  // const [searchResults, setSearchResults] = useState([]);

  // Refs
  const locationRef = useRef();

  // useEffect(() => {
  //   domainAPI.getPropertyListings()
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // });

  // Helper functions
  const handleLocationInputChange = () => {
    const newValue = locationRef.current.children[0].children[1].children[0].value;
    if (newValue === "") {
      setLocationSuggestions([]);
    } else {
      domainAPI.getLocationSuggestions(newValue)
      .then(res => {
        setLocationSuggestions(res.data);
        setLocation(res.data[0]);
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
        history.push({
          pathname: "/results",
          state: res.data
        })
      })
      .catch(err => console.log(err))
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
  const handleRadioChange = (event) => {
    setMinMax(event.target.value);
  };

  const handleCategoryChange = (event) => {
    console.log(event.target.value)
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
    <div className={classes.root}>
      <NavBar />
      <Grid item xs={12}>
        <div className="bg">
          <Typography variant="h3" className={classes.heading}>Search properties for sale</Typography>
          <LocationSearchBar
            handleLocationFormSubmit={handleLocationFormSubmit}
            handleLocationInputChange={handleLocationInputChange}
            locationRef={locationRef}
            handleSuggestionClick={handleSuggestionClick}
            locationSuggestions={locationSuggestions}
            location={location}
          />
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
          <div className="create-account-div">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button
                id="create-account-btn"
                endIcon={<PersonIcon />}
              >
                CREATE AN ACCOUNT NOW
              </Button>
            </Link>
          </div>
          <hr />
          <div className="infographics-subheading">
            <Typography variant="h5" align="center">
              How to turn a note into a review
            </Typography>
            <Typography variant="body1" align="center"
              style={{ margin: "20px" }}
            >
              A note that has a linked property as well as attached ratings becomes a 
              review once it is shared. 
            </Typography>
          </div> 
          <div className="infographics-review">
            <div className="infographics-review-upper">
              <InfographicCard
                src={infographicData.attachRating.src}
                alt={infographicData.attachRating.alt}
                title={infographicData.attachRating.title}
                text={infographicData.attachRating.text}
              />
              <InfographicCard
                src={infographicData.rating.src}
                alt={infographicData.rating.alt}
                title={infographicData.rating.title}
                text={infographicData.rating.text()}
              />
              <InfographicCard
                src={infographicData.noThoughts.src}
                alt={infographicData.noThoughts.alt}
                title={infographicData.noThoughts.title}
                text={infographicData.noThoughts.text}
              />
              <InfographicCard
                src={infographicData.share.src}
                alt={infographicData.share.alt}
                title={infographicData.share.title}
                text={infographicData.share.text}
              />
            </div>
            <div id="rating-criteria-explanation" className="rating-criteria-explanation">
              <Typography variant="h6" align="center" style={{ marginTop: "40px" }}>Rating criteria</Typography>
              <Typography variant="body1" align="center"
                style={{ margin: "20px" }}
              >
                We've provided a set of ten property rating criterion commonly used by property valuers 
                to help guide you in evaluating the properties you inspect.
            </Typography>
              <table>
                <tbody>
                  {ratingCriteria.map(item => (
                    <tr key={item.name}>
                      <td className="rating-criteria-value">
                        <Typography variant="body2" >
                          {item.name}
                        </Typography>
                      </td>
                      <td className="rating-criteria-key">
                        <Typography variant="body2">
                          {item.description}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};
