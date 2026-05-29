"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { ThemeToggle } from "../ui/ThemeToggle";

const navLinkClass = cn(
  "inline-flex min-h-[38px] items-center rounded-lg px-3 text-[0.94rem] font-[750] text-[var(--text-soft)]",
  "transition-colors hover:bg-slate-400/10 hover:text-[var(--text)] focus-visible:bg-slate-400/10 focus-visible:text-[var(--text)] focus-visible:outline-none",
  "[html[data-theme=light]_&]:hover:bg-[#2a6f8013] [html[data-theme=light]_&]:focus-visible:bg-[#2a6f8013]",
  "max-[680px]:min-h-[34px] max-[680px]:px-1 max-[680px]:text-[clamp(0.66rem,2.3vw,0.8rem)] max-[680px]:font-[850] max-[680px]:whitespace-nowrap"
);

export function SiteHeader({ navItems }) {
  return (
    <motion.header
      className={cn(
        "fixed top-[18px] left-1/2 z-50 flex min-h-16 w-[min(1280px,calc(100%-56px))] items-center justify-between gap-[18px] rounded-lg border border-[var(--line)] bg-[rgba(6,8,20,0.76)] p-2.5 px-3 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-[18px]",
        "[html[data-theme=light]_&]:border-[#2d46591f] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.82)] [html[data-theme=light]_&]:shadow-[0_18px_55px_rgba(31,42,54,0.07)]",
        "max-[680px]:absolute max-[680px]:top-3 max-[680px]:min-h-[54px] max-[680px]:w-[min(100%-20px,520px)] max-[680px]:flex-row max-[680px]:gap-1.5 max-[680px]:p-[7px]"
      )}
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -14, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <a
        className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-linear-to-br from-[var(--blue)] to-[var(--violet)] text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] text-sm font-black max-[680px]:size-9 max-[680px]:text-[0.92rem]"
        href="#top"
        aria-label="Smit Joshi home"
      >
        <span>SJ</span>
      </a>
      <nav className="ml-auto flex flex-wrap justify-end gap-1.5 max-[680px]:ml-0 max-[680px]:w-full max-[680px]:min-w-0 max-[680px]:flex-1 max-[680px]:flex-nowrap max-[680px]:justify-center max-[680px]:gap-px">
        {navItems.map(([label, href]) => (
          <a className={navLinkClass} key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </motion.header>
  );
}
