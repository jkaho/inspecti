import React from "react";
import SideMenu from "../../components/SideMenu";
import "./style.css";

export default function Profile() {
  return (
    <div>
      <SideMenu />
      <main className="main-profile">
        <div className="box-container">
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
                            <div className="user-name user-text">SAM BOONEY</div>
                            <div className="user-suburb user-text">Redfern, NSW</div>
                            <div className="user-email user-text">s.booney88@gmail.com</div>
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
                    chart.js goes here
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};