import React from "react";
import "./WeatherIcon.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeIonMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const codeColorMapping = {
    "01d": "gold",
    "01n": "midnightblue",
    "02d": "gold",
    "02n": "midnightblue",
    "03d": "grey",
    "03n": "midnightblue",
    "04d": "grey",
    "04n": "grey",
    "09d": "#0d6efd",
    "09n": "#0d6efd",
    "10d": "#0d6efd",
    "10n": "#0d6efd",
    "11d": "#0d6efd",
    "11n": "#0d6efd",
    "13d": "rgb(160, 160, 160)",
    "13n": "rgb(160, 160, 160)",
    "50d": "rgb(160, 160, 160)",
    "50n": "rgb(160, 160, 160)",
  };

  return (
    <div className="WeatherIcon float-end">
      <ReactAnimatedWeather
        icon={codeIonMapping[props.code]}
        color={codeColorMapping[props.code]}
        animate={true}
      />
    </div>
  );
}
