import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1 className="city">{props.weatherData.city}</h1>
      <h6 className="description">{props.weatherData.description}</h6>
    </div>
  );
}
