import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SecurityService from '../../components/SecurityService/SecurityService'
import './AboutUs.css'

const whyChooseUs = [
  { icon: 'fas fa-medal', title: '30+ Years of Experience', desc: 'Decades of expertise in the Security & Investigation industry across Pune and beyond.' },
  { icon: 'fas fa-tablet-alt', title: 'Digitalised Reporting', desc: 'Fully digitalised field & operations reporting for real-time transparency and accountability.' },
  { icon: 'fas fa-satellite-dish', title: 'Remote Monitoring', desc: 'Remote real-time monitoring & reporting of all sites, 24 hours a day, 7 days a week.' },
  { icon: 'fas fa-route', title: 'Patrol Management', desc: 'Advantage of advanced Patrol Management Systems for efficient guard deployment.' },
  { icon: 'fas fa-graduation-cap', title: 'In-house Training Institute', desc: 'Licensed training institute under Homeguard with on-site security training every month.*' },
  { icon: 'fas fa-bolt', title: 'Quick Response Team (QRT)', desc: 'Dedicated QRT for any emergency situations which may arise — rapid, decisive action.' },
  { icon: 'fas fa-sliders-h', title: 'Customised Services', desc: 'Services tailored to meet your specific needs & requirements. No one-size-fits-all.' },
  { icon: 'fas fa-star', title: 'One Stop Solution', desc: 'Complete solution for all your security needs under one trusted roof.' },
  { icon: 'fas fa-users-cog', title: 'Experienced Staff', desc: 'Highly experienced Operations & Managerial staff, including ex-Military personnel.' },
  { icon: 'fas fa-handshake', title: 'Channel Partners', desc: 'Partners with domestic & international security system suppliers & manufacturers.' },
  { icon: 'fas fa-shield-alt', title: 'Integrated Security', desc: 'Integrated security systems and physical security solutions for complete protection.' },
  { icon: 'fas fa-check-double', title: 'Trusted Since 2014', desc: 'A decade of building trust with clients across residential, commercial, and industrial sectors.' },
  { icon: 'fas fa-scale-balanced', title: 'Statutory Compliance', desc: 'We abide by all the statutory mandates as per law like PF, ESIC, and Service Tax, etc.' },
]

const potentialSections = [
  { title: 'Customer Service', text: 'HARMONY Security is committed to the highest levels of customer service for our clients, from the larger national account to smaller local contracts. Our clients benefit from our relationship-based approach and single point of contact account management, backed by our 24-hour control room with standby QRT.' },
  { title: 'Our People', text: 'HARMONY Security is known for the high caliber of our personnel. Our staff retention levels are above industry standards, reflecting excellent site management, focused training, professional development, internal promotion opportunities, and market competitive remuneration.' },
  { title: 'Resources & Transition Planning', text: 'With our effectively trained security staff, HARMONY Security has significant capacity for surge and emergency security requirements. We also have a transition program that ensures all contract rollouts are diligently planned and communicated to all stakeholders.' },
  { title: 'Accountable Training Academy', text: 'Our commitment to esteemed clients is well demonstrated by our investment in staff training as an accredited registered training academy (RTA). Our training programs encompass a variety of industry, customer service, and client-specific programs.' },
  { title: 'Health and Safety', text: 'HARMONY Security has an exceptional safety record, maintaining a documented Health, Safety, and Environment (HSE). We are committed to ensuring the good health and well-being of our employees, the community, and the environment.' },
  { title: 'Value / Solution', text: 'HARMONY Security leverages our experience and depth of resources to provide our clients with the best value solutions. We remain competitive in the marketplace while offering premium services.' },
]

const operations = [
  { image: '/operations-recruitment.png', title: 'Recruitment', alt: 'Security supervisor evaluating a disciplined team of professional security officers', points: ['We meticulously select individuals who embody integrity, vigilance, and commitment.', 'We are shaping the future of your security with individuals who exceed expectations.', 'Every recruit is carefully chosen to safeguard your assets with a proactive mindset.'] },
  { image: '/operations-training.png', title: 'Training', alt: 'Professional security officers performing defensive response drills with an instructor', points: ['Cutting-edge training turning every member into an expert in crisis management.', 'Security is only as strong as the training behind it — our programs ensure readiness.', 'Continuous training guarantees your team is always a step ahead of emerging threats.'] },
  { image: '/operations-monitoring.png', title: 'Monitoring', alt: 'Security operations specialist monitoring live CCTV feeds in a modern control room', points: ['24/7 protection solutions giving you peace of mind at all times.', 'Real-time monitoring means real-time responses — never let vulnerability go unchecked.', 'Proactive monitoring prevents potential threats before they become problems.'] },
]

