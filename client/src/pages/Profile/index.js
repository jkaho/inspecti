// React
import React, { useState, useEffect } from "react";
// Child components
import BoxContainer from "../../components/BoxContainer";
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
import SideMenu from "../../components/SideMenu";
// CSS
import "./style.css";
// Images
import longOneIcon from "../../images/long-1.png";
import longTwoIcon from "../../images/long-2.png";
import longThreeIcon from "../../images/long-3.png";
import longFourIcon from "../../images/long-4.png";
import longFiveIcon from "../../images/long-5.png";
import shortOneIcon from "../../images/short-1.png";
import shortTwoIcon from "../../images/short-2.png";
import shortThreeIcon from "../../images/short-3.png";
import shortFourIcon from "../../images/short-4.png";
import shortFiveIcon from "../../images/short-5.png";
// Chart.js
import { Bar, Pie } from 'react-chartjs-2';
// Moment.js
import moment from "moment";
// API routes
import authenticationAPI from "../../utils/authenticationAPI";
import eventsAPI from "../../utils/eventsAPI";
import propertiesAPI from "../../utils/propertiesAPI";
import Tooltip from "@material-ui/core/Tooltip";

// For dynamic chart data
const recentMonths = {
  sixMonthsAgo: moment().add(-6, "M"),
  fiveMonthsAgo: moment().add(-5, "M"),
  fourMonthsAgo: moment().add(-4, "M"),
  threeMonthsAgo: moment().add(-3, "M"),
  twoMonthsAgo: moment().add(-2, "M"),
  oneMonthAgo: moment().add(-1, "M"),
  thisMonth: moment()
};

