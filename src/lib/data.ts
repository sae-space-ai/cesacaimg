// CESAC AI - Datos maestros de la plataforma

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

export const businessUnits: BusinessUnit[] = [
  {
    id: 'oposiciones',
    name: 'CESAC Oposiciones',
    shortName: 'Oposiciones',
    description: 'Preparación integral de oposiciones para Administración Local, Autonómica y Cuerpos de Seguridad.',
    icon: '🏛️',
    color: 'from-blue-600 to-blue-800',
    products: ['policia-local', 'auxiliar-admin', 'administrativo', 'ses', 'junta-extremadura', 'admin-local', 'talleres-legislacion', 'simulacros-test']
  },
  {
    id: 'educacion',
    name: 'CESAC Educación',
    shortName: 'Educación',
    description: 'Formación para docentes, equipos directivos y centros educativos. Innovación pedagógica con IA.',
    icon: '📚',
    color: 'from-emerald-600 to-emerald-800',
    products: ['apoyo-academico', 'tecnicas-estudio', 'ia-docentes', 'ia-equipos-directivos', 'ia-programacion-didactica', 'ia-evaluacion', 'plan-adopcion-ia']
  },
  {
    id: 'ai-academy',
    name: 'CESAC AI Academy',
    shortName: 'AI Academy',
    description: 'Formación especializada en inteligencia artificial, desde alfabetización hasta desarrollo de agentes.',
    icon: '🤖',
    color: 'from-violet-600 to-violet-800',
    products: ['ai-literacy', 'ia-generativa', 'prompt-engineering', 'productividad-ia', 'investigacion-ia', 'automatizacion-ia', 'agentes-ia', 'rag-conocimiento', 'ia-multimodal', 'programa-profesional']
  },
  {
    id: 'ai-business',
    name: 'CESAC AI Business',
    shortName: 'AI Business',
    description: 'Transformación digital e IA para autónomos, pymes y grandes empresas.',
    icon: '💼',
    color: 'from-amber-600 to-amber-800',
    products: ['ia-autonomos', 'ia-pymes', 'automatizacion-admin', 'ia-marketing', 'ia-atencion-cliente', 'diagnostico-empresarial', 'plan-implantacion']
  },
  {
    id: 'ai-public',
    name: 'CESAC AI Public Sector',
    shortName: 'Public Sector',
    description: 'IA aplicada a la modernización de las Administraciones Públicas y mejora del servicio ciudadano.',
    icon: '🏢',
    color: 'from-cyan-600 to-cyan-800',
    products: ['ia-empleados-publicos', 'ia-procedimientos', 'ia-contratacion', 'ia-documental', 'ia-informes', 'ia-proyectos-publicos']
  },
  {
    id: 'ai-governance',
    name: 'CESAC AI Governance',
    shortName: 'AI Governance',
    description: 'Gobernanza de IA, cumplimiento del EU AI Act, gestión de riesgos y auditoría.',
    icon: '⚖️',
    color: 'from-rose-600 to-rose-800',
    products: ['eu-ai-act', 'ai-literacy-evidencia']
  },
  {
    id: 'ai-lab',
    name: 'CESAC AI Lab',
    shortName: 'AI Lab',
    description: 'Laboratorio de innovación: desarrollo de agentes, automatizaciones y soluciones IA a medida.',
    icon: '🔬',
    color: 'from-indigo-600 to-indigo-800',
    products: []
  },
  {
    id: 'ai-campus',
    name: 'CESAC AI Campus',
    shortName: 'Campus',
    description: 'Campus virtual con LMS completo, tutor IA, evaluaciones y certificación.',
    icon: '🎓',
    color: 'from-teal-600 to-teal-800',
    products: []
  },
  {
    id: 'ai-consulting',
    name: 'CESAC AI Consulting',
    shortName: 'Consulting',
    description: 'Consultoría estratégica en IA, transformación digital y gobernanza tecnológica.',
    icon: '📊',
    color: 'from-slate-600 to-slate-800',
    products: []
  },
  {
    id: 'ai-procurement',
    name: 'CESAC AI Procurement',
    shortName: 'Procurement',
    description: 'Monitorización de contratación pública, preparación de ofertas y gestión de licitaciones.',
    icon: '📋',
    color: 'from-orange-600 to-orange-800',
    products: []
  }
];

