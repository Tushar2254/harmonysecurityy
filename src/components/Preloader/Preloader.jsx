import { useEffect, useState } from 'react'
import './Preloader.css'

function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800)
    const hideTimer = setTimeout(() => setVisible(false), 2500)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-inner">
        <div className="preloader-ring">
          <div className="ring-circle"></div>
          <img src="/HGS_Harmony_Group_Services_Logo_Transparent_High_Resolution.png" alt="Harmony Logo" className="preloader-logo" />
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
        <p className="preloader-text">HARMONY SECURITY SERVICES</p>
        <p className="preloader-sub">Protecting What Matters</p>
      </div>
    </div>
  )
}

export default Preloader
