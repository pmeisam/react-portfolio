import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App/App";
import { HashRouter } from "react-router-dom";
import ThemeProvider from "./Context/ThemeContext";

ReactDOM.render(
  <HashRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);
