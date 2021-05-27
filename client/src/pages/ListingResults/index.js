import React, { useState, useEffect, useRef } from "react";
// react-router-dom
import { useHistory, useLocation } from "react-router-dom";
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
  let { state, searchWord } = useLocation();
  const history = useHistory();
  // States 
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [location, setLocation] = useState({});
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
  const [results, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState();

  // Refs
  const locationRef = useRef();

  // Initial render
  useEffect(() => {
    setSearchResults(state.data);
    setTotalResults(parseInt(state.headers["x-total-count"]))
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
        setLocation(res.data[0]);
      })
      .catch(err => console.log(err));
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
        setSearchResults(res.data);
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

  const handleListingClick = (event) => {
    event.stopPropagation();
    const listingId = event.target.dataset.listing.split("-")[1];
    let listing = {};
    for (let i = 0; i < state.length; i++) {
      if (state[i].type === "PropertyListing") {
        if (state[i].listing.id === parseInt(listingId)) {
          listing = state[i];
          i = state.length;
        }
      }
    };
    history.push({
      pathname: "/listing",
      state: listing.listing,
      results: results
    })
  };

  function formatLocationSuggestion(obj) {
    let location = `${obj.name}, ${obj.state.toUpperCase()}`;
    if (obj.type === "suburb") {
      location += ` ${obj.postcode}`;
    } 

    return location;
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
      <hr className="listing-search-break" />
      <div className="results-info">
        <div className="results-info-keyword">
          Search results for&nbsp; 
          <span style={{ fontWeight: "600" }}>"{formatLocationSuggestion(searchWord)}"</span>
        </div>
      </div>
      <div className="results-container">
        {results.map(listing => (
          listing.type === "PropertyListing" ?
          <ListingCard
            onClick={handleListingClick}
            key={listing.listing.listingSlug}
            src={listing.listing.media[0].url}
            id={listing.listing.id}
            alt={listing.listing.listingSlug}
            priceDetails={listing.listing.priceDetails.displayPrice}
            address={listing.listing.propertyDetails.displayableAddress}
            bedrooms={listing.listing.propertyDetails.bedrooms ? 
              listing.listing.propertyDetails.bedrooms : null
            }
            bathrooms={listing.listing.propertyDetails.bathrooms ? 
              listing.listing.propertyDetails.bathrooms : null
            }
            carSpaces={listing.listing.propertyDetails.carspaces ? 
              listing.listing.propertyDetails.carspaces : null
            }
            landSize={listing.listing.propertyDetails.buildingArea ? 
              listing.listing.propertyDetails.buildingArea : null
            }
            inspectionTime={listing.listing.inspectionSchedule.times[0] ?
              listing.listing.inspectionSchedule.times[0].openingTime : null
            }
            agentSrc={listing.listing.advertiser.contacts[0].photoUrl}
            agentName={listing.listing.advertiser.contacts[0].name}
            agency={listing.listing.advertiser.name}
            agencyColour={listing.listing.advertiser.preferredColourHex}
            agencyLogo={listing.listing.advertiser.logoUrl}
          /> : ""
        ))}
      </div>
    </div>
  );
};