import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '/', anchor: '' },
  { name: 'Services', href: '/', anchor: 'services' },
  { name: 'About', href: '/', anchor: 'about' },
  { name: 'Before/After', href: '/', anchor: 'before-after' },
  { name: 'Process', href: '/', anchor: 'process' },
  { name: 'Contact', href: '/', anchor: 'contact' },
]

function NavLink({ link, scrolled, className, onClick }) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (onClick) onClick()
    if (location.pathname === '/') {
      const el = document.getElementById(link.anchor || 'home')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(link.anchor ? `/#${link.anchor}` : '/')
    }
  }

  return (
    <a href={link.anchor ? `/#${link.anchor}` : '/'} onClick={handleClick} className={className}>
      {link.name}
    </a>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-dark-900/5 py-0'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <img
              src="/logo.ico"
              alt="Riberas Contractor"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-md shadow-sm transition-all duration-500"
            />
            <div className="flex flex-col -space-y-1">
              <span className={`font-black text-base sm:text-xl tracking-tight transition-colors duration-500 ${scrolled ? 'text-dark-900' : 'text-white'}`}>
                RIBERAS
              </span>
              <span className={`font-semibold text-[10px] sm:text-xs tracking-widest uppercase transition-colors duration-500 ${scrolled ? 'text-primary-600' : 'text-primary-300'}`}>
                Contractor
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                link={link}
                scrolled={scrolled}
                className={`px-3 lg:px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  scrolled
                    ? 'text-dark-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              />
            ))}
            <a
              href="tel:+12704218169"
              className={`ml-3 px-5 lg:px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg transition-all duration-300 ${
                scrolled
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30'
                  : 'bg-white/15 backdrop-blur-xl text-white border border-white/20 hover:bg-white/25'
              }`}
            >
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-dark-900 hover:bg-primary-50' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <button
          className={`absolute inset-0 bg-dark-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        />

        {/* Dropdown Panel */}
        <div className={`absolute top-0 left-0 right-0 bg-white shadow-2xl transform transition-transform duration-400 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-dark-100 bg-white sticky top-0 z-10">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <img src="/logo.ico" alt="logo" className="w-9 h-9 object-contain rounded-md" />
                <span className="font-black text-lg text-dark-900">RIBERAS</span>
              </Link>
              <button className="p-2 rounded-lg text-dark-700 hover:bg-dark-50" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <HiX size={22} />
              </button>
            </div>

            <div className="px-4 py-6">
              <nav className="grid gap-2">
                {navLinks.map((link, i) => (
                  <NavLink
                    key={link.name}
                    link={link}
                    scrolled={true}
                    onClick={() => setIsOpen(false)}
                    className="block text-center text-dark-900 hover:text-white bg-dark-50 hover:bg-primary-600 border border-dark-200 hover:border-primary-600 px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                  />
                ))}
              </nav>

              <div className="mt-4">
                <a
                  href="tel:+12704218169"
                  className="block text-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Call Now — (270) 421-8169
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
