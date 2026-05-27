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

export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3 className="sitename">Miriam Belmonte</h3>
        <p>Professional designer specialized in branding, packaging, and editorial design.</p>

        <div className="social-links d-flex justify-content-center">
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <i className={`bi ${icon}`} />
            </a>
          ))}
        </div>

        <div className="container">
          <div className="copyright">
            <span>© {new Date().getFullYear()} </span>
            <strong className="px-1 sitename">Miriam Belmonte</strong>
            <span>— All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
