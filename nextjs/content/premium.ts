import type { PremiumContent } from '../premium-types';

// Contenido Premium Exclusivo de CESAC AI

export const premiumContent: PremiumContent[] = [
  // MASTERCLASSES
  {
    id: 'pm01',
    title: 'Masterclass: Agentes Autónomos Avanzados',
    description: 'Sesión exclusiva con el Dr. Andrew Ng sobre el futuro de los agentes autónomos y su impacto en la industria.',
    type: 'masterclass',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '2 horas',
    instructor: 'Dr. Andrew Ng',
    thumbnail: '🎓',
    releaseDate: '2025-02-15',
    isExclusive: true,
  },
  {
    id: 'pm02',
    title: 'Masterclass: EU AI Act en Profundidad',
    description: 'Análisis detallado del Reglamento Europeo de IA con casos prácticos de implementación.',
    type: 'masterclass',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '3 horas',
    instructor: 'Dra. María González',
    thumbnail: '⚖️',
    releaseDate: '2025-03-01',
    isExclusive: true,
  },
  {
    id: 'pm03',
    title: 'Masterclass: RAG Enterprise-Grade',
    description: 'Implementación de sistemas RAG a escala empresarial con arquitecturas distribuidas.',
    type: 'masterclass',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '2.5 horas',
    instructor: 'Ing. Carlos Rodríguez',
    thumbnail: '🏗️',
    releaseDate: '2025-03-15',
    isExclusive: true,
  },
  {
    id: 'pm04',
    title: 'Masterclass: IA Ética y Responsable',
    description: 'Framework completo para implementar IA ética en organizaciones.',
    type: 'masterclass',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '2 horas',
    instructor: 'Dra. Ana Martínez',
    thumbnail: '🤝',
    releaseDate: '2025-04-01',
    isExclusive: true,
  },
  
  // CASOS DE ESTUDIO
  {
    id: 'pc01',
    title: 'Caso: Implementación de IA en Banco Nacional',
    description: 'Cómo un banco nacional implementó IA para detección de fraude ahorrando €50M anuales.',
    type: 'case-study',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '45 min',
    instructor: 'Equipo CESAC Consulting',
    thumbnail: '🏦',
    releaseDate: '2025-02-20',
    isExclusive: true,
  },
  {
    id: 'pc02',
    title: 'Caso: Transformación Digital en Ayuntamiento',
    description: 'Modernización de servicios ciudadanos con IA en un ayuntamiento de 500.000 habitantes.',
    type: 'case-study',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '50 min',
    instructor: 'Equipo CESAC Public Sector',
    thumbnail: '🏛️',
    releaseDate: '2025-03-10',
    isExclusive: true,
  },
  {
    id: 'pc03',
    title: 'Caso: IA en Educación Universitaria',
    description: 'Implementación de tutor IA personalizado en universidad con 30.000 estudiantes.',
    type: 'case-study',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '40 min',
    instructor: 'Equipo CESAC Educación',
    thumbnail: '🎓',
    releaseDate: '2025-03-25',
    isExclusive: true,
  },
  {
    id: 'pc04',
    title: 'Caso: Automatización en Industria 4.0',
    description: 'Implementación de agentes IA en planta de manufactura con 40% de mejora en productividad.',
    type: 'case-study',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '55 min',
    instructor: 'Equipo CESAC Business',
    thumbnail: '🏭',
    releaseDate: '2025-04-05',
    isExclusive: true,
  },
  
  // CURSOS EXCLUSIVOS
  {
    id: 'pe01',
    title: 'Curso Exclusivo: Fine-Tuning de Modelos LLM',
    description: 'Aprende a fine-tunear modelos de lenguaje para casos de uso específicos de tu organización.',
    type: 'exclusive-course',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '20 horas',
    instructor: 'Dr. Javier López',
    thumbnail: '🔧',
    releaseDate: '2025-03-01',
    isExclusive: true,
  },
  {
    id: 'pe02',
    title: 'Curso Exclusivo: MLOps Enterprise',
    description: 'Operacionalización de modelos de IA a escala empresarial con las mejores prácticas.',
    type: 'exclusive-course',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '25 horas',
    instructor: 'Ing. Laura Sánchez',
    thumbnail: '⚙️',
    releaseDate: '2025-03-20',
    isExclusive: true,
  },
  {
    id: 'pe03',
    title: 'Curso Exclusivo: IA Generativa para Creativos',
    description: 'Técnicas avanzadas de IA generativa para diseñadores, marketers y creativos.',
    type: 'exclusive-course',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '15 horas',
    instructor: 'Diseñadora Paula Fernández',
    thumbnail: '🎨',
    releaseDate: '2025-04-10',
    isExclusive: true,
  },
  
  // WEBINARS
  {
    id: 'pw01',
    title: 'Webinar: Tendencias IA 2025',
    description: 'Análisis de las principales tendencias en IA para 2025 con expertos de la industria.',
    type: 'webinar',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '1.5 horas',
    instructor: 'Panel de Expertos CESAC',
    thumbnail: '📡',
    releaseDate: '2025-02-01',
    isExclusive: true,
  },
  {
    id: 'pw02',
    title: 'Webinar: IA y Sostenibilidad',
    description: 'Cómo la IA puede contribuir a los objetivos de sostenibilidad empresarial.',
    type: 'webinar',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '1 hora',
    instructor: 'Dra. Elena Ruiz',
    thumbnail: '🌱',
    releaseDate: '2025-03-05',
    isExclusive: true,
  },
  {
    id: 'pw03',
    title: 'Webinar: Seguridad en Sistemas de IA',
    description: 'Mejores prácticas de seguridad en el despliegue de sistemas de IA.',
    type: 'webinar',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '2 horas',
    instructor: 'Ing. Miguel Torres',
    thumbnail: '🔒',
    releaseDate: '2025-03-18',
    isExclusive: true,
  },
  
  // WORKSHOPS
  {
    id: 'pp01',
    title: 'Workshop: Diseño de Prompts Avanzado',
    description: 'Taller práctico de 4 horas para dominar técnicas avanzadas de prompt engineering.',
    type: 'workshop',
    tier: ['INDIVIDUAL', 'PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '4 horas',
    instructor: 'Experto en Prompt Engineering',
    thumbnail: '💡',
    releaseDate: '2025-02-25',
    isExclusive: true,
  },
  {
    id: 'pp02',
    title: 'Workshop: Implementación de RAG',
    description: 'Taller hands-on para implementar un sistema RAG completo desde cero.',
    type: 'workshop',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '6 horas',
    instructor: 'Arquitecto de Soluciones IA',
    thumbnail: '🛠️',
    releaseDate: '2025-03-12',
    isExclusive: true,
  },
  {
    id: 'pp03',
    title: 'Workshop: Auditoría de Sistemas IA',
    description: 'Taller práctico sobre cómo auditar sistemas de IA según EU AI Act.',
    type: 'workshop',
    tier: ['PRO', 'BUSINESS', 'GOVERNANCE'],
    duration: '5 horas',
    instructor: 'Auditor Certificado en IA',
    thumbnail: '📋',
    releaseDate: '2025-04-02',
    isExclusive: true,
  },
];

// Funciones de utilidad
export function getPremiumContentByTier(tier: string): PremiumContent[] {
  return premiumContent.filter(content => 
    content.tier.includes(tier as any)
  );
}

export function getPremiumContentByType(type: PremiumContent['type']): PremiumContent[] {
  return premiumContent.filter(content => content.type === type);
}

export function getExclusiveContent(): PremiumContent[] {
  return premiumContent.filter(content => content.isExclusive);
}

export function getUpcomingContent(): PremiumContent[] {
  const now = new Date();
  return premiumContent.filter(content => new Date(content.releaseDate) > now);
}

export function getAvailableContent(): PremiumContent[] {
  const now = new Date();
  return premiumContent.filter(content => new Date(content.releaseDate) <= now);
}
