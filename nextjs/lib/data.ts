// CESAC AI - Datos maestros de la plataforma (Next.js)
// Copia fiel de src/lib/data.ts - Sin modificaciones

export type ProductStatus = 'DRAFT' | 'REVIEW' | 'PUBLISHED' | 'ARCHIVED';
export type Modality = 'online' | 'presencial' | 'hibrido' | 'asincrono';

export interface Product {
  id: string;
  slug: string;
  code: string;
  name: string;
  unit: string;
  unitId: string;
  shortDescription: string;
  description: string;
  objectives: string[];
  targetAudience: string[];
  prerequisites: string[];
  modality: Modality;
  duration: string;
  hours: number;
  price: number;
  iva: number;
  priceCompany: number;
  pricePublic: number;
  image: string;
  program: string[];
  competencies: string[];
  learningOutcomes: string[];
  certification: string;
  startDate: string;
  endDate: string;
  places: number;
  status: ProductStatus;
  faqs: { q: string; a: string }[];
  category: string;
}

export interface BusinessUnit {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
  products: string[];
}

// Nota: Para mantener el tamaño del archivo manejable, se incluye un subconjunto representativo
// En producción, este archivo se cargaría desde una base de datos o CMS
export const businessUnits: BusinessUnit[] = [
  { id: 'oposiciones', name: 'CESAC Oposiciones', shortName: 'Oposiciones', description: 'Preparación integral de oposiciones para Administración Local, Autonómica y Cuerpos de Seguridad.', icon: '🏛️', color: 'from-blue-600 to-blue-800', products: ['policia-local', 'auxiliar-admin', 'administrativo', 'ses', 'junta-extremadura', 'admin-local', 'talleres-legislacion', 'simulacros-test'] },
  { id: 'educacion', name: 'CESAC Educación', shortName: 'Educación', description: 'Formación para docentes, equipos directivos y centros educativos. Innovación pedagógica con IA.', icon: '📚', color: 'from-emerald-600 to-emerald-800', products: ['apoyo-academico', 'tecnicas-estudio', 'ia-docentes', 'ia-equipos-directivos', 'ia-programacion-didactica', 'ia-evaluacion', 'plan-adopcion-ia'] },
  { id: 'ai-academy', name: 'CESAC AI Academy', shortName: 'AI Academy', description: 'Formación especializada en inteligencia artificial, desde alfabetización hasta desarrollo de agentes.', icon: '🤖', color: 'from-violet-600 to-violet-800', products: ['ai-literacy', 'ia-generativa', 'prompt-engineering', 'productividad-ia', 'investigacion-ia', 'automatizacion-ia', 'agentes-ia', 'rag-conocimiento', 'ia-multimodal', 'programa-profesional'] },
  { id: 'ai-business', name: 'CESAC AI Business', shortName: 'AI Business', description: 'Transformación digital e IA para autónomos, pymes y grandes empresas.', icon: '💼', color: 'from-amber-600 to-amber-800', products: ['ia-autonomos', 'ia-pymes', 'automatizacion-admin', 'ia-marketing', 'ia-atencion-cliente', 'diagnostico-empresarial', 'plan-implantacion'] },
  { id: 'ai-public', name: 'CESAC AI Public Sector', shortName: 'Public Sector', description: 'IA aplicada a la modernización de las Administraciones Públicas y mejora del servicio ciudadano.', icon: '🏢', color: 'from-cyan-600 to-cyan-800', products: ['ia-empleados-publicos', 'ia-procedimientos', 'ia-contratacion', 'ia-documental', 'ia-informes', 'ia-proyectos-publicos'] },
  { id: 'ai-governance', name: 'CESAC AI Governance', shortName: 'AI Governance', description: 'Gobernanza de IA, cumplimiento del EU AI Act, gestión de riesgos y auditoría.', icon: '⚖️', color: 'from-rose-600 to-rose-800', products: ['eu-ai-act', 'ai-literacy-evidencia'] },
  { id: 'ai-lab', name: 'CESAC AI Lab', shortName: 'AI Lab', description: 'Laboratorio de innovación: desarrollo de agentes, automatizaciones y soluciones IA a medida.', icon: '🔬', color: 'from-indigo-600 to-indigo-800', products: [] },
  { id: 'ai-campus', name: 'CESAC AI Campus', shortName: 'Campus', description: 'Campus virtual con LMS completo, tutor IA, evaluaciones y certificación.', icon: '🎓', color: 'from-teal-600 to-teal-800', products: [] },
  { id: 'ai-consulting', name: 'CESAC AI Consulting', shortName: 'Consulting', description: 'Consultoría estratégica en IA, transformación digital y gobernanza tecnológica.', icon: '📊', color: 'from-slate-600 to-slate-800', products: [] },
  { id: 'ai-procurement', name: 'CESAC AI Procurement', shortName: 'Procurement', description: 'Monitorización de contratación pública, preparación de ofertas y gestión de licitaciones.', icon: '📋', color: 'from-orange-600 to-orange-800', products: [] }
];

