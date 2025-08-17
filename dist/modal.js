const modal = document.getElementById("modal");
export function openModal(event) {
    var _a;
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
    (_a = document.getElementById("close-modal")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal)
            closeModal();
    });
}
export function closeModal() {
    modal.classList.remove("active");
}
//# sourceMappingURL=modal.js.map