/* eslint-disable */
// @ts-ignore
// @ts-nocheck directive by adding that at the top of the file

import React, { useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import ReactDOM from 'react-dom';
import BookingModal from '../UI/modal/BookingModal';

const YearViewCalendar = () => {
  const [events, setEvents] = useState([
    { id: '1', title: 'Event 1', start: new Date(), end: new Date() },
  ]);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');
  const [selectedTime, setSelectedTime] = useState({ start: '', end: '' });

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
        prevEvents.filter((event) => event.id !== selectedEvent.id),
      );
      setIsDeleteModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="full-calendar_container" style={{ height: '100%' }}>
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
          start: 'today prev,next',
          center: 'title',
          end: 'multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        events={events}
        select={handleDateSelect}
        selectable={true}
        eventClick={handleEventClick}
        height={'100%'}
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
      <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div
            style={{
              width: '15px',
              height: '15px',
              background: '#FFECDC',
            }}
          ></div>
          <div>Free</div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div
            style={{ width: '15px', height: '15px', background: '#3788d8' }}
          ></div>
          <div>Booked</div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div
            style={{ width: '15px', height: '15px', background: 'silver' }}
          ></div>
          <div>Blocked</div>
        </div>
      </div>
    </div>
  );
};

export default YearViewCalendar;

const el = document.querySelectorAll('.container-widget');

if (el) {
  el.forEach((div) => {
    const root = ReactDOM.createRoot(div);
    root.render(<YearViewCalendar />);
  });
}

const css = `
.container-widget {
  height: 500px;
}

.full-calendar_container {
  height: 100%;
}

.fc-theme-standard td {
  background: #FFECDC;
}
`;

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
