"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "../../lib/cn";
import { GithubLogo } from "../ui/BrandLogos";
import { cardHover, fadeUp } from "../motion-presets";

export function KanbanCard({ item, index = 0 }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  const detailTags = item.tags || item.points || [];
  const githubHref = item.githubHref || (item.href?.includes("github.com") ? item.href : null);
  const liveHref = item.liveHref || (item.href && !item.href.includes("github.com") ? item.href : null);
  const hasProjectLinks = Boolean(githubHref || liveHref);

  const toggleOpen = () => setOpen((value) => !value);

  return (
    <motion.article
      className={cn(
        "relative overflow-hidden rounded-lg border border-[var(--line)] bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.1),transparent_36%),rgba(15,23,42,0.62)] shadow-[0_14px_42px_rgba(0,0,0,0.16)]",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent_46%,rgba(56,189,248,0.12),rgba(139,92,246,0.1))] before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100",
        "after:pointer-events-none after:absolute after:inset-[-60%] after:z-0 after:bg-[radial-gradient(circle_at_18%_26%,rgba(34,211,238,0.52),transparent_24%),radial-gradient(circle_at_72%_28%,rgba(56,189,248,0.42),transparent_23%),radial-gradient(circle_at_62%_76%,rgba(139,92,246,0.38),transparent_24%),conic-gradient(from_90deg,transparent,rgba(56,189,248,0.3),transparent,rgba(139,92,246,0.36),transparent)] after:opacity-0 after:transition-[opacity,transform] after:duration-500 after:[transform:translate3d(-8%,8%,0)_scale(0.82)_rotate(0deg)] hover:after:opacity-60 hover:after:[animation:fluidHover_5.5s_ease-in-out_infinite_alternate] hover:after:[transform:translate3d(5%,-4%,0)_scale(1.06)_rotate(16deg)]",
        "[html[data-theme=light]_&]:border-[#2d46591a] [html[data-theme=light]_&]:bg-[linear-gradient(135deg,rgba(42,111,128,0.045),transparent_42%),rgba(250,252,248,0.84)] [html[data-theme=light]_&]:shadow-[var(--shadow)]",
        "[html[data-theme=light]_&]:after:bg-[radial-gradient(circle_at_18%_26%,rgba(42,111,128,0.38),transparent_24%),radial-gradient(circle_at_72%_28%,rgba(61,111,182,0.34),transparent_23%),radial-gradient(circle_at_62%_76%,rgba(118,96,184,0.3),transparent_24%),conic-gradient(from_90deg,transparent,rgba(42,111,128,0.24),transparent,rgba(118,96,184,0.28),transparent)]",
        open && "before:opacity-100 after:opacity-60 after:[animation:fluidHover_5.5s_ease-in-out_infinite_alternate] after:[transform:translate3d(5%,-4%,0)_scale(1.06)_rotate(16deg)]"
      )}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      whileHover={cardHover}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.42, delay: index * 0.035 }}
      layout
    >
      <div className="relative z-[1] grid min-h-[154px] w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 bg-transparent p-4 text-left text-inherit max-[680px]:min-h-0 max-[680px]:grid-cols-[minmax(0,1fr)_38px] max-[680px]:p-3.5">
        <button
          className="grid min-w-0 cursor-pointer gap-2 border-0 bg-transparent text-left text-inherit focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300/50"
          type="button"
          onClick={toggleOpen}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${item.title}`}
        >
          <span className="inline-flex min-h-7 w-fit max-w-full items-center gap-[7px] overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-sky-300/25 bg-sky-500/10 px-2 py-[3px] text-[0.78rem] font-[850] text-sky-300 [html[data-theme=light]_&]:border-[#2a6f803d] [html[data-theme=light]_&]:bg-[#2a6f801a] [html[data-theme=light]_&]:text-[#287f92]">
            <span
              className={cn(
                "size-[9px] rounded-full bg-[var(--green)] shadow-[0_0_18px_rgba(52,211,153,0.85)]",
                item.state === "progress" && "bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.85)]",
                item.state === "education" && "bg-violet-300 shadow-[0_0_18px_rgba(167,139,250,0.85)]"
              )}
              aria-hidden="true"
            />
            {item.status || item.eyebrow}
          </span>
          <span className="flex min-w-0 items-center gap-2">
            {Icon ? (
              <span className="grid size-[30px] shrink-0 place-items-center rounded-lg border border-sky-300/25 bg-sky-500/10 text-sky-300 [html[data-theme=light]_&]:border-[#2a6f803d] [html[data-theme=light]_&]:bg-[#2a6f801a] [html[data-theme=light]_&]:text-[#287f92]" aria-hidden="true">
                <Icon size={17} />
              </span>
            ) : null}
            <span className="min-w-0 text-[1.08rem] font-black leading-[1.18] text-[var(--text)] max-[680px]:text-base">{item.title}</span>
          </span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.84rem] font-[820] text-violet-300 [html[data-theme=light]_&]:text-[#7660b8]">{item.meta || item.years || item.eyebrow}</span>
          <span className="line-clamp-2 overflow-hidden text-[0.96rem] font-[650] text-[var(--text-soft)] [html[data-theme=light]_&]:text-[#5b6874]">{item.summary}</span>
        </button>
        <div className="grid justify-items-end gap-2">
          {hasProjectLinks ? (
            <span className="inline-flex shrink-0 items-center gap-1.5" aria-label={`${item.title} links`}>
              {githubHref ? (
                <a className="inline-grid size-7 place-items-center rounded-lg border border-sky-300/35 bg-sky-500/15 text-sky-200 transition-[transform,border-color,background,color] duration-150 hover:-translate-y-px hover:border-sky-300/60 hover:bg-sky-500/20 hover:text-slate-50 focus-visible:-translate-y-px focus-visible:border-sky-300/60 focus-visible:bg-sky-500/20 focus-visible:text-slate-50 focus-visible:outline-none [html[data-theme=light]_&]:border-[#2a6f8038] [html[data-theme=light]_&]:bg-[#2a6f8014] [html[data-theme=light]_&]:text-[#287f92] [html[data-theme=light]_&]:hover:border-[#2a6f8057] [html[data-theme=light]_&]:hover:bg-[#2a6f8021] [html[data-theme=light]_&]:hover:text-[#172033]" href={githubHref} target="_blank" rel="noreferrer" aria-label={`${item.title} GitHub`}>
                  <GithubLogo size={16} />
                </a>
              ) : null}
              {liveHref ? (
                <a className="inline-grid size-7 place-items-center rounded-lg border border-emerald-300/35 bg-emerald-400/10 text-emerald-200 transition-[transform,border-color,background,color] duration-150 hover:-translate-y-px hover:border-emerald-300/60 hover:bg-emerald-400/20 hover:text-emerald-50 focus-visible:-translate-y-px focus-visible:border-emerald-300/60 focus-visible:bg-emerald-400/20 focus-visible:text-emerald-50 focus-visible:outline-none [html[data-theme=light]_&]:border-[#2f8a6338] [html[data-theme=light]_&]:bg-[#2f8a6314] [html[data-theme=light]_&]:text-[#2f8a63] [html[data-theme=light]_&]:hover:border-[#2f8a6357] [html[data-theme=light]_&]:hover:bg-[#2f8a6321] [html[data-theme=light]_&]:hover:text-[#172033]" href={liveHref} target="_blank" rel="noreferrer" aria-label={`${item.title} live site`}>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ) : null}
            </span>
          ) : null}
          <button
            className="grid size-[38px] cursor-pointer place-items-center rounded-lg border border-sky-300/50 bg-sky-500/20 p-0 text-sky-200 shadow-[0_0_0_1px_rgba(125,211,252,0.08),0_12px_28px_rgba(14,165,233,0.14)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky-300/50 [html[data-theme=light]_&]:border-[#2a6f803d] [html[data-theme=light]_&]:bg-[#2a6f801a] [html[data-theme=light]_&]:text-[#287f92] [html[data-theme=light]_&]:shadow-[0_0_0_1px_rgba(42,111,128,0.04),0_12px_28px_rgba(42,111,128,0.08)] max-[680px]:size-[42px]"
            type="button"
            onClick={toggleOpen}
            aria-expanded={open}
            aria-label={`${open ? "Collapse" : "Expand"} ${item.title}`}
          >
            <motion.span className="grid place-items-center" animate={{ rotate: open ? 180 : 0, scale: open ? 1.04 : 1 }} aria-hidden="true">
              <ChevronDown size={18} />
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="relative z-[1] overflow-hidden px-4 pb-4 max-[680px]:px-3.5 max-[680px]:pb-3.5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {item.description ? <p className="mb-3.5 font-[650] text-slate-200 [html[data-theme=light]_&]:text-[#5b6874]">{item.description}</p> : null}
              {detailTags.length ? (
                <ul className="flex flex-wrap gap-2" aria-label={`${item.title} ${item.tags ? "tech stack" : "details"}`}>
                  {detailTags.map((tag) => (
                    <li className="inline-flex min-h-[30px] items-center rounded-lg border border-slate-400/20 bg-slate-900/70 px-[9px] py-1 text-[0.88rem] font-[760] text-[var(--text-soft)] [html[data-theme=light]_&]:border-[#2d46591c] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.72)] [html[data-theme=light]_&]:text-[#4c5968]" key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
