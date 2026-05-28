"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { cardHover, fadeUp, staggerContainer } from "../motion-presets";
import styles from "./StackSection.module.css";

export function StackSection({ skills }) {
  return (
    <section className={`${styles.section} page-shell`} id="stack" aria-labelledby="stack-title">
      <SectionHeading title="Tech Stack" id="stack-title"/>
      <motion.div
        className="skills-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <motion.article className="skill-card" key={group.title} variants={fadeUp} whileHover={cardHover}>
              <div className="skill-title">
                <Icon size={22} aria-hidden="true" />
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list">
                {group.items.map((item, index) => (
                  <motion.span
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
