// src/components/Calendar.js

//testeando un calendario
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "Morision", date: "2023-09-25" },
        { title: "Kick Off Charla Esclavizador", date: "2023-09-26" },
        // Add more events here
      ]}
    />
  );
}
export default Calendar;
