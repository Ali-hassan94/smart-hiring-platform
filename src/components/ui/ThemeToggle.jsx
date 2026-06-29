"use client";

import {
  useTheme,
} from "@/context/theme-provider";

export default function ThemeToggle() {
  const {
    theme,
    setTheme,
  } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
      px-4
      py-2
      rounded-xl
      border
      border-white/10
      "
    >
      {theme === "dark"
        ? "☀️"
        : "🌙"}
    </button>
  );
}