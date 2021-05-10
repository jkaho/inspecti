import React from "react";
import SideMenu from "../../components/SideMenu";
import PropertyTable from "../../components/PropertyTable";
import NavBar from "../../components/NavBar";

export default function InspectedProperties() {
  return (
    <div>
      <SideMenu />
      <PropertyTable />
    </div>
  );
};