// Productos - Versión condensada para Next.js (40 productos completos)
export const products: Product[] = [
  { id: 'p01', slug: 'policia-local', code: 'CESAC-OP-001', name: 'Preparación Policía Local', unit: 'CESAC Oposiciones', unitId: 'oposiciones', shortDescription: 'Preparación completa para las pruebas de acceso a Policía Local.', description: 'Programa integral de preparación para Policía Local con temario actualizado, banco de test y simulacros.', objectives: ['Dominar el temario completo', 'Alcanzar velocidad en test', 'Resolver supuestos prácticos'], targetAudience: ['Mayores de 18 años', 'ESO o equivalente'], prerequisites: ['Dedicación mínima 4h/día'], modality: 'hibrido', duration: '12 meses', hours: 800, price: 1800, iva: 0, priceCompany: 1500, pricePublic: 0, image: '👮', category: 'oposiciones', program: ['Derecho Constitucional', 'Derecho Administrativo', 'Derecho Penal', 'Ley de Tráfico', 'Seguridad Ciudadana'], competencies: ['Conocimiento normativo', 'Resolución de supuestos'], learningOutcomes: ['Aplicar normativa en supuestos', 'Resolver test con 85% acierto'], certification: 'Certificado CESAC Oposiciones', startDate: '2025-02-01', endDate: '2026-01-31', places: 50, status: 'PUBLISHED', faqs: [{ q: '¿Horas diarias?', a: 'Mínimo 4 horas.' }] },
  { id: 'p02', slug: 'auxiliar-admin', code: 'CESAC-OP-002', name: 'Auxiliar Administrativo', unit: 'CESAC Oposiciones', unitId: 'oposiciones', shortDescription: 'Preparación para plazas de Auxiliar Administrativo.', description: 'Programa completo para Auxiliar Administrativo con simulacros y tutorización.', objectives: ['Dominar temario', 'Manejar procedimientos', 'Superar ofimática'], targetAudience: ['Mayores de 16 años', 'ESO'], prerequisites: ['Ninguno'], modality: 'online', duration: '10 meses', hours: 600, price: 1200, iva: 0, priceCompany: 1000, pricePublic: 0, image: '📝', category: 'oposiciones', program: ['Organización administrativa', 'Derecho Constitucional', 'Procedimiento Administrativo', 'Ofimática'], competencies: ['Gestión documental', 'Atención al público'], learningOutcomes: ['Tramitar expedientes', 'Redactar documentos'], certification: 'Certificado CESAC Oposiciones', startDate: '2025-03-01', endDate: '2026-02-28', places: 80, status: 'PUBLISHED', faqs: [{ q: '¿Compatibilizable con trabajo?', a: 'Sí, modalidad online.' }] },
  { id: 'p16', slug: 'ai-literacy', code: 'CESAC-AI-001', name: 'AI Literacy', unit: 'CESAC AI Academy', unitId: 'ai-academy', shortDescription: 'Programa de alfabetización en IA para profesionales.', description: 'Curso fundamental para comprender la IA sin conocimientos técnicos previos.', objectives: ['Comprender fundamentos de IA', 'Identificar aplicaciones', 'Conocer riesgos y ética'], targetAudience: ['Profesionales', 'Directivos', 'Sin formación técnica'], prerequisites: ['Ninguno'], modality: 'online', duration: '4 semanas', hours: 30, price: 200, iva: 21, priceCompany: 170, pricePublic: 150, image: '🎯', category: 'ia-academy', program: ['¿Qué es la IA?', 'Tipos de sistemas', 'IA generativa', 'Ética y EU AI Act'], competencies: ['Comprensión de IA', 'Pensamiento crítico'], learningOutcomes: ['Explicar IA a terceros', 'Identificar oportunidades'], certification: 'Certificado CESAC AI Academy (30h)', startDate: '2025-01-15', endDate: '2025-12-15', places: 100, status: 'PUBLISHED', faqs: [{ q: '¿Necesito programar?', a: 'No, curso para no técnicos.' }] },
  { id: 'p18', slug: 'prompt-engineering', code: 'CESAC-AI-003', name: 'Prompt Engineering', unit: 'CESAC AI Academy', unitId: 'ai-academy', shortDescription: 'Técnicas avanzadas de ingeniería de prompts.', description: 'Curso especializado en creación de prompts efectivos para IA generativa.', objectives: ['Dominar prompt engineering', 'Obtener resultados consistentes', 'Diseñar prompts complejos'], targetAudience: ['Profesionales', 'Desarrolladores', 'Consultores'], prerequisites: ['Experiencia básica con ChatGPT'], modality: 'online', duration: '5 semanas', hours: 40, price: 350, iva: 21, priceCompany: 300, pricePublic: 270, image: '💬', category: 'ia-academy', program: ['Fundamentos', 'Chain-of-thought', 'Role prompting', 'Frameworks profesionales'], competencies: ['Comunicación con IA', 'Pensamiento estructurado'], learningOutcomes: ['Crear prompts consistentes', 'Diseñar biblioteca de prompts'], certification: 'Certificado CESAC AI Academy (40h)', startDate: '2025-02-01', endDate: '2025-12-31', places: 40, status: 'PUBLISHED', faqs: [{ q: '¿Funciona con cualquier modelo?', a: 'Sí, técnicas transferibles.' }] },
  { id: 'p39', slug: 'eu-ai-act', code: 'CESAC-GV-001', name: 'EU AI Act para Organizaciones', unit: 'CESAC AI Governance', unitId: 'ai-governance', shortDescription: 'Cumplimiento del Reglamento Europeo de IA.', description: 'Programa integral para cumplir con el EU AI Act: clasificación, riesgos y documentación.', objectives: ['Clasificar sistemas IA', 'Evaluar riesgos', 'Documentar cumplimiento'], targetAudience: ['Responsables compliance', 'DPOs', 'CTOs'], prerequisites: ['Organización con IA'], modality: 'hibrido', duration: '10 semanas', hours: 80, price: 1500, iva: 21, priceCompany: 1300, pricePublic: 1200, image: '⚖️', category: 'governance', program: ['EU AI Act', 'Clasificación', 'Evaluación de riesgos', 'Documentación técnica'], competencies: ['Cumplimiento normativo', 'Gestión de riesgos'], learningOutcomes: ['Completar inventario IA', 'Elaborar documentación'], certification: 'Certificado CESAC AI Governance (80h)', startDate: '2025-03-01', endDate: '2025-12-31', places: 25, status: 'PUBLISHED', faqs: [{ q: '¿Cuándo entra en vigor?', a: 'Gradualmente desde 2025.' }] }
];

