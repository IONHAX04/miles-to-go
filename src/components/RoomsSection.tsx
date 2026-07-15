import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useCallback, useState } from 'react'
import home1 from '../assets/properties/Home1.jpg'
import home2 from '../assets/properties/Home2.jpg'
import home3 from '../assets/properties/Home3.jpg'
import { getHomeRoomCards } from '../data/roomTemplates'
import { getLittleHotelierUrl } from '../services/littleHotelierService'
import { useBooking } from '../context/BookingContext'

/** Header carousel: newest / wide shots (order 7 → 6 → 5 → …). */
const CAROUSEL_IMAGES = [home1, home2, home3] as const

const ROOMS = getHomeRoomCards()

export function RoomsSection() {
  const { openBooking } = useBooking()
  const [carouselIndex, setCarouselIndex] = useState(0)

  const stepCarousel = useCallback((delta: number) => {
    const n = CAROUSEL_IMAGES.length
    setCarouselIndex((i) => (i + delta + n) % n)
  }, [])

  return (
    <section id="rooms" className="section rooms-section">
      <div className="container rooms-header-wrap">
        <div className="rooms-header-split">
          <div className="rooms-header-copy" data-aos="fade-right">
            <p className="rooms-eyebrow">Rooms &amp; Suites</p>
            <h2 className="rooms-title heading-with-symbol">
              Rest in Comfort — Select From Our Suites &amp; Rooms
            </h2>
          </div>
          <div className="rooms-header-visual" data-aos="zoom-in" data-aos-delay="100">
            <img
              src={CAROUSEL_IMAGES[carouselIndex]}
              alt=""
              className="rooms-header-carousel-img"
            />
            <div className="rooms-carousel-controls">
              <button
                type="button"
                className="rooms-carousel-btn"
                aria-label="Previous image"
                onClick={() => stepCarousel(-1)}
              >
                <ChevronLeft size={22} strokeWidth={2.5} aria-hidden />
              </button>
              <button
                type="button"
                className="rooms-carousel-btn"
                aria-label="Next image"
                onClick={() => stepCarousel(1)}
              >
                <ChevronRight size={22} strokeWidth={2.5} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rooms-card-grid">
          {ROOMS.map((room) => (
            <article key={room.slug} className="room-card" data-aos="fade-up">
              <div className="room-card__media">
                <img src={room.image} alt="" className="room-card__img" />
              </div>
              <div className="room-card__body">
                <h3 className="room-card__name">{room.title}</h3>
                <div className="room-card__footer">
                  <button
                    type="button"
                    className="room-card__details"
                    onClick={() => {
                      const url = getLittleHotelierUrl({
                        checkIn: new Date().toISOString().split('T')[0],
                        checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                        rateId: room.rateId,
                      })
                      openBooking(url)
                    }}
                  >
                    Book Now
                    <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="stats-grid rooms-stats" data-aos="fade-up">
          <div className="stat-card">
            <span>Total Rooms</span>
            <strong>18</strong>
          </div>
          <div className="stat-card">
            <span>Starting Price</span>
            <strong>120</strong>
          </div>
          <div className="stat-card">
            <span>Included</span>
            <strong>Free WiFi</strong>
          </div>
        </div>
        <p className="note-text">
          Room sizes and layouts may vary; exact specifications will be confirmed at booking.
        </p>
      </div>
    </section>
  )
}
