import { ChevronDown } from 'lucide-react'
import { useMemo, useState, type FormEvent } from 'react'
import symbols02 from '../assets/images/SYMBOLS-02.svg'
import symbols04 from '../assets/images/SYMBOLS-04.svg'
import symbols05 from '../assets/images/SYMBOLS-05.svg'
import { getLittleHotelierUrl } from '../services/littleHotelierService'
import { useBooking } from '../context/BookingContext'

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

const GUEST_OPTIONS = [
  { value: '2-0', label: '02 Adults, 0 Child' },
  { value: '2-1', label: '02 Adults, 1 Child' },
  { value: '4-2', label: '04 Adults, 2 Child' },
  { value: '6-0', label: '06 Adults, 0 Child' },
] as const

/**
 * Booking strip after the hero: date pickers, room/guest selects, Check Now goes to /booking.
 */
export function BookingBar() {
  const todayStr = useMemo(() => formatDateInput(new Date()), [])

  const [checkIn, setCheckIn] = useState(() => formatDateInput(new Date()))
  const [checkOut, setCheckOut] = useState(() => {
    const t = new Date()
    t.setDate(t.getDate() + 1)
    return formatDateInput(t)
  })
  const [rooms, setRooms] = useState('1')
  const [guests, setGuests] = useState<string>(GUEST_OPTIONS[0].value)

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

  const { openBooking } = useBooking()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Construct Little Hotelier URL
    const [adults, children] = guests.split('-').map(Number)
    const url = getLittleHotelierUrl({
      checkIn,
      checkOut,
      adults,
      children,
    })
    
    // Open consent modal instead of direct redirect
    openBooking(url)
  }

  return (
    <div className="booking-bar-shell">
      <div className="booking-bar__ornament booking-bar__ornament--tl" aria-hidden="true">
        <img src={symbols02} alt="" className="booking-bar__symbol booking-bar__symbol--corner" />
      </div>
      <div className="booking-bar__ornament booking-bar__ornament--br" aria-hidden="true">
        <img
          src={symbols02}
          alt=""
          className="booking-bar__symbol booking-bar__symbol--corner booking-bar__symbol--rotate180"
        />
      </div>

      <section className="booking-bar" aria-label="Find the best place">
        <div className="container booking-bar__inner">
          <h2 className="booking-bar__title">Find The Best Place</h2>

          <form className="booking-bar__fields" onSubmit={handleSubmit} noValidate>
            <div className="booking-field">
              <label className="booking-field__label" htmlFor="booking-check-in">
                Check In
              </label>
              <div className="booking-field__control booking-field__control--date">
                <input
                  id="booking-check-in"
                  type="date"
                  className="booking-field__input-date"
                  value={checkIn}
                  min={todayStr}
                  onChange={(e) => checkInChange(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="booking-field">
              <label className="booking-field__label" htmlFor="booking-check-out">
                Check Out
              </label>
              <div className="booking-field__control booking-field__control--date">
                <input
                  id="booking-check-out"
                  type="date"
                  className="booking-field__input-date"
                  value={checkOut}
                  min={addDays(checkIn, 1)}
                  onChange={(e) => checkOutChange(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="booking-field">
              <label className="booking-field__label" htmlFor="booking-rooms">
                Rooms
              </label>
              <div className="booking-field__control booking-field__control--select">
                <select
                  id="booking-rooms"
                  className="booking-field__select"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                >
                  <option value="1">01 Rooms</option>
                  <option value="2">02 Rooms</option>
                  <option value="3">03 Rooms</option>
                  <option value="4">04 Rooms</option>
                </select>
                <ChevronDown className="booking-field__chevron" size={14} strokeWidth={2.5} aria-hidden />
              </div>
            </div>

            <div className="booking-field">
              <label className="booking-field__label" htmlFor="booking-guests">
                Guests
              </label>
              <div className="booking-field__control booking-field__control--select">
                <select
                  id="booking-guests"
                  className="booking-field__select"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  {GUEST_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="booking-field__chevron" size={14} strokeWidth={2.5} aria-hidden />
              </div>
            </div>

            <div className="booking-bar__cta-wrap">
              <button type="submit" className="booking-bar__cta">
                Check Now
              </button>
            </div>
          </form>

          <div className="booking-bar__divider" aria-hidden="true">
            <img src={symbols05} alt="" className="booking-bar__divider-cap" />
            <img src={symbols04} alt="" className="booking-bar__divider-main" />
            <img
              src={symbols05}
              alt=""
              className="booking-bar__divider-cap booking-bar__divider-cap--flip"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
