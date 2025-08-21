export type EventData = {
  id: string;          // unique id, or use `${year}-${index}`
  year: number;
  title: string;
  description: string;
  image?: string;      // e.g. "/images/foo.jpg"
  category?: string;   // optional
};
