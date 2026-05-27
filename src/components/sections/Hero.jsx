import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const SOCIAL_LINKS = [
  {
    href: 'https://www.behance.net/mementodesign',
    icon: 'bi-behance',
    label: 'Behance',
  },
  {
    href: 'https://www.instagram.com/memento_design.ig/',
    icon: 'bi-instagram',
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/miriam-belmonte-trasierras-61595538b/',
    icon: 'bi-linkedin',
    label: 'LinkedIn',
  },
]

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Graphic Design', 'Branding', 'Packaging'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section id="hero" className="hero section light-background">
      <img src={`${import.meta.env.BASE_URL}assets/img/hero-bg.jpg`} alt="Hero background" />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h1 className="brand-title">mimontra.</h1>
            <h2>Miriam Belmonte</h2>
            <p>
              <span ref={typedRef} />
            </p>
            <div className="social-links">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <i className={`bi ${icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
