import { useState, useEffect, useRef, useCallback } from 'react'

// Helper: build a safe URL for files with special characters / spaces
const BASE = import.meta.env.BASE_URL
const img = (slug, file) =>
  `${BASE}assets/img/projects/${encodeURIComponent(slug)}/${encodeURIComponent(file)}`

const FILTERS = [
  { key: '*',          label: 'All' },
  { key: 'branding',   label: 'Branding' },
  { key: 'packaging',  label: 'Packaging' },
  { key: 'editorial',  label: 'Editorial' },
  { key: 'tipografia', label: 'Typography' },
]

const PROJECTS = [
  // ── BRANDING ──────────────────────────────────────────────────────────────
  {
    slug: 'Fukuruku',
    title: 'Fukuruku',
    category: 'branding',
    cover: 'flyer.jpg',
    description: "Full visual identity for Fukuruku, a mental health and self-reflection platform. The logotype combines modular typographic shapes and a violet palette, with communication pieces such as a newsletter that reinforce its wellness mission.",
    images: ['flyer.jpg', 'logo.jpg', 'icona.jpg'],
  },
  {
    slug: 'dolcim',
    title: 'dolcim.',
    category: 'branding',
    cover: 'logo.jpg',
    description: "Visual identity for dolcim., an artisan patisserie brand. Logo in salmon pink with contemporary serif typography that conveys sweetness, warmth, and craftsmanship.",
    images: ['logo.jpg'],
  },
  {
    slug: 'Solfeu Sound',
    title: 'Solfeu Sound',
    category: 'branding',
    cover: 'logo.jpg',
    description: "Logo for Solfeu Sound, a platform merging music and neuroscience. The symbol integrates the shape of a brain with a location pin, playing on the dual concept of mind and sound.",
    images: ['logo.jpg'],
  },
  {
    slug: 'vozatenta',
    title: 'vozatenta',
    category: 'branding',
    cover: 'logo.jpg',
    description: "Visual identity for vozatenta, a communication and speech service. Minimalist teal logo with a 'v' set inside a speech bubble, evoking voice and connection.",
    images: ['logo.jpg'],
  },
  {
    slug: 'Memento',
    title: 'Memento Design',
    category: 'branding',
    cover: 'targetes.jpg',
    description: "Design of my own identity as a graphic designer. Presentation cards with a letterpress finish in teal and white, combining typographic elegance with tactile texture.",
    images: ['targetes.jpg'],
  },

  // ── PACKAGING ─────────────────────────────────────────────────────────────
  {
    slug: 'aPHONICA',
    title: 'aPHONICA',
    category: 'packaging',
    cover: '1PORTADA.jpg',
    description: "Poster and flyer for the 18th edition of the APHÒNICA voice festival in Banyoles. The staircase shapes represent the moment a voice rises — the visual concept driving the entire festival identity.",
    images: [
      '1PORTADA.jpg', '3279984.jpg',
      'BOLSAS PAPEL.jpg', 'bolsatelarosa.jpg', 'vasos.jpg', 'vasos2.jpg',
    ],
  },
  {
    slug: 'Häagen - Dazs',
    title: 'Häagen-Dazs',
    category: 'packaging',
    cover: '1portada.jpg',
    description: "Packaging graphic line including labelling and box design for a perfume production inspired by the Häagen-Dazs brand.",
    images: [
      '1portada.jpg', '2eaudeparfum.jpg', '3mini.jpg',
      '4juntos.jpg', '4juntos1.jpg', '5arriba.jpg',
      '6packagingmockup.jpg', '7packagingplantilla.jpg',
    ],
  },
  {
    slug: 'Packaging',
    title: 'Unexpected Packaging',
    category: 'packaging',
    cover: '1portada2.jpg',
    description: "Label and packaging design for an elegant wine. The brand draws on the classic aesthetic of 'Faustino' wine, reinterpreted with a contemporary approach.",
    images: [
      '1portada2.jpg', '1portada3.jpg', '1portada4.jpg',
      '217.jpg', '218.jpg', 'A6356.jpg',
      'A63parte atras2.jpg', 'Etiquetadavant.png', 'Etiquetadarrere.png',
    ],
  },

  // ── EDITORIAL ─────────────────────────────────────────────────────────────
  {
    slug: 'Arcadia',
    title: 'Arcadia Magazine',
    category: 'editorial',
    cover: 'portada.jpg',
    description: "Editorial design for Arcadia Magazine, a travel publication with a special issue on Tokyo. Bold typography, atmospheric photography, and a dynamic layout that captures the essence of the Japanese capital.",
    images: ['portada.jpg', 'interior.jpg'],
  },
  {
    slug: 'Vaporwave',
    title: 'Vaporwave',
    category: 'editorial',
    cover: 'portada.jpg',
    description: "Editorial design for a publication about the Vaporwave cultural movement. Retro-digital typography, an intense blue palette with pink accents, and compositions that evoke the internet aesthetic of the 1990s.",
    images: ['portada.jpg'],
  },
  {
    slug: "La vie d'Adele",
    title: "La vie d'Adèle",
    category: 'editorial',
    cover: 'cartell.jpg',
    description: "Redesign of the film poster for 'La vie d'Adèle' (Palme d'Or 2013, Abdellatif Kechiche). Photographic composition with blue handprints that add emotional depth and a strong visual identity to the design.",
    images: ['cartell.jpg'],
  },
  {
    slug: 'Generalitat',
    title: 'Safe at Work',
    category: 'editorial',
    cover: 'cartell.jpg',
    description: "Poster for the International Day for Safety and Health at Work (28 April), commissioned by the Generalitat de Catalunya. Illustrated composition with a heart of interlocking gears, evoking the body as a precision machine.",
    images: ['cartell.jpg'],
  },
  {
    slug: 'Especimen',
    title: 'Typographic Specimen',
    category: 'editorial',
    cover: '1PORTADA.jpg',
    description: "Typographic specimen for 'Alternate Gothic', designed by Morris Fuller Benton. Produced in three-colour printing (lavender, burgundy, and dark purple), featuring fold-out die-cuts, acetate sheets, and an interior poster.",
    images: [
      '1PORTADA.jpg',
      '1648029946872.jpg', '1648029946894.jpg', '1648029984967.jpg',
      '1648029985003.jpg', '1648029740763.jpg', '1648029740764.jpg',
      '1648030054431.jpg', '1648030070705.jpg',
    ],
  },
  {
    slug: 'Rafael Masó',
    title: 'Rafael Masó',
    category: 'editorial',
    cover: '1PORTADA.jpg',
    description: "Typographic and editorial project presenting a modular typeface built from the architecture of Rafael Masó, applied to communication pieces and signage.",
    images: [
      '1PORTADA.jpg', 'web.jpg',
      'banderola.jpg', 'banderola2.jpg',
      'IMG_20220215_214701.jpg', 'IMG_20220215_214730.jpg', 'IMG_20220215_214916.jpg',
    ],
  },

  // ── TIPOGRAFIA ────────────────────────────────────────────────────────────
  {
    slug: 'Steneo',
    title: 'Steneo',
    category: 'tipografia',
    cover: 'especimen.jpg',
    description: "Design of an original typeface: Steneo by Miriam Belmonte. An alphabet built on an evolved stencil concept, with geometric modules, weight contrasts, and triangular terminals. Presented as a complete specimen sheet.",
    images: ['especimen.jpg'],
  },
  {
    slug: 'La Marato',
    title: 'La Marató',
    category: 'tipografia',
    cover: 'cartell.jpg',
    description: "Typographic poster for La Marató de TV3, raising funds against Alzheimer's. A visual poem based on the song 'Birthday Cake' by Dylan Conrique: highlighted letters in blue spell out the hidden message 'I MISS YOU', merging lyrics and emotion in a single design.",
    images: ['cartell.jpg'],
  },
  {
    slug: 'letra',
    title: 'Lettering',
    category: 'tipografia',
    cover: '1portada.jpg',
    description: "Conceptualisation and design of a letter in postcard format. Starting from the environment, shapes resembling a letter are found, simplified, and then decorated in a lettering style. Also includes an ornamental 'S' with lizard motifs inspired by medieval illuminated capitals.",
    images: ['1portada.jpg', '1portada2.jpg', '76434.jpg', 'lletra.jpg'],
  },
  {
    slug: 'Pangrama',
    title: 'Pangram',
    category: 'tipografia',
    cover: '2502841.jpg',
    description: "Study of the characteristics and anatomy of the Baskerville typeface, presented as a pangram displaying every character of the alphabet.",
    images: ['2502841.jpg'],
  },
  {
    slug: 'X forum TDR',
    title: 'X Fòrum TDR',
    category: 'tipografia',
    cover: '2502841.jpg',
    description: "Graphic design proposal for the X Fòrum TDR, winner of the design competition at the Artistic Baccalaureate of Institut Sant Elm.",
    images: ['2502841.jpg'],
  },

  // ── FOTOGRAFIA ────────────────────────────────────────────────────────────
  {
    slug: 'Escacs',
    title: 'Chess',
    category: 'fotografia',
    cover: 'escacs.jpg',
    description: "Product photography of a handcrafted chess board with hand-modelled pieces. High-contrast black and white composition that highlights the texture and sculptural volume of each piece.",
    images: ['escacs.jpg'],
  },
]

