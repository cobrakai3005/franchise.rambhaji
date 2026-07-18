import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] transition-colors"
      aria-label="Toggle theme"
    >
      <div>
        {dark ? <Moon size={16} /> : <Sun size={16} />}
      </div>
    </button>
  );
}
