import React from "react";
import "./ForcastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function ForcastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let time = new Date(props.data.dt * 1000);
    let day = days[time.getDay()];
    return day;
  }
  return (
    <div className="ForcastDay">
      <div className="day">{day()}</div>
      <div className="WeatherForcast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
      </div>
      <div className="temperatures">
        <span className="max-temp">{maxTemp()}</span>
        <span className="min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
