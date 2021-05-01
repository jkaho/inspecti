import React from "react";
// import KingBedIcon from "@material-ui/icons/KingBed";
// import BathtubIcon from "@material-ui/icons/Bathtub";
// import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
// import SquareFootIcon from "@material-ui/icons/SquareFoot";
import "./style.css";

export default function ReviewCard(props) {
  return (
    <div> 
      <div className="review-card">
        <table className="review-address-table">
          <tbody>
            <tr>
              <td>25 Great Pl Sydney, NSW 2000</td>
              <td style={{ textAlign: "right" }}>
                {/* <KingBedIcon />&nbsp;4
                <BathtubIcon />&nbsp;2
                <DirectionsCarIcon />&nbsp;2
                <SquareFootIcon />&nbsp;761m² */}
                <i className="fas fa-bed"></i>&nbsp;
                <span className="num-beds">4</span>&nbsp;&nbsp;
                <i className="fas fa-shower"></i>&nbsp;
                <span className="num-baths">2</span>&nbsp;&nbsp;
                <i className="fas fa-car"></i>&nbsp;
                <span className="num-cars">2</span>&nbsp;&nbsp;
                <i className="fas fa-ruler-combined"></i>&nbsp;
                <span className="num-land">761m²</span>&nbsp;&nbsp;
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
                  width: "300px",
                  paddingRight: "20px",
                  borderRight: "1px solid rgb(241, 241, 241)"
                  }}>
                <div className="review-content-title">
                  <h3>Amazing home!</h3>
                </div>
                <div className="review-creator">
                  <span className="review-author">James Lee</span>&nbsp;
                  <span className="review-added">14/04/21</span>
                </div>
                <div className="review-text">
                  One of the best homes I've ever been to. They did a great job with the  
                  interior design. Garden is fantastically landscaped.<br/><br/>
                  Also, the agents, Vanessa and Charlie from Northen Real Estate, are really friendly!
                </div>
                <div className="inspected-on">
                  PROPERTY INSPECTED ON <span className="inspected-date">12/04/21</span>
                </div>
              </td>
              <td>
                <table className="review-rating-table">
                  <tbody>
                    <tr>
                      <td className="review-criteria">Property condition</td>
                      <td className="review-score">
                        <span className="score">5</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Potential to capitalise</td>
                      <td className="review-score">
                        <span className="score">5</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Surroundings</td>
                      <td className="review-score">
                        <span className="score">5</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Consistency with neighbours</td>
                      <td className="review-score">
                        <span className="score">5</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Accessibility</td>
                      <td className="review-score">
                        <span className="score">5</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Privacy</td>
                      <td className="review-score">
                        <span className="score">5</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Floorplan</td>
                      <td className="review-score">
                        <span className="score">5</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Outdoor space</td>
                      <td className="review-score">
                        <span className="score">5</span>
                        <span className="out-of">/5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="review-criteria">Indoor-to-outdoor flow</td>
                      <td className="review-score">
                        <span className="score">5</span>
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