// ── Project gallery modal ──────────────────────────────────────────────────

function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const thumbsRef   = useRef(null)
  const activeThumb = useRef(null)
  const total       = project.images.length
  const categoryLabel = FILTERS.find((f) => f.key === project.category)?.label

  const prev = useCallback(() =>
    setCurrentIndex((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() =>
    setCurrentIndex((i) => (i + 1) % total), [total])

  // Keyboard navigation + ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowRight')  next()
      if (e.key === 'ArrowLeft')   prev()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Scroll active thumbnail into view
  useEffect(() => {
    activeThumb.current?.scrollIntoView({
      behavior: 'smooth', block: 'nearest', inline: 'center',
    })
  }, [currentIndex])

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-dialog" onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button className="pm-close" onClick={onClose} aria-label="Close">
          <i className="bi bi-x-lg" />
        </button>

        {/* ── Gallery (left) ── */}
        <div className="pm-gallery">
          <div className="pm-main-img">
            <img
              key={currentIndex}
              src={img(project.slug, project.images[currentIndex])}
              alt={`${project.title} — ${currentIndex + 1}`}
            />

            {total > 1 && (
              <>
                <button className="pm-nav pm-nav-prev" onClick={prev} aria-label="Previous">
                  <i className="bi bi-chevron-left" />
                </button>
                <button className="pm-nav pm-nav-next" onClick={next} aria-label="Next">
                  <i className="bi bi-chevron-right" />
                </button>
                <span className="pm-counter">{currentIndex + 1} / {total}</span>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="pm-thumbs" ref={thumbsRef}>
              {project.images.map((file, i) => (
                <button
                  key={i}
                  ref={i === currentIndex ? activeThumb : null}
                  className={`pm-thumb${i === currentIndex ? ' active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={img(project.slug, file)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Info (right) ── */}
        <div className="pm-body">
          <span className="pm-category">{categoryLabel}</span>
          <h2 className="pm-title">{project.title}</h2>

          {project.description && (
            <p className="pm-desc">{project.description}</p>
          )}

          {project.collab && (
            <p className="pm-collab">
              <strong>Collaboration: </strong>{project.collab}
            </p>
          )}

          {total > 1 && (
            <p className="pm-image-count">
              <i className="bi bi-images" /> {total} images
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main section ───────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*')
  const [selectedProject, setSelectedProject] = useState(null)

  const visible = activeFilter === '*'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>A selection of my work in branding, packaging, editorial design, and typography.</p>
      </div>

      <div className="container">
        <ul className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
          {FILTERS.map(({ key, label }) => (
            <li
              key={key}
              className={activeFilter === key ? 'filter-active' : ''}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </li>
          ))}
        </ul>

        <div
          className="portfolio-grid"
          style={{ columnCount: visible.length <= 4 ? 2 : 3 }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {visible.map((project) => (
            <div
              key={project.slug}
              className="portfolio-item"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={img(project.slug, project.cover)}
                className="img-fluid"
                alt={project.title}
                loading="lazy"
              />
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{FILTERS.find((f) => f.key === project.category)?.label}</p>
                <i className="bi bi-plus-circle portfolio-expand-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
