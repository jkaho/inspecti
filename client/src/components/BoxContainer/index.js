import React from "react";
import "./style.css";

export default function BoxContainer(props) {
  return (
    <main className="main-container">
      <div className="box-container">
        {props.children}
      </div>
    </main>
  );
};