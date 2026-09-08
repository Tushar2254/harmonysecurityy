import { Link } from 'react-router-dom'
import SecurityService from '../../components/SecurityService/SecurityService'
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter'
import './Home.css'

const clientLogos = [
  { name: 'Godrej Shrewood',   imgSrc: '/Godrej_Shrewood.png' },
  { name: 'Godrej Properties', imgSrc: '/Godrej_Properties.png' },
  { name: 'Yamaha',            imgSrc: '/yamaha.png' },
  { name: 'TVS',               imgSrc: '/tvs.png' },
  { name: 'Harmony',           imgSrc: '/logo.jpg' },
  { name: 'Modi',              imgSrc: '/modi1.jpg' },
  { name: 'CKE Xpress',        imgSrc: '/ckeXpress.jpg' },
  { name: 'Rachana',           imgSrc: 'https://rachanalifestyle.com/wp-content/uploads/2018/10/rachana-lifestyle-logo-606.png' },
]

const industries = [
  { img: 'Slider/residential.png', label: 'Residential Buildings' },
  { img: 'Slider/browser.png', label: 'IT & Technology' },
  { img: 'Slider/hospital.png', label: 'Hospitals' },
  { img: 'Slider/supermarket.png', label: 'Super Market' },
  { img: 'Slider/commercial.png', label: 'Commercial Spaces' },
  { img: 'Slider/shopping-mall.png', label: 'Malls' },
  { img: 'Slider/bank.png', label: 'Banks' },
  { img: 'Slider/conveyor.png', label: 'Manufacturing' },
  { img: 'Slider/retailer.png', label: 'Retail' },
  { img: 'Slider/contruction.png', label: 'Real Estate' },
  { img: 'Slider/engagement.png', label: 'Events' },
  { img: 'Slider/fraud.png', label: 'Private Works' },
]

const stats = [
  { value: '10', suffix: '+', label: 'Years of Excellence', icon: 'fas fa-award' },
  { value: '30', suffix: '+', label: 'Happy Clients',       icon: 'fas fa-users' },
  { value: '200', suffix: '+', label: 'Security Staff',     icon: 'fas fa-user-shield' },
  { value: '25', suffix: '+', label: 'Active Sites',        icon: 'fas fa-map-marker-alt' },
]

const whyChooseItems = [
  { text: '10+ Years of Experience in the Security & Investigation industry!', tone: 'cyan' },
  { text: 'Digitalised Field & Operations Reporting.', tone: 'blue', featured: true },
  { text: 'Remote real-time monitoring & reporting of sites.', tone: 'teal' },
  { text: 'Advantage of Patrol Management Systems.', tone: 'gold' },
  { text: 'In-house Training Institute licenced under Homeguard.', tone: 'blue' },
  { text: 'On site Security Training every month.', tone: 'cyan' },
  { text: 'Quick Response Team (QRT) for any emergency situations.', tone: 'gold', featured: true },
  { text: 'Customised services to meet your needs & requirements.', tone: 'teal' },
  { text: 'One stop solution for all your security needs.', tone: 'cyan' },
  { text: 'Highly experienced Operations & Managerial staff including ex-Military.', tone: 'blue' },
  { text: 'Channel Partners with domestic & international security suppliers.', tone: 'teal', featured: true },
  { text: 'Integrated security systems and physical security solutions.', tone: 'gold' },
]

