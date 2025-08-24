import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import type { EventData } from "../types";

type Props = { event: EventData | null; onClose: () => void };

export default function EventModal({ event, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (event && dialogRef.current) {
      lastFocused.current = document.activeElement as HTMLElement;
      dialogRef.current.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [event]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (!event && lastFocused.current) {
      lastFocused.current.focus();
    }
  }, [event]);

  if (!mounted || !event) return null;

  const root = document.getElementById("modal-root");
  if (!root) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      onCancel={onClose}
    >
      <button onClick={onClose} aria-label="Close">
        ×
      </button>
      <h2 id="modal-title">
        {event.title} <small>({event.year})</small>
      </h2>
      {event.imageURL && <img src={event.imageURL} alt={event.title} />}
      <p id="modal-desc">{event.description}</p>
      {event.category && <span>{event.category}</span>}
    </dialog>,
    root
  );
}
