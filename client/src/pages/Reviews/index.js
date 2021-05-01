import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClearIcon from "@material-ui/icons/Clear";
import "./style.css";

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
  const [criteria, setCriteria] = React.useState('Criteria');

  const handleChange = (event) => {
    setCriteria(event.target.value);
  };
  
  return (
    <div>
      <div className="review-search-div">
        <div className="review-search-box">
          <input type="text" placeholder="Search reviews by suburb, state or postcode" />
          <button id="search-reviews-btn">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="review-sort-div">
        <table>
          <tbody>
            <tr>
              <td>5 REVIEWS</td>
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
                  id="outlined-select-native"
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
    </div>
  );
};