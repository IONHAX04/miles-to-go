export function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <h2>Services</h2>
        <div className="chip-grid">
          {[
            'Airport Transfers',
            'High-Speed Wi-Fi',
            'Business Lounge',
            'Breakfast & Dining',
            'Laundry Service',
            '24/7 Support',
          ].map((item) => (
            <div key={item} className="chip">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
