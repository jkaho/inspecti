import React, { useState, useEffect } from "react";
// import KingBedIcon from "@material-ui/icons/KingBed";
// import BathtubIcon from "@material-ui/icons/Bathtub";
// import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
// import SquareFootIcon from "@material-ui/icons/SquareFoot";
import "./style.css";
import propertiesAPI from "../../utils/propertiesAPI";
// Moment.js
import moment from "moment";

export default function ReviewCard(props) {
  const [dateInspected, setDateInspected] = useState();

  useEffect(() => {
    if (props.propertyId) {
      propertiesAPI.getOneProperty(props.propertyId)
      .then(res => setDateInspected(res.data.dateInspected))
      .catch(err => console.log(err));
    }
  }, []);

  return (
    <div> 
      <div className="review-card">
        <table className="review-address-table">
          <tbody>
            <tr>
              <td>{props.address}</td>
              <td style={{ textAlign: "right" }}>
                {/* <KingBedIcon />&nbsp;4
                <BathtubIcon />&nbsp;2
                <DirectionsCarIcon />&nbsp;2
                <SquareFootIcon />&nbsp;761m² */}
                <i className="fas fa-bed"></i>&nbsp;
                <span className="num-beds">{props.beds ? props.beds : "-"}</span>&nbsp;&nbsp;
                <i className="fas fa-shower"></i>&nbsp;
                <span className="num-baths">{props.baths ? props.baths : "-"}</span>&nbsp;&nbsp;
                <i className="fas fa-car"></i>&nbsp;
                <span className="num-cars">{props.cars ? props.cars : "-"}</span>&nbsp;&nbsp;
                <i className="fas fa-ruler-combined"></i>&nbsp;
                <span className="num-land">{props.land ? props.land : "- "}m²</span>&nbsp;&nbsp;
              </td>
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
                <div className="review-text" dangerouslySetInnerHTML={{ __html: props.text }}>
                  {/* One of the best homes I've ever been to. They did a great job with the  
                  interior design. Garden is fantastically landscaped.<br/><br/>
                  Also, the agents, Vanessa and Charlie from Northen Real Estate, are really friendly! */}
                  {/* {props.text} */}
                </div>
                {dateInspected ? 
                  <div className="inspected-on">
                    PROPERTY INSPECTED ON <span className="inspected-date">{moment(dateInspected).format("DD/MM/YY")}</span>
                  </div> : ""
                }
              </td>
              <td>
                <table className="review-rating-table">
                  <tbody>
                    <tr>
                      <td className="review-criteria">Property condition</td>
                      <td className="review-score">
                        <span className="score">{props.propertyConditionRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Potential to capitalise</td>
                      <td className="review-score">
                        <span className="score">{props.potentialRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Surroundings</td>
                      <td className="review-score">
                        <span className="score">{props.surroundingsRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Consistency with neighbours</td>
                      <td className="review-score">
                        <span className="score">{props.neighbourComparisonRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Accessibility</td>
                      <td className="review-score">
                        <span className="score">{props.accessibilityRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Privacy</td>
                      <td className="review-score">
                        <span className="score">{props.privacyRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Floorplan</td>
                      <td className="review-score">
                        <span className="score">{props.floorplanRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Outdoor space</td>
                      <td className="review-score">
                        <span className="score">{props.outdoorSpaceRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Indoor-to-outdoor flow</td>
                      <td className="review-score">
                        <span className="score">{props.indoorOutdoorFlowRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Natural light</td>
                      <td className="review-score">
                        <span className="score">{props.naturalLightRating}</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};