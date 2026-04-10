import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'

export default function Privacidad() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sage-600 hover:text-lavender-700 transition-colors mb-8">
        <ArrowLeft size={18} /> Volver al inicio
      </Link>

      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-lavender-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-xl flex items-center justify-center text-white">
            <Shield size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-sage-800">Política de Privacidad</h1>
        </div>

        <div className="space-y-6 text-sage-600 leading-relaxed">
          <p>En Noelia Yoga estamos comprometidos con la privacidad y transparencia frente a nuestros usuarios. De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD), informamos de lo siguiente:</p>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">1. No recopilación de datos de carácter personal</h2>
            <p>Este sitio web tiene un fin estrictamente informativo. <strong className="text-sage-800">No disponemos de formularios de contacto, registros de usuarios ni sistemas de suscripción.</strong> Por lo tanto, no recabamos, almacenamos ni procesamos ningún dato de carácter personal de las personas que nos visitan.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-lavender-800 mb-3">2. Ejercicio de Derechos</h2>
            <p>Dado que no disponemos de bases de datos de usuarios ni tratamos datos personales, no procede el ejercicio de los derechos de Acceso, Rectificación, Supresión, Oposición, Limitación y Portabilidad (Derechos ARCO). No obstante, para cualquier consulta general o aclaración, el Responsable del sitio es Noelia Yoga, puedes contactarnos en <a href="mailto:japmantkaur@gmail.com" className="text-lavender-600 hover:text-lavender-700">japmantkaur@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
