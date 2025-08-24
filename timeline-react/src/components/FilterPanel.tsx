type Props = {
  categories: string[];  
  selected: string;
  onChange: (c: string) => void;
};

export default function FilterPanel({ categories, selected, onChange }: Props) {
  if (categories.length <= 1) return null;

  return (
    <aside className="filters">
      <label>
        Category:&nbsp;
        <select
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Filter by category"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
    </aside>
  );
}
