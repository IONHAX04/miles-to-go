import {
  Building2,
  Check,
  Coffee,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutHero from '../assets/images/hero-pool.jpg'
import aboutStory from '../assets/images/ABOUT-US.jpg'
import blog1 from '../assets/images/BLOG1.jpg'
import blog2 from '../assets/images/BLOG2.jpg'
import blog3 from '../assets/images/BLOG3.jpg'
import { ALL_ROOM_DETAILS } from '../data/roomTemplates'
import homeContact from '../assets/images/HOME_CONTACT.jpg'
import rooms1 from '../assets/images/ROOMS1.jpg'
import rooms2 from '../assets/images/ROOMS2.jpg'
import rooms3 from '../assets/images/ROOMS3.jpg'
import './about-page.css'

const GALLERY_TRIPLE = [
  ALL_ROOM_DETAILS[0].image,
  ALL_ROOM_DETAILS[1].image,
  ALL_ROOM_DETAILS[2].image,
] as const

const FEATURED_ROOMS = ALL_ROOM_DETAILS.slice(0, 4).map((r) => ({
  slug: r.slug,
  image: r.image,
  title: r.title,
}))

const INSTAGRAM_GRID = [blog1, blog2, blog3, rooms1, rooms2, rooms3] as const

const STATS = [
  { value: '18+', label: 'Comfortable Rooms' },
  { value: '4.9', label: 'Guest satisfaction' },
  { value: 'Zürich', label: 'Prime location' },
  { value: 'WiFi', label: 'Complimentary for all' },
] as const

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div
          className="about-hero__bg"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="about-hero__overlay" />
        <div className="about-hero__inner">
          <h1 id="about-hero-title" className="about-hero__title">
            About Us
          </h1>
          <p className="about-hero__crumb">
            <Link to="/">Home</Link>
            <span className="about-hero__sep">/</span>
            About Us
          </p>
        </div>
      </section>

      <section className="about-intro" aria-labelledby="about-intro-heading">
        <div className="container about-intro__inner" data-aos="fade-up">
          <h2 id="about-intro-heading" className="about-intro__title heading-with-symbol">
            We always care about your experience
          </h2>
          <div className="about-intro__body">
            <p className="about-intro__copy">
              Miles to Go welcomes you to Overglatt, Zurich—a comfortable, budget-friendly base
              for business and leisure. We focus on clean rooms, honest hospitality, and the
              little details that make travel easier after a long flight or a full day in the
              city.
            </p>
            <p className="about-intro__copy">
              Our team is committed to clear communication, flexible arrangements where possible,
              and a calm atmosphere so you can rest, recharge, and move on to your next mile
              feeling looked after.
            </p>
          </div>
          <p className="about-intro__signature">Miles to Go</p>
        </div>
      </section>

      <section className="about-triple" aria-label="Hotel gallery" data-aos="fade-up">
        <div className="container">
          <div className="about-triple__grid">
            {GALLERY_TRIPLE.map((src, i) => (
              <div key={i} className="about-triple__cell">
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-services" data-aos="fade-up">
        <div className="container">
          <div className="about-services__grid">
            <article>
              <div className="about-services__icon">
                <Coffee size={28} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="about-services__name">Best Breakfast</h3>
              <p className="about-services__text">
                Start the day with simple, satisfying options nearby and recommendations from
                our front desk—fuel for meetings, sightseeing, or your onward journey.
              </p>
            </article>
            <article>
              <div className="about-services__icon">
                <ShieldCheck size={28} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="about-services__name">Guaranteed Safety</h3>
              <p className="about-services__text">
                Well-lit common areas, secure access, and housekeeping standards you can trust.
                Your peace of mind matters as much as your comfort.
              </p>
            </article>
            <article>
              <div className="about-services__icon">
                <Building2 size={28} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="about-services__name">Perfect Venue</h3>
              <p className="about-services__text">
                A practical Zurich location with strong transport links—ideal for short stays,
                airport hops, and small groups who value reliability over flash.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-comfort">
        <div className="container">
          <div className="about-comfort__grid">
            <div data-aos="fade-right">
              <p className="about-comfort__eyebrow">Discover</p>
              <h2 className="about-comfort__title heading-with-symbol">
                Luxury &amp; comfort—thoughtful, affordable Zurich hospitality
              </h2>
              <p className="about-comfort__lead">
                We blend warm interiors with efficient service: easy check-in, clear policies,
                and rooms designed for real rest. Whether you are here for one night or a week,
                you will find a consistent standard and a team that listens.
              </p>
              <ul className="about-comfort__list">
                {[
                  'Close to Zurich Airport and major road links',
                  'City center and main station within comfortable reach',
                  'Free high-speed Wi‑Fi throughout the property',
                  '18 rooms for solo travellers, couples, and small groups',
                ].map((line) => (
                  <li key={line}>
                    <span className="about-comfort__check" aria-hidden>
                      <Check size={18} strokeWidth={2.5} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <Link to="/rooms" className="primary-btn">
                Learn more
              </Link>
            </div>
            <div className="about-comfort__media" data-aos="fade-left" data-aos-delay="120">
              <img src={aboutStory} alt="Miles to Go hotel interior" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-featured" aria-labelledby="about-featured-title" data-aos="fade-up">
        <div className="container">
          <div className="about-featured__head">
            <h2
              id="about-featured-title"
              className="about-featured__title heading-with-symbol"
            >
              Featured Rooms &amp; Suites
            </h2>
          </div>
          <div className="about-featured__grid">
            {FEATURED_ROOMS.map((room) => (
              <article key={room.title} className="about-featured__card">
                <img src={room.image} alt="" />
                <div className="about-featured__overlay">
                  <h3 className="about-featured__name">{room.title}</h3>
                  <Link to={`/booking/${room.slug}`} className="about-featured__btn">
                    More details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats" aria-label="Hotel highlights" data-aos="fade-up">
        <div className="container">
          <div className="about-stats__grid">
            {STATS.map((s) => (
              <div key={s.label}>
                <span className="about-stats__value">{s.value}</span>
                <span className="about-stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-contact-split" aria-labelledby="about-contact-heading" data-aos="fade-up">
        <div className="container">
          <div className="about-contact-split__wrap">
            <div className="about-contact-split__photo" aria-hidden="true">
              <img src={homeContact} alt="" />
            </div>
            <div className="about-contact-split__panel">
              <h2 id="about-contact-heading" className="heading-with-symbol">
                We&apos;re here to make your stay unforgettable
              </h2>
              <p>
                Share your dates and questions—we will respond with availability and practical
                tips for getting around Zurich.
              </p>
              <form className="about-contact-form" aria-label="Enquiry form">
                <input type="text" name="name" placeholder="Name" autoComplete="name" />
                <input type="email" name="email" placeholder="Email" autoComplete="email" />
                <input type="date" name="checkin" aria-label="Check-in" />
                <input type="date" name="checkout" aria-label="Check-out" />
                <textarea name="message" placeholder="Message" rows={4} />
                <button type="button" className="primary-btn">
                  Send your message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="about-blog" aria-labelledby="about-blog-title" data-aos="fade-up">
        <div className="container">
          <div className="about-blog__head">
            <h2 id="about-blog-title" className="heading-with-symbol">
              Check our latest guest stories
            </h2>
          </div>
          <div className="about-blog__grid">
            <article className="about-blog__card">
              <Quote className="about-blog__quote" size={28} strokeWidth={1.5} aria-hidden />
              <div className="about-blog__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden />
                ))}
              </div>
              <p className="about-blog__text">
                &ldquo;Quiet rooms, friendly staff, and an easy run to the airport early
                morning. Exactly what we needed before a long-haul flight.&rdquo;
              </p>
              <div className="about-blog__author">
                <div className="about-blog__avatar" aria-hidden />
                <div>
                  <strong>Sarah M.</strong>
                  <span>Business traveller · UK</span>
                </div>
              </div>
            </article>
            <article className="about-blog__card">
              <Quote className="about-blog__quote" size={28} strokeWidth={1.5} aria-hidden />
              <div className="about-blog__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden />
                ))}
              </div>
              <p className="about-blog__text">
                &ldquo;Great value in Zurich. Clean, simple, and the team helped us with
                directions and tram tickets. We would stay again.&rdquo;
              </p>
              <div className="about-blog__author">
                <div className="about-blog__avatar" aria-hidden />
                <div>
                  <strong>Jonas K.</strong>
                  <span>Leisure guest · Germany</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-instagram" aria-label="Photo gallery" data-aos="fade-up">
        <p className="about-instagram__head">Follow the journey @milestogo</p>
        <div className="about-instagram__grid">
          {INSTAGRAM_GRID.map((src, i) => (
            <Link key={i} to="/rooms" aria-label={`View rooms — gallery image ${i + 1}`}>
              <img src={src} alt="" />
            </Link>
          ))}
        </div>
      </section>

      <section className="about-prefooter" data-aos="fade-up">
        <div className="container">
          <div className="about-prefooter__grid">
            <div className="about-prefooter__item">
              <div className="about-prefooter__icon">
                <Phone size={20} aria-hidden />
              </div>
              <div>
                <strong>Phone</strong>
                <span>+41 76 223 45 67</span>
              </div>
            </div>
            <div className="about-prefooter__item">
              <div className="about-prefooter__icon">
                <Mail size={20} aria-hidden />
              </div>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@milestogo.ch">info@milestogo.ch</a>
              </div>
            </div>
            <div className="about-prefooter__item">
              <div className="about-prefooter__icon">
                <MapPin size={20} aria-hidden />
              </div>
              <div>
                <strong>Location</strong>
                <span>Kaiserstuhlstrasse 79, 8154 Overglatt, Zürich</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

