export function HobbiesSection({ hobbies }) {
  return (
    <section className="content-section" id="about" aria-labelledby="about-title">
      <div className="section-title">
        <h2 id="about-title">Beyond the keyboard</h2>
        <span aria-hidden="true" />
      </div>
      {hobbies.map((hobby) => (
        <div className="hobby-layout" key={hobby.title}>
          <div className="hobby-copy">
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
          <ul className="hobby-interests" aria-label="Interests">
            {hobby.interests.map((interest, index) => (
              <li key={interest}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
