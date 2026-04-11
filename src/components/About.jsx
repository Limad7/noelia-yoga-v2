import { Award, Heart, Leaf, Sun } from 'lucide-react'
import yogaImg from '../assets/YogaMeditando.jpg'

const specialties = [
  { icon: Sun, name: 'Hatha Yoga' },
  { icon: Heart, name: 'Kundalini' },
  { icon: Leaf, name: 'Vinyasa' },
  { icon: Award, name: 'Yoga Oncológico' },
  { icon: Sun, name: 'Yoga Nidra' },
  { icon: Heart, name: 'Yin Yoga' },
  { icon: Leaf, name: 'Restaurativo' },

]

export default function About() {
  return (
    <section id="about" className="section-padding bg-texture-warm relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lavender-50 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage-50 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-lavender-50 text-lavender-700 text-sm font-medium rounded-full mb-4">
            Sobre mí
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-sage-800">
            Tu guía en el camino del{' '}
            <span className="gradient-text">bienestar</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender-100 to-sage-100 rounded-3xl rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={yogaImg}
                  alt="Noelia practicando yoga"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-lavender-600 rounded-xl flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-lavender-700">10+</div>
                  <div className="text-xs text-sage-500">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-6">
            <p className="text-lg text-sage-600 leading-relaxed">
              Soy <strong className="text-sage-800">Noelia</strong>, instructora certificada de yoga
              con más de una década dedicada al bienestar integral. Mi pasión es acompañar
              a cada persona en su camino hacia el equilibrio físico y mental.
            </p>
            <p className="text-lg text-sage-600 leading-relaxed">
              Con certificaciones en múltiples disciplinas — desde Hatha y Kundalini hasta
              Yoga Oncológico — ofrezco un enfoque personalizado que se adapta a tus
              necesidades, ya seas principiante o practicante avanzado.
            </p>

            {/* Certifications grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {specialties.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-lavender-50 to-sage-50 hover:from-lavender-100 hover:to-sage-100 transition-colors group"
                >
                  <Icon size={20} className="text-lavender-600 group-hover:text-lavender-700 transition-colors" />
                  <span className="text-xs font-medium text-sage-600 text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
