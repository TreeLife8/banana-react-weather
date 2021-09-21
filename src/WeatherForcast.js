import React, { useState } from "react";
import "./WeatherForcast.css";

import ForcastDay from "./ForcastDay";
import axios from "axios";

export default function WeatherForcast(props) {
  const [forcastData, setForcastData] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForcastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForcast">
        <div className="row">
          {forcastData.map(function (dailyForcast, index) {
            return (
              <div className="col-2">
                <ForcastDay data={forcastData[dailyForcast]} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "2f5ed0987c11d8af0a71b4472673fde7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=${props.unit}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
