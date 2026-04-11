import { Link } from 'react-router-dom'
import { Building2, ArrowLeft, TrendingDown, Brain, Users, Shield, Sparkles, Check, Phone, Heart, Briefcase, Clock } from 'lucide-react'
import empresasImg from '../assets/yogaempresas.jpg'

const beneficios = [
  { icon: TrendingDown, title: 'Reducción del estrés', desc: 'Disminuye los niveles de cortisol y ansiedad de tu equipo con sesiones regulares de yoga y respiración consciente.' },
  { icon: Brain, title: 'Mayor productividad', desc: 'Empleados más enfocados, creativos y con mejor capacidad de concentración tras las sesiones de mindfulness.' },
  { icon: Users, title: 'Cohesión de equipo', desc: 'Actividad grupal que fortalece los vínculos entre compañeros y mejora el clima laboral.' },
  { icon: Shield, title: 'Menos bajas laborales', desc: 'Previene lesiones por estrés, mejora la postura en el puesto de trabajo y reduce el absentismo.' },
]

const modalidades = [
  { title: 'Sesiones semanales', desc: 'Clases de 45-60 min, 1 o 2 veces por semana, adaptadas al espacio disponible en tu oficina.', incluye: ['Planificación personalizada', 'Material incluido (mantas, blocks)', 'Seguimiento de asistencia', 'Informes trimestrales de bienestar'] },
  { title: 'Workshops intensivos', desc: 'Talleres de 2-3 horas centrados en técnicas específicas: gestión del estrés, ergonomía, meditación.', incluye: ['Formato intensivo', 'Material didáctico', 'Práctica guiada', 'Técnicas aplicables al día a día'] },
  { title: 'Programas de bienestar', desc: 'Programa integral de 8-12 semanas combinando yoga, mindfulness y coaching de bienestar.', incluye: ['Evaluación inicial y final', 'Sesiones grupales e individuales', 'Recursos digitales', 'Certificación de participación'] },
]

const datos = [
  { cifra: '76%', desc: 'de empleados reportan menos estrés tras programas de yoga corporativo' },
  { cifra: '32%', desc: 'de reducción en bajas por estrés en empresas con programas de bienestar' },
  { cifra: '85%', desc: 'de participantes recomendaría yoga corporativo a otros compañeros' },
]

export default function Empresas() {
  return (
    <div className="min-h-screen bg-texture-sage">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-lavender-50/30 to-white bg-texture-sage" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-lavender-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sage-700 hover:text-sage-800 mb-8 font-medium transition-colors">
            <ArrowLeft size={18} /> Volver al inicio
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium">
                <Building2 size={16} /> Yoga para Empresas
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-sage-800 leading-tight">
                Bienestar corporativo que{' '}
                <span className="gradient-text">transforma</span>
              </h1>
              <p className="text-lg text-sage-600 leading-relaxed max-w-xl">
                Programas de yoga y mindfulness diseñados para mejorar la salud física y mental
                de tu equipo. Sesiones en tu oficina en Leganés, Getafe y Madrid Sur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+34633073841" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  <Phone size={20} /> Solicitar presupuesto
                </a>
                <a href="mailto:japmantkaur@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm text-sage-700 font-semibold rounded-2xl border border-sage-200 hover:bg-white hover:shadow-lg transition-all">
                  <Briefcase size={20} /> Info para empresas
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage-100 to-lavender-100 rounded-3xl -rotate-3 opacity-60" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={empresasImg} alt="Yoga para empresas" className="w-full h-72 sm:h-80 lg:h-96 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datos */}
      <section className="py-16 bg-texture-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {datos.map(({ cifra, desc }) => (
              <div key={cifra} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-4xl font-display font-bold text-sage-700 mb-2">{cifra}</div>
                <p className="text-sage-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-texture-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
              Beneficios para tu <span className="gradient-text">organización</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-sage-100/50">
                <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-sage-800 mb-2">{title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 bg-texture-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
              Modalidades <span className="gradient-text">disponibles</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {modalidades.map(({ title, desc, incluye }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-sage-100/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-lavender-400 to-sage-400 rounded-lg flex items-center justify-center text-white">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="font-display font-bold text-sage-800 text-lg">{title}</h3>
                </div>
                <p className="text-sage-600 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-sage-500 uppercase tracking-wide">Incluye</div>
                  {incluye.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={14} className="text-sage-500 shrink-0" />
                      <span className="text-sm text-sage-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sage-400 text-sm mt-8">
            Todos los precios son a medida según número de participantes, frecuencia y ubicación. Presupuesto sin compromiso.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sage-100 to-lavender-100 bg-texture-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
            Invierte en el bienestar de tu equipo
          </h2>
          <p className="text-lg text-sage-600 mb-8">
            Solicita una sesión de prueba gratuita y comprueba los beneficios del yoga corporativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+34633073841" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <Phone size={20} /> Lláamé: 633 07 38 41
            </a>
            <a href="mailto:japmantkaur@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sage-700 font-semibold rounded-2xl border-2 border-sage-300 hover:bg-sage-50 hover:shadow-lg transition-all">
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
