import { franchiseRequirements, getRequirementsByCategory, getMandatoryRequirements } from '@/content/franchises';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Requisitos de Franquicia | CESAC AI',
  description: 'Conoce los requisitos para convertirte en franquiciado de CESAC AI: legales, financieros, operacionales y técnicos.',
};

export default function FranchiseRequirementsPage() {
  const categories = [
    {
      id: 'legal',
      title: 'Requisitos Legales',
      description: 'Documentación y aspectos legales necesarios',
      icon: '📋',
      color: 'from-blue-500 to-blue-700',
    },
    {
      id: 'financial',
      title: 'Requisitos Financieros',
      description: 'Capacidad económica y solvencia',
      icon: '💰',
      color: 'from-emerald-500 to-emerald-700',
    },
    {
      id: 'operational',
      title: 'Requisitos Operacionales',
      description: 'Infraestructura y personal necesario',
      icon: '🏢',
      color: 'from-violet-500 to-violet-700',
    },
    {
      id: 'technical',
      title: 'Requisitos Técnicos',
      description: 'Equipamiento y conocimientos técnicos',
      icon: '💻',
      color: 'from-amber-500 to-amber-700',
    },
  ];

  const mandatoryCount = getMandatoryRequirements().length;
  const totalCount = franchiseRequirements.length;

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-cesac-700 via-cesac-800 to-cesac-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Requisitos para ser franquicia
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Conoce los requisitos necesarios para operar como franquiciado de CESAC AI.
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <div>
              <p className="text-3xl font-bold">{mandatoryCount}</p>
              <p className="text-sm text-blue-200">Requisitos obligatorios</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{totalCount - mandatoryCount}</p>
              <p className="text-sm text-blue-200">Requisitos opcionales</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{totalCount}</p>
              <p className="text-sm text-blue-200">Total requisitos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categorías */}
        <div className="space-y-12">
          {categories.map(category => {
            const categoryRequirements = getRequirementsByCategory(category.id as any);
            
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryRequirements.map(requirement => (
                    <div key={requirement.id} className={`bg-white rounded-xl border-2 p-5 ${
                      requirement.mandatory ? 'border-cesac-200' : 'border-gray-200'
                    }`}>
                      <div className="flex items-start gap-3 mb-3">
                        {requirement.mandatory ? (
                          <CheckCircle className="w-6 h-6 text-cesac-600 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-cesac-900">{requirement.title}</h3>
                            {requirement.mandatory ? (
                              <span className="text-xs bg-cesac-100 text-cesac-700 px-2 py-0.5 rounded-full font-medium">
                                Obligatorio
                              </span>
                            ) : (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                                Opcional
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{requirement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumen */}
        <div className="mt-16 bg-gradient-to-r from-cesac-50 to-blue-50 rounded-2xl p-8 border-2 border-cesac-200">
          <h2 className="text-2xl font-bold text-cesac-900 text-center mb-6">
            ¿Cumples los requisitos?
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Si cumples con los requisitos obligatorios, puedes solicitar tu franquicia CESAC AI ahora mismo. 
              Nuestro equipo evaluará tu solicitud y te contactará en 5-7 días laborables.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/franquicias/solicitar" className="px-6 py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition">
                Solicitar franquicia
              </a>
              <a href="/franquicias" className="px-6 py-3 border border-cesac-300 text-cesac-700 font-semibold rounded-lg hover:bg-white transition">
                Volver a franquicias
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
