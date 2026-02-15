import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ onAgendarClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Teleconsulta', href: '#teleconsulta' },
    { label: 'Paquetes', href: '#paquetes' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Laboratorio', href: '#laboratorio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Visítanos', href: '#visitanos' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#" className="navbar__logo">
          <svg viewBox="0 0 40 40" className="navbar__logo-icon">
            <circle cx="20" cy="20" r="18" fill="#C2185B"/>
            <rect x="16" y="9" width="8" height="22" rx="2" fill="white"/>
            <rect x="9" y="16" width="22" height="8" rx="2" fill="white"/>
          </svg>
          <span className="navbar__logo-text">
            <span className="navbar__logo-medi">médi</span>
            <span className="navbar__logo-kal">kal</span>
          </span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__link-cta-mobile">
            <button className="btn-primary" onClick={() => { setMenuOpen(false); onAgendarClick(); }}>
              Agendar cita
            </button>
          </li>
          <li className="navbar__link-cta-mobile">
            <button className="btn-outline">Iniciar sesión</button>
          </li>
        </ul>

        <div className="navbar__actions">
          <button className="btn-outline navbar__btn" onClick={onAgendarClick}>
            Agendar cita
          </button>
          <button className="btn-primary navbar__btn">
            Iniciar sesión
          </button>
        </div>

        <button 
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
