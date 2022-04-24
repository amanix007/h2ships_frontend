import React from "react";
import * as ReactDOM from "react-dom/client";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css";
import "aos/dist/aos.css";


import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";

const node = document.getElementById("root");

ReactDOM.createRoot(node).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
