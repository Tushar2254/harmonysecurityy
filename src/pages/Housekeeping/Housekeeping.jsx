import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Services/Services.css'
import './Housekeeping.css'

const housekeepingServices = [
  { title: 'Housekeeping Services for Shopping Malls', description: 'Maintain clean floors, hygienic washrooms and welcoming public areas with a trained team prepared for high visitor footfall.', image: '/Housekeeping/1786429655hhk.jpg' },
  { title: 'Housekeeping Services for Schools & Colleges', description: 'Keep classrooms, corridors, entrances, playgrounds and washrooms clean to support a healthy learning environment.', image: '/Housekeeping/WhatsApp Image 2025-03-31 at 10.51.33 AM.jpeg' },
  { title: 'Housekeeping Services for Banks', description: 'Professional upkeep for customer areas, workstations, furniture, floors and washrooms without disrupting daily operations.', image: '/Housekeeping/housekeeping.jpg' },
  { title: 'Housekeeping Services for Commercial Premises', description: 'Dependable cleaning teams for shops, showrooms and shared commercial spaces, scheduled around your business hours.', image: '/Housekeeping/jis-housekeeping-services-noida-sector-58-noida-housekeeping-services-for-commercial-58pv24zypa-250.avif' },
  { title: 'Housekeeping Services for Parking Areas', description: 'Routine sweeping, litter removal and scheduled deep cleaning for orderly and presentable parking facilities.', image: '/Housekeeping/industrial-housekeeping-services-500x500.webp' },
  { title: 'Housekeeping Services for Offices', description: 'Create a clean, productive workplace with planned care for desks, floors, meeting rooms, pantries and washrooms.', image: '/Housekeeping/From Klickpin.com- Steal these viral ways to style your content strategy that help you get the look without the stress with aesthetic touches that.jpg' },
  { title: 'Housekeeping Services for Hospitals', description: 'Hygiene-focused support for high-traffic and sensitive areas, delivered through disciplined sanitation procedures.', image: '/Housekeeping/housekeeping.jpg' },
  { title: 'Housekeeping Services for Corporate Sectors', description: 'Consistent facility upkeep that supports employee wellbeing, workplace productivity and your professional image.', image: '/Housekeeping/From Klickpin.com- Steal these viral ways to style your content strategy that help you get the look without the stress with aesthetic touches that (1).jpg' },
  { title: 'Housekeeping Services for Hotels & Guest Houses', description: 'Guest-ready reception, room, common-area and washroom care for a clean and comfortable hospitality experience.', image: '/Housekeeping/housekeeping.jpg' },
  { title: 'Housekeeping Services for Private Properties', description: 'Flexible housekeeping plans for bungalows, residences, offices, shops and other privately managed premises.', image: '/Housekeeping/WhatsApp Image 2025-03-31 at 10.51.36 AM.jpeg' },
  { title: 'Housekeeping Services for Factories', description: 'Specialist cleaning support for industrial units to help maintain safe, hygienic and efficient working areas.', image: '/Housekeeping/industrial-housekeeping-services-500x500.webp' },
  { title: 'Housekeeping Services for Warehouses', description: 'Dust and waste control that helps protect stored goods and maintain clear, hygienic operational spaces.', image: '/Housekeeping/jis-housekeeping-services-noida-sector-58-noida-housekeeping-services-for-commercial-58pv24zypa-250.avif' },
  { title: 'Housekeeping Services for IT Companies', description: 'Quiet, schedule-friendly cleaning for workstations, meeting rooms, collaborative areas and shared facilities.', image: '/Housekeeping/From Klickpin.com- Steal these viral ways to style your content strategy that help you get the look without the stress with aesthetic touches that.jpg' },
  { title: 'Housekeeping Services for Restaurants', description: 'Thorough cleaning support for guest and service spaces where hygiene, cleanliness and presentation come first.', image: '/Housekeeping/1786429655hhk.jpg' },
  { title: 'Office Boy & Pantry Boy Services', description: 'Trained support personnel for everyday office assistance, professional pantry service and workplace hospitality.', image: '/Housekeeping/WhatsApp Image 2025-03-31 at 10.51.28 AM.jpeg' },
]

const heroSlides = [
  { image: '/Housekeeping/1786429655hhk.jpg', icon: 'fas fa-broom', title: 'Professional Housekeeping', detail: 'Modern cleaning and upkeep' },
  { image: '/Housekeeping/WhatsApp Image 2025-03-31 at 10.51.31 AM.jpeg', icon: 'fas fa-users', title: 'Trained Personnel', detail: 'Reliable on-site teams' },
  { image: '/Housekeeping/From Klickpin.com- Steal these viral ways to style your content strategy that help you get the look without the stress with aesthetic touches that.jpg', icon: 'fas fa-building', title: 'Workplace Care', detail: 'Clean, welcoming facilities' },
  { image: '/Housekeeping/housekeeping for malls.jpg', icon: 'fas fa-shopping-bag', title: 'Commercial Cleaning', detail: 'Ready for every visitor' },
]

