import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import DatePicker from "react-datepicker";
import { durationDays, monthsOptions } from "./constant.ts";
const cssText = require("react-datepicker/dist/react-datepicker.css");

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [calendarCount, setCalendarCount] = useState<number>(1);

  const handleSelectDates = (dates) => {
    setStartDate(null);
    if (!startDate) {
      setStartDate(dates);
    } else {
      const date1 = new Date(startDate);
      const date2 = new Date(dates);
      const duration = durationDays(date1, date2);

      let className = `react-datepicker__day--highlighted-custom`;

      const checkDate = new Date(startDate);
      const endDate = new Date(dates);

      const updatedRanges = duration.map((date, i) => {
        let rangeObject = { [className]: [date] };

        if (date.getTime() === checkDate.getTime()) {
          const newClassName = `${className} start`;
          rangeObject = { [newClassName]: [date] };
        } else if (endDate.getTime() === date.getTime()) {
          const newClassName = `${className} end`;
          rangeObject = { [newClassName]: [date] };
        }
        return rangeObject;
      });

      setSelectedDates((prev) => [...prev, ...updatedRanges]);
    }
  };

  return (
    <div className="custom_calendar">
      <select onChange={(e) => setCalendarCount(Number(e.target.value))}>
        {monthsOptions.map(({ title, value }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
      <DatePicker
        highlightDates={selectedDates}
        onChange={(date) => handleSelectDates(date)}
        monthsShown={calendarCount}
        inline
        icon={null}
      />
    </div>
  );
};

export default Calendar;

const el = document.querySelectorAll(".container-widget");

if (el) {
  el.forEach((div) => {
    const root = ReactDOM.createRoot(div);
    root.render(<Calendar />);
  });
}

const css = `
.custom_calendar {
  display: flex;
  flex-direction: column;
  border: 1px solid silver;
  padding: 20px;
  border-radius: 5px;
}

.custom_calendar select {
  padding: 7px;
  padding-right: 2.5em;
  border-radius: 50px;
  align-self: flex-end;
  margin-bottom: 30px;
}

.custom_calendar .react-datepicker__day {
  background-color: green;
  color: white !important;
  font-weight: bold;
  margin: 1px;
  max-width: 45px !important;
  width: 100%;
}
.custom_calendar .react-datepicker__day:hover {
  background-color: green;
  border-radius: 0;
}

.custom_calendar .react-datepicker {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: none;
}

.custom_calendar .react-datepicker__week {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom_calendar .react-datepicker__day--highlighted-custom {
  background-color: silver !important;
  color: #8a8787 !important;
}
.custom_calendar .react-datepicker__day--highlighted-custom.start {
  background: linear-gradient(135deg, green 50%, silver 50%);
  color: white !important;
}
.custom_calendar .react-datepicker__day--highlighted-custom.end {
  background: linear-gradient(135deg, silver 50%, green 50%);
  color: white !important;
}

.custom_calendar .react-datepicker__day--keyboard-selected {
  border-radius: 0;
}

.custom_calendar .react-datepicker__month-container .react-datepicker__header {
  font-size: 1rem;
  background-color: #fff !important;
  padding: 20px;
  border-bottom: 0;
  padding-top: 10px;
}

.custom_calendar .react-datepicker__day--today {
  border-radius: 0;
}

.custom_calendar .react-datepicker__month-container {
  min-height: 260px;
}

.custom_calendar .react-datepicker__navigation {
  top: 50%;
}
.custom_calendar .react-datepicker__navigation-icon::before {
  border-color: rgb(12, 102, 228);
}

.custom_calendar .react-datepicker__day--selecting-range-start {
  background-color: rgba(57, 115, 185, 1) !important;
  color: white !important;
}
.custom_calendar .react-datepicker__day--selecting-range-end {
  background-color: rgba(57, 115, 185, 1) !important;
  color: white !important;
}
`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

let style2 = document.createElement("style");
style2.textContent = cssText;
document.head.appendChild(style2);
