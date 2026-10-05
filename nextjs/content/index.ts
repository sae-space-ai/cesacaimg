// Índice maestro de todo el contenido de cursos/programas CESAC AI

import type { CourseContent } from './content-types';
import { oposicionesContent } from './oposiciones';
import { educacionContent } from './educacion';
import { aiAcademyContent } from './ai-academy';
import { aiBusinessContent, aiPublicContent, aiGovernanceContent } from './business-public-governance';

// Consolidar todo el contenido
export const allCourseContent: CourseContent[] = [
  ...oposicionesContent,
  ...educacionContent,
  ...aiAcademyContent,
  ...aiBusinessContent,
  ...aiPublicContent,
  ...aiGovernanceContent,
];

// Funciones de utilidad
export function getCourseContentBySlug(slug: string): CourseContent | undefined {
  return allCourseContent.find(c => c.productSlug === slug);
}

export function getCourseContentById(id: string): CourseContent | undefined {
  return allCourseContent.find(c => c.productId === id);
}

export function getCourseContentByUnit(unitId: string): CourseContent[] {
  const unitMap: Record<string, string[]> = {
    'oposiciones': ['p01', 'p02', 'p03', 'p04', 'p05', 'p06', 'p07', 'p08'],
    'educacion': ['p09', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
    'ai-academy': ['p16', 'p17', 'p18', 'p19', 'p20', 'p21', 'p22', 'p23', 'p24', 'p25'],
    'ai-business': ['p26', 'p27', 'p28', 'p29', 'p30', 'p31', 'p32'],
    'ai-public': ['p33', 'p34', 'p35', 'p36', 'p37', 'p38'],
    'ai-governance': ['p39', 'p40'],
  };
  
  const productIds = unitMap[unitId] || [];
  return allCourseContent.filter(c => productIds.includes(c.productId));
}

// Estadísticas de contenido
export function getContentStats() {
  const totalModules = allCourseContent.reduce((sum, c) => sum + c.modules.length, 0);
  const totalLessons = allCourseContent.reduce(
    (sum, c) => sum + c.modules.reduce((mSum, m) => mSum + m.lessons.length, 0),
    0
  );
  const totalResources = allCourseContent.reduce(
    (sum, c) => sum + c.modules.reduce(
      (mSum, m) => mSum + m.lessons.reduce((lSum, l) => lSum + l.resources.length, 0),
      0
    ),
    0
  );

  return {
    courses: allCourseContent.length,
    modules: totalModules,
    lessons: totalLessons,
    resources: totalResources,
  };
}

// Exportar contenido por unidad para uso directo
export {
  oposicionesContent,
  educacionContent,
  aiAcademyContent,
  aiBusinessContent,
  aiPublicContent,
  aiGovernanceContent,
};
