import { Link } from 'react-router-dom'
import { User, Building2, Mountain, ArrowRight, Star } from 'lucide-react'
import particularesImg from '../assets/yogaparticulares.png'
import empresasImg from '../assets/yogaempresas.jpg'
import retirosImg from '../assets/retiros-talleres.jpg'

const services = [
  {
    icon: User,
    title: 'Clases Particulares',
    description: 'Sesiones 1:1 personalizadas adaptadas a tu nivel y objetivos. En tu domicilio o en mi espacio propio, con toda la atención dedicada exclusivamente a ti.',
    image: particularesImg,
    features: ['Plan personalizado', 'Flexibilidad horaria', 'Domicilio o espacio propio', 'Todos los niveles'],
    color: 'lavender',
    gradient: 'from-lavender-400 to-lavender-600',
    bgGradient: 'from-lavender-50 to-rose-50',
    link: '/servicios/particulares',
  },
  {
    icon: Building2,
    title: 'Yoga para Empresas',
    description: 'Programas de bienestar corporativo diseñados para reducir el estrés y mejorar la productividad de tu equipo. Sesiones en oficinas de Leganés, Getafe y Madrid Sur.',
    image: empresasImg,
    features: ['Bienestar corporativo', 'Reducción de estrés', 'Sesiones en oficina', 'Grupos adaptados'],
    color: 'sage',
    gradient: 'from-sage-400 to-sage-600',
    bgGradient: 'from-sage-50 to-lavender-50',
    link: '/servicios/empresas',
  },
  {
    icon: Mountain,
    title: 'Retiros y Talleres',
    description: 'Experiencias inmersivas de fin de semana que combinan yoga, meditación y conexión con la naturaleza. Un espacio para desconectar y renovarte.',
    image: retirosImg,
    features: ['Inmersión total', 'Fin de semana', 'Naturaleza', 'Meditación y yoga'],
    color: 'rose',
    gradient: 'from-rose-400 to-lavender-500',
    bgGradient: 'from-rose-50 to-lavender-50',
    link: '/servicios/retiros',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-texture-lavender relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sage-50 text-sage-700 text-sm font-medium rounded-full mb-4">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-sage-800 mb-4">
            Lo que puedo{' '}
            <span className="gradient-text">ofrecerte</span>
          </h2>
          <p className="text-sage-600 max-w-2xl mx-auto text-lg">
            Servicios adaptados a tus necesidades, tanto si buscas bienestar personal como corporativo.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-20">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isReversed = idx % 2 === 1
            return (
              <div
                key={service.title}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
              >
                {/* Image side */}
                <div className="flex-1 relative group">
                  <div className={`absolute -inset-2 bg-gradient-to-br ${service.bgGradient} rounded-3xl rotate-2 group-hover:rotate-1 transition-transform duration-500`} />
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className={`absolute bottom-6 left-6 bg-gradient-to-r ${service.gradient} text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg`}>
                      <Icon size={20} />
                      <span className="font-semibold text-sm">{service.title}</span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-sage-800">
                    {service.title}
                  </h3>
                  <p className="text-sage-600 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Star size={14} className="text-lavender-500 fill-lavender-500" />
                        <span className="text-sm text-sage-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-lavender-700 font-semibold hover:gap-3 transition-all duration-300 group"
                  >
                    Más información
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
