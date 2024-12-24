import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { DayPicker } from "react-day-picker";

type Range = { from: Date; to: Date };

const MultiRangePicker = () => {
  const [ranges, setRanges] = useState<Range[]>([]);
  const [currentRange, setCurrentRange] = useState<Range | null>(null);

  const handleDayClick = (day: Date) => {
    if (!currentRange) {
      setCurrentRange({ from: day, to: day });
    } else {
      if (day < currentRange.from) {
        setCurrentRange({ from: day, to: currentRange.from });
      } else {
        setCurrentRange({ ...currentRange, to: day });
      }

      setRanges((prevRanges) => [
        ...prevRanges,
        { from: currentRange.from, to: day },
      ]);
      setCurrentRange(null);
    }
  };

  const isDaySelected = (day: Date): boolean => {
    return ranges.some((range) => day >= range.from && day <= range.to);
  };

  const isDayStart = (day: Date): boolean => {
    return ranges.some(
      (range) => range.from.toDateString() === day.toDateString()
    );
  };

  const isDayEnd = (day: Date): boolean => {
    return ranges.some(
      (range) => range.to.toDateString() === day.toDateString()
    );
  };

  return (
    <div>
      <DayPicker
        numberOfMonths={12}
        pagedNavigation
        onDayClick={handleDayClick}
        modifiers={{
          selected: isDaySelected,
          start: isDayStart,
          end: isDayEnd,
        }}
        modifiersClassNames={{
          selected: "selected-day",
          start: "start-day",
          end: "end-day",
        }}
      />
      <style>{`

          // .rdp-day_button {
          //      background: green; 
          //      margin: 1px;
          //      border-radius: 0;           
          // }


        .rdp-day {
          background: green;
          margin: 5px;  /* Adds 5px margin between each day */
          border: 4px solid white;
        }
        .selected-day {
          background-color: silver;
          color: white;
        }
        .start-day {
          background: linear-gradient(135deg, green 50%, silver 50%);
          color: white;
        }
        .end-day {
          background: linear-gradient(135deg, silver 50%, green 50%);
          color: white;
        }
        .rdp {
          display: grid;
        }
      `}</style>
    </div>
  );
};

export default MultiRangePicker;

const el = document.querySelectorAll(".container-widget");

if (el) {
  el.forEach((div) => {
    const root = ReactDOM.createRoot(div);
    root.render(<MultiRangePicker />);
  });
}

function loadCss() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdn.jsdelivr.net/npm/react-day-picker@9.4.4/src/style.min.css";
  link.integrity =
    "sha512-mRJDr36tdkaC/Mw4vQlLHb89s0iwGy0vhmZkDhWF6WjkOoD3AAjk1JHr3uR3elMaxxSpNSeRb+0R3/Jdrp0fdA==";
  link.crossOrigin = "anonymous";
  link.referrerPolicy = "no-referrer";

  return link;
}
document.head.appendChild(loadCss());
