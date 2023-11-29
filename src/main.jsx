import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayerState from "./context/PlayerContext/PlayerState.jsx";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/KappamusicFrontend">
    <PlayerState>
      <SnackbarProvider
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        maxSnack={1}
      >
        <App />
      </SnackbarProvider>
    </PlayerState>
  </BrowserRouter>
);
