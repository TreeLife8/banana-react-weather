import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon float-end">
      <img src={props.weatherData.icon} alt={props.weatherData.description} />
    </div>
  );
}
