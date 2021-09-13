import React from "react";
import "./Weather.css";

export default function Weather(props) {
  console.log(props);
  return (
    <div className="Weather">
      <h1 className="city">{props.weatherData.city}</h1>
    </div>
  );
}
