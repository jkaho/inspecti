import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import "./style.css";

export default function TableToolbar(props) {
  return (
    <div className="table-toolbar">
      <div className="table-search">
        <input type="text" placeholder="Search properties by address" />
      </div>
      <div className="table-sort">
        <TextField
          id="outlined-select-sort-table"
          select
          ref={props.sortRef}
          value={props.sortCriteria}
          label="Sort by"
          onChange={props.handleSortChange}
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
          {props.sortOptions.map((option) => (
            option.disabled ? 
              <option key={option.value} value={option.value} disabled>
                {option.label}
              </option> : 
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
          ))}
        </TextField>
        <IconButton className="sort-btn" onClick={props.handleClearButtonClick}>
          <ClearIcon />
        </IconButton>
      </div>
      <div className="table-filter">
        <TextField
          id="outlined-select-filter-table"
          select
          ref={props.filterRef}
          value={props.filterCriteria}
          label="Filter by"
          onChange={props.handleFilterChange}
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
          {props.filterOptions.map((option) => (
            option.disabled ? 
              <option key={option.value} value={option.value} disabled>
                {option.label}
              </option> : 
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
          ))}
        </TextField>
        <IconButton className="sort-btn" onClick={props.handleClearButtonClick}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};