export const products: Product[] = [
  // GRUPO 1: CESAC OPOSICIONES
  {
    id: 'p01', slug: 'policia-local', code: 'CESAC-OP-001', name: 'Preparación Policía Local',
    unit: 'CESAC Oposiciones', unitId: 'oposiciones',
    shortDescription: 'Preparación completa para las pruebas de acceso a Policía Local: temario, test, supuestos prácticos y preparación física.',
    description: 'Programa integral de preparación para las pruebas de acceso al cuerpo de Policía Local. Incluye acceso completo al temario actualizado, banco de preguntas con miles de test, simulacros de examen con temporizador, supuestos prácticos resueltos y seguimiento personalizado por tutores especializados. El programa cubre todas las áreas exigidas: constitucional, administrativa, penal, tráfico, seguridad ciudadana y materias específicas de cada convocatoria.',
    objectives: ['Dominar el temario completo de Policía Local', 'Alcanzar velocidad y precisión en test tipo test', 'Resolver supuestos prácticos con metodología estructurada', 'Preparar las pruebas físicas con plan personalizado', 'Superar la entrevista personal con confianza'],
    targetAudience: ['Mayores de 18 años', 'Graduado en ESO o equivalente', 'Carnet de conducir B', 'Sin antecedentes penales'],
    prerequisites: ['Compromiso de dedicación mínima de 4 horas diarias', 'Disposición para entrenamiento físico regular'],
    modality: 'hibrido', duration: '12 meses', hours: 800, price: 1800, iva: 0, priceCompany: 1500, pricePublic: 0,
    image: '👮', category: 'oposiciones',
    program: ['Derecho Constitucional', 'Derecho Administrativo', 'Derecho Penal', 'Ley de Tráfico', 'Seguridad Ciudadana', 'Criminalística', 'Sociología', 'Tecnología', 'Idiomas', 'Test psicotécnicos', 'Preparación física', 'Supuestos prácticos'],
    competencies: ['Conocimiento normativo integral', 'Resolución de supuestos', 'Gestión del tiempo en examen', 'Técnicas de estudio avanzadas'],
    learningOutcomes: ['Identificar y aplicar la normativa vigente en supuestos prácticos', 'Resolver test con más del 85% de acierto', 'Elaborar informes y actas conforme a procedimiento'],
    certification: 'Certificado de preparación CESAC Oposiciones', startDate: '2025-02-01', endDate: '2026-01-31', places: 50, status: 'PUBLISHED',
    faqs: [{ q: '¿Cuántas horas debo dedicar al día?', a: 'Recomendamos un mínimo de 4 horas diarias para un progreso óptimo.' }, { q: '¿Incluye preparación física?', a: 'Sí, incluye plan personalizado de preparación física con seguimiento.' }]
  },
  {
    id: 'p02', slug: 'auxiliar-admin', code: 'CESAC-OP-002', name: 'Auxiliar Administrativo',
    unit: 'CESAC Oposiciones', unitId: 'oposiciones',
    shortDescription: 'Preparación para plazas de Auxiliar Administrativo del Estado, comunidades autónomas y entidades locales.',
    description: 'Programa completo para la preparación de oposiciones al cuerpo de Auxiliar Administrativo. Cubre temario oficial de las principales administraciones, con especial atención a la gestión administrativa, atención al ciudadano, ofimática y procedimientos. Incluye simulacros, test adaptativos y tutorización individualizada.',
    objectives: ['Dominar el temario de Auxiliar Administrativo', 'Manejar con soltura los procedimientos administrativos', 'Superar pruebas de ofimática', 'Gestionar el tiempo de examen eficazmente'],
    targetAudience: ['Mayores de 16 años', 'Graduado en ESO o equivalente'],
    prerequisites: ['Ninguno específico'],
    modality: 'online', duration: '10 meses', hours: 600, price: 1200, iva: 0, priceCompany: 1000, pricePublic: 0,
    image: '📝', category: 'oposiciones',
    program: ['Organización administrativa', 'Derecho Constitucional', 'Derecho Administrativo', 'Procedimiento Administrativo', 'Atención al ciudadano', 'Ofimática', 'Redacción de documentos', 'Test y simulacros'],
    competencies: ['Gestión documental', 'Atención al público', 'Ofimática avanzada', 'Redacción administrativa'],
    learningOutcomes: ['Tramitar expedientes administrativos completos', 'Redactar documentos oficiales', 'Atender al ciudadano conforme a normativa'],
    certification: 'Certificado de preparación CESAC Oposiciones', startDate: '2025-03-01', endDate: '2026-02-28', places: 80, status: 'PUBLISHED',
    faqs: [{ q: '¿Puedo compatibilizarlo con un trabajo?', a: 'Sí, la modalidad online permite adaptar el ritmo de estudio.' }]
  },
  {
    id: 'p03', slug: 'administrativo', code: 'CESAC-OP-003', name: 'Administrativo',
    unit: 'CESAC Oposiciones', unitId: 'oposiciones',
    shortDescription: 'Preparación para el cuerpo de Administrativo de diversas administraciones públicas.',
    description: 'Formación especializada para superar las pruebas de acceso al cuerpo de Administrativo. Programa que abarca desde los fundamentos del Derecho hasta las técnicas de gestión avanzada, con especial énfasis en el procedimiento administrativo común, contratación pública y gestión de recursos humanos.',
    objectives: ['Dominar el temario de Administrativo', 'Manejar el procedimiento administrativo con precisión', 'Preparar supuestos prácticos de gestión', 'Superar pruebas de ofimática avanzada'],
    targetAudience: ['Mayores de 16 años', 'Título de Bachiller o FP equivalente'],
    prerequisites: ['Conocimientos básicos de ofimática recomendados'],
    modality: 'hibrido', duration: '12 meses', hours: 750, price: 1500, iva: 0, priceCompany: 1300, pricePublic: 0,
    image: '📋', category: 'oposiciones',
    program: ['Derecho Constitucional', 'Derecho Administrativo', 'Procedimiento Administrativo', 'Contratación Pública', 'Gestión de RRHH', 'Hacienda Pública', 'Ofimática avanzada', 'Supuestos prácticos'],
    competencies: ['Gestión integral de expedientes', 'Contratación administrativa', 'Gestión de personal', 'Análisis normativo'],
    learningOutcomes: ['Gestionar expedientes de contratación', 'Aplicar la normativa de procedimiento', 'Elaborar informes técnicos'],
    certification: 'Certificado de preparación CESAC Oposiciones', startDate: '2025-02-01', endDate: '2026-01-31', places: 60, status: 'PUBLISHED',
    faqs: [{ q: '¿Qué titulaciones son válidas?', a: 'Bachillerato, FP de grado medio o titulaciones equivalentes.' }]
  },
  {
    id: 'p04', slug: 'ses', code: 'CESAC-OP-004', name: 'Servicio de Extremadura de Salud',
    unit: 'CESAC Oposiciones', unitId: 'oposiciones',
    shortDescription: 'Preparación específica para plazas del Servicio Extremeño de Salud en categorías administrativas y auxiliares.',
    description: 'Programa especializado para la preparación de oposiciones y procesos de selección del SES. Incluye temario específico de sanidad, estatuto marco, legislación sanitaria extremeña y protocolos de gestión administrativa en centros sanitarios.',
    objectives: ['Dominar el temario específico del SES', 'Conocer la organización sanitaria extremeña', 'Manejar la normativa del estatuto marco', 'Preparar los ejercicios prácticos específicos'],
    targetAudience: ['Personas interesadas en trabajar en el SES', 'Titulaciones según convocatoria'],
    prerequisites: ['Según la convocatoria específica'],
    modality: 'online', duration: '8 meses', hours: 500, price: 1100, iva: 0, priceCompany: 950, pricePublic: 0,
    image: '🏥', category: 'oposiciones',
    program: ['Estatuto Marco', 'Organización sanitaria', 'Legislación extremeña', 'Gestión administrativa sanitaria', 'Atención al usuario sanitario', 'Protección de datos en salud', 'Test y simulacros'],
    competencies: ['Gestión administrativa sanitaria', 'Conocimiento del sistema de salud', 'Atención al paciente'],
    learningOutcomes: ['Tramitar expedientes sanitarios', 'Aplicar normativa del estatuto marco', 'Gestionar citas y registros'],
    certification: 'Certificado de preparación CESAC Oposiciones', startDate: '2025-04-01', endDate: '2025-11-30', places: 40, status: 'PUBLISHED',
    faqs: [{ q: '¿Es válido para todas las categorías del SES?', a: 'El programa se adapta a las categorías administrativas y auxiliares convocadas.' }]
  },
  {
    id: 'p05', slug: 'junta-extremadura', code: 'CESAC-OP-005', name: 'Junta de Extremadura',
    unit: 'CESAC Oposiciones', unitId: 'oposiciones',
    shortDescription: 'Preparación para oposiciones de la Junta de Extremadura en diversas categorías administrativas.',
    description: 'Programa completo de preparación para las oposiciones de la Administración de la Junta de Extremadura. Cubre el temario específico de la organización autonómica, derecho administrativo, legislación extremeña y funciones propias de cada categoría.',
    objectives: ['Dominar la organización de la Junta de Extremadura', 'Conocer el marco normativo autonómico', 'Preparar todos los ejercicios de la oposición', 'Alcanzar la velocidad necesaria en los test'],
    targetAudience: ['Aspirantes a plazas de la Junta de Extremadura'],
    prerequisites: ['Titulación según convocatoria'],
    modality: 'hibrido', duration: '10 meses', hours: 650, price: 1400, iva: 0, priceCompany: 1200, pricePublic: 0,
    image: '🏛️', category: 'oposiciones',
    program: ['Estatuto de Autonomía', 'Organización de la Junta', 'Derecho Administrativo', 'Función Pública', 'Hacienda autonómica', 'Contratación', 'Derecho Constitucional', 'Simulacros'],
    competencies: ['Conocimiento autonómico', 'Gestión administrativa', 'Análisis normativo'],
    learningOutcomes: ['Aplicar la normativa de la Junta', 'Gestionar procedimientos administrativos autonómicos'],
    certification: 'Certificado de preparación CESAC Oposiciones', startDate: '2025-03-01', endDate: '2026-01-31', places: 50, status: 'PUBLISHED',
    faqs: [{ q: '¿Incluye legislación específica extremeña?', a: 'Sí, cubre toda la normativa autonómica relevante.' }]
  },
  {
    id: 'p06', slug: 'admin-local', code: 'CESAC-OP-006', name: 'Administración Local',
    unit: 'CESAC Oposiciones', unitId: 'oposiciones',
    shortDescription: 'Preparación para plazas de administración local: ayuntamientos, diputaciones y mancomunidades.',
    description: 'Formación orientada a la preparación de oposiciones en entidades locales. Incluye régimen local, procedimientos específicos, urbanismo, hacienda local, contratación del sector público y toda la normativa aplicable a la administración municipal.',
    objectives: ['Dominar el régimen local', 'Conocer la organización municipal', 'Manejar la normativa urbanística', 'Preparar supuestos de administración local'],
    targetAudience: ['Aspirantes a plazas en ayuntamientos y entidades locales'],
    prerequisites: ['Titulación según convocatoria'],
    modality: 'online', duration: '10 meses', hours: 600, price: 1300, iva: 0, priceCompany: 1100, pricePublic: 0,
    image: '🏘️', category: 'oposiciones',
    program: ['Régimen Local', 'Organización municipal', 'Urbanismo', 'Hacienda Local', 'Contratación pública', 'Servicios públicos', 'Policía Local (normativa)', 'Test y simulacros'],
    competencies: ['Gestión municipal', 'Urbanismo básico', 'Hacienda local'],
    learningOutcomes: ['Gestionar procedimientos municipales', 'Aplicar normativa urbanística', 'Tramitar expedientes de contratación local'],
    certification: 'Certificado de preparación CESAC Oposiciones', startDate: '2025-02-01', endDate: '2025-11-30', places: 60, status: 'PUBLISHED',
    faqs: [{ q: '¿Sirve para cualquier ayuntamiento?', a: 'El temario base es común; se complementa con normativa específica de cada convocatoria.' }]
  },
  {
    id: 'p07', slug: 'talleres-legislacion', code: 'CESAC-OP-007', name: 'Talleres de Legislación y Preparación Específica',
    unit: 'CESAC Oposiciones', unitId: 'oposiciones',
    shortDescription: 'Talleres monográficos sobre legislación específica y áreas de especial dificultad para opositores.',
    description: 'Ciclos de talleres intensivos centrados en materias concretas que presentan mayor dificultad para los opositores: derecho constitucional avanzado, procedimiento administrativo, legislación específica por convocatoria, técnicas de memorización y metodología de estudio.',
    objectives: ['Profundizar en materias específicas', 'Resolver dudas puntuales complejas', 'Mejorar técnicas de estudio', 'Actualizar conocimientos ante cambios normativos'],
    targetAudience: ['Opositores en preparación activa', 'Personas que necesiten refuerzo en materias concretas'],
    prerequisites: ['Estar en proceso de preparación de oposiciones'],
    modality: 'online', duration: '4 semanas por taller', hours: 40, price: 150, iva: 0, priceCompany: 120, pricePublic: 0,
    image: '📖', category: 'oposiciones',
    program: ['Derecho Constitucional avanzado', 'Procedimiento Administrativo', 'Legislación específica', 'Técnicas de memorización', 'Actualización normativa'],
    competencies: ['Análisis normativo avanzado', 'Técnicas de estudio', 'Actualización continua'],
    learningOutcomes: ['Dominar materias específicas de dificultad', 'Aplicar técnicas de estudio eficaces'],
    certification: 'Certificado de asistencia CESAC Oposiciones', startDate: '2025-01-15', endDate: '2025-12-15', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Cuántos talleres hay disponibles?', a: 'Se programan talleres mensuales sobre diferentes materias.' }]
  },
  {
    id: 'p08', slug: 'simulacros-test', code: 'CESAC-OP-008', name: 'Simulacros y Banco de Test',
    unit: 'CESAC Oposiciones', unitId: 'oposiciones',
    shortDescription: 'Acceso a plataforma de simulacros de examen y banco de más de 15.000 preguntas organizadas por temas.',
    description: 'Plataforma digital con banco de más de 15.000 preguntas tipo test organizadas por temas, subtemas y nivel de dificultad. Incluye simulacros cronometrados que reproducen las condiciones reales del examen, estadísticas de rendimiento, identificación de temas débiles y sistema de repaso adaptativo basado en algoritmos de repetición espaciada.',
    objectives: ['Practicar con miles de preguntas reales', 'Simular condiciones de examen', 'Identificar y reforzar temas débiles', 'Mejorar la gestión del tiempo'],
    targetAudience: ['Opositores de cualquier cuerpo', 'Personas que necesiten practicar test'],
    prerequisites: ['Ninguno'],
    modality: 'online', duration: 'Acceso 12 meses', hours: 0, price: 200, iva: 0, priceCompany: 160, pricePublic: 0,
    image: '✅', category: 'oposiciones',
    program: ['Banco de 15.000+ preguntas', 'Simulacros cronometrados', 'Estadísticas de rendimiento', 'Repaso adaptativo', 'Informes de progreso', 'Temas débiles'],
    competencies: ['Resolución rápida de test', 'Gestión del tiempo', 'Autoevaluación'],
    learningOutcomes: ['Alcanzar más del 80% de acierto en simulacros', 'Reducir tiempo de respuesta'],
    certification: 'No incluye certificación', startDate: 'Acceso inmediato', endDate: '12 meses', places: 999, status: 'PUBLISHED',
    faqs: [{ q: '¿Las preguntas se actualizan?', a: 'Sí, el banco se actualiza periódicamente con nuevas preguntas y cambios normativos.' }]
  },
  // GRUPO 2: CESAC EDUCACIÓN
  {
    id: 'p09', slug: 'apoyo-academico', code: 'CESAC-ED-001', name: 'Apoyo Académico',
    unit: 'CESAC Educación', unitId: 'educacion',
    shortDescription: 'Programa de refuerzo y apoyo académico personalizado para estudiantes de primaria, ESO y bachillerato.',
    description: 'Servicio de apoyo académico personalizado que combina sesiones individuales y grupos reducidos. Cada estudiante recibe un plan de trabajo adaptado a sus necesidades, con seguimiento continuo de progreso y comunicación con familias. Áreas: matemáticas, lengua, ciencias, inglés y técnicas de estudio.',
    objectives: ['Mejorar el rendimiento académico', 'Consolidar hábitos de estudio', 'Recuperar confianza en el aprendizaje', 'Preparar evaluaciones con éxito'],
    targetAudience: ['Estudiantes de primaria', 'Estudiantes de ESO', 'Estudiantes de bachillerato'],
    prerequisites: ['Ninguno'],
    modality: 'hibrido', duration: 'Curso académico', hours: 120, price: 180, iva: 0, priceCompany: 0, pricePublic: 0,
    image: '✏️', category: 'educacion',
    program: ['Diagnóstico inicial', 'Plan personalizado', 'Sesiones individuales', 'Grupos reducidos', 'Seguimiento mensual', 'Comunicación con familias'],
    competencies: ['Autonomía en el estudio', 'Organización del tiempo', 'Comprensión lectora', 'Resolución de problemas'],
    learningOutcomes: ['Mejorar calificaciones en al menos un nivel', 'Desarrollar hábitos de estudio autónomos'],
    certification: 'Informe de progreso trimestral', startDate: '2025-09-01', endDate: '2026-06-30', places: 25, status: 'PUBLISHED',
    faqs: [{ q: '¿Cuántas sesiones semanales incluye?', a: 'El plan se adapta a las necesidades de cada estudiante, generalmente 2-3 sesiones semanales.' }]
  },
  {
    id: 'p10', slug: 'tecnicas-estudio', code: 'CESAC-ED-002', name: 'Técnicas de Estudio',
    unit: 'CESAC Educación', unitId: 'educacion',
    shortDescription: 'Curso de técnicas de estudio y estrategias de aprendizaje eficaz para estudiantes y opositores.',
    description: 'Programa práctico para dominar las técnicas de estudio más eficaces: mapas mentales, resúmenes estructurados, repetición espaciada, lectura comprensiva, gestión del tiempo y preparación de exámenes. Incluye herramientas digitales y analógicas.',
    objectives: ['Dominar técnicas de estudio probadas', 'Organizar el tiempo de estudio', 'Mejorar la comprensión y memorización', 'Preparar exámenes con método'],
    targetAudience: ['Estudiantes de ESO y bachillerato', 'Universitarios', 'Opositores'],
    prerequisites: ['Ninguno'],
    modality: 'online', duration: '6 semanas', hours: 30, price: 120, iva: 0, priceCompany: 90, pricePublic: 0,
    image: '🧠', category: 'educacion',
    program: ['Lectura comprensiva', 'Toma de apuntes', 'Mapas mentales', 'Resúmenes eficaces', 'Repetición espaciada', 'Gestión del tiempo', 'Preparación de exámenes', 'Herramientas digitales'],
    competencies: ['Organización', 'Comprensión profunda', 'Memorización eficaz', 'Autogestión'],
    learningOutcomes: ['Aplicar al menos 5 técnicas de estudio', 'Elaborar plan de estudio personalizado'],
    certification: 'Certificado CESAC Educación', startDate: '2025-02-01', endDate: '2025-12-31', places: 40, status: 'PUBLISHED',
    faqs: [{ q: '¿Es válido para cualquier nivel?', a: 'Sí, las técnicas se adaptan a cualquier nivel educativo o de oposición.' }]
  },
  {
    id: 'p11', slug: 'ia-docentes', code: 'CESAC-ED-003', name: 'IA para Docentes',
    unit: 'CESAC Educación', unitId: 'educacion',
    shortDescription: 'Formación práctica en inteligencia artificial aplicada a la labor docente: planificación, evaluación y atención a la diversidad.',
    description: 'Curso diseñado para que los docentes integren la IA en su práctica diaria de forma crítica y eficaz. Aprenderán a utilizar herramientas de IA para la planificación didáctica, creación de materiales, evaluación formativa, atención a la diversidad y comunicación con familias. Enfoque práctico con casos reales del aula.',
    objectives: ['Utilizar herramientas de IA en la planificación didáctica', 'Crear materiales adaptados con IA', 'Implementar evaluación formativa asistida', 'Atender la diversidad con apoyo de IA'],
    targetAudience: ['Docentes de cualquier nivel educativo', 'Orientadores educativos'],
    prerequisites: ['Ejercicio docente activo', 'Conocimientos básicos de informática'],
    modality: 'online', duration: '8 semanas', hours: 60, price: 250, iva: 0, priceCompany: 200, pricePublic: 180,
    image: '👨‍🏫', category: 'educacion',
    program: ['Fundamentos de IA para educación', 'Planificación con IA', 'Creación de materiales', 'Evaluación formativa', 'Atención a la diversidad', 'Comunicación con familias', 'Ética y protección de datos', 'Proyecto final'],
    competencies: ['Integración de IA en el aula', 'Diseño de materiales adaptados', 'Evaluación innovadora'],
    learningOutcomes: ['Diseñar una unidad didáctica con apoyo de IA', 'Crear rúbricas de evaluación automatizadas', 'Implementar atención personalizada con IA'],
    certification: 'Certificado CESAC Educación (60 horas)', startDate: '2025-03-01', endDate: '2025-12-31', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Es bonificable por FUNDAE?', a: 'Sí, el curso es bonificable a través de FUNDAE para centros educativos.' }]
  },
  {
    id: 'p12', slug: 'ia-equipos-directivos', code: 'CESAC-ED-004', name: 'IA para Equipos Directivos',
    unit: 'CESAC Educación', unitId: 'educacion',
    shortDescription: 'Programa estratégico para equipos directivos de centros educativos sobre adopción responsable de IA.',
    description: 'Programa diseñado para equipos directivos que necesitan liderar la transformación digital de sus centros con IA. Aborda la planificación estratégica, gestión del cambio, formación del profesorado, marco ético-legal y evaluación de impacto. Incluye casos de éxito y herramientas de gestión.',
    objectives: ['Liderar la adopción de IA en el centro', 'Diseñar un plan de transformación digital', 'Gestionar el cambio organizativo', 'Evaluar el impacto de la IA en el centro'],
    targetAudience: ['Directores y equipos directivos de centros educativos', 'Inspectores de educación'],
    prerequisites: ['Cargo directivo en centro educativo'],
    modality: 'hibrido', duration: '10 semanas', hours: 80, price: 400, iva: 0, priceCompany: 350, pricePublic: 300,
    image: '👔', category: 'educacion',
    program: ['IA en el contexto educativo actual', 'Plan estratégico de centro', 'Gestión del cambio', 'Formación del profesorado', 'Marco ético y legal', 'Evaluación de impacto', 'Comunicación con la comunidad', 'Proyecto de centro'],
    competencies: ['Liderazgo tecnológico', 'Gestión del cambio', 'Planificación estratégica'],
    learningOutcomes: ['Elaborar un plan de adopción de IA para el centro', 'Diseñar un plan de formación del profesorado'],
    certification: 'Certificado CESAC Educación (80 horas)', startDate: '2025-04-01', endDate: '2025-12-31', places: 20, status: 'PUBLISHED',
    faqs: [{ q: '¿Puede asistir el equipo completo?', a: 'Sí, se recomienda la asistencia del equipo directivo al completo.' }]
  },
  {
    id: 'p13', slug: 'ia-programacion-didactica', code: 'CESAC-ED-005', name: 'IA Aplicada a Programación Didáctica',
    unit: 'CESAC Educación', unitId: 'educacion',
    shortDescription: 'Taller práctico para utilizar IA en el diseño de programaciones didácticas completas y adaptadas.',
    description: 'Taller intensivo donde los docentes aprenderán a utilizar herramientas de IA para diseñar programaciones didácticas completas, alineadas con la LOMLOE, incluyendo situaciones de aprendizaje, criterios de evaluación, competencias clave y atención a la diversidad. Se trabaja con casos reales y se obtienen documentos utilizables.',
    objectives: ['Diseñar programaciones didácticas con apoyo de IA', 'Crear situaciones de aprendizaje innovadoras', 'Alinear con LOMLOE y competencias clave', 'Generar materiales adaptados'],
    targetAudience: ['Docentes de cualquier nivel y materia'],
    prerequisites: ['Conocimiento básico de la LOMLOE'],
    modality: 'online', duration: '4 semanas', hours: 30, price: 150, iva: 0, priceCompany: 120, pricePublic: 100,
    image: '📐', category: 'educacion',
    program: ['LOMLOE y competencias clave', 'IA para diseño curricular', 'Situaciones de aprendizaje', 'Criterios de evaluación', 'Atención a la diversidad con IA', 'Generación de materiales', 'Revisión y mejora'],
    competencies: ['Diseño curricular con IA', 'Situaciones de aprendizaje', 'Evaluación por competencias'],
    learningOutcomes: ['Diseñar una programación didáctica completa con IA', 'Crear 3 situaciones de aprendizaje'],
    certification: 'Certificado CESAC Educación (30 horas)', startDate: '2025-02-01', endDate: '2025-12-31', places: 35, status: 'PUBLISHED',
    faqs: [{ q: '¿Obtendré materiales utilizables?', a: 'Sí, al finalizar tendrás programaciones y materiales listos para usar en el aula.' }]
  },
  {
    id: 'p14', slug: 'ia-evaluacion', code: 'CESAC-ED-006', name: 'IA Aplicada a Evaluación',
    unit: 'CESAC Educación', unitId: 'educacion',
    shortDescription: 'Formación en diseño de instrumentos de evaluación formativa y sumativa asistidos por IA.',
    description: 'Curso especializado en el uso de IA para el diseño de instrumentos de evaluación: rúbricas, listas de cotejo, pruebas escritas, portfolios y evaluación por competencias. Incluye técnicas para generar feedback automático, analítica del aprendizaje y sistemas de evaluación adaptativa.',
    objectives: ['Diseñar instrumentos de evaluación con IA', 'Crear rúbricas detalladas y objetivas', 'Implementar feedback automatizado', 'Utilizar analítica del aprendizaje'],
    targetAudience: ['Docentes de cualquier nivel', 'Departamentos de evaluación'],
    prerequisites: ['Experiencia docente básica'],
    modality: 'online', duration: '5 semanas', hours: 40, price: 180, iva: 0, priceCompany: 150, pricePublic: 130,
    image: '📊', category: 'educacion',
    program: ['Evaluación formativa y sumativa', 'Rúbricas con IA', 'Pruebas adaptativas', 'Feedback automatizado', 'Analítica del aprendizaje', 'Portfolio digital', 'Evaluación por competencias'],
    competencies: ['Diseño de evaluación', 'Analítica educativa', 'Feedback eficaz'],
    learningOutcomes: ['Crear un sistema de evaluación completo con IA', 'Diseñar rúbricas para situaciones de aprendizaje'],
    certification: 'Certificado CESAC Educación (40 horas)', startDate: '2025-03-01', endDate: '2025-12-31', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Incluye herramientas gratuitas?', a: 'Sí, se trabajan tanto herramientas gratuitas como profesionales.' }]
  },
  {
    id: 'p15', slug: 'plan-adopcion-ia', code: 'CESAC-ED-007', name: 'Plan de Adopción Responsable de IA para Centros Educativos',
    unit: 'CESAC Educación', unitId: 'educacion',
    shortDescription: 'Acompañamiento integral para centros educativos en la adopción ética y eficaz de la inteligencia artificial.',
    description: 'Programa de acompañamiento para centros educativos que desean integrar la IA de forma responsable. Incluye diagnóstico inicial, plan de acción, formación del claustro, desarrollo de normativa interna, comunicación con familias y evaluación de resultados. Programa de 6 meses con tutor dedicado.',
    objectives: ['Realizar diagnóstico de madurez digital del centro', 'Diseñar plan de adopción de IA', 'Formar al claustro docente', 'Establecer normativa de uso responsable'],
    targetAudience: ['Centros educativos completos', 'Equipos directivos con compromiso de centro'],
    prerequisites: ['Compromiso de la dirección del centro'],
    modality: 'hibrido', duration: '6 meses', hours: 120, price: 2500, iva: 0, priceCompany: 2000, pricePublic: 1800,
    image: '🏫', category: 'educacion',
    program: ['Diagnóstico de madurez', 'Plan estratégico', 'Formación del claustro', 'Normativa de uso', 'Comunicación con familias', 'Implementación por fases', 'Evaluación de impacto', 'Memoria final'],
    competencies: ['Transformación digital', 'Liderazgo pedagógico', 'Gestión del cambio'],
    learningOutcomes: ['Centro con plan de IA implementado', 'Claustro formado en IA', 'Normativa de uso aprobada'],
    certification: 'Sello Centro CESAC AI Ready', startDate: '2025-09-01', endDate: '2026-06-30', places: 10, status: 'PUBLISHED',
    faqs: [{ q: '¿Cuántos profesores pueden participar?', a: 'El programa incluye formación para todo el claustro del centro.' }]
  },
  // GRUPO 3: CESAC AI ACADEMY (ACTUALIZADO 2026)
  {
    id: 'p16', slug: 'fundamentos-ia-generativa', code: 'CESAC-AI-001', name: 'Fundamentos de IA Generativa para Profesionales',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Curso introductorio para desmitificar la IA Generativa. Comprende LLMs, sus limitaciones y cómo integrarlos éticamente en tu flujo de trabajo.',
    description: 'Curso introductorio diseñado para desmitificar la Inteligencia Artificial Generativa. Los participantes comprenderán cómo funcionan los LLMs, sus limitaciones actuales y cómo integrarlos éticamente en su flujo de trabajo diario sin necesidad de conocimientos técnicos avanzados.',
    objectives: ['Comprender la arquitectura básica de los Transformers y LLMs', 'Diferenciar entre IA discriminativa y generativa', 'Identificar sesgos algorítmicos y riesgos de alucinación', 'Aplicar principios básicos de privacidad de datos al usar IA pública'],
    targetAudience: ['Profesionales de cualquier sector', 'Directivos y mandos intermedios', 'Personas sin formación técnica'],
    prerequisites: ['Ninguno'],
    modality: 'online', duration: '4 semanas', hours: 30, price: 250, iva: 21, priceCompany: 210, pricePublic: 190,
    image: '🎯', category: 'ia-academy',
    program: ['Historia y Evolución (De Turing a la Era Generativa)', 'Cómo piensan las máquinas (Tokens, embeddings y probabilidad)', 'El ecosistema 2026 (Modelos propietarios vs. Open Source)', 'Ética y Seguridad (Deepfakes, propiedad intelectual y GDPR)', 'Taller práctico (Primeros pasos con asistentes conversacionales)'],
    competencies: ['Comprensión de LLMs', 'Análisis de riesgos', 'Uso ético de IA', 'Privacidad de datos'],
    learningOutcomes: ['Explicar con claridad el funcionamiento de un LLM a un no técnico', 'Realizar un análisis de riesgo básico antes de introducir datos en una IA'],
    certification: 'Certificado CESAC AI Academy (30 horas)', startDate: '2026-02-01', endDate: '2026-12-15', places: 40, status: 'PUBLISHED',
    faqs: [{ q: '¿Necesito conocimientos de programación?', a: 'No, el curso está diseñado para perfiles no técnicos. Metodología: 70% práctica guiada, 20% teoría aplicada, 10% reflexión.' }]
  },
  {
    id: 'p17', slug: 'prompt-engineering-avanzado', code: 'CESAC-AI-002', name: 'Prompt Engineering Avanzado y Diseño de Instrucciones',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Domina el arte de comunicarte con la IA. Técnicas estructuradas como Chain-of-Thought, Few-Shot Learning y sistemas de prompts modulares.',
    description: 'Domina el arte de comunicarte con la IA. Este curso va más allá de preguntas simples, enseñando técnicas estructuradas como Chain-of-Thought, Few-Shot Learning y diseño de sistemas de prompts modulares para obtener resultados consistentes y profesionales.',
    objectives: ['Dominar frameworks de prompting (CO-STAR, RTF)', 'Implementar técnicas de razonamiento paso a paso (Chain-of-Thought)', 'Diseñar librerías de prompts reutilizables para equipos', 'Evaluar y optimizar la calidad de las respuestas de la IA'],
    targetAudience: ['Profesionales que usan IA diariamente', 'Desarrolladores', 'Creadores de contenido', 'Consultores'],
    prerequisites: ['Experiencia básica con ChatGPT o similar'],
    modality: 'online', duration: '6 semanas', hours: 45, price: 380, iva: 21, priceCompany: 320, pricePublic: 290,
    image: '💬', category: 'ia-academy',
    program: ['Fundamentos del Prompting (Contexto, instrucción y formato)', 'Técnicas Intermedias (Zero-shot vs. Few-shot learning)', 'Razonamiento Complejo (Tree-of-Thoughts y Self-Consistency)', 'Prompting para Código y Datos (Estructuras JSON y SQL)', 'Ingeniería de Sistemas (Variables, plantillas y metaprompts)', 'Optimización (Métricas de éxito y A/B testing de prompts)'],
    competencies: ['Diseño de prompts estructurados', 'Razonamiento complejo con IA', 'Optimización de flujos de trabajo', 'Evaluación de calidad'],
    learningOutcomes: ['Crear una biblioteca de 10 prompts profesionales validados', 'Reducir la tasa de error en tareas complejas mediante instrucciones estructuradas'],
    certification: 'Certificado CESAC AI Academy (45 horas)', startDate: '2026-02-15', endDate: '2026-12-31', places: 35, status: 'PUBLISHED',
    faqs: [{ q: '¿Qué metodología se utiliza?', a: 'Laboratorios de prompting en vivo. Uso de herramientas de evaluación automática de prompts.' }]
  },
  {
    id: 'p18', slug: 'estrategia-ia-empresarial', code: 'CESAC-AI-003', name: 'Estrategia de IA Empresarial y Transformación Digital',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Enfoque directivo para líderes que deben decidir dónde, cómo y por qué invertir en IA. ROI, gestión del cambio y quick wins.',
    description: 'Enfoque directivo para líderes que deben decidir dónde, cómo y por qué invertir en IA. Se centra en el alineamiento estratégico, el cálculo del ROI, la gestión del cambio cultural y la identificación de "quick wins" frente a proyectos transformadores a largo plazo.',
    objectives: ['Diseñar una hoja de ruta de IA alineada con los objetivos de negocio', 'Calcular el ROI tangible e intangible de proyectos de IA', 'Liderar la gestión del cambio y la adopción tecnológica en equipos', 'Evaluar proveedores de IA y soluciones SaaS inteligentes'],
    targetAudience: ['Directivos y C-level', 'Responsables de transformación digital', 'Directores de innovación', 'Consultores estratégicos'],
    prerequisites: ['Experiencia en gestión de equipos o proyectos'],
    modality: 'online', duration: '8 semanas', hours: 60, price: 650, iva: 21, priceCompany: 550, pricePublic: 500,
    image: '📊', category: 'ia-academy',
    program: ['Auditoría de Madurez Digital', 'Identificación de Oportunidades (Matriz de impacto/esfuerzo)', 'Modelos de Negocio potenciados por IA', 'Gestión de Talento (Upskilling y reskilling)', 'Presupuesto y Financiación (CAPEX vs. OPEX)', 'KPIs Estratégicos y gobierno de datos'],
    competencies: ['Planificación estratégica de IA', 'Cálculo de ROI', 'Gestión del cambio', 'Evaluación de proveedores'],
    learningOutcomes: ['Presentar un Plan Estratégico de IA a 3 años para una organización real', 'Definir un comité de gobierno de IA interno'],
    certification: 'Certificado CESAC AI Academy (60 horas)', startDate: '2026-03-01', endDate: '2026-12-31', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Qué metodología se utiliza?', a: 'Estudio de casos reales de empresas Fortune 500. Simulaciones de toma de decisiones directivas.' }]
  },
  {
    id: 'p19', slug: 'etica-gobernanza-ia', code: 'CESAC-AI-004', name: 'Ética, Gobernanza y Regulación de IA (EU AI Act)',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Curso especializado en el marco legal y ético de la IA en 2026, con foco total en la aplicación práctica del EU AI Act.',
    description: 'Curso especializado en el marco legal y ético de la IA en 2026, con foco total en la aplicación práctica del EU AI Act y normativas globales emergentes. Ideal para oficiales de cumplimiento, legales y responsables de protección de datos.',
    objectives: ['Clasificar sistemas de IA según niveles de riesgo (EU AI Act)', 'Implementar protocolos de transparencia y explicabilidad (XAI)', 'Auditar algoritmos para detectar sesgos discriminatorios', 'Redactar políticas internas de uso responsable de IA'],
    targetAudience: ['Oficiales de cumplimiento (Compliance Officers)', 'Responsables legales', 'DPOs y responsables de protección de datos', 'Consultores de gobernanza de IA'],
    prerequisites: ['Conocimientos básicos de normativa empresarial'],
    modality: 'online', duration: '5 semanas', hours: 40, price: 450, iva: 21, priceCompany: 380, pricePublic: 350,
    image: '⚖️', category: 'ia-academy',
    program: ['Marco Legal Global (EU AI Act, leyes locales y estándares ISO)', 'Clasificación de Riesgo (Prohibidas, alto riesgo, limitado y mínimo)', 'Transparencia Algorítmica y derecho a la explicación', 'Privacidad y Datos (Anonimización y federated learning)', 'Auditoría Ética y detección de sesgos', 'Gobernanza Corporativa y responsabilidades legales'],
    competencies: ['Clasificación de riesgo', 'Auditoría de algoritmos', 'Redacción de políticas', 'Gobernanza corporativa'],
    learningOutcomes: ['Realizar una Evaluación de Impacto Fundamental Rights (FRIA)', 'Diseñar un manual de cumplimiento normativo para sistemas de IA'],
    certification: 'Certificado CESAC AI Academy (40 horas)', startDate: '2026-03-15', endDate: '2026-12-31', places: 35, status: 'PUBLISHED',
    faqs: [{ q: '¿Qué metodología se utiliza?', a: 'Análisis de sentencias judiciales recientes y auditorías simuladas sobre datasets públicos.' }]
  },
  {
    id: 'p20', slug: 'ia-toma-decisiones', code: 'CESAC-AI-005', name: 'IA para la Toma de Decisiones Estratégicas',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Combina analítica de datos avanzada con modelos predictivos para apoyar la dirección estratégica y reducir incertidumbre.',
    description: 'Combina analítica de datos avanzada con modelos predictivos para apoyar la dirección estratégica. Los alumnos aprenderán a interpretar escenarios simulados por IA, reducir la incertidumbre en mercados volátiles y evitar sesgos cognitivos humanos mediante el apoyo de inteligencia artificial.',
    objectives: ['Utilizar modelos predictivos para forecasting de mercado', 'Interpretar dashboards de simulación de escenarios (What-if analysis)', 'Integrar insights de IA en procesos de decisión colegiada', 'Diferenciar entre correlación estadística y causalidad estratégica'],
    targetAudience: ['Directivos y analistas estratégicos', 'Responsables de business intelligence', 'Consultores de estrategia', 'Analistas financieros'],
    prerequisites: ['Conocimientos básicos de analítica de datos'],
    modality: 'online', duration: '6 semanas', hours: 45, price: 480, iva: 21, priceCompany: 410, pricePublic: 370,
    image: '📈', category: 'ia-academy',
    program: ['De BI a IA Predictiva', 'Modelos de Forecasting (Series temporales y variables externas)', 'Simulación de Escenarios (Herramientas de Monte Carlo con IA)', 'Sesgos Cognitivos vs. Sesgos Algorítmicos', 'Visualización Narrativa de datos predictivos', 'Casos de Estudio en Finanzas, Retail y Logística'],
    competencies: ['Modelado predictivo', 'Análisis de escenarios', 'Visualización de datos', 'Toma de decisiones basada en evidencia'],
    learningOutcomes: ['Desarrollar un modelo de soporte a la decisión para un problema estratégico real', 'Presentar recomendaciones basadas en evidencia predictiva con márgenes de confianza'],
    certification: 'Certificado CESAC AI Academy (45 horas)', startDate: '2026-04-01', endDate: '2026-12-31', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Qué metodología se utiliza?', a: 'Uso de herramientas de simulación de negocios y análisis de grandes volúmenes de datos históricos.' }]
  },
  {
    id: 'p21', slug: 'automatizacion-ia', code: 'CESAC-AI-006', name: 'Automatización con IA',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Diseña e implementa automatizaciones inteligentes que combinan IA, APIs y flujos de trabajo.',
    description: 'Curso práctico para crear automatizaciones que integran IA con herramientas del día a día. Aprenderás a conectar ChatGPT, APIs, hojas de cálculo, email, CRM y otras herramientas mediante plataformas no-code y low-code. Desde automatizaciones simples hasta flujos complejos con toma de decisiones.',
    objectives: ['Diseñar flujos de automatización', 'Conectar herramientas mediante APIs', 'Implementar IA en procesos de negocio', 'Crear automatizaciones sin código'],
    targetAudience: ['Profesionales que quieren automatizar', 'Operaciones y administración', 'Consultores'],
    prerequisites: ['Conocimientos básicos de informática'],
    modality: 'online', duration: '8 semanas', hours: 60, price: 450, iva: 21, priceCompany: 400, pricePublic: 360,
    image: '🔄', category: 'ia-academy',
    program: ['Fundamentos de automatización', 'Plataformas no-code (Make, Zapier, n8n)', 'APIs y webhooks', 'IA en flujos de trabajo', 'Automatización de email', 'Procesamiento de documentos', 'Dashboards automáticos', 'Proyecto de automatización'],
    competencies: ['Diseño de procesos', 'Integración de sistemas', 'Pensamiento sistémico'],
    learningOutcomes: ['Implementar 5 automatizaciones completas', 'Diseñar un flujo de negocio con IA'],
    certification: 'Certificado CESAC AI Academy (60 horas)', startDate: '2025-04-01', endDate: '2025-12-31', places: 35, status: 'PUBLISHED',
    faqs: [{ q: '¿Necesito saber programar?', a: 'No, se utilizan plataformas no-code. Aunque conocimientos básicos ayudan.' }]
  },
  {
    id: 'p22', slug: 'agentes-ia', code: 'CESAC-AI-007', name: 'Agentes de IA',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Diseña, construye y despliega agentes de IA autónomos que ejecutan tareas complejas.',
    description: 'Programa avanzado sobre el diseño y construcción de agentes de IA: sistemas que pueden planificar, usar herramientas, tomar decisiones y ejecutar tareas de forma autónoma. Cubre arquitecturas de agentes, uso de herramientas, memoria, planificación y frameworks como LangChain, CrewAI y AutoGen.',
    objectives: ['Comprender la arquitectura de agentes de IA', 'Diseñar agentes para tareas específicas', 'Implementar agentes con herramientas', 'Desplegar agentes funcionales'],
    targetAudience: ['Desarrolladores', 'Arquitectos de soluciones', 'Profesionales técnicos'],
    prerequisites: ['Conocimientos básicos de programación', 'Experiencia con APIs'],
    modality: 'online', duration: '10 semanas', hours: 80, price: 600, iva: 21, priceCompany: 520, pricePublic: 470,
    image: '🤖', category: 'ia-academy',
    program: ['Arquitectura de agentes', 'Frameworks: LangChain, CrewAI, AutoGen', 'Uso de herramientas', 'Memoria y contexto', 'Planificación y razonamiento', 'Agentes multi-agente', 'Seguridad y supervisión', 'Proyecto: agente funcional'],
    competencies: ['Diseño de sistemas autónomos', 'Programación con frameworks de IA', 'Arquitectura de software'],
    learningOutcomes: ['Construir un agente funcional con herramientas', 'Diseñar un sistema multi-agente'],
    certification: 'Certificado CESAC AI Academy (80 horas)', startDate: '2025-04-01', endDate: '2025-12-31', places: 25, status: 'PUBLISHED',
    faqs: [{ q: '¿Qué lenguaje de programación se usa?', a: 'Principalmente Python, con ejemplos en JavaScript.' }]
  },
  {
    id: 'p23', slug: 'rag-conocimiento', code: 'CESAC-AI-008', name: 'RAG y Bases de Conocimiento',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Construye sistemas de recuperación aumentada (RAG) para crear asistentes con conocimiento propio.',
    description: 'Curso especializado en Retrieval-Augmented Generation (RAG): la técnica que permite a los modelos de IA acceder a conocimiento específico de una organización. Aprenderás a construir pipelines de ingesta, vectorización, recuperación y generación con citas. Incluye implementación práctica con bases de datos vectoriales.',
    objectives: ['Entender la arquitectura RAG', 'Construir un pipeline de ingesta documental', 'Implementar recuperación vectorial', 'Generar respuestas con citas y fuentes'],
    targetAudience: ['Desarrolladores', 'Arquitectos de datos', 'Responsables de conocimiento'],
    prerequisites: ['Conocimientos de Python', 'Familiaridad con APIs de IA'],
    modality: 'online', duration: '8 semanas', hours: 65, price: 550, iva: 21, priceCompany: 480, pricePublic: 430,
    image: '📚', category: 'ia-academy',
    program: ['Fundamentos de RAG', 'Procesamiento de documentos', 'Embeddings y vectorización', 'Bases de datos vectoriales', 'Estrategias de recuperación', 'Reranking', 'Generación con citas', 'Evaluación de calidad'],
    competencies: ['Arquitectura RAG', 'Procesamiento de lenguaje natural', 'Bases de datos vectoriales'],
    learningOutcomes: ['Construir un sistema RAG funcional', 'Evaluar la calidad de las respuestas generadas'],
    certification: 'Certificado CESAC AI Academy (65 horas)', startDate: '2025-05-01', endDate: '2025-12-31', places: 25, status: 'PUBLISHED',
    faqs: [{ q: '¿Qué base de datos vectorial se usa?', a: 'Se trabajan Pinecone, Weaviate y pgvector.' }]
  },
  {
    id: 'p24', slug: 'ia-multimodal', code: 'CESAC-AI-009', name: 'IA Multimodal',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Explora la IA que combina texto, imagen, audio y vídeo: GPT-4V, DALL-E, Whisper, Sora y más.',
    description: 'Programa sobre los sistemas de IA multimodales que procesan y generan múltiples tipos de contenido. Desde el análisis de imágenes y documentos hasta la generación de audio y vídeo. Incluye casos de uso profesionales y limitaciones actuales de cada tecnología.',
    objectives: ['Dominar herramientas de IA multimodal', 'Analizar imágenes y documentos con IA', 'Generar contenido multimedia', 'Combinar modalidades en flujos de trabajo'],
    targetAudience: ['Creadores de contenido', 'Profesionales de marketing', 'Diseñadores', 'Desarrolladores'],
    prerequisites: ['Experiencia con IA generativa básica'],
    modality: 'online', duration: '6 semanas', hours: 50, price: 400, iva: 21, priceCompany: 350, pricePublic: 315,
    image: '🎨', category: 'ia-academy',
    program: ['Visión por computador con IA', 'Generación de imágenes', 'IA para audio y voz', 'Vídeo con IA', 'Análisis de documentos', 'Combinación de modalidades', 'Casos de uso profesional', 'Proyecto multimodal'],
    competencies: ['Procesamiento multimodal', 'Creación de contenido', 'Integración de tecnologías'],
    learningOutcomes: ['Crear un flujo de trabajo multimodal', 'Analizar documentos complejos con IA'],
    certification: 'Certificado CESAC AI Academy (50 horas)', startDate: '2025-05-01', endDate: '2025-12-31', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Se trabaja con vídeo?', a: 'Sí, se exploran las herramientas actuales de generación y análisis de vídeo con IA.' }]
  },
  {
    id: 'p25', slug: 'programa-profesional', code: 'CESAC-AI-010', name: 'Programa Profesional CESAC AI',
    unit: 'CESAC AI Academy', unitId: 'ai-academy',
    shortDescription: 'Programa completo de formación profesional en IA: de alfabetización a especialización avanzada en 6 meses.',
    description: 'El programa más completo de CESAC AI Academy. Un itinerario formativo de 6 meses que lleva al participante desde los fundamentos de la IA hasta la especialización en áreas avanzadas como agentes, RAG, automatización y gobernanza. Incluye mentoría individual, proyectos reales y certificación profesional.',
    objectives: ['Alcanzar competencia profesional en IA', 'Especializarse en al menos un área', 'Desarrollar un proyecto real', 'Obtener certificación profesional'],
    targetAudience: ['Profesionales en reconversión', 'Consultores que quieran especializarse', 'Responsables de innovación'],
    prerequisites: ['Formación universitaria o experiencia profesional', 'Compromiso de dedicación'],
    modality: 'hibrido', duration: '6 meses', hours: 300, price: 3500, iva: 21, priceCompany: 3000, pricePublic: 2700,
    image: '🏆', category: 'ia-academy',
    program: ['AI Literacy', 'IA Generativa', 'Prompt Engineering', 'Productividad', 'Automatización', 'Agentes', 'RAG', 'Gobernanza', 'Proyecto final', 'Mentoría'],
    competencies: ['Visión integral de IA', 'Especialización técnica', 'Gestión de proyectos IA'],
    learningOutcomes: ['Implementar soluciones de IA en tu organización', 'Liderar proyectos de transformación con IA'],
    certification: 'Certificación Profesional CESAC AI (300 horas)', startDate: '2025-09-01', endDate: '2026-02-28', places: 20, status: 'PUBLISHED',
    faqs: [{ q: '¿Incluye mentoría?', a: 'Sí, sesiones quincenales de mentoría individual con un experto.' }]
  },
  // GRUPO 4: CESAC AI BUSINESS
  {
    id: 'p26', slug: 'ia-autonomos', code: 'CESAC-BZ-001', name: 'IA para Autónomos',
    unit: 'CESAC AI Business', unitId: 'ai-business',
    shortDescription: 'Programa práctico para que autónomos integren IA en su actividad: facturación, marketing, atención al cliente y más.',
    description: 'Curso diseñado específicamente para profesionales autónomos que quieren aprovechar la IA para optimizar su tiempo y mejorar sus resultados. Cubre automatización de tareas administrativas, marketing digital con IA, gestión de clientes, creación de contenido y análisis de negocio.',
    objectives: ['Automatizar tareas administrativas', 'Mejorar el marketing con IA', 'Gestionar clientes de forma más eficiente', 'Crear contenido profesional con IA'],
    targetAudience: ['Profesionales autónomos', 'Freelancers', 'Consultores independientes'],
    prerequisites: ['Ejercicio como autónomo'],
    modality: 'online', duration: '6 semanas', hours: 40, price: 280, iva: 21, priceCompany: 0, pricePublic: 0,
    image: '🧑‍💻', category: 'ia-business',
    program: ['IA para facturación y admin', 'Marketing con IA', 'Atención al cliente automatizada', 'Creación de contenido', 'Análisis de negocio', 'Herramientas esenciales', 'ROI de la IA', 'Plan de implementación'],
    competencies: ['Automatización', 'Marketing digital', 'Gestión empresarial'],
    learningOutcomes: ['Ahorrar 10+ horas semanales en tareas administrativas', 'Implementar marketing automatizado'],
    certification: 'Certificado CESAC AI Business (40 horas)', startDate: '2025-02-01', endDate: '2025-12-31', places: 40, status: 'PUBLISHED',
    faqs: [{ q: '¿Es bonificable?', a: 'Los autónomos pueden bonificarse a través de FUNDAE.' }]
  },
  {
    id: 'p27', slug: 'ia-pymes', code: 'CESAC-BZ-002', name: 'IA para Pymes',
    unit: 'CESAC AI Business', unitId: 'ai-business',
    shortDescription: 'Transformación digital con IA para pequeñas y medianas empresas: diagnóstico, estrategia e implementación.',
    description: 'Programa completo para pymes que quieren integrar la IA de forma estratégica. Desde el diagnóstico inicial hasta la implementación de soluciones, pasando por la formación del equipo y la gestión del cambio. Incluye casos de éxito de pymes españolas y herramientas accesibles.',
    objectives: ['Diagnosticar oportunidades de IA en la pyme', 'Diseñar una estrategia de IA', 'Implementar soluciones prioritarias', 'Formar al equipo en IA'],
    targetAudience: ['Dirección de pymes', 'Responsables de operaciones', 'Responsables de transformación digital'],
    prerequisites: ['Pyme con al menos 3 empleados'],
    modality: 'hibrido', duration: '8 semanas', hours: 60, price: 1200, iva: 21, priceCompany: 1000, pricePublic: 0,
    image: '🏪', category: 'ia-business',
    program: ['Diagnóstico de madurez', 'Estrategia de IA', 'Casos de éxito', 'Herramientas para pymes', 'Automatización de procesos', 'IA para ventas', 'IA para operaciones', 'Plan de implementación'],
    competencies: ['Estrategia digital', 'Gestión del cambio', 'Automatización'],
    learningOutcomes: ['Tener un plan de IA para tu pyme', 'Implementar al menos 3 automatizaciones'],
    certification: 'Certificado CESAC AI Business (60 horas)', startDate: '2025-03-01', endDate: '2025-12-31', places: 20, status: 'PUBLISHED',
    faqs: [{ q: '¿Se adapta a mi sector?', a: 'Sí, el programa se personaliza según el sector de la pyme.' }]
  },
  {
    id: 'p28', slug: 'automatizacion-admin', code: 'CESAC-BZ-003', name: 'Automatización Administrativa',
    unit: 'CESAC AI Business', unitId: 'ai-business',
    shortDescription: 'Automatiza procesos administrativos: facturación, informes, email, documentación y gestión documental con IA.',
    description: 'Programa práctico enfocado en la automatización de los procesos administrativos mediante IA y herramientas no-code. Facturación automática, generación de informes, gestión de email, procesamiento de documentos y flujos de aprobación. Diseñado para reducir la carga administrativa un 60-80%.',
    objectives: ['Automatizar la facturación y cobros', 'Generar informes automáticamente', 'Gestionar email con IA', 'Procesar documentos de forma automática'],
    targetAudience: ['Departamentos administrativos', 'Oficinas', 'Gestorías'],
    prerequisites: ['Acceso a los procesos administrativos de la organización'],
    modality: 'online', duration: '6 semanas', hours: 45, price: 400, iva: 21, priceCompany: 350, pricePublic: 315,
    image: '📄', category: 'ia-business',
    program: ['Mapeo de procesos', 'Automatización de facturación', 'Informes automáticos', 'Gestión de email', 'Procesamiento documental', 'Flujos de aprobación', 'Integración de sistemas', 'Medición de resultados'],
    competencies: ['Análisis de procesos', 'Automatización', 'Integración de sistemas'],
    learningOutcomes: ['Automatizar el 70% de tareas administrativas repetitivas', 'Implementar un sistema de gestión documental inteligente'],
    certification: 'Certificado CESAC AI Business (45 horas)', startDate: '2025-03-01', endDate: '2025-12-31', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Qué software necesito?', a: 'Se trabaja con herramientas accesibles; se adapta al software existente.' }]
  },
  {
    id: 'p29', slug: 'ia-marketing', code: 'CESAC-BZ-004', name: 'IA para Marketing y Ventas',
    unit: 'CESAC AI Business', unitId: 'ai-business',
    shortDescription: 'Potencia tu marketing y ventas con IA: segmentación, contenido, email marketing, chatbots y analítica predictiva.',
    description: 'Formación especializada en la aplicación de IA al marketing y las ventas. Desde la segmentación avanzada de audiencias hasta la creación de contenido personalizado, email marketing automatizado, chatbots de ventas y analítica predictiva. Incluye herramientas prácticas y casos reales.',
    objectives: ['Segmentar audiencias con IA', 'Crear contenido personalizado a escala', 'Automatizar email marketing', 'Implementar chatbots de ventas'],
    targetAudience: ['Responsables de marketing', 'Equipos comerciales', 'Community managers'],
    prerequisites: ['Experiencia en marketing o ventas'],
    modality: 'online', duration: '6 semanas', hours: 50, price: 380, iva: 21, priceCompany: 330, pricePublic: 300,
    image: '📈', category: 'ia-business',
    program: ['IA en el marketing actual', 'Segmentación avanzada', 'Contenido con IA', 'Email marketing automatizado', 'Chatbots de ventas', 'Analítica predictiva', 'SEO con IA', 'Caso práctico integral'],
    competencies: ['Marketing digital avanzado', 'Analítica de datos', 'Automatización comercial'],
    learningOutcomes: ['Implementar una estrategia de marketing con IA', 'Crear un chatbot de ventas funcional'],
    certification: 'Certificado CESAC AI Business (50 horas)', startDate: '2025-04-01', endDate: '2025-12-31', places: 35, status: 'PUBLISHED',
    faqs: [{ q: '¿Funciona para B2B y B2C?', a: 'Sí, se abordan ambos modelos de negocio.' }]
  },
  {
    id: 'p30', slug: 'ia-atencion-cliente', code: 'CESAC-BZ-005', name: 'IA para Atención al Cliente',
    unit: 'CESAC AI Business', unitId: 'ai-business',
    shortDescription: 'Implementa sistemas de atención al cliente con IA: chatbots, asistentes virtuales, clasificación y enrutamiento.',
    description: 'Programa para diseñar e implementar sistemas de atención al cliente potenciados por IA. Chatbots inteligentes, asistentes virtuales, clasificación automática de consultas, enrutamiento a agentes humanos y análisis de satisfacción. Enfoque en mejorar la experiencia del cliente sin perder el toque humano.',
    objectives: ['Diseñar chatbots inteligentes', 'Clasificar consultas automáticamente', 'Implementar asistencia 24/7', 'Medir la satisfacción del cliente'],
    targetAudience: ['Responsables de atención al cliente', 'Customer success', 'Operaciones'],
    prerequisites: ['Departamento de atención al cliente establecido'],
    modality: 'online', duration: '5 semanas', hours: 40, price: 350, iva: 21, priceCompany: 300, pricePublic: 270,
    image: '💁', category: 'ia-business',
    program: ['IA en atención al cliente', 'Diseño de chatbots', 'Asistentes virtuales', 'Clasificación automática', 'Enrutamiento inteligente', 'Análisis de sentimiento', 'Métricas de satisfacción', 'Implementación práctica'],
    competencies: ['Diseño de experiencias', 'Automatización', 'Análisis de datos'],
    learningOutcomes: ['Implementar un chatbot funcional', 'Reducir tiempos de respuesta un 50%'],
    certification: 'Certificado CESAC AI Business (40 horas)', startDate: '2025-04-01', endDate: '2025-12-31', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Sustituye a los agentes humanos?', a: 'No, complementa y potencia el trabajo de los agentes humanos.' }]
  },
  {
    id: 'p31', slug: 'diagnostico-empresarial', code: 'CESAC-BZ-006', name: 'Diagnóstico Empresarial de IA',
    unit: 'CESAC AI Business', unitId: 'ai-business',
    shortDescription: 'Servicio de diagnóstico personalizado para identificar oportunidades de IA en tu empresa.',
    description: 'Servicio de consultoría que analiza en profundidad tu organización para identificar las mejores oportunidades de aplicación de IA. Incluye entrevistas con el equipo, análisis de procesos, evaluación tecnológica, benchmark sectorial y entrega de un informe con roadmap priorizado de implementación.',
    objectives: ['Identificar oportunidades de IA', 'Priorizar por impacto y viabilidad', 'Evaluar madurez tecnológica', 'Obtener un roadmap claro'],
    targetAudience: ['Dirección general', 'Responsables de innovación', 'CTOs'],
    prerequisites: ['Organización establecida'],
    modality: 'presencial', duration: '3 semanas', hours: 40, price: 3000, iva: 21, priceCompany: 2500, pricePublic: 0,
    image: '🔎', category: 'ia-business',
    program: ['Entrevistas con stakeholders', 'Análisis de procesos', 'Evaluación tecnológica', 'Benchmark sectorial', 'Identificación de oportunidades', 'Priorización', 'Roadmap de implementación', 'Presentación ejecutiva'],
    competencies: ['Análisis estratégico', 'Evaluación tecnológica', 'Planificación'],
    learningOutcomes: ['Roadmap de IA personalizado', 'Informe de oportunidades priorizadas'],
    certification: 'Informe ejecutivo CESAC AI Consulting', startDate: 'Bajo demanda', endDate: '3 semanas', places: 5, status: 'PUBLISHED',
    faqs: [{ q: '¿Cuánto tarda el diagnóstico?', a: 'El proceso completo dura 3 semanas desde el inicio.' }]
  },
  {
    id: 'p32', slug: 'plan-implantacion', code: 'CESAC-BZ-007', name: 'Plan de Implantación de IA',
    unit: 'CESAC AI Business', unitId: 'ai-business',
    shortDescription: 'Acompañamiento completo en la implantación de IA en tu empresa: estrategia, formación, tecnología y seguimiento.',
    description: 'Servicio integral de acompañamiento para la implantación de IA en la organización. Desde la definición de la estrategia hasta la formación del equipo, selección de herramientas, implementación de pilotos, medición de resultados y escalamiento. Programa de 3 meses con consultor dedicado.',
    objectives: ['Definir estrategia de IA', 'Formar al equipo', 'Implementar pilotos', 'Medir resultados y escalar'],
    targetAudience: ['Empresas comprometidas con la transformación IA'],
    prerequisites: ['Diagnóstico previo recomendado'],
    modality: 'hibrido', duration: '3 meses', hours: 120, price: 8000, iva: 21, priceCompany: 7000, pricePublic: 0,
    image: '🚀', category: 'ia-business',
    program: ['Estrategia de IA', 'Selección de herramientas', 'Formación del equipo', 'Piloto 1', 'Piloto 2', 'Medición de resultados', 'Escalamiento', 'Plan de continuidad'],
    competencies: ['Gestión de proyectos', 'Transformación digital', 'Liderazgo'],
    learningOutcomes: ['IA implantada en al menos 2 procesos', 'Equipo formado y autónomo'],
    certification: 'Sello CESAC AI Implemented', startDate: 'Bajo demanda', endDate: '3 meses', places: 3, status: 'PUBLISHED',
    faqs: [{ q: '¿Incluye soporte post-implantación?', a: 'Sí, incluye 1 mes de soporte tras la finalización.' }]
  },
  // GRUPO 5: CESAC AI PUBLIC SECTOR
  {
    id: 'p33', slug: 'ia-empleados-publicos', code: 'CESAC-PS-001', name: 'AI Literacy para Empleados Públicos',
    unit: 'CESAC AI Public Sector', unitId: 'ai-public',
    shortDescription: 'Alfabetización en IA diseñada específicamente para empleados de Administraciones Públicas.',
    description: 'Programa de alfabetización en inteligencia artificial adaptado al contexto de la Administración Pública. Cubre los fundamentos de la IA, aplicaciones en servicios públicos, marco regulatorio (EU AI Act), ética en el sector público, protección de datos y casos de uso en diferentes áreas administrativas.',
    objectives: ['Comprender la IA en el contexto público', 'Identificar aplicaciones en tu área', 'Conocer el marco regulatorio', 'Aplicar principios éticos'],
    targetAudience: ['Empleados públicos de cualquier administración', 'Directivos públicos'],
    prerequisites: ['Condición de empleado público'],
    modality: 'online', duration: '5 semanas', hours: 40, price: 0, iva: 0, priceCompany: 0, pricePublic: 200,
    image: '🏛️', category: 'public-sector',
    program: ['IA para el sector público', 'Aplicaciones en administración', 'EU AI Act para administraciones', 'Ética y valores públicos', 'Protección de datos', 'Casos de uso', 'Herramientas disponibles', 'Proyecto aplicado'],
    competencies: ['Alfabetización en IA', 'Pensamiento crítico', 'Servicio público innovador'],
    learningOutcomes: ['Aplicar IA en al menos un procedimiento de tu área', 'Evaluar riesgos éticos de sistemas de IA'],
    certification: 'Certificado CESAC AI Public Sector (40 horas)', startDate: '2025-03-01', endDate: '2025-12-31', places: 50, status: 'PUBLISHED',
    faqs: [{ q: '¿Es reconocido por la administración?', a: 'El certificado es emitido por CESAC AI y es válido como formación continua.' }]
  },
  {
    id: 'p34', slug: 'ia-procedimientos', code: 'CESAC-PS-002', name: 'IA Generativa Aplicada a Procedimientos Administrativos',
    unit: 'CESAC AI Public Sector', unitId: 'ai-public',
    shortDescription: 'Aplica IA generativa a la tramitación de procedimientos: redacción, análisis normativo y asistencia al ciudadano.',
    description: 'Curso práctico sobre la aplicación de IA generativa en los procedimientos administrativos. Redacción de resoluciones, análisis de normativa, asistencia en la tramitación, generación de informes y atención al ciudadano. Siempre con supervisión humana y respeto a la normativa de procedimiento administrativo.',
    objectives: ['Redactar documentos administrativos con IA', 'Analizar normativa de forma asistida', 'Mejorar la atención al ciudadano', 'Mantener supervisión humana efectiva'],
    targetAudience: ['Funcionarios de tramitación', 'Técnicos administrativos', 'Responsables de procedimiento'],
    prerequisites: ['Conocimiento del procedimiento administrativo'],
    modality: 'online', duration: '6 semanas', hours: 50, price: 0, iva: 0, priceCompany: 0, pricePublic: 280,
    image: '📋', category: 'public-sector',
    program: ['IA en procedimientos', 'Redacción asistida', 'Análisis normativo', 'Informes con IA', 'Atención al ciudadano', 'Supervisión humana', 'Limitaciones y riesgos', 'Casos prácticos'],
    competencies: ['Redacción administrativa', 'Análisis normativo', 'Atención ciudadana'],
    learningOutcomes: ['Redactar documentos con apoyo de IA', 'Analizar expedientes de forma asistida'],
    certification: 'Certificado CESAC AI Public Sector (50 horas)', startDate: '2025-04-01', endDate: '2025-12-31', places: 40, status: 'PUBLISHED',
    faqs: [{ q: '¿La IA puede firmar documentos?', a: 'No, la IA asiste pero la responsabilidad y firma siempre son humanas.' }]
  },
  {
    id: 'p35', slug: 'ia-contratacion', code: 'CESAC-PS-003', name: 'IA Aplicada a Contratación Pública',
    unit: 'CESAC AI Public Sector', unitId: 'ai-public',
    shortDescription: 'Optimiza los procesos de contratación pública con IA: pliegos, evaluación de ofertas y seguimiento.',
    description: 'Formación especializada en el uso de IA para mejorar los procesos de contratación pública. Desde la elaboración de pliegos hasta la evaluación de ofertas, pasando por el análisis de requisitos y el seguimiento contractual. Con especial atención a las garantías del procedimiento y la normativa vigente.',
    objectives: ['Elaborar pliegos con apoyo de IA', 'Analizar ofertas de forma asistida', 'Verificar requisitos automáticamente', 'Hacer seguimiento contractual con IA'],
    targetAudience: ['Responsables de contratación', 'Mesas de contratación', 'Servicios jurídicos'],
    prerequisites: ['Conocimiento de la LCSP'],
    modality: 'online', duration: '6 semanas', hours: 50, price: 0, iva: 0, priceCompany: 0, pricePublic: 300,
    image: '📑', category: 'public-sector',
    program: ['IA en contratación pública', 'Elaboración de pliegos', 'Análisis de ofertas', 'Verificación de requisitos', 'Seguimiento contractual', 'Informes de evaluación', 'Garantías procedimentales', 'Casos prácticos'],
    competencies: ['Contratación pública', 'Análisis documental', 'Evaluación de ofertas'],
    learningOutcomes: ['Elaborar pliegos con apoyo de IA', 'Evaluar ofertas de forma más eficiente'],
    certification: 'Certificado CESAC AI Public Sector (50 horas)', startDate: '2025-04-01', endDate: '2025-12-31', places: 30, status: 'PUBLISHED',
    faqs: [{ q: '¿Es compatible con las plataformas de contratación?', a: 'Sí, se trabaja respetando los procedimientos de las plataformas oficiales.' }]
  },
  {
    id: 'p36', slug: 'ia-documental', code: 'CESAC-PS-004', name: 'IA Aplicada a Gestión Documental',
    unit: 'CESAC AI Public Sector', unitId: 'ai-public',
    shortDescription: 'Moderniza la gestión documental con IA: clasificación, extracción, búsqueda inteligente y archivo.',
    description: 'Programa sobre la aplicación de IA a la gestión documental en las administraciones públicas. Clasificación automática, extracción de datos, búsqueda semántica, resumen de documentos, control de versiones y archivo inteligente. Compatible con los sistemas de gestión electrónica existentes.',
    objectives: ['Clasificar documentos automáticamente', 'Extraer datos de documentos', 'Implementar búsqueda semántica', 'Modernizar el archivo'],
    targetAudience: ['Responsables de gestión documental', 'Archiveros', 'Técnicos de administración electrónica'],
    prerequisites: ['Conocimiento de gestión documental'],
    modality: 'online', duration: '5 semanas', hours: 40, price: 0, iva: 0, priceCompany: 0, pricePublic: 250,
    image: '🗂️', category: 'public-sector',
    program: ['IA en gestión documental', 'Clasificación automática', 'Extracción de datos', 'Búsqueda semántica', 'Resumen de documentos', 'Control de versiones', 'Archivo inteligente', 'Integración con EGOB'],
    competencies: ['Gestión documental avanzada', 'Procesamiento de lenguaje natural', 'Organización de información'],
    learningOutcomes: ['Implementar clasificación automática', 'Reducir tiempos de búsqueda documental'],
    certification: 'Certificado CESAC AI Public Sector (40 horas)', startDate: '2025-05-01', endDate: '2025-12-31', places: 35, status: 'PUBLISHED',
    faqs: [{ q: '¿Es compatible con mi sistema de archivo?', a: 'Se estudia la integración con el sistema existente de cada administración.' }]
  },
  {
    id: 'p37', slug: 'ia-informes', code: 'CESAC-PS-005', name: 'IA Aplicada a Elaboración de Informes',
    unit: 'CESAC AI Public Sector', unitId: 'ai-public',
    shortDescription: 'Elabora informes técnicos, memorias y dictámenes con apoyo de IA manteniendo el rigor administrativo.',
    description: 'Curso práctico para utilizar IA en la elaboración de informes técnicos, memorias justificativas, dictámenes y documentos administrativos. Se enseña a estructurar, redactar y verificar informes con apoyo de IA, manteniendo siempre la responsabilidad del funcionario y el rigor del contenido.',
    objectives: ['Estructurar informes con IA', 'Redactar con mayor eficiencia', 'Verificar datos y fuentes', 'Mantener el rigor administrativo'],
    targetAudience: ['Técnicos de administración', 'Responsables de informes', 'Funcionarios'],
    prerequisites: ['Experiencia en redacción de informes'],
    modality: 'online', duration: '4 semanas', hours: 30, price: 0, iva: 0, priceCompany: 0, pricePublic: 200,
    image: '📝', category: 'public-sector',
    program: ['Estructura de informes', 'Redacción asistida', 'Verificación de datos', 'Fuentes y citas', 'Memorias justificativas', 'Dictámenes', 'Control de calidad', 'Ética en la redacción'],
    competencies: ['Redacción técnica', 'Verificación', 'Análisis'],
    learningOutcomes: ['Reducir un 50% el tiempo de elaboración de informes', 'Mejorar la calidad y verificación'],
    certification: 'Certificado CESAC AI Public Sector (30 horas)', startDate: '2025-05-01', endDate: '2025-12-31', places: 40, status: 'PUBLISHED',
    faqs: [{ q: '¿Quién es responsable del contenido?', a: 'Siempre el funcionario que firma; la IA es una herramienta de apoyo.' }]
  },
  {
    id: 'p38', slug: 'ia-proyectos-publicos', code: 'CESAC-PS-006', name: 'IA para Innovación y Diseño de Proyectos Públicos',
    unit: 'CESAC AI Public Sector', unitId: 'ai-public',
    shortDescription: 'Diseña proyectos públicos innovadores utilizando IA: desde la detección de necesidades hasta la evaluación.',
    description: 'Programa sobre el uso de IA en el ciclo completo de proyectos públicos: detección de necesidades, diseño de soluciones, planificación, implementación y evaluación. Incluye metodologías de innovación pública, design thinking asistido por IA y herramientas de análisis de impacto.',
    objectives: ['Detectar necesidades con análisis de datos', 'Diseñar soluciones innovadoras', 'Planificar proyectos con IA', 'Evaluar impacto de forma asistida'],
    targetAudience: ['Responsables de proyectos públicos', 'Técnicos de innovación', 'Directivos públicos'],
    prerequisites: ['Experiencia en gestión de proyectos'],
    modality: 'hibrido', duration: '8 semanas', hours: 60, price: 0, iva: 0, priceCompany: 0, pricePublic: 350,
    image: '💡', category: 'public-sector',
    program: ['Innovación pública con IA', 'Detección de necesidades', 'Design thinking asistido', 'Planificación de proyectos', 'Análisis de impacto', 'Fondos europeos e IA', 'Gobernanza de proyectos', 'Proyecto final'],
    competencies: ['Innovación pública', 'Diseño de proyectos', 'Evaluación de impacto'],
    learningOutcomes: ['Diseñar un proyecto público innovador con IA', 'Presentar una propuesta con análisis de impacto'],
    certification: 'Certificado CESAC AI Public Sector (60 horas)', startDate: '2025-06-01', endDate: '2025-12-31', places: 25, status: 'PUBLISHED',
    faqs: [{ q: '¿Incluye fondos europeos?', a: 'Sí, se aborda la conexión entre IA y fondos Next Generation.' }]
  },
  // GRUPO 6: CESAC AI GOVERNANCE
  {
    id: 'p39', slug: 'eu-ai-act', code: 'CESAC-GV-001', name: 'EU AI Act para Organizaciones',
    unit: 'CESAC AI Governance', unitId: 'ai-governance',
    shortDescription: 'Programa completo de cumplimiento del Reglamento Europeo de IA: clasificación, riesgos, documentación y auditoría.',
    description: 'Programa integral para que las organizaciones comprendan y cumplan con el EU AI Act. Cubre la clasificación de sistemas de IA, evaluación de riesgos, requisitos de transparencia, documentación técnica, supervisión humana, gestión de proveedores y preparación para auditorías. Incluye talleres prácticos y plantillas de cumplimiento.',
    objectives: ['Clasificar los sistemas de IA de la organización', 'Evaluar y mitigar riesgos', 'Documentar el cumplimiento', 'Preparar auditorías'],
    targetAudience: ['Responsables de compliance', 'DPOs', 'CTOs y CIOs', 'Responsables de IA'],
    prerequisites: ['La organización utiliza o planea utilizar sistemas de IA'],
    modality: 'hibrido', duration: '10 semanas', hours: 80, price: 1500, iva: 21, priceCompany: 1300, pricePublic: 1200,
    image: '⚖️', category: 'governance',
    program: ['Introducción al EU AI Act', 'Clasificación de sistemas', 'Evaluación de riesgos', 'Requisitos de transparencia', 'Documentación técnica', 'Supervisión humana', 'Gestión de proveedores', 'Preparación de auditorías'],
    competencies: ['Cumplimiento normativo', 'Gestión de riesgos', 'Gobernanza de IA'],
    learningOutcomes: ['Completar un inventario de sistemas IA', 'Elaborar documentación de cumplimiento'],
    certification: 'Certificado CESAC AI Governance (80 horas)', startDate: '2025-03-01', endDate: '2025-12-31', places: 25, status: 'PUBLISHED',
    faqs: [{ q: '¿Cuándo entra en vigor el AI Act?', a: 'El reglamento se aplica de forma gradual desde 2025. Es momento de prepararse.' }]
  },
  {
    id: 'p40', slug: 'ai-literacy-evidencia', code: 'CESAC-GV-002', name: 'Programa de AI Literacy y Evidencia de Cumplimiento',
    unit: 'CESAC AI Governance', unitId: 'ai-governance',
    shortDescription: 'Programa organizacional de AI Literacy que genera evidencias documentales de cumplimiento para auditorías.',
    description: 'Programa diseñado para que las organizaciones demuestren el cumplimiento de los requisitos de AI Literacy del EU AI Act. Incluye diagnóstico de competencias, formación segmentada por perfiles, evaluación, certificación individual y generación de un expediente de evidencias descargable y auditable.',
    objectives: ['Diagnosticar competencias en IA', 'Formar a toda la organización', 'Generar evidencias de cumplimiento', 'Preparar expedientes auditables'],
    targetAudience: ['Organizaciones sujetas al EU AI Act', 'Responsables de cumplimiento', 'RRHH'],
    prerequisites: ['Organización en proceso de cumplimiento'],
    modality: 'online', duration: '12 semanas', hours: 100, price: 2000, iva: 21, priceCompany: 1800, pricePublic: 1600,
    image: '📊', category: 'governance',
    program: ['Diagnóstico de competencias', 'Formación por perfiles', 'Evaluación continua', 'Certificación individual', 'Expediente de evidencias', 'Reporting para auditoría', 'Plan de mejora continua', 'Revisión periódica'],
    competencies: ['AI Literacy organizacional', 'Gestión de evidencias', 'Cumplimiento demostrable'],
    learningOutcomes: ['Organización con AI Literacy certificado', 'Expediente de evidencias completo'],
    certification: 'Certificado Organizacional CESAC AI Governance', startDate: '2025-04-01', endDate: '2025-12-31', places: 15, status: 'PUBLISHED',
    faqs: [{ q: '¿Es válido como evidencia ante auditorías?', a: 'Sí, el expediente está diseñado para ser presentado ante auditores.' }]
  }
];

