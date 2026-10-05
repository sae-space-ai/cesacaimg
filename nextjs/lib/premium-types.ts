// Tipos para el sistema de membresía premium de CESAC AI

export type PremiumTier = 'FREE' | 'INDIVIDUAL' | 'PRO' | 'BUSINESS' | 'GOVERNANCE';

export interface PremiumFeatures {
  // Contenido
  exclusiveCourses: boolean;
  masterclasses: boolean;
  caseStudies: boolean;
  earlyAccess: boolean;
  
  // Tutor IA
  aiQueriesLimit: number; // -1 = ilimitado
  prioritySupport: boolean;
  specializedAgents: boolean;
  customRAG: boolean;
  
  // Comunidad
  privateForums: boolean;
  networking: boolean;
  mentorship: boolean;
  events: boolean;
  
  // Certificaciones
  premiumCertificates: boolean;
  verifiedBadges: boolean;
  linkedinIntegration: boolean;
  
  // Soporte
  supportLevel: 'basic' | 'priority' | 'dedicated';
  consultationHours: number;
  
  // Analíticas
  advancedAnalytics: boolean;
  progressTracking: boolean;
  customReports: boolean;
}

export interface PremiumMembership {
  id: string;
  userId: string;
  tier: PremiumTier;
  startDate: string;
  endDate: string;
  autoRenew: boolean;
  features: PremiumFeatures;
  status: 'active' | 'expired' | 'cancelled';
}

export interface PremiumContent {
  id: string;
  title: string;
  description: string;
  type: 'masterclass' | 'case-study' | 'exclusive-course' | 'webinar' | 'workshop';
  tier: PremiumTier[];
  duration: string;
  instructor: string;
  thumbnail: string;
  releaseDate: string;
  isExclusive: boolean;
}

export interface PremiumBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  tier: PremiumTier[];
  category: 'content' | 'support' | 'community' | 'certification' | 'analytics';
}

export const PREMIUM_FEATURES: Record<PremiumTier, PremiumFeatures> = {
  FREE: {
    exclusiveCourses: false,
    masterclasses: false,
    caseStudies: false,
    earlyAccess: false,
    aiQueriesLimit: 10,
    prioritySupport: false,
    specializedAgents: false,
    customRAG: false,
    privateForums: false,
    networking: false,
    mentorship: false,
    events: false,
    premiumCertificates: false,
    verifiedBadges: false,
    linkedinIntegration: false,
    supportLevel: 'basic',
    consultationHours: 0,
    advancedAnalytics: false,
    progressTracking: false,
    customReports: false,
  },
  INDIVIDUAL: {
    exclusiveCourses: true,
    masterclasses: true,
    caseStudies: false,
    earlyAccess: true,
    aiQueriesLimit: 100,
    prioritySupport: false,
    specializedAgents: false,
    customRAG: false,
    privateForums: true,
    networking: false,
    mentorship: false,
    events: true,
    premiumCertificates: true,
    verifiedBadges: true,
    linkedinIntegration: true,
    supportLevel: 'priority',
    consultationHours: 0,
    advancedAnalytics: true,
    progressTracking: true,
    customReports: false,
  },
  PRO: {
    exclusiveCourses: true,
    masterclasses: true,
    caseStudies: true,
    earlyAccess: true,
    aiQueriesLimit: -1, // ilimitado
    prioritySupport: true,
    specializedAgents: true,
    customRAG: true,
    privateForums: true,
    networking: true,
    mentorship: true,
    events: true,
    premiumCertificates: true,
    verifiedBadges: true,
    linkedinIntegration: true,
    supportLevel: 'dedicated',
    consultationHours: 2,
    advancedAnalytics: true,
    progressTracking: true,
    customReports: true,
  },
  BUSINESS: {
    exclusiveCourses: true,
    masterclasses: true,
    caseStudies: true,
    earlyAccess: true,
    aiQueriesLimit: -1,
    prioritySupport: true,
    specializedAgents: true,
    customRAG: true,
    privateForums: true,
    networking: true,
    mentorship: true,
    events: true,
    premiumCertificates: true,
    verifiedBadges: true,
    linkedinIntegration: true,
    supportLevel: 'dedicated',
    consultationHours: 10,
    advancedAnalytics: true,
    progressTracking: true,
    customReports: true,
  },
  GOVERNANCE: {
    exclusiveCourses: true,
    masterclasses: true,
    caseStudies: true,
    earlyAccess: true,
    aiQueriesLimit: -1,
    prioritySupport: true,
    specializedAgents: true,
    customRAG: true,
    privateForums: true,
    networking: true,
    mentorship: true,
    events: true,
    premiumCertificates: true,
    verifiedBadges: true,
    linkedinIntegration: true,
    supportLevel: 'dedicated',
    consultationHours: 20,
    advancedAnalytics: true,
    progressTracking: true,
    customReports: true,
  },
};
