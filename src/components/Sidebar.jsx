import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '#hero',      icon: 'bi-house',             label: 'Home' },
  { href: '#about',     icon: 'bi-person',            label: 'About' },
  { href: '#resume',    icon: 'bi-file-earmark-text', label: 'Resume' },
  { href: '#portfolio', icon: 'bi-images',            label: 'Portfolio' },
  { href: '#services',  icon: 'bi-hdd-stack',         label: 'Services' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen]       = useState(false)
  const [activeSection, setActive] = useState('hero')

  // Scroll-spy: only observe sections that have a matching nav item
  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => {
    if (window.innerWidth < 1200) setIsOpen(false)
  }

  return (
    <>
      <i
        className={`header-toggle d-xl-none bi ${isOpen ? 'bi-x' : 'bi-list'}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      />

      <header
        id="header"
        className={`header d-flex flex-column justify-content-center${isOpen ? ' header-show' : ''}`}
      >
        <nav id="navmenu" className="navmenu">
          <ul>
            {NAV_ITEMS.map(({ href, icon, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.slice(1) ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  <i className={`bi ${icon} navicon`} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
