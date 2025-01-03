import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import DatePicker from "react-datepicker";
import { monthsOptions } from "./constant.ts";
import { loadCss } from "../../helper/LoadDatePickerStyle.ts";

loadCss();

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<any[]>([]);
  const [calendarCount, setCalendarCount] = useState<number>(1);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [rangeToRemove, setRangeToRemove] = useState<any>(null);

  const handleSelectDates = (dates) => {
    setStartDate(null);

    const selectedDate = new Date(dates);
    const dateInRange = selectedDates.find((range) => {
      return selectedDate >= range.start && selectedDate <= range.end;
    });

    if (dateInRange) {
      setRangeToRemove(dateInRange);
      setIsPopupVisible(true);
    } else {
      if (!startDate) {
        setStartDate(dates);
      } else {
        const date1 = new Date(startDate);
        const date2 = new Date(dates);

        const start = date1 < date2 ? date1 : date2;
        const end = date1 < date2 ? date2 : date1;

        const updatedRange = { start, end };

        setSelectedDates((prev) => [...prev, updatedRange]);
      }
    }
  };

  const handlePopupConfirm = () => {
    setSelectedDates((prev) =>
      prev.filter(
        (range) =>
          !(
            range.start.getTime() === rangeToRemove.start.getTime() &&
            range.end.getTime() === rangeToRemove.end.getTime()
          )
      )
    );
    setIsPopupVisible(false);
    setRangeToRemove(null);
  };

  const handlePopupReject = () => {
    setIsPopupVisible(false);
    setRangeToRemove(null);
  };

  const highlightDates = selectedDates.flatMap((range) => {
    let currentDate = new Date(range.start);
    const datesInRange: Date[] = [];
    while (currentDate <= range.end) {
      datesInRange.push(new Date(currentDate) as Date);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesInRange;
  });

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
        highlightDates={highlightDates}
        onChange={(date) => handleSelectDates(date)}
        monthsShown={calendarCount}
        inline
        icon={null}
        dayClassName={(date) => {
          for (const range of selectedDates) {
            if (date >= range.start && date <= range.end) {
              if (date.getTime() === range.start.getTime()) {
                return "react-datepicker__day--highlighted-custom start";
              }
              if (date.getTime() === range.end.getTime()) {
                return "react-datepicker__day--highlighted-custom end";
              }
              return "react-datepicker__day--highlighted-custom";
            }
          }
          return undefined;
        }}
      />

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3>Do you want to remove the selected date range?</h3>
            <button onClick={handlePopupConfirm}>Yes</button>
            <button onClick={handlePopupReject}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

const el = document.querySelectorAll(".container-widget-calendar");

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
  padding-right: 3.5em;
  border-radius: 10px;
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
  background-color: green !important;
  border-radius: 0 !important;
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

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.popup-content button {
  margin: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}

.popup-content button:nth-child(2) {
  margin: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
}

`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
