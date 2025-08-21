type Props = {
  isDark: boolean;
  onToggleDark: () => void;
};

export default function Header({ isDark, onToggleDark }: Props) {
  return (
    <header className="header">
      <div className="logo">🕒 <b>My Timeline</b></div>

      <label className="switch">
        <input
          type="checkbox"
          checked={isDark}
          onChange={onToggleDark}
          aria-label="Toggle dark mode"
        />
        <span className="slider" />
      </label>
    </header>
  );
}

