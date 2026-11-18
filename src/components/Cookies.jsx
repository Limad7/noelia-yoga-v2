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
          <p>Esta política le informa sobre el uso de cookies en este sitio web, en cumplimiento de la legislación española y europea en materia de servicios de la sociedad de la información y protección de datos personales (LSSI-CE, RGPD y LOPDGDD).</p>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños ficheros de texto que se descargan en el equipo del usuario al acceder a determinadas páginas web. Permiten almacenar y recuperar información sobre la navegación del usuario o de su equipo.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">2. Cookies que utiliza este sitio web</h2>
            <p>Este sitio web es una página informativa y estática que <strong className="text-sage-800">no utiliza cookies de análisis, publicitarias ni de seguimiento de terceros</strong> (no empleamos Google Analytics ni herramientas similares).</p>
            <p className="mt-3">Únicamente podrían generarse <strong className="text-sage-800">cookies técnicas</strong> imprescindibles para el correcto funcionamiento técnico del sitio. Estas cookies no recogen datos personales con fines comerciales y no requieren su consentimiento conforme al artículo 22 de la LSSI-CE.</p>
            <p className="mt-3">Por este motivo, <strong className="text-sage-800">no es necesario mostrar un banner de consentimiento de cookies</strong> al navegar por esta web.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">3. Cómo gestionar o eliminar las cookies</h2>
            <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de Internet:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
              <li>Mozilla Firefox: Opciones → Privacidad y seguridad → Cookies</li>
              <li>Safari: Preferencias → Privacidad → Cookies</li>
              <li>Microsoft Edge: Configuración → Privacidad → Cookies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">4. Actualización de esta política</h2>
            <p>Si en el futuro este sitio web incorporase cookies de análisis o de terceros, se actualizará esta política y, en su caso, se solicitará el consentimiento previo del usuario antes de su instalación.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
