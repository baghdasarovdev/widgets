import React, { FC, useState } from "react";
import DeleteModalIcon from "../../../icons/DeleteModalIcon.tsx";
import CloseIcon from "../../../icons/CloseIcon.tsx";
import { formatDate } from "../../../helper/FormtDate.ts";
import { CalendarValidate } from "../../../helper/CalendarValidation.ts";

export type BookingModalPropsT = {
  isBookingModalOpen: boolean;
  selectedStart: string;
  selectedEnd: string;
  selectedTime: ({ start, end }: { start: string; end: string }) => void;
  setSelectedStart: (value: string) => void;
  setSelectedEnd: (value: string) => void;
  setSelectedTime: (start, end) => void;
  handleBookEvent: (name: string) => void;
  handleCancelBooking: () => void;
};

const BookingModal: FC<BookingModalPropsT> = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [newEventTitle, setNewEventTitle] = useState("");

  const handleChangeTime = (time, type) => {
    if (type === "start")
      props.setSelectedTime((prev) => ({ start: time, end: prev.end }));
    else props.setSelectedTime((prev) => ({ start: prev.start, end: time }));
  };

  const booking = () => {
    const END_DATE = formatDate(new Date(props.selectedEnd));
    const START_DATE = formatDate(new Date(props.selectedStart));
    const CURRENT_DATE = formatDate(new Date());

    const error = CalendarValidate(
      START_DATE,
      END_DATE,
      CURRENT_DATE,
      props.selectedTime
    );

    if (error) {
      setErrorMessage(error);
      return;
    }

    if (newEventTitle.trim() === "") {
      setErrorMessage("Title is required");
    } else {
      setErrorMessage("");
      props.handleBookEvent(newEventTitle);
      setNewEventTitle("");
    }
  };

  return (
    <>
      <div
        className={`modal-overlay ${
          props.isBookingModalOpen ? "is-modal-open" : ""
        }`}
      >
        <div className="modal">
          <div className="modal-header">
            <h2 style={{ margin: 0 }}>Booking</h2>
            <CloseIcon onClick={props.handleCancelBooking} />
          </div>
          <div className="add-title">
            <label>Title</label>
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              placeholder="Add title"
              className="modal-title-input"
            />
          </div>
          <div className="modal-body">
            <div className="date-time-container">
              <div className="date-time-item">
                <label>Start Date</label>
                <div className="date-time-input">
                  <input
                    type="date"
                    value={props.selectedStart}
                    onChange={(e) => props.setSelectedStart(e.target.value)}
                    className="date-input"
                  />
                </div>
              </div>
              <div className="date-time-item">
                <label>End Date</label>
                <div className="date-time-input">
                  <input
                    type="date"
                    value={props.selectedEnd}
                    onChange={(e) => props.setSelectedEnd(e.target.value)}
                    className="date-input"
                  />
                </div>
              </div>
            </div>
            <div className="time-range">
              <div className="time-range-item">
                <label>Start Time</label>
                <input
                  type="time"
                  onChange={(e) => handleChangeTime(e.target.value, "start")}
                  className="time-input"
                />
              </div>
              <div className="time-range-item">
                <label>End Time</label>
                <input
                  type="time"
                  onChange={(e) => handleChangeTime(e.target.value, "end")}
                  className="time-input"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn cancel-btn"
              onClick={props.handleCancelBooking}
            >
              Cancel
            </button>
            <button className="save-button" onClick={booking}>
              Save
            </button>
          </div>
        </div>
      </div>
      <div
        className={`modal-overlay ${
          props.isDeleteModalOpen ? "is-modal-open" : ""
        }`}
      >
        <div className="modal-content">
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <CloseIcon onClick={props.handleCancelDelete} />
          </div>
          <div className="modal-header-delete">
            <DeleteModalIcon />
          </div>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete these records? This process cannot be
            undone.
          </p>
          <div className="modal-footer-delete">
            <button
              className="btn cancel-btn"
              onClick={props.handleCancelDelete}
            >
              Cancel
            </button>
            <button
              className="btn delete-btn"
              onClick={props.handleDeleteEvent}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className={`error-modal ${errorMessage ? "is-modal-open" : ""}`}>
        <div className="modal-content">
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <CloseIcon onClick={() => setErrorMessage("")} />
          </div>
          <p className="error-message">{errorMessage}</p>
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
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.error-modal {
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

.fc .fc-toolbar {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.modal-overlay.is-modal-open, .error-modal.is-modal-open {
  opacity: 1;
  pointer-events: auto;
}

.modal {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  
.add-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.error-message {
  align-self: flex-start;
  color: red;
  font-size: 14px;
  height: 20px;
}

input {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input:focus {
  border: 1px solid #0b57d0;
  outline: none;
}

.modal-title-input {
  padding: 10px;
  width: -webkit-fill-available;
  font-size: 16px;
  background-color: #f5f7fa;
}

.modal-body {
  padding-bottom: 30px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 50px;
}

.save-button {
  padding: 10px 25px;
  background-color: #0b57d0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.date-time-container {
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #f5f7fa;
  padding-bottom: 10px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.date-time-input {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #e4e7eb;
  padding: 8px 12px;
  border-radius: 6px;
}

.date-time-item {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.date-time-input .icon {
  font-size: 16px;
  color: #555;
}

label {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  align-self: flex-start;
  margin-bottom: 5px
}

.date-input {
  width: 100%;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.date-input:focus {
  outline: none;
}

.time-range {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 10px;
}

.time-range-item {
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
}

.time-input {
  border: none;
  background-color: #e4e7eb;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
}

.time-input:focus {
  outline: none;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  .modal-header-delete {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }

  .modal-footer-delete {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .cancel-btn {
    background-color: #e0e0e0;
    color: #555;
  }

  .delete-btn {
    background-color: #ff3b5f;
    color: white;
  }

.fc-daygrid-day-events, .fc-timegrid-col-frame {
  cursor: pointer;
}

`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
