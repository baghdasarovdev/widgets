import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ReactDOM from "react-dom";

function FullCalendarComponent() {
  const [events, setEvents] = useState([
    { id: "1", title: "Event 1", start: "2024-12-27", end: "2024-12-28" },
    { id: "2", title: "Event 2", start: "2024-12-30", end: "2024-12-31" },
  ]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedStart, setSelectedStart] = useState("");
  const [selectedEnd, setSelectedEnd] = useState("");

  const handleDateSelect = (selectInfo) => {
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
    console.log("11111");

    setIsBookingModalOpen(false);
    setNewEventTitle("");
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    console.log(clickInfo, "clickInfo");
    setIsDeleteModalOpen(true);
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
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        events={events}
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />

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
              <strong>Start Time:</strong>{" "}
              <input
                type="text"
                defaultValue={selectedStart}
                onChange={(e) => setSelectedStart(e.target.value)}
              />
            </p>
            <p>
              <strong>End Time:</strong>{" "}
              <input
                type="text"
                defaultValue={selectedEnd}
                onChange={(e) => setSelectedEnd(e.target.value)}
              />
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
}

export default FullCalendarComponent;

const el = document.querySelectorAll(".container-widget");

if (el) {
  el.forEach((div) => {
    const root = ReactDOM.createRoot(div);
    root.render(<FullCalendarComponent />);
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
  background-color: #3788d8;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

button:hover {
  background-color: #3788d8;
}

button:active {
  background-color: #3788d8;
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
  border: "0", borderBottom: "1px solid #ccc"
}

h2 {
  margin-bottom: 15px;
}


`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