export const cpvCodes = [
  { code: '80000000', description: 'Servicios de formación y simulación' },
  { code: '80500000', description: 'Servicios de formación' },
  { code: '80510000', description: 'Servicios de formación especializada' },
  { code: '80521000', description: 'Servicios de formación en informática' },
  { code: '80522000', description: 'Servicios de formación en tecnología' },
  { code: '80530000', description: 'Servicios de formación profesional' },
  { code: '80570000', description: 'Servicios de desarrollo de formación' },
  { code: '80590000', description: 'Servicios de formación a distancia' },
  { code: '72000000', description: 'Servicios de TI' },
  { code: '72220000', description: 'Servicios de desarrollo de sistemas' },
  { code: '72221000', description: 'Servicios de análisis de sistemas' },
  { code: '72240000', description: 'Servicios de diseño de sistemas' },
  { code: '72260000', description: 'Servicios de soporte de software' }
];

export const subscriptionPlans = [
  { id: 'individual', name: 'CESAC AI Individual', price: 29, period: 'mes', features: ['Acceso a cursos de AI Literacy', 'Tutor IA básico', 'Comunidad', 'Certificados básicos'] },
  { id: 'pro', name: 'CESAC AI Pro', price: 79, period: 'mes', features: ['Todos los cursos AI Academy', 'Tutor IA avanzado', 'RAG personalizado', 'Certificados profesionales', 'Soporte prioritario'] },
  { id: 'business', name: 'CESAC AI Business', price: 299, period: 'mes', features: ['Hasta 25 usuarios', 'Todos los cursos', 'Portal empresarial', 'CRM integrado', 'Analítica avanzada', 'Account manager'] },
  { id: 'governance', name: 'CESAC AI Governance', price: 499, period: 'mes', features: ['Todo lo de Business', 'Módulo Governance', 'Inventario IA', 'Evaluación de riesgos', 'Evidencias de cumplimiento', 'Consultoría incluida'] }
];

export const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Formación', path: '/formacion' },
  { label: 'Empresas', path: '/empresas' },
  { label: 'Administraciones', path: '/administraciones' },
  { label: 'AI Governance', path: '/governance' },
  { label: 'Franquicias', path: '/franquicias' },
  { label: 'Producción', path: '/produccion' },
  { label: 'Premium', path: '/premium' },
  { label: 'Oposiciones', path: '/oposiciones' },
  { label: 'Educación', path: '/educacion' },
  { label: 'Inteligencia Artificial', path: '/ia' },
  { label: 'AI Lab', path: '/lab' },
  { label: 'Campus', path: '/campus' },
  { label: 'Consultoría', path: '/consultoria' },
  { label: 'Contratación Pública', path: '/procurement' },
  { label: 'Sobre CESAC', path: '/sobre' },
  { label: 'Contacto', path: '/contacto' }
];
