import {
  Baby,
  Banknote,
  Bath,
  Bed,
  Car,
  Dumbbell,
  Headphones,
  MapPin,
  Maximize2,
  Refrigerator,
  Share2,
  Star,
  Tv,
  Users,
  Wifi,
} from 'lucide-react'
import { useMemo, useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import type { AmenityKey } from '../data/roomTemplates'
import {
  ALL_ROOM_DETAILS,
  DEFAULT_BOOKING_SLUG,
  HOTEL_CONTACT,
  getRoomBySlug,
} from '../data/roomTemplates'
import './booking-page.css'

const AMENITY_ICONS: Record<AmenityKey, typeof Wifi> = {
  wifi: Wifi,
  tv: Tv,
  map: MapPin,
  dumbbell: Dumbbell,
  bed: Bed,
  headphones: Headphones,
  bath: Bath,
  fridge: Refrigerator,
  car: Car,
}

function formatDateInput(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function parseDateInput(s: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null
  const [y, m, d] = s.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  return Number.isNaN(dt.getTime()) ? null : dt
}

function addDays(iso: string, days: number): string {
  const d = parseDateInput(iso)
  if (!d) return iso
  d.setDate(d.getDate() + days)
  return formatDateInput(d)
}

const EXTRAS = [
  { id: 'clean', label: 'Room clean', price: 25 },
  { id: 'parking', label: 'Parking', price: 15 },
  { id: 'breakfast', label: 'Bed & breakfast', price: 18 },
  { id: 'dinner', label: 'Dinner', price: 35 },
] as const

export function BookingPage() {
  const { roomSlug } = useParams()
  const navigate = useNavigate()
  const room = useMemo(() => getRoomBySlug(roomSlug ?? ''), [roomSlug])

  const todayStr = useMemo(() => formatDateInput(new Date()), [])
  const [checkIn, setCheckIn] = useState(() => formatDateInput(new Date()))
  const [checkOut, setCheckOut] = useState(() => {
    const t = new Date()
    t.setDate(t.getDate() + 1)
    return formatDateInput(t)
  })
  const [rooms, setRooms] = useState('1')
  const [adults, setAdults] = useState('2')
  const [children, setChildren] = useState('0')
  const [extras, setExtras] = useState<Record<string, boolean>>({})

  const checkInChange = (value: string) => {
    setCheckIn(value)
    const inDt = parseDateInput(value)
    const outDt = parseDateInput(checkOut)
    if (inDt && outDt && outDt <= inDt) {
      const next = new Date(inDt)
      next.setDate(next.getDate() + 1)
      setCheckOut(formatDateInput(next))
    }
  }

  const checkOutChange = (value: string) => {
    const inDt = parseDateInput(checkIn)
    const outDt = parseDateInput(value)
    if (inDt && outDt && outDt <= inDt) {
      const next = new Date(inDt)
      next.setDate(next.getDate() + 1)
      setCheckOut(formatDateInput(next))
      return
    }
    setCheckOut(value)
  }

  const handleBook = (e: FormEvent) => {
    e.preventDefault()
    // Placeholder until payment engine is connected
  }

  const handleShare = async () => {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: room?.title, url })
      } else {
        await navigator.clipboard.writeText(url)
      }
    } catch {
      void navigator.clipboard.writeText(url).catch(() => {})
    }
  }

  if (!room) {
    return <Navigate to={`/booking/${DEFAULT_BOOKING_SLUG}`} replace />
  }

  const Icon = ({ k }: { k: AmenityKey }) => {
    const C = AMENITY_ICONS[k]
    return <C size={18} strokeWidth={2} aria-hidden />
  }

  return (
    <div className="booking-detail">
      <section className="booking-detail-hero" aria-labelledby="booking-hero-title">
        <div
          className="booking-detail-hero__bg"
          style={{ backgroundImage: `url(${room.heroImage})` }}
        />
        <div className="booking-detail-hero__overlay" />
        <div className="booking-detail-hero__inner">
          <h1 id="booking-hero-title" className="booking-detail-hero__title">
            {room.heroTitle}
          </h1>
          <p className="booking-detail-hero__tagline">{room.tagline}</p>
          <p className="booking-detail-hero__crumb">
            <Link to="/">Home</Link>
            <span className="booking-detail-hero__sep">/</span>
            Room details
          </p>
        </div>
      </section>

      <div className="booking-detail-main">
        <div className="container booking-detail-layout">
          <div className="booking-detail-content" data-aos="fade-right">
            <div className="booking-detail-titlebar">
              <div>
                <h2 className="heading-with-symbol">{room.title}</h2>
                <div className="booking-detail-meta">
                  <span className="booking-detail-stars" aria-label="5 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                  <span className="booking-detail-location">
                    <MapPin size={16} strokeWidth={2} aria-hidden />
                    {room.locationLabel}
                  </span>
                </div>
              </div>
              <button type="button" className="booking-detail-share" onClick={handleShare}>
                <Share2 size={16} strokeWidth={2} aria-hidden />
                Share
              </button>
            </div>

            <div className="booking-detail-quick">
              <div className="booking-detail-quick__item">
                <Users size={22} strokeWidth={1.75} aria-hidden />
                <span className="booking-detail-quick__label">Guests</span>
                <span className="booking-detail-quick__value">{room.guests}</span>
              </div>
              <div className="booking-detail-quick__item">
                <Baby size={22} strokeWidth={1.75} aria-hidden />
                <span className="booking-detail-quick__label">Children</span>
                <span className="booking-detail-quick__value">{room.children}</span>
              </div>
              <div className="booking-detail-quick__item">
                <Maximize2 size={22} strokeWidth={1.75} aria-hidden />
                <span className="booking-detail-quick__label">Size</span>
                <span className="booking-detail-quick__value">{room.sqm}</span>
              </div>
              <div className="booking-detail-quick__item">
                <Bed size={22} strokeWidth={1.75} aria-hidden />
                <span className="booking-detail-quick__label">Beds</span>
                <span className="booking-detail-quick__value">{room.beds}</span>
              </div>
              <div className="booking-detail-quick__item">
                <Bath size={22} strokeWidth={1.75} aria-hidden />
                <span className="booking-detail-quick__label">Baths</span>
                <span className="booking-detail-quick__value">{room.baths}</span>
              </div>
              <div className="booking-detail-quick__item">
                <Banknote size={22} strokeWidth={1.75} aria-hidden />
                <span className="booking-detail-quick__label">From</span>
                <span className="booking-detail-quick__value">
                  CHF {room.pricePerNight} / night
                </span>
              </div>
            </div>

            <figure className="booking-detail-figure">
              <img src={room.mainImage} alt="" />
            </figure>

            <p className="booking-detail-prose">{room.description[0]}</p>
            <p className="booking-detail-prose">{room.description[1]}</p>

            <h3 className="booking-detail-subhead heading-with-symbol">Room rules</h3>
            <ul className="booking-detail-rules">
              {room.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>

            <h3 className="booking-detail-subhead heading-with-symbol">
              Services &amp; amenities
            </h3>
            <div className="booking-detail-amenities">
              {room.amenities.map((a) => (
                <div key={a.label} className="booking-detail-amenity">
                  <Icon k={a.key} />
                  {a.label}
                </div>
              ))}
            </div>

            <h3 className="booking-detail-subhead heading-with-symbol">Cancellation policy</h3>
            <p className="booking-detail-cancel">{room.cancellation}</p>

            <h3 className="booking-detail-subhead heading-with-symbol">Room features</h3>
            <div className="booking-detail-features">
              {room.features.map((col, i) => (
                <ul key={i}>
                  {col.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              ))}
            </div>

            <figure className="booking-detail-figure">
              <img src={room.secondaryImage} alt="" />
            </figure>

            <div className="booking-detail-gallery">
              <h3 className="heading-with-symbol">Room gallery</h3>
              <div className="booking-detail-gallery__grid">
                <img src={room.gallery[0]} alt="" />
                <img src={room.gallery[1]} alt="" />
              </div>
            </div>
          </div>

          <aside
            className="booking-detail-aside"
            aria-label="Book your room"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            <div className="booking-detail-widget">
              <div className="booking-detail-room-select">
                <label htmlFor="booking-room-type">Room type</label>
                <select
                  id="booking-room-type"
                  value={room.slug}
                  onChange={(e) => navigate(`/booking/${e.target.value}`)}
                >
                  {ALL_ROOM_DETAILS.map((r) => (
                    <option key={r.slug} value={r.slug}>
                      {r.title}
                    </option>
                  ))}
                </select>
              </div>

              <h3 className="heading-with-symbol">Book your room</h3>
              <form onSubmit={handleBook}>
                <label htmlFor="bd-check-in">Check in</label>
                <input
                  id="bd-check-in"
                  type="date"
                  value={checkIn}
                  min={todayStr}
                  onChange={(e) => checkInChange(e.target.value)}
                  required
                />
                <label htmlFor="bd-check-out">Check out</label>
                <input
                  id="bd-check-out"
                  type="date"
                  value={checkOut}
                  min={addDays(checkIn, 1)}
                  onChange={(e) => checkOutChange(e.target.value)}
                  required
                />
                <div className="booking-detail-widget__row">
                  <div>
                    <label htmlFor="bd-rooms">Rooms</label>
                    <select
                      id="bd-rooms"
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bd-adults">Adults</label>
                    <select
                      id="bd-adults"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={String(n)}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <label htmlFor="bd-children">Children</label>
                <select
                  id="bd-children"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={String(n)}>
                      {n}
                    </option>
                  ))}
                </select>

                <div className="booking-detail-extras">
                  {EXTRAS.map((ex) => (
                    <label key={ex.id} className="booking-detail-extra">
                      <span>
                        <input
                          type="checkbox"
                          checked={extras[ex.id] ?? false}
                          onChange={(e) =>
                            setExtras((prev) => ({ ...prev, [ex.id]: e.target.checked }))
                          }
                        />{' '}
                        {ex.label}{' '}
                        <span style={{ color: 'var(--mtg-muted)', fontWeight: 500 }}>
                          (+CHF {ex.price})
                        </span>
                      </span>
                    </label>
                  ))}
                </div>

                <button type="submit" className="booking-detail-book">
                  Book now
                </button>
              </form>
            </div>

            <div className="booking-detail-support">
              <strong>Reservation support</strong>
              Phone: {HOTEL_CONTACT.phone}
              <br />
              <a href={`mailto:${HOTEL_CONTACT.email}`}>{HOTEL_CONTACT.email}</a>
            </div>

            <div className="booking-detail-address-box">
              <strong>Address</strong>
              {HOTEL_CONTACT.address}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
