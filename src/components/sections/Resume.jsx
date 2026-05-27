const EDUCATION = [
  {
    title: "Bachelor's Degree in Design & Digital Creation",
    period: 'Currently studying',
    institution: 'UOC (Open University of Catalonia), online',
    description:
      "Online Bachelor's Degree in Design and Digital Creation, focused on developing creative and technical skills in graphic design, digital media, and visual communication.",
  },
  {
    title: 'Higher Vocational Diploma in Advertising Graphic Design',
    period: '2021 – 2024',
    institution: "Escola d'Art d'Olot",
    description: 'Higher Vocational Diploma in Advertising Graphic Design.',
  },
  {
    title: 'Artistic Baccalaureate',
    period: '2018 – 2020',
    institution: 'Institut Sant Elm, Sant Feliu de Guíxols',
    description:
      'Graduated with honours (Matrícula d\'Honor). Awarded for graphic design at the "Fòrum TDR" competition.',
  },
]

const EXPERIENCE = [
  {
    title: 'Brand Design',
    period: 'January 2024 – May 2024',
    company: 'Ayonow, Olot',
    bullets: [
      'Awarded for brand design for entrepreneurs in the Garrotxa Startup 2024 programme.',
      "Created the visual identity for restaurant 180 d'Olot, a project by the creators of \"l'Equilibri\".",
      'Layout and photo editing for digital media and client materials.',
    ],
  },
  {
    title: 'Corporate & Editorial Design',
    period: 'October 2022 – April 2023',
    company: 'Fontfreda Pintures, Olot',
    bullets: [
      'Created product labels and designed exterior vinyls.',
      'Designed advertising materials: promotional banners, offer templates, etc.',
      'Designed corporate vehicle signage and developed visual routes and maps.',
      'Layout and review of cleaning and interior design product catalogues.',
    ],
  },
]

function ResumeItem({ title, period, sub, children }) {
  return (
    <div className="resume-item">
      <h4>{title}</h4>
      <h5>{period}</h5>
      {sub && <p><em>{sub}</em></p>}
      {children}
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Graphic designer with a background in branding, packaging, and editorial design — combining
          technical skills with creative vision to deliver impactful visual solutions.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Education column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            {EDUCATION.map((item) => (
              <ResumeItem key={item.title} title={item.title} period={item.period} sub={item.institution}>
                <p>{item.description}</p>
              </ResumeItem>
            ))}
          </div>

          {/* Experience column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {EXPERIENCE.map((item) => (
              <ResumeItem key={item.title} title={item.title} period={item.period} sub={item.company}>
                <ul>
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </ResumeItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
