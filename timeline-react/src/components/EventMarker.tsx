import type { EventData } from "../types";

type Props = {
  event: EventData;
  onClick: () => void;
};

export default function EventMarker({ event, onClick }: Props) {
  return (
    <li className="timeline-item" onClick={onClick} role="button" tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}>
      <div className="dot" title={`${event.year} • ${event.title}`} />
      <span className="year">{event.year}</span>
      <span className="title">{event.title}</span>
    </li>
  );
}