import logo from "./logo.svg";
import "./App.css";

function App() {
  const currentYear = new Date().getFullYear(); //императивный стиль

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Current Year: {currentYear}</p>
      </header>
    </div>
  ); //декларативный стиль
}

export default App;
