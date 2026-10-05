'use client';

import { useState } from 'react';
import Link from 'next/link';
import { calculateGigafactoryCost } from '@/lib/production-calculator';
import { typicalGigafactoryConfig, gigafactoryScenarios } from '@/content/production-scenarios';
import { Factory, ArrowLeft, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

export default function GigafactoryPage() {
  const [config, setConfig] = useState(typicalGigafactoryConfig);
  const [result, setResult] = useState<ReturnType<typeof calculateGigafactoryCost> | null>(null);

  const handleCalculate = () => {
    const calc = calculateGigafactoryCost(config);
    setResult(calc);
  };

  const handleChange = (field: keyof typeof config, value: number) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

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
              <Factory className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cesac-900">Caso Gigafactoría</h1>
              <p className="text-gray-600">Análisis de coste real para gigafactoría con 10,000+ empleados</p>
            </div>
          </div>
        </div>

        {/* Configuración */}
        <div className="bg-white rounded-xl border p-6 mb-8">
          <h2 className="text-xl font-bold text-cesac-900 mb-6">Configuración de la Gigafactoría</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Empleados totales</label>
              <input
                type="number"
                value={config.employeeCount}
                onChange={e => handleChange('employeeCount', parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Turnos por día</label>
              <input
                type="number"
                value={config.shiftsPerDay}
                onChange={e => handleChange('shiftsPerDay', parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Días laborables/año</label>
              <input
                type="number"
                value={config.workingDaysPerYear}
                onChange={e => handleChange('workingDaysPerYear', parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Líneas de producción</label>
              <input
                type="number"
                value={config.productionLines}
                onChange={e => handleChange('productionLines', parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Productos/hora</label>
              <input
                type="number"
                value={config.productsPerHour}
                onChange={e => handleChange('productsPerHour', parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tasa de defectos (%)</label>
              <input
                type="number"
                value={config.defectRate * 100}
                onChange={e => handleChange('defectRate', parseFloat(e.target.value) / 100)}
                step="0.1"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salario medio/hora (€)</label>
              <input
                type="number"
                value={config.avgHourlyWage}
                onChange={e => handleChange('avgHourlyWage', parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Coste energía/hora (€)</label>
              <input
                type="number"
                value={config.energyCostPerHour}
                onChange={e => handleChange('energyCostPerHour', parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Presupuesto formación actual (€/año)</label>
              <input
                type="number"
                value={config.currentTrainingBudget}
                onChange={e => handleChange('currentTrainingBudget', parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="mt-6 w-full py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition"
          >
            Calcular coste real
          </button>
        </div>

        {/* Resultados */}
        {result && (
          <div className="space-y-6">
            {/* Resumen */}
            <div className="bg-gradient-to-r from-cesac-700 to-cesac-900 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Resumen del Análisis</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-blue-200 text-xs mb-1">Coste Actual (anual)</p>
                  <p className="text-2xl font-bold">€{(result.currentCosts.total / 1000000).toFixed(2)}M</p>
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">Coste con IA (anual)</p>
                  <p className="text-2xl font-bold">€{(result.projectedCostsWithAI.total / 1000000).toFixed(2)}M</p>
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">Ahorro Anual</p>
                  <p className="text-2xl font-bold text-green-300">€{(result.savings.total / 1000000).toFixed(2)}M</p>
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">ROI</p>
                  <p className="text-2xl font-bold text-green-300">{result.roi}%</p>
                </div>
              </div>
            </div>

            {/* Comparativa de costes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="text-lg font-bold text-cesac-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-red-500" />
                  Costes Actuales (sin IA)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-700">Formación tradicional</span>
                    <span className="font-bold text-red-700">€{result.currentCosts.training.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-700">Coste de defectos</span>
                    <span className="font-bold text-red-700">€{result.currentCosts.defects.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-700">Coste de downtime</span>
                    <span className="font-bold text-red-700">€{result.currentCosts.downtime.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-100 rounded-lg border-2 border-red-200">
                    <span className="font-semibold text-gray-900">TOTAL ANUAL</span>
                    <span className="text-xl font-bold text-red-800">€{result.currentCosts.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="text-lg font-bold text-cesac-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-success-500" />
                  Costes con Plataforma IA
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Plataforma CESAC AI</span>
                    <span className="font-bold text-green-700">€{result.projectedCostsWithAI.platform.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Formación con IA</span>
                    <span className="font-bold text-green-700">€{result.projectedCostsWithAI.training.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Coste de defectos (reducido)</span>
                    <span className="font-bold text-green-700">€{result.projectedCostsWithAI.defects.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Coste de downtime (reducido)</span>
                    <span className="font-bold text-green-700">€{result.projectedCostsWithAI.downtime.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border-2 border-green-200">
                    <span className="font-semibold text-gray-900">TOTAL ANUAL</span>
                    <span className="text-xl font-bold text-green-800">€{result.projectedCostsWithAI.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ahorros detallados */}
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-lg font-bold text-cesac-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-success-500" />
                Ahorros Detallados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                  <p className="text-sm text-blue-700 mb-1">Ahorro en formación</p>
                  <p className="text-2xl font-bold text-blue-900">€{result.savings.training.toLocaleString()}</p>
                  <p className="text-xs text-blue-600 mt-1">60% reducción</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4">
                  <p className="text-sm text-emerald-700 mb-1">Ahorro en defectos</p>
                  <p className="text-2xl font-bold text-emerald-900">€{result.savings.defects.toLocaleString()}</p>
                  <p className="text-xs text-emerald-600 mt-1">50% reducción</p>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-4">
                  <p className="text-sm text-violet-700 mb-1">Ahorro en downtime</p>
                  <p className="text-2xl font-bold text-violet-900">€{result.savings.downtime.toLocaleString()}</p>
                  <p className="text-xs text-violet-600 mt-1">40% reducción</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-success-50 rounded-lg border-2 border-success-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-success-900">AHORRO TOTAL ANUAL</span>
                  <span className="text-3xl font-bold text-success-700">€{result.savings.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Escenarios de despliegue */}
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-lg font-bold text-cesac-900 mb-4">Escenarios de Despliegue</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {gigafactoryScenarios.map((scenario, i) => (
                  <div key={scenario.id} className="border rounded-lg p-4 hover:shadow-md transition">
                    <h4 className="font-semibold text-cesac-900 mb-2">{scenario.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Despliegue inicial:</span>
                        <span className="font-medium">{scenario.initialRollout.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Crecimiento:</span>
                        <span className="font-medium">{scenario.monthlyGrowth * 100}%/mes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tiempo completo:</span>
                        <span className="font-medium">{scenario.timeToFullDeployment} meses</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">ROI 12m:</span>
                        <span className="text-xl font-bold text-success-500">{scenario.expectedROI12}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
