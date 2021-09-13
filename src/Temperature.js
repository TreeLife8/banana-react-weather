import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2 className="temperature">{props.temperature}</h2>
    </div>
  );
}
