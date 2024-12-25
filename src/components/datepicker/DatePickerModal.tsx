import React, { useState } from "react";
import DatePicker from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import DatePickerModalInput from "./DatePickerModalInput.tsx";
import { loadCss } from "../../helper/LoadDatePickerStyle.ts";
import ReactDOM from "react-dom";

registerLocale("en-GB", enGB);
setDefaultLocale("en-GB");
loadCss();

const DatePickerModal = () => {
  const [selectedDates, setSelectedDates] = useState<
    [Date | undefined, Date | undefined]
  >([]);

  const rangeStart = new Date().getDay();
  const rangeEnd = new Date().getDay();

  const isInRange = (date: Date) => {
    const startDate = new Date(date.getFullYear(), date.getMonth(), rangeStart);
    const endDate = new Date(date.getFullYear(), date.getMonth(), rangeEnd);
    return date >= startDate && date <= endDate;
  };

  const dayClassName = (date: Date) => {
    let className = "date-picker-day ";

    if (isInRange(date)) {
      className += "highlighted-range ";
    }

    if (date.getDay() === 6) {
      className += "saturday ";
    }

    return className.trim();
  };

  const renderDayContents = (day: number, date: Date) => {
    const isSelected = selectedDates.some(
      (selectedDate) =>
        !selectedDates[1] &&
        selectedDate &&
        date.toDateString() === selectedDate.toDateString()
    );

    return (
      <div className="date-picker-day">
        {day}
        {isSelected && (
          <div className="popover">Please Select departure date</div>
        )}
      </div>
    );
  };

  const onChange = (
    dates: [Date | undefined, Date | undefined] | undefined
  ) => {
    if (dates) {
      setSelectedDates(dates);
    }
  };

  console.log(selectedDates.length);

  return (
    <div className="custom-date-picker_modal">
      <DatePicker
        monthsShown={2}
        startDate={selectedDates[0]}
        endDate={selectedDates[1]}
        selected={selectedDates[0]}
        onChange={(date) =>
          onChange(date as [Date | undefined, Date | undefined] | undefined)
        }
        shouldCloseOnSelect={false}
        disabledKeyboardNavigation
        dayClassName={dayClassName}
        renderDayContents={renderDayContents}
        selectsRange
        icon={null}
        minDate={new Date()}
        customInput={<DatePickerModalInput selectedDates={selectedDates} />}
        showPopperArrow={false}
      >
        <div className="date-picker-content-container">
          <div style={{ position: "absolute", right: "25px", bottom: "15px" }}>
            {selectedDates[0] && (
              <button
                className="reset-button"
                onClick={() => setSelectedDates([])}
              >
                Reset
              </button>
            )}
          </div>
          {!selectedDates.length && (
            <div className="date-picker-description">
              <p className="circular-icon" />
              <p className="description">
                Best availability: up to 50% more offers for arrival and
                departure on Saturday
              </p>
            </div>
          )}
        </div>
      </DatePicker>
    </div>
  );
};

export default DatePickerModal;

const el = document.querySelectorAll(".container-widget");

if (el) {
  el.forEach((div) => {
    const root = ReactDOM.createRoot(div);
    root.render(<DatePickerModal />);
  });
}

const css = `
.custom-date-picker_modal .react-datepicker__day {
  color: #216ba5;
  font-weight: bold;
  margin: 1px;
  position: relative;
  font-weight: 900;
}

.custom-date-picker_modal .react-datepicker__navigation {
  top: 20px;
}
.custom-date-picker_modal .react-datepicker__navigation-icon::before {
  border-color: #000;
}

.custom-date-picker_modal .react-datepicker__day-name {
  font-size: 13px;
  margin: 0px;
}

.custom-date-picker_modal .react-datepicker__current-month {
  text-transform: capitalize;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
}

.custom-date-picker_modal .react-datepicker__day .date-picker-day {
  position: relative;
  color: rgb(57, 115, 185);
  font-size: 13px;
}

.custom-date-picker_modal .react-datepicker__day--disabled {
  font-weight: 300;
}

.custom-date-picker_modal .react-datepicker__day--in-range div {
  background-color: #79b2e2;
  color: #fff !important;
  border-radius: 5px;
}

.custom-date-picker_modal .react-datepicker__day--today div{
  box-shadow: inset 0 0 0 2px #216ba5;
  border-radius: 5px;
}

.custom-date-picker_modal .react-datepicker {
  font-size: 1rem;
  padding: 20px;
}

.custom-date-picker_modal .react-datepicker__day,
.custom-date-picker_modal .react-datepicker__day--highlighted,
.custom-date-picker_modal .react-datepicker__day--in-range {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
}

.custom-date-picker_modal .react-datepicker__day:hover {
  width: 3rem;
  height: 3rem;
}

.custom-date-picker_modal
  .react-datepicker__month-container
  .react-datepicker__header {
  font-size: 1rem;
  background-color: #fff !important;
  border-bottom: 0;
  padding-top: 10px;
}

.custom-date-picker_modal .react-datepicker__day-name,
.custom-date-picker_modal .react-datepicker__day,
.custom-date-picker_modal .react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 3rem;
  line-height: 3rem;
  text-align: center;
}

.custom-date-picker_modal .saturday::before {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  background-color: #216ba5;
  border-radius: 50%;
}


.custom-date-picker_modal .react-datepicker__week {
  display: flex;
  justify-content: center;
}

.custom-date-picker_modal .react-datepicker__day--outside-month {
  visibility: hidden;
}

.custom-date-picker_modal .react-datepicker-popper {
  position: fixed !important;
  top: -10px !important;
  transform: translate(0, 78px);
}

.custom-date-picker_modal .date-picker-description { 
  display: flex;
  gap: 5px;
}

.custom-date-picker_modal .circular-icon {
  width: 5px !important;
  height: 5px !important;
  background-color: #216ba5;
  border-radius: 50%;
}

.custom-date-picker_modal .react-datepicker__children-container {
  position: absolute;
  left: 10px;
  bottom: -10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-inline: 0;
  padding-inline: 0;
}

.custom-date-picker_modal .date-picker-container {
  display: flex;
  position: absolute;
  left: 10px;
  bottom: 0;
}

.custom-date-picker_modal .description {
  font-size: 12px;
}

.custom-date-picker_modal .reset-button {
  border: none;
  color: #5f6969;
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  font-size: 16px;
  text-decoration: underline;
}

.custom-date-picker_modal .date-picker-day:hover .popover {
  display: block;
}

.custom-date-picker_modal .popover {
  display: none;
  position: absolute;
  background-color: #5f6969;
  border: 1px solid #5f6969;
  color: #fff;
  padding: 0px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  font-size: 12px;
  z-index: 1000;
  white-space: nowrap;
  bottom: 2.3rem;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
}

.custom-date-picker_modal .react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range div, 
.custom-date-picker_modal .react-datepicker__day--range-end.react-datepicker__day--in-range div {
  color: #fff !important;
  background-color: #216ba5;
}

`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
