import { useEffect } from 'react'
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import Preloader from './components/Preloader/Preloader'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Services from './pages/Services/Services'
import Housekeeping from './pages/Housekeeping/Housekeeping'
import ContactUs from './pages/ContactUs/ContactUs'
import Gallery from './pages/Gallery/Gallery'
import Training from './pages/Training/Training'
import Careers from './pages/Careers/Careers'
import './App.css'
import './LightTheme.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'Harmony Group Security Services | Pune',
      '/about-us': 'About Us | Harmony Security',
      '/services': 'Security Services | Harmony Security',
      '/housekeeping-services': 'Housekeeping Services | Harmony Group Services',
      '/contact-us': 'Contact Us | Harmony Security',
      '/gallery': 'Gallery | Harmony Security',
      '/training': 'Security Training | Harmony Security',
      '/careers': 'Careers | Harmony Security',
    }

    document.title = titles[pathname] || 'Page Not Found | Harmony Security'
    window.scrollTo(0, 0)
    AOS.refresh()
  }, [pathname])

  return null
}

function NotFound() {
  return (
    <main className="not-found-page">
      <span>404</span>
      <h1>Page not found</h1>
      <p>The page you are looking for may have moved or no longer exists.</p>
      <Link to="/">Return to home</Link>
    </main>
  )
}

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-in-out',
    })

    const handleLoad = () => AOS.refresh()
    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/housekeeping-services" element={<Housekeeping />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery"    element={<Gallery />} />
          <Route path="/training"   element={<Training />} />
          <Route path="/careers"    element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
