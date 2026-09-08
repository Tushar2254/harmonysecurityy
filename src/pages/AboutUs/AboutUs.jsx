import { useState } from 'react'
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner'
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
]

const potentialSections = [
  { title: 'Customer Service', text: 'HARMONY Security is committed to the highest levels of customer service for our clients, from the larger national account to smaller local contracts. Our clients benefit from our relationship-based approach and single point of contact account management, backed by our 24-hour control room with standby QRT.' },
  { title: 'Our People', text: 'HARMONY Security is known for the high caliber of our personnel. Our staff retention levels are above industry standards, reflecting excellent site management, focused training, professional development, internal promotion opportunities, and market competitive remuneration.' },
  { title: 'Resources & Transition Planning', text: 'With our effectively trained security staff, HARMONY Security has significant capacity for surge and emergency security requirements. We also have a transition program that ensures all contract rollouts are diligently planned and communicated to all stakeholders.' },
  { title: 'Accountable Training Academy', text: 'Our commitment to esteemed clients is well demonstrated by our investment in staff training as an accredited registered training academy (RTA). Our training programs encompass a variety of industry, customer service, and client-specific programs.' },
  { title: 'Health and Safety', text: 'HARMONY Security has an exceptional safety record, maintaining a documented Health, Safety, and Environment (HSE). We are committed to ensuring the good health and well-being of our employees, the community, and the environment.' },
  { title: 'Value / Solution', text: 'HARMONY Security leverages our experience and depth of resources to provide our clients with the best value solutions. We remain competitive in the marketplace while offering premium services.' },
]

const people = [
  { image: '/Suraj.png', name: 'Mr. Suraj Shinde', position: 'CEO', description: 'Suraj Shinde has over 10 years of experience in the Security industry, leading innovative projects and teams.' },
  { image: '/modi1.jpg', name: 'Mrs. Namrata Bakre', position: 'HR Manager', description: 'Mrs. Namrata leverages her expertise to develop effective strategies that drive growth and impactful solutions.' },
  { image: '/modi2.jpg', name: 'Mr. Tukaram Ganjave', position: 'Admin Officer', description: 'Experienced admin officer ensuring smooth day-to-day operations across all sites.' },
  { image: '/modi2.jpg', name: 'Mr. Tushar Jadhav', position: 'Admin Officer', description: 'Dedicated admin officer with a strong focus on client satisfaction and operational excellence.' },
]

const clients = [
  { name: 'Godrej Shrewood', imgSrc: './Godrej_Shrewood.png' },
  { name: 'Logo', imgSrc: './logo.jpg' },
  { name: 'Knight Frank', imgSrc: './Knight Frank.svg' },
  { name: 'Godrej Properties', imgSrc: './Godrej_Properties.png' },
  { name: 'Yamaha', imgSrc: './yamaha.png' },
  { name: 'TVS', imgSrc: './tvs.png' },
  { name: 'Rachana', imgSrc: 'https://rachanalifestyle.com/wp-content/uploads/2018/10/rachana-lifestyle-logo-606.png' },
  { name: 'Client 8', imgSrc: '/modi1.jpg' },
]

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleClients = [
    clients[(currentIndex + 0) % clients.length],
    clients[(currentIndex + 1) % clients.length],
    clients[(currentIndex + 2) % clients.length],
    clients[(currentIndex + 3) % clients.length],
  ]

  return (
    <>
      <HeaderBanner
        backgroundImage="/Handshake.jpg"
        title="WHO WE ARE"
        text="Protecting What Matters, Serving with Excellence."
      />

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="why-inner">
          <div className="why-header" data-aos="fade-up">
            <span className="why-tag">What's So Special?</span>
            <h2>Why Choose Us?</h2>
            <p>Trusted by hundreds of clients across Pune for over a decade of excellence.</p>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, i) => (
              <div
                className="why-card"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                data-aos-duration="600"
              >
                <div className="why-card-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 20, fontSize: '0.82rem', color: '#999' }}>*T&amp;C apply.</p>
        </div>
      </section>

      {/* ── OUR POTENTIAL ── */}
      <section className="potential-section">
        <div className="potential-inner">
          <div className="potential-header" data-aos="fade-up">
            <span className="why-tag">Our Strengths</span>
            <h2>Our Potential</h2>
          </div>
          <div className="potential-grid">
            {potentialSections.map((s, i) => (
              <div
                className="potential-card"
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 80}
                data-aos-duration="700"
              >
                <h3>#{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATIONS ── */}
      <section className="operations-section">
        <div className="operations-inner">
          <div className="operations-header" data-aos="fade-up">
            <span className="why-tag" style={{ color: '#00c6ff' }}>How We Work</span>
            <h2>Our Operations</h2>
            <p>Empowering Security with Excellence in Recruitment, Training, and Monitoring.</p>
          </div>
          <div className="operations-grid">
            {[
              { gif: '/recruitment.gif', title: 'Recruitment', points: ['We meticulously select individuals who embody integrity, vigilance, and commitment.', 'We are shaping the future of your security with individuals who exceed expectations.', 'Every recruit is carefully chosen to safeguard your assets with a proactive mindset.'] },
              { gif: '/security_training.gif', title: 'Training', points: ['Cutting-edge training turning every member into an expert in crisis management.', 'Security is only as strong as the training behind it — our programs ensure readiness.', 'Continuous training guarantees your team is always a step ahead of emerging threats.'] },
              { gif: '/watcher.gif', title: 'Monitoring', points: ['24/7 protection solutions giving you peace of mind at all times.', 'Real-time monitoring means real-time responses — never let vulnerability go unchecked.', 'Proactive monitoring prevents potential threats before they become problems.'] },
            ].map((op, i) => (
              <div className="op-card" key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="op-card-icon">
                  <img src={op.gif} alt={op.title} />
                </div>
                <h3>{op.title}</h3>
                <ul>
                  {op.points.map((pt, j) => (
                    <li key={j}><i className="fas fa-shield-alt"></i>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="clients-section">
        <div className="clients-header" data-aos="fade-up">
          <span className="why-tag">Trusted By</span>
          <h2>Our Clients</h2>
        </div>
        <div className="client-carousel-container">
          <div className="client-images">
            {visibleClients.map((c, i) => (
              <div className="client-image" key={i}>
                <img src={c.imgSrc} alt={c.name} />
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="prev-btn" onClick={() => setCurrentIndex(p => (p - 1 + clients.length) % clients.length)}>‹</button>
            <button className="next-btn" onClick={() => setCurrentIndex(p => (p + 1) % clients.length)}>›</button>
          </div>
        </div>
      </section>

      <SecurityService />

      {/* ── VISION ── */}
      <section className="vision-section">
        <div className="vision-content">
          <h2>Our <span>Vision</span></h2>
          <p>We strive to lead the security industry by providing innovative, reliable, and accessible solutions that keep you safe — anytime, anywhere.</p>
          <p>Our mission is to offer peace of mind through advanced technology and expert protection for businesses and homes alike.</p>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section">
        <div className="team-inner">
          <div className="team-header" data-aos="fade-up">
            <span className="why-tag">The People Behind Harmony</span>
            <h2>Our Team</h2>
          </div>
          <div className="team-grid">
            {people.map((p, i) => (
              <div className="team-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="team-card-img">
                  <img src={p.image} alt={p.name} />
                  <div className="team-card-overlay">
                    <p>{p.description}</p>
                  </div>
                </div>
                <div className="team-card-info">
                  <h3>{p.name}</h3>
                  <span>{p.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
