import { useEffect, useState } from "react";
import type { EventData } from "../types";

export default function Timeline() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div className="timeline-container">
      {/* Filter Dropdown */}
      <div className="filter-bar">
        <label>Category: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          {[...new Set(events.map((e) => e.category))].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {filteredEvents.map((event, idx) => (
          <div
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <div className="event-header">
                <span className="year">{event.year}</span>
                <h3 className="title">{event.title}</h3>
              </div>
              <p className="description">{event.description}</p>
              <img
                src={event.imageURL}
                alt={event.title}
                className="event-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
