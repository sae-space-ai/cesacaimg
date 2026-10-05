const titles: Record<string, string> = {
  'aviso-legal': 'Aviso Legal',
  'privacidad': 'Política de Privacidad',
  'cookies': 'Política de Cookies',
  'condiciones': 'Condiciones Generales de Contratación'
};

export default function LegalContent({ type }: { type: string }) {
  const title = titles[type] || 'Información Legal';

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-cesac-900 mb-6">{title}</h1>
      <div className="prose max-w-none">
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
          <p className="text-sm text-amber-800">⚠️ Este documento está pendiente de validación jurídica definitiva. La información aquí contenida no constituye asesoramiento legal.</p>
        </div>
        <div className="bg-white rounded-xl border p-6 space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>El presente documento establece las condiciones aplicables al uso de la plataforma CESAC AI, de conformidad con la legislación vigente en materia de servicios de la sociedad de la información, protección de datos y defensa de consumidores.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">1. Identificación</h2>
          <p>Los datos identificativos del titular de la plataforma se encuentran disponibles en la configuración administrativa y serán comunicados previa solicitud a través de los canales de contacto habilitados.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">2. Objeto</h2>
          <p>La plataforma CESAC AI ofrece servicios de formación, teleformación, consultoría en inteligencia artificial, gobernanza de IA y servicios tecnológicos relacionados.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">3. Protección de datos</h2>
          <p>Los datos personales recogidos serán tratados conforme a la política de privacidad, con respeto al RGPD y la LOPDGDD. Se aplican los principios de minimización, limitación de finalidad y privacidad por diseño.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">4. Propiedad intelectual</h2>
          <p>Todos los contenidos de la plataforma (textos, imágenes, materiales formativos, software) son propiedad de CESAC AI o cuentan con la autorización correspondiente para su uso.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">5. Inteligencia Artificial</h2>
          <p>La plataforma utiliza sistemas de inteligencia artificial asistida. Las respuestas generadas por IA no constituyen asesoramiento profesional y deben ser verificadas por el usuario. CESAC AI no se responsabiliza del uso indebido de las respuestas generadas por IA.</p>
        </div>
      </div>
    </div>
  );
}
