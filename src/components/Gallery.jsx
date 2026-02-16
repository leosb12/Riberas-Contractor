import { useState, useEffect, useMemo } from 'react'

const categories = ['All', 'Painting', 'Flooring', 'Drywall', 'Decks', 'Shower', 'Backsplash', 'Remodeling']

// Placeholder gallery items — replace `image` with real paths in /public/gallery/
const projects = [
  { id: 1, category: 'Painting', label: 'Interior Painting', sub: 'Residential', src: '' },
  { id: 2, category: 'Flooring', label: 'Ceramic Tile', sub: 'Kitchen Floor', src: '' },
  { id: 3, category: 'Drywall', label: 'Drywall Finish', sub: 'Living Room', src: '' },
  { id: 4, category: 'Decks', label: 'Custom Deck', sub: 'Balcony Build', src: '' },
  { id: 5, category: 'Painting', label: 'Exterior Painting', sub: 'Full House', src: '' },
  { id: 6, category: 'Flooring', label: 'Laminate Floor', sub: 'Bedroom', src: '' },
  { id: 7, category: 'Shower', label: 'Shower Remodel', sub: 'Master Bathroom', src: '' },
  { id: 8, category: 'Shower', label: 'Tile Shower Installation', sub: 'Guest Bath', src: '' },
  { id: 9, category: 'Backsplash', label: 'Kitchen Backsplash', sub: 'Ceramic Tile', src: '' },
  { id: 10, category: 'Backsplash', label: 'Bathroom Backsplash', sub: 'Custom Design', src: '' },
  { id: 11, category: 'Remodeling', label: 'Bathroom Remodel', sub: 'Full Reno', src: '' },
  { id: 12, category: 'Remodeling', label: 'Kitchen Remodel', sub: 'Before & After', src: '' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [items, setItems] = useState(projects)

  // Carousel state for "All"
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    let didCancel = false
    async function load() {
      try {
        const res = await fetch('/api/gallery')
        if (!didCancel && res.ok) {
          const remote = await res.json()
          if (Array.isArray(remote) && remote.length) {
            setItems(remote)
            return
          }
        }
      } catch {}
      try {
        const uploaded = JSON.parse(localStorage.getItem('riberas_gallery') || '[]')
        if (!didCancel && uploaded && uploaded.length) {
          const merged = [...uploaded, ...projects.filter((p) => !uploaded.find((u) => u.label === p.label))]
          setItems(merged)
        } else if (!didCancel) {
          setItems(projects)
        }
      } catch {
        if (!didCancel) setItems(projects)
      }
    }
    load()
    return () => { didCancel = true }
  }, [])

  useEffect(() => {
    setCurrentIndex(0)
  }, [active, items])

  const filtered = active === 'All' ? items : items.filter((p) => p.category === active)

  // Config: mobile = 1 per slide, tablet = 2, desktop = 3
  const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1 // mobile
    if (window.innerWidth < 1024) return 2 // tablet
    return 3 // desktop
  }

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide())

  useEffect(() => {
    const handleResize = () => setItemsPerSlide(getItemsPerSlide())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.ceil(items.length / itemsPerSlide)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const lightboxPrev = () => {
    setLightboxIndex((i) => (i - 1 + items.length) % items.length)
  }

  const lightboxNext = () => {
    setLightboxIndex((i) => (i + 1) % items.length)
  }

  useEffect(() => {
    const handler = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') lightboxPrev()
      if (e.key === 'ArrowRight') lightboxNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxOpen, items.length])

  const currentSlideItems = useMemo(() => {
    const start = currentIndex * itemsPerSlide
    return items.slice(start, start + itemsPerSlide)
  }, [items, currentIndex, itemsPerSlide])

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gradient-to-bl from-white via-green-50/20 to-emerald-50/50 relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(30deg, #16a34a 12%, transparent 12.5%, transparent 87%, #16a34a 87.5%, #16a34a), linear-gradient(150deg, #16a34a 12%, transparent 12.5%, transparent 87%, #16a34a 87.5%, #16a34a), linear-gradient(30deg, #16a34a 12%, transparent 12.5%, transparent 87%, #16a34a 87.5%, #16a34a), linear-gradient(150deg, #16a34a 12%, transparent 12.5%, transparent 87%, #16a34a 87.5%, #16a34a)', backgroundSize: '80px 140px', backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="section-title mt-3 sm:mt-4 mb-4 sm:mb-6">Project Gallery</h2>
          <p className="section-subtitle max-w-2xl mx-auto px-4 sm:px-0">
            See the quality and attention to detail we bring to every project. Real transformations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-white text-dark-700 border-2 border-dark-200 hover:border-primary-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Content */}
        {active === 'All' ? (
          <div className="relative">
            {/* Carousel Container */}
            <div
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIdx) => {
                  const slideItems = items.slice(
                    slideIdx * itemsPerSlide,
                    slideIdx * itemsPerSlide + itemsPerSlide
                  )
                  return (
                    <div
                      key={slideIdx}
                      className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-1"
                    >
                      {slideItems.map((project) => {
                        const globalIndex = items.findIndex((it) => it.id === project.id)
                        return (
                          <div
                            key={project.id}
                            className="group relative aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden border-2 border-primary-300 cursor-pointer hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-300"
                            onClick={() => openLightbox(globalIndex)}
                          >
                            {project.src ? (
                              <img
                                src={project.src}
                                alt={project.label}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                <svg
                                  className="w-12 h-12 sm:w-16 sm:h-16 text-primary-400 mb-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                <p className="text-primary-600 text-xs sm:text-sm font-medium text-center">
                                  Add photo
                                </p>
                              </div>
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                              <span className="text-primary-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                                {project.category}
                              </span>
                              <h4 className="text-white text-sm sm:text-lg font-bold mt-1">
                                {project.label}
                              </h4>
                              <p className="text-dark-300 text-xs sm:text-sm">{project.sub}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={isAnimating}
                  className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border border-dark-200 flex items-center justify-center text-dark-900 text-2xl font-bold disabled:opacity-50 transition-all"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  disabled={isAnimating}
                  className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border border-dark-200 flex items-center justify-center text-dark-900 text-2xl font-bold disabled:opacity-50 transition-all"
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {totalSlides > 1 && (
              <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setCurrentIndex(idx)
                        setTimeout(() => setIsAnimating(false), 500)
                      }
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentIndex
                        ? 'w-8 h-3 bg-primary-600'
                        : 'w-3 h-3 bg-dark-300 hover:bg-primary-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Grid for filtered categories
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {filtered.map((project) => {
              const globalIndex = items.findIndex((it) => it.id === project.id)
              return (
                <div
                  key={project.id}
                  className="group relative aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary-300 cursor-pointer hover:shadow-2xl hover:shadow-primary-600/20 transition-all duration-300"
                  onClick={() => openLightbox(globalIndex)}
                >
                  {project.src ? (
                    <img src={project.src} alt={project.label} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4">
                      <svg
                        className="w-8 h-8 sm:w-12 sm:h-12 text-primary-400 mb-1 sm:mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-primary-600 text-[10px] sm:text-xs font-medium text-center">Add photo</p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-6">
                    <span className="text-primary-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="text-white text-sm sm:text-lg font-bold mt-0.5 sm:mt-1">{project.label}</h4>
                    <p className="text-dark-300 text-xs sm:text-sm hidden sm:block">{project.sub}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-16">
          <a href="#contact" className="btn-primary text-base sm:text-lg px-8 sm:px-10">
            Request Free Estimate
          </a>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl sm:text-4xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              ×
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                lightboxPrev()
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-2xl sm:text-3xl transition-colors"
              aria-label="Previous"
            >
              ‹
            </button>

            <div
              className="max-w-[90vw] max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {items[lightboxIndex] && items[lightboxIndex].src ? (
                <img
                  src={items[lightboxIndex].src}
                  alt={items[lightboxIndex].label}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <div className="bg-white/10 rounded-lg p-8 text-center">
                  <p className="text-white text-lg font-semibold">No image available</p>
                  <p className="text-white/70 text-sm mt-2">{items[lightboxIndex]?.label}</p>
                </div>
              )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                lightboxNext()
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-2xl sm:text-3xl transition-colors"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
