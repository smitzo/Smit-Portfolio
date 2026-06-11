import { Mail, MapPin } from "lucide-react";
import { GithubLogo, LinkedInLogo, XLogo } from "../ui/BrandLogos";

export function ContactSection({ profile }) {
  return (
    <footer className="about" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">About &amp; contact</p>
        <h2 id="contact-title">Let&apos;s build something useful.</h2>
        <p className="about-name">{profile.name}</p>
        <p className="about-role">{profile.role}</p>
        <p className="about-location"><MapPin size={16} />{profile.location}</p>
        <p className="about-copy">
          I enjoy backend systems where correctness matters: financial workflows,
          integrations, automation, and data products that people can rely on.
        </p>
      </div>
      <div className="about-links">
        <a className="button button-ghost" href={`mailto:${profile.email}`}>
          <Mail size={18} />
          Email me
        </a>
        <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedInLogo />
          LinkedIn
        </a>
        <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
          <GithubLogo />
          GitHub
        </a>
        <a className="button button-ghost" href={profile.twitter} target="_blank" rel="noreferrer">
          <XLogo/>
          X
        </a>
      </div>
    </footer>
  );
}
