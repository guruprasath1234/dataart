import type { EventData } from "./types";
import { openModal } from "./modal";

export function renderTimeline(events: EventData[]): void {
  const timeline = document.querySelector("#timeline ul") as HTMLElement;

  events.forEach((event) => {
    const li = document.createElement("li");
    li.textContent = String(event.year);
    li.addEventListener("click", () => openModal(event));
    timeline.appendChild(li);
  });
}
