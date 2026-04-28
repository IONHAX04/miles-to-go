import { CheckCircle2, X } from 'lucide-react'
import logoVertic from '../assets/logo/logo_vertic.png'
import { useMemo, useState, type FormEvent } from 'react'

import { ALL_ROOM_DETAILS } from '../data/roomTemplates'
import './booking-request-page.css'

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

export function BookingRequestPage() {
  const todayStr = useMemo(() => formatDateInput(new Date()), [])
  const [selectedRoom, setSelectedRoom] = useState(ALL_ROOM_DETAILS[0].slug)
  const [checkIn, setCheckIn] = useState(todayStr)
  const [checkOut, setCheckOut] = useState(() => {
    const t = new Date()
    t.setDate(t.getDate() + 1)
    return formatDateInput(t)
  })
  const [rooms, setRooms] = useState('1')
  const [adults, setAdults] = useState('2')
  const [children, setChildren] = useState('0')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!acceptTerms) return
    // Placeholder until booking engine / API is connected.
    window.scrollTo(0, 0)
    setSubmitted(true)
  }

  return (
    <section className="section booking-request-page">
      <div className="container booking-request-wrap">
        <div className="booking-request-head" data-aos="fade-up">
          <p className="eyebrow">Booking</p>
          <h1 className="heading-with-symbol">Book your stay</h1>
          <p>
            Fill in your booking details below. Please review and accept the Terms &amp;
            Conditions before confirming.
          </p>
        </div>

        {submitted ? (
          <div className="booking-request-success" role="status" data-aos="zoom-in">
            <div className="booking-request-success__badge" aria-hidden>
              <img src={logoVertic} alt="" />
              <CheckCircle2 size={28} />
            </div>
            <h2>Booked successfully</h2>
            <p>
              Thank you. Your booking request has been received. Our team will contact you shortly
              with the confirmation details.
            </p>
          </div>
        ) : (
          <form className="booking-request-form" onSubmit={handleSubmit} data-aos="fade-up">
            <label htmlFor="br-name">Full name</label>
            <input id="br-name" name="name" type="text" placeholder="Your name" required />

            <div className="booking-request-grid">
              <div>
                <label htmlFor="br-email">Email</label>
                <input
                  id="br-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="br-phone">Phone</label>
                <input id="br-phone" name="phone" type="tel" placeholder="+41 ..." required />
              </div>
            </div>

            <label htmlFor="br-room-type">Room type</label>
            <select
              id="br-room-type"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              required
            >
              {ALL_ROOM_DETAILS.map((room) => (
                <option key={room.id} value={room.slug}>
                  {room.title} ({room.category.charAt(0).toUpperCase() + room.category.slice(1)} Room)
                </option>
              ))}
            </select>


            <div className="booking-request-grid">
              <div>
                <label htmlFor="br-checkin">Check in</label>
                <input
                  id="br-checkin"
                  type="date"
                  value={checkIn}
                  min={todayStr}
                  onChange={(e) => checkInChange(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="br-checkout">Check out</label>
                <input
                  id="br-checkout"
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="booking-request-grid booking-request-grid--triple">
              <div>
                <label htmlFor="br-rooms">Rooms</label>
                <select id="br-rooms" value={rooms} onChange={(e) => setRooms(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div>
                <label htmlFor="br-adults">Adults</label>
                <select id="br-adults" value={adults} onChange={(e) => setAdults(e.target.value)}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={String(n)}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="br-children">Children</label>
                <select id="br-children" value={children} onChange={(e) => setChildren(e.target.value)}>
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={String(n)}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label htmlFor="br-notes">Special request</label>
            <textarea
              id="br-notes"
              name="notes"
              rows={4}
              placeholder="Airport transfer, late check-in, bed preference, etc."
            />

            <div className="booking-request-terms">
              <label className="booking-request-terms__check" htmlFor="br-accept-terms">
                <input
                  id="br-accept-terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  required
                />
                <span>
                  I accept the <button type="button" onClick={() => setIsTermsOpen(true)}>Terms &amp; Conditions</button>
                </span>
              </label>
            </div>

            <button type="submit" className="primary-btn">
              Confirm booking
            </button>
          </form>
        )}
      </div>

      {isTermsOpen ? (
        <div
          className="booking-terms-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-terms-title"
        >
          <div className="booking-terms-modal__card">
            <button
              type="button"
              className="booking-terms-modal__close"
              aria-label="Close terms dialog"
              onClick={() => setIsTermsOpen(false)}
            >
              <X size={18} aria-hidden />
            </button>
            <h2 id="booking-terms-title">Terms &amp; Conditions acknowledgement</h2>
            <ul>
              <li>Check-in starts at 15:00 and check-out is by 10:00.</li>
              <li>Reservations made on the homepage are 100% chargeable and non-refundable.</li>
              <li>Smoking is strictly prohibited in all areas.</li>
              <li>Guests must provide a valid ID for direct bookings.</li>
            </ul>
            <p>
              By continuing with booking, you agree to these terms. You can review the full policy
              on our Terms &amp; Conditions page.
            </p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                setAcceptTerms(true)
                setIsTermsOpen(false)
              }}
            >
              I acknowledge and accept
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
