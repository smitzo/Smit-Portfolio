"use client";

import { useEffect, useState } from "react";
import { KanbanBoard } from "../projects/KanbanBoard";
import { GithubLogo } from "../ui/BrandLogos";

function formatDuration(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = endDate ? new Date(`${endDate}T00:00:00`) : new Date();
  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
  totalMonths += end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) totalMonths -= 1;
  totalMonths = Math.max(0, totalMonths);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months) parts.push(`${months} ${months === 1 ? "month" : "months"}`);

  return parts.join(" ") || "Less than a month";
}

function Duration({ startDate, endDate }) {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const updateDuration = () => setDuration(formatDuration(startDate, endDate));
    updateDuration();
    const timer = window.setInterval(updateDuration, 86_400_000);

    return () => window.clearInterval(timer);
  }, [startDate, endDate]);

  return <small aria-live="polite">{duration}</small>;
}

function SectionTitle({ children, id }) {
  return (
    <div className="section-title">
      <h2 id={id}>{children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}

export function TimelineSection({ timeline }) {
  return (
    <section className="content-section" id="experience" aria-labelledby="experience-title">
      <SectionTitle id="experience-title">Experience</SectionTitle>
      <div className="experience-list">
        {timeline.map((item) => (
          <article className="experience-row" id={item.state === "education" ? "education" : undefined} key={`${item.years}-${item.title}`}>
            <div className="experience-org">
              {item.orgHref ? (
                <a className="experience-company inline-link" href={item.orgHref} target="_blank" rel="noreferrer">
                  {item.org}
                </a>
              ) : (
                <strong className="experience-company">{item.org}</strong>
              )}
              {item.team ? <span className="experience-team">{item.team}</span> : null}
            </div>
            <div className="experience-copy">
              <div className="experience-role-line">
                <h3>{item.title}</h3>
                {item.href ? (
                  <a className="text-link github-link experience-source" href={item.href} target="_blank" rel="noreferrer">
                    <GithubLogo size={15} /> {item.action} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
              <p>{item.description}</p>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <p className="experience-date">
              <span>{item.years}</span>
              <Duration startDate={item.startDate} endDate={item.endDate} />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection({ projects }) {
  return (
    <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionTitle id="projects-title">Selected work</SectionTitle>
      <KanbanBoard items={projects} />
    </section>
  );
}
