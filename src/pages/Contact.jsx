import { Mail, Phone, Instagram, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-lavender-50 via-white to-sage-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-lavender-900 mb-4">
              Contacta conmigo
            </h1>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Estoy aquí para ayudarte en tu camino hacia el bienestar
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold text-lavender-900 mb-6">
                  Información de contacto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-lavender-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-sage-900 mb-1">Email</div>
                      <a
                        href="mailto:japmantkaur@gmail.com"
                        className="text-lavender-600 hover:text-lavender-700 transition-colors"
                      >
                        japmantkaur@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-sage-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-sage-900 mb-1">Teléfono</div>
                      <a
                        href="tel:+34633073841"
                        className="text-sage-600 hover:text-sage-700 transition-colors"
                      >
                        +34 633 07 38 41
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Instagram className="text-rose-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-sage-900 mb-1">Instagram</div>
                      <a
                        href="https://instagram.com/japmant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-600 hover:text-rose-700 transition-colors"
                      >
                        @japmant
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-lavender-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-sage-900 mb-1">Ubicación</div>
                      <p className="text-sage-700">
                        Madrid, España (Leganés)
                      </p>
                      <p className="text-sm text-sage-600 mt-1">
                        Disponible para domicilio y espacios propios
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold text-lavender-900 mb-6">
                  Horario
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Lunes - Viernes</span>
                    <span className="font-semibold text-sage-900">Mañana y tarde</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Sábados</span>
                    <span className="font-semibold text-sage-900">Mañana</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sage-700">Domingos</span>
                    <span className="font-semibold text-sage-900">Cerrado</span>
                  </div>
                </div>
                <p className="text-sm text-sage-600 mt-4 italic">
                  Los horarios pueden variar, por favor confirma disponibilidad por teléfono o email
                </p>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-lavender-600 to-sage-600 p-8 rounded-3xl shadow-lg text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-8 h-8" size={32} />
                  <h2 className="text-xl font-bold">
                    Respuesta rápida
                  </h2>
                </div>
                <p className="text-lavender-100 mb-4">
                  Te responderé lo antes posible, generalmente en menos de 24 horas
                </p>
                <div className="flex items-center gap-2 text-lavender-100">
                  <CheckCircle size={20} />
                  <span>Respuestas para consultas urgentes también en WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <h2 className="text-2xl font-bold text-lavender-900 p-8 pb-4">
                ¿Dónde encontrarme?
              </h2>
              <div className="w-full h-[500px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.6469679701426!2d-3.788666323439205!3d40.30858677144157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289453899d5d%3A0x5e8c0e2e5f3d8e1f!2sLegan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1715300000000!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Leganés"
                />
              </div>
            </div>
          </div>

          {/* Common Questions */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-lavender-900 mb-8 text-center">
              Preguntas frecuentes
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  ¿Necesito experiencia previa?
                </h3>
                <p className="text-sage-700">
                  No. Mis clases están diseñadas para todos los niveles, desde principiantes hasta avanzados.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  ¿Qué ropa debo llevar?
                </h3>
                <p className="text-sage-700">
                  Ropa cómoda que permita libertad de movimiento, preferiblemente tejidos deportivos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  ¿Se requiere material?
                </h3>
                <p className="text-sage-700">
                  No, solo trae tu cuerpo y ganas de practicar. En algunas clases puedo proporcionar colchonetas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-lavender-900 mb-2">
                  ¿Puedo hacer una prueba gratuita?
                </h3>
                <p className="text-sage-700">
                  Sí, te ofrezco una primera sesión sin compromiso para que conozcas mi estilo.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-lavender-100 to-sage-100 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-lavender-900 mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-sage-700 mb-8">
              Reserva tu primera sesión sin compromiso y descubre el poder del yoga
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:japmantkaur@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lavender-600 text-white rounded-full font-semibold hover:bg-lavender-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail size={20} />
                Enviar email
              </a>
              <a
                href="tel:+34633073841"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage-600 text-white rounded-full font-semibold hover:bg-sage-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone size={20} />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
