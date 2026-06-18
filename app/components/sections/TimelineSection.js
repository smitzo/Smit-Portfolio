"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { KanbanBoard } from "../projects/KanbanBoard";
import { GithubLogo } from "../ui/BrandLogos";

const journeyAccents = ["#007aff", "#5856d6", "#00a6a6", "#af52de"];

function SectionHeading({ eyebrow, title, intro, id }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

export function TimelineSection({ timeline, projects }) {
  const journeyRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const journey = journeyRef.current;
    const progress = progressRef.current;
    if (!journey || !progress) return;

    let frame = 0;

    const updateProgress = () => {
      const rect = journey.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.72;
      const end = viewportHeight * 0.24;
      const distance = rect.height + start - end;
      const travelled = start - rect.top;
      const value = Math.min(1, Math.max(0, travelled / distance));

      progress.style.transform = `scaleY(${value})`;
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <section className="content-section" id="experience" aria-labelledby="journey-title">
        <SectionHeading
          eyebrow="Journey"
          title="From engineering foundations to production systems."
          intro="Education, freelance work, and Odoo product engineering form one continuous path through practical, correctness-focused software."
          id="journey-title"
        />

        <div className="journey" ref={journeyRef}>
          <div className="journey-track" aria-hidden="true">
            <span className="journey-progress" ref={progressRef} />
          </div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEducation = item.state === "education";

            return (
              <article
                className={`journey-entry ${index % 2 ? "journey-entry-right" : "journey-entry-left"}`}
                id={isEducation ? "education" : undefined}
                style={{ "--accent": journeyAccents[index % journeyAccents.length] }}
                key={`${item.years}-${item.title}`}
              >
                <span className="journey-marker" aria-hidden="true">
                  <Icon size={23} />
                </span>

                <div className="journey-card">
                  <div className="journey-card-top">
                    <span className="journey-org">{item.org}</span>
                    <span className="date-chip">{item.years}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="journey-summary">{item.description}</p>

                  <ul className="highlight-list">
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>

                  {item.coursework ? (
                    <div className="journey-coursework">
                      <p className="coursework-label">Relevant coursework</p>
                      <ul className="coursework-list">
                        {item.coursework.map((subject) => <li key={subject}>{subject}</li>)}
                      </ul>
                    </div>
                  ) : null}

                  {item.href ? (
                    <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
                      <GithubLogo size={16} />
                      {item.action}
                      <ArrowUpRight size={15} />
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section" id="projects" aria-labelledby="projects-title">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that solve a clear problem."
          intro="A mix of shipped products and active builds. Three stars mark the work I consider strongest."
          id="projects-title"
        />
        <KanbanBoard items={projects} />
      </section>
    </>
  );
}
