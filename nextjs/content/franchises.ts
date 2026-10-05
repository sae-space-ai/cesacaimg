import type { FranchiseBenefit, FranchiseRequirement } from '../franchise-types';

// Beneficios de ser franquicia de CESAC AI

export const franchiseBenefits: FranchiseBenefit[] = [
  // CONTENIDO
  {
    id: 'fb01',
    title: 'Acceso Completo al Catálogo',
    description: 'Accede a los 40 productos de CESAC AI: oposiciones, educación, IA, empresas, administraciones y gobernanza.',
    icon: '📚',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'content',
  },
  {
    id: 'fb02',
    title: 'Contenido Premium Incluido',
    description: 'Masterclasses, casos de estudio y cursos exclusivos disponibles para tus estudiantes.',
    icon: '🎓',
    tier: ['STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'content',
  },
  {
    id: 'fb03',
    title: 'Tutor IA Ilimitado',
    description: 'Tutor IA con RAG personalizado para atender las consultas de tus estudiantes 24/7.',
    icon: '🤖',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'content',
  },
  {
    id: 'fb04',
    title: 'Campus Virtual Completo',
    description: 'LMS completo con gestión de cursos, evaluaciones, certificados y seguimiento de progreso.',
    icon: '🎯',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'content',
  },
  {
    id: 'fb05',
    title: 'Actualizaciones Constantes',
    description: 'Todo el contenido se actualiza automáticamente. No necesitas preocuparte por mantenerlo al día.',
    icon: '🔄',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'content',
  },
  
  // SOPORTE
  {
    id: 'fb06',
    title: 'Soporte Técnico Dedicado',
    description: 'Equipo de soporte técnico disponible para resolver cualquier incidencia de la plataforma.',
    icon: '💬',
    tier: ['STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'support',
  },
  {
    id: 'fb07',
    title: 'Account Manager Personal',
    description: 'Un gerente de cuenta dedicado para franquicias Premium y Enterprise.',
    icon: '👤',
    tier: ['PREMIUM', 'ENTERPRISE'],
    category: 'support',
  },
  {
    id: 'fb08',
    title: 'Formación de Instructores',
    description: 'Programa de formación certificado para tus instructores locales.',
    icon: '🎓',
    tier: ['ENTERPRISE'],
    category: 'support',
  },
  {
    id: 'fb09',
    title: 'Comunidad de Franquicias',
    description: 'Acceso a la comunidad exclusiva de franquiciados para compartir experiencias y mejores prácticas.',
    icon: '🤝',
    tier: ['STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'support',
  },
  
  // BRANDING
  {
    id: 'fb10',
    title: 'Marca CESAC AI',
    description: 'Opera bajo la marca reconocida de CESAC AI con todo el respaldo institucional.',
    icon: '🏷️',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'branding',
  },
  {
    id: 'fb11',
    title: 'Personalización de Marca',
    description: 'Personaliza la plataforma con tu logo, colores y dominio propio (Premium y Enterprise).',
    icon: '🎨',
    tier: ['PREMIUM', 'ENTERPRISE'],
    category: 'branding',
  },
  {
    id: 'fb12',
    title: 'Material de Marketing',
    description: 'Kit completo de marketing: banners, folletos, presentaciones, videos promocionales.',
    icon: '📢',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'branding',
  },
  {
    id: 'fb13',
    title: 'Presencia en Directorio',
    description: 'Tu franquicia aparece en el directorio oficial de CESAC AI con enlace a tu web.',
    icon: '🌐',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'branding',
  },
  
  // FINANCIERO
  {
    id: 'fb14',
    title: 'Comisiones Atractivas',
    description: 'Comisiones desde el 85% hasta el 92% según el nivel de franquicia.',
    icon: '💰',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'financial',
  },
  {
    id: 'fb15',
    title: 'Sin Inversión Inicial',
    description: 'No necesitas inversión inicial. Solo pagas la mensualidad una vez aprobada tu solicitud.',
    icon: '🚀',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'financial',
  },
  {
    id: 'fb16',
    title: 'Pagos Mensuales Automáticos',
    description: 'Sistema de pagos automatizado con reportes detallados de comisiones.',
    icon: '💳',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'financial',
  },
  {
    id: 'fb17',
    title: 'Bonificaciones por Volumen',
    description: 'Descuentos adicionales en comisiones al superar objetivos de facturación.',
    icon: '📈',
    tier: ['STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'financial',
  },
  
  // FORMACIÓN
  {
    id: 'fb18',
    title: 'Onboarding Completo',
    description: 'Programa de onboarding de 2 semanas para familiarizarte con toda la plataforma.',
    icon: '📋',
    tier: ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'training',
  },
  {
    id: 'fb19',
    title: 'Webinars Exclusivos',
    description: 'Webinars mensuales con novedades, estrategias de venta y mejores prácticas.',
    icon: '📡',
    tier: ['STANDARD', 'PREMIUM', 'ENTERPRISE'],
    category: 'training',
  },
  {
    id: 'fb20',
    title: 'Certificación de Franquicia',
    description: 'Certificación oficial como franquiciado CESAC AI reconocida en el sector.',
    icon: '🏆',
    tier: ['PREMIUM', 'ENTERPRISE'],
    category: 'training',
  },
];

// Requisitos para ser franquicia

export const franchiseRequirements: FranchiseRequirement[] = [
  // LEGALES
  {
    id: 'fr01',
    title: 'Empresa Constituida Legalmente',
    description: 'Debes tener una empresa legalmente constituida con al menos 1 año de antigüedad.',
    mandatory: true,
    category: 'legal',
  },
  {
    id: 'fr02',
    title: 'NIF/CIF Vigente',
    description: 'Número de identificación fiscal válido y en vigor.',
    mandatory: true,
    category: 'legal',
  },
  {
    id: 'fr03',
    title: 'Sin Antecedentes Penales',
    description: 'Los administradores de la empresa no deben tener antecedentes penales relacionados con actividades educativas o financieras.',
    mandatory: true,
    category: 'legal',
  },
  {
    id: 'fr04',
    title: 'Contrato de Franquicia Firmado',
    description: 'Firma del contrato de franquicia CESAC AI con todas las cláusulas aceptadas.',
    mandatory: true,
    category: 'legal',
  },
  
  // FINANCIEROS
  {
    id: 'fr05',
    title: 'Capacidad Financiera',
    description: 'Demostrar capacidad financiera para asumir la mensualidad y operar durante al menos 6 meses.',
    mandatory: true,
    category: 'financial',
  },
  {
    id: 'fr06',
    title: 'Cuenta Bancaria Empresarial',
    description: 'Cuenta bancaria empresarial activa para recibir pagos de comisiones.',
    mandatory: true,
    category: 'financial',
  },
  {
    id: 'fr07',
    title: 'Solvencia Crediticia',
    description: 'Verificación de solvencia crediticia satisfactoria.',
    mandatory: false,
    category: 'financial',
  },
  
  // OPERACIONALES
  {
    id: 'fr08',
    title: 'Local o Infraestructura',
    description: 'Disponer de un local físico o infraestructura adecuada para operar (no obligatorio para franquicias online).',
    mandatory: false,
    category: 'operational',
  },
  {
    id: 'fr09',
    title: 'Personal Cualificado',
    description: 'Contar con al menos 1 persona dedicada a la gestión de la franquicia.',
    mandatory: true,
    category: 'operational',
  },
  {
    id: 'fr10',
    title: 'Horario de Atención',
    description: 'Garantizar un horario mínimo de atención al cliente de 6 horas diarias, 5 días a la semana.',
    mandatory: true,
    category: 'operational',
  },
  {
    id: 'fr11',
    title: 'Experiencia en Educación o Formación',
    description: 'Experiencia previa en el sector educativo o de formación profesional (valorable, no obligatorio).',
    mandatory: false,
    category: 'operational',
  },
  
  // TÉCNICOS
  {
    id: 'fr12',
    title: 'Conexión a Internet',
    description: 'Conexión a internet de banda ancha estable para operar la plataforma.',
    mandatory: true,
    category: 'technical',
  },
  {
    id: 'fr13',
    title: 'Equipamiento Informático',
    description: 'Ordenadores o tablets en buen estado para acceder a la plataforma.',
    mandatory: true,
    category: 'technical',
  },
  {
    id: 'fr14',
    title: 'Conocimientos Básicos de Informática',
    description: 'El personal debe tener conocimientos básicos de informática y navegación web.',
    mandatory: true,
    category: 'technical',
  },
  {
    id: 'fr15',
    title: 'Dominio Propio (Premium/Enterprise)',
    description: 'Para franquicias Premium y Enterprise, se requiere un dominio propio para personalización.',
    mandatory: false,
    category: 'technical',
  },
];

// Funciones de utilidad

export function getBenefitsByTier(tier: string): FranchiseBenefit[] {
  return franchiseBenefits.filter(benefit => 
    benefit.tier.includes(tier as any)
  );
}

export function getBenefitsByCategory(category: FranchiseBenefit['category']): FranchiseBenefit[] {
  return franchiseBenefits.filter(benefit => benefit.category === category);
}

export function getMandatoryRequirements(): FranchiseRequirement[] {
  return franchiseRequirements.filter(req => req.mandatory);
}

export function getRequirementsByCategory(category: FranchiseRequirement['category']): FranchiseRequirement[] {
  return franchiseRequirements.filter(req => req.category === category);
}
