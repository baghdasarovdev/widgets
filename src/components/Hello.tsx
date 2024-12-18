import React from "react";
import { createRoot } from "react-dom/client";

export const Hello = () => {
  return <div>Hello World</div>;
};

const el = document.querySelector("#widget-container");

if (el) {
  const root = createRoot(el);
  root.render(<Hello />);
}
