const accents = ["#007aff", "#5856d6", "#af52de", "#ff9500", "#34c759"];

export function StackSection({ skills }) {
  return (
    <section className="content-section" id="stack" aria-labelledby="stack-title">
      <div className="section-heading section-heading-split">
        <div>
          <p className="eyebrow">Toolbox</p>
          <h2 id="stack-title">The stack behind the work.</h2>
        </div>
        <p>
          Backend-first, comfortable across the product surface, and interested in tools
          that make complex workflows easier to trust.
        </p>
      </div>
      <div className="stack-grid">
        {skills.map((group, index) => {
          const Icon = group.icon;
          return (
            <article
              className="stack-card"
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
