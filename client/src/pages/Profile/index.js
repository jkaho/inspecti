import React, { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import BoxContainer from "../../components/BoxContainer";
import "./style.css";
import { Bar } from 'react-chartjs-2';
import moment from "moment";
import propertiesAPI from "../../utils/propertiesAPI";
import eventsAPI from "../../utils/eventsAPI";
import authenticationAPI from "../../utils/authenticationAPI";

const recentMonths = {
  sixMonthsAgo: moment().add(-6, "M"),
  fiveMonthsAgo: moment().add(-5, "M"),
  fourMonthsAgo: moment().add(-4, "M"),
  threeMonthsAgo: moment().add(-3, "M"),
  twoMonthsAgo: moment().add(-2, "M"),
  oneMonthAgo: moment().add(-1, "M"),
  thisMonth: moment()
}


export default function Profile(props) {
  const [propertyChartState, setPropertyChartState] = useState({});
  const [numPropertiesInspected, setNumPropertiesInspected] = useState();
  const [numInspectionsScheduled, setNumInspectionsScheduled] = useState();
  const [numAuctionsAttended, setNumAuctionsAttended] = useState();
  const [numAuctionsScheduled, setNumAuctionsScheduled] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [page, setPage] = useState("inspections");

  useEffect(() => {
    let monthlyPropertyData = [[], [], [], [], [], [], []];
    let attendedAuctions = [];

    authenticationAPI.authenticated()
      .then(res => {
        setUserInfo(res.data);
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
                label: 'Properties',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
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
  
          eventsAPI.getAllEvents()
            .then(res => {
              console.log(res)
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
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err))
  }, []);

  function PropertiesChart() {
    return (
      <div>
        <Bar
          data={propertyChartState}
          options={{
            title: {
              display: true,
              text: 'Properties inspected in the past 6 months',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
    )
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
                            <i className="fas fa-user-circle" style={{ fontSize: "100px" }}></i>
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
                <td className="inspection-stat-toggle" width="50%">
                  <button onClick={() => setPage("inspections")}>INSPECTION STATS</button>
                </td>
                <td className="auction-stat-toggle" width="50%">
                  <button onClick={() => setPage("auctions")}>AUCTION STATS</button>
                </td>
              </tr>
              <tr className="stat-tr">
                <td className="stat-td">
                  <div className="stat-container">
                    <div className="stat-bubble">
                      <div className="num-inspections">
                        TOTAL<br/>
                        <span className="large-num">
                          {page === "inspections" ? numPropertiesInspected : numAuctionsAttended}
                          </span><br/>
                        {
                          page === "inspections" ? 
                          numPropertiesInspected > 1 ?
                          "PROPERTIES INSPECTED" : "PROPERTY INSPECTED" : 
                          ""
                          // numAuctionsScheduled > 1 ? 
                          // "AUCTIONS ATTENDED" : "AUCTION ATTENDED"
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
                          numInspectionsScheduled > 1 ?
                          "INSPECTIONS SCHEDULED" : "INSPECTION SCHEDULED" : 
                          numAuctionsScheduled > 1 ? 
                          "AUCTIONS SCHEDULED" : "AUCTION SCHEDULED"                        
                        }
                      </div>
                      {/* <div className="inspection-type-num">
                        5 for sale | 1 for lease
                      </div> */}
                    </div>
                  </div>
                </td>
                <td className="chart-td">
                  <div className="chart-container">
                    {page === "inspections" ? <PropertiesChart /> : ""} 
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      </BoxContainer>
    </div>
  );
};