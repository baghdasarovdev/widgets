import React from "react";
import "./App.css";
import FullCalendar from "./components/calendar/FullCalendar.tsx";
import Calendar from "./components/calendar/Calendar.tsx";
import DatePickerModal from "./components/datepicker/DatePickerModal.tsx";

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
