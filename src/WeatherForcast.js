import React, { useState, useEffect } from "react";
import "./WeatherForcast.css";

import ForcastDay from "./ForcastDay";
import axios from "axios";

export default function WeatherForcast(props) {
  const [forcastData, setForcastData] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord, props.unit]);

  function load() {
    let apiKey = "2f5ed0987c11d8af0a71b4472673fde7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=${props.unit}`;
    axios.get(apiUrl).then(handleResponse);
    return <div className="text-center">Loading...🌞🌧⛅🌫🌜</div>;
  }
  function handleResponse(response) {
    setForcastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForcast">
        <div className="row">
          {forcastData.map(function (dailyForcast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col-sm" key={index}>
                  <ForcastDay data={dailyForcast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
