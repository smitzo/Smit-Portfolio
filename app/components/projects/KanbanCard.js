import Image from "next/image";
import { GithubLogo } from "../ui/BrandLogos";

function ProjectLinks({ item }) {
  return (
    <div className="project-actions">
      {item.liveHref ? (
        <a className="project-link project-link-live" href={item.liveHref} target="_blank" rel="noreferrer">
          Live demo <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      {item.githubHref ? (
        <a className="project-link github-link" href={item.githubHref} target="_blank" rel="noreferrer">
          <GithubLogo size={15} /> GitHub <span aria-hidden="true"></span>
        </a>
      ) : (
        <span className="project-private">Private project</span>
      )}
    </div>
  );
}

export function KanbanCard({ item }) {
  const titleHref = item.liveHref || item.githubHref;
  const Title = titleHref ? "a" : "span";

  return (
    <article className="project-card">
      {item.screenshot ? (
        <a
          aria-label={`Open ${item.title} live site`}
          className="project-image"
          href={titleHref}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt={item.screenshotAlt}
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            src={item.screenshot}
          />
        </a>
      ) : null}
      <div className="project-card-copy">
        <p className="project-subtitle">{item.eyebrow}</p>
        <h3>
          <Title {...(titleHref ? { href: titleHref, target: "_blank", rel: "noreferrer" } : {})}>
            {item.title} {titleHref ? <span aria-hidden="true">↗</span> : null}
          </Title>
        </h3>
        <p className="project-description">{item.description}</p>
        <p className="project-tech">{item.tags.join(" / ")}</p>
        <ProjectLinks item={item} />
      </div>
    </article>
  );
}

export function ProjectRow({ item }) {
  return (
    <article className="project-row">
      <div>
        <p className="project-subtitle">{item.eyebrow}</p>
        <h3>{item.title}</h3>
      </div>
      <p className="project-description">{item.description}</p>
      <div>
        <p className="project-tech">{item.tags.join(" / ")}</p>
        <ProjectLinks item={item} />
      </div>
    </article>
  );
}
