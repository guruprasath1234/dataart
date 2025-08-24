export type EventData = {
  id: string;          // unique id, or use `${year}-${index}`
  year: number;
  title: string;
  description: string;
  imageURL: string;      // e.g. "/images/foo.jpg"
  category?: string;   // optional
};
