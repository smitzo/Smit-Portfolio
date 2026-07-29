import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { HeroSystemGraphic } from "../visuals/HeroSystemGraphic";
import { GithubLogo } from "../ui/BrandLogos";

export function HeroSection({ profile, projects }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Backend &amp; AI engineer</p>
        <h1 id="hero-title">I build backends and practical AI tools.</h1>
        <div className="hero-intro-group">
          <span className="hero-portrait">
            <Image
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 520px) 78px, 104px"
              src={profile.image}
            />
          </span>
          <p className="hero-intro">
            I&apos;m {profile.name}, a software developer at Odoo. I work on accounting
            and invoicing backends, and build projects around synthetic data,
            document processing, and automation.
          </p>
        </div>
        <p className="hero-location">
          <MapPin size={17} aria-hidden="true" />
          {profile.location}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GithubLogo size={17} />
            GitHub
          </a>
        </div>
      </div>
      <HeroSystemGraphic projects={projects} />
    </section>
  );
}
