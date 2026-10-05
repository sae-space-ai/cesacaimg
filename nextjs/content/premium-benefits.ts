import type { PremiumBenefit } from '../premium-types';

// Beneficios Premium de CESAC AI

export const premiumBenefits: PremiumBenefit[] = [
  // CONTENIDO
  {
    id: 'pb01',
    title: 'Cursos Exclusivos',
    description: 'Acceso a cursos premium no disponibles en el catálogo público',
    icon: '🎓',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'content',
  },
  {
    id: 'pb02',
    title: 'Masterclasses con Expertos',
    description: 'Sesiones en vivo con líderes de la industria en IA',
    icon: '🎤',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'content',
  },
  {
    id: 'pb03',
    title: 'Casos de Estudio Reales',
    description: 'Acceso a casos de estudio detallados de implementaciones empresariales',
    icon: '📊',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'content',
  },
  {
    id: 'pb04',
    title: 'Acceso Anticipado',
    description: 'Sé el primero en acceder a nuevos cursos y contenido',
    icon: '⚡',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'content',
  },
  {
    id: 'pb05',
    title: 'Webinars Exclusivos',
    description: 'Participa en webinars mensuales con expertos invitados',
    icon: '📡',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'content',
  },
  {
    id: 'pb06',
    title: 'Workshops Prácticos',
    description: 'Talleres hands-on con proyectos reales y mentoría',
    icon: '🛠️',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'content',
  },
  
  // SOPORTE
  {
    id: 'pb07',
    title: 'Tutor IA Ilimitado',
    description: 'Consultas ilimitadas al tutor IA con agentes especializados',
    icon: '🤖',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'support',
  },
  {
    id: 'pb08',
    title: 'Soporte Prioritario',
    description: 'Respuestas en menos de 2 horas en días laborables',
    icon: '⚡',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'support',
  },
  {
    id: 'pb09',
    title: 'Consultorías Incluidas',
    description: 'Horas de consultoría personalizada con expertos CESAC',
    icon: '💼',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'support',
  },
  {
    id: 'pb10',
    title: 'Account Manager Dedicado',
    description: 'Un gerente de cuenta personal para empresas Business y Governance',
    icon: '👤',
    tier: ['BUSINESS', 'GOVERNANCE'],
    category: 'support',
  },
  
  // COMUNIDAD
  {
    id: 'pb11',
    title: 'Foros Privados',
    description: 'Acceso a foros exclusivos para miembros premium',
    icon: '💬',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'community',
  },
  {
    id: 'pb12',
    title: 'Networking Exclusivo',
    description: 'Eventos de networking con profesionales y empresas líderes',
    icon: '🤝',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'community',
  },
  {
    id: 'pb13',
    title: 'Mentoría Personalizada',
    description: 'Sesiones de mentoría 1:1 con expertos en IA',
    icon: '🎯',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'community',
  },
  {
    id: 'pb14',
    title: 'Eventos Presenciales',
    description: 'Invitaciones a eventos exclusivos y conferencias',
    icon: '🎪',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'community',
  },
  
  // CERTIFICACIONES
  {
    id: 'pb15',
    title: 'Certificados Premium',
    description: 'Certificados con diseño premium y verificación avanzada',
    icon: '🏆',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'certification',
  },
  {
    id: 'pb16',
    title: 'Badges Verificados',
    description: 'Insignias digitales verificadas para LinkedIn y redes profesionales',
    icon: '🎖️',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'certification',
  },
  {
    id: 'pb17',
    title: 'Integración LinkedIn',
    description: 'Publicación automática de logros en tu perfil de LinkedIn',
    icon: '💼',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'certification',
  },
  
  // ANALÍTICAS
  {
    id: 'pb18',
    title: 'Analíticas Avanzadas',
    description: 'Dashboard con métricas detalladas de tu progreso y rendimiento',
    icon: '📈',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'analytics',
  },
  {
    id: 'pb19',
    title: 'Seguimiento de Progreso',
    description: 'Seguimiento detallado de tu aprendizaje con recomendaciones personalizadas',
    icon: '🎯',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    category: 'analytics',
  },
  {
    id: 'pb20',
    title: 'Informes Personalizados',
    description: 'Informes detallados para empresas sobre el progreso de sus equipos',
    icon: '📋',
    tier: ['BUSINESS', 'GOVERNANCE'],
    category: 'analytics',
  },
];

// Funciones de utilidad
export function getBenefitsByTier(tier: string): PremiumBenefit[] {
  return premiumBenefits.filter(benefit => 
    benefit.tier.includes(tier as any)
  );
}

export function getBenefitsByCategory(category: PremiumBenefit['category']): PremiumBenefit[] {
  return premiumBenefits.filter(benefit => benefit.category === category);
}

export function getBenefitCategories(): string[] {
  return [...new Set(premiumBenefits.map(b => b.category))];
}
