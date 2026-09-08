import './SecurityService.css'

const services = [
  { icon: 'fa-video-camera',  label: '24/7 Surveillance',                          img: '/Watchman/privatewatchman.jpg' },
  { icon: 'fa-building',      label: 'Static Guarding & Control Room Monitoring',   img: '/Watchman/commercial_watchman.jpeg' },
  { icon: 'fa-shield',        label: 'Security Guards',                             img: '/Watchman/watchman_cover.jpeg' },
  { icon: 'fa-heartbeat',     label: 'First Aid Medical Support',                   img: '/Gallery/fire1.jpg' },
  { icon: 'fa-lock',          label: 'Cybersecurity Solutions',                     img: '/camera.jpg' },
  { icon: 'fa-ambulance',     label: 'Emergency Response',                          img: '/Gallery/fire3.jpg' },
  { icon: 'fa-bar-chart',     label: 'Risk Assessment / Analysis',                  img: '/Gallery/IncidentReporting.jpeg' },
  { icon: 'fa-user-secret',   label: 'VIP Protection',                              img: '/Watchman/bouncer1.jpg' },
  { icon: 'fa-cogs',          label: 'Facility Management',                         img: '/HouseKeeping1.jpg' },
  { icon: 'fa-graduation-cap',label: 'Consultation and Training',                   img: '/Gallery/Training1.jpeg' },
]

function SecurityService() {
  return (
    <section className="svc-section">
      <div className="svc-container">

        <div className="svc-header" data-aos="fade-up">
          <span className="svc-tag">Our Expertise</span>
          <h2>What We <span>Offer</span></h2>
          <p>Comprehensive security solutions designed to protect people, property, businesses and operations.</p>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <div key={i} className="svc-card" data-aos="fade-up" data-aos-delay={Math.min(i * 60, 400)}>
              {/* Full cover image */}
              <img src={s.img} alt={s.label} className="svc-img" />
              {/* Gradient overlay */}
              <div className="svc-overlay" />
              {/* Content */}
              <div className="svc-content">
                <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="svc-icon-box">
                  <i className={`fa ${s.icon}`} />
                </div>
                <p className="svc-label">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SecurityService
