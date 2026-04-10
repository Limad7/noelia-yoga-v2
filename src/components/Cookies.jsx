import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie } from 'lucide-react'

export default function Cookies() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sage-600 hover:text-lavender-700 transition-colors mb-8">
        <ArrowLeft size={18} /> Volver al inicio
      </Link>

      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-lavender-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-lavender-500 rounded-xl flex items-center justify-center text-white">
            <Cookie size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-sage-800">Política de Cookies</h1>
        </div>

        <div className="space-y-6 text-sage-600 leading-relaxed">
          <p>Esta política le informa sobre cómo Noelia Yoga utiliza las cookies en este sitio web, cumpliendo con la legislación española y europea en materia de servicios de la sociedad de la información.</p>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños ficheros de texto que se descargan en el equipo del usuario al acceder a determinadas páginas web. Permiten almacenar y recuperar información sobre los hábitos de navegación del usuario o de su equipo.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">2. ¿Qué cookies utilizamos?</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong className="text-sage-800">Cookies técnicas (necesarias):</strong> Son imprescindibles para el correcto funcionamiento de la web (como recordar tu inicio de sesión o manejar la seguridad). No pueden ser desactivadas en nuestros sistemas.</li>
              <li><strong className="text-sage-800">Cookies de análisis:</strong> Tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y realizar la medición estadística para mejorar nuestra oferta de servicios.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">3. Cómo configurar o desactivar sus cookies</h2>
            <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de Internet. En caso de que no permitas la instalación de cookies, es posible que no puedas acceder a algunos servicios.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
