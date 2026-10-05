import Link from 'next/link';
import { predefinedScenarios } from '@/content/production-scenarios';
import { CostBreakdownCard, ROICard, ProjectionsCard } from '@/components/production/ProductionComponents';
import { ArrowLeft, TrendingUp, DollarSign, Target } from 'lucide-react';

export const metadata = {
  title: 'Escenarios de Producción | CESAC AI',
  description: '5 escenarios predefinidos con análisis completo de costes, ROI y proyecciones para diferentes tamaños de empresa.',
};

export default function ScenariosPage() {
  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/produccion" className="inline-flex items-center gap-2 text-cesac-700 hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            Volver a producción
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cesac-600 to-cesac-800 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cesac-900">Escenarios de Producción</h1>
              <p className="text-gray-600">5 escenarios predefinidos con análisis completo</p>
            </div>
          </div>
        </div>

        {/* Escenarios */}
        <div className="space-y-8">
          {predefinedScenarios.map((scenario, i) => (
            <div key={scenario.id} className="bg-white rounded-2xl border p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      scenario.type === 'CONSERVATIVE' ? 'bg-gray-100 text-gray-700' :
                      scenario.type === 'REALISTIC' ? 'bg-blue-100 text-blue-700' :
                      scenario.type === 'OPTIMISTIC' ? 'bg-green-100 text-green-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {scenario.type}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-cesac-900 mb-2">{scenario.name}</h2>
                  <p className="text-gray-600">{scenario.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Empleados</p>
                  <p className="text-3xl font-bold text-cesac-700">{scenario.assumptions.employeeCount.toLocaleString()}</p>
                </div>
              </div>

              {/* Asunciones */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-cesac-900 mb-3">Asunciones del Escenario</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Horas formación/empleado</p>
                    <p className="text-lg font-bold text-cesac-900">{scenario.assumptions.trainingHoursPerEmployee}h</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Tasa de adopción</p>
                    <p className="text-lg font-bold text-cesac-900">{Math.round(scenario.assumptions.adoptionRate * 100)}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Tasa de finalización</p>
                    <p className="text-lg font-bold text-cesac-900">{Math.round(scenario.assumptions.completionRate * 100)}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Ganancia productividad</p>
                    <p className="text-lg font-bold text-success-500">+{Math.round(scenario.assumptions.productivityGain * 100)}%</p>
                  </div>
                </div>
              </div>

              {/* Cards de análisis */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CostBreakdownCard costs={scenario.costs} />
                <ROICard roi={scenario.roi} />
                <ProjectionsCard projections={scenario.projections} />
              </div>

              {/* Métricas adicionales */}
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Output Mensual</p>
                    <p className="text-lg font-bold text-cesac-900">{scenario.projections.monthlyOutput.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Calidad</p>
                    <p className="text-lg font-bold text-cesac-900">{scenario.projections.qualityIndex}/100</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Eficiencia</p>
                    <p className="text-lg font-bold text-success-500">+{scenario.projections.efficiencyGain}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Ahorro Anual</p>
                    <p className="text-lg font-bold text-success-500">€{(scenario.projections.costSaving / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">NPV</p>
                    <p className="text-lg font-bold text-cesac-900">€{(scenario.roi.npv / 1000000).toFixed(1)}M</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">TIR</p>
                    <p className="text-lg font-bold text-success-500">{scenario.roi.irr}%</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-cesac-700 to-cesac-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres calcular tu escenario personalizado?</h2>
          <p className="text-blue-100 mb-6">
            Usa nuestra calculadora interactiva para obtener proyecciones específicas para tu empresa.
          </p>
          <Link href="/produccion/calculadora" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cesac-900 font-semibold rounded-lg hover:bg-blue-50 transition">
            Abrir calculadora
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
