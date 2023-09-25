import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import Calendar from "../../components/Calendar/Calendar";

const TrackingById = () => {
  return (
    <div>
      <h1>Soy el tracking by Id</h1>
      <Calendar  />
    </div>
  );
};

export default TrackingById;
