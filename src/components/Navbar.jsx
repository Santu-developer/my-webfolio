import { useLocation, useNavigate } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import LogoMark from './LogoMark'
import { useCallback, useEffect, useState } from 'react'

const ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const onNavClick = (id) => (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
    } else {
      scrollTo(id)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky-top">
      <nav className={`navbar navbar-expand-lg glass-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container">
          <a href="#home" onClick={onNavClick('home')} className="navbar-brand d-flex align-items-center gap-2">
            <LogoMark size={22} />
            <span className="d-flex flex-column lh-1">
              <strong className="fw-bold">Santosh Patidar</strong>
              <small className="text-muted d-none d-md-block">Java Full Stack Developer</small>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
              {ITEMS.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    className="nav-link"
                    href={`#${item.id}`}
                    onClick={onNavClick(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a href="/cv" className="btn btn-outline-secondary btn-sm ms-lg-2" title="View CV">
                  CV
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={onNavClick('contact')}
                  className="btn btn-primary btn-sm ms-lg-2"
                  title="Hire me"
                >
                  Hire me
                </a>
              </li>
              <li className="nav-item ms-lg-2">
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
