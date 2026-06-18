import { ArrowUpRight, GraduationCap } from "lucide-react";
import { KanbanBoard } from "../projects/KanbanBoard";
import { GithubLogo } from "../ui/BrandLogos";

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

export function TimelineSection({ timeline, projects }) {
  const experience = timeline.filter((item) => item.state !== "education");
  const education = timeline.find((item) => item.state === "education");

  return (
    <>
      <section className="content-section" id="experience" aria-labelledby="experience-title">
        <SectionHeading
          eyebrow="Experience"
          title="Work built around correctness."
          intro="Product engineering across accounting, invoicing, compliance, analytics, and backend automation."
        />
        <div className="experience-grid">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                className={`experience-card ${index === 0 ? "experience-card-featured" : ""}`}
                style={{ "--accent": index === 0 ? "#007aff" : index === 1 ? "#af52de" : "#00a6a6" }}
                key={`${item.years}-${item.title}`}
              >
                <div className="experience-card-top">
                  <span className="experience-icon"><Icon size={25} /></span>
                  <span className="date-chip">{item.years}</span>
                </div>
                <p className="experience-org">{item.org}</p>
                <h3>{item.title}</h3>
                <p className="experience-summary">{item.description}</p>
                <ul className="highlight-list">
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                {item.href ? (
                  <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
                    <GithubLogo size={16} />
                    {item.action}
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
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
        />
        <KanbanBoard items={projects} />
      </section>

      {education ? (
        <section className="content-section" id="education" aria-labelledby="education-title">
          <SectionHeading
            eyebrow="Education"
            title="Engineering foundations, tested by building."
            intro="Coursework paired with hackathons, robotics, grants, sport, and practical prototypes."
          />
          <article
            className="education-card"
          >
            <div className="education-main">
              <span className="education-icon"><GraduationCap size={32} /></span>
              <div>
                <p className="eyebrow">{education.years}</p>
                <h3 id="education-title">{education.title}</h3>
                <p className="education-org">{education.org}</p>
              </div>
            </div>
            <div className="education-details">
              <ul className="highlight-list">
                {education.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div>
                <p className="coursework-label">Relevant coursework</p>
                <ul className="coursework-list">
                  {education.coursework.map((subject) => <li key={subject}>{subject}</li>)}
                </ul>
              </div>
            </div>
          </article>
        </section>
      ) : null}
    </>
  );
}
