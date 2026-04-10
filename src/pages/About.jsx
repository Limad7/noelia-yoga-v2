import { Award, Target, Users, Clock } from 'lucide-react'

export default function About() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-lavender-50 via-white to-sage-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-4">
              Sobre mí
            </h1>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Más de una década transformando vidas a través del yoga y el bienestar
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-lavender-900">
                Mi historia
              </h2>
              <p className="text-lg text-sage-800 leading-relaxed">
                Hace más de 10 años, descubrí el poder del yoga y se convirtió en mi misión compartir ese conocimiento con otras personas. Mi camino comenzó con una profunda curiosidad por la conexión entre cuerpo y mente.
              </p>
              <p className="text-lg text-sage-800 leading-relaxed">
                Tras años de práctica intensiva y formación continua, hoy soy instructora certificada en múltiples disciplinas, listas para guiarte en tu propia búsqueda de equilibrio.
              </p>
              <p className="text-lg text-sage-800 leading-relaxed">
                Cada persona que pasa por mis clases tiene una historia única, y mi enfoque siempre ha sido adaptar las enseñanzas a tus necesidades específicas.
              </p>
            </div>

            <div className="relative">
              <img
                src="/YogaMeditando.jpg"
                alt="Noelia Yoga - Momento de meditación"
                className="rounded-3xl shadow-2xl w-full object-cover"
                style={{ height: '500px' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-lavender-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-lavender-900 mb-8 text-center">
              Mi formación
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <Award className="text-lavender-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  Pilates
                </h3>
                <p className="text-sage-700">
                  Formación certificada en Pilates, con enfoque en corrección postural y rehabilitación
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <Award className="text-lavender-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  Yoga Oncológico
                </h3>
                <p className="text-sage-700">
                  Especialización en prácticas adaptadas a necesidades específicas de salud
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <Award className="text-lavender-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  Hatha Yoga
                </h3>
                <p className="text-sage-700">
                  Fundamentos sólidos del yoga clásico con enfoque en estabilidad y respiración
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <Award className="text-lavender-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  Kundalini Yoga
                </h3>
                <p className="text-sage-700">
                  Prácticas energéticas para despertar la conciencia interior y vibración personal
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <Award className="text-lavender-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  Vinyasa Yoga
                </h3>
                <p className="text-sage-700">
                  Flujo dinámico de posturas conectado con la respiración para mayor flexibilidad
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <Award className="text-lavender-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  Yoga Nidra y Yin
                </h3>
                <p className="text-sage-700">
                  Prácticas profundas de relajación para restablecer equilibrio mental y físico
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-lavender-600 to-sage-600 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lavender-100">Años de práctica</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lavender-100">Alumnos satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-lavender-100">Clases impartidas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-lavender-100">Momentos de paz</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
