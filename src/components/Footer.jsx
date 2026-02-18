import { HiPhone, HiLocationMarker, HiMail } from 'react-icons/hi'
import useScrollReveal from '../hooks/useScrollReveal'

const serviceLinks = [
  'Interior & Exterior Painting',
  'Laminate Flooring',
  'Ceramic Tile Installation',
  'Drywall Finishing',
  'Deck Construction',
  'Shower Remodeling',
  'Backsplash Installation',
  'Full Remodeling',
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-gray-900 to-dark-800 text-white relative overflow-hidden" ref={ref}>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(#16a34a 1px, transparent 1px), linear-gradient(90deg, #16a34a 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div
          className={`py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center sm:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.ico"
                alt="Riberas Contractor"
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-md shadow-sm"
              />
              <div className="flex flex-col -space-y-1">
                <span className="text-white font-black text-base sm:text-lg">RIBERAS</span>
                <span className="text-primary-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">
                  Contractor
                </span>
              </div>
            </div>
            <p className="text-dark-400 leading-relaxed text-xs sm:text-sm max-w-xs">
              Professional residential remodeling services in Bowling Green, Kentucky. Quality craftsmanship you can
              trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-xs sm:text-sm font-medium hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-dark-400 hover:text-primary-400 transition-colors text-xs sm:text-sm font-medium hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+12704218169"
                  className="flex items-center justify-center sm:justify-start gap-3 text-dark-400 hover:text-primary-400 transition-all text-xs sm:text-sm group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-800 group-hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all flex-shrink-0 group-hover:scale-110">
                    <HiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  (270) 421-8169
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=1856+Loop+St+Unit+442+Bowling+Green+KY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 text-dark-400 hover:text-primary-400 transition-all text-xs sm:text-sm group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-800 group-hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all flex-shrink-0 group-hover:scale-110">
                    <HiLocationMarker className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span>1856 Loop St, Unit 442, Bowling Green, Kentucky, United States</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@riberascontractor.com"
                  className="flex items-center justify-center sm:justify-start gap-3 text-dark-400 hover:text-primary-400 transition-all text-xs sm:text-sm group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-800 group-hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all flex-shrink-0 group-hover:scale-110">
                    <HiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  info@riberascontractor.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
          <p className="text-dark-500 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Riberas Contractor. All rights reserved.
          </p>
          <p className="text-dark-500 text-xs sm:text-sm text-center">
            Proudly serving Bowling Green, Kentucky
          </p>
        </div>
      </div>
    </footer>
  )
}
