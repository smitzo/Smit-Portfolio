import { GithubLogo } from "../ui/BrandLogos";

export function HeroSection({ profile }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow">Backend systems · Applied AI</p>
        <h1 id="hero-title">Software Engineer</h1>
        <p className="hero-lead">I build backends and practical AI tools.</p>
        <p className="hero-intro">
          Software developer at{" "}
          <a className="inline-link" href={profile.odoo} target="_blank" rel="noreferrer">
            Odoo
          </a>
          , working on accounting, invoicing, and automation.
        </p>
        <div className="hero-links">
          <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          <a className="text-link github-link" href={profile.github} target="_blank" rel="noreferrer">
            <GithubLogo size={16} /> GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <aside className="hero-aside" aria-label="Current role and location">
        <p className="hero-note">
          <span>Currently at</span>
          <strong>
            <a className="inline-link" href={profile.odoo} target="_blank" rel="noreferrer">
              Odoo
            </a>
          </strong>
        </p>
        <p className="hero-note">
          <span>Based in</span>
          <strong>{profile.location}</strong>
        </p>
      </aside>
    </section>
  );
}
