"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../lib/cn";

const STORAGE_KEY = "portfolio-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const nextTheme = stored || preferred;
    document.documentElement.dataset.theme = nextTheme;
    const frame = window.requestAnimationFrame(() => setTheme(nextTheme));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  const isLight = theme === "light";
  const Icon = isLight ? Moon : Sun;

  return (
    <button
      className={cn(
        "grid size-10 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-lg border border-[var(--line)] bg-slate-900/40 text-[var(--text)] transition-[transform,border-color,background,box-shadow] duration-150",
        "hover:-translate-y-px hover:border-sky-300/40 hover:shadow-[0_14px_36px_rgba(56,189,248,0.16)] focus-visible:-translate-y-px focus-visible:border-sky-300/40 focus-visible:shadow-[0_14px_36px_rgba(56,189,248,0.16)] focus-visible:outline-none",
        "[html[data-theme=light]_&]:border-[#2d46591f] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.78)] [html[data-theme=light]_&]:text-[#172033]",
        "[html[data-theme=light]_&]:hover:border-[#2a6f8038] [html[data-theme=light]_&]:hover:shadow-[0_14px_36px_rgba(31,42,54,0.08)] [html[data-theme=light]_&]:focus-visible:border-[#2a6f8038] [html[data-theme=light]_&]:focus-visible:shadow-[0_14px_36px_rgba(31,42,54,0.08)]",
        "max-[680px]:size-9"
      )}
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      title={`Switch to ${isLight ? "dark" : "light"} theme`}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}
