import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoIcon}>RC</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Riberas</span>
            <span className={styles.logoSub}>Contractor</span>
          </div>
        </a>

        <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.navCTAMobile}>
            <a href="tel:+12704218169" className="btn-primary" onClick={() => setIsOpen(false)}>
              <Phone size={16} />
              Contact Us
            </a>
          </li>
        </ul>

        <a href="tel:+12704218169" className={`btn-primary ${styles.navCTA}`}>
          <Phone size={16} />
          Contact Us
        </a>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
