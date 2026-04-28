import {
  ArrowRight,
  Bath,
  Bed,
  ChevronLeft,
  ChevronRight,
  Ruler,
  Star,
} from 'lucide-react'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import home3 from '../assets/images/HOME_3.jpg'
import home5 from '../assets/images/HOME_5.jpg'
import home6 from '../assets/images/HOME_6.jpg'
import home7 from '../assets/images/HOME_7.jpg'
import { getHomeRoomCards } from '../data/roomTemplates'

/** Header carousel: newest / wide shots (order 7 → 6 → 5 → …). */
const CAROUSEL_IMAGES = [home7, home6, home5, home3] as const

const ROOMS = getHomeRoomCards()

export function RoomsSection() {
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
                <div className="room-card__rating">
                  <Star size={13} strokeWidth={0} fill="currentColor" aria-hidden />
                  4.9
                </div>
              </div>
              <div className="room-card__body">
                <h3 className="room-card__name">{room.title}</h3>
                <p className="room-card__desc">{room.description}</p>
                <ul className="room-card__specs">
                  <li>
                    <span className="room-card__spec-icon" aria-hidden="true">
                      <Ruler size={14} strokeWidth={2} />
                    </span>
                    {room.sqm}
                  </li>
                  <li>
                    <span className="room-card__spec-icon" aria-hidden="true">
                      <Bed size={14} strokeWidth={2} />
                    </span>
                    {room.beds}
                  </li>
                  <li>
                    <span className="room-card__spec-icon" aria-hidden="true">
                      <Bath size={14} strokeWidth={2} />
                    </span>
                    {room.baths}
                  </li>
                </ul>
                <div className="room-card__footer">
                  <span className="room-card__price">CHF {room.price}/Per Night</span>
                  <Link to={`/booking/${room.slug}`} className="room-card__details">
                    View Details
                    <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
                  </Link>
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
