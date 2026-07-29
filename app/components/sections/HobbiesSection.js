export function HobbiesSection({ hobbies }) {
  return (
    <section className="content-section hobbies-section" id="hobbies" aria-labelledby="hobbies-title">
      <div className="section-heading">
        <p className="eyebrow">Beyond work</p>
        <h2 id="hobbies-title">Away from the keyboard.</h2>
      </div>

      <div className="hobby-grid">
        {hobbies.map(({ title, interests, icon: Icon }) => (
          <article className="hobby-card" key={title}>
            <span className="hobby-icon" aria-hidden="true"><Icon size={25} /></span>
            <div className="hobby-card-content">
              <h3>{title}</h3>
              <ul className="hobby-list">
                {interests.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
