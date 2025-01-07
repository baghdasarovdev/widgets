import React, { type FC } from 'react';

interface DatePickerModalInputProps {
  selectedDates: [Date | undefined, Date | undefined];
  onClick?: () => void;
}

const DatePickerModalInput: FC<DatePickerModalInputProps> = ({
  selectedDates,
  onClick,
}) => {
  const formatDateString = (date?: Date) => {
    return date
      ? date.toLocaleDateString().replace(/\//g, '.')
      : 'Please choose';
  };

  return (
    <div className="datepicker-modal-input" onClick={onClick}>
      <div className="datepicker-box">
        <div className="datepicker-inner">
          <p style={{ margin: 0, marginBottom: '10px' }}>Arrival</p>
          <span>{formatDateString(selectedDates[0])}</span>
        </div>
      </div>
      <div>
        <div className="datepicker-inner">
          <p style={{ margin: 0, marginBottom: '10px' }}>Departure</p>
          <span>{formatDateString(selectedDates[1])}</span>
        </div>
      </div>
    </div>
  );
};

export default DatePickerModalInput;

const css = `
.custom-date-picker_modal .datepicker-modal-input {
  border: 2px solid #e3e3e3;
  border-radius: 5px;
  display: flex;
}

.custom-date-picker_modal .datepicker-box {
  border-right: 1px solid silver;
}

.custom-date-picker_modal .datepicker-inner {
  padding: 5px 6px;
  width: 200px;
  text-align: left;
}
.custom-date-picker_modal .datepicker-inner p {
  font-weight: bold;
  color: rgb(95, 105, 105)
}
.custom-date-picker_modal .datepicker-inner span {
  color: rgb(95, 105, 105)
}

`;

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
