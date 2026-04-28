import { ArrowRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import heroPool from '../assets/images/hero-pool.jpg'
import type { RoomsPageCategory } from '../data/roomTemplates'
import { getGridRoomItems } from '../data/roomTemplates'
import './rooms-page-template.css'

type FilterId = 'all' | RoomsPageCategory

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'Show All' },
  { id: 'standard', label: 'Standard Room' },
  { id: 'single', label: 'Single Room' },
  { id: 'double', label: 'Double Room' },
  { id: 'quadruple', label: 'Quadruple Room' },
]

const GRID = getGridRoomItems()

/** 8-room grid + filters — Rooms route only; home uses {@link RoomsSection}. */
export function RoomsPageTemplate() {
  const [filter, setFilter] = useState<FilterId>('all')

  const visible = useMemo(() => {
    if (filter === 'all') return GRID
    return GRID.filter((r) => r.category === filter)
  }, [filter])

  return (
    <div id="rooms" className="rooms-page">
      <section className="rooms-page-hero" aria-labelledby="rooms-page-hero-title">
        <div
          className="rooms-page-hero__bg"
          style={{ backgroundImage: `url(${heroPool})` }}
        />
        <div className="rooms-page-hero__overlay" />
        <div className="rooms-page-hero__inner">
          <h1 id="rooms-page-hero-title" className="rooms-page-hero__title">
            Our Rooms &amp; Suites
          </h1>
          <p className="rooms-page-hero__crumb">
            <Link to="/">Home</Link>
            <span className="rooms-page-hero__sep">/</span>
            Rooms
          </p>
        </div>
      </section>

      <section className="rooms-page-grid-section" aria-labelledby="rooms-grid-heading">
        <div className="container">
          <header className="rooms-page-grid-head">
            <p className="rooms-page-grid-eyebrow">Comfort &amp; value</p>
            <h2 id="rooms-grid-heading" className="rooms-page-grid-title heading-with-symbol">
              Featured Rooms &amp; Suites
            </h2>
          </header>

          <div className="rooms-page-filters" role="group" aria-label="Filter rooms by type">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`rooms-page-filter${filter === f.id ? ' is-active' : ''}`}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="rooms-page-grid">
            {visible.length === 0 ? (
              <p className="rooms-page-empty">No rooms in this category yet.</p>
            ) : (
              visible.map((room) => (
                <article key={room.id} className="rooms-page-card">
                  <img src={room.image} alt="" className="rooms-page-card__img" />
                  <div className="rooms-page-card__overlay">
                    <h3 className="rooms-page-card__name">{room.title}</h3>
                    <Link to={`/booking/${room.slug}`} className="rooms-page-card__cta">
                      View details
                      <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
