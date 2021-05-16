// React
import React from "react";
// Material Design 
import Typography from "@material-ui/core/Typography";
// CSS 
import "./style.css";

export default function InfographicCard(props) {
  const img = props.src;
  
  return (
    <div className="infographic-card">
      <div className="infographic-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="infographic-text">
        <h3 className="infographic-title">
          {props.title}
        </h3>
        <Typography variant="body1" align="center">
          {props.text}
        </Typography>
      </div>
    </div>
  );
};