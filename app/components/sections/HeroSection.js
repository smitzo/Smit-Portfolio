import { ArrowDownRight, MapPin } from "lucide-react";
import { HeroSystemGraphic } from "../visuals/HeroSystemGraphic";

export function HeroSection({ profile, projects }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Backend-first software developer</p>
        <h1 id="hero-title">Building reliable systems for real work.</h1>
        <p className="hero-intro">
          I&apos;m {profile.name}, a software developer at Odoo working across
          accounting, invoicing, APIs, automation, and data-heavy products.
        </p>
        <p className="hero-location">
          <MapPin size={17} aria-hidden="true" />
          {profile.location}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <HeroSystemGraphic projects={projects} />
    </section>
  );
}
