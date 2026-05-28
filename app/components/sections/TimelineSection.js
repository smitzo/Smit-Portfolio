"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { KanbanBoard } from "../projects/KanbanBoard";
import { GithubLogo } from "../ui/BrandLogos";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineAccent } from "../visuals/TimelineAccent";
import { fadeUp } from "../motion-presets";
import styles from "./TimelineSection.module.css";

const projectColumns = [
  { id: "progress", title: "In Progress", kicker: "Active", states: ["progress"] },
  { id: "completed", title: "Done Projects", kicker: "Shipped", states: ["completed"] }
];

export function TimelineSection({ timeline, projects }) {
  const timelineRef = useRef(null);

  return (
    <section className={`${styles.section} ${styles.timelineSection}`} id="timeline" aria-labelledby="timeline-title">
      <div className="page-shell">
        <SectionHeading title="Growth Timeline" id="timeline-title"/>

        <div className="timeline" ref={timelineRef}>
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className={`timeline-item ${item.tone}`}
                key={`${item.years}-${item.title}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.24 }}
                whileHover={{ y: -4, borderColor: "rgba(56, 189, 248, 0.34)" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <TimelineAccent kind={item.visual} />
                <div className="timeline-year">{item.years}</div>
                <div className="timeline-rail" aria-hidden="true">
                  <motion.div
                    className={`timeline-marker ${item.state === "education" ? "education-marker" : ""}`}
                    whileInView={{ scale: [0.9, 1.06, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                  >
                    <Icon size={item.iconSize || 28} strokeWidth={2.1} aria-hidden="true" />
                  </motion.div>
                </div>
                <div className="timeline-body">
                  <div className="timeline-meta-row">
                    <div className="timeline-meta">{item.org}</div>
                    {item.openSourceProfile ? (
                      <a className="timeline-open-source" href={item.href} target="_blank" rel="noreferrer">
                        <GithubLogo size={15} />
                        {item.openSourceProfile}
                      </a>
                    ) : null}
                  </div>
                  <h3>{item.title}</h3>
                  {item.points ? (
                    <ul className="timeline-highlights" aria-label={`${item.title} highlights`}>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.coursework ? (
                    <details className="timeline-coursework">
                      <summary>
                        <span className="coursework-heading">
                          <span>Relevant Coursework</span>
                          <small>{item.coursework.length} subjects</small>
                        </span>
                        <span className="coursework-preview" aria-hidden="true">
                          {item.coursework.slice(0, 5).map((subject) => (
                            <span key={subject}>{subject}</span>
                          ))}
                        </span>
                        <ChevronDown size={16} aria-hidden="true" />
                      </summary>
                      <ul className="coursework-list" aria-label="Relevant coursework subjects">
                        {item.coursework.map((subject) => (
                          <li key={subject}>{subject}</li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                  {item.href ? (
                    <a className="inline-link" href={item.href} target="_blank" rel="noreferrer">
                      <GithubLogo size={17} />
                      {item.action}
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className={styles.projects} id="timeline-projects">
          <SectionHeading title="Project Board" id="projects-title"/>
          <KanbanBoard title="Project tasks" columns={projectColumns} items={projects} />
        </div>
      </div>
    </section>
  );
}
