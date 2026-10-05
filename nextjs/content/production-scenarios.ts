import type { ProductionScenario, GigafactoryConfig } from '../production-types';

// Escenarios predefinidos para diferentes tamaños de empresa

export const predefinedScenarios: ProductionScenario[] = [
  // STARTUP - Conservador
  {
    id: 'startup-conservative',
    name: 'Startup - Conservador',
    type: 'CONSERVATIVE',
    description: 'Implementación gradual en startup con 20 empleados. Adopción lenta pero segura.',
    assumptions: {
      employeeCount: 20,
      trainingHoursPerEmployee: 40,
      adoptionRate: 0.49,
      completionRate: 0.42,
      productivityGain: 0.09,
      errorReduction: 0.06,
      timeToValue: 3,
    },
    projections: {
      monthlyOutput: 1080,
      annualOutput: 12960,
      qualityIndex: 77,
      efficiencyGain: 9,
      costSaving: 14580,
      revenueIncrease: 4374,
    },
    costs: {
      platformLicense: 475,
      aiApiCalls: 154,
      storage: 2,
      support: 200,
      training: 250,
      integration: 208,
      maintenance: 48,
      totalMonthly: 1337,
      totalAnnual: 16044,
      costPerEmployee: 134,
      costPerTrainingHour: 17,
    },
    roi: {
      initialInvestment: 11000,
      monthlyCost: 1337,
      monthlyBenefit: 1580,
      paybackPeriod: 7.0,
      roi12Months: 15,
      roi36Months: 85,
      npv: 12500,
      irr: 28,
    },
  },
  
  // PYME - Realista
  {
    id: 'pyme-realistic',
    name: 'PYME - Realista',
    type: 'REALISTIC',
    description: 'Implementación estándar en PYME con 100 empleados. Retorno esperado en 8 meses.',
    assumptions: {
      employeeCount: 100,
      trainingHoursPerEmployee: 60,
      adoptionRate: 0.75,
      completionRate: 0.65,
      productivityGain: 0.18,
      errorReduction: 0.15,
      timeToValue: 3,
    },
    projections: {
      monthlyOutput: 8450,
      annualOutput: 101400,
      qualityIndex: 79,
      efficiencyGain: 18,
      costSaving: 121500,
      revenueIncrease: 36450,
    },
    costs: {
      platformLicense: 500,
      aiApiCalls: 1238,
      storage: 8,
      support: 800,
      training: 1250,
      integration: 417,
      maintenance: 50,
      totalMonthly: 4263,
      totalAnnual: 51156,
      costPerEmployee: 57,
      costPerTrainingHour: 1,
    },
    roi: {
      initialInvestment: 25000,
      monthlyCost: 4263,
      monthlyBenefit: 13163,
      paybackPeriod: 1.9,
      roi12Months: 210,
      roi36Months: 520,
      npv: 385000,
      irr: 175,
    },
  },
  
  // MID_SIZE - Optimista
  {
    id: 'midsize-optimistic',
    name: 'Empresa Mediana - Optimista',
    type: 'OPTIMISTIC',
    description: 'Despliegue rápido en empresa mediana con 500 empleados. Alto ROI esperado.',
    assumptions: {
      employeeCount: 500,
      trainingHoursPerEmployee: 80,
      adoptionRate: 0.96,
      completionRate: 0.84,
      productivityGain: 0.26,
      errorReduction: 0.26,
      timeToValue: 3.2,
    },
    projections: {
      monthlyOutput: 64512,
      annualOutput: 774144,
      qualityIndex: 82,
      efficiencyGain: 26,
      costSaving: 1098240,
      revenueIncrease: 329472,
    },
    costs: {
      platformLicense: 425,
      aiApiCalls: 8294,
      storage: 60,
      support: 2500,
      training: 6250,
      integration: 2083,
      maintenance: 43,
      totalMonthly: 19655,
      totalAnnual: 235860,
      costPerEmployee: 41,
      costPerTrainingHour: 1,
    },
    roi: {
      initialInvestment: 100000,
      monthlyCost: 19655,
      monthlyBenefit: 118976,
      paybackPeriod: 0.8,
      roi12Months: 460,
      roi36Months: 1250,
      npv: 3250000,
      irr: 395,
    },
  },
  
  // ENTERPRISE - Realista
  {
    id: 'enterprise-realistic',
    name: 'Gran Empresa - Realista',
    type: 'REALISTIC',
    description: 'Transformación digital completa en gran empresa con 2,000 empleados.',
    assumptions: {
      employeeCount: 2000,
      trainingHoursPerEmployee: 100,
      adoptionRate: 0.85,
      completionRate: 0.75,
      productivityGain: 0.22,
      errorReduction: 0.25,
      timeToValue: 6,
    },
    projections: {
      monthlyOutput: 255000,
      annualOutput: 3060000,
      qualityIndex: 81,
      efficiencyGain: 22,
      costSaving: 4620000,
      revenueIncrease: 1386000,
    },
    costs: {
      platformLicense: 400,
      aiApiCalls: 27500,
      storage: 255,
      support: 8000,
      training: 25000,
      integration: 8333,
      maintenance: 40,
      totalMonthly: 69528,
      totalAnnual: 834336,
      costPerEmployee: 41,
      costPerTrainingHour: 0,
    },
    roi: {
      initialInvestment: 400000,
      monthlyCost: 69528,
      monthlyBenefit: 500500,
      paybackPeriod: 0.8,
      roi12Months: 520,
      roi36Months: 1450,
      npv: 14500000,
      irr: 485,
    },
  },
  
  // GIGAFACTORY - Realista
  {
    id: 'gigafactory-realistic',
    name: 'Gigafactoría - Realista',
    type: 'REALISTIC',
    description: 'Despliegue masivo en gigafactoría con 10,000 empleados. Transformación industrial completa.',
    assumptions: {
      employeeCount: 10000,
      trainingHoursPerEmployee: 120,
      adoptionRate: 0.9,
      completionRate: 0.8,
      productivityGain: 0.25,
      errorReduction: 0.3,
      timeToValue: 8,
    },
    projections: {
      monthlyOutput: 1500000,
      annualOutput: 18000000,
      qualityIndex: 83,
      efficiencyGain: 25,
      costSaving: 31500000,
      revenueIncrease: 9450000,
    },
    costs: {
      platformLicense: 375,
      aiApiCalls: 165000,
      storage: 1275,
      support: 8000,
      training: 125000,
      integration: 41667,
      maintenance: 38,
      totalMonthly: 341355,
      totalAnnual: 4096260,
      costPerEmployee: 38,
      costPerTrainingHour: 0,
    },
    roi: {
      initialInvestment: 2000000,
      monthlyCost: 341355,
      monthlyBenefit: 3412500,
      paybackPeriod: 0.6,
      roi12Months: 780,
      roi36Months: 2100,
      npv: 95000000,
      irr: 700,
    },
  },
];

