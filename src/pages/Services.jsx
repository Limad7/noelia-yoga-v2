import { MessageSquare, Briefcase, Mountain, ArrowRight, Award, Heart } from 'lucide-react'

export default function Services() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-lavender-50 via-white to-sage-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-4">
              Mis servicios
            </h1>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Cada servicio está diseñado para adaptarse a tus necesidades y objetivos
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {/* 1. Clases Particulares */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img
                    src="/yogaparticulares.png"
                    alt="Clases particulares de yoga"
                    className="w-full h-full object-cover min-h-[400px]"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute top-6 left-6 bg-lavender-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                    1:1 Personalizado
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-lavender-100 rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="text-lavender-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-lavender-900 mb-4">
                    Clases Particulares
                  </h2>
                  <p className="text-lg text-sage-700 mb-6 leading-relaxed">
                    Sesiones 1:1 personalizadas en domicilio o espacio propio. Cada sesión se adapta a tu nivel, objetivos y necesidades específicas. Ideal si buscas atención individualizada o tienes restricciones físicas.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sage-800">
                      <Heart className="text-lavender-600 flex-shrink-0" size={20} />
                      Adaptadas a tu nivel y objetivos
                    </li>
                    <li className="flex items-center gap-3 text-sage-800">
                      <Heart className="text-lavender-600 flex-shrink-0" size={20} />
                      Domicilio o espacio propio
                    </li>
                    <li className="flex items-center gap-3 text-sage-800">
                      <Heart className="text-lavender-600 flex-shrink-0" size={20} />
                      Atención individualizada completa
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-lavender-600 text-white rounded-full font-semibold hover:bg-lavender-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Consultar disponibilidad
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Yoga para Empresas */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                    <Briefcase className="text-sage-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-sage-900 mb-4">
                    Yoga para Empresas
                  </h2>
                  <p className="text-lg text-sage-700 mb-6 leading-relaxed">
                    Bienestar corporativo en oficinas. Clases adaptadas a empresas en Leganés, Getafe y Madrid Sur. Mejora la concentración, reduce el estrés y crea un ambiente más saludable en tu equipo.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sage-800">
                      <Award className="text-sage-600 flex-shrink-0" size={20} />
                      Clases en tu oficina
                    </li>
                    <li className="flex items-center gap-3 text-sage-800">
                      <Award className="text-sage-600 flex-shrink-0" size={20} />
                      Horarios flexibles
                    </li>
                    <li className="flex items-center gap-3 text-sage-800">
                      <Award className="text-sage-600 flex-shrink-0" size={20} />
                      Paquetes especiales para empresas
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-sage-600 text-white rounded-full font-semibold hover:bg-sage-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Solicitar propuesta
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="relative order-1 md:order-2">
                  <img
                    src="/yogaempresas.jpg"
                    alt="Yoga para empresas en oficina"
                    className="w-full h-full object-cover min-h-[400px]"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute top-6 left-6 bg-sage-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                    Corporate
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Retiros y Talleres */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img
                    src="/retiros-talleres.jpg"
                    alt="Retiro y talleres de yoga"
                    className="w-full h-full object-cover min-h-[400px]"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute top-6 left-6 bg-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                    Immersiones
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
                    <Mountain className="text-rose-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-rose-900 mb-4">
                    Retiros y Talleres
                  </h2>
                  <p className="text-lg text-sage-700 mb-6 leading-relaxed">
                    Experiencias inmersivas de fin de semana. Talleres intensivos, retiros de mindfulness y encuentros de práctica. Un espacio apartado para profundizar en tu práctica y conectar con tu esencia.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sage-800">
                      <Mountain className="text-rose-600 flex-shrink-0" size={20} />
                      Retiros de fin de semana
                    </li>
                    <li className="flex items-center gap-3 text-sage-800">
                      <Mountain className="text-rose-600 flex-shrink-0" size={20} />
                      Talleres intensivos
                    </li>
                    <li className="flex items-center gap-3 text-sage-800">
                      <Mountain className="text-rose-600 flex-shrink-0" size={20} />
                      Espacios especiales y naturales
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Ver próximos eventos
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose These Services */}
          <div className="mt-20 bg-gradient-to-r from-lavender-100 to-sage-100 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-lavender-900 mb-8 text-center">
              ¿Qué ofrecen todos mis servicios?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-lavender-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-lavender-600" />
                </div>
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  Estilos variados
                </h3>
                <p className="text-sage-700">
                  Desde Hatha hasta Vinyasa y mindfulness
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} className="text-sage-600" />
                </div>
                <h3 className="text-xl font-bold text-sage-900 mb-2">
                  Enfoque adaptativo
                </h3>
                <p className="text-sage-700">
                  Cada sesión se adapta a tus necesidades
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={32} className="text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-rose-900 mb-2">
                  Atención constante
                </h3>
                <p className="text-sage-700">
                  Siempre disponible para resolver dudas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
