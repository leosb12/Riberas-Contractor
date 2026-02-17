import { useState } from 'react'
import { HiPhone, HiLocationMarker, HiMail, HiClock } from 'react-icons/hi'
import useScrollReveal from '../hooks/useScrollReveal'

const contactInfo = [
  {
    icon: HiPhone,
    label: 'Phone',
    value: '(270) 421-8169',
    href: 'tel:+12704218169',
  },
  {
    icon: HiLocationMarker,
    label: 'Address',
    value: '1856 Loop St, Bowling Green, KY',
    href: 'https://maps.google.com/?q=1856+Loop+St+Unit+442+Bowling+Green+KY',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: 'info@riberascontractor.com',
    href: 'mailto:info@riberascontractor.com',
  },
  {
    icon: HiClock,
    label: 'Working Hours',
    value: 'Mon – Fri: 9 AM – 5 PM',
    href: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)
  const [ref, isVisible] = useScrollReveal(0.1)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formEndpoint) {
      setStatus({ type: 'error', message: 'Form not configured. Please contact us by phone.' })
      return
    }

    setSending(true)
    setStatus(null)

    try {
      const fd = new FormData()
      Object.entries(formData).forEach(([k, v]) => fd.append(k, v))

      const res = await fetch(formEndpoint, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus({ type: 'success', message: "Thanks — we'll get back to you shortly." })
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        let json
        try { json = await res.json() } catch {}
        setStatus({ type: 'error', message: (json?.error || json?.errors?.map(e => e.message).join(', ')) || 'Submission failed.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-emerald-100/50 via-green-50/30 to-white relative overflow-hidden" ref={ref}>
      {/* Animated gradient orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="section-title mt-3 sm:mt-4 mb-4 sm:mb-6">Get Your Free Estimate</h2>
          <p className="section-subtitle max-w-2xl mx-auto px-4 sm:px-0">
            Ready to start your project? Reach out today and let's discuss how we can transform your home.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              const isLink = !!item.href
              const cls =
                'flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-primary-100 hover:border-primary-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group'
              const iconWrap =
                'w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-600/30 group-hover:scale-110 transition-transform duration-300'
              const content = (
                <>
                  <div className={iconWrap}>
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-dark-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">{item.label}</p>
                    <p className="text-dark-900 font-bold text-sm sm:text-lg mt-0.5 sm:mt-1 truncate">{item.value}</p>
                  </div>
                </>
              )

              return isLink ? (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={cls} style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}>
                  {content}
                </a>
              ) : (
                <div key={i} className={cls} style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}>
                  {content}
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl border-2 border-primary-100 hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-dark-900 font-bold text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border-2 border-dark-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-dark-900 font-bold text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(270) 000-0000"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border-2 border-dark-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-dark-900 font-bold text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border-2 border-dark-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-dark-900 font-bold text-xs sm:text-sm mb-1.5 sm:mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border-2 border-dark-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="painting">Painting</option>
                    <option value="flooring">Flooring</option>
                    <option value="drywall">Drywall Finishing</option>
                    <option value="deck">Deck Construction</option>
                    <option value="shower">Shower Remodeling</option>
                    <option value="backsplash">Backsplash Installation</option>
                    <option value="remodeling">Full Remodeling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <label className="block text-dark-900 font-bold text-xs sm:text-sm mb-1.5 sm:mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border-2 border-dark-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                disabled={sending || !formEndpoint}
                className="btn-primary w-full mt-6 sm:mt-8 text-base sm:text-lg py-3.5 sm:py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Send Request'}
              </button>

              {status && (
                <p className={`text-sm text-center mt-4 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status.message}
                </p>
              )}

              <p className="text-dark-500 text-[10px] sm:text-xs text-center mt-3 sm:mt-4">
                We respond within 24 hours. Your information is never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
