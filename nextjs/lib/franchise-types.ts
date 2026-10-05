// Tipos para el sistema de franquicias de CESAC AI

export type FranchiseStatus = 'PENDING' | 'APPROVED' | 'ACTIVE' | 'SUSPENDED' | 'TERMINATED';
export type FranchiseTier = 'BASIC' | 'STANDARD' | 'PREMIUM' | 'ENTERPRISE';

export interface Franchise {
  id: string;
  name: string;
  legalName: string;
  taxId: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
  
  // Información del contrato
  tier: FranchiseTier;
  status: FranchiseStatus;
  agreementStartDate: string;
  agreementEndDate: string;
  renewalDate?: string;
  
  // Configuración de acceso
  accessLevel: FranchiseAccessLevel;
  maxUsers: number;
  currentUserCount: number;
  
  // Métricas
  totalRevenue: number;
  commissionRate: number;
  activeStudents: number;
  completedCourses: number;
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
  approvedBy?: string;
}

export interface FranchiseAccessLevel {
  // Acceso a contenido
  canAccessAllProducts: boolean;
  canAccessPremiumContent: boolean;
  canAccessMasterclasses: boolean;
  canAccessCaseStudies: boolean;
  
  // Acceso a funcionalidades
  canUseAITutor: boolean;
  canAccessCampus: boolean;
  canAccessAdminPanel: boolean;
  canManageStudents: boolean;
  canIssueCertificates: boolean;
  
  // Acceso a unidades de negocio
  accessibleUnits: string[]; // IDs de unidades de negocio
  
  // Personalización
  canCustomizeBranding: boolean;
  canSetCustomPricing: boolean;
  canCreateLocalCourses: boolean;
}

export interface FranchiseUser {
  id: string;
  franchiseId: string;
  userId: string;
  role: 'FRANCHISE_OWNER' | 'FRANCHISE_ADMIN' | 'FRANCHISE_INSTRUCTOR' | 'FRANCHISE_STAFF';
  permissions: string[];
  assignedAt: string;
  isActive: boolean;
}

export interface FranchiseAgreement {
  id: string;
  franchiseId: string;
  version: string;
  terms: string;
  commissionStructure: CommissionStructure;
  territory: string;
  exclusivity: boolean;
  minimumPerformance: number;
  signedAt?: string;
  expiresAt: string;
}

export interface CommissionStructure {
  baseRate: number; // Porcentaje base
  tierBonuses: {
    tier: FranchiseTier;
    bonus: number; // Porcentaje adicional
  }[];
  volumeDiscounts: {
    minRevenue: number;
    discount: number; // Porcentaje de descuento
  }[];
}

export interface FranchiseApplication {
  id: string;
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  businessAddress: string;
  city: string;
  country: string;
  
  // Información del negocio
  businessType: string;
  yearsInBusiness: number;
  currentRevenue: string;
  numberOfEmployees: string;
  
  // Motivación
  whyInterested: string;
  relevantExperience: string;
  targetMarket: string;
  investmentCapacity: string;
  
  // Estado
  status: 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  notes?: string;
}

export interface FranchiseBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  tier: FranchiseTier[];
  category: 'content' | 'support' | 'branding' | 'financial' | 'training';
}

export interface FranchiseRequirement {
  id: string;
  title: string;
  description: string;
  mandatory: boolean;
  category: 'legal' | 'financial' | 'operational' | 'technical';
}

