import { useNavigate } from 'react-router-dom'
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner'
import './Services.css'

const services = [
  {
    image: '/Watchman/privatewatchman.jpg',
    icon: 'fas fa-home',
    title: 'Residential Security',
    description: 'Reliable security for housing complexes, bungalows, and societies. Safety is our commitment.'
  },
  {
    image: '/Watchman/commercial_watchman.jpeg',
    icon: 'fas fa-building',
    title: 'Commercial Security',
    description: 'Ensure a safe, anti-theft atmosphere for your customers at banks, hospitals, and offices.'
  },
  {
    image: '/Watchman/watchmanBack.jpeg',
    icon: 'fas fa-calendar-check',
    title: 'Event & Site Security',
    description: 'Ensuring a safe workplace and event environment. Protecting your business, ensuring peace of mind.'
  },
  {
    image: '/Watchman/bouncer1.jpg',
    icon: 'fas fa-user-shield',
    title: 'Bodyguard / Bouncer',
    description: 'Elite personal protection services. Trust us for unmatched security and peace of mind.'
  },
  {
    image: 'Gallery/vision.jpg',
    icon: 'fas fa-chalkboard-teacher',
    title: 'Staff Training Services',
    description: 'Professional training programs for security and housekeeping staff to meet industry standards.'
  },
  {
    image: 'HouseKeeping1.jpg',
    icon: 'fas fa-broom',
    title: 'HouseKeeping Services',
    description: 'Enrich productivity with our professional and calming housekeeping services.'
  }
]

function Services() {
  const navigate = useNavigate()

  return (
    <>
      <HeaderBanner
        backgroundImage="/Handshake.jpg"
        title="WHAT WE DO"
        text="At Harmony, Expert Security, Exceptional Cleaning."
      />


      {/* ── SERVICE CARDS ── */}
      <section className="services-grid-section">
        <div className="services-grid-header" data-aos="fade-up">
          <span className="svc-tag">What We Offer</span>
          <h2>Our Security Services</h2>
          <p>Comprehensive protection solutions tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              className="svc-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-aos-duration="700"
            >
              <div className="svc-card-img">
                <img src={svc.image} alt={svc.title} />
                <div className="svc-card-icon">
                  <i className={svc.icon}></i>
                </div>
              </div>
              <div className="svc-card-body">
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <a href="/contact-us" className="svc-card-link">
                  Get Quote <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRAINING STRIP ── */}
      <section className="training-strip" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-strip-inner">
          <div className="training-strip-img">
            <img src="Gallery/fire1.jpg" alt="Security Training" />
          </div>
          <div className="training-strip-text">
            <span className="svc-tag">Training Programs</span>
            <h2>The Training We Offer</h2>
            <p>
              Our training programs are developed in close consultation with relevant personnel to ensure the
              specific needs of each organisation are met.
            </p>
            <ul className="training-list">
              <li><i className="fas fa-shield-alt"></i> Emergency response &amp; Incident reporting</li>
              <li><i className="fas fa-shield-alt"></i> Customer service &amp; Armed robbery protocols</li>
              <li><i className="fas fa-shield-alt"></i> Suspicious packages &amp; Holding techniques</li>
              <li><i className="fas fa-shield-alt"></i> Hazard Identification &amp; Risk assessment</li>
              <li><i className="fas fa-shield-alt"></i> Supervisor training</li>
            </ul>
            <button className="training-btn" onClick={() => navigate('/training')}>
              Know More <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

       {/* ── INTRO ── */}
      <section className="services-intro">
        <div className="services-intro-inner">
          <div className="services-intro-img" data-aos="fade-right" data-aos-duration="900">
            <img src="/culture.jpg" alt="Culture" />
          </div>
          <div className="services-intro-text" data-aos="fade-left" data-aos-duration="900">
            <span className="svc-tag">Our Culture</span>
            <h2>Culture We Nourish</h2>
            <p>
              We emphasize integrity, vigilance, and continuous improvement. Our team is dedicated to providing
              top-tier security services while nurturing a supportive and ethical work environment.
            </p>
            <ul className="culture-list">
              <li><i className="fas fa-check-circle"></i><div><strong>Integrity at Core</strong> — Upholding the highest ethical standards in all our operations.</div></li>
              <li><i className="fas fa-check-circle"></i><div><strong>Vigilant Monitoring</strong> — Ensuring 24/7 surveillance to protect assets and individuals.</div></li>
              <li><i className="fas fa-check-circle"></i><div><strong>Continuous Improvement</strong> — Regular training to stay ahead in the security industry.</div></li>
              <li><i className="fas fa-check-circle"></i><div><strong>Community Engagement</strong> — Actively participating in local initiatives to strengthen community ties.</div></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
