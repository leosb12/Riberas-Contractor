import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import {
  HiOutlinePaintBrush,
  HiOutlineHome,
  HiOutlineWrenchScrewdriver,
  HiOutlineCube,
  HiOutlineSparkles,
  HiOutlineClipboardDocumentCheck,
  HiOutlineShieldCheck,
  HiOutlineCheckBadge,
  HiOutlineStar,
  HiOutlineSwatch,
  HiOutlineSquares2X2,
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineSun,
  HiOutlineCommandLine,
  HiOutlineCog6Tooth,
  HiOutlineRectangleStack,
  HiOutlineBuildingOffice2,
  HiOutlineArrowTrendingUp,
  HiOutlineLightBulb,
  HiOutlineSpeakerXMark,
  HiOutlineGlobeAlt,
  HiOutlineAcademicCap,
  HiOutlineCalculator,
  HiOutlineMapPin,
  HiOutlineTruck,
} from 'react-icons/hi2'

const ICONS = {
  paint: HiOutlinePaintBrush,
  home: HiOutlineHome,
  wrench: HiOutlineWrenchScrewdriver,
  cube: HiOutlineCube,
  sparkles: HiOutlineSparkles,
  clipboard: HiOutlineClipboardDocumentCheck,
  shield: HiOutlineShieldCheck,
  badge: HiOutlineCheckBadge,
  star: HiOutlineStar,
  swatch: HiOutlineSwatch,
  grid: HiOutlineSquares2X2,
  bolt: HiOutlineBolt,
  refresh: HiOutlineArrowPath,
  beaker: HiOutlineBeaker,
  scale: HiOutlineScale,
  sun: HiOutlineSun,
  terminal: HiOutlineCommandLine,
  cog: HiOutlineCog6Tooth,
  layers: HiOutlineRectangleStack,
  building: HiOutlineBuildingOffice2,
  trending: HiOutlineArrowTrendingUp,
  bulb: HiOutlineLightBulb,
  silent: HiOutlineSpeakerXMark,
  globe: HiOutlineGlobeAlt,
  academic: HiOutlineAcademicCap,
  calculator: HiOutlineCalculator,
  pin: HiOutlineMapPin,
  truck: HiOutlineTruck,
}

function Icon({ name, className = 'w-5 h-5' }) {
  const Comp = ICONS[name] || HiOutlineSparkles
  return <Comp className={className} />
}

