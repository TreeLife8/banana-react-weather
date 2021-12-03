import React, { useState } from "react";
import "./Search.css";
import DateTime from "./DateTime";
import axios from "axios";
import Loader from "react-loader-spinner";
import Weather from "./Weather";
import WeatherIcon from "./WeatherIcon";
import MaxMinTemps from "./MaxMinTemps";
import WeatherConditions from "./WeatherConditions";
import Temperature from "./Temperature";
import WeatherForcast from "./WeatherForcast";

export default function Search(props) {
  const [weatherData, setWeatherDate] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unitClass, setUnitClass] = useState({
    metric: "notActive",
    imperial: "isActive",
    unit: "metric",
  });
  const [units, setUnits] = useState({ speed: "km/h", temp: "C" });

  function search(unit) {
    let apiKey = `2f5ed0987c11d8af0a71b4472673fde7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchUnitChange(unit) {
    let apiKey = `2f5ed0987c11d8af0a71b4472673fde7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPosition);
  }
  function currentPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    searchCurrentWeather(lat, lon);
    console.log(lat, lon);
  }

  function searchCurrentWeather(lat, lon) {
    let unit = `metric`;
    let apiKey = `3fb188379e6ffcf616e7cdbd010c6434`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search("metric");
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function convertToFarhen(event) {
    event.preventDefault();
    let unit = "imperial";
    setUnitClass({
      metric: "isActive",
      imperial: "notActive",
      unit: "imperial",
    });
    searchUnitChange(unit);
    setUnits({ speed: "mph", temp: "F" });
  }
  function convertToCelcius(event) {
    event.preventDefault();
    let unit = "metric";
    setUnitClass({
      metric: "notActive",
      imperial: "isActive",
      unit: "metric",
    });
    searchUnitChange(unit);
    setUnits({ speed: "km/h", temp: "C" });
  }

  function handleResponse(response) {
    setWeatherDate({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="row">
          <form className="col-7" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7 form-search">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  onChange={updateCity}
                />
              </div>
              <div className="col-5 search">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-control btn-primary"
                />
              </div>
            </div>
          </form>
          <div className="col-3 form-search">
            <button onClick={searchCurrentLocation} className="btn btn-control">
              Current
            </button>
          </div>
          <div className="col-2 clearfix">
            <WeatherIcon code={weatherData.icon} />
          </div>
        </div>
        <div className="row">
          <div className="col-6 ">
            <DateTime date={weatherData.date} />
          </div>
          <div className="col-6 maxMinTemps">
            <MaxMinTemps weatherData={weatherData} unit={units.temp} />
          </div>
        </div>
        <Weather weatherData={weatherData} />
        <div className="tempUnits">
          <div className="temp">
            <Temperature temperature={weatherData.temperature} />
          </div>
          <div className="units">
            °{" "}
            <a href="/" className={unitClass.metric} onClick={convertToCelcius}>
              C
            </a>{" "}
            | °{" "}
            <a
              href="/"
              className={unitClass.imperial}
              onClick={convertToFarhen}
            >
              F
            </a>
          </div>
        </div>
        <div className="weatherConditions">
          <WeatherConditions data={weatherData} unit={units.speed} />
        </div>
        <hr />
        <WeatherForcast coord={weatherData.coord} unit={unitClass.unit} />
      </div>
    );
  } else {
    search("metric");
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Loader
          type="Rings"
          color="#5C636A"
          height={100}
          width={100}
          timeout={4000}
        />
      </div>
    );
  }
}
