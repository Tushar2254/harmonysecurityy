import './WhatsAppButton.css'

const PHONE    = '917768934871'  // country code + number, no + or spaces
const MESSAGE  = encodeURIComponent(
  'Hello Harmony Security! I would like to enquire about your security services.'
)
const WA_LINK  = `https://wa.me/${PHONE}?text=${MESSAGE}`

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="tel:+917768934871"
        className="call-float"
        aria-label="Call Harmony Security"
      >
        <span className="call-pulse" />
        <i className="fas fa-phone call-icon" aria-hidden="true" />
        <span className="float-tooltip">Call us: +91 77689 34871</span>
      </a>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className="wa-float"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="wa-pulse" />

        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="wa-icon" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#fff"
            d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.478.65 4.8 1.787 6.81L2 30l7.385-1.758A13.94 13.94 0 0 0 16.002 30C23.72 30 30 23.72 30 16.002 30 8.28 23.72 2 16.002 2zm0 25.6a11.56 11.56 0 0 1-5.897-1.614l-.422-.25-4.384 1.044 1.064-4.268-.276-.437A11.558 11.558 0 0 1 4.4 16.002C4.4 9.603 9.603 4.4 16.002 4.4S27.6 9.603 27.6 16.002 22.4 27.6 16.002 27.6zm6.344-8.668c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.174-.232.348-.9 1.132-1.104 1.366-.203.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.728-1.035-.924-1.734-2.065-1.937-2.413-.204-.348-.022-.536.153-.71.158-.156.348-.406.522-.61.174-.203.232-.347.348-.58.116-.232.058-.436-.03-.61-.086-.174-.786-1.893-1.076-2.594-.284-.682-.572-.59-.786-.6l-.67-.012c-.232 0-.61.086-.928.434-.32.348-1.218 1.19-1.218 2.9 0 1.71 1.247 3.363 1.42 3.596.174.232 2.453 3.747 5.946 5.255.832.358 1.48.572 1.986.732.834.265 1.593.228 2.193.138.67-.1 2.06-.843 2.35-1.657.29-.812.29-1.508.203-1.657-.086-.15-.32-.233-.67-.407z"
          />
        </svg>

        {/* Tooltip */}
        <span className="wa-tooltip">Need Help? Chat with us</span>
      </a>
    </>
  )
}
