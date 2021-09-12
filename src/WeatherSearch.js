import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
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
          <
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
