import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter'
import './Home.css'

const proofPoints = [
  { value: '10', suffix: '+', label: 'Years of trust' },
  { value: '200', suffix: '+', label: 'Trained personnel' },
  { value: '25', suffix: '+', label: 'Active sites' },
  { value: '24', suffix: '/7', label: 'Operational control' },
]

const capabilities = [
  {
    number: '01',
    eyebrow: 'Physical protection',
    title: 'Professional guarding with a commanding presence.',
    text: 'Carefully recruited and continuously trained security professionals protect commercial, residential and institutional environments with discipline, vigilance and respect.',
    image: '/Home2/access-control.png',
    alt: 'Harmony security officer managing access at a corporate lobby',
    points: ['Tailored deployment plans', 'Professional access control', 'Digital field reporting'],
  },
  {
    number: '02',
    eyebrow: 'Always watching',
    title: 'Intelligent monitoring. Immediate awareness.',
    text: 'Our 24-hour control room connects people, patrols and real-time site intelligence—helping teams identify risk early and respond with clarity.',
    image: '/Gallery/cyber.png',
    alt: 'Security operations team monitoring CCTV feeds',
    points: ['Remote site monitoring', 'Real-time reporting', 'Escalation-ready operations'],
  },
  {
    number: '03',
    eyebrow: 'Rapid response',
    title: 'Prepared when every second matters.',
    text: 'Dedicated patrol management and a standby Quick Response Team reinforce your on-site protection with decisive support for emergency situations.',
    image: '/Home2/night-patrol.png',
    alt: 'Professional security response team conducting a night patrol',
    points: ['Standby QRT', 'Smart patrol management', 'Crisis-ready training'],
  },
]

const sectors = [
  { image: '/Slider/residential.png', label: 'Residential Buildings' },
  { image: '/Slider/browser.png', label: 'IT & Technology' },
  { image: '/Slider/hospital.png', label: 'Hospitals' },
  { image: '/Slider/supermarket.png', label: 'Super Market' },
  { image: '/Slider/commercial.png', label: 'Commercial Spaces' },
  { image: '/Slider/shopping-mall.png', label: 'Malls' },
  { image: '/Slider/bank.png', label: 'Banks' },
  { image: '/Slider/conveyor.png', label: 'Manufacturing' },
  { image: '/Slider/retailer.png', label: 'Retail' },
  { image: '/Slider/contruction.png', label: 'Real Estate' },
  { image: '/Slider/engagement.png', label: 'Events' },
  { image: '/Slider/fraud.png', label: 'Private Investigation' },
]

const clientLogos = [
  { name: 'Godrej Sherwood', image: '/Godrej_Shrewood.png' },
  { name: 'Knight Frank', image: '/Knight Frank.svg' },
  { name: 'Godrej Properties', image: '/Godrej_Properties.png' },
  { name: 'Yamaha', image: '/yamaha.png' },
  { name: 'TVS', image: '/tvs.png' },
  { name: 'Kawasaki', image: '/kawasaki.jpg' },
  { name: 'Sprint Co-Works', image: '/sprint.png' },
  { name: 'Vi', image: '/VI.webp' },
  { name: 'EFC', image: '/clients.png' },
  { name: 'Honda', image: '/Honda.svg' },
  { name: 'Jaquar', image: '/jaquar.png' },
  { name: 'Land Rover', image: '/landrover.jpg' },
]

