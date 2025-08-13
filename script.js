document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector("#timeline ul");
  const modal = document.getElementById("modal");
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", themeToggle.checked);
  });

  fetch("data/events.json")
    .then(response => response.json())
    .then(events => {
      events.forEach(event => {
        const li = document.createElement("li");
        li.textContent = event.year;
        li.addEventListener("click", () => openModal(event));
        timeline.appendChild(li);
      });
    })
    .catch(err => console.error("Error loading events:", err));

  function openModal(event) {
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

    document.getElementById("close-modal").addEventListener("click", closeModal);
    modal.addEventListener("click", e => {
      if (e.target === modal) closeModal();
    });
  }

  function closeModal() {
    modal.classList.remove("active");
  }
});
