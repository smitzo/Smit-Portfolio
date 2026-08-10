const accents = ["#6d5dfc", "#0c8ea0", "#337d5d", "#9b663d"];

export function StackSection({ skills }) {
  return (
    <section className="content-section" id="stack" aria-labelledby="stack-title">
      <div className="section-heading section-heading-split">
        <div>
          <p className="eyebrow">Stack</p>
          <h2 id="stack-title">Technical stack.</h2>
        </div>
        <p>
          The languages, frameworks, databases, and delivery tools behind my work.
        </p>
      </div>
      <div className="stack-grid">
        {skills.map((group, index) => {
          const Icon = group.icon;
          return (
            <article
              className={`stack-card ${group.featured ? "stack-card-featured" : ""}`}
              style={{ "--accent": accents[index % accents.length] }}
              key={group.title}
            >
              <span className="stack-icon"><Icon size={23} /></span>
              <h3>{group.title}</h3>
              <ul className="stack-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
