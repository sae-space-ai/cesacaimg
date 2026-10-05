'use client';

import { useState } from 'react';
import Link from 'next/link';
import { calculateProduction } from '@/lib/production-calculator';
import type { CompanySize, ScenarioType, TrainingModel, ProductionCalculatorOutput } from '@/lib/production-types';
import { CostBreakdownCard, ROICard, ProjectionsCard, RecommendationsCard } from '@/components/production/ProductionComponents';
import { Calculator, ArrowLeft, Users, Target, Briefcase, BookOpen } from 'lucide-react';

export default function ProductionCalculatorPage() {
  const [companySize, setCompanySize] = useState<CompanySize>('PYME');
  const [scenario, setScenario] = useState<ScenarioType>('REALISTIC');
  const [trainingModel, setTrainingModel] = useState<TrainingModel>('AI_FIRST');
  const [employeeCount, setEmployeeCount] = useState(100);
  const [result, setResult] = useState<ProductionCalculatorOutput | null>(null);

  const handleCalculate = () => {
    const output = calculateProduction({
      companySize,
      employeeCount,
      trainingModel,
      scenario,
      customAssumptions: {
        employeeCount,
      },
    });
    setResult(output);
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
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cesac-900">Calculadora de Producción</h1>
              <p className="text-gray-600">Calcula el coste real y ROI de la plataforma IA para tu empresa</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-xl border p-6 mb-8">
          <h2 className="text-xl font-bold text-cesac-900 mb-6">Configura tu escenario</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tamaño de empresa */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Tamaño de empresa
              </label>
              <select
                value={companySize}
                onChange={e => setCompanySize(e.target.value as CompanySize)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
              >
                <option value="STARTUP">Startup (20 empleados)</option>
                <option value="PYME">PYME (100 empleados)</option>
                <option value="MID_SIZE">Empresa Mediana (500 empleados)</option>
                <option value="ENTERPRISE">Gran Empresa (2,000 empleados)</option>
                <option value="GIGAFACTORY">Gigafactoría (10,000+ empleados)</option>
              </select>
            </div>

            {/* Número de empleados */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Número de empleados
              </label>
              <input
                type="number"
                value={employeeCount}
                onChange={e => setEmployeeCount(parseInt(e.target.value))}
                min="1"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
              />
            </div>

            {/* Escenario */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Tipo de escenario
              </label>
              <select
                value={scenario}
                onChange={e => setScenario(e.target.value as ScenarioType)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
              >
                <option value="CONSERVATIVE">Conservador (adopción gradual)</option>
                <option value="REALISTIC">Realista (implementación estándar)</option>
                <option value="OPTIMISTIC">Optimista (despliegue rápido)</option>
                <option value="AGGRESSIVE">Agresivo (transformación completa)</option>
              </select>
            </div>

            {/* Modelo de formación */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Modelo de formación
              </label>
              <select
                value={trainingModel}
                onChange={e => setTrainingModel(e.target.value as TrainingModel)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
              >
                <option value="SELF_PACED">Autoaprendizaje (más económico)</option>
                <option value="AI_FIRST">IA Primero (recomendado)</option>
                <option value="BLENDED">Blended (mixto)</option>
                <option value="INSTRUCTOR_LED">Con instructor (más costoso)</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="mt-6 w-full py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition"
          >
            Calcular escenario
          </button>
        </div>

        {/* Resultados */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cesac-700 to-cesac-900 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{result.scenario.name}</h2>
              <p className="text-blue-100">{result.scenario.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div>
                  <p className="text-blue-200 text-xs mb-1">Coste Mensual</p>
                  <p className="text-2xl font-bold">€{result.totalCost.totalMonthly.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">ROI 12 meses</p>
                  <p className="text-2xl font-bold text-green-300">{result.roi.roi12Months}%</p>
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">Payback</p>
                  <p className="text-2xl font-bold">{result.roi.paybackPeriod} meses</p>
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">Break-even</p>
                  <p className="text-2xl font-bold">{result.breakEvenPoint} meses</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CostBreakdownCard costs={result.totalCost} />
              <ROICard roi={result.roi} />
              <ProjectionsCard projections={result.projections} />
            </div>

            <RecommendationsCard recommendations={result.recommendations} risks={result.risks} />

            {/* Uso de IA */}
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-lg font-bold text-cesac-900 mb-4">Uso de IA Estimado</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Queries/mes</p>
                  <p className="text-xl font-bold text-cesac-900">{result.aiUsage.apiCallsPerMonth.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Tokens/query</p>
                  <p className="text-xl font-bold text-cesac-900">{result.aiUsage.tokensPerQuery.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Almacenamiento</p>
                  <p className="text-xl font-bold text-cesac-900">{result.aiUsage.embeddingStorageGB} GB</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Horas cómputo/mes</p>
                  <p className="text-xl font-bold text-cesac-900">{result.aiUsage.computeHours.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Datos procesados</p>
                  <p className="text-xl font-bold text-cesac-900">{result.aiUsage.dataProcessedGB} GB/mes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Queries/empleado/día</p>
                  <p className="text-xl font-bold text-cesac-900">{result.aiUsage.queriesPerEmployeePerDay}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
