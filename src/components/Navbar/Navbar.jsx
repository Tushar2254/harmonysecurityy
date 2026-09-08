import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/services',  label: 'Services' },
  { to: '/about-us',  label: 'About Us' },
  { to: '/careers',   label: 'Careers' },
  { to: '/gallery',   label: 'Gallery' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleResize = () => { if (window.innerWidth > 992) setIsMenuOpen(false) }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => { setIsMenuOpen(false) }, [location])

  return (
    <>
      <nav className={`harmony-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          {/* LEFT — Logo */}
          <Link to="/" className="nav-logo">
            <img src="/logo-removebg-preview.png" alt="Harmony Logo" />
            <span className="nav-brand">
              Harmony<span>Group</span>
              <span className="nav-brand-sub">Security Services</span>
            </span>
          </Link>

          {/* RIGHT — Links */}
          <ul className="nav-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav-link-item ${location.pathname === to ? 'active' : ''}`}
                >
                  {label}
                  <span className="link-underline"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact-us" className="nav-cta-btn">Contact us</Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isMenuOpen && (
        <div className="drawer-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  )
}

export default Navbar
