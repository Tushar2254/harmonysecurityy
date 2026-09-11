import { Link } from 'react-router-dom'
import './HeaderBanner.css'

function HeaderBanner({ backgroundImage, title, text }) {
  return (
    <>
      <div className="header-banner-gap"></div>
      <div
        className="header-banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="header-banner-content">
          <h1
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-offset="0"
          >
            More about <span>{title}</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{text}</p>
          <div className="header-banner-breadcrumb">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <i className="fas fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBanner
