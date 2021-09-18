import React, { useState } from "react";
import "./WeatherForcast.css";
import WeatherIcon from "./WeatherIcon";
import ForcastDay from "./ForcastDay";
import axios from "axios";

export default function WeatherForcast(props) {
  const [forcastData, setForcastData] = useState({ ready: false });

  function handleResponse(response) {
    setForcastData({
      ready: true,
      timestamp: response.data.daily[1].dt,
      maxTemp: Math.round(response.data.daily[1].temp.max),
      minTemp: Math.round(response.data.daily[1].temp.min),
      icon: response.data.daily[1].weather[0].icon,
    });
    console.log(response.data.daily[1]);
  }
  function search() {
    let apiKey = "2f5ed0987c11d8af0a71b4472673fde7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=${props.unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (forcastData.ready) {
    return (
      <div className="WeatherForcast">
        <div className="row">
          <div className="col-2">
            <div className="day">
              <ForcastDay timestamp={forcastData.timestamp} />
            </div>
            <div className="WeatherForcast-icon">
              <WeatherIcon code={forcastData.icon} size={35} />
            </div>
            <div className="temperatures">
              <span className="max-temp">{forcastData.maxTemp}°</span>
              <span className="min-temp">{forcastData.minTemp}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
