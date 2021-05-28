// React
import React, { useState, useEffect } from "react";
// CSS
import "./style.css";
// API routes
import propertiesAPI from "../../utils/propertiesAPI";
// Moment.js
import moment from "moment";

export default function ReviewCard(props) {
  // States
  const [dateInspected, setDateInspected] = useState();

  // Initial render
  useEffect(() => {
    if (props.propertyId) {
      propertiesAPI.getOneProperty(props.propertyId)
      .then(res => setDateInspected(res.data.dateInspected))
      .catch(err => console.log(err));
    }
  }, [props.propertyId]);

  const reviewTable = (
      <table className="review-rating-table">
        <tbody>
          <tr>
            <td className="review-criteria">Property condition</td>
            <td className="review-score">
              <span className="score">{props.propertyConditionRating ? props.propertyConditionRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Potential to capitalise</td>
            <td className="review-score">
              <span className="score">{props.potentialRating ? props.potentialRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Surroundings</td>
            <td className="review-score">
              <span className="score">{props.surroundingsRating ? props.surroundingsRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Consistency with neighbours</td>
            <td className="review-score">
              <span className="score">{props.neighbourComparisonRating ? props.neighbourComparisonRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Accessibility</td>
            <td className="review-score">
              <span className="score">{props.accessibilityRating ? props.accessibilityRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Privacy</td>
            <td className="review-score">
              <span className="score">{props.privacyRating ? props.privacyRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Floor plan</td>
            <td className="review-score">
              <span className="score">{props.floorplanRating ? props.floorplanRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Outdoor space</td>
            <td className="review-score">
              <span className="score">{props.outdoorSpaceRating ? props.outdoorSpaceRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Indoor-to-outdoor flow</td>
            <td className="review-score">
              <span className="score">{props.indoorOutdoorFlowRating ? props.indoorOutdoorFlowRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
          <tr>
            <td className="review-criteria">Natural light</td>
            <td className="review-score">
              <span className="score">{props.naturalLightRating ? props.naturalLightRating : "-"}</span>
              <span className="out-of">/5</span>
            </td>
          </tr>
        </tbody>
      </table>
  );

  const propertySpecsInfo = (
    <>
      <i className="fas fa-bed"></i>&nbsp;
      <span className="num-beds">{props.beds ? props.beds : "-"}</span>&nbsp;&nbsp;
      <i className="fas fa-shower"></i>&nbsp;
      <span className="num-baths">{props.baths ? props.baths : "-"}</span>&nbsp;&nbsp;
      <i className="fas fa-car"></i>&nbsp;
      <span className="num-cars">{props.cars ? props.cars : "-"}</span>&nbsp;&nbsp;
      <i className="fas fa-ruler-combined"></i>&nbsp;
      <span className="num-land">{props.land ? props.land : "- "}m²</span>&nbsp;&nbsp;
    </>
  );

  return (
    <div> 
      <div className="review-card">
        <table className="review-address-table">
          <tbody>
            <tr>
              <td>{props.address}</td>
              <td id="property-specs-info" style={{ textAlign: "right" }}>
                {propertySpecsInfo}
              </td>
            </tr>
            <tr id="property-specs-info-responsive">
              <td>{propertySpecsInfo}</td>
            </tr>
          </tbody>
        </table>
        <table className="review-content-table">
          <tbody>
            <tr>
              <td
                className="review-content-td"
                style={{
                  width: "60%",
                  paddingRight: "20px",
                  borderRight: "1px solid rgb(241, 241, 241)"
                  }}>
                <div className="review-content-title">
                  <h3>{props.title}</h3>
                </div>
                <div className="review-creator">
                  <span className="review-author">{props.author}</span>&nbsp;
                  <span className="review-added">{props.date}</span>
                </div>
                <div className="review-text" dangerouslySetInnerHTML={{ __html: props.text }}></div>
                {dateInspected ? 
                  <div className="inspected-on">
                    PROPERTY INSPECTED ON <span className="inspected-date">{moment(dateInspected).format("DD/MM/YY")}</span>
                  </div> : ""
                }
              </td>
              <td className="review-table">{reviewTable}</td>
            </tr>
            <tr className="review-table-responsive">
              <td id="responsive-review-td" width="100%">{reviewTable}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};