// Calculadora de producción y coste real de la plataforma IA

import type {
  ProductionCalculatorInput,
  ProductionCalculatorOutput,
  CostBreakdown,
  ProductionProjections,
  ROIAnalysis,
  AIUsageMetrics,
  ScenarioAssumptions,
} from './production-types';
import {
  PLATFORM_COST_MODEL,
  COMPANY_SIZE_DEFAULTS,
  SCENARIO_MULTIPLIERS,
} from './production-types';

export function calculateProduction(input: ProductionCalculatorInput): ProductionCalculatorOutput {
  // 1. Calcular asunciones base
  const baseAssumptions = COMPANY_SIZE_DEFAULTS[input.companySize];
  const scenarioMultiplier = SCENARIO_MULTIPLIERS[input.scenario];
  
  const assumptions: ScenarioAssumptions = {
    employeeCount: input.customAssumptions?.employeeCount ?? baseAssumptions.employeeCount ?? 100,
    trainingHoursPerEmployee: input.customAssumptions?.trainingHoursPerEmployee ?? baseAssumptions.trainingHoursPerEmployee ?? 60,
    adoptionRate: (input.customAssumptions?.adoptionRate ?? baseAssumptions.adoptionRate ?? 0.75) * scenarioMultiplier.adoption,
    completionRate: (input.customAssumptions?.completionRate ?? baseAssumptions.completionRate ?? 0.65) * scenarioMultiplier.completion,
    productivityGain: (input.customAssumptions?.productivityGain ?? baseAssumptions.productivityGain ?? 0.18) * scenarioMultiplier.productivity,
    errorReduction: (input.customAssumptions?.errorReduction ?? baseAssumptions.errorReduction ?? 0.15) * scenarioMultiplier.errorReduction,
    timeToValue: (input.customAssumptions?.timeToValue ?? baseAssumptions.timeToValue ?? 3) * scenarioMultiplier.timeToValue,
  };

  // Limitar tasas a máximo 1.0
  assumptions.adoptionRate = Math.min(assumptions.adoptionRate, 1.0);
  assumptions.completionRate = Math.min(assumptions.completionRate, 1.0);
  assumptions.productivityGain = Math.min(assumptions.productivityGain, 0.5);
  assumptions.errorReduction = Math.min(assumptions.errorReduction, 0.5);

  // 2. Calcular uso de IA
  const aiUsage = calculateAIUsage(assumptions);

  // 3. Calcular costes
  const costs = calculateCosts(assumptions, aiUsage, input.trainingModel);

  // 4. Calcular proyecciones
  const projections = calculateProjections(assumptions, input);

  // 5. Calcular ROI
  const roi = calculateROI(costs, projections, assumptions);

  // 6. Generar recomendaciones y riesgos
  const recommendations = generateRecommendations(assumptions, roi);
  const risks = generateRisks(assumptions, input);

  // 7. Calcular punto de equilibrio
  const breakEvenPoint = roi.monthlyBenefit > 0 
    ? Math.ceil(costs.totalMonthly / roi.monthlyBenefit)
    : 0;

  // 8. Construir escenario
  const scenario = {
    id: `${input.companySize}-${input.scenario}`.toLowerCase(),
    name: `${getScenarioName(input.scenario)} - ${getCompanySizeName(input.companySize)}`,
    type: input.scenario,
    description: getScenarioDescription(input.scenario, input.companySize),
    assumptions,
    projections,
    costs,
    roi,
  };

  return {
    scenario,
    totalCost: costs,
    projections,
    roi,
    aiUsage,
    recommendations,
    risks,
    breakEvenPoint,
  };
}

function calculateAIUsage(assumptions: ScenarioAssumptions): AIUsageMetrics {
  const activeEmployees = Math.floor(assumptions.employeeCount * assumptions.adoptionRate);
  const queriesPerEmployeePerDay = 8; // promedio
  const tokensPerQuery = 1500; // promedio
  
  return {
    tokensPerQuery,
    queriesPerEmployeePerDay,
    embeddingStorageGB: Math.max(1, Math.floor(activeEmployees * 0.5)), // 0.5 GB por empleado activo
    apiCallsPerMonth: activeEmployees * queriesPerEmployeePerDay * 22, // 22 días laborables
    computeHours: activeEmployees * 2, // 2 horas de cómputo por empleado/mes
    dataProcessedGB: Math.max(10, Math.floor(activeEmployees * 2)), // 2 GB por empleado/mes
  };
}

