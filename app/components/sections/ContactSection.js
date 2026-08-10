import { GithubLogo } from "../ui/BrandLogos";

export function ContactSection({ profile }) {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-main">
        <div>
          <h2 id="contact-title">Let&apos;s connect.</h2>
          <p>Have a project or an idea in mind? Get in touch.</p>
        </div>
        <div className="contact-links">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
          <div>
            <a className="github-link" href={profile.github} target="_blank" rel="noreferrer">
              <GithubLogo size={15} /> GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
      <div className="site-footer">
        <strong>{profile.name}</strong>
        <span>{profile.location}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
