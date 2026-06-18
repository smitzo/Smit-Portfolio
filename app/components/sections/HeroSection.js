import { ArrowDownRight, MapPin } from "lucide-react";
import { GithubLogo } from "../ui/BrandLogos";
import { HeroSystemGraphic } from "../visuals/HeroSystemGraphic";

export function HeroSection({ profile }) {
  return (
    <>
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
            <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <GithubLogo />
              GitHub
            </a>
          </div>
        </div>
        <HeroSystemGraphic />
      </section>

      <section className="stats" aria-label="Portfolio overview">
        <div><strong>Odoo</strong><span>R&amp;D engineering</span></div>
        <div><strong>7</strong><span>Selected projects</span></div>
        <div><strong>8.19</strong><span>Engineering CGPA</span></div>
        <div><strong>2025</strong><span>Professional start</span></div>
      </section>
    </>
  );
}
