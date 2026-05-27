const HIGHLIGHTS = [
  {
    icon: 'bi-award',
    title: 'Brand Identities',
    text: "Full brand identities built from scratch for emerging businesses and restaurant 180 d'Olot.",
  },
  {
    icon: 'bi-eye',
    title: 'Visual Coherence',
    text: 'Improved brand recognition and visual consistency for new local companies.',
  },
  {
    icon: 'bi-gem',
    title: 'Authentic Design',
    text: 'Work valued for its authenticity, consistency, and capacity to convey brand values.',
  },
]

const LANGUAGES = [
  { name: 'Spanish', filled: 5, total: 5, level: 'Native' },
  { name: 'Catalan', filled: 5, total: 5, level: 'Native (C1)' },
  { name: 'English', filled: 4, total: 5, level: 'B2.1' },
  { name: 'French',  filled: 1, total: 5, level: 'A1' },
]

function LanguageItem({ name, filled, total, level }) {
  return (
    <li className="language-item">
      <i className="bi bi-chevron-right" />
      <strong>{name}:</strong>
      <div className="level-container">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`level-square${i < filled ? ' filled' : ''}`} />
        ))}
      </div>
      <span className="ms-2">{level}</span>
    </li>
  )
}

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Professional designer specialized in <strong>Branding, Packaging, and Editorial Design</strong>.
          I have developed coherent brand identities for companies such as <strong>Ayonow</strong> and{' '}
          <strong>l&apos;Equilibri</strong>. Known for attention to detail, proactive attitude, creative
          ideas, and strong teamwork skills.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={`${import.meta.env.BASE_URL}assets/img/profile-img.jpg`} className="img-fluid" alt="Miriam Belmonte" />
          </div>

          <div className="col-lg-8 content">
            <h2>Graphic Designer</h2>
            <p className="fst-italic py-3">
              Passionate about visual communication and creating meaningful brand experiences that connect
              with audiences through thoughtful, purpose-driven design.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {LANGUAGES.slice(0, 2).map((lang) => (
                    <LanguageItem key={lang.name} {...lang} />
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {LANGUAGES.slice(2).map((lang) => (
                    <LanguageItem key={lang.name} {...lang} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Notable highlights */}
        <div className="row about-highlights" data-aos="fade-up" data-aos-delay="200">
          {HIGHLIGHTS.map(({ icon, title, text }) => (
            <div key={title} className="col-md-4">
              <div className="highlight-card">
                <i className={`bi ${icon} hc-icon`} />
                <div className="hc-rule" />
                <h5>{title}</h5>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
