import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const widgetDivs = document.querySelectorAll(".container-widget");

widgetDivs.forEach((div) => {
  ReactDOM.render(<App />, div);
});

// const root = ReactDOM.createRoot(
//   document.getElementById("widget-container") as HTMLElement
// );
// root.render(<App />);
