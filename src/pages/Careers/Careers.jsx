import { useState } from 'react'
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner'
import './Careers.css'

function Careers() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    title: '', name: '', email: '', tel: '',
    exServiceman: '', position: '', age: '',
    education: '', experience: '', city: '', address: '', message: ''
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <HeaderBanner
        backgroundImage="/Gallery/Training1.jpeg"
        title="JOIN OUR TEAM"
        text="Start an Exciting Career With Us"
      />

      <section className="careers-section">
        <div className="careers-inner">

          {/* Left — info */}
          <div className="careers-info">
            <p className="careers-tag">Apply Today</p>
            <h2>Start an exciting<br />career with us</h2>
            <p className="careers-sub">
              We are always looking for dedicated, disciplined, and passionate individuals to join
              the Harmony Security family. Whether you are a fresher or an experienced professional,
              there's a place for you here.
            </p>

            <div className="careers-perks">
              {[
                { icon: 'fa-shield',          text: 'Trusted & reputed security organization' },
                { icon: 'fa-graduation-cap',  text: 'In-house training & skill development' },
                { icon: 'fa-line-chart',      text: 'Growth opportunities at every level' },
                { icon: 'fa-users',           text: 'Welcoming environment for ex-servicemen' },
                { icon: 'fa-clock-o',         text: 'Flexible shifts & regular pay' },
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
                <h3>Application Submitted!</h3>
                <p>Thank you! Our HR team will contact you within 2–3 business days.</p>
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
                    <input type="text" placeholder="Your name" required onChange={e => set('name', e.target.value)} />
                  </div>
                  <div className="cf-group">
                    <label>Email <span>*</span></label>
                    <input type="email" placeholder="you@email.com" required onChange={e => set('email', e.target.value)} />
                  </div>
                </div>

                <div className="cf-row">
                  <div className="cf-group">
                    <label>Tel. <span>*</span></label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" required onChange={e => set('tel', e.target.value)} />
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
                    <input type="text" placeholder="Pune" onChange={e => set('city', e.target.value)} />
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
                  <input type="text" placeholder="Your full address" onChange={e => set('address', e.target.value)} />
                </div>

                <div className="cf-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about yourself..." rows="4" onChange={e => set('message', e.target.value)} />
                </div>

                <button type="submit" className="cf-submit">
                  <span>Send Application</span>
                  <i className="fa fa-arrow-right" />
                </button>

                <p className="cf-note">
                  <i className="fa fa-lock" /> Your information is confidential and secure.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers
