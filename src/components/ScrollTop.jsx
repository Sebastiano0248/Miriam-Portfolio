import { useState, useEffect } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#hero"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center${visible ? ' active' : ''}`}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  )
}
