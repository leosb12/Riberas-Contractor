import { HiStar } from 'react-icons/hi'
import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    avatar: 'SM',
    image: '/profiles/mujer.png',
    timeAgo: '2 months ago',
    rating: 5,
    text: 'Had them paint our living room and kitchen. Showed up on time every day which was nice. The color match was perfect and they were really careful around our furniture. Price was reasonable too.',
    verified: true,
  },
  {
    name: 'James Thompson',
    avatar: 'JT',
    image: '/profiles/hombre.png',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'These guys know what they\'re doing. Did our floors last month - laminate in the bedrooms and tile in the bathrooms. Clean work, no complaints. Took about a week like they said it would.',
    verified: true,
  },
  {
    name: 'Maria Lopez',
    avatar: 'ML',
    image: null,
    timeAgo: '3 weeks ago',
    rating: 4,
    text: 'Good experience overall. The deck they built looks great and feels solid. Communication could have been a bit better but the end result made up for it. Would hire again.',
    verified: false,
  },
  {
    name: 'Robert Chen',
    avatar: 'RC',
    image: '/profiles/hombre%20(2).png',
    timeAgo: '2 weeks ago',
    rating: 5,
    text: 'Best contractor we\'ve worked with in BG honestly. Redid our master bathroom - new shower, tile, the works. They explained everything before starting and cleaned up after themselves every day. Can\'t recommend enough',
    verified: true,
  },
]

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-green-50/30 to-emerald-100/40 relative overflow-hidden" ref={ref}>
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="section-title mt-3 sm:mt-4 mb-4 sm:mb-6">What Our Clients Say</h2>
          <p className="section-subtitle max-w-2xl mx-auto px-4 sm:px-0">
            Real feedback from homeowners in Bowling Green, KY.
          </p>
        </div>

        {/* Google-style Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              {/* Header with avatar and name */}
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={`${t.name} profile`}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0 shadow-sm border border-gray-100"
                    />
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm sm:text-base">
                        {t.avatar}
                      </span>
                    </div>
                  )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{t.name}</p>
                    {t.verified && (
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm">{t.timeAgo}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <HiStar key={j} className={`w-4 h-4 sm:w-5 sm:h-5 ${j < t.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Google Business Link */}
        <div className={`text-center mt-10 sm:mt-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            See more reviews
          </a>
        </div>
      </div>
    </section>
  )
}
