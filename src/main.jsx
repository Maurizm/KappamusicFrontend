import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayerState from "./context/PlayerContext/PlayerState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/KappamusicFrontend">
    <PlayerState>
      <App />
    </PlayerState>
  </BrowserRouter>
);
