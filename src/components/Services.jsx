import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  {
    number: '01',
    title: 'Interior & Exterior Painting',
    description:
      'Expert painting services with premium materials. Clean lines, flawless finishes, and lasting color.',
    image: '/services/painting.png',
  },
  {
    number: '02',
    title: 'Flooring Installation',
    description:
      'Laminate and ceramic tile installation with precise cuts, seamless patterns, and durable finishes.',
    image: '/services/flooring.png',
  },
  {
    number: '03',
    title: 'Drywall & Finishing',
    description:
      'Professional drywall repair and finishing. From patching to full installations, smooth walls guaranteed.',
    image: '/services/drywall.png',
  },
  {
    number: '04',
    title: 'Deck & Balcony Construction',
    description:
      'Custom deck and balcony builds designed for durability and functional outdoor living.',
    image: '/services/balcon.png',
  },
  {
    number: '05',
    title: 'Shower Remodeling',
    description:
      'Complete shower installations and tile work. Waterproof, beautiful, and built to code.',
    image: '/services/shower.jpg',
  },
  {
    number: '06',
    title: 'Backsplash Installation',
    description:
      'Custom kitchen and bathroom backsplashes with ceramic, porcelain, and decorative tile designs.',
    image: '/services/backsplash.jpg',
  },
]

export default function Services() {
  const [ref, isVisible] = useScrollReveal(0.08)

  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark-900 leading-[1.1] mt-4 mb-6 tracking-tight">
            Quality Craftsmanship
          </h2>
          <p className="text-dark-500 text-base sm:text-lg leading-relaxed mb-8">
            From concept to completion, every project gets our full attention to detail.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-700 font-bold text-sm hover:gap-3 transition-all duration-300"
          >
            Get a free estimate
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* 3x2 Grid of service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isVisible }) {
  const hasImage = !!service.image

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
        hasImage
          ? 'bg-dark-900 aspect-[5/4]'
          : 'bg-dark-50/80 border border-dark-100 hover:border-primary-200 hover:shadow-lg'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : '0ms' }}
    >
      {hasImage ? (
        <>
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-dark-900/10 group-hover:from-dark-900/95 transition-all duration-500" />
          <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
            <span className="text-[3rem] sm:text-[3.5rem] font-extralight leading-none text-white/15 absolute top-3 left-5 select-none">
              {service.number}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
              {service.title}
            </h3>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3">
              {service.description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-primary-300 font-bold text-xs uppercase tracking-widest hover:text-primary-200 hover:gap-3 transition-all duration-300"
            >
              Learn More
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </>
      ) : (
        <div className="p-5 sm:p-6">
          <span
            className="block text-[3rem] sm:text-[3.5rem] font-extralight leading-none text-transparent select-none mb-1"
            style={{ WebkitTextStroke: '1px rgba(22,163,74,0.15)' }}
          >
            {service.number}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-dark-900 mb-1.5">
            {service.title}
          </h3>
          <p className="text-dark-500 text-xs sm:text-sm leading-relaxed mb-4">
            {service.description}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-dark-800 font-bold text-xs uppercase tracking-widest hover:text-primary-700 hover:gap-3 transition-all duration-300"
          >
            Learn More
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}
