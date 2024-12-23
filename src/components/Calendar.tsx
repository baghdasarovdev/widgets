import React, { type FC, useState } from "react";
import ReactDOM from "react-dom/client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

export type DatePickerT = {
  months: number;
};

const freeMonths = [1, 3, 5, 9, 10, 11, 2, 4, 6, 7, 8, 12];

export const Calendar: FC<DatePickerT> = (props) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const getDayClass = (date: Date) => {
    const month = date.getMonth() + 1;

    if (freeMonths?.includes(month)) {
      return "free-date";
    }

    return "";
  };

  return (
    <div className="custom_calendar">
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        dayClassName={(date: Date) => getDayClass(date)}
        monthsShown={props.months}
        inline
        icon={null}
      />
    </div>
  );
};

const el = document.querySelectorAll(".container-widget");

if (el) {
  el.forEach((div) => {
    const root = ReactDOM.createRoot(div);
    root.render(<Calendar />);
  });
}
