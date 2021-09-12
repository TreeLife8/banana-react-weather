import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1 className="city">{props.city}</h1>
    </div>
  );
}
