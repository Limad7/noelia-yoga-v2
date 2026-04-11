import { Link } from 'react-router-dom'
import { Star, Clock, MapPin, Heart, ArrowLeft, Check, Sparkles, Users, Phone } from 'lucide-react'
import particularesImg from '../assets/hero-particulares.png'

const beneficios = [
  { icon: Heart, title: 'Atención 100% personalizada', desc: 'Cada sesión se diseña pensando en ti, en tu cuerpo y en tus objetivos.' },
  { icon: Clock, title: 'Horarios flexibles', desc: 'Eliges el día y la hora que mejor se adapte a tu rutina.' },
  { icon: MapPin, title: 'Domicilio o espacio propio', desc: 'Puedo desplazarme a tu casa o recibirte en mi estudio en Leganés.' },
  { icon: Sparkles, title: 'Todos los niveles', desc: 'Desde principiantes hasta avanzados, cada práctica se adapta a tu nivel.' },
]

const tipos = [
  { title: 'Sesión individual', desc: 'Clase privada de 60-75 min enfocada en tus necesidades específicas.', precio: '45-60€' },
  { title: 'Bono 4 sesiones', desc: 'Pack de 4 clases con ahorro respecto a la sesión suelta.', precio: '160-200€' },
  { title: 'Bono 8 sesiones', desc: 'Pack mensual con el mejor precio por sesión.', precio: '280-350€' },
  { title: 'Clase de pareja', desc: 'Sesión para 2 personas con práctica adaptada a ambos.', precio: '35-45€/persona' },
]

const estilos = ['Hatha Yoga', 'Vinyasa', 'Kundalini', 'Yin Yoga', 'Yoga Restaurativo', 'Yoga Nidra', 'Meditación guiada', 'Pranayama']

export default function Particulares() {
  return (
    <div className="min-h-screen bg-texture-lavender">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-50 via-white to-sage-50 bg-texture-lavender" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-lavender-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-sage-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-lavender-700 hover:text-lavender-800 mb-8 font-medium transition-colors">
            <ArrowLeft size={18} /> Volver al inicio
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-100 text-lavender-700 text-sm font-medium">
                <Star size={16} /> Clases Particulares
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-sage-800 leading-tight">
                Tu práctica de yoga,{' '}
                <span className="gradient-text">a tu medida</span>
              </h1>
              <p className="text-lg text-sage-600 leading-relaxed max-w-xl">
                Sesiones individuales diseñadas exclusivamente para ti. Ya seas principiante o practicante avanzado,
                cada clase se adapta a tu ritmo, tus objetivos y tu momento vital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+34633073841" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  <Phone size={20} /> Reserva tu clase
                </a>
                <a href="mailto:japmantkaur@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm text-sage-700 font-semibold rounded-2xl border border-sage-200 hover:bg-white hover:shadow-lg transition-all">
                  Escríbeme
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender-100 to-rose-100 rounded-3xl rotate-3 opacity-60" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={particularesImg} alt="Clases particulares de yoga" className="w-full h-72 sm:h-80 lg:h-96 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-texture-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
              ¿Por qué elegir clases <span className="gradient-text">particulares</span>?
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto text-lg">
              La atención personalizada marca la diferencia en tu evolución.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-lavender-100/50">
                <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-lavender-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-sage-800 mb-2">{title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios y tipos */}
      <section className="py-20 bg-texture-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
              Tipos de sesión y <span className="gradient-text">tarifas</span>
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto text-lg">
              Elige la opción que mejor se adapte a tu ritmo de práctica.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tipos.map(({ title, desc, precio }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-lavender-100/50 flex flex-col">
                <h3 className="font-display font-bold text-sage-800 text-lg mb-2">{title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                <div className="text-2xl font-display font-bold text-lavender-700">{precio}</div>
                <div className="text-xs text-sage-400 mt-1">Precio orientativo por sesión</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sage-400 text-sm mt-8">
            * Los precios son orientativos y pueden variar según desplazamiento y duración. Consúltame sin compromiso.
          </p>
        </div>
      </section>

      {/* Estilos */}
      <section className="py-20 bg-texture-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
              Estilos que <span className="gradient-text">practico</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {estilos.map((estilo) => (
              <span key={estilo} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-lavender-200/50 text-sage-700 text-sm font-medium hover:bg-lavender-50 hover:border-lavender-300 transition-all">
                <Check size={14} className="text-lavender-500" />
                {estilo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-lavender-100 to-sage-100 bg-texture-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-sage-800 mb-4">
            ¿Lista para empezar tu práctica personalizada?
          </h2>
          <p className="text-lg text-sage-600 mb-8">
            La primera consulta es gratuita. Juntas encontraremos el plan perfecto para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+34633073841" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <Phone size={20} /> Lláamé: 633 07 38 41
            </a>
            <a href="mailto:japmantkaur@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-lavender-700 font-semibold rounded-2xl border-2 border-lavender-300 hover:bg-lavender-50 hover:shadow-lg transition-all">
              Escríbeme un email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
