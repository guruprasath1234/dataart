import { fetchEvents } from "./fetchers";
import { renderTimeline } from "./renderer";

document.addEventListener("DOMContentLoaded", async () => {
  const themeToggle = document.getElementById("theme-toggle") as HTMLInputElement;

  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", themeToggle.checked);
  });

  const events = await fetchEvents();
  renderTimeline(events);
});
