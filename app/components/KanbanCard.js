"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { GithubLogo } from "./BrandLogos";
import { cardHover, fadeUp } from "./motion-presets";

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
      className={`kanban-card ${open ? "is-open" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      whileHover={cardHover}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.42, delay: index * 0.035 }}
      layout
    >
      <div className="kanban-card-button">
        <button
          className="kanban-card-hitarea"
          type="button"
          onClick={toggleOpen}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${item.title}`}
        />
        <span className="kanban-card-main">
          <span className="kanban-card-topline">
            <span className={`status-dot ${item.state}`} aria-hidden="true" />
            {item.status || item.eyebrow}
          </span>
          <span className="kanban-card-title-row">
            {Icon ? (
              <span className="kanban-card-icon" aria-hidden="true">
                <Icon size={17} />
              </span>
            ) : null}
            <span className="kanban-card-title">{item.title}</span>
            {hasProjectLinks ? (
              <span className="project-title-links" aria-label={`${item.title} links`}>
                {githubHref ? (
                  <a className="project-title-link" href={githubHref} target="_blank" rel="noreferrer" aria-label={`${item.title} GitHub`}>
                    <GithubLogo size={16} />
                  </a>
                ) : null}
                {liveHref ? (
                  <a className="project-title-link live" href={liveHref} target="_blank" rel="noreferrer" aria-label={`${item.title} live site`}>
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </span>
            ) : null}
          </span>
          <span className="kanban-card-meta">{item.meta || item.years || item.eyebrow}</span>
          <span className="kanban-card-summary">{item.summary}</span>
        </span>
        <motion.span
          className="summary-icon kanban-toggle-icon"
          animate={{ rotate: open ? 180 : 0, scale: open ? 1.04 : 1 }}
          aria-hidden="true"
        >
          <ChevronDown size={18} />
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="kanban-details"
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
              {item.description ? <p>{item.description}</p> : null}
              {detailTags.length ? (
                <ul className="tag-list" aria-label={`${item.title} ${item.tags ? "tech stack" : "details"}`}>
                  {detailTags.map((tag) => (
                    <li key={tag}>{tag}</li>
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
