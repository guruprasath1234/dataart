import type { EventData } from "./types";

const modal = document.getElementById("modal") as HTMLElement;

export function openModal(event: EventData): void {
  modal.innerHTML = `
    <div class="content">
      <button id="close-modal" aria-label="Close">&times;</button>
      <h2>${event.title}</h2>
      <p><strong>${event.year}</strong></p>
      <img src="${event.imageURL}" alt="${event.title}" style="max-width: 100%; border-radius: 8px;" />
      <p>${event.description}</p>
      <p><em>Category: ${event.category}</em></p>
    </div>
  `;
  modal.classList.add("active");

  document.getElementById("close-modal")?.addEventListener("click", closeModal);
  modal.addEventListener("click", (e: MouseEvent) => {
    if (e.target === modal) closeModal();
  });
}

export function closeModal(): void {
  modal.classList.remove("active");
}
