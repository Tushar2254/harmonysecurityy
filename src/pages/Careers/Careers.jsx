import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Careers.css'

function Careers() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    title: '', name: '', email: '', tel: '',
    exServiceman: '', position: '', age: '',
    education: '', experience: '', city: '', address: '', message: ''
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handlePointerMove = (event) => {
    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = sectionRef.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    sectionRef.current.style.setProperty('--career-rx', `${(0.5 - y) * 8}deg`)
    sectionRef.current.style.setProperty('--career-ry', `${(x - 0.5) * 11}deg`)
    sectionRef.current.style.setProperty('--career-card-rx', `${(0.5 - y) * 1.2}deg`)
    sectionRef.current.style.setProperty('--career-card-ry', `${(x - 0.5) * 1.8}deg`)
    sectionRef.current.style.setProperty('--career-px', `${x * 100}%`)
    sectionRef.current.style.setProperty('--career-py', `${y * 100}%`)
  }

  const resetPerspective = () => {
    sectionRef.current?.style.setProperty('--career-rx', '0deg')
    sectionRef.current?.style.setProperty('--career-ry', '0deg')
    sectionRef.current?.style.setProperty('--career-card-rx', '0deg')
    sectionRef.current?.style.setProperty('--career-card-ry', '0deg')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Career application: ${form.position} — ${form.name}`)
    const body = encodeURIComponent(
      `Title: ${form.title}\nName: ${form.name}\nEmail: ${form.email}\nTelephone: ${form.tel}\nEx-Serviceman: ${form.exServiceman || 'Not specified'}\nPosition: ${form.position}\nAge: ${form.age || 'Not specified'}\nEducation: ${form.education || 'Not specified'}\nExperience: ${form.experience || 'Not specified'}\nCity: ${form.city || 'Not specified'}\nAddress: ${form.address || 'Not specified'}\n\nMessage:\n${form.message || 'None'}`
    )
    setSubmitted(true)
    window.location.href = `mailto:info@harmonygroup.in?subject=${subject}&body=${body}`
  }

  return (
      <section
        ref={sectionRef}
        className="careers-section"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPerspective}
      >
        <div className="careers-interactive-glow" aria-hidden="true" />

        <div className="careers-combined-hero">
          <div className="careers-hero-copy">
            <h1>More about <span>JOIN OUR TEAM</span></h1>
            <p>Build a career with purpose, discipline and opportunity.</p>
            <div className="careers-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right" aria-hidden="true" />
              <span>JOIN OUR TEAM</span>
            </div>
          </div>

          <div className="careers-3d-scene" aria-hidden="true">
            <div className="careers-depth-ring careers-depth-ring-one" />
            <div className="careers-depth-ring careers-depth-ring-two" />
            <div className="careers-3d-core">
              <div className="careers-3d-panel careers-3d-panel-back"><i className="fas fa-users" /></div>
              <div className="careers-3d-panel careers-3d-panel-mid"><i className="fas fa-graduation-cap" /></div>
              <div className="careers-3d-panel careers-3d-panel-front">
                <div className="careers-logo-flipper">
                  <img className="careers-logo-depth careers-logo-depth-one" src="/hgs-logo-optimized.png" alt="" />
                  <img className="careers-logo-depth careers-logo-depth-two" src="/hgs-logo-optimized.png" alt="" />
                  <img className="careers-logo-face careers-logo-face-front" src="/hgs-logo-optimized.png" alt="" />
                  <img className="careers-logo-face careers-logo-face-back" src="/hgs-logo-optimized.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="careers-inner">

          {/* Left — info */}
          <div className="careers-info">
            <p className="careers-tag"><i className="fas fa-briefcase" aria-hidden="true" /> Careers at Harmony</p>
            <h2>Protect people.<br />Build your future.</h2>
            <p className="careers-sub">
              We are always looking for dedicated, disciplined, and passionate individuals to join
              the Harmony Security family. Whether you are a fresher or an experienced professional,
              there&apos;s a place for you here.
            </p>

            <div className="careers-perks">
              {[
                { icon: 'fa-shield',          text: 'Trusted & reputed security organization' },
                { icon: 'fa-graduation-cap',  text: 'In-house training & skill development' },
                { icon: 'fa-line-chart',      text: 'Growth opportunities at every level' },
                { icon: 'fa-users',           text: 'Welcoming environment for ex-servicemen' },
                { icon: 'fa-clock',           text: 'Flexible shifts & regular pay' },
              ].map((p, i) => (
                <div key={i} className="careers-perk">
                  <i className={`fa ${p.icon}`} />
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="careers-form-card">
            {submitted ? (
              <div className="careers-success">
                <i className="fa fa-check-circle" />
                <h3>Your email draft is ready</h3>
                <p>Complete the message in your email app to send your application to our HR team.</p>
                <button type="button" className="cf-submit" onClick={() => setSubmitted(false)}>Back to form</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Application Form</h3>

                {/* Title */}
                <div className="cf-group">
                  <label>Title <span>*</span></label>
                  <div className="cf-radio-row">
                    {['Mr', 'Mrs', 'Ms'].map(t => (
                      <label key={t} className="cf-radio">
                        <input type="radio" name="title" value={t} onChange={() => set('title', t)} required />
                        <span>{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2-col row */}
                <div className="cf-row">
                  <div className="cf-group">
                    <label>Full Name <span>*</span></label>
                    <input type="text" placeholder="Your name" autoComplete="name" required onChange={e => set('name', e.target.value)} />
                  </div>
                  <div className="cf-group">
                    <label>Email <span>*</span></label>
                    <input type="email" placeholder="you@email.com" autoComplete="email" required onChange={e => set('email', e.target.value)} />
                  </div>
                </div>

                <div className="cf-row">
                  <div className="cf-group">
                    <label>Tel. <span>*</span></label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" autoComplete="tel" required onChange={e => set('tel', e.target.value)} />
                  </div>
                  <div className="cf-group">
                    <label>Are you an Ex-Serviceman?</label>
                    <div className="cf-radio-row">
                      {['Yes', 'No'].map(v => (
                        <label key={v} className="cf-radio">
                          <input type="radio" name="exServiceman" value={v} onChange={() => set('exServiceman', v)} />
                          <span>{v}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Position */}
                <div className="cf-group">
                  <label>Position <span>*</span></label>
                  <select required onChange={e => set('position', e.target.value)}>
                    <option value="">Select position</option>
                    <option>Security Guard</option>
                    <option>Security Guard + Driver</option>
                    <option>Security Supervisor</option>
                    <option>Area Manager / Field Officer</option>
                    <option>Operations Manager</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="cf-row">
                  <div className="cf-group">
                    <label>Age</label>
                    <input type="number" placeholder="e.g. 28" min="18" max="60" onChange={e => set('age', e.target.value)} />
                  </div>
                  <div className="cf-group">
                    <label>City</label>
                    <input type="text" placeholder="Pune" autoComplete="address-level2" onChange={e => set('city', e.target.value)} />
                  </div>
                </div>

                <div className="cf-row">
                  <div className="cf-group">
                    <label>Education</label>
                    <input type="text" placeholder="e.g. 12th / Graduate" onChange={e => set('education', e.target.value)} />
                  </div>
                  <div className="cf-group">
                    <label>Experience</label>
                    <input type="text" placeholder="e.g. 3 years" onChange={e => set('experience', e.target.value)} />
                  </div>
                </div>

                <div className="cf-group">
                  <label>Address</label>
                  <input type="text" placeholder="Your full address" autoComplete="street-address" onChange={e => set('address', e.target.value)} />
                </div>

                <div className="cf-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about yourself..." rows="4" onChange={e => set('message', e.target.value)} />
                </div>

                <button type="submit" className="cf-submit">
                  <span>Continue via Email</span>
                  <i className="fa fa-arrow-right" />
                </button>

                <p className="cf-note">
                  <i className="fa fa-envelope" /> Review your details in your email app before sending.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
  )
}

export default Careers
