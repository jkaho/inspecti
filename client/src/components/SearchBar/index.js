import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";

export default function SearchBar(props) {
  return (
    <form className="search-box" onSubmit={props.onSubmit}>
      <input type="text" placeholder={props.placeholder} ref={props.inputRef} onChange={props.onChange} />
      <button id="search-reviews-btn" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};