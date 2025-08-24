import type { EventData } from "../types";

type Props = {
  events: EventData[];
  selectedEvent: EventData | null;
  onSelect: (event: EventData) => void;
};

export default function Timeline({ events, selectedEvent, onSelect }: Props) {
  return (
    <ul className="timeline">
      {events.map((event, idx) => (
        <li key={idx}>
          <button
            className="timeline-item"
            onClick={() => onSelect(event)}
            aria-current={event === selectedEvent ? "true" : undefined}
          >
            <img
              src={event.imageURL}
              alt={event.title}
              className="marker-image"
              loading="lazy"
            />
            <div>
              <span className="year">{event.year}</span>
              <span className="title">{event.title}</span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
