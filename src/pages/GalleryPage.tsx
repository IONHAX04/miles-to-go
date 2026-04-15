export function GalleryPage() {
  return (
    <section className="section alt">
      <div className="container">
        <h2>Our Gallery</h2>
        <div className="gallery-grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="image-placeholder">
              Photo {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
