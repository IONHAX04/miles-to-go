import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <h3>Miles to Go - Comfortable & Affordable Stay in Zurich</h3>
          <p>Kaiserstuhlstrasse 79, 8154 Oberglatt, Zurich, Switzerland</p>
          <p>info@milestogo.ch</p>
          <p>Phone: +41 76 223 45 67</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <nav className="footer-links" aria-label="Footer quick links">
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/about">About Us</Link>
            <Link to="/location">Location</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/enquiry">Enquiry</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/imprint">Imprint</Link>
          </nav>
        </div>
        <div>
          <h3>Hotel Policies</h3>
          <p>Check-in: 15:00</p>
          <p>Check-out: 10:00</p>
          <p>Non-refundable for homepage bookings</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Miles to Go. All Rights Reserved.</p>
        <p className="footer-legal-links">
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <span className="separator">|</span>
          <Link to="/imprint">Imprint</Link>
        </p>
      </div>
    </footer>
  )
}

