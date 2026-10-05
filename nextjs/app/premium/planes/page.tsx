import Link from 'next/link';
import { PremiumCard, PremiumFeatureList } from '@/components/premium/PremiumComponents';
import { premiumBenefits, getBenefitsByTier } from '@/content/premium-benefits';
import { PREMIUM_FEATURES } from '@/lib/premium-types';
import type { PremiumTier } from '@/lib/premium-types';
import { Crown, Check, Star, Zap, Building2, Shield, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Planes Premium | CESAC AI',
  description: 'Descubre los planes premium de CESAC AI con contenido exclusivo, tutor IA ilimitado, comunidad privada y mucho más.',
};

export default function PremiumPlansPage() {
  const plans = [
    {
      tier: 'FREE' as PremiumTier,
      name: 'Free',
      price: 0,
      period: 'siempre',
      description: 'Perfecto para comenzar tu aprendizaje en IA',
      features: [
        'Acceso a cursos básicos',
        '10 consultas IA/mes',
        'Comunidad general',
        'Certificados básicos',
        'Soporte por email',
      ],
      popular: false,
    },
    {
      tier: 'INDIVIDUAL' as PremiumTier,
      name: 'Individual',
      price: 29,
      period: 'mes',
      description: 'Ideal para profesionales que quieren avanzar',
      features: [
        'Todo lo de Free, más:',
        'Cursos exclusivos',
        'Masterclasses en vivo',
        '100 consultas IA/mes',
        'Foros privados',
        'Eventos exclusivos',
        'Certificados premium',
        'Analíticas avanzadas',
      ],
      popular: false,
    },
    {
      tier: 'PRO' as PremiumTier,
      name: 'Pro',
      price: 79,
      period: 'mes',
      description: 'Para profesionales serios que buscan excelencia',
      features: [
        'Todo lo de Individual, más:',
        'Consultas IA ilimitadas',
        'Casos de estudio reales',
        'Agentes IA especializados',
        'RAG personalizado',
        'Networking exclusivo',
        'Mentoría 1:1',
        '2h consultoría/mes',
        'Informes personalizados',
      ],
      popular: true,
    },
    {
      tier: 'BUSINESS' as PremiumTier,
      name: 'Business',
      price: 299,
      period: 'mes',
      description: 'Para empresas que quieren transformar con IA',
      features: [
        'Todo lo de Pro, más:',
        'Hasta 25 usuarios',
        'Portal empresarial',
        '10h consultoría/mes',
        'Account manager dedicado',
        'Informes de equipo',
        'API access',
        'Onboarding personalizado',
        'SLA garantizado',
      ],
      popular: false,
    },
    {
      tier: 'GOVERNANCE' as PremiumTier,
      name: 'Governance',
      price: 499,
      period: 'mes',
      description: 'Para organizaciones que necesitan cumplimiento IA',
      features: [
        'Todo lo de Business, más:',
        'Módulo Governance completo',
        'Inventario de sistemas IA',
        'Evaluación de riesgos',
        '20h consultoría/mes',
        'Auditorías incluidas',
        'Evidencias de cumplimiento',
        'Soporte 24/7',
        'Cumplimiento EU AI Act',
      ],
      popular: false,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-cesac-700 via-cesac-800 to-cesac-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Planes Premium CESAC AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Elige tu plan premium
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Accede a contenido exclusivo, tutor IA ilimitado, comunidad privada y mucho más.
          </p>
        </div>
      </div>

      {/* Planes */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {plans.map(plan => (
            <PremiumCard
              key={plan.tier}
              tier={plan.tier}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              popular={plan.popular}
              onSelect={() => {}}
            />
          ))}
        </div>

        {/* Comparativa de características */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cesac-900 text-center mb-8">
            Comparativa de características
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-cesac-900">Característica</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Free</th>
                  <th className="text-center px-4 py-4 font-semibold text-blue-600">Individual</th>
                  <th className="text-center px-4 py-4 font-semibold text-violet-600">Pro</th>
                  <th className="text-center px-4 py-4 font-semibold text-amber-600">Business</th>
                  <th className="text-center px-4 py-4 font-semibold text-rose-600">Governance</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { feature: 'Cursos básicos', values: [true, true, true, true, true] },
                  { feature: 'Cursos exclusivos', values: [false, true, true, true, true] },
                  { feature: 'Masterclasses', values: [false, true, true, true, true] },
                  { feature: 'Casos de estudio', values: [false, false, true, true, true] },
                  { feature: 'Consultas IA/mes', values: ['10', '100', '∞', '∞', '∞'] },
                  { feature: 'Agentes especializados', values: [false, false, true, true, true] },
                  { feature: 'RAG personalizado', values: [false, false, true, true, true] },
                  { feature: 'Foros privados', values: [false, true, true, true, true] },
                  { feature: 'Networking', values: [false, false, true, true, true] },
                  { feature: 'Mentoría 1:1', values: [false, false, true, true, true] },
                  { feature: 'Consultoría/mes', values: ['0h', '0h', '2h', '10h', '20h'] },
                  { feature: 'Certificados premium', values: [false, true, true, true, true] },
                  { feature: 'Analíticas avanzadas', values: [false, true, true, true, true] },
                  { feature: 'Informes personalizados', values: [false, false, true, true, true] },
                  { feature: 'Soporte', values: ['Email', 'Email', 'Prioritario', 'Dedicado', '24/7'] },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-cesac-900">{row.feature}</td>
                    {row.values.map((value, j) => (
                      <td key={j} className="px-4 py-4 text-center">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="w-5 h-5 text-success-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-sm font-medium text-gray-700">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Beneficios destacados */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cesac-900 text-center mb-8">
            Beneficios exclusivos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Contenido Exclusivo', desc: 'Cursos, masterclasses y casos de estudio no disponibles públicamente' },
              { icon: '🤖', title: 'Tutor IA Premium', desc: 'Consultas ilimitadas con agentes especializados y RAG personalizado' },
              { icon: '🤝', title: 'Comunidad Privada', desc: 'Networking con profesionales y acceso a eventos exclusivos' },
              { icon: '🏆', title: 'Certificaciones Premium', desc: 'Certificados destacados con verificación y badges para LinkedIn' },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl border p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-cesac-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-cesac-900 text-center mb-8">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {[
              { q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí, puedes upgrading o downgrading tu plan en cualquier momento. Los cambios se aplican inmediatamente.' },
              { q: '¿Hay período de prueba gratuito?', a: 'Ofrecemos 14 días de prueba gratuita en todos los planes de pago. Puedes cancelar en cualquier momento.' },
              { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos tarjetas de crédito/débito, PayPal y transferencia bancaria para empresas.' },
              { q: '¿Puedo cancelar mi suscripción?', a: 'Sí, puedes cancelar en cualquier momento desde tu dashboard. No hay permanencia.' },
              { q: '¿Ofrecen descuentos para estudiantes?', a: 'Sí, ofrecemos 50% de descuento para estudiantes verificados. Contacta con nosotros.' },
              { q: '¿Qué incluye el soporte dedicado?', a: 'El soporte dedicado incluye un account manager personal, respuestas en menos de 2 horas y consultorías programadas.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border">
                <summary className="p-4 cursor-pointer font-medium text-cesac-900 hover:bg-gray-50 list-none flex justify-between items-center">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 transition group-open:rotate-90" />
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 bg-gradient-to-r from-cesac-700 to-cesac-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Únete a miles de profesionales que ya están aprovechando las ventajas de CESAC AI Premium.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/auth" className="px-6 py-3 bg-white text-cesac-900 font-semibold rounded-lg hover:bg-blue-50 transition">
              Comenzar prueba gratuita
            </Link>
            <Link href="/contacto" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Contactar con ventas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
