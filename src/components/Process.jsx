import useScrollReveal from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Contact Us',
    description: 'Reach out by phone or contact form. Tell us about your project and schedule a free consultation.',
  },
  {
    number: '02',
    title: 'Free Estimate',
    description: 'We visit your property, assess the scope, and provide a transparent, detailed quote.',
  },
  {
    number: '03',
    title: 'Project Execution',
    description: 'Our skilled team gets to work on schedule, maintaining clear communication throughout.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We do a thorough inspection with you to ensure every detail meets our high standards.',
  },
]

export default function Process() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="process" className="py-16 sm:py-24 bg-gradient-to-tr from-green-50/60 via-white to-emerald-100/40 relative overflow-hidden" ref={ref}>
      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #16a34a, #16a34a 10px, transparent 10px, transparent 20px)'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="section-title mt-3 sm:mt-4 mb-4 sm:mb-6">Our Process</h2>
          <p className="section-subtitle max-w-2xl mx-auto px-4 sm:px-0">
            A simple, stress-free process designed to deliver outstanding results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Connector Line - only on large screens */}
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-12 left-[60%] w-[80%] h-1 bg-gradient-to-r from-primary-300 to-primary-200 transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transformOrigin: 'left', transitionDelay: isVisible ? `${index * 200 + 400}ms` : '0ms' }} />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl shadow-primary-600/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="text-white font-black text-xl sm:text-2xl md:text-3xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-dark-600 leading-relaxed text-xs sm:text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
