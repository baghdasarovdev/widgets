import React, { lazy } from "react";

const ReactDOM = lazy(() => import("react-dom/client"));

export const Hello = () => {
  return <div>Hello World</div>;
};

const el = document.querySelector("#widget-container");

if (el) {
  const root = ReactDOM.createRoot(el);
  root.render(<Hello />);
}
