export function HeroSystemGraphic({ projects }) {
  const linkedProjects = projects
    .filter((project) => project.githubHref)
    .slice(0, 6);

  return (
    <aside className="hero-card" aria-label="Selected projects">
      <div className="project-orbit">
        <div className="orbit-wheel">
          {linkedProjects.map((project, index) => {
            const Icon = project.icon;
            const angle = index * (360 / linkedProjects.length);

            return (
              <div
                className="orbit-slot"
                style={{
                  "--accent": project.accent,
                  "--slot-angle": `${angle}deg`,
                  "--slot-inverse": `${-angle}deg`,
                }}
                key={project.id}
              >
                <a
                  className="orbit-project"
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  <span className="orbit-icon" aria-hidden="true">
                    <Icon size={27} />
                  </span>
                  <span className="orbit-name">{project.title}</span>
                </a>
              </div>
            );
          })}
        </div>
        <a className="orbit-center" href="#projects" aria-label="View selected projects">
          <span className="orbit-center-count">{linkedProjects.length}</span>
          <span className="orbit-center-label">selected projects</span>
        </a>
        <span className="orbit-ring orbit-ring-inner" aria-hidden="true" />
        <span className="orbit-ring orbit-ring-outer" aria-hidden="true" />
      </div>
    </aside>
  );
}
