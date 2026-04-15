import { Link } from 'react-router-dom'
import { BookingBar } from '../components/BookingBar'
import { HeroShowcase } from '../components/HeroShowcase'
import { RoomsSection } from '../components/RoomsSection'

export function HomePage() {
  return (
    <>
      <HeroShowcase />
      <BookingBar />

      <section className="section">
        <div className="container" data-aos="fade-up">
          <h2 className="heading-with-symbol">Welcome to Miles to Go</h2>
          <p>
            Welcome to Miles to Go, a comfortable and budget-friendly hotel in Overglatt,
            Zurich. Ideal for both business and leisure travelers, we provide well-maintained
            rooms, essential amenities, and a convenient location for a hassle-free stay.
            Experience peace, comfort, and easy access to Zurich&apos;s attractions during your stay
            with us.
          </p>
          <p className="home-welcome-cta">
            <Link to="/rooms" className="secondary-btn">
              Explore Rooms
            </Link>
          </p>
        </div>
      </section>

      <RoomsSection />

      <section className="section alt">
        <div className="container" data-aos="fade-up">
          <div className="section-head">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="heading-with-symbol">Trusted Stay in Zurich</h2>
          </div>
          <ul className="detail-list" data-aos="fade-up" data-aos-delay="100">
            <li>Affordable and budget-friendly hotel in Zurich</li>
            <li>Clean, comfortable, and well-maintained rooms</li>
            <li>Prime location near airport and transport hubs</li>
            <li>Ideal for business, leisure, solo travelers, and families</li>
          </ul>
        </div>
      </section>
    </>
  )
}