function calculateCosts(
  assumptions: ScenarioAssumptions,
  aiUsage: AIUsageMetrics,
  trainingModel: string
): CostBreakdown {
  const activeEmployees = Math.floor(assumptions.employeeCount * assumptions.adoptionRate);
  
  // Calcular descuento por volumen
  let volumeDiscount = 0;
  for (const tier of PLATFORM_COST_MODEL.volumeDiscounts) {
    if (assumptions.employeeCount >= tier.threshold) {
      volumeDiscount = tier.discount / 100;
    }
  }
  
  // Coste de licencia base
  const baseLicense = PLATFORM_COST_MODEL.baseLicense * (1 - volumeDiscount);
  
  // Coste por usuario
  const perUserCost = PLATFORM_COST_MODEL.perUserCost * activeEmployees * (1 - volumeDiscount);
  
  // Coste de queries IA
  const aiQueryCost = (aiUsage.apiCallsPerMonth / 1000) * PLATFORM_COST_MODEL.aiQueryCost;
  
  // Coste de almacenamiento
  const storageCost = aiUsage.embeddingStorageGB * PLATFORM_COST_MODEL.storageCostPerGB;
  
  // Coste de soporte (según tamaño)
  let supportCost = PLATFORM_COST_MODEL.supportTiers.basic;
  if (assumptions.employeeCount >= 5000) supportCost = PLATFORM_COST_MODEL.supportTiers.enterprise;
  else if (assumptions.employeeCount >= 1000) supportCost = PLATFORM_COST_MODEL.supportTiers.premium;
  else if (assumptions.employeeCount >= 200) supportCost = PLATFORM_COST_MODEL.supportTiers.standard;
  
  // Coste de formación inicial (one-time amortizado en 12 meses)
  const trainingCost = assumptions.employeeCount * 150 / 12; // 150€ por empleado, amortizado
  
  // Coste de integración (one-time amortizado en 24 meses)
  const integrationCost = Math.max(5000, assumptions.employeeCount * 50) / 24;
  
  // Coste de mantenimiento
  const maintenanceCost = baseLicense * 0.1; // 10% de la licencia
  
  // Coste adicional por modelo de formación
  let modelMultiplier = 1;
  if (trainingModel === 'INSTRUCTOR_LED') modelMultiplier = 1.3;
  else if (trainingModel === 'BLENDED') modelMultiplier = 1.15;
  else if (trainingModel === 'AI_FIRST') modelMultiplier = 0.9;
  
  const totalMonthly = (baseLicense + perUserCost + aiQueryCost + storageCost + supportCost + trainingCost + integrationCost + maintenanceCost) * modelMultiplier;
  
  return {
    platformLicense: baseLicense,
    aiApiCalls: aiQueryCost,
    storage: storageCost,
    support: supportCost,
    training: trainingCost,
    integration: integrationCost,
    maintenance: maintenanceCost,
    totalMonthly: Math.round(totalMonthly),
    totalAnnual: Math.round(totalMonthly * 12),
    costPerEmployee: Math.round(totalMonthly / Math.max(1, activeEmployees)),
    costPerTrainingHour: Math.round(totalMonthly / Math.max(1, assumptions.trainingHoursPerEmployee * activeEmployees)),
  };
}

function calculateProjections(
  assumptions: ScenarioAssumptions,
  input: ProductionCalculatorInput
): ProductionProjections {
  const activeEmployees = Math.floor(assumptions.employeeCount * assumptions.adoptionRate);
  const trainedEmployees = Math.floor(activeEmployees * assumptions.completionRate);
  
  // Salario medio estimado (España 2025)
  const avgSalary = 35000; // euros/año
  const hourlyCost = avgSalary / 1800; // 1800 horas/año
  
  // Beneficio por ganancia de productividad
  const productivityBenefit = trainedEmployees * 
    assumptions.trainingHoursPerEmployee * 
    assumptions.productivityGain * 
    hourlyCost;
  
  // Beneficio por reducción de errores
  const errorBenefit = trainedEmployees * 
    assumptions.trainingHoursPerEmployee * 
    assumptions.errorReduction * 
    hourlyCost * 0.5; // Los errores cuestan aproximadamente la mitad
  
  // Beneficio total anual
  const annualBenefit = productivityBenefit + errorBenefit;
  
  // Proyección mensual
  const monthlyBenefit = annualBenefit / 12;
  
  // Output estimado (unidades arbitrarias basadas en productividad)
  const baselineOutput = trainedEmployees * 100; // 100 unidades/empleado/mes
  const monthlyOutput = Math.round(baselineOutput * (1 + assumptions.productivityGain));
  
  return {
    monthlyOutput,
    annualOutput: monthlyOutput * 12,
    qualityIndex: Math.round(75 + (assumptions.errorReduction * 25)), // 75-100
    efficiencyGain: Math.round(assumptions.productivityGain * 100),
    costSaving: Math.round(annualBenefit),
    revenueIncrease: Math.round(annualBenefit * 0.3), // 30% del beneficio se traduce en más ingresos
  };
}

