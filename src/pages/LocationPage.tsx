export function LocationPage() {
  return (
    <section className="section alt">
      <div className="container split">
        <div data-aos="fade-right">
          <div className="section-head">
            <p className="eyebrow">Location</p>
            <h2>Conveniently Located Near</h2>
          </div>
          <ul className="detail-list">
            <li>Zurich Airport</li>
            <li>City Center</li>
            <li>Train Station (exact distances will be updated soon)</li>
          </ul>
        </div>
        <div className="policy-card" data-aos="fade-left" data-aos-delay="120">
          <h3>Policies</h3>
          <p><strong>Check-in:</strong> 15:00</p>
          <p><strong>Check-out:</strong> 11:00</p>
          <p>
            <strong>Cancellation Policy:</strong> Free cancellation up to 5 days before
            check-in (Standard Rate).
          </p>
        </div>
      </div>
    </section>
  )
}
