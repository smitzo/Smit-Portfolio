import { Fragment } from "react";

export function StackSection({ skills, profile }) {
  return (
    <section className="content-section" id="stack" aria-labelledby="stack-title">
      <div className="section-title">
        <h2 id="stack-title">Tools I work with</h2>
        <span aria-hidden="true" />
      </div>
      <div className="stack-grid">
        {skills.map((group) => (
          <article className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>
              {group.items.map((item, index) => (
                <Fragment key={item}>
                  {index > 0 ? ", " : null}
                  {item === "Odoo" ? (
                    <a className="inline-link" href={profile.odoo} target="_blank" rel="noreferrer">
                      Odoo
                    </a>
                  ) : item}
                </Fragment>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
