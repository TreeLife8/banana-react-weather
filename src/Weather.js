import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1 className="city">{props.weatherData.city}</h1>
      <h6 className="description">{props.weatherData.description}</h6>
      <h2 className="temperature">{props.weatherData.temperature}</h2>
      <div className="units">
        °<a href="/">C</a> | <a href="/">°F</a>
      </div>
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
            {props.weatherData.humidity}%
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
            {props.weatherData.feelsLike}°
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
            {props.weatherData.wind} km/h
          </div>
        </label>
      </div>
    </div>
  );
}