export default function Profile() {
  // States
  const [iconState, setIconState] = useState("short");
  const [priceChartState, setPriceChartState] = useState({});
  const [propertyChartState, setPropertyChartState] = useState({});
  const [numPropertiesInspected, setNumPropertiesInspected] = useState();
  const [numInspectionsScheduled, setNumInspectionsScheduled] = useState();
  const [numAuctionsAttended, setNumAuctionsAttended] = useState();
  const [numAuctionsScheduled, setNumAuctionsScheduled] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [page, setPage] = useState("inspections");
  const [popup, setPopup] = useState({ open: false, type: "", severity: "error", message: "" });

  // Initial render
  useEffect(() => {
    let monthlyPropertyData = [[], [], [], [], [], [], []];
    let priceData = [[], [], [], [], [], []];
    let attendedAuctions = [];

    authenticationAPI.authenticated()
      .then(res => {
        setUserInfo(res.data);
        initialiseIcon(res.data.email);
        propertiesAPI.getAllProperties()
        .then(res => {
          setNumPropertiesInspected(res.data.length);
          res.data.forEach(item => {
            let monthYearInspected = moment(item.dateInspected).format("MMYY");
            if (monthYearInspected === recentMonths.sixMonthsAgo.format("MMYY")) {
              monthlyPropertyData[0].push(item);
            } else if (monthYearInspected === recentMonths.fiveMonthsAgo.format("MMYY")) {
              monthlyPropertyData[1].push(item);
            } else if (monthYearInspected === recentMonths.fourMonthsAgo.format("MMYY")) {
              monthlyPropertyData[2].push(item);
            } else if (monthYearInspected === recentMonths.threeMonthsAgo.format("MMYY")) {
              monthlyPropertyData[3].push(item);
            } else if (monthYearInspected === recentMonths.twoMonthsAgo.format("MMYY")) {
              monthlyPropertyData[4].push(item);
            } else if (monthYearInspected === recentMonths.oneMonthAgo.format("MMYY")) {
              monthlyPropertyData[5].push(item);
            } else {
              monthlyPropertyData[6].push(item);
            } 

            if (item.attendedAuction === true) {
              attendedAuctions.push(item);
            }

            if (item.soldPrice && item.hadAuction !== null) {
              if (item.soldPrice < 1000000) {
                priceData[0].push(item);
              } else if (item.soldPrice >= 1000000 && item.soldPrice < 2000000) {
                priceData[1].push(item);
              } else if (item.soldPrice >= 2000000 && item.soldPrice < 3000000) {
                priceData[2].push(item);
              } else if (item.soldPrice >= 3000000 && item.soldPrice < 4000000) {
                priceData[3].push(item);
              } else if (item.soldPrice >= 4000000 && item.soldPrice < 5000000) {
                priceData[4].push(item);
              } else {
                priceData[5].push(item);
              }
            }
          });
  
          setNumAuctionsAttended(attendedAuctions.length);
          setPropertyChartState({
            labels: [
              recentMonths.sixMonthsAgo.format("MMM"),
              recentMonths.fiveMonthsAgo.format("MMM"),
              recentMonths.fourMonthsAgo.format("MMM"),
              recentMonths.threeMonthsAgo.format("MMM"),
              recentMonths.twoMonthsAgo.format("MMM"),
              recentMonths.oneMonthAgo.format("MMM"),
              recentMonths.thisMonth.format("MMM")
            ],
            datasets: [
              {
                label: 'Number of properties',
                backgroundColor: 'rgb(99, 148, 238)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 2,
                data: [
                  monthlyPropertyData[0].length,
                  monthlyPropertyData[1].length, 
                  monthlyPropertyData[2].length, 
                  monthlyPropertyData[3].length, 
                  monthlyPropertyData[4].length,
                  monthlyPropertyData[5].length,
                  monthlyPropertyData[6].length
                ]
              }
            ]
          });

          setPriceChartState({
            labels: ["<$1m", "$1-2m", "$2-3m", "$3-4m", "$4-$5m", "$5m+"],
            datasets: [
              {
                label: 'Sold price',
                backgroundColor: [
                  "rgb(236, 91, 135)",
                  "rgb(166, 91, 236)",
                  "rgb(57, 201, 182)",
                  "rgb(236, 185, 91)",
                  "rgb(91, 130, 236)",
                  "rgb(236, 137, 91)"
                ],
                hoverBackgroundColor: [
                  "rgb(236, 91, 135, 0.5)",
                  "rgb(166, 91, 236, 0.5)",
                  "rgb(57, 201, 182, 0.5)",
                  "rgb(236, 185, 91, 0.5)",
                  "rgb(91, 130, 236, 0.5)",
                  "rgb(236, 137, 91, 0.5)"
                ],
                borderColor: 'rgba(0, 0, 0, 1)',
                data: [
                  priceData[0].length,
                  priceData[1].length,
                  priceData[2].length,
                  priceData[3].length,
                  priceData[4].length,
                  priceData[5].length,
                ]
              }
            ]
          });
  
          eventsAPI.getAllEvents()
            .then(res => {
              let inspectionEvents = [];
              let auctionEvents = [];
              res.data.forEach(item => {
                if (item.eventType === "Inspection") {
                  inspectionEvents.push(item);
                } else {
                  auctionEvents.push(item);
                }
              });
              setNumInspectionsScheduled(inspectionEvents.length);
              setNumAuctionsScheduled(auctionEvents.length);
            })
            .catch(err => {
              console.log(err);
              setPopup({ 
                open: true, type: "error", severity: "error", 
                message: "An error was encountered while retrieving data. Please try again later." 
              });
            });
        })
        .catch(err => {
          console.log(err);
          setPopup({ 
            open: true, type: "error", severity: "error", 
            message: "An error was encountered while retrieving data. Please try again later." 
          });
        });
      })
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while retrieving data. Please try again later." 
        });
      });
  }, []);

  // Inspected properties bar chart
  function PropertiesChart() {
    return (
      <div>
        <Bar
          data={propertyChartState}
          options={{
            responsive: true,
            plugins: {
              // title: {
              //   display: true,
              //   text: "Total number of sold inspected properties in each price range",
              //   fontSize: 20
              // },
              legend: {
                display: true,
                position: "bottom"
              },
            }
          }}
        />
      </div>
    )
  };

  // Auction sold prices pie chart
  function PriceChart() {
    return (
      <div>
        <Pie
          data={priceChartState}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              // title: {
              //   display: true,
              //   text: "Total number of sold inspected properties in each price range",
              //   fontSize: 20
              // },
              legend: {
                display: true,
                position: "bottom"
              }
            }
          }}
        />
      </div>
    )
  };

  function initialiseIcon(userEmail) {
    var userIcon = localStorage.getItem(userEmail);
    if (userIcon !== null) {
        setIconState(userIcon);
    }
  };

  const handleIconClick = () => {
    if (iconState === "short-1") {
      setIconState("long-1");
      localStorage.setItem(userInfo.email, "long-1");
    } else if (iconState === "long-1") {
      setIconState("short-2");
      localStorage.setItem(userInfo.email, "short-2");
    } else if (iconState === "short-2") {
      setIconState("long-2");
      localStorage.setItem(userInfo.email, "long-2");
    } else if (iconState === "long-2") {
      setIconState("short-3");
      localStorage.setItem(userInfo.email, "short-3");
    } else if (iconState === "short-3") {
      setIconState("long-3");
      localStorage.setItem(userInfo.email, "long-3");
    } else if (iconState === "long-3") {
      setIconState("short-4");
      localStorage.setItem(userInfo.email, "short-4");
    } else if (iconState === "short-4") {
      setIconState("long-4");
      localStorage.setItem(userInfo.email, "long-4");
    } else if (iconState === "long-4") {
      setIconState("short-5");
      localStorage.setItem(userInfo.email, "short-5");
    } else if (iconState === "short-5") {
      setIconState("long-5");
      localStorage.setItem(userInfo.email, "long-5");
    } else {
      setIconState("short-1");
      localStorage.setItem(userInfo.email, "short-1");
    }
  };

  const handlePopupClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPopup({ open: false, type: "", severity: "", message: ""});
  };

  return (
    <div>
      <SideMenu />
      <BoxContainer>
          <table className="profile-table">
            <tbody>
              <tr className="info-tr">
                <td className="info-td" colSpan="2">
                  <div className="user-info">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Tooltip title="Click to change">
                              <img src={
                                iconState === "short-1" ? shortOneIcon : 
                                iconState === "long-1" ? longOneIcon : 
                                iconState === "short-2" ? shortTwoIcon :
                                iconState === "long-2" ? longTwoIcon :
                                iconState === "short-3" ? shortThreeIcon :
                                iconState === "long-3" ? longThreeIcon :
                                iconState === "short-4" ? shortFourIcon :
                                iconState === "long-4" ? longFourIcon :
                                iconState === "short-5" ? shortFiveIcon :
                                iconState === "long-5" ? longFiveIcon :
                                shortOneIcon
                              }
                                onClick={handleIconClick}
                                style={{ width: "100px", cursor: "pointer" }} alt="Graphic user icon of person with short hair"
                              />
                            </Tooltip>
                            {/* <i className="fas fa-user-circle" style={{ fontSize: "100px" }}></i> */}
                          </td>
                          <td>
                            <div className="user-name user-text">
                              { userInfo.firstName ? `${userInfo.firstName.toUpperCase()} ${userInfo.lastName.toUpperCase()}` : ""}
                            </div>
                            {/* <div className="user-suburb user-text">Redfern, NSW</div> */}
                            <div className="user-email user-text">
                              {userInfo.email}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="notif-bell"></div>
                </td>
              </tr>
              <tr className="stat-toggle-tr">
                <td width="50%" 
                  className="inspection-stat-toggle"
                >
                  <button 
                    id={page === "inspections" ? "selected-toggle" : ""}
                    onClick={() => setPage("inspections")}>
                    INSPECTION STATS
                  </button>
                </td>
                <td width="50%" 
                  className="auction-stat-toggle"
                >                  
                  <button 
                    id={page === "auctions" ? "selected-toggle" : ""}
                    onClick={() => setPage("auctions")}>
                    AUCTION STATS
                  </button>
                </td>
              </tr>
              <tr className="stat-tr">
                <td className="stat-td" colSpan="2">
                  <div className="stat-container">
                    <div className="stat-bubble">
                      <div className="num-inspections">
                        TOTAL<br/>
                        <span className="large-num">
                          {page === "inspections" ? numPropertiesInspected : numAuctionsAttended}
                          </span><br/>
                        {
                          page === "inspections" ? 
                          numPropertiesInspected !== 1 ?
                          "PROPERTIES INSPECTED" : "PROPERTY INSPECTED" : 
                          numAuctionsAttended !== 1 ? 
                          "AUCTIONS ATTENDED" : "AUCTION ATTENDED"
                        }
                      </div>
                      {/* <div className="inspection-type-num">
                        20 for sale | 4 for lease
                      </div> */}
                    </div>
                    <div className="stat-bubble">
                      <div className="num-inspections">
                        TOTAL<br/>
                        <span className="large-num">
                          {page === "inspections" ? numInspectionsScheduled : numAuctionsScheduled}
                        </span><br/>
                        {
                          page === "inspections" ?
                          numInspectionsScheduled !== 1 ?
                          "INSPECTIONS SCHEDULED" : "INSPECTION SCHEDULED" : 
                          numAuctionsScheduled !== 1 ? 
                          "AUCTIONS SCHEDULED" : "AUCTION SCHEDULED"                        
                        }
                      </div>
                      {/* <div className="inspection-type-num">
                        5 for sale | 1 for lease
                      </div> */}
                    </div>
                  </div>
                  <hr className="stats-hr" />
                  <div className="chart-section">
                    {
                      page === "inspections" ?
                      <h3>Properties viewed in the past 6 months</h3> : 
                      <h3>Property sold prices</h3>
                    }
                    <div className="chart-container">
                      {page === "inspections" ? <PropertiesChart /> : <PriceChart />} 
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      </BoxContainer>
      <Popup 
        handleClose={handlePopupClose}
        open={popup.open}
        message={popup.message}
        severity={popup.severity}
      />
    </div>
  );
};