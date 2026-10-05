import type { CourseContent } from '../content-types';

// CESAC EDUCACIÓN - Contenido completo de los 7 programas

export const educacionContent: CourseContent[] = [
  {
    productId: 'p09',
    productSlug: 'apoyo-academico',
    productName: 'Apoyo Académico',
    introduction: 'Servicio de apoyo académico personalizado para estudiantes de primaria, ESO y bachillerato. Combinamos sesiones individuales y grupos reducidos con seguimiento continuo.',
    methodology: 'Diagnóstico inicial personalizado, plan de trabajo adaptado, sesiones individuales y grupales, comunicación constante con familias.',
    evaluationSystem: 'Evaluación continua con informes trimestrales de progreso y reuniones con familias.',
    certification: 'Informe de progreso trimestral.',
    modules: [
      {
        id: 'm01',
        title: 'Diagnóstico Inicial',
        description: 'Evaluación del nivel académico, hábitos de estudio y necesidades específicas del estudiante.',
        duration: '2 semanas',
        lessons: [
          {
            id: 'l01',
            title: 'Evaluación de competencias',
            description: 'Tests de nivel en matemáticas, lengua, ciencias e inglés.',
            duration: '4 horas',
            type: 'evaluation',
            resources: [
              { id: 'r01', type: 'exercise', title: 'Tests de nivel', downloadable: false }
            ],
            objectives: ['Identificar nivel real', 'Detectar lagunas', 'Establecer objetivos'],
            keyPoints: ['Evaluación inicial', 'Análisis de resultados', 'Plan personalizado']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Matemáticas',
        description: 'Refuerzo en cálculo, álgebra, geometría y resolución de problemas.',
        duration: '40 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Cálculo y aritmética',
            description: 'Operaciones básicas, fracciones, decimales, porcentajes.',
            duration: '15 horas',
            type: 'practice',
            resources: [
              { id: 'r02', type: 'exercise', title: 'Ejercicios de cálculo', downloadable: true },
              { id: 'r03', type: 'video', title: 'Técnicas de cálculo mental', duration: '45 min', downloadable: false }
            ],
            objectives: ['Dominar operaciones básicas', 'Resolver problemas', 'Aplicar a situaciones reales'],
            keyPoints: ['Operaciones con fracciones', 'Porcentajes', 'Resolución de problemas']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Lengua y Literatura',
        description: 'Comprensión lectora, expresión escrita, gramática y ortografía.',
        duration: '40 horas',
        lessons: [
          {
            id: 'l03',
            title: 'Comprensión lectora',
            description: 'Técnicas de lectura comprensiva, identificación de ideas principales, resumen.',
            duration: '12 horas',
            type: 'practice',
            resources: [
              { id: 'r04', type: 'article', title: 'Textos para comprensión', downloadable: true }
            ],
            objectives: ['Mejorar velocidad lectora', 'Identificar ideas clave', 'Realizar resúmenes'],
            keyPoints: ['Lectura activa', 'Subrayado', 'Esquemas']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Material de refuerzo personalizado', downloadable: true }
    ],
    bibliography: ['Libros de texto del curso del estudiante', 'Material complementario CESAC']
  },
  {
    productId: 'p10',
    productSlug: 'tecnicas-estudio',
    productName: 'Técnicas de Estudio',
    introduction: 'Curso práctico para dominar las técnicas de estudio más eficaces: mapas mentales, resúmenes, repetición espaciada y gestión del tiempo.',
    methodology: 'Aprendizaje activo con práctica inmediata, ejercicios reales y aplicación a materias del estudiante.',
    evaluationSystem: 'Proyecto final: elaboración de plan de estudio personalizado.',
    certification: 'Certificado CESAC Educación.',
    modules: [
      {
        id: 'm01',
        title: 'Lectura Comprensiva',
        description: 'Técnicas de lectura activa, velocidad lectora, comprensión profunda.',
        duration: '6 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Lectura activa y comprensiva',
            description: 'Cómo leer para entender y recordar. Técnicas de subrayado y anotación.',
            duration: '3 horas',
            type: 'workshop',
            resources: [
              { id: 'r01', type: 'video', title: 'Lectura activa', duration: '60 min', downloadable: false },
              { id: 'r02', type: 'exercise', title: 'Práctica con textos reales', downloadable: true }
            ],
            objectives: ['Mejorar comprensión', 'Aumentar velocidad', 'Retener información'],
            keyPoints: ['Lectura activa vs pasiva', 'Subrayado selectivo', 'Anotaciones marginales']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Mapas Mentales y Esquemas',
        description: 'Organización visual de la información, mapas mentales, diagramas.',
        duration: '8 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Creación de mapas mentales',
            description: 'Técnica de Tony Buzan, herramientas digitales y analógicas.',
            duration: '4 horas',
            type: 'workshop',
            resources: [
              { id: 'r03', type: 'video', title: 'Mapas mentales paso a paso', duration: '90 min', downloadable: false },
              { id: 'r04', type: 'presentation', title: 'Ejemplos de mapas mentales', downloadable: true }
            ],
            objectives: ['Crear mapas mentales eficaces', 'Organizar información visualmente', 'Mejorar memorización'],
            keyPoints: ['Idea central', 'Ramas principales', 'Colores e imágenes']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Repetición Espaciada',
        description: 'Sistema de repetición para memorización a largo plazo, curvas del olvido.',
        duration: '6 horas',
        lessons: [
          {
            id: 'l03',
            title: 'Curva del olvido y repetición',
            description: 'Teoría de Ebbinghaus, intervalos óptimos de repaso, herramientas.',
            duration: '3 horas',
            type: 'theory',
            resources: [
              { id: 'r05', type: 'video', title: 'Repetición espaciada', duration: '60 min', downloadable: false }
            ],
            objectives: ['Entender la curva del olvido', 'Aplicar intervalos de repaso', 'Usar herramientas digitales'],
            keyPoints: ['Curva de Ebbinghaus', 'Intervalos óptimos', 'Anki y similares']
          }
        ]
      },
      {
        id: 'm04',
        title: 'Gestión del Tiempo',
        description: 'Planificación del estudio, técnicas Pomodoro, priorización, eliminación de distracciones.',
        duration: '6 horas',
        lessons: [
          {
            id: 'l04',
            title: 'Planificación y organización',
            description: 'Cómo crear un plan de estudio realista y mantenerlo.',
            duration: '3 horas',
            type: 'workshop',
            resources: [
              { id: 'r06', type: 'exercise', title: 'Plantilla de planificación', downloadable: true }
            ],
            objectives: ['Crear plan de estudio', 'Priorizar tareas', 'Mantener constancia'],
            keyPoints: ['Técnica Pomodoro', 'Matriz de Eisenhower', 'Objetivos SMART']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Plantillas de planificación', downloadable: true },
      { id: 'ar02', type: 'download', title: 'Guía de técnicas de estudio', downloadable: true }
    ],
    bibliography: ['Mapas Mentales - Tony Buzan', 'Cómo estudiar - Ramón Cladellas']
  },
  {
    productId: 'p11',
    productSlug: 'ia-docentes',
    productName: 'IA para Docentes',
    introduction: 'Formación práctica para integrar IA en la labor docente: planificación, creación de materiales, evaluación y atención a la diversidad.',
    methodology: 'Aprendizaje basado en proyectos reales del aula, con herramientas de IA aplicadas a casos prácticos.',
    evaluationSystem: 'Proyecto final: diseño de unidad didáctica con apoyo de IA.',
    certification: 'Certificado CESAC Educación (60 horas). Bonificable por FUNDAE.',
    modules: [
      {
        id: 'm01',
        title: 'Fundamentos de IA para Educación',
        description: 'Qué es la IA, tipos de sistemas, aplicaciones educativas, limitaciones y ética.',
        duration: '10 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Introducción a la IA en educación',
            description: 'Conceptos básicos, ChatGPT, Claude, Gemini. Aplicaciones en el aula.',
            duration: '5 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'IA en educación: panorama actual', duration: '90 min', downloadable: false },
              { id: 'r02', type: 'pdf', title: 'Guía de herramientas IA educativas', pages: 25, downloadable: true }
            ],
            objectives: ['Comprender qué es la IA', 'Identificar herramientas útiles', 'Conocer limitaciones'],
            keyPoints: ['IA generativa vs analítica', 'Chatbots educativos', 'Limitaciones y sesgos']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Planificación Didáctica con IA',
        description: 'Uso de IA para diseñar unidades didácticas, programaciones y situaciones de aprendizaje.',
        duration: '15 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Diseño de unidades con IA',
            description: 'Prompts para generar unidades didácticas alineadas con LOMLOE.',
            duration: '8 horas',
            type: 'workshop',
            resources: [
              { id: 'r03', type: 'video', title: 'Diseño de unidades con IA', duration: '120 min', downloadable: false },
              { id: 'r04', type: 'exercise', title: 'Plantillas de prompts', downloadable: true }
            ],
            objectives: ['Diseñar unidades con IA', 'Alinear con LOMLOE', 'Crear situaciones de aprendizaje'],
            keyPoints: ['Prompts efectivos', 'Adaptación curricular', 'Competencias clave']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Creación de Materiales con IA',
        description: 'Generación de recursos didácticos: textos, imágenes, presentaciones, vídeos.',
        duration: '15 horas',
        lessons: [
          {
            id: 'l03',
            title: 'Generación de contenido',
            description: 'Creación de textos, ejercicios, presentaciones y recursos multimedia.',
            duration: '8 horas',
            type: 'workshop',
            resources: [
              { id: 'r05', type: 'video', title: 'Creación de materiales', duration: '100 min', downloadable: false }
            ],
            objectives: ['Crear materiales con IA', 'Adaptar a diferentes niveles', 'Generar recursos multimedia'],
            keyPoints: ['Textos adaptados', 'Imágenes generadas', 'Presentaciones automáticas']
          }
        ]
      },
      {
        id: 'm04',
        title: 'Evaluación Formativa con IA',
        description: 'Diseño de rúbricas, feedback automatizado, evaluación por competencias.',
        duration: '12 horas',
        lessons: [
          {
            id: 'l04',
            title: 'Rúbricas y feedback con IA',
            description: 'Creación de rúbricas detalladas y sistemas de feedback personalizado.',
            duration: '6 horas',
            type: 'workshop',
            resources: [
              { id: 'r06', type: 'exercise', title: 'Diseño de rúbricas', downloadable: true }
            ],
            objectives: ['Diseñar rúbricas con IA', 'Generar feedback personalizado', 'Evaluar por competencias'],
            keyPoints: ['Rúbricas analíticas', 'Feedback constructivo', 'Evaluación formativa']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Biblioteca de prompts educativos', downloadable: true },
      { id: 'ar02', type: 'download', title: 'Guía ética de IA en educación', downloadable: true }
    ],
    bibliography: ['LOMLOE', 'EU AI Act', 'Guía UNESCO de IA en educación']
  },
  {
    productId: 'p12',
    productSlug: 'ia-equipos-directivos',
    productName: 'IA para Equipos Directivos',
    introduction: 'Programa estratégico para equipos directivos sobre liderazgo de la transformación digital con IA en centros educativos.',
    methodology: 'Sesiones estratégicas, análisis de casos de éxito, diseño de plan de centro.',
    evaluationSystem: 'Proyecto final: plan estratégico de adopción de IA para el centro.',
    certification: 'Certificado CESAC Educación (80 horas).',
    modules: [
      {
        id: 'm01',
        title: 'IA en el Contexto Educativo',
        description: 'Panorama actual, oportunidades, riesgos y marco normativo.',
        duration: '15 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Transformación digital con IA',
            description: 'Estado actual, tendencias, impacto en la educación.',
            duration: '8 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'IA en educación: visión estratégica', duration: '120 min', downloadable: false }
            ],
            objectives: ['Comprender el impacto de IA', 'Identificar oportunidades', 'Anticipar riesgos'],
            keyPoints: ['Tendencias globales', 'Casos de éxito', 'Marco ético']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Plan Estratégico de Centro',
        description: 'Diseño de plan de adopción de IA: diagnóstico, objetivos, implementación, evaluación.',
        duration: '25 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Diseño del plan',
            description: 'Metodología para crear un plan estratégico de adopción de IA.',
            duration: '12 horas',
            type: 'workshop',
            resources: [
              { id: 'r02', type: 'exercise', title: 'Plantilla de plan estratégico', downloadable: true }
            ],
            objectives: ['Diseñar plan estratégico', 'Establecer objetivos medibles', 'Planificar implementación'],
            keyPoints: ['Diagnóstico inicial', 'Objetivos SMART', 'Cronograma']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Gestión del Cambio',
        description: 'Liderazgo de la transformación, formación del profesorado, comunicación con la comunidad.',
        duration: '20 horas',
        lessons: [
          {
            id: 'l03',
            title: 'Liderazgo del cambio',
            description: 'Estrategias para liderar la transformación digital en el centro.',
            duration: '10 horas',
            type: 'workshop',
            resources: [
              { id: 'r03', type: 'video', title: 'Liderazgo del cambio', duration: '90 min', downloadable: false }
            ],
            objectives: ['Liderar el cambio', 'Gestionar resistencias', 'Comunicar efectivamente'],
            keyPoints: ['Modelo de Kotter', 'Comunicación del cambio', 'Formación continua']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Guía de liderazgo digital', downloadable: true }
    ],
    bibliography: ['Marco Europeo de Competencia Digital Docente', 'LOMLOE']
  },
  {
    productId: 'p13',
    productSlug: 'ia-programacion-didactica',
    productName: 'IA Aplicada a Programación Didáctica',
    introduction: 'Taller práctico para diseñar programaciones didácticas completas con apoyo de IA, alineadas con LOMLOE.',
    methodology: 'Taller intensivo con práctica inmediata, diseño real de programaciones.',
    evaluationSystem: 'Entrega de programación didáctica completa diseñada con IA.',
    certification: 'Certificado CESAC Educación (30 horas).',
    modules: [
      {
        id: 'm01',
        title: 'LOMLOE y Competencias Clave',
        description: 'Marco curricular actual, competencias específicas, situaciones de aprendizaje.',
        duration: '8 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Marco LOMLOE',
            description: 'Perfil de salida, competencias clave, competencias específicas.',
            duration: '4 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'pdf', title: 'Guía LOMLOE', pages: 30, downloadable: true }
            ],
            objectives: ['Dominar el marco LOMLOE', 'Identificar competencias', 'Diseñar situaciones de aprendizaje'],
            keyPoints: ['Perfil de salida', 'Competencias clave', 'Situaciones de aprendizaje']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Diseño con IA',
        description: 'Uso de IA para generar programaciones completas, adaptadas y creativas.',
        duration: '15 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Generación de programaciones',
            description: 'Prompts avanzados para crear programaciones didácticas completas.',
            duration: '8 horas',
            type: 'workshop',
            resources: [
              { id: 'r02', type: 'exercise', title: 'Práctica con prompts', downloadable: true }
            ],
            objectives: ['Crear programaciones con IA', 'Adaptar a diferentes contextos', 'Validar calidad'],
            keyPoints: ['Prompts estructurados', 'Validación humana', 'Adaptación curricular']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Situaciones de Aprendizaje',
        description: 'Diseño de situaciones de aprendizaje innovadoras y competenciales.',
        duration: '7 horas',
        lessons: [
          {
            id: 'l03',
            title: 'Diseño de SdA',
            description: 'Creación de situaciones de aprendizaje con apoyo de IA.',
            duration: '4 horas',
            type: 'workshop',
            resources: [
              { id: 'r03', type: 'exercise', title: 'Diseño de SdA', downloadable: true }
            ],
            objectives: ['Diseñar SdA competenciales', 'Integrar tecnologías', 'Evaluar por competencias'],
            keyPoints: ['Producto final', 'Reto', 'Competencias movilizadas']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Biblioteca de programaciones', downloadable: true }
    ],
    bibliography: ['LOMLOE', 'Decretos de currículo autonómicos']
  },
  {
    productId: 'p14',
    productSlug: 'ia-evaluacion',
    productName: 'IA Aplicada a Evaluación',
    introduction: 'Curso especializado en diseño de instrumentos de evaluación formativa y sumativa con IA.',
    methodology: 'Práctica intensiva con diseño real de instrumentos de evaluación.',
    evaluationSystem: 'Proyecto: sistema de evaluación completo para una unidad didáctica.',
    certification: 'Certificado CESAC Educación (40 horas).',
    modules: [
      {
        id: 'm01',
        title: 'Evaluación por Competencias',
        description: 'Marco conceptual, tipos de evaluación, instrumentos competenciales.',
        duration: '10 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Evaluación competencial',
            description: 'Cómo evaluar competencias clave y específicas.',
            duration: '5 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'Evaluación por competencias', duration: '90 min', downloadable: false }
            ],
            objectives: ['Diferenciar tipos de evaluación', 'Diseñar instrumentos competenciales', 'Aplicar rúbricas'],
            keyPoints: ['Evaluación formativa', 'Evaluación sumativa', 'Rúbricas analíticas']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Rúbricas con IA',
        description: 'Creación de rúbricas detalladas y objetivas con apoyo de IA.',
        duration: '12 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Diseño de rúbricas',
            description: 'Generación de rúbricas completas con IA.',
            duration: '6 horas',
            type: 'workshop',
            resources: [
              { id: 'r02', type: 'exercise', title: 'Creación de rúbricas', downloadable: true }
            ],
            objectives: ['Crear rúbricas con IA', 'Definir criterios claros', 'Establecer niveles'],
            keyPoints: ['Criterios de evaluación', 'Niveles de logro', 'Descriptores']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Feedback Automatizado',
        description: 'Sistemas de feedback personalizado con IA.',
        duration: '10 horas',
        lessons: [
          {
            id: 'l03',
            title: 'Feedback con IA',
            description: 'Generación de feedback constructivo y personalizado.',
            duration: '5 horas',
            type: 'workshop',
            resources: [
              { id: 'r03', type: 'exercise', title: 'Sistemas de feedback', downloadable: true }
            ],
            objectives: ['Generar feedback con IA', 'Personalizar comentarios', 'Mantener calidad'],
            keyPoints: ['Feedback constructivo', 'Personalización', 'Validación docente']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Plantillas de rúbricas', downloadable: true }
    ],
    bibliography: ['Evaluación educativa - Santos Guerra', 'LOMLOE']
  },
  {
    productId: 'p15',
    productSlug: 'plan-adopcion-ia',
    productName: 'Plan de Adopción Responsable de IA para Centros Educativos',
    introduction: 'Programa de acompañamiento integral de 6 meses para centros educativos que desean integrar IA de forma responsable.',
    methodology: 'Acompañamiento personalizado con tutor dedicado, fases progresivas, evaluación continua.',
    evaluationSystem: 'Evaluación por fases, memoria final, auditoría de implementación.',
    certification: 'Sello Centro CESAC AI Ready.',
    modules: [
      {
        id: 'm01',
        title: 'Fase 1: Diagnóstico',
        description: 'Evaluación de madurez digital del centro, identificación de necesidades.',
        duration: '4 semanas',
        lessons: [
          {
            id: 'l01',
            title: 'Auditoría de madurez',
            description: 'Evaluación completa de competencias digitales del centro.',
            duration: '20 horas',
            type: 'workshop',
            resources: [
              { id: 'r01', type: 'exercise', title: 'Cuestionario de madurez', downloadable: true }
            ],
            objectives: ['Evaluar madurez digital', 'Identificar necesidades', 'Establecer línea base'],
            keyPoints: ['Competencia digital docente', 'Infraestructura', 'Cultura digital']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Fase 2: Planificación',
        description: 'Diseño del plan estratégico de adopción de IA.',
        duration: '6 semanas',
        lessons: [
          {
            id: 'l02',
            title: 'Diseño del plan',
            description: 'Creación del plan estratégico con objetivos, cronograma y recursos.',
            duration: '30 horas',
            type: 'workshop',
            resources: [
              { id: 'r02', type: 'exercise', title: 'Plantilla de plan', downloadable: true }
            ],
            objectives: ['Diseñar plan estratégico', 'Establecer objetivos', 'Planificar recursos'],
            keyPoints: ['Objetivos SMART', 'Cronograma realista', 'Indicadores de éxito']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Fase 3: Formación',
        description: 'Formación del claustro docente en IA educativa.',
        duration: '8 semanas',
        lessons: [
          {
            id: 'l03',
            title: 'Formación del profesorado',
            description: 'Programa de formación adaptado a diferentes niveles.',
            duration: '40 horas',
            type: 'workshop',
            resources: [
              { id: 'r03', type: 'video', title: 'Formación IA para docentes', duration: '120 min', downloadable: false }
            ],
            objectives: ['Formar al claustro', 'Crear referentes', 'Establecer comunidad'],
            keyPoints: ['Formación diferenciada', 'Práctica en aula', 'Comunidad de aprendizaje']
          }
        ]
      },
      {
        id: 'm04',
        title: 'Fase 4: Implementación',
        description: 'Puesta en marcha del plan con seguimiento y ajuste.',
        duration: '10 semanas',
        lessons: [
          {
            id: 'l04',
            title: 'Implementación guiada',
            description: 'Acompañamiento en la implementación con ajustes continuos.',
            duration: '30 horas',
            type: 'workshop',
            resources: [
              { id: 'r04', type: 'exercise', title: 'Diario de implementación', downloadable: true }
            ],
            objectives: ['Implementar plan', 'Ajustar según feedback', 'Documentar proceso'],
            keyPoints: ['Implementación gradual', 'Ajustes continuos', 'Documentación']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Guía completa de adopción', downloadable: true },
      { id: 'ar02', type: 'download', title: 'Normativa de uso responsable', downloadable: true }
    ],
    bibliography: ['Marco Europeo de Competencia Digital', 'LOMLOE', 'EU AI Act']
  }
];
