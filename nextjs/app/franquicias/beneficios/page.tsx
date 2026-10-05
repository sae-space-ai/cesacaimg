import { franchiseBenefits, getBenefitsByCategory } from '@/content/franchises';
import { Building2, Crown, Star, Zap, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Beneficios de Franquicia | CESAC AI',
  description: 'Descubre todos los beneficios de ser franquiciado de CESAC AI: contenido completo, tutor IA, soporte dedicado y altas comisiones.',
};

export default function FranchiseBenefitsPage() {
  const categories = [
    {
      id: 'content',
      title: 'Contenido y Plataforma',
      description: 'Acceso completo a todo el catálogo y herramientas',
      icon: '📚',
      color: 'from-blue-500 to-blue-700',
    },
    {
      id: 'support',
      title: 'Soporte y Comunidad',
      description: 'Soporte técnico dedicado y comunidad de franquicias',
      icon: '💬',
      color: 'from-violet-500 to-violet-700',
    },
    {
      id: 'branding',
      title: 'Marca y Marketing',
      description: 'Opera con una marca reconocida y material de marketing',
      icon: '🏷️',
      color: 'from-emerald-500 to-emerald-700',
    },
    {
      id: 'financial',
      title: 'Financiero',
      description: 'Comisiones atractivas y sin inversión inicial',
      icon: '💰',
      color: 'from-amber-500 to-amber-700',
    },
    {
      id: 'training',
      title: 'Formación',
      description: 'Onboarding completo y formación continua',
      icon: '🎓',
      color: 'from-rose-500 to-rose-700',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-cesac-700 via-cesac-800 to-cesac-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Beneficios de Franquicia</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Beneficios exclusivos para franquicias
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Todo lo que necesitas para operar con éxito como franquiciado de CESAC AI.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categorías */}
        <div className="space-y-12">
          {categories.map(category => {
            const categoryBenefits = getBenefitsByCategory(category.id as any);
            
            return (
              <div key={category.id}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-cesac-900">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryBenefits.map(benefit => (
                    <div key={benefit.id} className="bg-white rounded-xl border p-5 hover:shadow-lg transition">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-3xl">{benefit.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-cesac-900 mb-1">{benefit.title}</h3>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {benefit.tier.map(tier => {
                          const tierConfig = {
                            BASIC: { color: 'bg-gray-100 text-gray-700' },
                            STANDARD: { color: 'bg-blue-100 text-blue-700' },
                            PREMIUM: { color: 'bg-violet-100 text-violet-700' },
                            ENTERPRISE: { color: 'bg-amber-100 text-amber-700' },
                          };
                          return (
                            <span key={tier} className={`text-xs px-2 py-0.5 rounded-full font-medium ${tierConfig[tier].color}`}>
                              {tier}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumen por tier */}
        <div className="mt-16 bg-gradient-to-r from-cesac-50 to-blue-50 rounded-2xl p-8 border-2 border-cesac-200">
          <h2 className="text-2xl font-bold text-cesac-900 text-center mb-8">
            Beneficios por nivel de franquicia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tier: 'BASIC',
                icon: <Star className="w-8 h-8" />,
                color: 'from-gray-500 to-gray-700',
                benefits: 8,
                description: 'Perfecto para comenzar',
              },
              {
                tier: 'STANDARD',
                icon: <Building2 className="w-8 h-8" />,
                color: 'from-blue-500 to-blue-700',
                benefits: 12,
                description: 'Para negocios establecidos',
              },
              {
                tier: 'PREMIUM',
                icon: <Zap className="w-8 h-8" />,
                color: 'from-violet-500 to-violet-700',
                benefits: 18,
                description: 'Para máximo crecimiento',
              },
              {
                tier: 'ENTERPRISE',
                icon: <Crown className="w-8 h-8" />,
                color: 'from-amber-500 to-amber-700',
                benefits: 20,
                description: 'Para operaciones a gran escala',
              },
            ].map(plan => (
              <div key={plan.tier} className="bg-white rounded-xl p-6 text-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mx-auto mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="font-bold text-cesac-900 mb-2">{plan.tier}</h3>
                <p className="text-3xl font-bold text-cesac-700 mb-2">{plan.benefits}</p>
                <p className="text-xs text-gray-500 mb-3">beneficios incluidos</p>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
