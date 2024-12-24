import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { durationDays, monthsOptions } from "./constant.ts";

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
