const css = `
.custom-date-picker_modal .react-datepicker__day {
  color: #216ba5;
  font-weight: bold;
  margin: 1px;
  position: relative;
}

.custom-date-picker_modal .react-datepicker__day--disabled {
  font-weight: 300;
}

.custom-date-picker_modal .react-datepicker__day--in-range {
  background-color: #79b2e2;
  color: #fff;
  font-weight: bold;
}

.custom-date-picker_modal .react-datepicker__day--selected,
.custom-date-picker_modal .react-datepicker__day--range-end {
  background-color: #216ba5;
  color: #fff;
  font-weight: bold;
}

.custom-date-picker_modal .react-datepicker__day--today {
  border: 2px solid #216ba5;
  border-radius: 5px;
  font-weight: bold;
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

.custom-date-picker_modal .react-datepicker__current-month {
  margin-bottom: 10px !important;
}

.custom-date-picker_modal .react-datepicker__navigation {
  width: 2rem;
  height: 2rem;
}

.custom-date-picker_modal .react-datepicker__month {
  margin: 0;
}

.custom-date-picker_modal
  .react-datepicker__month--two-months
  .react-datepicker__month {
  width: 50%;
}

.custom-date-picker_modal .react-datepicker__day-names {
  display: flex;
  justify-content: space-around;
}

.custom-date-picker_modal .saturday {
  position: relative;
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
}

.custom-date-picker_modal .circular-icon {
  width: 5px !important;
  height: 5px !important;
  background-color: #216ba5;
  border-radius: 50%;
  position: absolute;
  left: 5px;
  bottom: 0;
}

.custom-date-picker_modal .react-datepicker__children-container {
  width: 100%;
  margin: 0.4rem;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  height: auto;
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

.custom-date-picker_modal .description {
  position: absolute;
  left: 10px;
  bottom: 0;
}

.custom-date-picker_modal .reset-button {
  border: none;
  border-bottom: 2px solid #5f6969;
  color: #5f6969;
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  font-size: 16px;
}

.custom-date-picker_modal .date-picker-day {
  position: relative;
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
`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