function calculateROI(
  costs: CostBreakdown,
  projections: ProductionProjections,
  assumptions: ScenarioAssumptions
): ROIAnalysis {
  const initialInvestment = costs.integration * 24 + costs.training * 12; // Costes one-time
  const monthlyBenefit = (projections.costSaving + projections.revenueIncrease) / 12;
  
  const paybackPeriod = monthlyBenefit > 0 
    ? initialInvestment / monthlyBenefit 
    : 0;
  
  // ROI a 12 meses
  const totalCost12 = costs.totalAnnual + initialInvestment;
  const totalBenefit12 = monthlyBenefit * 12;
  const roi12Months = totalCost12 > 0 
    ? ((totalBenefit12 - totalCost12) / totalCost12) * 100 
    : 0;
  
  // ROI a 36 meses
  const totalCost36 = costs.totalAnnual * 3 + initialInvestment;
  const totalBenefit36 = monthlyBenefit * 36;
  const roi36Months = totalCost36 > 0 
    ? ((totalBenefit36 - totalCost36) / totalCost36) * 100 
    : 0;
  
  // NPV (Net Present Value) - tasa de descuento 8%
  const discountRate = 0.08;
  let npv = -initialInvestment;
  for (let i = 1; i <= 36; i++) {
    npv += (monthlyBenefit - costs.totalMonthly) / Math.pow(1 + discountRate / 12, i);
  }
  
  // IRR (Internal Rate of Return) - aproximación
  const irr = roi36Months > 0 ? roi36Months / 36 * 12 : 0;
  
  return {
    initialInvestment: Math.round(initialInvestment),
    monthlyCost: costs.totalMonthly,
    monthlyBenefit: Math.round(monthlyBenefit),
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    roi12Months: Math.round(roi12Months),
    roi36Months: Math.round(roi36Months),
    npv: Math.round(npv),
    irr: Math.round(irr),
  };
}

function generateRecommendations(
  assumptions: ScenarioAssumptions,
  roi: ROIAnalysis
): string[] {
  const recommendations: string[] = [];
  
  if (roi.paybackPeriod > 12) {
    recommendations.push('Considera empezar con un piloto en un departamento específico para reducir el riesgo inicial.');
  }
  
  if (assumptions.adoptionRate < 0.7) {
    recommendations.push('Invierte en change management y comunicación interna para mejorar la adopción.');
  }
  
  if (assumptions.completionRate < 0.6) {
    recommendations.push('Implementa incentivos y gamificación para aumentar la tasa de finalización.');
  }
  
  if (assumptions.employeeCount >= 1000) {
    recommendations.push('Considera el plan Enterprise para obtener descuentos por volumen y soporte dedicado.');
  }
  
  if (roi.roi12Months > 100) {
    recommendations.push('Excelente ROI proyectado. Considera acelerar el despliegue para maximizar beneficios.');
  }
  
  recommendations.push('Comienza con el plan Standard y escala según resultados.');
  recommendations.push('Utiliza el Tutor IA para reducir la carga de instructores humanos.');
  recommendations.push('Implementa métricas de seguimiento desde el primer día.');
  
  return recommendations;
}

function generateRisks(
  assumptions: ScenarioAssumptions,
  input: ProductionCalculatorInput
): string[] {
  const risks: string[] = [];
  
  if (input.scenario === 'AGGRESSIVE') {
    risks.push('Las proyecciones agresivas pueden no materializarse. Considera un escenario más conservador.');
  }
  
  if (assumptions.employeeCount >= 5000) {
    risks.push('Despliegues a gran escala requieren gestión del cambio robusta y soporte dedicado.');
  }
  
  if (assumptions.timeToValue > 6) {
    risks.push('El tiempo largo hasta el valor puede afectar el compromiso de los stakeholders.');
  }
  
  risks.push('La adopción real puede ser menor que la proyectada sin un plan de comunicación adecuado.');
  risks.push('Los costes de IA pueden variar según el proveedor y el volumen de uso.');
  risks.push('La integración con sistemas existentes puede requerir más tiempo del esperado.');
  
  return risks;
}

