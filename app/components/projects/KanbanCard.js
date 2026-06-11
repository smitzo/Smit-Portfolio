import { ExternalLink, LockKeyhole, Star } from "lucide-react";
import { GithubLogo } from "../ui/BrandLogos";

const accents = ["#007aff", "#5856d6", "#af52de", "#ff2d55", "#ff9500", "#34c759", "#00a6a6"];

export function KanbanCard({ item, index = 0 }) {
  const Icon = item.icon;
  const githubHref = item.githubHref || (item.href?.includes("github.com") ? item.href : null);
  const liveHref = item.liveHref || (item.href && !item.href.includes("github.com") ? item.href : null);
  const rating = Math.min(3, Math.max(0, item.rating || 0));
  const accent = accents[index % accents.length];

  return (
    <article
      className={`project-card ${index === 0 ? "project-card-featured" : ""}`}
      style={{ "--accent": accent }}
    >
      <div className="project-card-top">
        <span className="project-icon" aria-hidden="true">
          {Icon ? <Icon size={26} /> : item.title.charAt(0)}
        </span>
        <span className={`status-chip ${item.state === "progress" ? "status-progress" : ""}`}>
          {item.status}
        </span>
      </div>

      <div className="project-title-row">
        <h3>{item.title}</h3>
        {rating ? (
          <span className="project-rating" aria-label={`${rating} out of 3 stars`}>
            {Array.from({ length: rating }, (_, starIndex) => (
              <Star key={starIndex} size={15} fill="currentColor" aria-hidden="true" />
            ))}
          </span>
        ) : null}
      </div>

      <p className="project-subtitle">{item.eyebrow}</p>
      <p className="project-description">{item.description}</p>

      <ul className="tag-list" aria-label={`${item.title} technologies`}>
        {(item.tags || []).map((tag) => <li key={tag}>#{tag}</li>)}
      </ul>

      <div className="project-actions">
        {githubHref ? (
          <a className="project-link" href={githubHref} target="_blank" rel="noreferrer">
            <GithubLogo size={16} />
            GitHub
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
