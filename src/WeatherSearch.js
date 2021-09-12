import React, { useState } from "react";
import "./WeatherSearch.css";
import DateTime from "./DateTime";
import axios from "axios";

export default function WeatherSearch() {
  const [weatherData, setWeatherDate] = useState({ ready: false });
  function handleResponse(event) {
    setWeatherDate({
      ready: true,
      // city:
    });
    console.log(response.data);
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form className="search">
          <div className="row">
            <div className="col-4 form-search">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3 form-search">
              <input type="submit" value="Search" className="btn btn-control" />
            </div>
            <div className="col-3 form-search">
              <button className="btn btn-control">Current</button>
            </div>
            <div className="col-2">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="weather icon"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <DateTime />
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    );
  } else {
    let apiKey = `3fb188379e6ffcf616e7cdbd010c6434`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
