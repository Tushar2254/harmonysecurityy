import { useState } from 'react'
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner'
import './Gallery.css'

const categories = ['All', 'Training', 'Fire & Safety', 'Operations', 'Awards', 'Field Work']

const images = [
  // ── Training ──
  { src: '/Gallery/Training1.jpeg',         alt: 'Security Training Session',          label: 'Training Session',           category: 'Training' },
  { src: '/Gallery/Training2.jpeg',         alt: 'Guard Training Program',             label: 'Guard Training Program',     category: 'Training' },
  { src: '/Gallery/Training3.jpeg',         alt: 'Advanced Security Training',         label: 'Advanced Training',          category: 'Training' },
  { src: '/Gallery/Holding.jpeg',           alt: 'Holding Techniques Training',        label: 'Holding Techniques',         category: 'Training' },
  { src: '/Gallery/Holding2.jpeg',          alt: 'Safe Holding Techniques',            label: 'Safe Holding Techniques',    category: 'Training' },
  { src: '/Gallery/SuspiciousPackage.jpeg', alt: 'Suspicious Package Handling',        label: 'Package Handling',           category: 'Training' },
  { src: '/Gallery/SupervisorTraining.jpeg',alt: 'Supervisor Training',                label: 'Supervisor Training',        category: 'Training' },
  { src: '/Gallery/conflict.jpeg',          alt: 'Conflict Resolution Training',       label: 'Conflict Resolution',        category: 'Training' },
  { src: '/Gallery/CustomerService.jpeg',   alt: 'Customer Service Training',          label: 'Customer Service',           category: 'Training' },
  { src: '/Gallery/EqualEmployment.jpeg',   alt: 'Equal Employment Training',          label: 'Equal Employment',           category: 'Training' },
  { src: '/Gallery/IncidentReporting.jpeg', alt: 'Incident Reporting',                 label: 'Incident Reporting',         category: 'Training' },

  // ── Fire & Safety ──
  { src: '/Gallery/fire1.jpg',              alt: 'Fire Safety Drill',                  label: 'Fire Safety Drill',          category: 'Fire & Safety' },
  { src: '/Gallery/fire2.jpg',              alt: 'Emergency Response Drill',           label: 'Emergency Response',         category: 'Fire & Safety' },
  { src: '/Gallery/fire3.jpg',              alt: 'Fire Drill Exercise',                label: 'Fire Drill Exercise',        category: 'Fire & Safety' },
  { src: '/Gallery/fire4.jpg',              alt: 'Safety Drill',                       label: 'Safety Drill',               category: 'Fire & Safety' },
  { src: '/Gallery/fire5.jpg',              alt: 'Emergency Preparedness',             label: 'Emergency Preparedness',     category: 'Fire & Safety' },
  { src: '/Gallery/fire6.jpg',              alt: 'Fire Response Training',             label: 'Fire Response',              category: 'Fire & Safety' },
  { src: '/Gallery/fire7.jpg',              alt: 'Crisis Management Drill',            label: 'Crisis Management',          category: 'Fire & Safety' },

  // ── Operations ──
  { src: '/Gallery/Gallery1.jpeg',          alt: 'Security Operations',                label: 'Security Operations',        category: 'Operations' },
  { src: '/Gallery/Gallery2.jpeg',          alt: 'On-site Security',                   label: 'On-site Security',           category: 'Operations' },
  { src: '/Gallery/Gallery3.jpg',           alt: 'Guard Deployment',                   label: 'Guard Deployment',           category: 'Operations' },
  { src: '/Gallery/Gallery4.jpeg',          alt: 'Patrol Activity',                    label: 'Patrol Activity',            category: 'Operations' },

  // ── Awards ──
  { src: '/Gallery/Reward1.jpeg',           alt: 'Security Guard Award Ceremony',      label: 'Guard Award Ceremony',       category: 'Awards' },
  { src: '/Gallery/Reward2.jpeg',           alt: 'Award Ceremony Q2',                  label: 'Award Ceremony Q2',          category: 'Awards' },
  { src: '/Gallery/Reward3.jpeg',           alt: 'Award Ceremony Q3',                  label: 'Award Ceremony Q3',          category: 'Awards' },
  { src: '/Gallery/Reward31.jpeg',          alt: 'Housekeeping Award Ceremony',        label: 'HK Award Ceremony',          category: 'Awards' },

  // ── Field Work ──
  { src: '/Watchman/watchman_cover.jpeg',                                alt: 'Watchman on duty',              label: 'Watchman on Duty',           category: 'Field Work' },
  { src: '/Watchman/Watchman2.jpeg',                                     alt: 'Security guard patrol',         label: 'Security Patrol',            category: 'Field Work' },
  { src: '/Watchman/watchmanBack.jpeg',                                  alt: 'Guard at post',                 label: 'Guard at Post',              category: 'Field Work' },
  { src: '/Watchman/commercial_watchman.jpeg',                           alt: 'Commercial security',           label: 'Commercial Security',        category: 'Field Work' },
  { src: '/Watchman/bouncer1.jpg',                                       alt: 'Bouncer on duty',               label: 'Bouncer on Duty',            category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.51 AM.jpeg',     alt: 'Field operations',              label: 'Field Operations',           category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.52 AM.jpeg',     alt: 'Security team',                 label: 'Security Team',              category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.53 AM.jpeg',     alt: 'Guard deployment',              label: 'Guard Deployment',           category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.57 AM.jpeg',     alt: 'On-site security',              label: 'On-site Security',           category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.58 AM.jpeg',     alt: 'Security personnel',            label: 'Security Personnel',         category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.50.59 AM.jpeg',     alt: 'Guard on patrol',               label: 'Guard on Patrol',            category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.00 AM.jpeg',     alt: 'Security operations',           label: 'Security Operations',        category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.20 AM.jpeg',     alt: 'Team briefing',                 label: 'Team Briefing',              category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.25 AM.jpeg',     alt: 'Guard activity',                label: 'Guard Activity',             category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.28 AM.jpeg',     alt: 'Field security',                label: 'Field Security',             category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.31 AM.jpeg',     alt: 'Security staff',                label: 'Security Staff',             category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.33 AM.jpeg',     alt: 'Watchman activity',             label: 'Watchman Activity',          category: 'Field Work' },
  { src: '/Watchman/WhatsApp Image 2025-03-31 at 10.51.36 AM.jpeg',     alt: 'Security team activity',        label: 'Team Activity',              category: 'Field Work' },
]

function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? images : images.filter(img => img.category === active)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevImg = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  const nextImg = () => setLightbox(i => (i + 1) % filtered.length)

  return (
    <>
      <HeaderBanner
        backgroundImage="/Handshake.jpg"
        title="OUR GALLERY"
        text="A glimpse into our training, operations, and team activities."
      />

      <section className="gallery-section">
        {/* Header */}
        <div className="gallery-header">
          <span className="gallery-tag">Our Work in Action</span>
          <h2>Watchmen Training &amp; Activities</h2>
          <p>Browse through our collection of training sessions, fire drills, field operations, and award ceremonies.</p>
        </div>

        {/* Filter tabs */}
        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
              <span className="filter-count">
                {cat === 'All' ? images.length : images.filter(i => i.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filtered.map((image, index) => (
            <div
              className="gallery-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index % 4 * 80}
              data-aos-duration="500"
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-card-img">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-overlay-inner">
                    <i className="fas fa-expand-alt"></i>
                    <span>{image.label}</span>
                  </div>
                </div>
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
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prevImg() }}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} />
            <p className="lightbox-caption">{filtered[lightbox].label}</p>
          </div>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); nextImg() }}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  )
}

export default Gallery
