import { Link } from 'react-router-dom'
import { Mountain, ArrowLeft, TreePine, Sun, Moon, Heart, Sparkles, Check, Phone, Calendar, MapPin, Star } from 'lucide-react'
import retirosImg from '../assets/hero-retiros.png'

const experiencias = [
  { icon: TreePine, title: 'Conexión con la naturaleza', desc: 'Entornos naturales cuidadosamente seleccionados para potenciar la desconexión y la paz interior.' },
  { icon: Sun, title: 'Práctica intensiva', desc: 'Múltiples sesiones diarias de yoga, meditación y pranayama para profundizar tu práctica.' },
  { icon: Heart, title: 'Comunidad y vínculo', desc: 'Comparte el espacio con personas afines en un ambiente cálido, seguro y de respeto mutuo.' },
  { icon: Moon, title: 'Desconexión real', desc: 'Un espacio sin pantallas ni prisas para reconnectar contigo misma.' },
]

const tiposRetiro = [
  {
    title: 'Retiros de fin de semana',
    desc: 'Inmersión de 2-3 días en entornos naturales cercanos a Madrid. Ideal para desconectar sin necesidad de grandes desplazamientos.',
    incluye: ['2 noches de alojamiento', 'Todas las comidas saludables', '4-6 sesiones de yoga', 'Talleres de meditación', 'Materiales y regalos sorpresa', 'Pequeños grupos (8-12 personas)'],
    precio: '180-350€',
  },
  {
    title: 'Talleres temáticos',
    desc: 'Jornadas de 3-4 horas centradas en un aspecto concreto: inversiones, pranayama, yoga restaurativo, filosofía del yoga.',
    incluye: ['Sesión teórico-práctica', 'Material didáctico', 'Infusión y snack saludable', 'Práctica guiada paso a paso', 'Espacio para dudas'],
    precio: '35-60€',
  },
  {
    title: 'Retiros inmersivos',
    desc: 'Experiencias de 4-7 días en ubicaciones especiales. La inmersión total para transformar tu práctica y tu bienestar.',
    incluye: ['Alojamiento completo', 'Pensión completa saludable', '2 sesiones diarias de yoga', 'Talleres especializados', 'Actividades en naturaleza', 'Acompañamiento personalizado'],
    precio: '400-800€',
  },
]

const proximos = [
  { fecha: 'Consultar', titulo: 'Retiro de Primavera', lugar: 'Sierra de Madrid', tipo: 'Fin de semana' },
  { fecha: 'Consultar', titulo: 'Taller de Inversiones', lugar: 'Leganés', tipo: 'Taller 4h' },
  { fecha: 'Consultar', titulo: 'Retiro de Verano', lugar: 'Por confirmar', tipo: '3 días' },
]

export default function Retiros() {
  return (
    <div className="min-h-screen bg-texture-rose">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-lavender-50/30 to-sage-50 bg-texture-rose" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-lavender-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8 font-medium transition-colors">
            <ArrowLeft size={18} /> Volver al inicio
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium">
                <Mountain size={16} /> Retiros y Talleres
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-sage-800 leading-tight">
                Desconecta para{' '}
                <span className="gradient-text">reconectar</span>
              </h1>
              <p className="text-lg text-sage-600 leading-relaxed max-w-xl">
                Experiencias transformadoras en entornos inspiradores. Retiros de fin de semana,
                talleres temáticos y jornadas de inmersión para profundizar en tu práctica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+34633073841" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-400 to-lavender-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  <Phone size={20} /> Información y reservas
                </a>
                <a href="https://www.instagram.com/japmant" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm text-sage-700 font-semibold rounded-2xl border border-sage-200 hover:bg-white hover:shadow-lg transition-all">
                  <Sparkles size={20} /> Sígueme en Instagram
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-100 to-lavender-100 rounded-3xl rotate-3 opacity-60" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={retirosImg} alt="Retiros y talleres de yoga" className="w-full h-72 sm:h-80 lg:h-96 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencias */}
      <section className="py-20 bg-texture-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
              Qué hace especiales mis <span className="gradient-text">retiros</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiencias.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-rose-100/50">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-lavender-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-sage-800 mb-2">{title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos */}
      <section className="py-20 bg-texture-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
              Próximas <span className="gradient-text">fechas</span>
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto text-lg">
              Consulta la agenda y reserva tu plaza. Los grupos son reducidos para garantizar la calidad.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {proximos.map(({ fecha, titulo, lugar, tipo }) => (
              <div key={titulo} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-lavender-100/50">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-lavender-500" />
                  <span className="text-sm font-medium text-lavender-600">{fecha}</span>
                  <span className="ml-auto text-xs px-2 py-0.5 bg-rose-50 text-rose-600 rounded-full">{tipo}</span>
                </div>
                <h3 className="font-display font-bold text-sage-800 text-lg mb-2">{titulo}</h3>
                <div className="flex items-center gap-1.5 text-sm text-sage-500">
                  <MapPin size={14} />
                  {lugar}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sage-400 text-sm mt-8">
            Las fechas se actualizan regularmente. Sígueme en <a href="https://www.instagram.com/japmant" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:underline">Instagram @japmant</a> para no perderte ninguna.
          </p>
        </div>
      </section>

      {/* Tipos */}
      <section className="py-20 bg-texture-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
              Tipos de <span className="gradient-text">experiencia</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {tiposRetiro.map(({ title, desc, incluye, precio }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100/50 flex flex-col">
                <h3 className="font-display font-bold text-sage-800 text-lg mb-2">{title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="space-y-3 flex-1">
                  {incluye.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={14} className="text-rose-500 shrink-0" />
                      <span className="text-sm text-sage-600">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-sage-100">
                  <div className="text-2xl font-display font-bold text-lavender-700">Desde {precio}</div>
                  <div className="text-xs text-sage-400 mt-1">Precio por persona</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-rose-100 to-lavender-100 bg-texture-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
            ¿Lista para vivir la experiencia?
          </h2>
          <p className="text-lg text-sage-600 mb-8">
            Las plazas son limitadas para garantizar la mejor atención. Reserva con antelación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/34633073841" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-400 to-lavender-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <Phone size={20} /> WhatsApp: 633 07 38 41
            </a>
            <a href="mailto:japmantkaur@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-600 font-semibold rounded-2xl border-2 border-rose-300 hover:bg-rose-50 hover:shadow-lg transition-all">
              Escríbeme un email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
