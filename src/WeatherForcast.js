import React, { useState } from "react";
import "./WeatherForcast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForcast(props) {
  const [forcastData, setForcastData] = useState("");
  // function handleResponse(response) {
  //   console.log(response.data.daily[0].temp.max);
  //   setForcastData({
  //     maxTemp: Math.round(response.data.daily[0].temp.max),
  //     minTemp: Math.round(response.data.daily[0].temp.min),
  //   });
  // }
  // let apiKey = "2f5ed0987c11d8af0a71b4472673fde7";
  // // let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=${props.unit}`;
  // axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col-2">
          <div className="day">Thu</div>
          <div className="WeatherForcast-icon">
            <WeatherIcon code="01d" size={35} />
          </div>
          <div className="temperatures">
            <span className="max-temp">{forcastData.maxTemp}</span>°
            <span className="min-temp">{forcastData.minTemp}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
