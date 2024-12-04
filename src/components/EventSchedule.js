import React from "react";
import "./EventSchedule.css";

function EventSchedule() {
  const schedule = [
    {
      date: "Day 1 - January 20, 2025",
      topic: "Opening Ceremony & Keynote",
      speaker: "John Doe",
    },
    {
      date: "Day 2 - January 21, 2025",
      topic: "Innovative Solutions Workshop",
      speaker: "Jane Smith",
    },
    {
      date: "Day 3 - January 22, 2025",
      topic: "Closing Ceremony",
      speaker: "Michael Lee",
    },
  ];

  return (
    <div className="event-schedule">
      <h2>Event Schedule</h2>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>
            <strong>{item.date}</strong>
            <p>{item.topic}</p>
            <small>Speaker: {item.speaker}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventSchedule;
