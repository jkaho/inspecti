import React from "react";
import SideMenu from "../../components/SideMenu";
import "./style.css";

export default function Profile() {
  return (
    <div>
      <SideMenu />
      <main className="main-profile">
        <div className="box-container">
          <h2>John Doe</h2>
        </div>
      </main>
    </div>
  );
};