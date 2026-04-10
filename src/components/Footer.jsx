import { Link } from 'react-router-dom'
import { Heart, Flower2, Instagram, Mail, Phone } from 'lucide-react'
import logo from '../assets/LogoNewTransparente.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sage-800 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Noelia Yoga" className="h-10 brightness-0 invert opacity-80" />
              <span className="font-display text-xl font-semibold text-white">
                Noelia <span className="text-lavender-300">Yoga</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Yoga, Pilates y Mindfulness en Leganés y zona sur de Madrid.
              Tu camino hacia el bienestar empieza aquí.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-white">Enlaces</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="text-sm text-white/60 hover:text-lavender-300 transition-colors">Sobre mí</a>
              <a href="#services" className="text-sm text-white/60 hover:text-lavender-300 transition-colors">Servicios</a>
              <a href="#gallery" className="text-sm text-white/60 hover:text-lavender-300 transition-colors">Galería</a>
              <a href="#contact" className="text-sm text-white/60 hover:text-lavender-300 transition-colors">Contacto</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-2">
              <a href="mailto:japmantkaur@gmail.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-lavender-300 transition-colors">
                <Mail size={14} /> japmantkaur@gmail.com
              </a>
              <a href="tel:+34633073841" className="flex items-center gap-2 text-sm text-white/60 hover:text-lavender-300 transition-colors">
                <Phone size={14} /> +34 633 07 38 41
              </a>
              <a href="https://www.instagram.com/japmant" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-lavender-300 transition-colors">
                <Instagram size={14} /> @japmant
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <div className="text-xs text-white/40 flex items-center gap-1">
            © {currentYear} Noelia Yoga. Hecho con <Heart size={12} className="text-rose-400 fill-rose-400" /> y <Flower2 size={12} className="text-lavender-400" />
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link to="/aviso-legal" className="hover:text-white/70 transition-colors">Aviso Legal</Link>
            <Link to="/privacidad" className="hover:text-white/70 transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-white/70 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
