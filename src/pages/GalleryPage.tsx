import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import './gallery-page.css'

// Dynamically import all images inside src/assets/gallery
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true })
const imageUrls = Object.values(imageModules).map((mod: any) => mod.default)

export function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % imageUrls.length : null))
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + imageUrls.length) % imageUrls.length : null))
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImageIndex])

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeImageIndex])

  const openLightbox = (index: number) => {
    setActiveImageIndex(index)
  }

  const closeLightbox = () => {
    setActiveImageIndex(null)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + imageUrls.length) % imageUrls.length : null))
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % imageUrls.length : null))
  }

  // Use the first image in the gallery as the hero background if available,
  // or a fallback if there are no images.
  const heroBackground = imageUrls.length > 0 ? imageUrls[0] : ''

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero" aria-labelledby="gallery-hero-title">
        <div
          className="gallery-hero__bg"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="gallery-hero__overlay" />
        <div className="gallery-hero__inner" data-aos="fade-up">
          <h1 id="gallery-hero-title" className="gallery-hero__title">
            Our Gallery
          </h1>
          <p className="gallery-hero__crumb">
            <Link to="/">Home</Link>
            <span className="gallery-hero__sep">/</span>
            Gallery
          </p>
        </div>
      </section>

      {/* Intro section */}
      <section className="gallery-intro" aria-labelledby="gallery-intro-heading">
        <div className="container gallery-intro__inner" data-aos="fade-up">
          <h2 id="gallery-intro-heading" className="gallery-intro__title heading-with-symbol">
            A Glimpse of Miles to Go
          </h2>
          <p className="gallery-intro__copy">
            Explore our comfortable rooms, modern amenities, common areas, and surroundings. We provide
            clean, modern, and affordable accommodation in Oberglatt, Zurich, ensuring you have a relaxing stay.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="gallery-grid">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className="gallery-card"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={url}
                  alt={`Miles to Go hotel - Gallery image ${index + 1}`}
                  className="gallery-card__img"
                  loading="lazy"
                />
                <div className="gallery-card__overlay">
                  <div className="gallery-card__icon-wrap">
                    <ZoomIn size={24} aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox} aria-modal="true" role="dialog">
          <button
            type="button"
            className="lightbox__btn lightbox__btn--close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="lightbox__btn lightbox__btn--prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          <div className="lightbox__wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__img-container">
              <img
                src={imageUrls[activeImageIndex]}
                alt={`Miles to Go hotel - Large view ${activeImageIndex + 1}`}
                className="lightbox__img"
              />
            </div>
          </div>

          <button
            type="button"
            className="lightbox__btn lightbox__btn--next"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>

          <div className="lightbox__meta">
            <span className="lightbox__counter">
              {activeImageIndex + 1} / {imageUrls.length}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
