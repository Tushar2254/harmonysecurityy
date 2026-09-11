import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import securityServices from '../../data/securityServices'
import './Services.css'

const heroServiceSlides = [
  { image: '/Gallery/aashb.png', icon: 'fas fa-shopping-bag', title: 'Shopping Mall Security', detail: 'Screening & visitor safety' },
  { image: '/Gallery/access.png', icon: 'fas fa-id-card', title: 'Access Control', detail: 'Secure workplace entry' },
  { image: '/Gallery/aa.png', icon: 'fas fa-users', title: 'Event Security', detail: 'Crowd & venue protection' },
  { image: '/Gallery/cyber.png', icon: 'fas fa-video', title: 'CCTV Monitoring', detail: 'Always-on surveillance' },
  { image: '/Gallery/ui.png', icon: 'fas fa-industry', title: 'Industrial Security', detail: 'Perimeter & asset patrol' },
  { image: '/Gallery/Gallery1.jpeg', icon: 'fas fa-landmark', title: 'Bank Security', detail: 'Alert anti-theft protection' }
]

function Services() {
  const navigate = useNavigate()
  const [heroSlide, setHeroSlide] = useState(0)

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setHeroSlide((currentSlide) => (currentSlide + 1) % heroServiceSlides.length)
    }, 2500)

    return () => window.clearInterval(slideTimer)
  }, [])

  const activeHeroService = heroServiceSlides[heroSlide]

  return (
    <>
      <section className="services-hero">
        <div className="services-hero-grid" aria-hidden="true" />
        <div className="services-hero-glow services-hero-glow-one" aria-hidden="true" />
        <div className="services-hero-glow services-hero-glow-two" aria-hidden="true" />

        <div className="services-hero-inner">
          <div className="services-hero-copy">
            <span className="services-hero-kicker"><i className="fas fa-shield-alt" /> Protection built around you</span>
            <h1>More about <span>WHAT WE DO</span></h1>
            <p>At Harmony, Expert Security, Exceptional Cleaning.</p>
            <nav className="services-hero-breadcrumb" aria-label="Breadcrumb">
              <Link to="/"><i className="fas fa-home" aria-hidden="true" /> Home</Link>
              <i className="fas fa-chevron-right" aria-hidden="true" />
              <span>WHAT WE DO</span>
            </nav>
          </div>

          <div className="services-hero-visual" aria-hidden="true">
            <div className="services-hero-frame-shadow" />
            <div className="services-hero-frame">
              {heroServiceSlides.map((slide, index) => (
                <img
                  src={slide.image}
                  alt=""
                  className={`services-hero-slide ${index === heroSlide ? 'active' : ''}`}
                  key={slide.title}
                />
              ))}
              <span className="services-hero-scan" />
              <div className="services-hero-frame-label" key={activeHeroService.title}>
                <i className={activeHeroService.icon} />
                <div><strong>{activeHeroService.title}</strong><small>{activeHeroService.detail}</small></div>
              </div>
            </div>
            <div className="services-hero-depth-badge">
              <span>24/7</span>
              <small>Security readiness</small>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-background-visual" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="services-grid-header" data-aos="fade-up">
          <span className="services-svc-tag">What We Offer</span>
          <h2>Our Services</h2>
          <p>
           There are countless reasons to choose us.
          </p>
          <div className="services-trust-row" aria-label="Service highlights">
            <span><i className="fas fa-user-check" aria-hidden="true" /> Trained personnel</span>
            <span><i className="fas fa-clock" aria-hidden="true" /> 24/7 deployment</span>
            <span><i className="fas fa-sliders-h" aria-hidden="true" /> Tailored plans</span>
          </div>
        </div>

        <div className="services-grid">
          {securityServices.map((service, index) => (
            <article
              className="services-svc-card"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 70}
              data-aos-duration="700"
            >
              <div className="services-svc-card-img">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="services-svc-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact-us" state={{ service: service.title }} className="services-svc-card-link">
                  <span>Get Quote</span><i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta-band">
        <div>
          <span className="services-svc-tag">Not sure what you need?</span>
          <h2>Let us build the right security plan for you.</h2>
          <p>Tell us about your property or event and our team will recommend a practical, cost-effective solution.</p>
        </div>
        <Link to="/contact-us" className="services-cta-button">
          Request a Consultation <i className="fas fa-arrow-right" aria-hidden="true" />
        </Link>
      </section>

      <section className="training-strip" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-strip-inner">
          <div className="training-strip-img">
            <img src="/Gallery/fire1.jpg" alt="Harmony security guard training" loading="lazy" />
          </div>
          <div className="training-strip-text">
            <span className="services-svc-tag">Training Programs</span>
            <h2>The Training We Offer</h2>
            <p>
              Our training programs are developed in close consultation with relevant personnel to ensure the
              specific needs of each organisation are met.
            </p>
            <ul className="training-list">
              <li><i className="fas fa-shield-alt" /> Emergency response &amp; incident reporting</li>
              <li><i className="fas fa-shield-alt" /> Customer service &amp; armed robbery protocols</li>
              <li><i className="fas fa-shield-alt" /> Suspicious packages &amp; holding techniques</li>
              <li><i className="fas fa-shield-alt" /> Hazard identification &amp; risk assessment</li>
              <li><i className="fas fa-shield-alt" /> Supervisor training</li>
            </ul>
            <button className="training-btn" onClick={() => navigate('/training')}>
              Know More <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>

      <section className="services-intro">
        <div className="services-intro-inner">
          <div className="services-intro-img" data-aos="fade-right" data-aos-duration="900">
            <img src="/Gallery/Training3.jpeg" alt="Harmony security team briefing" loading="lazy" />
          </div>
          <div className="services-intro-text" data-aos="fade-left" data-aos-duration="900">
            <span className="services-svc-tag">Our Culture</span>
            <h2>Professionalism Behind Every Post</h2>
            <p>
              We emphasise integrity, vigilance and continuous improvement. Our team is committed to dependable
              security while maintaining a respectful, responsible and service-led culture.
            </p>
            <ul className="culture-list">
              <li><i className="fas fa-check-circle" /><div><strong>Integrity at Core</strong> — Upholding high ethical standards in every assignment.</div></li>
              <li><i className="fas fa-check-circle" /><div><strong>Vigilant Monitoring</strong> — Maintaining alert, consistent protection of people and property.</div></li>
              <li><i className="fas fa-check-circle" /><div><strong>Continuous Improvement</strong> — Regular training that keeps our personnel prepared.</div></li>
              <li><i className="fas fa-check-circle" /><div><strong>Client-Focused Service</strong> — Adapting deployment plans to each client&apos;s environment.</div></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
