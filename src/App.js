import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch />
      </header>
      <footer>
        This was coded by{" "}
        <a href="https://www.linkedin.com/in/regina-maher-ecs/">Regina Maher</a>{" "}
        and is <a href="https://github.com/TreeLife8">open-source on GitHub</a>
      </footer>
    </div>
  );
}
