import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// Child components
import NavBar from "../../components/NavBar";
// Material Design 
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// CSS
import "./style.css";

export default function SingleListing() {
  return (
    <div>
      <NavBar />
      <div className="back-to-search-results">
        <Link to="/results" style={{ textDecoration: "none" }}>
          <Button startIcon={<ChevronLeftIcon />}>
            SEARCH RESULTS
          </Button>
        </Link>
      </div>
      <div className="single-listing-box">
        <div className="single-listing-images">
          <img src="" alt="" width="250px"/>
        </div>
        <div className="single-listing-info">
          <div className="single-listing-priceHeading">
            <h3>Contact Agent</h3>
          </div>
          <div className="single-listing-address">
            54 Artarmon Rd Artarmon, NSW 2064
          </div>
          <div className="single-listing-propertySpecs">
            <i className="fas fa-bed"></i>&nbsp;
            <span className="num-beds">4</span>&nbsp;&nbsp;
            <i className="fas fa-shower"></i>&nbsp;
            <span className="num-baths">3</span>&nbsp;&nbsp;
            <i className="fas fa-car"></i>&nbsp;
            <span className="num-cars">2</span>&nbsp;&nbsp;
            <i className="fas fa-ruler-combined"></i>&nbsp;
            <span className="num-land">627m²</span>&nbsp;&nbsp;
          </div>
          <hr />
          <div className="single-listing-heading">
            <h5>Family Entertainer</h5>
          </div>
          <div className="single-listing-description">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </div>
          <hr />
          <div className="single-listing-inspections">
            <h4>Inspection Times</h4>
          </div>
          <div className="single-listing-auction">
            <h4>Auction</h4>
          </div>
          <hr />
          <div className="single-listing-agent">
            <h4>Agent</h4>
          </div>
        </div>
      </div>
    </div>
  );
};