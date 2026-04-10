import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Flower2 } from 'lucide-react'
import logo from '../assets/LogoNewTransparente.png'

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    if (window.location.hash !== '#/') {
      window.location.hash = '/'
      setTimeout(() => {
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-lavender-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Noelia Yoga" className="h-9 md:h-11 transition-transform group-hover:scale-105" />
            <span className="font-display text-xl md:text-2xl font-semibold text-lavender-800">
              Noelia <span className="text-sage-600">Yoga</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-sage-700 hover:text-lavender-700 rounded-full hover:bg-lavender-50 transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-sage-700 hover:bg-lavender-50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-lavender-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-sage-700 hover:text-lavender-700 hover:bg-lavender-50 rounded-lg transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
