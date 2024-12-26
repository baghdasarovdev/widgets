import React, { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import ReactDOM from "react-dom";
import BookingModal from "../UI/modal/BookingModal.tsx";

const YearViewCalendar = () => {
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
    console.log("Selected date info:", selectInfo);
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
        plugins={[
          multiMonthPlugin,
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin,
        ]}
        initialView="multiMonthYear"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        events={events}
        select={handleDateSelect}
        selectable={true}
        eventClick={handleEventClick}
        height={"95vh"}
      />

      <BookingModal
        isBookingModalOpen={isBookingModalOpen}
        isDeleteModalOpen={isDeleteModalOpen}
        newEventTitle={newEventTitle}
        setNewEventTitle={setNewEventTitle}
        selectedStart={selectedStart}
        setSelectedStart={setSelectedStart}
        selectedEnd={selectedEnd}
        setSelectedEnd={setSelectedEnd}
        handleBookEvent={handleBookEvent}
        handleCancelBooking={handleCancelBooking}
        handleCancelDelete={handleCancelDelete}
        handleDeleteEvent={handleDeleteEvent}
      />
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
