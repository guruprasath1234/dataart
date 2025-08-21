import type { EventData } from "../types";
import EventMarker from "./EventMarker";

type Props = {
  events: EventData[];
  onSelect: (e: EventData) => void;
};

export default function Timeline({ events, onSelect }: Props) {
  if (!events.length) {
    return <section className="timeline"><p>Loading events…</p></section>;
  }

  // Optionally sort by year ascending
  const sorted = [...events].sort((a, b) => a.year - b.year);

  return (
    <section className="timeline">
      <ul>
        {sorted.map((e) => (
          <EventMarker key={e.id} event={e} onClick={() => onSelect(e)} />
        ))}
      </ul>
    </section>
  );
}
