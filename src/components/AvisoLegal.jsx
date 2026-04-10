import { Link } from 'react-router-dom'
import { ArrowLeft, Scale } from 'lucide-react'

export default function AvisoLegal() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sage-600 hover:text-lavender-700 transition-colors mb-8">
        <ArrowLeft size={18} /> Volver al inicio
      </Link>

      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-lavender-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-lavender-600 rounded-xl flex items-center justify-center text-white">
            <Scale size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-sage-800">Aviso Legal</h1>
        </div>

        <div className="space-y-6 text-sage-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">1. Información General</h2>
            <p>En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios que el titular de este sitio web es:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong className="text-sage-800">Titular:</strong> Noelia Yoga</li>
              <li><strong className="text-sage-800">Teléfono de contacto:</strong> <a href="tel:+34633073841" className="text-lavender-600 hover:text-lavender-700">+34 633 07 38 41</a></li>
              <li><strong className="text-sage-800">Correo electrónico:</strong> <a href="mailto:japmantkaur@gmail.com" className="text-lavender-600 hover:text-lavender-700">japmantkaur@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">2. Condiciones Generales de Uso</h2>
            <p>El acceso y uso de este sitio web atribuye la condición de Usuario y exige la aceptación plena y sin reservas de todas y cada una de las disposiciones contenidas en este Aviso Legal.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">3. Propiedad Intelectual e Industrial</h2>
            <p>Los textos, imágenes, logos, signos distintivos, sonidos, animaciones, vídeos, código fuente y resto de contenidos incluidos en este sitio son propiedad de Noelia Yoga o este dispone del derecho de uso y explotación de los mismos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
