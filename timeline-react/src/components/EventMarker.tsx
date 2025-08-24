import { useEffect, useState, useRef } from "react";
import type { EventData } from "../types";

export default function Timeline() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const markersRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    const total = markersRef.current.length;
    if (!total) return;

    let newIdx = idx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      newIdx = (idx + 1) % total;
      markersRef.current[newIdx]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      newIdx = (idx - 1 + total) % total;
      markersRef.current[newIdx]?.focus();
    }
  };

  return (
    <ul className="timeline">
      {events.map((event, idx) => (
        <li key={idx} className="timeline-item">
          <button
            ref={(el: HTMLButtonElement | null) => {
              markersRef.current[idx] = el;
            }}
            className="timeline-marker"
            aria-current={activeIdx === idx ? "true" : undefined}
            onClick={() => setActiveIdx(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          >
            <img
              src={event.imageURL}
              alt={event.title}
              className="marker-image"
              loading="lazy"
            />
            <span className="year">{event.year}</span>
            <span className="title">{event.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
