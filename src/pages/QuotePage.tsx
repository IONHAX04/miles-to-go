export function QuotePage() {
  return (
    <section className="section quote-section">
      <div className="container split">
        <div>
          <h2>Get a Quote</h2>
          <p>
            Share your travel dates and room preferences. We will send a custom
            quote shortly.
          </p>
        </div>
        <form className="contact-form">
          <input placeholder="Check-in Date" />
          <input placeholder="Check-out Date" />
          <input placeholder="Guests" />
          <textarea placeholder="Special Requests" />
          <button type="button" className="primary-btn">
            Request Quote
          </button>
        </form>
      </div>
    </section>
  )
}
