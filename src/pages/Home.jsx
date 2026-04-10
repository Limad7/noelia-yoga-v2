import { Link } from 'react-router-dom'
import { MessageSquare, Users, Yoga, Heart } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lavender-50 via-white to-sage-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-200 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-200 rounded-full blur-3xl animate-float delay-300"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-up">
            <img
              src="/logocompletonew.png"
              alt="Noelia Yoga Logo"
              className="h-24 mx-auto mb-6 drop-shadow-lg"
              onError={(e) => {
                e.target.onerror = null
                e.target.style.display = 'none'
              }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-lavender-900 mb-6 animate-fade-up delay-100">
            Encuentra tu equilibrio interior
          </h1>

          <p className="text-xl md:text-2xl text-sage-800 mb-8 animate-fade-up delay-200">
            Yoga y mindfulness en un espacio seguro para tu bienestar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lavender-600 text-white rounded-full font-semibold hover:bg-lavender-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageSquare size={20} />
              Reserva tu primera clase
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-lavender-700 border-2 border-lavender-300 rounded-full font-semibold hover:bg-lavender-50 transition-all shadow-md hover:shadow-lg"
            >
              <Yoga size={20} />
              Conoce más
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-lavender-600 mb-2">10+</div>
              <div className="text-sm text-sage-700">Años experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lavender-600 mb-2">500+</div>
              <div className="text-sm text-sage-700">Alumnos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lavender-600 mb-2">∞</div>
              <div className="text-sm text-sage-700">Momentos de paz</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-4">
              ¿Por qué elegir Noelia Yoga?
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Más que clases, encontraremos la conexión entre cuerpo y mente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-lavender-50 rounded-3xl hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-lavender-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-lavender-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-lavender-900 mb-3">
                Personalizado
              </h3>
              <p className="text-sage-700">
                Cada sesión se adapta a tus necesidades, nivel y objetivos
              </p>
            </div>

            <div className="text-center p-8 bg-sage-50 rounded-3xl hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-sage-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Yoga className="text-sage-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-sage-900 mb-3">
                Variedad de estilos
              </h3>
              <p className="text-sage-700">
                Desde Hatha hasta Vinyasa y mindfulness
              </p>
            </div>

            <div className="text-center p-8 bg-rose-50 rounded-3xl hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-rose-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-rose-900 mb-3">
                Acompañamiento
              </h3>
              <p className="text-rose-700">
                Eres parte de una comunidad que crece y evoluciona contigo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-lavender-100 to-sage-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-6">
            ¿Listo para comenzar tu camino?
          </h2>
          <p className="text-xl text-sage-800 mb-8">
            Reserva tu primera sesión sin compromiso y descubre el poder del yoga en tu vida
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-lavender-600 text-white rounded-full font-bold text-lg hover:bg-lavender-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <MessageSquare size={24} />
            Reserva tu clase ahora
          </Link>
        </div>
      </section>
    </>
  )
}
