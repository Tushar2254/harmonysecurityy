import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about-us', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/training', label: 'Training' },
]

const services = [
  'Residential Security',
  'Commercial Security',
  'Event Security',
  'Bodyguard / Bouncer',
  'Housekeeping Services',
  'Staff Training',
]

function Footer() {
  return (
    <footer className="site-footer">

      {/* ── CTA STRIP ── */}
      <div className="footer-cta-strip">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <h3>We're the Best Security Provider in Pune</h3>
            <p>Trusted by 30+ clients. Available 24/7 for your protection.</p>
          </div>
          <Link to="/contact-us" className="footer-cta-btn">
           CONTACT US <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="footer-main">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-wrap">
              <img src="/logo-removebg-preview.png" alt="Harmony Logo" />
              <span className="footer-brand-name">Harmony<span>Group</span></span>
            </Link>
            <p className="footer-about">
              Harmony Security Services is a leading Security &amp; Investigation Solution Company in Pune.
              A pioneer in Security Services &amp; Housekeeping Services since 2014.
            </p>
            <div className="footer-socials">
              <span>Follow Us</span>
              <div className="social-icons">
                <a href="#" className="social-icon facebook" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon twitter" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon instagram" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>
                    <i className="fas fa-chevron-right"></i>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services">
                    <i className="fas fa-chevron-right"></i>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <strong>Address</strong>
                  <span>Sangamwadi, Pune - 411003</span>
                </div>
              </li>
              <li>
                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                <div>
                  <strong>Phone</strong>
                  <span>+91 75845 26824</span>
                </div>
              </li>
              <li>
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <strong>Email</strong>
                  <span>info@harmonygroup.in</span>
                </div>
              </li>
              <li>
                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                <div>
                  <strong>Working Hours</strong>
                  <span>Mon–Sat: 10am – 7pm</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>Copyright &copy; {new Date().getFullYear()} <Link to="/">Harmony Security Services</Link>. All Rights Reserved.</p>
          <ul className="footer-bottom-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer
