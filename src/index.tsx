import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const widgetDivs = document.querySelectorAll(".container-widget");

widgetDivs.forEach((div) => {
  const root = ReactDOM.createRoot(div);
  root.render(<App />);
});
