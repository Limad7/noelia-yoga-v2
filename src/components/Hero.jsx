import { ArrowDown, Sparkles } from 'lucide-react'
import logo from '../assets/logocompletonew.png'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-50 via-rose-50 to-sage-50" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-lavender-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-lavender-200 text-lavender-700 text-sm font-medium animate-fade-in">
              <Sparkles size={16} />
              <span>Yoga · Pilates · Mindfulness</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight animate-fade-in-up">
              Encuentra tu{' '}
              <span className="gradient-text">equilibrio</span>
              <br />
              interior
            </h1>

            <p className="text-lg sm:text-xl text-sage-600 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animate-delay-200 opacity-0">
              Con más de 10 años de experiencia, acompaño tu camino hacia el bienestar
              a través del yoga, pilates y mindfulness en Leganés y zona sur de Madrid.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-300 opacity-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold rounded-2xl shadow-lg shadow-lavender-200 hover:shadow-xl hover:shadow-lavender-300 hover:-translate-y-1 transition-all duration-300"
              >
                Reserva tu clase
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/70 backdrop-blur-sm text-sage-700 font-semibold rounded-2xl border border-sage-200 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                Ver servicios
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4 animate-fade-in-up animate-delay-400 opacity-0">
              <div>
                <div className="text-3xl font-display font-bold text-lavender-700">10+</div>
                <div className="text-sm text-sage-500">Años de experiencia</div>
              </div>
              <div className="w-px h-12 bg-sage-200" />
              <div>
                <div className="text-3xl font-display font-bold text-lavender-700">500+</div>
                <div className="text-sm text-sage-500">Alumnos</div>
              </div>
              <div className="w-px h-12 bg-sage-200" />
              <div>
                <div className="text-3xl font-display font-bold text-lavender-700">8+</div>
                <div className="text-sm text-sage-500">Certificaciones</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative animate-scale-in animate-delay-200 opacity-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-lavender-300 to-sage-300 rounded-[2rem] rotate-6 opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-lavender-200 rounded-[2rem] -rotate-3 opacity-60" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src={logo}
                  alt="Noelia Yoga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-sage-400 hover:text-lavender-500 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
