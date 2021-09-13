import React from "react";
import "./MaxMinTemps.css";

export default function MaxMinTemps(props) {
  return (
    <div className="MaxMinTemps">
      <ul>
        <li>Max temp: {props.weatherData.maxTemp}°C</li>
        <li>Min temp: {props.weatherData.minTemp}°C</li>
      </ul>
    </div>
  );
}