function Home() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section className="hero-banner">
        <div className="hero-slides">
          <img src="/Gallery/Training1.jpeg" alt="Security Training" className="hero-slide" />
          <img src="/HomeP.jpeg"             alt="Security"          className="hero-slide" />
          <img src="/Home3.jpeg"             alt="Security"          className="hero-slide" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">Trusted Since 2014</span>
          <br></br>
          <h1 className="hero-title">
            HARMONY GROUP<br />
            <span className="hero-highlight">Security</span><br />
            Services
          </h1>
          <p className="hero-subtitle">
            One Step Ahead in Security & Investigation
          </p>
          {/* <div className="hero-actions">
            <Link to="/contact-us" className="hero-btn-primary">
              Get in Touch <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/services" className="hero-btn-secondary">
              Our Services
            </Link>
          </div> */}
        </div>
        <div className="hero-scroll-hint">
          <span></span>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="about-strip">
        <div className="about-strip-inner">
          <div className="about-strip-img" data-aos="fade-right" data-aos-duration="1000">
            <img src="/Watchman/watchman_cover.jpeg" alt="Watchman" />
            <div className="about-strip-badge">
              <span>10+</span>
              <p>Years of Trust</p>
            </div>
          </div>
          <div className="about-strip-text" data-aos="fade-left" data-aos-duration="1000">
            <span className="section-tag">Who We Are</span>
            <h2>Harmony Group Security Services</h2>
            <p className="hs-tagline-italic">You Relax, We Care!</p>
            <p>
              Harmony Security Services ensures reliable security all over Pune. We offer quality Security and
              Housekeeping services for Commercial Areas like malls as well as Residential areas like Bungalows,
              Housing complexes, and Co-operative housing societies.
            </p>
            <p>
              We specialize in providing tailor-made, professional security services to satisfy all your needs —
              creating a safe and secure environment for complete peace of mind.
            </p>
            <Link to="/about-us" className="strip-link">
              Learn More <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-band">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-icon">
              <i className={s.icon}></i>
            </div>
            <h3>
              <AnimatedCounter target={s.value} suffix={s.suffix} duration={2200} />
            </h3>
            <p>{s.label}</p>
            <div className="stat-glow"></div>
          </div>
        ))}
      </section>

      {/* ── INDUSTRIES SLIDER ── */}
      <section className="industries-section">
        <div className="industries-header" data-aos="fade-up">
          <span className="section-tag">Sectors We Protect</span>
          <h2><span>Industries</span> We Serve</h2>
        </div>
        <div className="industries-track-wrap">
          <div className="industries-track">
            {[...industries, ...industries].map((item, i) => (
              <div className="industry-card" key={i}>
                <img src={item.img} alt={item.label} />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* ── OUR CLIENTS ── */}
      <section className="home-clients-section">
        <div className="home-clients-header" data-aos="fade-up">
          <span className="section-tag">Trusted By</span>
          <h2>Our <span>Clients</span></h2>
          <p>Trusted by leading organizations across Pune for over a decade.</p>
        </div>
        <div className="home-clients-track-wrap">
          <div className="home-clients-fade home-clients-fade-left" />
          <div className="home-clients-track">
            {[...clientLogos, ...clientLogos].map((c, i) => (
              <div key={i} className="home-client-pill">
                <img src={c.imgSrc} alt={c.name} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="home-clients-fade home-clients-fade-right" />
        </div>
      </section>
      

      {/* ── SERVICES OVERVIEW ── */}
      <SecurityService />


      {/* ── WHY CHOOSE US ── */}
      <section className="why-choose-section">
        <div className="why-choose-orbs" aria-hidden="true">
          <span className="why-orb why-orb-cyan" />
          <span className="why-orb why-orb-blue" />
          <span className="why-orb why-orb-gold" />
        </div>
        <div className="why-choose-header" data-aos="fade-up">
          <p className="why-tag">What's so special?</p>
          <h2>Why Choose <span>Us?</span></h2>
          <p className="why-choose-lead">
            Built for reliability — trained people, live reporting, and a response team when it matters.
          </p>
        </div>
        <div className="why-choose-grid">
          {whyChooseItems.map((item, i) => (
            <article
              key={i}
              className={`why-card why-card-${item.tone}${item.featured ? ' why-card-featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 60, 400)}
            >
              <p>{item.text}</p>
              <span className="why-card-bar" />
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="cta-band-inner" data-aos="fade-up">
          <h2>We are one of the most trusted Security agency in Pune.</h2>
          <p>Get in touch with us now!</p>
          <Link to="/contact-us" className="cta-band-btn">
            Get in Touch <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home

