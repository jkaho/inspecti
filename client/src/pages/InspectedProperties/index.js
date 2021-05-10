import React from "react";
import SideMenu from "../../components/SideMenu";
import PropertyTable from "../../components/PropertyTable";
import "./style.css";

export default function InspectedProperties() {
  return (
    <div>
      <SideMenu />
      <div className="property-container">
        <PropertyTable />
      </div>
    </div>
  );
};