"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, LockKeyhole, Star } from "lucide-react";
import { cn } from "../../lib/cn";
import { GithubLogo } from "../ui/BrandLogos";
import { fadeUp } from "../motion-presets";

const accents = [
  {
    icon: "border-cyan-300/35 bg-cyan-400/12 text-cyan-300",
    button: "border-cyan-300/40 hover:border-cyan-200/70",
    light: "[html[data-theme=light]_&]:border-cyan-700/25 [html[data-theme=light]_&]:bg-cyan-600/8 [html[data-theme=light]_&]:text-cyan-700"
  },
  {
    icon: "border-violet-300/35 bg-violet-400/12 text-violet-300",
    button: "border-violet-300/40 hover:border-violet-200/70",
    light: "[html[data-theme=light]_&]:border-violet-700/25 [html[data-theme=light]_&]:bg-violet-600/8 [html[data-theme=light]_&]:text-violet-700"
  },
  {
    icon: "border-sky-300/35 bg-sky-400/12 text-sky-300",
    button: "border-sky-300/40 hover:border-sky-200/70",
    light: "[html[data-theme=light]_&]:border-sky-700/25 [html[data-theme=light]_&]:bg-sky-600/8 [html[data-theme=light]_&]:text-sky-700"
  }
];

export function KanbanCard({ item, index = 0 }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  const tags = item.tags || [];
  const githubHref = item.githubHref || (item.href?.includes("github.com") ? item.href : null);
  const liveHref = item.liveHref || (item.href && !item.href.includes("github.com") ? item.href : null);
  const rating = Math.min(3, Math.max(0, item.rating || 0));
  const accent = accents[index % accents.length];

  return (
    <motion.article
      className="group relative flex min-h-[310px] min-w-0 flex-col overflow-hidden rounded-xl border border-slate-400/20 bg-[linear-gradient(145deg,rgba(15,23,42,0.96),rgba(9,14,32,0.9))] p-4 shadow-[0_16px_38px_rgba(0,0,0,0.18)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-sky-300/35 hover:shadow-[0_20px_48px_rgba(2,132,199,0.12)] [html[data-theme=light]_&]:border-[#2d46591f] [html[data-theme=light]_&]:bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(244,248,246,0.94))] [html[data-theme=light]_&]:shadow-[0_14px_36px_rgba(31,42,54,0.08)]"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.34, delay: Math.min(index, 4) * 0.035 }}
      layout
    >
      <div className="flex items-start gap-3">
        <span className={cn("grid size-10 shrink-0 place-items-center rounded-lg border", accent.icon, accent.light)} aria-hidden="true">
          {Icon ? <Icon size={20} strokeWidth={2} /> : <span className="text-base font-bold">{item.title.charAt(0)}</span>}
        </span>

        <button
          className="min-w-0 flex-1 pt-0.5 text-left focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky-300/60"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${item.title}`}
        >
          <span className="block truncate text-sm font-semibold leading-5 text-[var(--text)]">{item.title}</span>
          <span className="mt-1 inline-flex items-center gap-1.5 text-[0.68rem] font-medium text-[var(--muted)]">
            <span
              className={cn(
                "size-1.5 rounded-full bg-emerald-400",
                item.state === "progress" && "bg-amber-400"
              )}
              aria-hidden="true"
            />
            {item.status}
          </span>
        </button>

        <div className="flex shrink-0 items-center gap-1">
          {rating ? (
            <span className="inline-flex gap-0.5 text-amber-300 [html[data-theme=light]_&]:text-amber-500" aria-label={`${rating} out of 3 stars`}>
              {Array.from({ length: rating }, (_, starIndex) => (
                <Star key={starIndex} size={14} fill="currentColor" strokeWidth={1.8} aria-hidden="true" />
              ))}
            </span>
          ) : null}
          <button
            className="grid size-7 place-items-center rounded-md text-[var(--muted)] transition-colors hover:bg-white/7 hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-sky-300/60 [html[data-theme=light]_&]:hover:bg-slate-900/5"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={`${open ? "Collapse" : "Expand"} ${item.title}`}
          >
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} aria-hidden="true">
              <ChevronDown size={16} />
            </motion.span>
          </button>
        </div>
      </div>

      <p className="mt-3 line-clamp-3 min-h-[60px] text-[0.78rem] font-normal leading-5 text-[var(--muted)]">{item.summary}</p>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-3 border-t border-slate-400/15 pt-3 text-[0.76rem] font-normal leading-5 text-[var(--text-soft)]">
              {item.description}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-400/15 pt-3" aria-label={`${item.title} tech stack`}>
        {tags.slice(0, open ? tags.length : 3).map((tag) => (
          <li
            className="rounded-md border border-sky-300/18 bg-sky-400/5 px-2 py-1 text-[0.64rem] font-medium leading-none text-sky-200 [html[data-theme=light]_&]:border-[#2a6f8029] [html[data-theme=light]_&]:bg-[#2a6f800a] [html[data-theme=light]_&]:text-[#287f92]"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
        {githubHref ? (
          <a
            className={cn("inline-flex min-h-9 items-center justify-center gap-2 rounded-md border bg-slate-950/25 text-[0.72rem] font-semibold text-[var(--text)] transition-[border-color,background] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/60 [html[data-theme=light]_&]:bg-white/60", accent.button)}
            href={githubHref}
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={14} />
            GitHub
          </a>
        ) : (
          <span className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-slate-400/15 text-[0.72rem] font-medium text-[var(--muted)]">
            <LockKeyhole size={13} aria-hidden="true" />
            Private
          </span>
        )}

        {liveHref ? (
          <a
            className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-violet-300/40 bg-violet-400/5 text-[0.72rem] font-semibold text-[var(--text)] transition-[border-color,background] hover:border-violet-200/70 hover:bg-violet-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300/60"
            href={liveHref}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        ) : (
          <span className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-dashed border-violet-300/20 text-[0.72rem] font-medium text-[var(--muted)]" title="Live demo coming soon">
            Live Demo
            <ExternalLink size={13} aria-hidden="true" />
          </span>
        )}
      </div>
    </motion.article>
  );
}
