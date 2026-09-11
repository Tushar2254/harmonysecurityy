import { useEffect, useState } from 'react'
import './Gallery.css'

const categories = [
  { name: 'All', icon: 'fas fa-images' },
  { name: 'Training', icon: 'fas fa-graduation-cap' },
  { name: 'Fire & Safety', icon: 'fas fa-fire-extinguisher' },
  { name: 'Operations', icon: 'fas fa-shield-alt' },
  { name: 'Awards', icon: 'fas fa-award' },
  { name: 'Field Work', icon: 'fas fa-user-shield' },
]

const images = [
  // ── Training ──
  { src: '/Gallery/Training1.jpeg',         alt: 'Security Training Session',          label: 'Training Session',           category: 'Training' },
  { src: '/Gallery/Training2.jpeg',         alt: 'Guard Training Program',             label: 'Guard Training Program',     category: 'Training' },
  { src: '/Gallery/Training3.jpeg',         alt: 'Advanced Security Training',         label: 'Advanced Training',          category: 'Training' },
  { src: '/Gallery/Holding.jpeg',           alt: 'Holding Techniques Training',        label: 'Holding Techniques',         category: 'Training' },
  { src: '/Gallery/fireee.png',             alt: 'Safe Holding Techniques',            label: 'Safe Holding Techniques',    category: 'Training' },
  { src: '/Gallery/SuspiciousPackage.jpeg', alt: 'Suspicious Package Handling',        label: 'Package Handling',           category: 'Training' },
  { src: '/Gallery/SupervisorTraining.jpeg',alt: 'Supervisor Training',                label: 'Supervisor Training',        category: 'Training' },
  { src: '/Gallery/conflict.jpeg',          alt: 'Conflict Resolution Training',       label: 'Conflict Resolution',        category: 'Training' },
  { src: '/Gallery/CustomerService.jpeg',   alt: 'Customer Service Training',          label: 'Customer Service',           category: 'Training' },
  { src: '/Gallery/EqualEmployment.jpeg',   alt: 'Equal Employment Training',          label: 'Equal Employment',           category: 'Training' },
  { src: '/Gallery/IncidentReporting.jpeg', alt: 'Incident Reporting',                 label: 'Incident Reporting',         category: 'Training' },

  // ── Fire & Safety ──
  { src: '/Gallery/fire1.jpg',              alt: 'Fire Safety Drill',                  label: 'Fire Safety Drill',          category: 'Fire & Safety' },
  { src: '/Gallery/fireee.png',             alt: 'Emergency Response Drill',           label: 'Emergency Response',         category: 'Fire & Safety' },
  { src: '/Gallery/fire3.jpg',              alt: 'Fire Drill Exercise',                label: 'Fire Drill Exercise',        category: 'Fire & Safety' },
  { src: '/Gallery/fire11.png',              alt: 'Safety Drill',                       label: 'Safety Drill',               category: 'Fire & Safety' },
  { src: '/Gallery/firedrill.png',              alt: 'Emergency Preparedness',             label: 'Emergency Preparedness',     category: 'Fire & Safety' },
  { src: '/Gallery/fire22.png',              alt: 'Fire Response Training',             label: 'Fire Response',              category: 'Fire & Safety' },
  { src: '/Gallery/fire7.jpg',              alt: 'Crisis Management Drill',            label: 'Crisis Management',          category: 'Fire & Safety' },

  // ── Operations ──
  { src: '/Gallery/Gallery1.jpeg',          alt: 'Security Operations',                label: 'Security Operations',        category: 'Operations' },
  { src: '/Gallery/Gallery2.jpeg',          alt: 'On-site Security',                   label: 'On-site Security',           category: 'Operations' },
  { src: '/Gallery/Gallery3.jpg',           alt: 'Guard Deployment',                   label: 'Guard Deployment',           category: 'Operations' },
  { src: '/Gallery/ui.png',                 alt: 'Patrol Activity',                    label: 'Patrol Activity',            category: 'Operations' },
  { src: '/Gallery/aas.png',                alt: 'Security team performing vehicle access verification', label: 'Access Control Verification', category: 'Operations' },
  { src: '/Gallery/cccd.png',               alt: 'Hospitality Security Operations',    label: 'Hospitality Security Operations',            category: 'Operations' },
  { src: '/Gallery/aa.png',                 alt: 'Event Security',                    label: 'Event Security',            category: 'Operations' },

  // ── Awards ──
  { src: '/Gallery/Reward1.jpeg',           alt: 'Security Guard Award Ceremony',      label: 'Guard Award Ceremony',       category: 'Awards' },
  { src: '/Gallery/Reward2.jpeg',           alt: 'Award Ceremony Q2',                  label: 'Award Ceremony Q2',          category: 'Awards' },
  { src: '/Gallery/Reward3.jpeg',           alt: 'Award Ceremony Q3',                  label: 'Award Ceremony Q3',          category: 'Awards' },
  { src: '/Gallery/Reward31.jpeg',          alt: 'Housekeeping Award Ceremony',        label: 'HK Award Ceremony',          category: 'Awards' },

  // ── Field Work ──
  { src: '/Watchman/watchman_cover.jpeg',                                alt: 'Commercial security team standing on duty',        label: 'Commercial Security Team',   category: 'Field Work' },
  { src: '/Watchman/Watchman2.jpeg',                                     alt: 'Two security officers guarding a retail property', label: 'Retail Security Detail',      category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.57 AM.jpeg',     alt: 'Deployed security team at a business complex',     label: 'Corporate Site Deployment',  category: 'Field Work' },
  { src: '/Watchman/watchmanBack.jpeg',                                  alt: 'Security officer monitoring a commercial site',    label: 'On-Site Vigilance',          category: 'Field Work' },
  { src: '/Gallery/ttt.png',     alt: 'Uniformed officer monitoring an entrance',         label: 'Entrance Monitoring',        category: 'Field Work' },
  { src: '/Watchman/commercial_watchman.jpeg',                           alt: 'Security officer stationed at a residential site', label: 'Residential Site Security',  category: 'Field Work' },
  { src: '/Gallery/ccc.png',                                       alt: 'Professional bouncer on duty',                      label: 'Event Security',       category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.51 AM.jpeg',     alt: 'Event security officer standing on duty',           label: 'Professional Bouncer',     category: 'Field Work' },
  { src: '/Gallery/aashb.png',                                          alt: 'Close protection officer on duty',                  label: 'Close Protection',           category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.59 AM.jpeg',     alt: 'Security officer providing a visible deterrent',    label: 'Visible Security Presence',  category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.00 AM.jpeg',     alt: 'Security team conducting a two-wheeler inspection', label: 'Vehicle Entry Inspection',   category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.20 AM.jpeg',     alt: 'Security officer checking beneath a scooter seat',  label: 'Two-Wheeler Security Check', category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.25 AM.jpeg',     alt: 'Security officers stationed at an access gate',     label: 'Access Gate Security',       category: 'Field Work' },
  // { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.28 AM.jpeg',     alt: 'Security and housekeeping personnel at a site',     label: 'Integrated Facility Team',   category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.31 AM.jpeg',     alt: 'Security and housekeeping team at the security desk', label: 'Security & Housekeeping Team', category: 'Field Work' },
  { src: '/Gallery/bb.png',                                             alt: 'Uniformed housekeeping personnel on site',          label: 'Housekeeping Operations',     category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.36 AM.jpeg',     alt: 'Housekeeping team carrying cleaning equipment',     label: 'Housekeeping Personnel',    category: 'Field Work' },
]

function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All'
    ? images
    : images.filter(img => img.category === active)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevImg = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  const nextImg = () => setLightbox(i => (i + 1) % filtered.length)

  useEffect(() => {
    if (lightbox === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowLeft') setLightbox(i => (i - 1 + filtered.length) % filtered.length)
      if (event.key === 'ArrowRight') setLightbox(i => (i + 1) % filtered.length)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox, filtered.length])

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-atmosphere" aria-hidden="true">
          <span className="gallery-orb gallery-orb-one" />
          <span className="gallery-orb gallery-orb-two" />
        </div>

        {/* Combined cinematic hero */}
        <div className="gallery-hero">
          <div className="gallery-hero-beam" aria-hidden="true" />
          <div className="gallery-header">
            <span className="gallery-tag"><i className="fas fa-camera-retro" aria-hidden="true" /> The Harmony Gallery</span>
            <h1>Security in action.<br /><span>Stories in motion.</span></h1>
            <p>Step inside our training grounds, live operations and field teams—the people and preparation behind every protected space.</p>
            <div className="gallery-hero-points" aria-label="Gallery highlights">
              <span><i className="fas fa-circle" aria-hidden="true" /> Real teams</span>
              <span><i className="fas fa-circle" aria-hidden="true" /> Live training</span>
              <span><i className="fas fa-circle" aria-hidden="true" /> Proven readiness</span>
            </div>
          </div>

          <div className="gallery-motion-rail" aria-hidden="true">
            <div className="gallery-motion-track">
              {[...categories, ...categories].map((category, index) => (
                <span key={`${category.name}-${index}`}>
                  <i className={category.icon} /> {category.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="gallery-filter-shell">
          <div className="gallery-filters" aria-label="Gallery categories">
          {categories.map(({ name, icon }) => (
            <button
              key={name}
              className={`filter-btn ${active === name ? 'active' : ''}`}
              onClick={() => { setActive(name); setLightbox(null) }}
              aria-pressed={active === name}
            >
              <i className={icon} aria-hidden="true" />
              {name}
              <span className="filter-count">
                {name === 'All'
                  ? images.length
                  : images.filter(image => image.category === name).length}
              </span>
            </button>
          ))}
          </div>
        </div>

        <div className="gallery-active-row">
          <div>
            <span>Now viewing</span>
            <h3>{active}</h3>
          </div>
          <p><strong>{filtered.length}</strong> moments</p>
        </div>

        {/* Grid */}
        <div className="gallery-grid" key={active}>
          {filtered.map((image, index) => (
            <div
              className="gallery-card"
              key={image.src}
              style={{ '--gallery-delay': `${Math.min(index * 55, 385)}ms` }}
              onClick={() => openLightbox(index)}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openLightbox(index)
                }
              }}
              role="button"
              tabIndex="0"
              aria-label={`Open ${image.label}`}
            >
              <div className="gallery-card-img">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-overlay-inner">
                    <i className="fas fa-expand-alt" aria-hidden="true"></i>
                    <span>View photo</span>
                  </div>
                </div>
                <span className="gallery-card-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="gallery-card-footer">
                <span className="gallery-card-label">{image.label}</span>
                <span className="gallery-card-cat">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image preview">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close image preview">
            <i className="fas fa-times"></i>
          </button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prevImg() }} aria-label="Previous image">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
            <img key={filtered[lightbox].src} src={filtered[lightbox].src} alt={filtered[lightbox].alt} />
            <div className="lightbox-details">
              <div>
                <span>{active}</span>
                <p className="lightbox-caption">{filtered[lightbox].label}</p>
              </div>
              <strong>{String(lightbox + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}</strong>
            </div>
          </div>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); nextImg() }} aria-label="Next image">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  )
}

export default Gallery
