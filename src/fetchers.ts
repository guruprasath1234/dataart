import type { EventData } from "./types";

export async function fetchEvents(): Promise<EventData[]> {
  try {
    const response = await fetch("data/events.json");
    if (!response.ok) throw new Error("Failed to load events");
    return await response.json();
  } catch (err) {
    console.error("Error fetching events:", err);
    return [];
  }
}
