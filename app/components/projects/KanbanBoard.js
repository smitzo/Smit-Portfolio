"use client";

import { motion } from "framer-motion";
import { KanbanCard } from "./KanbanCard";
import { fadeUp } from "../motion-presets";

export function KanbanBoard({ title, columns, items }) {
  return (
    <motion.div
      className="grid grid-cols-2 items-start gap-4 max-[980px]:grid-cols-1"
      aria-label={title}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
    >
      {columns.map((column) => {
        const columnItems = items.filter((item) => column.states.includes(item.state));

        return (
          <section
            className="min-w-0 overflow-hidden rounded-lg border border-[var(--line)] bg-[linear-gradient(180deg,rgba(125,211,252,0.06),transparent_28%),var(--panel)] shadow-[var(--shadow)] [html[data-theme=light]_&]:border-[#2d46591c] [html[data-theme=light]_&]:bg-[var(--panel)]"
            key={column.id}
            aria-labelledby={`${column.id}-title`}
          >
            <div className="flex min-h-[78px] items-center justify-between gap-[18px] px-[18px] pb-3 pt-[18px] max-[680px]:min-h-[70px] max-[680px]:px-4 max-[680px]:pb-2.5 max-[680px]:pt-4">
              <div>
                <p className="text-[0.78rem] font-black uppercase text-sky-300 [html[data-theme=light]_&]:text-[#287f92]">{column.kicker}</p>
                <h3 className="mt-0.5 text-[1.12rem] text-[var(--text)]" id={`${column.id}-title`}>{column.title}</h3>
              </div>
              <span className="grid size-[34px] shrink-0 place-items-center rounded-lg border border-sky-300/30 bg-sky-500/10 text-[0.92rem] font-black text-sky-300 [html[data-theme=light]_&]:border-[#2a6f803d] [html[data-theme=light]_&]:bg-[#2a6f801a] [html[data-theme=light]_&]:text-[#287f92]">{columnItems.length}</span>
            </div>
            <div className="mx-[18px] mb-3.5 h-[5px] overflow-hidden rounded-full bg-slate-400/10" aria-hidden="true">
              <span
                className={`block h-full rounded-[inherit] shadow-[0_0_18px_rgba(34,211,238,0.34)] ${
                  column.id === "completed" ? "bg-linear-to-r from-[var(--green)] to-[var(--cyan)]" : "bg-linear-to-r from-[var(--cyan)] to-[var(--violet)]"
                }`}
                style={{ width: columnItems.length ? `${Math.min(100, 34 + columnItems.length * 16)}%` : "18%" }}
              />
            </div>
            <div className="grid gap-2.5 px-3 pb-3 max-[680px]:px-2.5 max-[680px]:pb-2.5">
              {columnItems.map((item, index) => (
                <KanbanCard item={item} index={index} key={`${column.id}-${item.title}`} />
              ))}
            </div>
          </section>
        );
      })}
    </motion.div>
  );
}