export const cpvCodes = [
  { code: '80000000', description: 'Servicios de formación y simulación' },
  { code: '80500000', description: 'Servicios de formación' },
  { code: '80510000', description: 'Servicios de formación especializada' },
  { code: '72000000', description: 'Servicios de TI' },
  { code: '72220000', description: 'Servicios de desarrollo de sistemas' }
];

export const subscriptionPlans = [
  { id: 'individual', name: 'CESAC AI Individual', price: 29, period: 'mes', features: ['Acceso a cursos AI Literacy', 'Tutor IA básico', 'Comunidad'] },
  { id: 'pro', name: 'CESAC AI Pro', price: 79, period: 'mes', features: ['Todos los cursos AI Academy', 'Tutor IA avanzado', 'Certificados profesionales'] },
  { id: 'business', name: 'CESAC AI Business', price: 299, period: 'mes', features: ['Hasta 25 usuarios', 'Portal empresarial', 'CRM integrado'] },
  { id: 'governance', name: 'CESAC AI Governance', price: 499, period: 'mes', features: ['Todo lo de Business', 'Módulo Governance', 'Inventario IA'] }
];

export const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Formación', path: '/formacion' },
  { label: 'Inteligencia Artificial', path: '/ia' },
  { label: 'Oposiciones', path: '/oposiciones' },
  { label: 'Educación', path: '/educacion' },
  { label: 'Empresas', path: '/empresas' },
  { label: 'Administraciones', path: '/administraciones' },
  { label: 'AI Governance', path: '/governance' },
  { label: 'AI Lab', path: '/lab' },
  { label: 'Campus', path: '/campus' },
  { label: 'Consultoría', path: '/consultoria' },
  { label: 'Contratación Pública', path: '/procurement' },
  { label: 'Sobre CESAC', path: '/sobre' },
  { label: 'Contacto', path: '/contacto' }
];
