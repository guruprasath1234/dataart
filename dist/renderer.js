import { openModal } from "./modal";
export function renderTimeline(events) {
    const timeline = document.querySelector("#timeline ul");
    events.forEach((event) => {
        const li = document.createElement("li");
        li.textContent = String(event.year);
        li.addEventListener("click", () => openModal(event));
        timeline.appendChild(li);
    });
}
//# sourceMappingURL=renderer.js.map