export const DEFAULT_FRANCHISE_ACCESS: Record<FranchiseTier, FranchiseAccessLevel> = {
  BASIC: {
    canAccessAllProducts: true,
    canAccessPremiumContent: false,
    canAccessMasterclasses: false,
    canAccessCaseStudies: false,
    canUseAITutor: true,
    canAccessCampus: true,
    canAccessAdminPanel: false,
    canManageStudents: false,
    canIssueCertificates: false,
    accessibleUnits: ['oposiciones', 'educacion', 'ai-academy'],
    canCustomizeBranding: false,
    canSetCustomPricing: false,
    canCreateLocalCourses: false,
  },
  STANDARD: {
    canAccessAllProducts: true,
    canAccessPremiumContent: true,
    canAccessMasterclasses: false,
    canAccessCaseStudies: false,
    canUseAITutor: true,
    canAccessCampus: true,
    canAccessAdminPanel: true,
    canManageStudents: true,
    canIssueCertificates: false,
    accessibleUnits: ['oposiciones', 'educacion', 'ai-academy', 'ai-business'],
    canCustomizeBranding: false,
    canSetCustomPricing: false,
    canCreateLocalCourses: false,
  },
  PREMIUM: {
    canAccessAllProducts: true,
    canAccessPremiumContent: true,
    canAccessMasterclasses: true,
    canAccessCaseStudies: true,
    canUseAITutor: true,
    canAccessCampus: true,
    canAccessAdminPanel: true,
    canManageStudents: true,
    canIssueCertificates: true,
    accessibleUnits: ['oposiciones', 'educacion', 'ai-academy', 'ai-business', 'ai-public', 'ai-governance'],
    canCustomizeBranding: true,
    canSetCustomPricing: false,
    canCreateLocalCourses: true,
  },
  ENTERPRISE: {
    canAccessAllProducts: true,
    canAccessPremiumContent: true,
    canAccessMasterclasses: true,
    canAccessCaseStudies: true,
    canUseAITutor: true,
    canAccessCampus: true,
    canAccessAdminPanel: true,
    canManageStudents: true,
    canIssueCertificates: true,
    accessibleUnits: ['oposiciones', 'educacion', 'ai-academy', 'ai-business', 'ai-public', 'ai-governance', 'ai-lab', 'ai-campus', 'ai-consulting', 'ai-procurement'],
    canCustomizeBranding: true,
    canSetCustomPricing: true,
    canCreateLocalCourses: true,
  },
};

export const FRANCHISE_TIERS_CONFIG: Record<FranchiseTier, {
  name: string;
  price: number;
  period: string;
  maxUsers: number;
  commissionRate: number;
  features: string[];
}> = {
  BASIC: {
    name: 'Básica',
    price: 500,
    period: 'mes',
    maxUsers: 5,
    commissionRate: 15,
    features: [
      'Acceso a 3 unidades de negocio',
      'Hasta 5 usuarios',
      'Soporte por email',
      'Material de marketing básico',
      'Comisión del 85%',
    ],
  },
  STANDARD: {
    name: 'Estándar',
    price: 1500,
    period: 'mes',
    maxUsers: 15,
    commissionRate: 12,
    features: [
      'Acceso a 4 unidades de negocio',
      'Contenido premium incluido',
      'Hasta 15 usuarios',
      'Panel de administración',
      'Soporte prioritario',
      'Material de marketing avanzado',
      'Comisión del 88%',
    ],
  },
  PREMIUM: {
    name: 'Premium',
    price: 3500,
    period: 'mes',
    maxUsers: 50,
    commissionRate: 10,
    features: [
      'Acceso a 6 unidades de negocio',
      'Todo el contenido premium',
      'Masterclasses y casos de estudio',
      'Hasta 50 usuarios',
      'Emisión de certificados',
      'Personalización de marca',
      'Creación de cursos locales',
      'Soporte dedicado',
      'Comisión del 90%',
    ],
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 8000,
    period: 'mes',
    maxUsers: -1, // Ilimitado
    commissionRate: 8,
    features: [
      'Acceso a TODAS las unidades de negocio',
      'Todo el contenido sin restricciones',
      'Usuarios ilimitados',
      'Precios personalizados',
      'API access completo',
      'Account manager dedicado',
      'SLA garantizado',
      'Formación de instructores',
      'Comisión del 92%',
    ],
  },
};
