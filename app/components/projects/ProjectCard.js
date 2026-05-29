"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { cardHover, fadeUp } from "../motion-presets";

export function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const detailTags = project.tags || project.points || [];

  return (
    <motion.article
      className={`project-card ${open ? "is-open" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      whileHover={cardHover}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      layout
    >
      <motion.span className="project-glow-line" layoutId={`project-glow-${project.title}`} />
      <button className="project-summary-button" type="button" onClick={() => setOpen((value) => !value)}>
        <span className="project-summary-main">
          <span className="project-status">
            <span className={`status-dot ${project.state}`} aria-hidden="true" />
            {project.status}
          </span>
          <span className="project-eyebrow">{project.eyebrow}</span>
          <span className="project-title">{project.title}</span>
          <span className="project-summary">{project.summary}</span>
        </span>
        <motion.span
          className="summary-icon"
          animate={{
            rotate: open ? 180 : 0,
            scale: open ? 1.04 : 1
          }}
          aria-hidden="true"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="project-details"
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
              <p>{project.description}</p>
              {detailTags.length ? (
                <ul className="tag-list" aria-label={`${project.title} ${project.tags ? "tech stack" : "capabilities"}`}>
                  {detailTags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}
              {project.href ? (
                <a className="inline-link" href={project.href} target="_blank" rel="noreferrer">
                  {project.action}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <span className="inline-link muted-link">In progress</span>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
