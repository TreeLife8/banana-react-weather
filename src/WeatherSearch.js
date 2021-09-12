import React, { useState } from "react";
import "./WeatherSearch.css";
import DateTime from "./DateTime";
import axios from "axios";
import Loader from "react-loader-spinner";
import Weather from "./Weather";

export default function WeatherSearch() {
  const [weatherData, setWeatherDate] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherDate({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
        <Weather city={weatherData.city} />
      </div>
    );
  } else {
    let apiKey = `3fb188379e6ffcf616e7cdbd010c6434`;
    let city = `sydney`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="container row">
        <div className="col-5"></div>
        <div className="col-4">
          <Loader
            type="Puff"
            color="#757a79"
            height={200}
            width={200}
            timeout={4000}
          />
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}