export default function ServicePageLayout({ service }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-16 pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-dark-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/90">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-600/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              {service.category}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              {service.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+12704218169"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-primary-900/40 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now — Free Quote
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
              >
                Get a Free Estimate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-primary-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-primary-500">
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center lg:px-8">
                <div className="text-3xl sm:text-4xl font-black text-white">{stat.number}</div>
                <div className="text-primary-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                About This Service
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-dark-900 leading-[1.1] tracking-tight mb-6">
                {service.overviewTitle}
              </h2>
              <p className="text-dark-500 text-base sm:text-lg leading-relaxed mb-6">
                {service.overviewText1}
              </p>
              <p className="text-dark-500 text-base leading-relaxed mb-8">
                {service.overviewText2}
              </p>
              <ul className="space-y-3">
                {service.overviewBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-dark-700 text-sm font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={service.overviewImage}
                  alt={service.overviewTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-dark-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-dark-900 text-lg">100%</div>
                    <div className="text-dark-500 text-xs">Satisfaction Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Full Scope
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-dark-900 leading-[1.1] tracking-tight">
              What's Included
            </h2>
            <p className="text-dark-500 mt-4 text-base sm:text-lg">
              Every project includes these services — no hidden fees, no surprises.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.included.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-dark-100 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon name={item.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-dark-900 text-base mb-2">{item.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 sm:py-28 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Our Process
            </h2>
            <p className="text-dark-400 mt-4 text-base sm:text-lg">
              A structured approach that guarantees quality at every step.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {service.process.map((step, i) => (
              <div key={i} className="relative">
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary-600/60 to-transparent z-0" style={{ width: 'calc(100% - 4rem)', left: '3rem' }} />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary-900/50">
                    <span className="text-white font-black text-xl">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      {service.beforeAfterPairs && (
        <section className="py-20 sm:py-28 bg-dark-950" style={{ backgroundColor: '#060c12' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-primary-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Real Results
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
                Before &amp; After
              </h2>
              <p className="text-dark-400 mt-4 text-base sm:text-lg">
                Real projects. Real transformations. See what we deliver.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
              {service.beforeAfterPairs.map((pair, i) => (
                <div key={i} className="relative">
                  {/* Arrow divider badge */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center shadow-xl shadow-primary-900/60 ring-4 ring-black/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* BEFORE */}
                    <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4' }}>
                      <img
                        src={pair.before}
                        alt={`Project ${i + 1} before`}
                        className="w-full h-full object-cover grayscale brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 bg-dark-900/80 text-white/90 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                        Before
                      </span>
                    </div>

                    {/* AFTER */}
                    <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4' }}>
                      <img
                        src={pair.after}
                        alt={`Project ${i + 1} after`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 bg-primary-600/90 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur-sm">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BENEFITS ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                {service.galleryImages.map((img, i) => (
                  <div key={i} className={`rounded-2xl overflow-hidden shadow-lg ${i === 0 ? 'col-span-2 aspect-[16/7]' : 'aspect-square'}`}>
                    <img src={img} alt={`${service.title} project ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-dark-900 leading-[1.1] tracking-tight mb-6">
                {service.benefitsTitle}
              </h2>
              <p className="text-dark-500 text-base sm:text-lg leading-relaxed mb-10">
                {service.benefitsText}
              </p>
              <div className="space-y-5">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon} className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 text-sm mb-1">{benefit.title}</h4>
                      <p className="text-dark-500 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MATERIALS ── */}
      <section className="py-16 bg-dark-50 border-y border-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Standards & Materials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-dark-900">
              {service.materialsTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.materials.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-dark-100 text-center shadow-sm">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={m.icon} className="w-5 h-5 text-primary-600" />
                </div>
                <h4 className="font-bold text-dark-900 text-sm mb-1">{m.name}</h4>
                <p className="text-dark-500 text-xs leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIREPLACE TILE SPOTLIGHT ── */}
      {service.chimeneaSteps && (
        <section className="py-20 sm:py-28" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a2e1a 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-primary-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Featured Project
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
                Fireplace Tile
                <span className="block text-primary-400">Transformation</span>
              </h2>
              <p className="text-dark-400 mt-4 text-base sm:text-lg">
                Watch a bare fireplace become a stunning tile feature wall — from raw surface to finished masterpiece.
              </p>
            </div>

            {/* 4-step process grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {service.chimeneaSteps.map((step, i) => (
                <div key={i} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Step badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary-600 text-white text-xs font-black px-2.5 py-1 rounded-lg">
                        {step.label}
                      </span>
                    </div>
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-xs font-semibold leading-snug">{step.caption}</p>
                    </div>
                  </div>
                  {/* Arrow connector (not on last) */}
                  {i < service.chimeneaSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-primary-600 rounded-full items-center justify-center shadow-xl ring-2 ring-primary-400">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-12 text-center">
              <p className="text-dark-400 text-sm mb-5">Want a tile feature wall like this in your home?</p>
              <a
                href="tel:+12704218169"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for a Free Quote
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-dark-900 leading-[1.1] tracking-tight">
              FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-dark-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-dark-50 transition-colors"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-bold text-dark-900 text-sm sm:text-base">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 bg-primary-100' : ''}`}>
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 text-dark-500 text-sm leading-relaxed bg-dark-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation estimate for your {service.title.toLowerCase()} project. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12704218169"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (270) 421-8169
            </a>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-800/50 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-primary-800 transition-all"
            >
              Send a Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
