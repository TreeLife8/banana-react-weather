import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  return (
    <div className="WeatherSearch">
      <form className="search">
        <div className="row">
          <div className="col-4">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input tyle="submit" value="Submit" className="btn btn-control" />
          </div>
          <div className="col-3">
            <button className="btn btn-control">Current</button>
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </div>
  );
}