// Configuración típica de gigafactoría
export const typicalGigafactoryConfig: GigafactoryConfig = {
  name: 'Gigafactoría Ejemplo',
  location: 'España',
  employeeCount: 10000,
  shiftsPerDay: 3,
  workingDaysPerYear: 300,
  productionLines: 20,
  productsPerHour: 500,
  defectRate: 0.05, // 5%
  avgHourlyWage: 25,
  energyCostPerHour: 500,
  currentTrainingBudget: 2000000, // 2M€ año
};

// Escenarios específicos para gigafactoría
export const gigafactoryScenarios = [
  {
    id: 'gigafactory-conservative',
    name: 'Gigafactoría Conservadora',
    description: 'Implementación gradual con enfoque en líneas de producción críticas.',
    employeeCount: 10000,
    initialRollout: 2000, // 20% primeros 6 meses
    monthlyGrowth: 0.15, // 15% crecimiento mensual
    timeToFullDeployment: 18, // meses
    expectedROI12: 450,
    expectedROI36: 1200,
  },
  {
    id: 'gigafactory-realistic',
    name: 'Gigafactoría Realista',
    description: 'Despliegue por fases con pilotos en cada línea de producción.',
    employeeCount: 10000,
    initialRollout: 4000, // 40% primeros 6 meses
    monthlyGrowth: 0.25, // 25% crecimiento mensual
    timeToFullDeployment: 12, // meses
    expectedROI12: 780,
    expectedROI36: 2100,
  },
  {
    id: 'gigafactory-optimistic',
    name: 'Gigafactoría Optimista',
    description: 'Despliegue agresivo con transformación completa en 6 meses.',
    employeeCount: 10000,
    initialRollout: 6000, // 60% primeros 6 meses
    monthlyGrowth: 0.35, // 35% crecimiento mensual
    timeToFullDeployment: 8, // meses
    expectedROI12: 1050,
    expectedROI36: 2800,
  },
];

// Costes reales de APIs de IA (precios 2025)
export const realAICosts = {
  openai: {
    gpt4_turbo: {
      input: 0.00001, // $/token
      output: 0.00003,
      avg_query_cost: 0.03, // $/query (1500 tokens input + 500 output)
    },
    gpt4o: {
      input: 0.000005,
      output: 0.000015,
      avg_query_cost: 0.015,
    },
    gpt35_turbo: {
      input: 0.0000005,
      output: 0.0000015,
      avg_query_cost: 0.003,
    },
  },
  anthropic: {
    claude3_opus: {
      input: 0.000015,
      output: 0.000075,
      avg_query_cost: 0.045,
    },
    claude3_sonnet: {
      input: 0.000003,
      output: 0.000015,
      avg_query_cost: 0.009,
    },
    claude3_haiku: {
      input: 0.00000025,
      output: 0.00000125,
      avg_query_cost: 0.00075,
    },
  },
  // Coste medio ponderado (mezcla de modelos)
  blended: {
    avg_query_cost: 0.012, // ~1 centavo por query
    monthly_per_1000_queries: 12, // $12 por 1000 queries
  },
};

// Comparativa con formación tradicional
export const traditionalVsAI = {
  instructor_led: {
    cost_per_employee: 800, // euros
    cost_per_hour: 80, // euros
    scalability: 'LIMITED',
    availability: 'SCHEDULED',
    personalization: 'LOW',
  },
  elearning_traditional: {
    cost_per_employee: 300, // euros
    cost_per_hour: 30, // euros
    scalability: 'MEDIUM',
    availability: 'ON_DEMAND',
    personalization: 'LOW',
  },
  blended: {
    cost_per_employee: 550, // euros
    cost_per_hour: 55, // euros
    scalability: 'MEDIUM',
    availability: 'HYBRID',
    personalization: 'MEDIUM',
  },
  ai_first: {
    cost_per_employee: 150, // euros
    cost_per_hour: 15, // euros
    scalability: 'UNLIMITED',
    availability: '24_7',
    personalization: 'HIGH',
  },
};
