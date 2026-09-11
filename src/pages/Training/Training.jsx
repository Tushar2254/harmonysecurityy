import { useEffect, useRef, useState } from 'react'
import './Training.css'

const trainingPrograms = [
  {
    img: '/Gallery/Training1.jpeg',
    alt: 'Emergency Response',
    title: 'Emergency Response',
    description: 'Guards are trained to respond quickly and effectively in any emergency situation, including medical, fire, or security-related crises.'
  },
  {
    img: '/Gallery/fire1.jpg',
    alt: 'Conflict Resolution',
    title: 'Conflict Resolution',
    description: 'Guards learn how to defuse conflicts and de-escalate potentially dangerous situations using effective communication and negotiation skills.'
  },
  {
    img: '/Gallery/CustomerService.jpeg',
    alt: 'Customer Service',
    title: 'Customer Service',
    description: 'Guards are trained to provide excellent customer service, handling all interactions with respect and professionalism, ensuring positive client experiences.'
  },
  {
    img: '/Gallery/fire1.jpg',
    alt: 'Armed Robbery',
    title: 'Armed Robbery',
    description: 'Guards undergo training on how to react and protect themselves and others in the event of an armed robbery, including safety protocols and communication with law enforcement.'
  },
  {
    img: '/Gallery/SuspiciousPackage.jpeg',
    alt: 'Suspicious Packages',
    title: 'Suspicious Packages',
    description: 'Guards are trained to identify and handle suspicious packages and potential threats, ensuring safety without putting anyone at risk.'
  },
  {
    img: '/Gallery/Holding2.jpeg',
    alt: 'Holding Techniques',
    title: 'Holding Techniques',
    description: 'Training on appropriate and safe holding techniques, ensuring that any physical intervention is conducted safely and within legal limits.'
  },
  {
    img: '/Gallery/conflict.jpeg',
    alt: 'Dealing with Aggressive Persons',
    title: 'Dealing with Aggressive Persons',
    description: 'Guards learn strategies to deal with aggressive individuals calmly and safely, reducing the risk of escalation and injury.'
  },
  {
    img: '/Gallery/IncidentReporting.jpeg',
    alt: 'Incident Reporting',
    title: 'Incident Reporting',
    description: 'Guards are trained in proper incident reporting, ensuring that all events are documented accurately for future reference and legal purposes.'
  },
  {
    img: '/Gallery/EqualEmployment.jpeg',
    alt: 'Equal Employment Opportunity',
    title: 'Equal Employment Opportunity - Discrimination',
    description: 'Training on equal employment opportunities ensures guards understand and respect discrimination laws and treat everyone fairly in the workplace.'
  },
  {
    img: '/Gallery/SupervisorTraining.jpeg',
    alt: 'Supervisor Training',
    title: 'Supervisor Training',
    description: 'Supervisors are provided with specialized training to manage teams effectively, ensuring high performance and adherence to company protocols.'
  }
]

const trainingIcons = [
  'fa-first-aid',
  'fa-comments',
  'fa-handshake',
  'fa-exclamation-triangle',
  'fa-box',
  'fa-hands',
  'fa-user-check',
  'fa-clipboard-list',
  'fa-balance-scale',
  'fa-users-cog'
]

const setTilt = (event) => {
  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const pointerX = (event.clientX - bounds.left) / bounds.width
  const pointerY = (event.clientY - bounds.top) / bounds.height

  card.style.setProperty('--rotate-x', `${(0.5 - pointerY) * 7}deg`)
  card.style.setProperty('--rotate-y', `${(pointerX - 0.5) * 9}deg`)
  card.style.setProperty('--glow-x', `${pointerX * 100}%`)
  card.style.setProperty('--glow-y', `${pointerY * 100}%`)
}

const resetTilt = (event) => {
  event.currentTarget.style.setProperty('--rotate-x', '0deg')
  event.currentTarget.style.setProperty('--rotate-y', '0deg')
}

function AnimatedCounter({ value, suffix = '', duration = 1600 }) {
  const counterRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const counter = counterRef.current
    if (!counter) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplayValue(value)
      return undefined
    }

    let animationFrame = null

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      const startTime = performance.now()
      const animate = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(Math.round(value * easedProgress))

        if (progress < 1) animationFrame = window.requestAnimationFrame(animate)
      }

      animationFrame = window.requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(counter)

    return () => {
      observer.disconnect()
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
    }
  }, [duration, value])

  return (
    <span ref={counterRef} aria-label={`${value}${suffix}`}>
      {displayValue}{suffix}
    </span>
  )
}

