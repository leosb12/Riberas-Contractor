import { useState, useRef, useEffect } from 'react'

// Example before/after items - replace with real images
const beforeAfterProjects = [
  {
    id: 1,
    title: 'Kitchen Remodel',
    category: 'Remodeling',
    before: '/before-after/afterc.jpg', // intercambiado
    after: '/before-after/beforec.jpg', // intercambiado
  },
  {
    id: 2,
    title: 'Bathroom Renovation',
    category: 'Remodeling',
    before: '/before-after/afterb.jpg',  // intercambiado
    after: '/before-after/beforeb.jpg',   // intercambiado
  },
  {
    id: 3,
    title: 'Backsplash',                     // changed title
    category: 'Backsplash',                 // changed category
    before: '/before-after/afterk.jpg',     // swapped so BEFORE shows the "before" file correctly
    after: '/before-after/beforek.jpg',     // swapped so AFTER shows the "after" file correctly
  },
]

function BeforeAfterSlider({ before, after, title }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    handleMove(e.clientX) // mueve al click también
  }
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    handleMove(e.touches[0].clientX)
  }
  const handleTouchMove = (e) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }
  const handleTouchEnd = () => setIsDragging(false)

  useEffect(() => {
    if (!isDragging) return
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-xl border-2 border-primary-200"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (background) */}
      <div className="absolute inset-0">
        {before ? (
          <img src={before} alt={`${title} - Before`} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-200 to-dark-300 flex items-center justify-center">
            <span className="text-dark-500 font-semibold text-sm sm:text-base">Before Image</span>
          </div>
        )}
      </div>

      {/* After Image (clipped) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {after ? (
          <img src={after} alt={`${title} - After`} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
            <span className="text-primary-700 font-semibold text-sm sm:text-base">After Image</span>
          </div>
        )}
      </div>

      {/* ✅ Labels that "disappear" as you slide (clipped to each side) */}
      {/* BEFORE side label (visible ONLY on left of slider) */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-dark-900/90 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-bold backdrop-blur-sm">
          {title} — Before
        </div>
      </div>

      {/* AFTER side label (visible ONLY on right of slider) */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-primary-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-bold shadow-lg backdrop-blur-sm">
          {title} — After
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white shadow-lg z-20"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-xl border-2 sm:border-4 border-primary-600 flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section id="before-after" className="py-12 sm:py-16 md:py-20 bg-gradient-to-tr from-green-100/60 via-emerald-50/40 to-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
            Transformations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 leading-tight mt-2 sm:mt-3 mb-3 sm:mb-4">
            Before & After
          </h2>
          <p className="text-dark-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
            See the dramatic difference our expert craftsmanship makes. Real projects, real results.
          </p>
        </div>

        {/* Main Slider */}
        <div className="mb-6 sm:mb-8">
          <BeforeAfterSlider
            before={beforeAfterProjects[activeProject].before}
            after={beforeAfterProjects[activeProject].after}
            title={beforeAfterProjects[activeProject].title}
          />
        </div>

        {/* Project Info */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-900 mb-1 sm:mb-2">
            {beforeAfterProjects[activeProject].title}
          </h3>
          <p className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wide">
            {beforeAfterProjects[activeProject].category}
          </p>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-8 sm:mb-10">
          {beforeAfterProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 transition-all duration-300 ${
                index === activeProject
                  ? 'border-primary-600 shadow-lg scale-105 sm:scale-110'
                  : 'border-transparent hover:border-primary-300 opacity-60 hover:opacity-100'
              }`}
            >
              {project.after ? (
                <img src={project.after} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-primary-100 flex items-center justify-center text-[10px] sm:text-xs text-primary-600 font-bold">
                  {index + 1}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-dark-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Ready to transform your space?
          </p>
          <a href="#contact" className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10">
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
