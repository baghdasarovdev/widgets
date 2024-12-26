import React, { type FC } from "react";

export type BookingModalPropsT = {
  isBookingModalOpen: boolean;
  isDeleteModalOpen: boolean;
  newEventTitle: string;
  selectedStart: string;
  selectedEnd: string;
  setNewEventTitle: (value: string) => void;
  setSelectedStart: (value: string) => void;
  setSelectedEnd: (value: string) => void;
  handleBookEvent: () => void;
  handleCancelBooking: () => void;
  handleDeleteEvent: () => void;
  selectedEvent: any;
  handleCancelDelete: () => void;
};

const BookingModal: FC<BookingModalPropsT> = (props) => {
  return (
    <>
      <div
        className={`modal-overlay ${
          props.isBookingModalOpen ? "is-modal-open" : ""
        }`}
      >
        <div className="modal">
          <h2>Book an Event</h2>
          <label>
            Event Title:
            <input
              type="text"
              value={props.newEventTitle}
              onChange={(e) => props.setNewEventTitle(e.target.value)}
              placeholder="Enter event title"
            />
          </label>
          <div>
            <p>
              <strong>Start Time:</strong>{" "}
              <input
                type="text"
                defaultValue={props.selectedStart}
                onChange={(e) => props.setSelectedStart(e.target.value)}
              />
            </p>
            <p>
              <strong>End Time:</strong>{" "}
              <input
                type="text"
                defaultValue={props.selectedEnd}
                onChange={(e) => props.setSelectedEnd(e.target.value)}
              />
            </p>
          </div>
          <button onClick={props.handleBookEvent}>Book Event</button>
          <button onClick={props.handleCancelBooking}>Cancel</button>
        </div>
      </div>
      <div
        className={`modal-overlay ${
          props.isDeleteModalOpen ? "is-modal-open" : ""
        }`}
      >
        <div className="modal">
          <h2>Are you sure you want to delete this event?</h2>
          <p>{props.selectedEvent && props.selectedEvent.title}</p>
          <button onClick={props.handleDeleteEvent}>Yes, Delete</button>
          <button onClick={props.handleCancelDelete}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

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