function Housekeeping() {
  const [heroSlide, setHeroSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setHeroSlide((current) => (current + 1) % heroSlides.length), 2500)
    return () => window.clearInterval(timer)
  }, [])

  const activeSlide = heroSlides[heroSlide]

  return (
    <>
      <section className="services-hero housekeeping-hero">
        <div className="services-hero-grid" aria-hidden="true" />
        <div className="services-hero-glow services-hero-glow-one" aria-hidden="true" />
        <div className="services-hero-glow services-hero-glow-two" aria-hidden="true" />
        <div className="services-hero-inner">
          <div className="services-hero-copy">
            <span className="services-hero-kicker"><i className="fas fa-broom" /> Cleanliness built around you</span>
            <h1>Our <span>HOUSEKEEPING Services</span></h1>
            <p>At Harmony, cleaner spaces create healthier, more confident environments.</p>
            <nav className="services-hero-breadcrumb" aria-label="Breadcrumb"><Link to="/"><i className="fas fa-home" /> Home</Link><i className="fas fa-chevron-right" /><span>HOUSEKEEPING SERVICES</span></nav>
          </div>
          <div className="services-hero-visual" aria-hidden="true">
            <div className="services-hero-frame-shadow" />
            <div className="services-hero-frame">
              {heroSlides.map((slide, index) => <img src={slide.image} alt="" className={`services-hero-slide ${index === heroSlide ? 'active' : ''}`} key={slide.title} />)}
              <span className="services-hero-scan" />
              <div className="services-hero-frame-label" key={activeSlide.title}><i className={activeSlide.icon} /><div><strong>{activeSlide.title}</strong><small>{activeSlide.detail}</small></div></div>
            </div>
            <div className="services-hero-depth-badge"><span>100%</span><small>Service commitment</small></div>
          </div>
        </div>
      </section>

      <section className="services-grid-section housekeeping-grid-section">
        <div className="services-background-visual" aria-hidden="true"><span /><span /></div>
        <div className="services-grid-header" data-aos="fade-up">
          <span className="services-svc-tag">What We Offer</span><h2>Housekeeping Services</h2>
          <p>Specially designed, stress-free and cost-effective services tailored to the needs of every client and facility.</p>
          <div className="services-trust-row"><span><i className="fas fa-user-check" /> Trained personnel</span><span><i className="fas fa-sparkles" /> Modern methods</span><span><i className="fas fa-sliders-h" /> Tailored plans</span></div>
        </div>
        <div className="services-grid">
          {housekeepingServices.map((service, index) => (
            <article className="services-svc-card" key={service.title} data-aos="fade-up" data-aos-delay={(index % 3) * 70} data-aos-duration="700">
              <div className="services-svc-card-img"><img src={service.image} alt={service.title} loading="lazy" /></div>
              <div className="services-svc-card-body"><h3>{service.title}</h3><p>{service.description}</p><Link to="/contact-us" state={{ service: service.title }} className="services-svc-card-link"><span>Get Quote</span><i className="fas fa-arrow-right" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta-band">
        <div><span className="services-svc-tag">Need help?</span><h2>Let us make your space look its best.</h2><p>Tell us about your facility and our team will recommend a practical, customer-focused housekeeping plan.</p></div>
        <Link to="/contact-us" state={{ service: 'Housekeeping Services' }} className="services-cta-button">Request a Consultation <i className="fas fa-arrow-right" /></Link>
      </section>

      <section className="services-intro housekeeping-intro">
        <div className="services-intro-inner">
          <div className="services-intro-img" data-aos="fade-right"><img src="/Housekeeping/WhatsApp Image 2025-03-31 at 10.51.36 AM.jpeg" alt="Harmony housekeeping personnel at work" loading="lazy" /></div>
          <div className="services-intro-text" data-aos="fade-left"><span className="services-svc-tag">Our Approach</span><h2>Professional Care Behind Every Clean Space</h2><p>Our plans combine trained personnel, clear responsibilities and reliable supervision to support consistently clean facilities.</p>
            <ul className="culture-list"><li><i className="fas fa-check-circle" /><div><strong>Site-Specific Planning</strong> — A practical scope shaped around your facility and hours.</div></li><li><i className="fas fa-check-circle" /><div><strong>Trained Teams</strong> — Personnel prepared for professional cleaning and workplace conduct.</div></li><li><i className="fas fa-check-circle" /><div><strong>Hygiene Focus</strong> — Consistent care for floors, washrooms and common areas.</div></li><li><i className="fas fa-check-circle" /><div><strong>Responsive Support</strong> — Coordination that adapts as your requirements change.</div></li></ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Housekeeping
