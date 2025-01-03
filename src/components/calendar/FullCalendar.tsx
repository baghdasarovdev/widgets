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
    { id: "1", title: "Event 1", start: new Date(), end: new Date() },
  ]);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedStart, setSelectedStart] = useState("");
  const [selectedEnd, setSelectedEnd] = useState("");
  const [selectedTime, setSelectedTime] = useState({ start: "", end: "" });

  const handleDateSelect = (selectInfo) => {
    setSelectedStart(selectInfo.startStr);
    setSelectedEnd(selectInfo.endStr);
    setIsBookingModalOpen(true);
  };

  const handleBookEvent = (newTitle: string) => {
    const newEvent = {
      title: newTitle,
      start: selectedTime.start
        ? `${selectedStart}T${selectedTime.start}:00`
        : selectedStart,
      end: selectedTime.end
        ? `${selectedEnd}T${selectedTime.end}:00`
        : selectedEnd,
      id: `${Date.now()}`,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setIsBookingModalOpen(false);
  };

  const handleCancelBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleEventClick = (clickInfo) => {
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
    <div className="full-calendar_container">
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
        height={"100%"}
        longPressDelay={0}
        selectMirror={true}
        editable={true}
        eventStartEditable={true}
        eventResizableFromStart={true}
      />

      <BookingModal
        isBookingModalOpen={isBookingModalOpen}
        isDeleteModalOpen={isDeleteModalOpen}
        selectedStart={selectedStart}
        setSelectedStart={setSelectedStart}
        selectedEnd={selectedEnd}
        setSelectedEnd={setSelectedEnd}
        handleBookEvent={handleBookEvent}
        handleCancelBooking={handleCancelBooking}
        handleCancelDelete={handleCancelDelete}
        handleDeleteEvent={handleDeleteEvent}
        setSelectedTime={setSelectedTime}
        selectedTime={selectedTime}
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
