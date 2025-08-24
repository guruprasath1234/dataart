  import { useEffect, useMemo, useState } from "react";
  import "./index.css";
  import type { EventData } from "./types";
  import Header from "./components/Header";
  import Timeline from "./components/Timeline";
  import EventModal from "./components/EventModal";
  import FilterPanel from "./components/FilterPanel";

  function App() {
    const [events, setEvents] = useState<EventData[]>([]);
    const [selected, setSelected] = useState<EventData | null>(null);
    const [isDark, setIsDark] = useState<boolean>(() => {
      // restore theme from localStorage
      const saved = localStorage.getItem("theme");
      return saved ? saved === "dark" : false;
    });
    const [category, setCategory] = useState<string>("all");

    // load data once
    useEffect(() => {
      fetch("/data/events.json")
        .then((r) => r.json())
        .then((data: EventData[]) => {
          // normalize: year as number, ensure id
          const normalized = data.map((e, i) => ({
            ...e,
            year: Number(e.year),
            id: e.id ?? `${e.year}-${i}`,
          }));
          setEvents(normalized);
        })
        .catch((err) => console.error("Failed to load events.json", err));
    }, []);

    // theme side effects
    useEffect(() => {
      document.body.classList.toggle("dark-mode", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const categories = useMemo(() => {
      const set = new Set<string>();
      events.forEach((e) => e.category && set.add(e.category));
      return ["all", ...Array.from(set)];
    }, [events]);

    const filtered = useMemo(() => {
      if (category === "all") return events;
      return events.filter((e) => e.category === category);
    }, [events, category]);

    return (
      <>
        <Header isDark={isDark} onToggleDark={() => setIsDark((d) => !d)} />
        <main className="container">
          <FilterPanel
            categories={categories}
            selected={category}
            onChange={setCategory}
          />
          <Timeline  events={filtered}  onSelect={setSelected} selectedEvent={selected}   
/>
        </main>
        <EventModal event={selected} onClose={() => setSelected(null)} />
        <footer className="footer">© {new Date().getFullYear()} My Timeline</footer>
      </>
    );
  }

  export default App;