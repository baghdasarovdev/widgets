import React from "react";
import "./App.css";
import FullCalendar from "./components/calendar/FullCalendar.tsx";
import YearViewCalendar from "./components/calendar/YearViewCalendar.tsx";

function App() {
  return (
    <div className="App">
      <FullCalendar />
      {/* <YearViewCalendar /> */}
    </div>
  );
}

export default App;