function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    const page = pageRef.current
    if (!page) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = page.querySelectorAll('[data-h2-reveal]')
    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add('h2-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('h2-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })
    revealItems.forEach((item) => observer.observe(item))

    let frame = null
    const updateScene = () => {
      frame = null
      const scrollY = window.scrollY
      page.style.setProperty('--h2-scroll', `${scrollY}px`)
      page.querySelectorAll('[data-h2-depth]').forEach((item) => {
        const rect = item.getBoundingClientRect()
        const progress = (window.innerHeight * 0.5 - (rect.top + rect.height * 0.5)) / window.innerHeight
        item.style.setProperty('--h2-depth-y', `${Math.max(-1, Math.min(1, progress)) * 46}px`)
      })
    }
    const requestUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateScene)
    }
    updateScene()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--h2-shift-x', `${x * -18}px`)
    event.currentTarget.style.setProperty('--h2-shift-y', `${y * -12}px`)
    event.currentTarget.style.setProperty('--h2-card-rotate-y', `${x * -3}deg`)
    event.currentTarget.style.setProperty('--h2-card-rotate-x', `${y * 2}deg`)
    event.currentTarget.style.setProperty('--h2-grid-rotate-x', `${55 + y * 2}deg`)
  }

  return (
    <main className="home2" ref={pageRef}>
      <section className="h2-hero" onPointerMove={handlePointerMove}>
        <div className="h2-hero-slides" aria-hidden="true">
          <div className="h2-hero-slide-track">
            <img className="h2-hero-bg" src="/Gallery/Training1.jpeg" alt="" />
            <img className="h2-hero-bg" src="/HomeP.jpeg" alt="" />
            <img className="h2-hero-bg" src="/Home2/hero-guarding.png" alt="" />
          </div>
        </div>
        <div className="h2-hero-shade" />
        <div className="h2-hero-grid" aria-hidden="true" />
        <div className="h2-particles" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => <span key={index} style={{ '--i': index, top: `${8 + (index * 17) % 82}%`, left: `${4 + (index * 29) % 92}%` }} />)}
        </div>
        <div className="h2-hero-inner">
          <div className="h2-hero-copy">
            <p className="h2-hero-eyebrow"><span /> Trusted security since 2014</p>
            <h1 className="h2-hero-title">
              <span className="h2-hero-title-brand">Harmony Group</span>
              <span className="h2-hero-title-service">Security Services</span>
            </h1>
            <p className="h2-hero-lead"><strong>One Step Ahead</strong> in Security &amp; Investigation</p>
            <div className="h2-actions">
              <Link className="h2-button h2-button-primary" to="/contact-us">Secure your site <i className="fas fa-arrow-right" /></Link>
              <Link className="h2-button h2-button-ghost" to="/services">Explore services</Link>
            </div>
            <div className="h2-hero-trust"><span><i className="fas fa-check" /> Trusted since 2014</span><span><i className="fas fa-check" /> Statutory compliant</span></div>
          </div>
          <div className="h2-command-card" aria-label="Live operations status">
            <div className="h2-command-top"><span><i /> Operations online</span><strong>24/7</strong></div>
            <div className="h2-radar"><span /><i className="fas fa-shield-alt" /></div>
            <div className="h2-command-data"><span>Monitoring<strong>Active</strong></span><span>Response<strong>Ready</strong></span><span>Reporting<strong>Live</strong></span></div>
          </div>
        </div>
        <div className="h2-scroll-mark" aria-hidden="true"><span /> Scroll to explore</div>
      </section>

      <section className="h2-proof" aria-label="Harmony Security in numbers">
        <p><i className="fas fa-shield-alt" /><span>One integrated<br />security partner</span></p>
        <div>
          {proofPoints.map((item, index) => <article key={item.label} style={{ '--proof-index': index }}><strong><AnimatedCounter target={item.value} suffix={item.suffix} duration={2600} /></strong><span>{item.label}</span></article>)}
        </div>
      </section>

      <section className="h2-intro">
        <div className="h2-section-label" data-h2-reveal>Built for complete confidence</div>
        <div className="h2-intro-grid">
          <h2 data-h2-reveal>Security is not a <span className="h2-uniform-word">uniform.</span><br /><span>It&apos;s a </span><strong className="h2-trust-word" aria-label="Trust."><span className="h2-trust-sizer" aria-hidden="true">Trust.</span><span className="h2-trust-flipper" aria-hidden="true"><span className="h2-trust-face h2-trust-face-front">Trust.</span><span className="h2-trust-face h2-trust-face-back">Trust.</span></span><span className="h2-trust-gloss" aria-hidden="true" /></strong></h2>
          <div data-h2-reveal>
            <p>Harmony Security Services provides reliable security and housekeeping solutions across Pune for commercial premises, malls, bungalows, housing societies and cooperative residential communities.</p>
            <p>Our relationship-led approach combines carefully selected personnel, continuous training, digital reporting and round-the-clock operational support.</p>
            <Link to="/about-us">Discover who we are <i className="fas fa-arrow-right" /></Link>
          </div>
        </div>
      </section>

      <section className="h2-clients">
        <div className="h2-client-backdrop" aria-hidden="true">
          <svg className="h2-client-line-art" viewBox="0 0 1600 620" preserveAspectRatio="none">
            <path d="M-80 455 C170 330 230 570 470 420 S830 255 1040 395 1340 565 1680 335" />
            <path d="M-40 180 C220 335 365 70 610 225 S960 405 1190 205 1450 60 1650 165" />
            <path d="M800 -70 V690" />
            <circle cx="470" cy="420" r="9" />
            <circle cx="1040" cy="395" r="9" />
            <circle cx="1190" cy="205" r="7" />
          </svg>
          <span /><span /><span /><span />
        </div>
        <div className="h2-clients-heading" data-h2-reveal>
          <img className="h2-clients-logo" src="/hgs-logo-optimized.png" alt="Harmony Group Security Services" />
          <p className="h2-kicker">Trusted partnerships</p>
          <h2>Protected by Harmony.</h2>
        </div>
        <div className="h2-client-track"><div>{[...clientLogos, ...clientLogos].map((client, index) => <span key={`${client.name}-${index}`} aria-hidden={index >= clientLogos.length} style={{ '--client-index': index }}><img src={client.image} alt={index < clientLogos.length ? `${client.name} logo` : ''} loading="lazy" /></span>)}</div></div>
      </section>

      <section className="h2-sectors-stage">
        <div className="h2-sector-atmosphere" aria-hidden="true"><span /><span /><span /></div>
        <div className="h2-sectors">
          <div className="h2-sectors-copy" data-h2-reveal>
            <div className="h2-section-label">Sectors we protect</div>
            <h2>Expertise across<br /><span>every environment.</span></h2>
            <p>Flexible security programs shaped around your property, people, operating hours and risk profile.</p>
          </div>
          <div className="h2-sector-grid">
            {sectors.map((sector, index) => <article data-h2-reveal key={sector.label} style={{ '--delay': `${index * 45}ms` }}><span><img src={sector.image} alt="" loading="lazy" /></span><h3>{sector.label}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="h2-capabilities" aria-labelledby="h2-capability-title">
        <div className="h2-capability-heading" data-h2-reveal>
          <div className="h2-section-label">Integrated protection</div>
          <h2 id="h2-capability-title">Every layer.<br /><span>Working as one.</span></h2>
        </div>
        {capabilities.map((capability, index) => (
          <article className={`h2-capability ${index % 2 ? 'h2-capability-reverse' : ''}`} key={capability.title}>
            <div className="h2-capability-visual" data-h2-reveal>
              <div data-h2-depth><img src={capability.image} alt={capability.alt} loading="lazy" /></div>
              <span>{capability.number}</span>
            </div>
            <div className="h2-capability-copy" data-h2-reveal>
              <p className="h2-kicker h2-capability-kicker" style={{ '--capability-index': index }}><span className="h2-capability-step">{capability.number}</span><span>{capability.eyebrow}</span></p>
              {index === 1
                ? <h3 className="h2-monitoring-title"><span className="h2-monitoring-line-one">Intelligent <em>monitoring.</em></span><span className="h2-monitoring-line-two"><em>Immediate</em> awareness.</span></h3>
                : <h3>{capability.title}</h3>}
              <p>{capability.text}</p>
              <ul>{capability.points.map((point) => <li key={point}><i className="fas fa-check" />{point}</li>)}</ul>
              <Link to="/services">View service details <i className="fas fa-arrow-right" /></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="h2-brand-showcase" aria-label="Harmony Group Security Services">
        <div className="h2-brand-halo" aria-hidden="true" />
        <div className="h2-brand-logo-shell" data-h2-reveal>
          <span className="h2-brand-ring h2-brand-ring-outer" aria-hidden="true" />
          <span className="h2-brand-ring h2-brand-ring-inner" aria-hidden="true" />
          <img src="/hgs-logo-optimized.png" alt="HGS Harmony Group Security Services" loading="lazy" />
          <span className="h2-brand-logo-gloss" aria-hidden="true" />
        </div>
        {/* <p className="h2-brand-name" data-h2-reveal>Harmony Group Security Services</p> */}
        <h2 className="h2-brand-tagline" data-h2-reveal><span className="h2-tagline-black">You</span> <span className="h2-tagline-blue">Relax,</span> <span className="h2-tagline-black">We</span> <span className="h2-tagline-red">Care...!</span></h2>
      </section>

      <section className="h2-final-cta" data-h2-reveal>
        <div className="h2-final-glow" aria-hidden="true" />
        <p className="h2-kicker h2-kicker-red">Your security. Our responsibility.</p>
        <h2>Let&apos;s build a safer<br /><span>environment together.</span></h2>
        <p>Tell us what you need to protect. Our team will shape a professional security plan around your requirements.</p>
        <div className="h2-actions">
          <Link className="h2-button h2-button-primary" to="/contact-us">Request a consultation <i className="fas fa-arrow-right" /></Link>
          <a className="h2-button h2-button-ghost" href="tel:+917584526824"><i className="fas fa-phone" /> Call our team</a>
        </div>
      </section>
    </main>
  )
}

export default Home
