import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch city="Sydney" />
      </header>
      <footer>
        This was coded by{" "}
        <a
          href="https://www.linkedin.com/in/regina-maher-ecs/"
          target="_blank"
          rel="noreferrer"
        >
          Regina Maher
        </a>{" "}
        and is{" "}
        <a href="https://github.com/TreeLife8" target="_blank" rel="noreferrer">
          open-source on GitHub
        </a>
      </footer>
    </div>
  );
}
