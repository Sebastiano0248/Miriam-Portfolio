import { useState, useEffect, useRef } from 'react'

const SKILLS = [
  { name: 'Adobe Illustrator',  value: 80 },
  { name: 'Adobe Photoshop',    value: 80 },
  { name: 'Adobe InDesign',     value: 80 },
  { name: 'Adobe Premiere Pro', value: 60 },
  { name: 'Adobe After Effects',value: 50 },
  { name: 'Photography',        value: 70 },
  { name: 'Illustration',       value: 60 },
  { name: 'Figma',              value: 40 },
]

function SkillBar({ name, value }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(value)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="progress" ref={ref}>
      <span className="skill">
        <span>{name}</span>
        <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${width}%` }}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const half = Math.ceil(SKILLS.length / 2)

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Design tools and creative disciplines I work with professionally.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content">
          <div className="col-md-6">
            {SKILLS.slice(0, half).map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
          <div className="col-md-6">
            {SKILLS.slice(half).map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