const people = [
  { image: '/Suraj.png', name: 'Mr. Suraj Shinde', position: 'CEO', description: 'Suraj Shinde has over 10 years of experience in the Security industry, leading innovative projects and teams.' },
  { image: '/modi1.jpg', name: 'Mrs. Namrata Bakre', position: 'HR Manager', description: 'Mrs. Namrata leverages her expertise to develop effective strategies that drive growth and impactful solutions.' },
  { image: '/modi2.jpg', name: 'Mr. Tukaram Ganjave', position: 'Admin Officer', description: 'Experienced admin officer ensuring smooth day-to-day operations across all sites.' },
  { image: '/modi2.jpg', name: 'Mr. Tushar Jadhav', position: 'Admin Officer', description: 'Dedicated admin officer with a strong focus on client satisfaction and operational excellence.' },
]

const clients = [
  { name: 'Godrej Sherwood', imgSrc: '/Godrej_Shrewood.png' },
  { name: 'Knight Frank', imgSrc: '/Knight Frank.svg' },
  { name: 'Godrej Properties', imgSrc: '/Godrej_Properties.png' },
  { name: 'Yamaha', imgSrc: '/yamaha.png' },
  { name: 'TVS', imgSrc: '/tvs.png' },
  { name: 'Kawasaki', imgSrc: '/kawasaki.jpg' },
  { name: 'Sprint Co-Works', imgSrc: '/sprint.png' },
  { name: 'Vi', imgSrc: '/VI.webp' },
  { name: 'EFC', imgSrc: '/clients.png' },
]

