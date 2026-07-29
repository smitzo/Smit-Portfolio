import { Mail, MapPin } from "lucide-react";
import { GithubLogo, LinkedInLogo } from "../ui/BrandLogos";

export function ContactSection({ profile }) {
  return (
    <footer className="about" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Get in touch.</h2>
        <p className="about-copy">
          For backend or applied AI work, email me or connect on LinkedIn.
        </p>
        <p className="about-location"><MapPin size={16} />{profile.location}</p>
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
      </div>
    </footer>
  );
}
