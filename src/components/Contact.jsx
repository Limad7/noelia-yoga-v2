import { Mail, Phone, MapPin, Instagram, Send, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-sage-50/30 to-lavender-50/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-lavender-100/40 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-sage-100/40 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-lavender-50 text-lavender-700 text-sm font-medium rounded-full mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-sage-800 mb-4">
            ¿Hablamos?{' '}
            <span className="gradient-text">Escríbeme</span>
          </h2>
          <p className="text-sage-600 max-w-xl mx-auto text-lg">
            Estaré encantada de resolver tus dudas y ayudarte a encontrar la clase perfecta para ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="space-y-6">
            <a
              href="mailto:japmantkaur@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-lavender-400 to-lavender-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-sage-500 mb-0.5">Email</div>
                <div className="text-sage-800 font-medium group-hover:text-lavender-700 transition-colors">japmantkaur@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:+34633073841"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-sage-400 to-sage-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-sage-500 mb-0.5">Teléfono</div>
                <div className="text-sage-800 font-medium group-hover:text-sage-600 transition-colors">+34 633 07 38 41</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/japmant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-lavender-500 rounded-xl flex items-center justify-center text-white shrink-0">
                <Instagram size={24} />
              </div>
              <div>
                <div className="text-sm text-sage-500 mb-0.5">Instagram</div>
                <div className="text-sage-800 font-medium group-hover:text-rose-500 transition-colors">@japmant</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-md">
              <div className="w-14 h-14 bg-gradient-to-br from-lavender-300 to-sage-400 rounded-xl flex items-center justify-center text-white shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm text-sage-500 mb-0.5">Ubicación</div>
                <div className="text-sage-800 font-medium">Leganés, Madrid</div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-80 lg:h-auto min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.08543289593!2d-3.78133855!3d40.3271528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189c5e52d1db5%3A0x408de0fd2032d50!2sLegan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Noelia Yoga en Leganés"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
