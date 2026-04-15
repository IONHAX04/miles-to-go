import type { FormEvent } from 'react'
import { HOTEL_CONTACT } from '../data/roomTemplates'

import './enquiry-page.css'

export function EnquiryPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Placeholder until enquiry backend or CRM webhook is connected.
  }

  return (
    <section className="section enquiry-page">
      <div className="container enquiry-wrap">
        <div className="enquiry-intro" data-aos="fade-right">
          <p className="eyebrow">Enquiry</p>
          <h1 className="heading-with-symbol">Send your enquiry</h1>
          <p>
            Share your travel plans or booking questions and we will get back to you with the best
            available options.
          </p>
          <div className="enquiry-contact-card">
            <p>
              <strong>Phone:</strong> {HOTEL_CONTACT.phone}
            </p>
            <p>
              <strong>Email:</strong> {HOTEL_CONTACT.email}
            </p>
            <p>
              <strong>Address:</strong> {HOTEL_CONTACT.address}
            </p>
          </div>
        </div>

        <div className="enquiry-form-wrap" data-aos="fade-left" data-aos-delay="120">
          <form className="enquiry-form" aria-label="Send an enquiry" onSubmit={handleSubmit}>
            <label htmlFor="enq-booking-number">Previous booking number (if available)</label>
            <input
              id="enq-booking-number"
              name="previousBookingNumber"
              type="text"
              placeholder="Example: MTG-2026-1048"
            />

            <label htmlFor="enq-name">Full name</label>
            <input id="enq-name" name="name" type="text" placeholder="Your name" required />

            <label htmlFor="enq-email">Email</label>
            <input
              id="enq-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <label htmlFor="enq-phone">Phone number</label>
            <input id="enq-phone" name="phone" type="tel" placeholder="+41 ..." required />

            <div className="enquiry-form__dates">
              <div>
                <label htmlFor="enq-checkin">Expected check-in</label>
                <input id="enq-checkin" name="checkIn" type="date" />
              </div>
              <div>
                <label htmlFor="enq-checkout">Expected check-out</label>
                <input id="enq-checkout" name="checkOut" type="date" />
              </div>
            </div>

            <label htmlFor="enq-room-type">Preferred room type</label>
            <select id="enq-room-type" name="roomType" defaultValue="">
              <option value="" disabled>
                Select room type
              </option>
              <option value="standard">Standard Room</option>
              <option value="double">Double Room</option>
              <option value="triple">Triple Room</option>
              <option value="quadruple">Quadruple Room</option>
              <option value="family">Family Room</option>
              <option value="other">Not sure yet</option>
            </select>

            <label htmlFor="enq-message">Your enquiry details</label>
            <textarea
              id="enq-message"
              name="message"
              rows={5}
              placeholder="Tell us your dates, number of guests, or any special requests."
              required
            />

            <button type="submit" className="primary-btn">
              Submit enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
