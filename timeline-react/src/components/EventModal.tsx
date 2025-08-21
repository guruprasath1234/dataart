import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import type { EventData } from "../types";

type Props = {
  event: EventData | null;
  onClose: () => void;
};

export default function EventModal({ event, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const portalRoot = document.getElementById("modal-root");
  if (!portalRoot) return null;
  if (!event) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-body">
          <h2>{event.title} <small>({event.year})</small></h2>
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className="modal-image"
              loading="lazy"
            />
          )}
          <p>{event.description}</p>
          {event.category && <span className="badge">{event.category}</span>}
        </div>
      </div>
    </div>,
    portalRoot
  );
}
