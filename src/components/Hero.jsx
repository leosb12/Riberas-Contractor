import { HiPhone, HiShieldCheck, HiClipboardList, HiStar } from 'react-icons/hi'
import { useState, useEffect, useRef } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* Floating particle component */
function Particle({ delay, size, x, y, duration }) {
  return (
    <div
      className="absolute rounded-full bg-white/20 animate-particle"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { value: 200, suffix: '+', label: 'Projects Completed' },
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
  ]

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 6 + 6,
  }))

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ===== CINEMATIC BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src="/banner.webp"
            alt="Riberas Contractor"
            className={`w-full h-full object-cover transition-all duration-[2s] ${loaded ? 'scale-100 blur-0' : 'scale-110 blur-sm'}`}
          />
        </div>

        {/* Multi-layer cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/50 to-dark-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 via-transparent to-dark-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />

        {/* Animated vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />

        {/* Film grain effect */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        {/* Floating particles */}
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}

        {/* Animated light streaks */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-light-streak" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-400/10 to-transparent animate-light-streak" style={{ animationDelay: '3s' }} />
      </div>

      {/* ===== DECORATIVE ELEMENTS ===== */}
      {/* Geometric accent lines */}
      <div className={`absolute top-20 left-8 sm:left-16 w-px h-32 bg-gradient-to-b from-primary-400/60 to-transparent transition-all duration-[2s] delay-[1.5s] ${loaded ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{ transformOrigin: 'top' }} />
      <div className={`absolute top-28 left-8 sm:left-16 w-8 h-px bg-gradient-to-r from-primary-400/60 to-transparent transition-all duration-[2s] delay-[2s] ${loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transformOrigin: 'left' }} />
      <div className={`absolute bottom-32 right-8 sm:right-16 w-px h-24 bg-gradient-to-t from-primary-400/40 to-transparent transition-all duration-[2s] delay-[2.2s] ${loaded ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{ transformOrigin: 'bottom' }} />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 sm:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column — Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Animated badge */}
            <div className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2.5 mb-8 hover:bg-white/15 transition-colors duration-500 group">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-primary-400" />
                </span>
                <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                  Bowling Green, Kentucky
                </span>
              </div>
            </div>

            {/* Main heading with reveal animation */}
            <div className="overflow-hidden mb-6 sm:mb-8">
              <h1 className={`transition-all duration-[1.2s] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                  We Build
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mt-1 sm:mt-2">
                  <span className="relative">
                    <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-emerald-300 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                      Your Vision
                    </span>
                    {/* Animated underline */}
                    <span className={`absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-primary-400 to-emerald-400 transition-all duration-[1.5s] delay-[1.2s] ease-out rounded-full ${loaded ? 'w-full' : 'w-0'}`} />
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtext with fade */}
            <div className={`transition-all duration-1000 delay-[700ms] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
                Professional remodeling, painting, flooring & drywall.
                <span className="text-white font-medium block mt-1">Craftsmanship that speaks for itself.</span>
              </p>
            </div>

            {/* CTA buttons */}
            <div className={`transition-all duration-1000 delay-[900ms] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 sm:mb-14">
                {/* Primary CTA */}
                <a href="#contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl">
                  {/* Animated border glow */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-400 via-emerald-400 to-primary-400 bg-[length:200%_auto] animate-gradient-x rounded-2xl" />
                  <span className="absolute inset-[2px] bg-gradient-to-r from-primary-600 to-primary-700 rounded-[14px] group-hover:from-primary-700 group-hover:to-primary-800 transition-all duration-300" />
                  <span className="relative flex items-center gap-2 text-white font-bold text-base sm:text-lg py-4 px-10 sm:px-12">
                    Get Free Estimate
                    <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>

                {/* Phone CTA */}
                <a href="tel:+12704218169" className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-xl text-white font-bold text-base sm:text-lg py-4 px-10 sm:px-12 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300">
                  <HiPhone className="text-primary-400 text-xl mr-2.5 group-hover:animate-wiggle" />
                  (270) 421-8169
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className={`transition-all duration-1000 delay-[1100ms] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {[
                  { Icon: HiShieldCheck, text: 'Licensed & Insured' },
                  { Icon: HiClipboardList, text: 'Free Estimates' },
                  { Icon: HiStar, text: '100% Satisfaction' },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-white/60 text-xs sm:text-sm font-medium">
                    <badge.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Stats cards (glass morphism) */}
          <div className={`flex-shrink-0 w-full lg:w-auto transition-all duration-[1.4s] delay-[600ms] ease-out ${loaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-12 translate-y-8'}`}>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 text-center lg:text-left hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-emerald-500/0 group-hover:from-primary-500/10 group-hover:to-emerald-500/5 transition-all duration-500" />
                  <div className="relative">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] mt-1 lg:mt-2">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <a
        href="#services"
        className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex sm:flex-col items-center gap-2 text-white/40 hover:text-primary-400 transition-all duration-500 group ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1.6s' }}
      >
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 group-hover:border-primary-400 transition-colors">
          <div className="w-1 h-2.5 bg-current rounded-full animate-scroll-down" />
        </div>
      </a>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[5]" />
    </section>
  )
}
