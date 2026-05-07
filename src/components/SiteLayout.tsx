import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import logoHorizontal from '../assets/logo/logo_horizontal.png'
import { getLittleHotelierUrl } from '../services/littleHotelierService'
import { useBooking } from '../context/BookingContext'
import { ContactFab } from './ContactFab'
import { Footer } from './Footer'

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'main-nav-link is-active' : 'main-nav-link'
}

export function SiteLayout() {
  const { openBooking } = useBooking()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  return (
    <div className="site-shell">
      <div className="top-contact-bar">
        <div className="container top-contact-row">
          <p>Zurich, Switzerland</p>
          <p>info@milestogo.ch</p>
          <p>Phone: +41 76 223 45 67</p>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-row">
          <Link to="/" className="brand">
            <img src={logoHorizontal} alt="Miles to Go logo" />
          </Link>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {mobileNavOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>

          <nav
            aria-label="Main navigation"
            className={`main-nav${mobileNavOpen ? ' is-open' : ''}`}
          >
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <button
              type="button"
              className="main-nav-link"
              onClick={() => {
                const url = getLittleHotelierUrl({
                  checkIn: new Date().toISOString().split('T')[0],
                  checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                })
                openBooking(url)
              }}
            >
              Rooms
            </button>
            <NavLink to="/about" className={navClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
            <NavLink to="/enquiry" className={navClass}>
              Enquiry
            </NavLink>
            <button
              type="button"
              className="quote-btn mobile-quote-btn"
              onClick={() => {
                const url = getLittleHotelierUrl({
                  checkIn: new Date().toISOString().split('T')[0],
                  checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                })
                openBooking(url)
              }}
            >
              Book Now
            </button>
          </nav>

          <button
            type="button"
            className="quote-btn desktop-quote-btn"
            onClick={() => {
              const url = getLittleHotelierUrl({
                checkIn: new Date().toISOString().split('T')[0],
                checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
              })
              openBooking(url)
            }}
          >
            Book Now
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
      <ContactFab />
    </div>
  )
}

