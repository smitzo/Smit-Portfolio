"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { SectionHeading } from "../ui/SectionHeading";
import { cardHover, fadeUp, staggerContainer } from "../motion-presets";
import styles from "./StackSection.module.css";

export function StackSection({ skills }) {
  return (
    <section className={`${styles.section} page-shell`} id="stack" aria-labelledby="stack-title">
      <SectionHeading title="Tech Stack" id="stack-title"/>
      <motion.div
        className="grid grid-cols-4 items-stretch gap-4 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <motion.article
              className="relative min-h-[180px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] [html[data-theme=light]_&]:border-[#2d46591c]"
              key={group.title}
              variants={fadeUp}
              whileHover={cardHover}
            >
              <div className="flex items-center gap-2.5 text-sky-300 [html[data-theme=light]_&]:text-[#287f92]">
                <Icon size={22} aria-hidden="true" />
                <h3 className="m-0 text-[var(--text)]">{group.title}</h3>
              </div>
              <div className="mt-[18px] flex flex-wrap gap-2">
                {group.items.map((item, index) => (
                  <motion.span
                    className={cn(
                      "inline-flex min-h-[30px] items-center rounded-lg border border-slate-400/20 bg-slate-900/70 px-[9px] py-1 text-[0.88rem] font-[760] text-[var(--text-soft)]",
                      "[html[data-theme=light]_&]:border-[#2d46591c] [html[data-theme=light]_&]:bg-[rgba(250,252,248,0.72)] [html[data-theme=light]_&]:text-[#4c5968]"
                    )}
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.24, delay: index * 0.025 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
