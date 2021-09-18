import React from "react";
import "./ForcastDay.css";

export default function ForcastDay(props) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let time = new Date(props.timestamp);
  let day = days[time.getDay()];
  return <div className="ForcastDay">{day}</div>;
}
