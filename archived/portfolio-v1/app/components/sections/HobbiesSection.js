import Image from "next/image";

export function HobbiesSection({ hobbies }) {
  return (
    <section className="content-section hobbies-section" id="hobbies" aria-labelledby="hobbies-title">
      <div className="section-heading">
        <p className="eyebrow">Beyond work</p>
        <h2 id="hobbies-title">Away from the keyboard.</h2>
      </div>

      <div className="hobby-grid">
        {hobbies.map(({
          title,
          interests,
          icon: Icon,
          highlight,
          description,
          image,
          imageAlt,
          imageTitle,
          imageDetail,
        }) => (
          <article className={`hobby-card ${image ? "hobby-card-with-image" : ""}`} key={title}>
            <span className="hobby-icon" aria-hidden="true"><Icon size={25} /></span>
            <div className="hobby-card-content">
              <h3>{title}</h3>
              {highlight ? <p className="hobby-highlight">{highlight}</p> : null}
              {description ? <p className="hobby-description">{description}</p> : null}
              <ul className="hobby-list">
                {interests.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            </div>
            {image ? (
              <figure className="hobby-photo">
                <Image
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 36vw"
                  src={image}
                />
                <figcaption>
                  <strong>{imageTitle}</strong>
                  <span>{imageDetail}</span>
                </figcaption>
              </figure>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
