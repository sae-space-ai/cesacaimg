import { PREMIUM_FEATURES } from '@/lib/premium-types';
import type { PremiumTier } from '@/lib/premium-types';
import { Check, X, Crown, Star, Zap, Building2, Shield } from 'lucide-react';

export const metadata = {
  title: 'Comparativa de Planes Premium | CESAC AI',
  description: 'Compara todos los planes premium de CESAC AI y elige el adecuado para ti.',
};

export default function PremiumComparisonPage() {
  const plans: Array<{
    tier: PremiumTier;
    name: string;
    price: number;
    icon: React.ReactNode;
    color: string;
  }> = [
    { tier: 'FREE', name: 'Free', price: 0, icon: <Star className="w-6 h-6" />, color: 'from-gray-500 to-gray-700' },
    { tier: 'INDIVIDUAL', name: 'Individual', price: 29, icon: <Star className="w-6 h-6" />, color: 'from-blue-500 to-blue-700' },
    { tier: 'PRO', name: 'Pro', price: 79, icon: <Zap className="w-6 h-6" />, color: 'from-violet-500 to-violet-700' },
    { tier: 'BUSINESS', name: 'Business', price: 299, icon: <Building2 className="w-6 h-6" />, color: 'from-amber-500 to-amber-700' },
    { tier: 'GOVERNANCE', name: 'Governance', price: 499, icon: <Shield className="w-6 h-6" />, color: 'from-rose-500 to-rose-700' },
  ];

  const comparisonData = [
    {
      category: 'Contenido',
      features: [
        { name: 'Cursos básicos', getValue: (f: any) => true },
        { name: 'Cursos exclusivos', getValue: (f: any) => f.exclusiveCourses },
        { name: 'Masterclasses', getValue: (f: any) => f.masterclasses },
        { name: 'Casos de estudio', getValue: (f: any) => f.caseStudies },
        { name: 'Acceso anticipado', getValue: (f: any) => f.earlyAccess },
      ],
    },
    {
      category: 'Tutor IA',
      features: [
        { name: 'Consultas IA/mes', getValue: (f: any) => f.aiQueriesLimit === -1 ? '∞' : f.aiQueriesLimit.toString() },
        { name: 'Soporte prioritario', getValue: (f: any) => f.prioritySupport },
        { name: 'Agentes especializados', getValue: (f: any) => f.specializedAgents },
        { name: 'RAG personalizado', getValue: (f: any) => f.customRAG },
      ],
    },
    {
      category: 'Comunidad',
      features: [
        { name: 'Foros privados', getValue: (f: any) => f.privateForums },
        { name: 'Networking', getValue: (f: any) => f.networking },
        { name: 'Mentoría 1:1', getValue: (f: any) => f.mentorship },
        { name: 'Eventos exclusivos', getValue: (f: any) => f.events },
      ],
    },
    {
      category: 'Certificaciones',
      features: [
        { name: 'Certificados premium', getValue: (f: any) => f.premiumCertificates },
        { name: 'Badges verificados', getValue: (f: any) => f.verifiedBadges },
        { name: 'Integración LinkedIn', getValue: (f: any) => f.linkedinIntegration },
      ],
    },
    {
      category: 'Soporte',
      features: [
        { name: 'Nivel de soporte', getValue: (f: any) => f.supportLevel },
        { name: 'Horas consultoría/mes', getValue: (f: any) => f.consultationHours > 0 ? `${f.consultationHours}h` : '0h' },
      ],
    },
    {
      category: 'Analíticas',
      features: [
        { name: 'Analíticas avanzadas', getValue: (f: any) => f.advancedAnalytics },
        { name: 'Seguimiento de progreso', getValue: (f: any) => f.progressTracking },
        { name: 'Informes personalizados', getValue: (f: any) => f.customReports },
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-cesac-700 via-cesac-800 to-cesac-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Comparativa de Planes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compara todos los planes premium
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Encuentra el plan perfecto para tus necesidades de aprendizaje en IA.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tabla comparativa */}
        <div className="bg-white rounded-2xl border overflow-hidden mb-12">
          {/* Header de la tabla */}
          <div className="grid grid-cols-6 bg-gray-50 border-b">
            <div className="p-6 font-semibold text-cesac-900">Características</div>
            {plans.map(plan => (
              <div key={plan.tier} className="p-6 text-center border-l">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mx-auto mb-3`}>
                  {plan.icon}
                </div>
                <h3 className="font-bold text-cesac-900 mb-1">{plan.name}</h3>
                <p className="text-2xl font-bold text-cesac-700">
                  {plan.price === 0 ? 'Gratis' : `€${plan.price}`}
                </p>
                {plan.price > 0 && <p className="text-xs text-gray-500">/mes</p>}
              </div>
            ))}
          </div>

          {/* Body de la tabla */}
          {comparisonData.map((section, i) => (
            <div key={i}>
              <div className="grid grid-cols-6 bg-cesac-50 border-y">
                <div className="p-4 font-semibold text-cesac-900 col-span-6">
                  {section.category}
                </div>
              </div>
              {section.features.map((feature, j) => (
                <div key={j} className="grid grid-cols-6 border-b hover:bg-gray-50 transition">
                  <div className="p-4 text-sm font-medium text-gray-700">
                    {feature.name}
                  </div>
                  {plans.map(plan => {
                    const features = PREMIUM_FEATURES[plan.tier];
                    const value = feature.getValue(features);
                    
                    return (
                      <div key={plan.tier} className="p-4 text-center border-l">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="w-5 h-5 text-success-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium text-gray-700">{value}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Recomendaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              tier: 'INDIVIDUAL',
              title: 'Para Estudiantes',
              description: 'Si estás comenzando tu carrera en IA y quieres acceso a contenido exclusivo',
              icon: '🎓',
              color: 'bg-blue-50 border-blue-200',
            },
            {
              tier: 'PRO',
              title: 'Para Profesionales',
              description: 'Si eres un profesional que quiere llevar tus habilidades de IA al siguiente nivel',
              icon: '💼',
              color: 'bg-violet-50 border-violet-200',
            },
            {
              tier: 'BUSINESS',
              title: 'Para Empresas',
              description: 'Si quieres transformar tu empresa con IA y formar a tu equipo',
              icon: '🏢',
              color: 'bg-amber-50 border-amber-200',
            },
            {
              tier: 'GOVERNANCE',
              title: 'Para Compliance',
              description: 'Si necesitas cumplir con el EU AI Act y gestionar riesgos de IA',
              icon: '⚖️',
              color: 'bg-rose-50 border-rose-200',
            },
          ].map((rec, i) => (
            <div key={i} className={`rounded-xl border-2 p-6 ${rec.color}`}>
              <div className="text-4xl mb-3">{rec.icon}</div>
              <h3 className="font-bold text-cesac-900 mb-2">{rec.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{rec.description}</p>
              <p className="text-xs font-semibold text-cesac-700">Plan recomendado: {rec.tier}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-cesac-900 text-center mb-6">
            Preguntas frecuentes sobre planes
          </h2>
          <div className="space-y-3">
            {[
              { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes cambiar de plan en cualquier momento. Los cambios se aplican inmediatamente y se prorratea el costo.' },
              { q: '¿Hay descuento anual?', a: 'Sí, ofrecemos 20% de descuento en planes anuales. Contacta con nosotros para más información.' },
              { q: '¿Puedo probar antes de comprar?', a: 'Todos los planes de pago incluyen 14 días de prueba gratuita. Puedes cancelar en cualquier momento.' },
              { q: '¿Qué pasa si cancelo?', a: 'Mantendrás acceso hasta el final del período pagado. No hay cargos por cancelación.' },
              { q: '¿Ofrecen planes personalizados?', a: 'Sí, para empresas grandes ofrecemos planes personalizados. Contacta con nuestro equipo de ventas.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border">
                <summary className="p-4 cursor-pointer font-medium text-cesac-900 hover:bg-gray-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