function Training() {
  const heroRef = useRef(null)
  const heroVisualRef = useRef(null)

  useEffect(() => {
    let animationFrame = null

    const updateLogoPosition = () => {
      animationFrame = null
      const hero = heroRef.current
      const visual = heroVisualRef.current
      if (!hero || !visual) return

      const heroTop = hero.getBoundingClientRect().top + window.scrollY
      const scrollStart = Math.max(0, heroTop - window.innerHeight * 0.35)
      const scrollDistance = Math.max(hero.offsetHeight * 0.68, 1)
      const progress = Math.min(1, Math.max(0, (window.scrollY - scrollStart) / scrollDistance))
      const isMobile = window.matchMedia('(max-width: 760px)').matches
      const maxTravel = isMobile
        ? Math.max(0, visual.clientWidth - 132)
        : Math.max(0, visual.clientHeight - 194)

      visual.style.setProperty('--logo-offset', `${progress * maxTravel}px`)
    }

    const requestLogoUpdate = () => {
      if (animationFrame !== null) return
      animationFrame = window.requestAnimationFrame(updateLogoPosition)
    }

    updateLogoPosition()
    window.addEventListener('scroll', requestLogoUpdate, { passive: true })
    window.addEventListener('resize', requestLogoUpdate)

    return () => {
      window.removeEventListener('scroll', requestLogoUpdate)
      window.removeEventListener('resize', requestLogoUpdate)
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <main className="training-page">
      <div className="training-page-container">
        <section
          className="training-hero training-tilt"
          ref={heroRef}
          onPointerMove={setTilt}
          onPointerLeave={resetTilt}
        >
          <div className="training-hero-grid" aria-hidden="true" />
          <div className="training-hero-copy">
            <h1>Training &amp; Development for Security Guards</h1>
            <p>
              We provide a comprehensive training program to ensure our guards are well-equipped to handle all
              situations, from emergency responses to conflict resolution, armed robbery scenarios, and beyond. Our
              bi-monthly training sessions are crucial to their development.
            </p>
          </div>
          <div className="training-hero-visual" ref={heroVisualRef} aria-hidden="true">
            <span className="training-logo-rail" />
            <div className="training-hero-image-wrap">
              <img src="/Gallery/fire1.jpg" alt="" />
              <span className="training-hero-scan" />
            </div>
            <span className="training-orbit training-orbit-one" />
            <span className="training-orbit training-orbit-two" />
            <span className="training-logo-runner">
              <img src="/HGS_Harmony_Group_Services_Logo_Transparent_High_Resolution.png" alt="" />
            </span>
            <span className="training-visual-badge training-badge-cap"><i className="fas fa-graduation-cap" /></span>
          </div>
        </section>

        <section className="training-overview">
          <h2>Our Training Programs</h2>
          <p>
            Our guards receive in-depth training on a variety of important topics to ensure they are always prepared,
            whether it&apos;s handling emergencies or interacting with clients. Here&apos;s a list of the specialized training we
            provide:
          </p>
        </section>

        <section className="training-programs">
          {trainingPrograms.map((program, index) => (
            <article
              className="training-program training-tilt"
              key={program.title}
              onPointerMove={setTilt}
              onPointerLeave={resetTilt}
              style={{ '--delay': `${index * 55}ms` }}
            >
              <div className="program-image-wrap">
                <img src={program.img} alt={program.alt} className="program-image" loading="lazy" />
                <span className="program-image-shine" aria-hidden="true" />
              </div>
              <div className="program-content">
                <span className="program-module-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <i className={`fas ${trainingIcons[index]}`} />
                </span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="training-stats-section">
          <h2>Our Training Success</h2>
          <div className="training-stats">
            <div className="training-stat-card training-tilt" onPointerMove={setTilt} onPointerLeave={resetTilt}>
              <i className="fas fa-clock" aria-hidden="true" />
              <h3><AnimatedCounter value={200} suffix="+" /></h3>
              <p>Training Hours Every Year</p>
            </div>
            <div className="training-stat-card training-tilt" onPointerMove={setTilt} onPointerLeave={resetTilt}>
              <i className="fas fa-users" aria-hidden="true" />
              <h3><AnimatedCounter value={98} suffix="%" /></h3>
              <p>Staff Retention After Training</p>
            </div>
            <div className="training-stat-card training-tilt" onPointerMove={setTilt} onPointerLeave={resetTilt}>
              <i className="fas fa-check-circle" aria-hidden="true" />
              <h3><AnimatedCounter value={30} suffix="+" /></h3>
              <p>Successful Drills Every Year</p>
            </div>
          </div>
        </section>

        <section className="training-outcomes-section">
          <h2>What Our Training Builds</h2>
          <div className="training-outcomes-grid">
            <div className="training-outcome-card training-tilt" onPointerMove={setTilt} onPointerLeave={resetTilt}>
              <span aria-hidden="true"><i className="fas fa-bolt" /></span>
              <div>
                <p>Practical drills build calm, confident responses to real-world emergencies and site incidents.</p>
                <p>Preparedness under pressure</p>
              </div>
            </div>
            <div className="training-outcome-card training-tilt" onPointerMove={setTilt} onPointerLeave={resetTilt}>
              <span aria-hidden="true"><i className="fas fa-comments" /></span>
              <div>
                <p>Communication and conflict-resolution training helps teams protect people while maintaining professionalism.</p>
                <p>Professional service at every site</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="training-rewards-section">
        <div className="rewards-header">
          <h2>Rewards &amp; Recognition</h2>
          <p>Celebrating our security team&apos;s dedication with quarterly awards!</p>
        </div>
        <div className="rewards-gallery">
          <div className="training-reward-card training-tilt" onPointerMove={setTilt} onPointerLeave={resetTilt}>
            <div className="reward-image-wrap"><img src="/Gallery/Reward1.jpeg" alt="Q1 Award Ceremony" loading="lazy" /></div>
            <p>Security Guard Award</p>
          </div>
          <div className="training-reward-card training-tilt" onPointerMove={setTilt} onPointerLeave={resetTilt}>
            <div className="reward-image-wrap"><img src="/Gallery/Reward31.jpeg" alt="Q2 Award Ceremony" loading="lazy" /></div>
            <p>HouseKeeping Guard Award</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Training
