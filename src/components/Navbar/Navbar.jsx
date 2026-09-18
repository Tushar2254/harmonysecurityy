import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/about-us',  label: 'About Us' },
  { to: '/careers',   label: 'Careers' },
  { to: '/gallery',   label: 'Gallery' },
  { to: '/training',  label: 'Training' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const hasImmersiveHero = [
    '/contact-us',
    '/careers',
    '/gallery',
    '/training',
    '/about-us',
    '/services',
    '/housekeeping-services',
  ].includes(location.pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleResize = () => { if (window.innerWidth > 1120) setIsMenuOpen(false) }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setScrolled(window.scrollY > 50)
  }, [location])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--nav-pointer-x', `${event.clientX - bounds.left}px`)
  }

  return (
    <>
      <nav
        className={`harmony-nav ${scrolled ? 'scrolled' : ''} ${location.pathname === '/' && !scrolled ? 'home-top' : ''} ${hasImmersiveHero && !scrolled ? 'hero-top' : ''}`}
        onPointerMove={handlePointerMove}
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          {/* LEFT — Logo */}
          <Link to="/" className="nav-logo">
            <span className="nav-logo-mark">
              <span className="nav-logo-flipper">
                <img className="nav-logo-depth nav-logo-depth-one" src="/hgs-logo-optimized.png" alt="" />
                <img className="nav-logo-depth nav-logo-depth-two" src="/hgs-logo-optimized.png" alt="" />
                <img className="nav-logo-face nav-logo-face-front" src="/hgs-logo-optimized.png" alt="Harmony Group Security Services logo" />
                <img className="nav-logo-face nav-logo-face-back" src="/hgs-logo-optimized.png" alt="" />
              </span>
              <span className="nav-logo-gloss" aria-hidden="true" />
            </span>
            <span className="nav-brand">
              Harmony <span>Group</span>
              <span className="nav-brand-sub">Security Services</span>
            </span>
          </Link>

          {/* RIGHT — Links */}
          <ul className="nav-links">
            {navLinks.map(({ to, label }, index) => (
              <>{index === 1 && (
                <li
                  className="nav-services-menu"
                  key="services-menu"
                  onPointerEnter={() => setIsServicesOpen(true)}
                  onPointerLeave={() => setIsServicesOpen(false)}
                  onFocus={() => setIsServicesOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setIsServicesOpen(false)
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`nav-link-item nav-services-trigger ${location.pathname === '/services' || location.pathname === '/housekeeping-services' ? 'active' : ''}`}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    Services <i className="fas fa-chevron-down" aria-hidden="true" />
                    <span className="link-underline" />
                  </button>
                  <div className={`nav-services-dropdown ${isServicesOpen ? 'open' : ''}`}>
                    <Link to="/services">Security Division</Link>
                    <Link to="/housekeeping-services">Housekeeping Division</Link>
                  </div>
                </li>
              )}
              <li key={to}>
                <Link
                  to={to}
                  className={`nav-link-item ${location.pathname === to ? 'active' : ''}`}
                  aria-current={location.pathname === to ? 'page' : undefined}
                >
                  {label}
                  <span className="link-underline"></span>
                </Link>
              </li>
              </>
            ))}
            <li>
              <Link to="/contact-us" className={`nav-cta-btn ${location.pathname === '/contact-us' ? 'active' : ''}`}>Contact us</Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(p => !p)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div id="mobile-navigation" className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
        <ul>
          {navLinks.map(({ to, label }, index) => (
            <>{index === 1 && (
              <li className="mobile-services-group" key="mobile-services" style={{ '--drawer-index': index }}>
                <span>Services</span>
                <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} tabIndex={isMenuOpen ? 0 : -1}>Security Division</Link>
                <Link to="/housekeeping-services" className={location.pathname === '/housekeeping-services' ? 'active' : ''} tabIndex={isMenuOpen ? 0 : -1}>Housekeeping Division</Link>
              </li>
            )}
            <li key={to} style={{ '--drawer-index': index }}>
              <Link
                to={to}
                className={location.pathname === to ? 'active' : ''}
                aria-current={location.pathname === to ? 'page' : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {label}
              </Link>
            </li>
            </>
          ))}
          <li style={{ '--drawer-index': navLinks.length }}>
            <Link
              to="/contact-us"
              className={location.pathname === '/contact-us' ? 'active' : ''}
              aria-current={location.pathname === '/contact-us' ? 'page' : undefined}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="drawer-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  )
}

export default Navbar
