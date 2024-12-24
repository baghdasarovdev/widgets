import React from "react";
import "./App.css";
import Calendar from "./components/Calendar.tsx";
import MultiRangePicker from "./components/MultiRangePicker.tsx";

function App() {
  return (
    <div className="App">
      <MultiRangePicker />
    </div>
  );
}

export default App;
