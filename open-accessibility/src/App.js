import "./App.css";

import logo from "./logo.svg";
import { sendMsg } from "./util/tabMessaging";

function App() {
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
        <button
          onClick={() => {
            sendMsg({ title: "Hello World!" });
          }}
        >
          Test Content Script
        </button>
      </header>
    </div>
  );
}

export default App;
