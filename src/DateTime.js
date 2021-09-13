import React from "react";
import "./DateTime.css";

export default function DateTime(props) {
  let time = props.date;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[time.getDay()];
  let month = months[time.getMonth()];
  let hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  let min =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  let date = time.getDate();
  let year = time.getFullYear();
  return (
    <div className="DateTime">
      <ul>
        <li>Last updated:</li>
        <li className="dayTime">
          <strong>
            {day} {hour}:{min}
          </strong>
        </li>
        <li className="date">
          {date} {month} {year}
        </li>
      </ul>
    </div>
  );
}
