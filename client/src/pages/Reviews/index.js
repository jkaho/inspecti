// React
import React, { useEffect, useState, useRef } from "react";
// Children components
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
import ReviewCard from "../../components/ReviewCard";
// Material Design 
import ClearIcon from "@material-ui/icons/Clear";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import PlaceIcon from "@material-ui/icons/Place";
import TextField from '@material-ui/core/TextField';
// CSS
import "./style.css";
// API routes
import notesAPI from "../../utils/notesAPI";
// Moment.js
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
];

export default function Reviews() {
  // States
  const [criteria, setCriteria] = useState('Date added');
  const [reviews, setReviews] = useState([]);
  const [modifiedReviews, setModifiedReviews] = useState([]);
    // Pagination states
  const [reviewsToShow, setReviewsToShow] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [pageArray, setPageArray] = useState([]);
  const [currentPageArray, setCurrentPageArray] = useState([1, 2, 3, 4]);
  const [numOfReviews, setNumOfReviews] = useState();
  const [page, setPage] = useState(1);
  const reviewsPerPage = 5;
    // Pop up state
  const [popup, setPopup] = useState({ open: false, type: "", severity: "error", message: "" });
  const popupTimeout = 6000;

  // Refs
  const inputRef = useRef();
  const sortRef = useRef();

  // Initial render
  useEffect(() => {
    notesAPI.getSharedNotes()
      .then(res => {
        setReviews(res.data);
        setModifiedReviews(res.data);
        setReviewsToShow(res.data.slice(0, reviewsPerPage));
        createPageNav(res.data.length);
        setNumOfReviews(res.data.length);
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "warning", message: "" });
        }, popupTimeout);
      });
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
      setReviewsToShow(modifiedReviews.slice((page - 1) * reviewsPerPage, (page - 1) * reviewsPerPage + reviewsPerPage));
      createPageNav(searchResults.length);
      setNumOfReviews(searchResults.length);
    } else {
      setModifiedReviews(reviews);
      setNumOfReviews(reviews.length);
      setReviewsToShow(reviews.slice((page - 1) * reviewsPerPage, (page - 1) * reviewsPerPage + reviewsPerPage));
    }
  };

  const handleSortButtonClick = (event) => {
    let sortType;
    if (event.target.id) {
      sortType = event.target.id.split("-")[1];
    } else {
      sortType = event.target.parentElement.id.split("-")[1];
    }

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
    
    setModifiedReviews(sortedResults);
    if (page === sortedResults.length) {
      setReviewsToShow(sortedResults.slice((page * reviewsPerPage) - reviewsPerPage));
    } else {
      setReviewsToShow(sortedResults.slice((page * reviewsPerPage) - reviewsPerPage, (page * reviewsPerPage)));
    }
  };

  const handleClearSortButtonClick = () => {
    setModifiedReviews(reviews);
    if (page === reviews.length) {
      setReviewsToShow(reviews.slice((page * reviewsPerPage) - reviewsPerPage));
    } else {
      setReviewsToShow(reviews.slice((page * reviewsPerPage) - reviewsPerPage, (page * reviewsPerPage)));
    }
  };

  const handlePopupClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPopup({ open: false, type: "", severity: "", message: ""});
  };
  
  const createPageNav = (totalReviews) => {
    // 20 reviews on each page 
    const numOfPagesB = Math.ceil(totalReviews / reviewsPerPage);
    setNumOfPages(numOfPagesB);
    let pageArrayB = [];
    for (let i = 1; i <= numOfPagesB; i++) {
      pageArrayB.push(i);
    };
    setPageArray(pageArrayB);
  };

  const pageNavButtonClick = (event) => {
    const pageClicked = parseInt(event.target.value);
    setPage(pageClicked);
    setReviewsToShow(modifiedReviews.slice((pageClicked - 1) * reviewsPerPage, (pageClicked - 1) * reviewsPerPage + reviewsPerPage));
    setNavigationNumbers(pageClicked);
    backToTop();
  };

  const lastPageNavButtonClick = () => {
    setPage(numOfPages);
    setReviewsToShow(modifiedReviews.slice((numOfPages - 1) * reviewsPerPage));
    setNavigationNumbers(numOfPages);
    backToTop();
  };

  const pageNavNextButtonClick = () => {
    setPage(page + 1);
    setReviewsToShow(modifiedReviews.slice(page * reviewsPerPage, (page * reviewsPerPage) + reviewsPerPage));
    setNavigationNumbers(page + 1);
    backToTop();
  };

  const pageNavPrevButtonClick = () => {
    setPage(page - 1);
    setReviewsToShow(modifiedReviews.slice((page - 1) * reviewsPerPage - reviewsPerPage, (page - 1) * reviewsPerPage));
    setNavigationNumbers(page - 1);
    backToTop();
  };

  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const setNavigationNumbers = (pageClicked) => {
    if (numOfPages >= 6) {
      if (pageClicked < 4) {
        console.log("first")
        setCurrentPageArray([1, 2, 3, 4])
      } else if (pageClicked >= 4 && pageClicked < numOfPages - 2) {
        console.log("middle")
        setCurrentPageArray([pageClicked - 1, pageClicked, pageClicked + 1]);
      } else if (pageClicked >= numOfPages - 2) {
        console.log("last")
        setCurrentPageArray([numOfPages - 3, numOfPages - 2, numOfPages - 1, numOfPages])
      }
    }
  };

  const sortSelect = (
    <>
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
    </>
  );

  return (
    <div className="reviews-page">
      <NavBar />
      <div className="review-search-div">
        <div id="review-search-wrapper">
          <input
            id="reviews-search-input"
            placeholder="Search reviews by address, suburb, state or postcode"
            ref={inputRef}
            type="text"
            onChange={handleSearchChange}
          />
          <div className="search-review-icon">
            <PlaceIcon />
          </div>
        </div>
      </div>
      <div className="review-sort-div">
        <table>
          <tbody>
            <tr>
              <td id="review-pages-outof">
                {numOfReviews > 0 ? 
                  <>
                    <strong>{`${(page * reviewsPerPage) - (reviewsPerPage - 1)}-${page === numOfPages ? numOfReviews : page * reviewsPerPage}`}</strong> out of <strong>{numOfReviews}</strong> REVIEWS
                  </> : 
                  <>
                    <strong>0</strong> REVIEWS
                  </>
                }
              </td> 
              <td className="review-sort-td">
                {sortSelect}
              </td>
            </tr>
            <tr className="review-sort-responsive">
              <td>{sortSelect}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="review-container">
        {reviewsToShow.length > 0 ? reviewsToShow.map((review) => (
          <ReviewCard
            key={review.id}
            propertyId={review.propertyId}
            title={review.title}
            text={review.text}
            address={review.propertyAddress}
            date={moment(review.dateShared).format("DD/MM/YY")}
            dateInspected={moment(review.dateInspected).format("DD/MM/YY")}
            author={`${review.user.firstName} ${review.user.lastName.slice(0, 1)}.`}
            beds={review.bedrooms}
            baths={review.bathrooms}
            cars={review.carSpaces}
            land={review.landSize}
            propertyConditionRating={review.review.propertyConditionRating}
            potentialRating={review.review.potentialRating}
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
      <div className="review-page-navigator">
        <table>
          <tbody>
            {
              // If num of pages is less than five, render a page nav btn for each page
              numOfPages <= 5 ? 
                <tr>
                  {page > 1 ? 
                    <td>
                      <button onClick={pageNavPrevButtonClick}
                        className="prev-review-page">Prev</button>
                    </td> : <td></td>
                  }
                  {pageArray.map(item => (
                    <td key={item}>
                      <button
                        onClick={pageNavButtonClick}
                        value={item}
                        className={page === item ? "selected-page" : ""}
                      >{item}</button>
                    </td>
                  ))}
                  {page < numOfPages ? 
                    <td>
                      <button onClick={pageNavNextButtonClick}
                        className="next-review-page">Next</button>
                    </td> : <td></td>
                  }
                </tr>
              :
                <tr>
                  {page > 1 ? 
                    <td>
                      <button onClick={pageNavPrevButtonClick}
                        className="prev-review-page">Prev</button>
                    </td> : <td></td>
                  }
                  {page > 3 ?
                    <>
                      <td>
                        <button 
                          value={1}
                          onClick={pageNavButtonClick}
                          className={page === 1 ? "selected-page" : ""}
                          >{1}</button>
                      </td>
                      <td>
                        <div>...</div>
                      </td>
                    </> : <></>
                  }
                  {currentPageArray.map(item => (
                    <td key={item}>
                      <button
                        value={item}
                        onClick={pageNavButtonClick}
                        className={page === item ? "selected-page" : ""}
                      >{item}</button>
                    </td>
                  ))}
                  {page < numOfPages - 2 ?
                    <>
                      <td>
                        <div>...</div>
                      </td>
                      <td>
                        <button 
                          onClick={lastPageNavButtonClick}
                          className={page === numOfPages ? "selected-page" : ""}
                          >{numOfPages}</button>
                      </td>
                    </> : <></>
                  }
                  {page < numOfPages ? 
                    <td>
                      <button onClick={pageNavNextButtonClick}
                        className="next-review-page">Next</button>
                    </td> : <td></td>
                  }
                </tr>
              }
          </tbody>
        </table>
      </div>
      <Footer />
      <Popup 
        handleClose={handlePopupClose}
        open={popup.open}
        message={popup.message}
        severity={popup.severity}
      />
    </div>
  );
};