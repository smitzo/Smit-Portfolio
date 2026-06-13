"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { fadeUp } from "../motion-presets";

export function SectionHeading({ kicker, title, children, id }) {
  return (
    <div className="mb-[34px] grid grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] items-start gap-10 max-[980px]:grid-cols-1">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        {kicker ? <p className="text-[0.96rem] font-black text-sky-300">{kicker}</p> : null}
        <h2 className="mt-2.5 max-w-[860px] text-[3.35rem] font-[930] leading-none tracking-normal max-[980px]:text-[2.62rem] max-[680px]:text-[2.12rem]" id={id}>{title}</h2>
      </motion.div>
      {children ? (
        <motion.p
          className={cn("text-[var(--muted)]", "[html[data-theme=light]_&]:text-[#5b6874]")}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {children}
        </motion.p>
      ) : null}
    </div>
  );
}
