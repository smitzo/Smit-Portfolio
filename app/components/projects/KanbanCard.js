import { ArrowUpRight, ExternalLink, LockKeyhole } from "lucide-react";
import { GithubLogo } from "../ui/BrandLogos";

export function KanbanCard({ item, index = 0 }) {
  const Icon = item.icon;
  const githubHref = item.githubHref || (item.href?.includes("github.com") ? item.href : null);
  const liveHref = item.liveHref || (item.href && !item.href.includes("github.com") ? item.href : null);

  return (
    <article
      className={`project-card ${item.featured ? "project-card-featured" : ""}`}
      style={{ "--accent": item.accent }}
    >
      <div className="project-card-top">
        <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className="project-meta">
          {item.featured ? <span className="featured-chip">Featured</span> : null}
          <span className={`status-chip ${item.state === "progress" ? "status-progress" : ""}`}>
            {item.status}
          </span>
        </div>
      </div>

      <div className="project-heading">
        <span className="project-icon" aria-hidden="true">
          {Icon ? <Icon size={24} /> : item.title.charAt(0)}
        </span>
        <div>
          <p className="project-subtitle">{item.eyebrow}</p>
          <h3>{item.title}</h3>
        </div>
      </div>
      <p className="project-description">{item.description}</p>

      <ul className="tag-list" aria-label={`${item.title} technologies`}>
        {(item.tags || []).map((tag) => <li key={tag}>{tag}</li>)}
      </ul>

      <div className="project-actions">
        {githubHref ? (
          <a className="project-link" href={githubHref} target="_blank" rel="noreferrer">
            <GithubLogo size={16} />
            View source
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : (
          <span className="project-link project-link-disabled">
            <LockKeyhole size={15} aria-hidden="true" />
            Private
          </span>
        )}
        {liveHref ? (
          <a className="project-link project-link-secondary" href={liveHref} target="_blank" rel="noreferrer">
            Live demo
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        ) : item.reserveLiveLink ? (
          <span className="project-link project-link-disabled">
            Live link reserved
          </span>
        ) : null}
      </div>
    </article>
  );
}
