// Tipos para el sistema de cálculo de producción y coste de plataforma IA

export type ScenarioType = 'CONSERVATIVE' | 'REALISTIC' | 'OPTIMISTIC' | 'AGGRESSIVE';
export type CompanySize = 'STARTUP' | 'PYME' | 'MID_SIZE' | 'ENTERPRISE' | 'GIGAFACTORY';
export type TrainingModel = 'SELF_PACED' | 'INSTRUCTOR_LED' | 'BLENDED' | 'AI_FIRST';

export interface ProductionScenario {
  id: string;
  name: string;
  type: ScenarioType;
  description: string;
  assumptions: ScenarioAssumptions;
  projections: ProductionProjections;
  costs: CostBreakdown;
  roi: ROIAnalysis;
}

export interface ScenarioAssumptions {
  employeeCount: number;
  trainingHoursPerEmployee: number;
  adoptionRate: number; // 0-1
  completionRate: number; // 0-1
  productivityGain: number; // 0-1
  errorReduction: number; // 0-1
  timeToValue: number; // meses
}

export interface ProductionProjections {
  monthlyOutput: number;
  annualOutput: number;
  qualityIndex: number; // 0-100
  efficiencyGain: number; // porcentaje
  costSaving: number; // euros/año
  revenueIncrease: number; // euros/año
}

export interface CostBreakdown {
  platformLicense: number; // euros/mes
  aiApiCalls: number; // euros/mes
  storage: number; // euros/mes
  support: number; // euros/mes
  training: number; // euros/mes
  integration: number; // euros (one-time)
  maintenance: number; // euros/mes
  totalMonthly: number;
  totalAnnual: number;
  costPerEmployee: number;
  costPerTrainingHour: number;
}

export interface ROIAnalysis {
  initialInvestment: number;
  monthlyCost: number;
  monthlyBenefit: number;
  paybackPeriod: number; // meses
  roi12Months: number; // porcentaje
  roi36Months: number; // porcentaje
  npv: number; // Net Present Value
  irr: number; // Internal Rate of Return
}

export interface GigafactoryConfig {
  name: string;
  location: string;
  employeeCount: number;
  shiftsPerDay: number;
  workingDaysPerYear: number;
  productionLines: number;
  productsPerHour: number;
  defectRate: number; // 0-1
  avgHourlyWage: number;
  energyCostPerHour: number;
  currentTrainingBudget: number; // euros/año
}

export interface AIUsageMetrics {
  tokensPerQuery: number;
  queriesPerEmployeePerDay: number;
  embeddingStorageGB: number;
  apiCallsPerMonth: number;
  computeHours: number;
  dataProcessedGB: number;
}

export interface PlatformCostModel {
  baseLicense: number; // euros/mes
  perUserCost: number; // euros/usuario/mes
  aiQueryCost: number; // euros/1000 queries
  storageCostPerGB: number; // euros/GB/mes
  supportTiers: {
    basic: number;
    standard: number;
    premium: number;
    enterprise: number;
  };
  volumeDiscounts: {
    threshold: number; // usuarios
    discount: number; // porcentaje
  }[];
}

export interface ProductionCalculatorInput {
  companySize: CompanySize;
  employeeCount: number;
  trainingModel: TrainingModel;
  scenario: ScenarioType;
  gigafactoryConfig?: GigafactoryConfig;
  customAssumptions?: Partial<ScenarioAssumptions>;
}

export interface ProductionCalculatorOutput {
  scenario: ProductionScenario;
  totalCost: CostBreakdown;
  projections: ProductionProjections;
  roi: ROIAnalysis;
  aiUsage: AIUsageMetrics;
  recommendations: string[];
  risks: string[];
  breakEvenPoint: number; // meses
}

// Costes base de la plataforma IA (estimaciones realistas 2025)
export const PLATFORM_COST_MODEL: PlatformCostModel = {
  baseLicense: 500, // euros/mes
  perUserCost: 15, // euros/usuario/mes
  aiQueryCost: 2.5, // euros/1000 queries
  storageCostPerGB: 0.15, // euros/GB/mes
  supportTiers: {
    basic: 200,
    standard: 800,
    premium: 2500,
    enterprise: 8000,
  },
  volumeDiscounts: [
    { threshold: 100, discount: 5 },
    { threshold: 500, discount: 10 },
    { threshold: 1000, discount: 15 },
    { threshold: 5000, discount: 20 },
    { threshold: 10000, discount: 25 },
  ],
};

// Costes de APIs de IA (precios reales 2025)
export const AI_API_COSTS = {
  openai: {
    gpt4_turbo: { input: 10, output: 30 }, // $/1M tokens
    gpt4o: { input: 5, output: 15 },
    gpt35_turbo: { input: 0.5, output: 1.5 },
    embeddings: 0.1, // $/1M tokens
  },
  anthropic: {
    claude3_opus: { input: 15, output: 75 },
    claude3_sonnet: { input: 3, output: 15 },
    claude3_haiku: { input: 0.25, output: 1.25 },
  },
  storage: {
    pinecone: 0.10, // $/GB/mes
    weaviate: 0.15,
    pgvector: 0.05, // incluido en PostgreSQL
  },
};

// Escenarios predefinidos por tamaño de empresa
export const COMPANY_SIZE_DEFAULTS: Record<CompanySize, Partial<ScenarioAssumptions>> = {
  STARTUP: {
    employeeCount: 20,
    trainingHoursPerEmployee: 40,
    adoptionRate: 0.7,
    completionRate: 0.6,
    productivityGain: 0.15,
    errorReduction: 0.1,
    timeToValue: 2,
  },
  PYME: {
    employeeCount: 100,
    trainingHoursPerEmployee: 60,
    adoptionRate: 0.75,
    completionRate: 0.65,
    productivityGain: 0.18,
    errorReduction: 0.15,
    timeToValue: 3,
  },
  MID_SIZE: {
    employeeCount: 500,
    trainingHoursPerEmployee: 80,
    adoptionRate: 0.8,
    completionRate: 0.7,
    productivityGain: 0.2,
    errorReduction: 0.2,
    timeToValue: 4,
  },
  ENTERPRISE: {
    employeeCount: 2000,
    trainingHoursPerEmployee: 100,
    adoptionRate: 0.85,
    completionRate: 0.75,
    productivityGain: 0.22,
    errorReduction: 0.25,
    timeToValue: 6,
  },
  GIGAFACTORY: {
    employeeCount: 10000,
    trainingHoursPerEmployee: 120,
    adoptionRate: 0.9,
    completionRate: 0.8,
    productivityGain: 0.25,
    errorReduction: 0.3,
    timeToValue: 8,
  },
};

// Multiplicadores por tipo de escenario
export const SCENARIO_MULTIPLIERS: Record<ScenarioType, {
  adoption: number;
  completion: number;
  productivity: number;
  errorReduction: number;
  timeToValue: number;
}> = {
  CONSERVATIVE: {
    adoption: 0.7,
    completion: 0.7,
    productivity: 0.6,
    errorReduction: 0.6,
    timeToValue: 1.5,
  },
  REALISTIC: {
    adoption: 1.0,
    completion: 1.0,
    productivity: 1.0,
    errorReduction: 1.0,
    timeToValue: 1.0,
  },
  OPTIMISTIC: {
    adoption: 1.2,
    completion: 1.2,
    productivity: 1.3,
    errorReduction: 1.3,
    timeToValue: 0.8,
  },
  AGGRESSIVE: {
    adoption: 1.4,
    completion: 1.3,
    productivity: 1.5,
    errorReduction: 1.5,
    timeToValue: 0.6,
  },
};
