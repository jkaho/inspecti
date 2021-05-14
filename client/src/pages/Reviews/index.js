import React, { useEffect, useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import ReviewCard from "../../components/ReviewCard";
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClearIcon from "@material-ui/icons/Clear";
import "./style.css";
import notesAPI from "../../utils/notesAPI";
import moment from "moment";

const sortCriteria = [
  "Date added",
  "Property condition",
  "Potential to capitalise",
  "Surroundings",
  "Consistency with neighbours",
  "Accessibility",
  "Privacy",
  "Floorplan",
  "Outdoor space",
  "Indoor-to-outdoor flow",
  "Natural light"
]

export default function Reviews() {
  // States
  const [criteria, setCriteria] = useState('Date added');
  const [reviews, setReviews] = useState([]);
  const [modifiedReviews, setModifiedReviews] = useState([]);

  // Refs
  const inputRef = useRef();
  const sortRef = useRef();

  // Initial render
  useEffect(() => {
    notesAPI.getSharedNotes()
      .then(res => {
        console.log(res);
        setReviews(res.data);
        setModifiedReviews(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Helper functions
  const handleSortChange = (event) => {
    setCriteria(event.target.value);
  };

  const handleSearchChange = () => {
    const search = inputRef.current.value.trim();
    let searchResults = [];
    if (search !== "") {
      reviews.forEach(review => {
        if (review.propertyAddress.toLowerCase().includes(search)) {
          searchResults.push(review);
        }
      });
  
      setModifiedReviews(searchResults);
      console.log(modifiedReviews)
    } else {
      setModifiedReviews(reviews);
    }
  };

  const handleSortButtonClick = (event) => {
    const sortType = event.target.id.split("-")[1];
    let sortedResults = [];
    switch(criteria) {
      case "Date added":
        if (sortType === "desc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return new Date(b.dateShared) - new Date(a.dateShared);
          }); 
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return new Date(a.dateShared) - new Date(b.dateShared);
          }); 
        }
        break;
      case "Property condition":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.propertyConditionRating - b.review.propertyConditionRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.propertyConditionRating - a.review.propertyConditionRating;
          });
        }
        break;
      case "Potential to capitalise":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.potentialRating - b.review.potentialRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.potentialRating - a.review.potentialRating;
          });
        }
        break;
      case "Surroundings":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.surroundingsRating - b.review.surroundingsRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.surroundingsRating - a.review.surroundingsRating;
          });
        }
        break;
      case "Consistency with neighbours": 
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.neighbourComparisonRating - b.review.neighbourComparisonRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.neighbourComparisonRating - a.review.neighbourComparisonRating;
          });
        }
        break;
      case "Accessibility":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.accessibilityRating - b.review.accessibilityRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.accessibilityRating - a.review.accessibilityRating;
          });
        }
        break;
      case "Privacy":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.privacyRating - b.review.privacyRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.privacyRating - a.review.privacyRating;
          });
        }
        break;
      case "Floorplan":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.floorplanRating - b.review.floorplanRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.floorplanRating - a.review.floorplanRating;
          });
        }
        break;
      case "Outdoor space":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.outdoorSpaceRating - b.review.outdoorSpaceRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.outdoorSpaceRating - a.review.outdoorSpaceRating;
          });
        }
        break;
      case "Indoor-to-outdoor flow":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.indoorOutdoorFlowRating - b.review.indoorOutdoorFlowRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.indoorOutdoorFlowRating - a.review.indoorOutdoorFlowRating;
          });
        }
        break;
      case "Natural light":
        if (sortType === "asc") {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return a.review.naturalLightRating - b.review.naturalLightRating;
          });
        } else {
          sortedResults = [...modifiedReviews].sort(function(a, b) {
            return b.review.naturalLightRating - a.review.naturalLightRating;
          });
        }
        break;
      default:
        return;
    }

    console.log(sortedResults)
    setModifiedReviews(sortedResults);
  };

  const handleClearSortButtonClick = () => {
    setModifiedReviews(reviews);
  };
  
  return (
    <div className="reviews-page">
      <NavBar />
      <div className="review-search-div">
        <input
          placeholder="Search reviews by address, suburb, state or postcode"
          ref={inputRef}
          type="text"
          onChange={handleSearchChange}
        />
      </div>
      <div className="review-sort-div">
        <table>
          <tbody>
            <tr>
              <td>{modifiedReviews.length} REVIEWS</td>
              <td className="review-sort-td">
                {/* <div 
                  style={{
                    display: "inline-block",
                    paddingTop: 5,
                    verticalAlign: "top"
                  }}
                >
                  SORT BY&nbsp;
                </div> */}
                <TextField
                  id="outlined-select-reviews"
                  select
                  ref={sortRef}
                  value={criteria}
                  label="Sort by"
                  onChange={handleSortChange}
                  SelectProps={{
                    native: true,
                  }}
                  inputProps={{
                    style: {
                      padding: 5,
                    }
                  }}
                  variant="outlined"
                >
                  {sortCriteria.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
                <div className="sort-btn-div">
                  <IconButton id="sortbtn-asc" className="sort-btn" onClick={handleSortButtonClick}>
                    <ExpandLessIcon id="sorticon-asc" />
                  </IconButton>
                  <IconButton id="sortbtn-desc" className="sort-btn" onClick={handleSortButtonClick}>
                    <ExpandMoreIcon id="sorticon-desc" />
                  </IconButton>
                  <IconButton className="sort-btn" onClick={handleClearSortButtonClick}>
                    <ClearIcon />
                  </IconButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="review-container">
        {modifiedReviews.length > 0 ? modifiedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            title={review.title}
            text={review.text}
            address={review.propertyAddress}
            date={moment(review.dateShared).format("DD/MM/YY")}
            author={`${review.user.firstName} ${review.user.lastName}`}
            beds={review.bedrooms}
            baths={review.bathrooms}
            cars={review.carSpaces}
            land={review.landSize}
            propertyConditionRating={review.review.propertyConditionRating}
            potentialRating={review.review.privacyRating}
            surroundingsRating={review.review.surroundingsRating}
            neighbourComparisonRating={review.review.neighbourComparisonRating}
            accessibilityRating={review.review.accessibilityRating}
            privacyRating={review.review.privacyRating}
            floorplanRating={review.review.floorplanRating}
            outdoorSpaceRating={review.review.outdoorSpaceRating}
            indoorOutdoorFlowRating={review.review.indoorOutdoorFlowRating}
            naturalLightRating={review.review.naturalLightRating}
          />
        )) : 
          <div className="no-reviews">
            <h2>No reviews</h2>
          </div>
        }
      </div>
    </div>
  );
};