'use client';

import type { CostBreakdown, ROIAnalysis, ProductionProjections } from '@/lib/production-types';
import { TrendingUp, DollarSign, Clock, Target, CheckCircle, AlertCircle } from 'lucide-react';

interface CostBreakdownCardProps {
  costs: CostBreakdown;
}

export function CostBreakdownCard({ costs }: CostBreakdownCardProps) {
  const items = [
    { label: 'Licencia plataforma', value: costs.platformLicense, color: 'bg-blue-500' },
    { label: 'APIs de IA', value: costs.aiApiCalls, color: 'bg-violet-500' },
    { label: 'Almacenamiento', value: costs.storage, color: 'bg-cyan-500' },
    { label: 'Soporte', value: costs.support, color: 'bg-emerald-500' },
    { label: 'Formación', value: costs.training, color: 'bg-amber-500' },
    { label: 'Integración', value: costs.integration, color: 'bg-rose-500' },
    { label: 'Mantenimiento', value: costs.maintenance, color: 'bg-gray-500' },
  ];

  const max = Math.max(...items.map(i => i.value));

  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="text-lg font-bold text-cesac-900 mb-4 flex items-center gap-2">
        <DollarSign className="w-5 h-5 text-cesac-600" />
        Desglose de Costes Mensuales
      </h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">{item.label}</span>
              <span className="font-medium">€{item.value.toLocaleString()}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${item.color} rounded-full transition-all`}
                style={{ width: `${(item.value / max) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-cesac-900">Total Mensual</span>
          <span className="text-2xl font-bold text-cesac-700">€{costs.totalMonthly.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Coste por empleado</span>
          <span>€{costs.costPerEmployee}/mes</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Coste por hora de formación</span>
          <span>€{costs.costPerTrainingHour}</span>
        </div>
      </div>
    </div>
  );
}

interface ROICardProps {
  roi: ROIAnalysis;
}

export function ROICard({ roi }: ROICardProps) {
  return (
    <div className="bg-gradient-to-br from-cesac-700 to-cesac-900 rounded-xl p-6 text-white">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        Análisis ROI
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-blue-200 text-xs mb-1">Inversión Inicial</p>
          <p className="text-2xl font-bold">€{roi.initialInvestment.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-blue-200 text-xs mb-1">Payback</p>
          <p className="text-2xl font-bold">{roi.paybackPeriod} meses</p>
        </div>
        <div>
          <p className="text-blue-200 text-xs mb-1">ROI 12 meses</p>
          <p className="text-2xl font-bold text-green-300">{roi.roi12Months}%</p>
        </div>
        <div>
          <p className="text-blue-200 text-xs mb-1">ROI 36 meses</p>
          <p className="text-2xl font-bold text-green-300">{roi.roi36Months}%</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-blue-200">Coste mensual</span>
          <span className="font-medium">€{roi.monthlyCost.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-blue-200">Beneficio mensual</span>
          <span className="font-medium text-green-300">€{roi.monthlyBenefit.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-blue-200">NPV (36 meses)</span>
          <span className="font-medium">€{roi.npv.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-blue-200">TIR anual</span>
          <span className="font-medium text-green-300">{roi.irr}%</span>
        </div>
      </div>
    </div>
  );
}

interface ProjectionsCardProps {
  projections: ProductionProjections;
}

export function ProjectionsCard({ projections }: ProjectionsCardProps) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="text-lg font-bold text-cesac-900 mb-4 flex items-center gap-2">
        <Target className="w-5 h-5 text-cesac-600" />
        Proyecciones de Producción
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Output Mensual</p>
          <p className="text-xl font-bold text-cesac-900">{projections.monthlyOutput.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Output Anual</p>
          <p className="text-xl font-bold text-cesac-900">{projections.annualOutput.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Índice de Calidad</p>
          <p className="text-xl font-bold text-cesac-900">{projections.qualityIndex}/100</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Ganancia Eficiencia</p>
          <p className="text-xl font-bold text-success-500">+{projections.efficiencyGain}%</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Ahorro Anual</p>
          <p className="text-xl font-bold text-green-700">€{projections.costSaving.toLocaleString()}</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Aumento Ingresos</p>
          <p className="text-xl font-bold text-blue-700">€{projections.revenueIncrease.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

interface RecommendationsCardProps {
  recommendations: string[];
  risks: string[];
}

export function RecommendationsCard({ recommendations, risks }: RecommendationsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl border p-6">
        <h3 className="text-lg font-bold text-cesac-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-success-500" />
          Recomendaciones
        </h3>
        <ul className="space-y-2">
          {recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-success-500 shrink-0 mt-0.5" />
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-xl border p-6">
        <h3 className="text-lg font-bold text-cesac-900 mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-500" />
          Riesgos a Considerar
        </h3>
        <ul className="space-y-2">
          {risks.map((risk, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{risk}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ScenarioComparisonProps {
  scenarios: Array<{
    name: string;
    totalCost: number;
    roi: number;
    payback: number;
  }>;
}

export function ScenarioComparison({ scenarios }: ScenarioComparisonProps) {
  const maxCost = Math.max(...scenarios.map(s => s.totalCost));
  
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="text-lg font-bold text-cesac-900 mb-4">Comparativa de Escenarios</h3>
      <div className="space-y-4">
        {scenarios.map((scenario, i) => (
          <div key={i} className="border-b pb-4 last:border-b-0 last:pb-0">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-cesac-900">{scenario.name}</h4>
              <div className="text-right">
                <p className="text-sm font-bold text-cesac-700">€{scenario.totalCost.toLocaleString()}/mes</p>
                <p className="text-xs text-success-500">ROI: {scenario.roi}% · Payback: {scenario.payback}m</p>
              </div>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cesac-600 to-cesac-700 rounded-full transition-all"
                style={{ width: `${(scenario.totalCost / maxCost) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
