import React from "react";
import "./WeatherConditions.css";

export default function WeatherConditions(props) {
  return (
    <div className="WeatherConditions">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
        />
        <label className="btn btn-secondary" for="btnradio1">
          HUMIDITY
          <div className="humidity" id="humidity">
            {props.data.humidity}%
          </div>
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
        />
        <label className="btn btn-secondary" for="btnradio2">
          FEELS LIKE
          <div className="feelsLike" id="feels-like">
            {props.data.feelsLike}°
          </div>
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
        />
        <label className="btn btn-secondary" for="btnradio3">
          WINDSPEED
          <div className="windspeed" id="windspeed">
            {props.data.wind} {props.unit}
          </div>
        </label>
      </div>
    </div>
  );
}
