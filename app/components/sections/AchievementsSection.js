import Image from "next/image";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { InstagramLogo, LinkedInLogo, XLogo } from "../ui/BrandLogos";

export function AchievementsSection({ achievements, moments = [] }) {
  return (
    <section className="content-section" id="achievements" aria-labelledby="achievements-title">
      <div className="section-heading section-heading-split">
        <div>
          <p className="eyebrow">Achievements</p>
          <h2 id="achievements-title">Milestones beyond the code.</h2>
        </div>
        <p>
          National-level competition and accelerator experiences that strengthened
          how I build, collaborate, and turn ideas into practical solutions.
        </p>
      </div>

      <div className="achievement-grid">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const ActionIcon = achievement.platform === "Instagram"
            ? InstagramLogo
            : achievement.platform === "Website"
              ? Globe2
              : LinkedInLogo;

          return (
            <article
              className={`achievement-card ${achievement.image ? "achievement-card-with-image" : ""} ${achievement.wide ? "achievement-card-wide" : ""}`}
              style={{ "--accent": achievement.accent }}
              key={achievement.title}
            >
              {achievement.image ? (
                <div className="achievement-image">
                  <Image
                    alt={achievement.imageAlt || `${achievement.title} experience`}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    src={achievement.image}
                  />
                </div>
              ) : null}

              <div className="achievement-content">
                <div className="achievement-topline">
                  <span className="achievement-icon" aria-hidden="true">
                    <Icon size={23} />
                  </span>
                  <span className="achievement-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="achievement-category">
                  {achievement.category} · {achievement.year}
                </p>
                <h3>{achievement.title}</h3>
                <p className="achievement-organization">{achievement.organization}</p>
                <p className="achievement-description">{achievement.description}</p>

                <ul className="achievement-tags" aria-label={`${achievement.title} highlights`}>
                  {achievement.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>

                <div className="achievement-actions">
                  <a
                    className="achievement-link"
                    href={achievement.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${achievement.action} on ${achievement.platform || "LinkedIn"}`}
                  >
                    <ActionIcon size={16} />
                    {achievement.action}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  {achievement.secondaryHref ? (
                    <a
                      className="achievement-link"
                      href={achievement.secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${achievement.secondaryAction} on ${achievement.secondaryPlatform}`}
                    >
                      <XLogo size={16} />
                      {achievement.secondaryAction}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {moments.length ? (
        <div className="achievement-moments">
          <div className="achievement-moments-heading">
            <p className="eyebrow">Hall of Fame</p>
          </div>
          <div className="achievement-moments-grid">
            {moments.map((moment) => (
              <figure
                className="achievement-moment"
                style={{ "--accent": moment.accent }}
                key={moment.title}
              >
                <Image
                  alt={moment.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  src={moment.image}
                />
                <figcaption>
                  <strong>{moment.title}</strong>
                  <span>{moment.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
