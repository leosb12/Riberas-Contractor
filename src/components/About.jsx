import { HiCheckCircle } from 'react-icons/hi'
import useScrollReveal from '../hooks/useScrollReveal'

const highlights = [
  'Specialized in painting & flooring',
  'Laminate and ceramic tile experts',
  'Professional drywall finishing',
  'Custom deck & balcony construction',
  'Backsplash Installation',
  'Shower Remodeling',
  'Licensed and insured',
  'Free project estimates',
]

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 via-emerald-50/30 to-green-50/40 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className={`relative w-full flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="w-full max-w-md lg:max-w-lg aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl sm:rounded-3xl border-2 border-primary-300 shadow-2xl shadow-primary-600/20 flex items-center justify-center mx-auto overflow-hidden group">
              <img src="/about.jpg" alt="Riberas Contractor at work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className={`absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-primary-600/40 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <p className="text-3xl sm:text-4xl font-black text-center">5+</p>
              <p className="text-xs sm:text-sm font-semibold mt-1 text-center">Years of<br />Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-5 sm:space-y-6 text-center mt-6 lg:mt-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div>
              <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-widest">About Us</span>
              <h2 className="section-title mt-3 sm:mt-4 mb-4 sm:mb-6">Building Trust,<br />One Project at a Time</h2>
            </div>

            <p className="text-dark-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
              Riberas Contractor is a professional residential remodeling company based in Bowling Green, Kentucky.
              We specialize in painting, flooring, drywall finishing, backsplash and shower remodeling, and custom deck construction.
            </p>
            <p className="text-dark-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
              Our commitment is to deliver high-quality results that exceed expectations. Every project is handled
              with attention to detail, clear communication, and respect for your home.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto px-2 sm:px-0">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-sm border border-primary-100 text-center hover:shadow-md hover:border-primary-300 hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: isVisible ? `${400 + index * 80}ms` : '0ms' }}
                >
                  <HiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-dark-800 font-semibold text-xs sm:text-sm leading-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a href="#contact" className="btn-primary inline-block text-base sm:text-lg px-8 sm:px-10">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
