import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import contactHero from '../assets/images/CONTACT.jpg'
import './contact-page.css'

export function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <div
          className="contact-hero__bg"
          style={{ backgroundImage: `url(${contactHero})` }}
        />
        <div className="contact-hero__overlay" />
        <div className="contact-hero__inner">
          <h1 id="contact-hero-title" className="contact-hero__title">
            Contact Us
          </h1>
          <p className="contact-hero__subtitle">We will help you to solve any problem</p>
          <p className="contact-hero__crumb">
            <Link to="/">Home</Link>
            <span className="contact-hero__sep">/</span>
            Contact Us
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-intro" data-aos="fade-up">
            <h2 className="heading-with-symbol">
              Need help with your online booking, have a question or need more information? Just
              drop us a line!
            </h2>
            <p>
              Whether you are planning a short stay near Zurich Airport or a longer visit to the
              city, our team is happy to answer questions about rooms, rates, and directions. Send
              us a message and we will get back to you as soon as we can.
            </p>
          </div>

          <div className="contact-cards">
            <article className="contact-card" data-aos="fade-up">
              <div className="contact-card__icon">
                <Phone size={24} strokeWidth={1.75} aria-hidden />
              </div>
              <h3>Call us anytime</h3>
              <p>+41 76 223 45 67</p>
            </article>
            <article className="contact-card" data-aos="fade-up" data-aos-delay="80">
              <div className="contact-card__icon">
                <Mail size={24} strokeWidth={1.75} aria-hidden />
              </div>
              <h3>Send us e-mail</h3>
              <p>
                <a href="mailto:info@milestogo.ch">info@milestogo.ch</a>
              </p>
            </article>
            <article className="contact-card" data-aos="fade-up" data-aos-delay="160">
              <div className="contact-card__icon">
                <MapPin size={24} strokeWidth={1.75} aria-hidden />
              </div>
              <h3>Address</h3>
              <p>
                Kaiserstuhlstrasse 79
                <br />
                8154 Overglatt, Zurich
              </p>
            </article>
          </div>

          <div className="contact-split">
            <div className="contact-details" data-aos="fade-right">
              <div className="contact-detail-block">
                <h4>Location</h4>
                <p>
                  Kaiserstuhlstrasse 79
                  <br />
                  8154 Overglatt
                  <br />
                  Zurich, Switzerland
                </p>
              </div>
              <div className="contact-detail-block">
                <h4>Contact</h4>
                <p>
                  Phone: +41 76 223 45 67
                  <br />
                  <a href="mailto:info@milestogo.ch">info@milestogo.ch</a>
                </p>
              </div>
              <div className="contact-detail-block">
                <h4>Social</h4>
                <div className="contact-social" aria-label="Social links">
                  <a
                    className="contact-social__pill"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                  <a
                    className="contact-social__pill"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                  <a
                    className="contact-social__icon"
                    href="mailto:info@milestogo.ch"
                    aria-label="Email"
                  >
                    <Mail size={18} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-page-form-wrap" data-aos="fade-left" data-aos-delay="120">
              <h3 className="heading-with-symbol">Fill up the form if you have any question</h3>
              <form className="contact-page-form" aria-label="Send a message">
                <input type="text" name="name" placeholder="Your Name" autoComplete="name" required />
                <input type="email" name="email" placeholder="Your Email" autoComplete="email" required />
                <input type="text" name="subject" placeholder="Subject" />
                <textarea name="message" placeholder="Write your message..." rows={5} required />
                <button type="button" className="contact-page-form__submit">
                  Send a message
                  <Send size={18} strokeWidth={2} aria-hidden />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

