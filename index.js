import React from "react";
import Weather from "./Weather";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather city="London" temperature={10} />
      <Weather city="Tokyo" temperature={14} />
      <Weather city="New York" temperature={20} />
    </div>
  );
}
