import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import multiMonthPlugin from "@fullcalendar/multimonth";
import ReactDOM from "react-dom";

const YearViewCalendar = () => {
  const [events, setEvents] = useState([
    { id: "1", title: "Event 1", start: "2024-12-27", end: "2024-12-28" },
    { id: "2", title: "Event 2", start: "2024-12-30", end: "2024-12-31" },
  ]);

  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date or range
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedStart, setSelectedStart] = useState("");
  const [selectedEnd, setSelectedEnd] = useState("");

  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo);
    setSelectedDate(selectInfo); // Log to check the data
    setSelectedStart(selectInfo.startStr);
    setSelectedEnd(selectInfo.endStr);
    setIsBookingModalOpen(true);
  };

  const handleBookEvent = () => {
    if (newEventTitle) {
      const newEvent = {
        title: newEventTitle,
        start: selectedStart,
        end: selectedEnd,
        id: `${Date.now()}`,
      };

      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setIsBookingModalOpen(false);
      setNewEventTitle("");
    } else {
      alert("Please enter a title for the event.");
    }
  };

  const handleCancelBooking = () => {
    setIsBookingModalOpen(false);
    setNewEventTitle("");
  };

  const handleEventClick = (clickInfo) => {
    console.log(clickInfo, "clickInfo");

    setSelectedEvent(clickInfo.event);
    setIsDeleteModalOpen(true);
    handleDeleteEvent();
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== selectedEvent.id)
      );
      setIsDeleteModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <FullCalendar
        plugins={[multiMonthPlugin]}
        initialView="multiMonthYear"
        events={events}
        select={handleDateSelect}
        selectable={true}
        eventClick={handleEventClick}
      />

      {selectedDate && (
        <div>
          <h3>Selected Date Range:</h3>
          <p>
            Start: {selectedDate.start.toLocaleString()}
            <br />
            End: {selectedDate.end.toLocaleString()}
          </p>
        </div>
      )}

      <div
        className={`modal-overlay ${isBookingModalOpen ? "is-modal-open" : ""}`}
      >
        <div className="modal">
          <h2>Book an Event</h2>
          <label>
            Event Title:
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              placeholder="Enter event title"
            />
          </label>
          <div>
            <p>
              <strong>Start Time:</strong> {selectedStart}
            </p>
            <p>
              <strong>End Time:</strong> {selectedEnd}
            </p>
          </div>
          <button onClick={handleBookEvent}>Book Event</button>
          <button onClick={handleCancelBooking}>Cancel</button>
        </div>
      </div>

      <div
        className={`modal-overlay ${isDeleteModalOpen ? "is-modal-open" : ""}`}
      >
        <div className="modal">
          <h2>Are you sure you want to delete this event?</h2>
          <p>{selectedEvent && selectedEvent.title}</p>
          <button onClick={handleDeleteEvent}>Yes, Delete</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default YearViewCalendar;

const el = document.querySelectorAll(".container-widget");

if (el) {
  el.forEach((div) => {
    const root = ReactDOM.createRoot(div);
    root.render(<YearViewCalendar />);
  });
}

const css = `
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal-overlay.is-modal-open {
  opacity: 1;
  pointer-events: auto;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-20px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-overlay.is-modal-open .modal {
  transform: translateY(0);
  opacity: 1;
}

button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

button:active {
  background-color: #3e8e41;
}

button:focus {
  outline: none;
}

input[type="text"] {
  margin-top: 10px;
  padding: 8px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

h2 {
  margin-bottom: 15px;
}


`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
