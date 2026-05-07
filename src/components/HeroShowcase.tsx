import { ArrowRight } from 'lucide-react'
import heroPool from '../assets/images/hero-pool.jpg'
import { getLittleHotelierUrl } from '../services/littleHotelierService'
import { useBooking } from '../context/BookingContext'

/** Split hero: copy left, single feature image right. */
export function HeroShowcase() {
  const { openBooking } = useBooking()
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg hero-bg--subtle" aria-hidden="true" />

      <div className="container hero-split-grid">
        <div className="hero-split-copy" data-aos="fade-right">
          <p className="eyebrow">Airport hotel · Zurich</p>
          <h1 className="hero-title-serif">Rest easy. Stay connected. Pay less.</h1>
          <ul className="hero-split-list">
            <li>Quick reach to Zurich Airport &amp; key road links</li>
            <li>City center &amp; main station within easy reach</li>
            <li>18 rooms—solo travellers, couples, and small groups</li>
          </ul>
          <div className="hero-actions">
            <button
              type="button"
              className="primary-btn hero-cta"
              onClick={() => {
                const url = getLittleHotelierUrl({
                  checkIn: new Date().toISOString().split('T')[0],
                  checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                })
                openBooking(url)
              }}
            >
              Book Now
              <ArrowRight className="btn-arrow" size={18} strokeWidth={2.25} aria-hidden />
            </button>
            <button
              type="button"
              className="secondary-btn hero-cta-secondary"
              onClick={() => {
                const url = getLittleHotelierUrl({
                  checkIn: new Date().toISOString().split('T')[0],
                  checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                })
                openBooking(url)
              }}
            >
              Explore Rooms
              <ArrowRight className="btn-arrow" size={18} strokeWidth={2.25} aria-hidden />
            </button>
          </div>
        </div>
        <div className="hero-photo hero-photo--split" data-aos="fade-left" data-aos-delay="120">
          <img src={heroPool} alt="hero-pool.jpg" />
        </div>
      </div>
    </section>
  )
}
