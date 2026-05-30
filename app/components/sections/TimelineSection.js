"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { KanbanBoard } from "../projects/KanbanBoard";
import { GithubLogo, TimelineLogo } from "../ui/BrandLogos";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineAccent } from "../visuals/TimelineAccent";
import { fadeUp } from "../motion-presets";

const projectColumns = [
  { id: "progress", title: "In Progress", kicker: "Active", states: ["progress"] },
  { id: "completed", title: "Done Projects", kicker: "Shipped", states: ["completed"] }
];

export function TimelineSection({ timeline, projects }) {
  const timelineRef = useRef(null);

  return (
    <section
      className="relative scroll-mt-[92px] py-24 before:pointer-events-none before:absolute before:bottom-20 before:right-[-44px] before:top-20 before:w-[180px] before:skew-y-[-12deg] before:bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.14),transparent),repeating-linear-gradient(180deg,rgba(125,211,252,0.16)_0_2px,transparent_2px_18px)] before:opacity-35 before:content-[''] before:[animation:sideSignal_12s_linear_infinite] max-[680px]:py-[58px]"
      id="timeline"
      aria-labelledby="timeline-title"
    >
      <div className="mx-auto w-[min(1480px,calc(100%_-_56px))] max-[980px]:w-[min(100%_-_28px,920px)]">
        <SectionHeading title="Growth Timeline" id="timeline-title"/>

        <div className="relative grid gap-[22px]" ref={timelineRef}>
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isFirst = index === 0;
            const isLast = index === timeline.length - 1;
            return (
              <motion.article
                className={cn(
                  "relative grid grid-cols-[160px_78px_minmax(0,1fr)] items-start gap-[22px] overflow-visible rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_58px_rgba(0,0,0,0.18)] backdrop-blur-[18px]",
                  "before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-100%] before:bg-[linear-gradient(110deg,transparent_36%,rgba(125,211,252,0.1),transparent_64%)] before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 hover:before:[animation:cardSweep_1.4s_ease-out]",
                  "after:pointer-events-none after:absolute after:inset-px after:rounded-[7px] after:bg-[linear-gradient(135deg,rgba(125,211,252,0.1),transparent_34%,rgba(167,139,250,0.08))] after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100",
                  "[html[data-theme=light]_&]:border-[#2d46591c] [html[data-theme=light]_&]:bg-[var(--panel)] [html[data-theme=light]_&]:shadow-[var(--shadow)]",
                  "max-[980px]:grid-cols-[148px_72px_minmax(0,1fr)] max-[980px]:gap-[18px]",
                  "max-[680px]:grid-cols-[72px_minmax(0,1fr)] max-[680px]:gap-4"
                )}
                key={`${item.years}-${item.title}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.24 }}
                whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.34)" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <TimelineAccent kind={item.visual} />
                <div className="relative z-[1] whitespace-nowrap pt-3 font-black text-[var(--text)] max-[680px]:col-start-2 max-[680px]:row-start-1 max-[680px]:pt-1.5">{item.years}</div>
                <div
                  className={cn(
                    "relative z-[5] grid min-h-full content-start justify-items-center self-stretch pt-1.5",
                    "before:pointer-events-none before:absolute before:left-1/2 before:z-0 before:w-[3px] before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,rgba(139,92,246,0.92),rgba(56,189,248,0.96),rgba(34,211,238,0.88))] before:shadow-[0_0_24px_rgba(34,211,238,0.34)] before:content-['']",
                    "[html[data-theme=light]_&]:before:bg-[linear-gradient(180deg,rgba(118,96,184,0.54),rgba(61,111,182,0.62),rgba(42,111,128,0.58))] [html[data-theme=light]_&]:before:shadow-[0_0_20px_rgba(42,111,128,0.16)]",
                    isFirst ? "before:top-[34px]" : "before:top-[-48px]",
                    isLast ? "before:bottom-[calc(100%-34px)]" : "before:bottom-[-48px]",
                    "max-[680px]:col-start-1 max-[680px]:row-start-1 max-[680px]:row-span-2"
                  )}
                  aria-hidden="true"
                >
                  <motion.div
                    className={cn(
                      "relative z-[6] grid size-[72px] place-items-center rounded-lg border border-white/20 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.24),transparent_30%),linear-gradient(135deg,var(--violet),var(--blue)_58%,var(--cyan))] text-white shadow-[0_18px_42px_rgba(34,211,238,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] [html[data-theme=light]_&]:shadow-[0_18px_42px_rgba(61,111,182,0.14),inset_0_1px_0_rgba(255,255,255,0.24)] max-[680px]:size-16",
                      item.tone === "cyan" && "bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.24),transparent_30%),linear-gradient(135deg,var(--cyan),var(--blue))]",
                      item.tone === "blue" && "bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.24),transparent_30%),linear-gradient(135deg,#2563eb,var(--violet))]",
                      item.logo && "border-sky-200/30 bg-white p-2 text-slate-900 shadow-[0_18px_42px_rgba(34,211,238,0.16),inset_0_1px_0_rgba(255,255,255,0.85)] [html[data-theme=light]_&]:border-[#2d46591f] [html[data-theme=light]_&]:bg-white"
                    )}
                    whileInView={{ scale: [0.9, 1.06, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                  >
                    {item.logo ? (
                      <TimelineLogo src={item.logo.src} alt={item.logo.alt} width={item.logo.width} height={item.logo.height} className={item.logo.className} />
                    ) : (
                      <Icon className="relative z-[1] max-[680px]:size-[25px]" size={item.iconSize || 28} strokeWidth={2.1} aria-hidden="true" />
                    )}
                  </motion.div>
                </div>
                <div className="relative z-[1] pr-32 max-[680px]:col-start-2 max-[680px]:pr-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="font-[850] text-sky-300 [html[data-theme=light]_&]:text-[#287f92]">{item.org}</div>
                    {item.openSourceProfile ? (
                      <a className="inline-flex min-h-7 items-center gap-1.5 rounded-full border border-rose-400/25 bg-rose-400/10 px-[9px] text-[0.78rem] font-black text-rose-200 transition-[transform,border-color,background] duration-150 hover:-translate-y-px hover:border-sky-400/40 hover:bg-sky-400/10 focus-visible:-translate-y-px focus-visible:border-sky-400/40 focus-visible:bg-sky-400/10 focus-visible:outline-none [html[data-theme=light]_&]:border-[#b84f6a29] [html[data-theme=light]_&]:bg-[#b84f6a0e] [html[data-theme=light]_&]:text-[#9f3d55]" href={item.href} target="_blank" rel="noreferrer">
                        <GithubLogo size={15} />
                        {item.openSourceProfile}
                      </a>
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-[1.34rem] leading-[1.2]">{item.title}</h3>
                  {item.points ? (
                    <ul className="mt-4 grid gap-[9px]" aria-label={`${item.title} highlights`}>
                      {item.points.map((point) => (
                        <li className="relative pl-5 text-[var(--muted)] before:absolute before:left-0 before:top-[0.72em] before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-300 before:shadow-[0_0_12px_rgba(34,211,238,0.55)] before:content-[''] [html[data-theme=light]_&]:text-[#5b6874]" key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.coursework ? (
                    <details className="group mt-4 rounded-lg border border-sky-300/20 bg-sky-500/5 [html[data-theme=light]_&]:border-[#2a6f8021] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.56)]">
                      <summary className="grid cursor-pointer list-none grid-cols-[auto_minmax(0,1fr)_16px] items-center gap-x-3 gap-y-[9px] p-3 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky-300/40">
                        <span className="flex items-baseline gap-[7px] font-black">
                          <span>Relevant Coursework</span>
                          <small className="text-[0.72rem] font-black text-[var(--muted)]">{item.coursework.length} subjects</small>
                        </span>
                        <span className="flex flex-nowrap gap-[7px] overflow-hidden group-open:hidden" aria-hidden="true">
                          {item.coursework.slice(0, 5).map((subject) => (
                            <span className="inline-flex min-h-7 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-sky-300/20 bg-sky-500/10 px-2.5 text-[0.78rem] font-[850] text-blue-100 [html[data-theme=light]_&]:border-[#2a6f8021] [html[data-theme=light]_&]:bg-[#2a6f8011] [html[data-theme=light]_&]:text-[#287f92]" key={subject}>{subject}</span>
                          ))}
                        </span>
                        <ChevronDown className="text-sky-300 transition-transform duration-150 group-open:rotate-180 [html[data-theme=light]_&]:text-[#287f92]" size={16} aria-hidden="true" />
                      </summary>
                      <ul className="flex flex-wrap gap-2 px-3 pb-3" aria-label="Relevant coursework subjects">
                        {item.coursework.map((subject) => (
                          <li className="inline-flex min-h-7 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-sky-300/20 bg-sky-500/10 px-2.5 text-[0.78rem] font-[850] text-blue-100 [html[data-theme=light]_&]:border-[#2a6f8021] [html[data-theme=light]_&]:bg-[#2a6f8011] [html[data-theme=light]_&]:text-[#287f92]" key={subject}>{subject}</li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                  {item.href ? (
                    <a className="mt-[18px] inline-flex min-h-[38px] w-fit items-center gap-[7px] rounded-lg border border-sky-300/30 px-[11px] font-[850] text-sky-300 transition-[transform,border-color,color] duration-150 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none [html[data-theme=light]_&]:border-[#2a6f803d] [html[data-theme=light]_&]:bg-[#2a6f801a] [html[data-theme=light]_&]:text-[#287f92]" href={item.href} target="_blank" rel="noreferrer">
                      <GithubLogo size={17} />
                      {item.action}
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-11 border-t border-[var(--line)] pt-[38px] max-[680px]:mt-[34px] max-[680px]:pt-[30px]" id="timeline-projects">
          <SectionHeading title="Project Board" id="projects-title"/>
          <KanbanBoard title="Project tasks" columns={projectColumns} items={projects} />
        </div>
      </div>
    </section>
  );
}
