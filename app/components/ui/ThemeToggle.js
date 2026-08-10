"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "portfolio-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const frame = window.requestAnimationFrame(() => setTheme(currentTheme));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  const isLight = theme === "light";
  const Icon = isLight ? Moon : Sun;

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      title={`Switch to ${isLight ? "dark" : "light"} theme`}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}
