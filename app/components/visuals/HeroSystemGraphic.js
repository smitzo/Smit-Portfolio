const accents = ["#007aff", "#5856d6", "#af52de", "#ff2d55", "#ff9500", "#34c759"];

function getGithubHref(project) {
  if (project.githubHref) return project.githubHref;
  if (project.href?.includes("github.com")) return project.href;
  return null;
}

export function HeroSystemGraphic({ projects }) {
  const linkedProjects = projects
    .map((project) => ({ ...project, githubHref: getGithubHref(project) }))
    .filter((project) => project.githubHref)
    .slice(0, 6);

  return (
    <aside className="hero-card" aria-label="Selected project constellation">
      <div className="tech-constellation">
        {linkedProjects.map((project, index) => {
          const Icon = project.icon;
          const angle = index * (360 / linkedProjects.length);

          return (
            <div
              className="constellation-orbit"
              style={{
                "--accent": accents[index % accents.length],
                "--orbit-start": `${angle}deg`,
                "--orbit-inverse": `${-angle}deg`,
              }}
              key={project.title}
            >
              <a
                className="constellation-item"
                href={project.githubHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
              >
                <span className="constellation-icon" aria-hidden="true">
                  <Icon size={29} />
                </span>
                <span className="constellation-name">{project.title}</span>
              </a>
            </div>
          );
        })}
        <a className="constellation-center" href="#projects" aria-label="View all projects">
          <span>{linkedProjects.length}</span>
          <small>projects</small>
        </a>
        <div className="constellation-ring constellation-ring-one" />
        <div className="constellation-ring constellation-ring-two" />
      </div>
    </aside>
  );
}
