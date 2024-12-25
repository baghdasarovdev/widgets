import React from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar.tsx";
import DatePickerModal from "./components/datepicker/DatePickerModal.tsx";

function App() {
  return (
    <div className="App">
      <DatePickerModal />
      {/* <Calendar /> */}
    </div>
  );
}

export default App;
