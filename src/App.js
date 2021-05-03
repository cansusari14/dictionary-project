import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="info">
          coded by{" "}
          <a href="https://github.com/cansusari14/dictionary-project">
            cansusari
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