function AboutUs() {
  const pageRef = useRef(null)

  useEffect(() => {
    const page = pageRef.current
    if (!page) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = page.querySelectorAll('.about-reveal')
    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      page.style.setProperty('--about-scroll', 1)
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' })
    revealItems.forEach((item) => observer.observe(item))

    let animationFrame = null
    const updateScrollScene = () => {
      animationFrame = null
      const rect = page.getBoundingClientRect()
      const travel = Math.max(page.offsetHeight - window.innerHeight, 1)
      page.style.setProperty('--about-scroll', Math.min(1, Math.max(0, -rect.top / travel)))

      const storyline = page.querySelector('.about-storyline')
      if (storyline) {
        const storylineRect = storyline.getBoundingClientRect()
        const storylineProgress = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - storylineRect.top) / storylineRect.height))
        page.style.setProperty('--story-progress', storylineProgress)
      }

      const hero = page.querySelector('.about-hero')
      if (hero) {
        const heroRect = hero.getBoundingClientRect()
        const heroProgress = Math.min(1, Math.max(0, -heroRect.top / heroRect.height))
        hero.style.setProperty('--hero-exit-y', `${heroProgress * 82}px`)
        hero.style.setProperty('--hero-exit-opacity', Math.max(0.18, 1 - heroProgress * 1.12))
      }

      page.querySelectorAll('[data-about-scene]').forEach((scene) => {
        const sceneRect = scene.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, (window.innerHeight - sceneRect.top) / (window.innerHeight + sceneRect.height)))
        const focus = 1 - Math.abs(progress - 0.5) * 2
        scene.style.setProperty('--scene-y', `${(0.5 - progress) * 34}px`)
        scene.style.setProperty('--scene-z', `${(focus - 1) * 58}px`)
        scene.style.setProperty('--scene-tilt', `${(0.5 - progress) * 1.7}deg`)
      })

      page.querySelectorAll('[data-about-parallax]').forEach((element) => {
        const elementRect = element.getBoundingClientRect()
        const position = (elementRect.top + elementRect.height / 2 - window.innerHeight / 2) / window.innerHeight
        element.style.setProperty('--parallax-y', `${Math.max(-1, Math.min(1, position)) * -42}px`)
      })
    }
    const requestScrollUpdate = () => {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(updateScrollScene)
    }
    updateScrollScene()
    window.addEventListener('scroll', requestScrollUpdate, { passive: true })
    window.addEventListener('resize', requestScrollUpdate)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', requestScrollUpdate)
      window.removeEventListener('resize', requestScrollUpdate)
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <main className="about-cinematic" ref={pageRef}>
      <div className="about-progress" aria-hidden="true"><span /></div>
      <section className="about-hero" data-about-scene>
        <div className="about-network" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <span key={index} style={{ top: `${8 + (index * 7) % 78}%`, left: `${5 + (index * 13) % 90}%`, width: `${3 + (index % 3) * 2}px`, height: `${3 + (index % 3) * 2}px`, animationDelay: `${index * -420}ms` }} />)}
        </div>
        <div className="about-hero-grid" aria-hidden="true" />
        <div className="about-hero-inner">
          <div className="about-hero-copy about-reveal is-visible">
            <p className="about-eyebrow"><i className="fas fa-shield-alt" /> More about</p>
            <h1>WHO <span>WE ARE</span></h1>
            <p className="about-hero-lead">Protecting What Matters, Serving with Excellence.</p>
            <nav className="about-hero-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><i className="fas fa-chevron-right" /><span>WHO WE ARE</span></nav>
          </div>
          <div className="about-hero-scene" data-about-parallax aria-hidden="true">
            <div className="about-scene-ring about-scene-ring-one" /><div className="about-scene-ring about-scene-ring-two" />
            <div className="about-scene-card about-scene-card-back"><img src="/Gallery/cyber.png" alt="" /></div>
            <div className="about-scene-card about-scene-card-main"><img src="/Gallery/Training2.jpeg" alt="" /></div>
            <div className="about-scene-seal"><strong>30+</strong><span>Years of<br />Experience</span></div>
          </div>
        </div>
        <div className="about-scroll-cue" aria-hidden="true"><span /> Scroll</div>
      </section>

      <div className="about-storyline" aria-hidden="true"><span /></div>
      <section className="about-why about-chapter" data-about-scene aria-labelledby="about-why-title">
        <div className="about-chapter-number">01</div>
        <div className="about-section-heading about-reveal"><p className="about-eyebrow">What&apos;s So Special?</p><h2 id="about-why-title">Why Choose Us?</h2><p>Trusted by hundreds of clients across Pune for over a decade of excellence.</p></div>
        <div className="about-why-grid">
          {whyChooseUs.map((item, index) => <article className="about-why-card about-reveal" key={item.title} style={{ '--item-delay': `${(index % 4) * 70}ms` }}><span>{String(index + 1).padStart(2, '0')}</span><i className={item.icon} /><h3>{item.title}</h3><p>{item.desc}</p></article>)}
        </div>
        <p className="about-terms">*T&amp;C apply.</p>
      </section>

      <section className="about-potential about-chapter" data-about-scene aria-labelledby="about-potential-title">
        <div className="about-chapter-number">02</div>
        <div className="about-section-heading about-reveal"><p className="about-eyebrow">Our Strengths</p><h2 id="about-potential-title">Our Potential</h2></div>
        <div className="about-potential-layout">
          <div className="about-potential-visual about-reveal" data-about-parallax><img src="/Gallery/Gallery3.jpg" alt="Harmony security team on site" loading="lazy" /><span><strong>24/7</strong> Control Room &amp; Standby QRT</span></div>
          <div className="about-potential-grid">{potentialSections.map((section, index) => <article className="about-potential-card about-reveal" key={section.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>#{section.title}</h3><p>{section.text}</p></article>)}</div>
        </div>
      </section>

      <section className="about-operations about-chapter" data-about-scene aria-labelledby="about-operations-title">
        <div className="about-chapter-number">03</div>
        <div className="about-section-heading about-reveal"><p className="about-eyebrow">How We Work</p><h2 id="about-operations-title">Our Operations</h2><p>Empowering Security with Excellence in Recruitment, Training, and Monitoring.</p></div>
        <div className="about-operations-track">
          {operations.map((operation, index) => <article className="about-operation about-reveal" key={operation.title}><div className="about-operation-image"><img src={operation.image} alt={operation.alt} loading="lazy" /></div><div className="about-operation-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{operation.title}</h3><ul>{operation.points.map((point) => <li key={point}><i className="fas fa-shield-alt" />{point}</li>)}</ul></div></article>)}
        </div>
      </section>

      <section className="about-trust about-chapter" data-about-scene aria-labelledby="about-clients-title">
        <div className="about-chapter-number">04</div>
        <div className="about-trust-copy about-reveal"><p className="about-eyebrow">Trusted By</p><h2 id="about-clients-title">Our Clients</h2><p>Protecting respected organizations with dependable people, responsive operations, and uncompromising standards.</p></div>
        <div className="about-client-loop" aria-label="Our Clients"><div>{[...clients, ...clients].map((client, index) => <span key={`${client.name}-${index}`} aria-hidden={index >= clients.length}><img src={client.imgSrc} alt={index < clients.length ? `${client.name} logo` : ''} loading="lazy" /><small>{client.name}</small></span>)}</div></div>
      </section>

      <div className="about-service-bridge" data-about-scene><SecurityService /></div>
      <section className="about-vision" data-about-scene aria-labelledby="about-vision-title">
        <div className="about-vision-image" data-about-parallax aria-hidden="true"><img src="/Gallery/vision.jpg" alt="" loading="lazy" /></div>
        <div className="about-vision-content about-reveal"><h2 id="about-vision-title">Our <span>Vision</span></h2><p>We strive to lead the security industry by providing innovative, reliable, and accessible solutions that keep you safe — anytime, anywhere.</p><p>Our mission is to offer peace of mind through advanced technology and expert protection for businesses and homes alike.</p></div>
      </section>

      <section className="about-team about-chapter" data-about-scene aria-labelledby="about-team-title">
        <div className="about-chapter-number">05</div>
        <div className="about-section-heading about-reveal"><p className="about-eyebrow">The People Behind Harmony</p><h2 id="about-team-title">Our Team</h2></div>
        <div className="about-team-grid">{people.map((person, index) => <article className="about-team-card about-reveal" key={`${person.name}-${index}`}><div className="about-team-image"><img src={person.image} alt={person.name} loading="lazy" /><p>{person.description}</p></div><div><h3>{person.name}</h3><span>{person.position}</span></div></article>)}</div>
      </section>
    </main>
  )
}

export default AboutUs