function getScenarioName(scenario: string): string {
  const names: Record<string, string> = {
    CONSERVATIVE: 'Conservador',
    REALISTIC: 'Realista',
    OPTIMISTIC: 'Optimista',
    AGGRESSIVE: 'Agresivo',
  };
  return names[scenario] || scenario;
}

function getCompanySizeName(size: string): string {
  const names: Record<string, string> = {
    STARTUP: 'Startup',
    PYME: 'PYME',
    MID_SIZE: 'Empresa Mediana',
    ENTERPRISE: 'Gran Empresa',
    GIGAFACTORY: 'Gigafactoría',
  };
  return names[size] || size;
}

function getScenarioDescription(scenario: string, size: string): string {
  const descriptions: Record<string, string> = {
    'CONSERVATIVE-STARTUP': 'Escenario conservador para startup con adopción gradual.',
    'REALISTIC-PYME': 'Escenario realista para PYME con implementación estándar.',
    'OPTIMISTIC-MID_SIZE': 'Escenario optimista para empresa mediana con rápido despliegue.',
    'AGGRESSIVE-ENTERPRISE': 'Escenario agresivo para gran empresa con transformación completa.',
    'REALISTIC-GIGAFACTORY': 'Escenario realista para gigafactoría con 10,000+ empleados.',
  };
  return descriptions[`${scenario}-${size}`] || `Escenario ${getScenarioName(scenario)} para ${getCompanySizeName(size)}.`;
}

// Función auxiliar para calcular coste específico de gigafactoría
export function calculateGigafactoryCost(config: {
  employeeCount: number;
  shiftsPerDay: number;
  workingDaysPerYear: number;
  productionLines: number;
  productsPerHour: number;
  defectRate: number;
  avgHourlyWage: number;
  energyCostPerHour: number;
  currentTrainingBudget: number;
}): {
  currentCosts: {
    training: number;
    defects: number;
    downtime: number;
    total: number;
  };
  projectedCostsWithAI: {
    platform: number;
    training: number;
    defects: number;
    downtime: number;
    total: number;
  };
  savings: {
    training: number;
    defects: number;
    downtime: number;
    total: number;
  };
  roi: number;
} {
  // Costes actuales
  const currentTrainingCost = config.currentTrainingBudget;
  const currentDefectCost = config.productionLines * 
    config.productsPerHour * 
    config.workingDaysPerYear * 
    config.shiftsPerDay * 
    config.defectRate * 
    config.avgHourlyWage * 2; // Coste de defecto = 2x tiempo
  
  const currentDowntimeCost = config.productionLines * 
    config.productsPerHour * 
    config.workingDaysPerYear * 
    0.05 * // 5% downtime
    config.avgHourlyWage;
  
  const currentTotal = currentTrainingCost + currentDefectCost + currentDowntimeCost;
  
  // Costes con IA (reducción estimada)
  const aiPlatformCost = PLATFORM_COST_MODEL.baseLicense * 12 + 
    PLATFORM_COST_MODEL.perUserCost * config.employeeCount * 12 +
    PLATFORM_COST_MODEL.supportTiers.enterprise * 12;
  
  const reducedTrainingCost = currentTrainingCost * 0.4; // 60% reducción
  const reducedDefectCost = currentDefectCost * 0.5; // 50% reducción
  const reducedDowntimeCost = currentDowntimeCost * 0.6; // 40% reducción
  
  const projectedTotal = aiPlatformCost + reducedTrainingCost + reducedDefectCost + reducedDowntimeCost;
  
  // Ahorros
  const trainingSavings = currentTrainingCost - reducedTrainingCost;
  const defectSavings = currentDefectCost - reducedDefectCost;
  const downtimeSavings = currentDowntimeCost - reducedDowntimeCost;
  const totalSavings = trainingSavings + defectSavings + downtimeSavings - aiPlatformCost;
  
  const roi = aiPlatformCost > 0 ? (totalSavings / aiPlatformCost) * 100 : 0;
  
  return {
    currentCosts: {
      training: Math.round(currentTrainingCost),
      defects: Math.round(currentDefectCost),
      downtime: Math.round(currentDowntimeCost),
      total: Math.round(currentTotal),
    },
    projectedCostsWithAI: {
      platform: Math.round(aiPlatformCost),
      training: Math.round(reducedTrainingCost),
      defects: Math.round(reducedDefectCost),
      downtime: Math.round(reducedDowntimeCost),
      total: Math.round(projectedTotal),
    },
    savings: {
      training: Math.round(trainingSavings),
      defects: Math.round(defectSavings),
      downtime: Math.round(downtimeSavings),
      total: Math.round(totalSavings),
    },
    roi: Math.round(roi),
  };
}
