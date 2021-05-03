import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";

export default function SearchBar(props) {
  return (
    <div className="search-box">
      <input type="text" placeholder={props.placeholder} />
      <button id="search-reviews-btn">
        <SearchIcon />
      </button>
    </div>
  );
};