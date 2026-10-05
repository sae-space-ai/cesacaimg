import Link from 'next/link';
import { predefinedScenarios, gigafactoryScenarios } from '@/content/production-scenarios';
import { CostBreakdownCard, ROICard, ProjectionsCard, ScenarioComparison } from '@/components/production/ProductionComponents';
import { TrendingUp, DollarSign, Factory, Users, Target, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Cálculo de Producción y Coste IA | CESAC AI',
  description: 'Calcula el coste real de la plataforma IA y el ROI en diferentes escenarios. Análisis completo para PYMEs, empresas medianas, grandes empresas y gigafactorías.',
};

export default function ProductionPage() {
  // Seleccionar escenarios representativos
  const scenarios = [
    predefinedScenarios[1], // PYME Realistic
    predefinedScenarios[2], // Mid-size Optimistic
    predefinedScenarios[3], // Enterprise Realistic
    predefinedScenarios[4], // Gigafactory Realistic
  ];

  const comparisonData = scenarios.map(s => ({
    name: s.name,
    totalCost: s.costs.totalMonthly,
    roi: s.roi.roi12Months,
    payback: s.roi.paybackPeriod,
  }));

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cesac-700 via-cesac-800 to-cesac-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
              <Factory className="w-4 h-4 text-emerald-400" />
              <span>Análisis de Producción y Coste IA</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Coste Real de la Plataforma IA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400"> en Producción</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Análisis completo del ROI, TCO y proyecciones de producción para diferentes escenarios: desde PYMEs hasta gigafactorías con 10,000+ empleados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/produccion/calculadora" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
                Calcular mi escenario
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/produccion/gigafactoria" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
                Caso Gigafactoría
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5', label: 'Escenarios analizados', icon: <Target className="w-6 h-6 mx-auto text-cesac-600" /> },
              { value: '780%', label: 'ROI máximo (Gigafactoría)', icon: <TrendingUp className="w-6 h-6 mx-auto text-success-500" /> },
              { value: '0.6m', label: 'Payback más rápido', icon: <DollarSign className="w-6 h-6 mx-auto text-emerald-500" /> },
              { value: '10K+', label: 'Empleados (escenario max)', icon: <Users className="w-6 h-6 mx-auto text-blue-500" /> },
            ].map((stat, i) => (
              <div key={i}>
                {stat.icon}
                <p className="text-4xl font-bold text-cesac-700 mb-1 mt-2">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escenarios predefinidos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Escenarios de Producción
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Análisis detallado de 5 escenarios reales con costes, proyecciones y ROI calculados.
            </p>
          </div>

          <div className="space-y-8">
            {scenarios.map((scenario, i) => (
              <div key={scenario.id} className="bg-white rounded-2xl border p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cesac-900 mb-2">{scenario.name}</h3>
                    <p className="text-gray-600">{scenario.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Empleados</p>
                    <p className="text-3xl font-bold text-cesac-700">{scenario.assumptions.employeeCount.toLocaleString()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CostBreakdownCard costs={scenario.costs} />
                  <ROICard roi={scenario.roi} />
                  <ProjectionsCard projections={scenario.projections} />
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Adopción</p>
                      <p className="text-lg font-bold text-cesac-900">{Math.round(scenario.assumptions.adoptionRate * 100)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Finalización</p>
                      <p className="text-lg font-bold text-cesac-900">{Math.round(scenario.assumptions.completionRate * 100)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Productividad</p>
                      <p className="text-lg font-bold text-success-500">+{Math.round(scenario.assumptions.productivityGain * 100)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Tiempo hasta valor</p>
                      <p className="text-lg font-bold text-cesac-900">{scenario.assumptions.timeToValue} meses</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Comparativa de Escenarios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compara costes, ROI y tiempo de retorno entre diferentes tamaños de empresa.
            </p>
          </div>

          <ScenarioComparison scenarios={comparisonData} />
        </div>
      </section>

      {/* Caso Gigafactoría */}
      <section className="py-20 bg-gradient-to-br from-cesac-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Caso Especial: Gigafactoría
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Análisis detallado del despliegue en una gigafactoría con 10,000+ empleados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {gigafactoryScenarios.map((scenario, i) => (
              <div key={scenario.id} className="bg-white rounded-xl border p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-cesac-900 mb-2">{scenario.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Despliegue inicial</span>
                    <span className="font-medium">{scenario.initialRollout.toLocaleString()} empleados</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Crecimiento mensual</span>
                    <span className="font-medium">{scenario.monthlyGrowth * 100}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tiempo completo</span>
                    <span className="font-medium">{scenario.timeToFullDeployment} meses</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">ROI 12 meses</span>
                    <span className="text-2xl font-bold text-success-500">{scenario.expectedROI12}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/produccion/gigafactoria" className="inline-flex items-center gap-2 px-6 py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition">
              Ver análisis completo de gigafactoría
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-cesac-700 to-cesac-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para calcular tu escenario?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Usa nuestra calculadora interactiva para obtener proyecciones personalizadas para tu empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/produccion/calculadora" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
              Abrir calculadora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contacto" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
              Hablar con un experto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
