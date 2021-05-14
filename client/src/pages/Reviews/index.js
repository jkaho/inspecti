import React, { useEffect, useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import ReviewCard from "../../components/ReviewCard";
import SearchBar from "../../components/SearchBar";
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
  "Indoor-to-outdoor flow"
]

export default function Reviews() {
  // States
  const [criteria, setCriteria] = useState('Criteria');
  const [reviews, setReviews] = useState([]);
  const [modifiedReviews, setModifiedReviews] = useState([]);

  // Refs
  const inputRef = useRef();

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

  const handleChange = (event) => {
    setCriteria(event.target.value);
  };

  const handleSearchChange = () => {
    const search = inputRef.current.value.trim();
    let searchResults = [];
    console.log(search)
    if (search !== "") {
      reviews.forEach(review => {
        if (review.propertyAddress.toLowerCase().includes(search)) {
          searchResults.push(review);
        }
      });
  
      setModifiedReviews(searchResults);
    } else {
      setModifiedReviews(reviews);
    }
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
                  value={criteria}
                  label="Sort by"
                  onChange={handleChange}
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
                  <IconButton className="sort-btn">
                    <ExpandLessIcon />
                  </IconButton>
                  <IconButton className="sort-btn">
                    <ExpandMoreIcon />
                  </IconButton>
                  <IconButton className="sort-btn">
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