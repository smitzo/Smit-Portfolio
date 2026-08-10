"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { KanbanBoard } from "../projects/KanbanBoard";
import { GithubLogo } from "../ui/BrandLogos";

const journeyAccents = ["#6d5dfc", "#0c8ea0", "#337d5d", "#9b663d"];

function formatDuration(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = endDate ? new Date(`${endDate}T00:00:00`) : new Date();
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months += end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) months -= 1;
  months = Math.max(0, months);

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts = [];

  if (years) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (remainingMonths) {
    parts.push(`${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`);
  }

  return parts.join(" ") || "Less than a month";
}

function SectionHeading({ eyebrow, title, intro, id }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export function TimelineSection({ timeline }) {
  const journeyRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const journey = journeyRef.current;
    const progress = progressRef.current;
    if (!journey || !progress) return;

    let frame = 0;

    const updateProgress = () => {
      const rect = journey.getBoundingClientRect();
      const start = window.innerHeight * 0.72;
      const distance = rect.height + start - window.innerHeight * 0.24;
      const value = Math.min(1, Math.max(0, (start - rect.top) / distance));

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
          eyebrow="Experience"
          title="From engineering projects to production software."
          id="journey-title"
        />

        <div className="journey" ref={journeyRef}>
          <div className="journey-track" aria-hidden="true">
            <span className="journey-progress" ref={progressRef} />
          </div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const duration = item.durationLabel || formatDuration(item.startDate, item.endDate);

            return (
              <article
                className="journey-entry"
                id={item.state === "education" ? "education" : undefined}
                style={{ "--accent": journeyAccents[index % journeyAccents.length] }}
                key={`${item.years}-${item.title}`}
              >
                <span className="journey-marker" aria-hidden="true">
                  <Icon size={22} />
                </span>

                <div className="journey-meta">
                  <strong>{item.years}</strong>
                  <span>{duration}</span>
                </div>

                <div className="journey-card">
                  <p className="journey-org">{item.org}</p>
                  <h3>{item.title}</h3>
                  <p className="journey-summary">{item.description}</p>

                  <ul className="highlight-list">
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>

                  {item.coursework ? (
                    <div className="journey-coursework">
                      <p className="coursework-label">Coursework</p>
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

    </>
  );
}

export function ProjectsSection({ projects }) {
  return (
    <section className="content-section" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Projects"
        title="My Projects."
        intro="Backend, data, and AI systems I have shipped or am actively building."
        id="projects-title"
      />
      <KanbanBoard items={projects} />
    </section>
  );
}
