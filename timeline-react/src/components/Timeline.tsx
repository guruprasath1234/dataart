import type { EventData } from "../types";

type Props = {
  events: EventData[];
  onSelect: (event: EventData) => void;
};

export default function Timeline({ events, onSelect }: Props) {
  return (
    <ul className="timeline">
      {events.map((event, idx) => (
        <li
          key={idx}
          className="timeline-item"
          onClick={() => onSelect(event)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect(event)}
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
        </li>
      ))}
    </ul>
  );
}