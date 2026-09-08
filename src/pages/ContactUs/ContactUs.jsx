import { useState, useRef } from 'react'
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner'
import './ContactUs.css'

const faqs = [
  {
    question: 'What are the rules of security?',
    answer: 'Security best practices include: own safety comes first, close or lock doors, be careful sharing private information, be aware of risks, adhere to established policies and procedures, and protect your devices at all times.'
  },
  {
    question: 'Can your security services be customized to meet specific needs?',
    answer: 'Yes, we understand that each client has unique security requirements. Our services are customizable to adapt to your specific needs, whether it\'s event security, residential protection, or corporate security.'
  },
  {
    question: 'How experienced are your security personnel?',
    answer: 'Our security personnel undergo rigorous training and have extensive experience in the field. Many come from military or law enforcement backgrounds, ensuring a high level of professionalism. They also undergo compulsory training twice a month.'
  },
  {
    question: 'How quickly can your security team respond to emergencies?',
    answer: 'Our security team is strategically positioned and trained to respond promptly to emergencies. Response times may vary depending on the specific location and circumstances, but we prioritize quick and efficient reactions.'
  },
  {
    question: 'What are your working hours?',
    answer: 'Feel free to reach us via call between 10am to 7pm every day. Our office hours for meetings are open between 10am to 6pm excluding weekends.'
  }
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`hs-faq-item ${open ? 'open' : ''}`}>
      <button className="hs-faq-q" onClick={() => setOpen(p => !p)}>
        <span>{question}</span>
        <i className={`ri-${open ? 'subtract-fill' : 'add-line'}`} />
      </button>
      {open && <div className="hs-faq-a">{answer}</div>}
    </div>
  )
}

function ContactUs() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      <HeaderBanner
        backgroundImage="/Handshake.jpg"
        title="OUR AVAILABILITY"
        text="With Harmony, Protect and Perfect Your Space"
      />

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="hs-contact-section">
        <div className="hs-contact-inner">

          {/* Left — info panel */}
          <div className="hs-info-panel">
            <div className="hs-info-top">
              <p className="hs-info-tagline">Start a conversation</p>
              <h2>Ready when you are.</h2>
              <p className="hs-info-sub">
                Tell us a little about what you need. A member of our team will respond within one business day.
              </p>
            </div>

            <div className="hs-info-items">
              <a href="tel:+917584526824" className="hs-info-item">
                <div className="hs-info-icon"><i className="fa fa-phone" /></div>
                <div>
                  <strong>Phone</strong>
                  <span>+91 75845 26824</span>
                </div>
              </a>
              <a href="tel:18001207066" className="hs-info-item">
                <div className="hs-info-icon"><i className="fa fa-headphones" /></div>
                <div>
                  <strong>Toll Free</strong>
                  <span>1800-120-7066</span>
                </div>
              </a>
              <a href="mailto:hello@harmonysecurity.com" className="hs-info-item">
                <div className="hs-info-icon"><i className="fa fa-envelope" /></div>
                <div>
                  <strong>Email</strong>
                  <span>hello@harmonysecurity.com</span>
                </div>
              </a>
              <div className="hs-info-item">
                <div className="hs-info-icon"><i className="fa fa-map-marker" /></div>
                <div>
                  <strong>Address</strong>
                  <span>Sangamwadi, Pune — 411003</span>
                </div>
              </div>
              <div className="hs-info-item">
                <div className="hs-info-icon"><i className="fa fa-clock-o" /></div>
                <div>
                  <strong>Office Hours</strong>
                  <span>Mon–Sat: 10am – 7pm</span>
                </div>
              </div>
            </div>

            <div className="hs-respond-badge">
              <i className="fa fa-bolt" /> We typically respond within 24 hours
            </div>
          </div>

          {/* Right — form */}
          <div className="hs-form-card">
            {submitted ? (
              <div className="hs-success">
                <div className="hs-success-icon"><i className="fa fa-check-circle" /></div>
                <h3>Request Sent!</h3>
                <p>Thank you! A member of our team will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="hs-form-header">
                  <h3>Send your request</h3>
                  <p>Fill in the details below and we'll get back to you.</p>
                </div>

                <div className="hs-form-row">
                  <div className="hs-form-group">
                    <label>Your Name <span>*</span></label>
                    <input type="text" placeholder="John Smith" required />
                  </div>
                  <div className="hs-form-group">
                    <label>Work Email <span>*</span></label>
                    <input type="email" placeholder="john@company.com" required />
                  </div>
                </div>

                <div className="hs-form-row">
                  <div className="hs-form-group">
                    <label>Phone Number <span>*</span></label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="hs-form-group">
                    <label>Service Needed</label>
                    <select>
                      <option value="">Select a service</option>
                      <option>Bodyguard & Executive Protection</option>
                      <option>Security Guarding</option>
                      <option>Facility Cleaning</option>
                      <option>VIP & Event Security</option>
                      <option>CCTV Monitoring</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="hs-form-group">
                  <label>How can we help?</label>
                  <textarea placeholder="Tell us about your security requirements..." required></textarea>
                </div>

                <button type="submit" className="hs-submit">
                  <span>Send my request</span>
                  <i className="fa fa-arrow-right" />
                </button>

                <p className="hs-form-note">
                  <i className="fa fa-shield" /> Your information is safe and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="hs-faq-section">
        <div className="hs-faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="hs-faq-list">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ContactUs
