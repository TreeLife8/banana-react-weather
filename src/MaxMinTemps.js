import React from "react";
import "./MaxMinTemps.css";

export default function MaxMinTemps(props) {
  return (
    <div className="MaxMinTemps">
      <ul>
        <li>
          Max temp: {props.weatherData.maxTemp}°{props.unit}
        </li>
        <li>
          Min temp: {props.weatherData.minTemp}°{props.unit}
        </li>
      </ul>
    </div>
  );
}
