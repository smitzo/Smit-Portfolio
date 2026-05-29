"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const baseAccentClass = "pointer-events-none absolute right-[22px] top-[22px] z-[1] h-16 w-[94px] rounded-lg border border-sky-300/20 bg-[rgba(2,6,23,0.4)] shadow-[inset_0_0_28px_rgba(56,189,248,0.06)] [html[data-theme=light]_&]:border-[#2a6f8021] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.58)] [html[data-theme=light]_&]:shadow-[inset_0_0_26px_rgba(42,111,128,0.045)] max-[680px]:hidden";

export function TimelineAccent({ kind }) {
  if (kind === "api") {
    return (
      <motion.div className={`${baseAccentClass} grid gap-1.5 p-2`} aria-hidden="true">
        {["POST", "TAX", "OK"].map((label, index) => (
          <motion.span
            className="flex min-h-3 items-center rounded-full bg-[linear-gradient(90deg,rgba(125,211,252,0.32),transparent)] pl-[7px] text-[0.62rem] font-[950] text-blue-100 [html[data-theme=light]_&]:bg-[linear-gradient(90deg,rgba(42,111,128,0.12),transparent)] [html[data-theme=light]_&]:text-[#287f92]"
            key={label}
            animate={{ x: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.22 }}
          >
            {label}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (kind === "workflow") {
    return (
      <motion.div className={`${baseAccentClass} flex items-center justify-around before:absolute before:left-[18px] before:right-[18px] before:top-1/2 before:h-0.5 before:bg-[linear-gradient(90deg,rgba(125,211,252,0.2),rgba(167,139,250,0.78),rgba(125,211,252,0.2))] before:content-['']`} aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <motion.span
            className="relative z-[1] size-3.5 rounded-full bg-[var(--cyan)] shadow-[0_0_18px_rgba(34,211,238,0.72)]"
            key={dot}
            animate={{ scale: [0.86, 1.18, 0.86], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: dot * 0.22 }}
          />
        ))}
      </motion.div>
    );
  }

  if (kind === "bars") {
    return (
      <motion.div className={`${baseAccentClass} flex items-end justify-center gap-2 px-2.5 py-[9px]`} aria-hidden="true">
        {[24, 38, 30, 48].map((height, index) => (
          <motion.span
            className="w-2.5 origin-bottom rounded-t-full rounded-b-[3px] bg-[linear-gradient(180deg,var(--cyan),rgba(139,92,246,0.48))]"
            key={height}
            style={{ height }}
            animate={{ scaleY: [0.55, 1, 0.55] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.16 }}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div className={`${baseAccentClass} grid place-items-center text-sky-300 [html[data-theme=light]_&]:text-[#287f92]`} aria-hidden="true">
      <motion.span
        className="absolute inset-[7px] rounded-full border border-dashed border-sky-300/45"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1 left-1/2 size-2 rounded-full bg-[var(--purple)] shadow-[0_0_18px_rgba(168,85,247,0.8)]" />
      </motion.span>
      <motion.span
        className="relative z-[1] grid place-items-center drop-shadow-[0_0_14px_rgba(34,211,238,0.42)] [&_svg]:size-[34px]"
        animate={{ scale: [0.96, 1.08, 0.96] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <GraduationCap size={54} />
      </motion.span>
    </motion.div>
  );
}
