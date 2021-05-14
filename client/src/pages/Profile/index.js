import React, { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import BoxContainer from "../../components/BoxContainer";
import "./style.css";
import { Bar } from 'react-chartjs-2';
import moment from "moment";
import propertiesAPI from "../../utils/propertiesAPI";

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
  const [state, setState] = useState({});

  useEffect(() => {
    let monthlyData = [[], [], [], [], [], [], []];
    propertiesAPI.getAllProperties()
      .then(res => {
        res.data.forEach(item => {
          let monthYearInspected = moment(item.dateInspected).format("MMYY");
          if (monthYearInspected === recentMonths.sixMonthsAgo.format("MMYY")) {
            monthlyData[0].push(item);
          } else if (monthYearInspected === recentMonths.fiveMonthsAgo.format("MMYY")) {
            monthlyData[1].push(item);
          } else if (monthYearInspected === recentMonths.fourMonthsAgo.format("MMYY")) {
            monthlyData[2].push(item);
          } else if (monthYearInspected === recentMonths.threeMonthsAgo.format("MMYY")) {
            monthlyData[3].push(item);
          } else if (monthYearInspected === recentMonths.twoMonthsAgo.format("MMYY")) {
            monthlyData[4].push(item);
          } else if (monthYearInspected === recentMonths.oneMonthAgo.format("MMYY")) {
            monthlyData[5].push(item);
          } else {
            monthlyData[6].push(item);
          } 
        });

        setState({
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
                monthlyData[0].length,
                monthlyData[1].length, 
                monthlyData[2].length, 
                monthlyData[3].length, 
                monthlyData[4].length,
                monthlyData[5].length,
                monthlyData[6].length
              ]
            }
          ]
        })
      })
      .catch(err => console.log(err));
  }, []);

  function PropertiesChart() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: 'Properties inspected in the past 6 months',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
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
                              {`${props.info.firstName.toUpperCase()} ${props.info.lastName.toUpperCase()}`}
                            </div>
                            {/* <div className="user-suburb user-text">Redfern, NSW</div> */}
                            <div className="user-email user-text">
                              {props.info.email}
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
                  <button>INSPECTION STATS</button>
                </td>
                <td className="auction-stat-toggle" width="50%">
                  <button>AUCTION STATS</button>
                </td>
              </tr>
              <tr className="stat-tr">
                <td className="stat-td" colSpan="2">
                  <div className="stat-container">
                    <div className="stat-bubble">
                      <div className="num-inspections">
                        <span className="large-num">24</span><br/>PROPERTIES INSPECTED
                      </div>
                      <div className="inspection-type-num">
                        20 for sale | 4 for lease
                      </div>
                    </div>
                    <div className="stat-bubble">
                      <div className="num-inspections">
                        <span className="large-num">6</span><br/>INSPECTIONS SCHEDULED
                      </div>
                      <div className="inspection-type-num">
                        5 for sale | 1 for lease
                      </div>
                    </div>
                  </div>
                  <div className="chart-container">
                    <PropertiesChart />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      </BoxContainer>
    </div>
  );
};