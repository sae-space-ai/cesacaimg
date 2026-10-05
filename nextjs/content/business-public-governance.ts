import type { CourseContent } from '../content-types';

// CESAC AI BUSINESS, PUBLIC SECTOR Y GOVERNANCE

export const aiBusinessContent: CourseContent[] = [
  {
    productId: 'p26', productSlug: 'ia-autonomos', productName: 'IA para Autónomos',
    introduction: 'Curso diseñado para autónomos que quieren aprovechar la IA para optimizar tiempo y mejorar resultados en su actividad profesional.',
    methodology: 'Ejemplos reales de autónomos, automatizaciones listas para implementar.',
    evaluationSystem: 'Implementación de 5 automatizaciones en tu negocio.',
    certification: 'Certificado CESAC AI Business (40 horas).',
    modules: [
      { id: 'm01', title: 'IA para Administración', description: 'Facturación, contabilidad, gestión de clientes con IA.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Administración automatizada', description: 'Automatización de tareas administrativas.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Automatizaciones admin', downloadable: true }],
          objectives: ['Automatizar facturación', 'Gestionar clientes', 'Optimizar tiempo'],
          keyPoints: ['Facturación automática', 'CRM con IA', 'Email marketing'] }]
      },
      { id: 'm02', title: 'Marketing con IA', description: 'Contenido, redes sociales, SEO, email marketing con IA.', duration: '12 horas',
        lessons: [{ id: 'l02', title: 'Marketing digital con IA', description: 'Creación de contenido y campañas con IA.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Campañas con IA', downloadable: true }],
          objectives: ['Crear contenido con IA', 'Optimizar SEO', 'Automatizar email'],
          keyPoints: ['Contenido IA', 'SEO', 'Email automatizado'] }]
      },
      { id: 'm03', title: 'Atención al Cliente', description: 'Chatbots, respuestas automáticas, gestión de consultas.', duration: '10 horas',
        lessons: [{ id: 'l03', title: 'Soporte con IA', description: 'Implementación de chatbots y respuestas automáticas.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Chatbot para autónomos', downloadable: true }],
          objectives: ['Implementar chatbot', 'Automatizar respuestas', 'Gestionar consultas'],
          keyPoints: ['Chatbots', 'FAQs automáticas', 'Escalado'] }]
      },
      { id: 'm04', title: 'Análisis de Negocio', description: 'Métricas, dashboards, predicciones con IA.', duration: '8 horas',
        lessons: [{ id: 'l04', title: 'Business Intelligence', description: 'Análisis de datos del negocio con IA.', duration: '4 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Dashboards con IA', downloadable: true }],
          objectives: ['Analizar datos', 'Crear dashboards', 'Predecir tendencias'],
          keyPoints: ['Métricas', 'Dashboards', 'Predicciones'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Kit de IA para autónomos', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p27', productSlug: 'ia-pymes', productName: 'IA para Pymes',
    introduction: 'Programa completo para pymes que quieren integrar IA de forma estratégica: diagnóstico, estrategia e implementación.',
    methodology: 'Diagnóstico inicial, plan personalizado, implementación guiada.',
    evaluationSystem: 'Plan de IA implementado con 3 automatizaciones.',
    certification: 'Certificado CESAC AI Business (60 horas).',
    modules: [
      { id: 'm01', title: 'Diagnóstico de Madurez', description: 'Evaluación de la pyme y oportunidades de IA.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Auditoría de IA', description: 'Evaluación completa de la pyme.', duration: '5 horas', type: 'workshop',
          resources: [{ id: 'r01', type: 'exercise', title: 'Cuestionario de madurez', downloadable: true }],
          objectives: ['Evaluar madurez', 'Identificar oportunidades', 'Priorizar acciones'],
          keyPoints: ['Madurez digital', 'Oportunidades', 'ROI'] }]
      },
      { id: 'm02', title: 'Estrategia de IA', description: 'Diseño de plan estratégico de IA para la pyme.', duration: '15 horas',
        lessons: [{ id: 'l02', title: 'Plan estratégico', description: 'Creación del plan de IA.', duration: '8 horas', type: 'workshop',
          resources: [{ id: 'r02', type: 'exercise', title: 'Plantilla de plan', downloadable: true }],
          objectives: ['Diseñar estrategia', 'Establecer objetivos', 'Planificar implementación'],
          keyPoints: ['Estrategia', 'Objetivos', 'Cronograma'] }]
      },
      { id: 'm03', title: 'Casos de Éxito', description: 'Análisis de implementaciones exitosas en pymes españolas.', duration: '10 horas',
        lessons: [{ id: 'l03', title: 'Casos reales', description: 'Estudio de casos de pymes que han implementado IA.', duration: '5 horas', type: 'theory',
          resources: [{ id: 'r03', type: 'article', title: 'Casos de éxito', downloadable: true }],
          objectives: ['Aprender de casos reales', 'Identificar mejores prácticas', 'Evitar errores comunes'],
          keyPoints: ['Casos reales', 'Mejores prácticas', 'Lecciones aprendidas'] }]
      },
      { id: 'm04', title: 'Implementación', description: 'Puesta en marcha de soluciones de IA.', duration: '20 horas',
        lessons: [{ id: 'l04', title: 'Implementación guiada', description: 'Acompañamiento en la implementación.', duration: '10 horas', type: 'workshop',
          resources: [{ id: 'r04', type: 'exercise', title: 'Guía de implementación', downloadable: true }],
          objectives: ['Implementar soluciones', 'Formar al equipo', 'Medir resultados'],
          keyPoints: ['Implementación', 'Formación', 'Medición'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía completa para pymes', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p28', productSlug: 'automatizacion-admin', productName: 'Automatización Administrativa',
    introduction: 'Automatización de procesos administrativos mediante IA: facturación, informes, email, documentación.',
    methodology: 'Mapeo de procesos, implementación de automatizaciones, medición de resultados.',
    evaluationSystem: 'Automatización del 70% de tareas administrativas.',
    certification: 'Certificado CESAC AI Business (45 horas).',
    modules: [
      { id: 'm01', title: 'Mapeo de Procesos', description: 'Identificación y documentación de procesos administrativos.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Análisis de procesos', description: 'Documentación y análisis de procesos.', duration: '5 horas', type: 'workshop',
          resources: [{ id: 'r01', type: 'exercise', title: 'Plantilla de mapeo', downloadable: true }],
          objectives: ['Mapear procesos', 'Identificar automatizables', 'Priorizar'],
          keyPoints: ['Diagramas de flujo', 'Cuellos de botella', 'Automatizables'] }]
      },
      { id: 'm02', title: 'Facturación Automática', description: 'Sistemas de facturación con IA.', duration: '10 horas',
        lessons: [{ id: 'l02', title: 'Facturación con IA', description: 'Automatización completa de facturación.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Sistema de facturación', downloadable: true }],
          objectives: ['Automatizar facturación', 'Gestionar cobros', 'Integrar con contabilidad'],
          keyPoints: ['Facturación', 'Cobros', 'Contabilidad'] }]
      },
      { id: 'm03', title: 'Informes Automáticos', description: 'Generación de informes con IA.', duration: '10 horas',
        lessons: [{ id: 'l03', title: 'Informes con IA', description: 'Creación automática de informes.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Plantillas de informes', downloadable: true }],
          objectives: ['Generar informes', 'Automatizar análisis', 'Personalizar'],
          keyPoints: ['Informes', 'Análisis', 'Personalización'] }]
      },
      { id: 'm04', title: 'Gestión Documental', description: 'Procesamiento y organización de documentos con IA.', duration: '10 horas',
        lessons: [{ id: 'l04', title: 'Documentos con IA', description: 'Clasificación, extracción, organización.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Sistema documental', downloadable: true }],
          objectives: ['Clasificar documentos', 'Extraer datos', 'Organizar'],
          keyPoints: ['Clasificación', 'Extracción', 'Organización'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Kit de automatización', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p29', productSlug: 'ia-marketing', productName: 'IA para Marketing y Ventas',
    introduction: 'Aplicación de IA al marketing y ventas: segmentación, contenido, email, chatbots, analítica predictiva.',
    methodology: 'Casos reales, herramientas prácticas, implementación inmediata.',
    evaluationSystem: 'Estrategia de marketing con IA implementada.',
    certification: 'Certificado CESAC AI Business (50 horas).',
    modules: [
      { id: 'm01', title: 'Segmentación Avanzada', description: 'Segmentación de audiencias con IA.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Segmentación con IA', description: 'Técnicas avanzadas de segmentación.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Ejercicios de segmentación', downloadable: true }],
          objectives: ['Segmentar con IA', 'Identificar patrones', 'Personalizar'],
          keyPoints: ['Clustering', 'Patrones', 'Personalización'] }]
      },
      { id: 'm02', title: 'Contenido con IA', description: 'Creación de contenido a escala con IA.', duration: '12 horas',
        lessons: [{ id: 'l02', title: 'Contenido escalable', description: 'Generación de contenido personalizado.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Generación de contenido', downloadable: true }],
          objectives: ['Crear contenido', 'Escalar producción', 'Personalizar'],
          keyPoints: ['Generación', 'Escalabilidad', 'Personalización'] }]
      },
      { id: 'm03', title: 'Email Marketing', description: 'Automatización de email marketing con IA.', duration: '10 horas',
        lessons: [{ id: 'l03', title: 'Email automatizado', description: 'Campañas de email con IA.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Campañas de email', downloadable: true }],
          objectives: ['Automatizar email', 'Personalizar mensajes', 'Optimizar'],
          keyPoints: ['Automatización', 'Personalización', 'Optimización'] }]
      },
      { id: 'm04', title: 'Chatbots de Ventas', description: 'Implementación de chatbots para ventas.', duration: '10 horas',
        lessons: [{ id: 'l04', title: 'Chatbots comerciales', description: 'Chatbots para generación de leads y ventas.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Chatbot de ventas', downloadable: true }],
          objectives: ['Implementar chatbot', 'Generar leads', 'Cerrar ventas'],
          keyPoints: ['Chatbots', 'Leads', 'Ventas'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Kit de marketing con IA', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p30', productSlug: 'ia-atencion-cliente', productName: 'IA para Atención al Cliente',
    introduction: 'Diseño e implementación de sistemas de atención al cliente potenciados por IA.',
    methodology: 'Diseño centrado en el usuario, implementación iterativa.',
    evaluationSystem: 'Chatbot funcional desplegado.',
    certification: 'Certificado CESAC AI Business (40 horas).',
    modules: [
      { id: 'm01', title: 'Diseño de Chatbots', description: 'Arquitectura y diseño de chatbots inteligentes.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Arquitectura de chatbots', description: 'Diseño de conversaciones y flujos.', duration: '5 horas', type: 'workshop',
          resources: [{ id: 'r01', type: 'exercise', title: 'Diseño de chatbot', downloadable: true }],
          objectives: ['Diseñar chatbot', 'Crear flujos', 'Definir personalización'],
          keyPoints: ['Flujos', 'Intenciones', 'Personalidad'] }]
      },
      { id: 'm02', title: 'Clasificación Automática', description: 'Sistemas de clasificación de consultas.', duration: '10 horas',
        lessons: [{ id: 'l02', title: 'Clasificación con IA', description: 'Clasificación automática de tickets.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Sistema de clasificación', downloadable: true }],
          objectives: ['Clasificar consultas', 'Enrutar tickets', 'Priorizar'],
          keyPoints: ['Clasificación', 'Enrutamiento', 'Priorización'] }]
      },
      { id: 'm03', title: 'Asistencia 24/7', description: 'Implementación de asistencia continua.', duration: '10 horas',
        lessons: [{ id: 'l03', title: 'Soporte continuo', description: 'Sistemas de soporte automatizado.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Sistema 24/7', downloadable: true }],
          objectives: ['Implementar 24/7', 'Escalar a humanos', 'Medir satisfacción'],
          keyPoints: ['24/7', 'Escalado', 'Satisfacción'] }]
      },
      { id: 'm04', title: 'Análisis de Satisfacción', description: 'Medición y mejora de la experiencia del cliente.', duration: '8 horas',
        lessons: [{ id: 'l04', title: 'Métricas de satisfacción', description: 'Análisis de satisfacción con IA.', duration: '4 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Análisis CSAT', downloadable: true }],
          objectives: ['Medir satisfacción', 'Analizar feedback', 'Mejorar continuamente'],
          keyPoints: ['CSAT', 'NPS', 'Feedback'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Kit de atención con IA', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p31', productSlug: 'diagnostico-empresarial', productName: 'Diagnóstico Empresarial de IA',
    introduction: 'Servicio de consultoría que analiza tu organización para identificar oportunidades de aplicación de IA.',
    methodology: 'Entrevistas, análisis de procesos, evaluación tecnológica, benchmark.',
    evaluationSystem: 'Informe ejecutivo con roadmap priorizado.',
    certification: 'Informe ejecutivo CESAC AI Consulting.',
    modules: [
      { id: 'm01', title: 'Entrevistas con Stakeholders', description: 'Análisis de necesidades y expectativas.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Entrevistas', description: 'Entrevistas con dirección y equipos.', duration: '5 horas', type: 'workshop',
          resources: [{ id: 'r01', type: 'exercise', title: 'Guion de entrevistas', downloadable: true }],
          objectives: ['Entrevistar stakeholders', 'Identificar necesidades', 'Documentar'],
          keyPoints: ['Entrevistas', 'Necesidades', 'Expectativas'] }]
      },
      { id: 'm02', title: 'Análisis de Procesos', description: 'Mapeo y análisis de procesos de negocio.', duration: '10 horas',
        lessons: [{ id: 'l02', title: 'Mapeo de procesos', description: 'Documentación de procesos.', duration: '5 horas', type: 'workshop',
          resources: [{ id: 'r02', type: 'exercise', title: 'Plantilla de mapeo', downloadable: true }],
          objectives: ['Mapear procesos', 'Identificar ineficiencias', 'Proponer mejoras'],
          keyPoints: ['Procesos', 'Ineficiencias', 'Mejoras'] }]
      },
      { id: 'm03', title: 'Evaluación Tecnológica', description: 'Análisis de infraestructura y herramientas.', duration: '10 horas',
        lessons: [{ id: 'l03', title: 'Auditoría tecnológica', description: 'Evaluación de sistemas y herramientas.', duration: '5 horas', type: 'workshop',
          resources: [{ id: 'r03', type: 'exercise', title: 'Checklist tecnológico', downloadable: true }],
          objectives: ['Evaluar tecnología', 'Identificar gaps', 'Recomendar mejoras'],
          keyPoints: ['Infraestructura', 'Herramientas', 'Gaps'] }]
      },
      { id: 'm04', title: 'Roadmap de Implementación', description: 'Plan priorizado de implementación de IA.', duration: '8 horas',
        lessons: [{ id: 'l04', title: 'Plan estratégico', description: 'Creación del roadmap.', duration: '4 horas', type: 'workshop',
          resources: [{ id: 'r04', type: 'exercise', title: 'Plantilla de roadmap', downloadable: true }],
          objectives: ['Crear roadmap', 'Priorizar iniciativas', 'Estimar ROI'],
          keyPoints: ['Roadmap', 'Priorización', 'ROI'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Template de diagnóstico', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p32', productSlug: 'plan-implantacion', productName: 'Plan de Implantación de IA',
    introduction: 'Acompañamiento integral de 3 meses para implantar IA en tu organización.',
    methodology: 'Estrategia, formación, implementación, medición.',
    evaluationSystem: 'IA implantada en 2+ procesos, equipo formado.',
    certification: 'Sello CESAC AI Implemented.',
    modules: [
      { id: 'm01', title: 'Estrategia de IA', description: 'Definición de estrategia y objetivos.', duration: '20 horas',
        lessons: [{ id: 'l01', title: 'Plan estratégico', description: 'Diseño de estrategia de IA.', duration: '10 horas', type: 'workshop',
          resources: [{ id: 'r01', type: 'exercise', title: 'Plantilla estratégica', downloadable: true }],
          objectives: ['Definir estrategia', 'Establecer objetivos', 'Planificar'],
          keyPoints: ['Estrategia', 'Objetivos', 'Plan'] }]
      },
      { id: 'm02', title: 'Selección de Herramientas', description: 'Evaluación y selección de herramientas de IA.', duration: '20 horas',
        lessons: [{ id: 'l02', title: 'Evaluación de herramientas', description: 'Análisis comparativo de soluciones.', duration: '10 horas', type: 'workshop',
          resources: [{ id: 'r02', type: 'exercise', title: 'Matriz de evaluación', downloadable: true }],
          objectives: ['Evaluar herramientas', 'Seleccionar soluciones', 'Negociar'],
          keyPoints: ['Evaluación', 'Selección', 'Negociación'] }]
      },
      { id: 'm03', title: 'Formación del Equipo', description: 'Programa de formación para el equipo.', duration: '30 horas',
        lessons: [{ id: 'l03', title: 'Formación personalizada', description: 'Programa adaptado a tu equipo.', duration: '15 horas', type: 'workshop',
          resources: [{ id: 'r03', type: 'exercise', title: 'Material formativo', downloadable: true }],
          objectives: ['Formar equipo', 'Crear champions', 'Establecer cultura'],
          keyPoints: ['Formación', 'Champions', 'Cultura'] }]
      },
      { id: 'm04', title: 'Pilotos y Escalado', description: 'Implementación de pilotos y escalado.', duration: '40 horas',
        lessons: [{ id: 'l04', title: 'Pilotos', description: 'Implementación y medición de pilotos.', duration: '20 horas', type: 'workshop',
          resources: [{ id: 'r04', type: 'exercise', title: 'Guía de pilotos', downloadable: true }],
          objectives: ['Implementar pilotos', 'Medir resultados', 'Escalar'],
          keyPoints: ['Pilotos', 'Medición', 'Escalado'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Kit de implantación', downloadable: true }],
    bibliography: []
  }
];

export const aiPublicContent: CourseContent[] = [
  {
    productId: 'p33', productSlug: 'ia-empleados-publicos', productName: 'AI Literacy para Empleados Públicos',
    introduction: 'Programa de alfabetización en IA adaptado al contexto de la Administración Pública.',
    methodology: 'Casos de uso en administración, normativa pública, ética en el sector público.',
    evaluationSystem: 'Proyecto aplicado a tu área de trabajo.',
    certification: 'Certificado CESAC AI Public Sector (40 horas).',
    modules: [
      { id: 'm01', title: 'IA en el Sector Público', description: 'Aplicaciones de IA en administraciones públicas.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'IA para AAPP', description: 'Casos de uso en administraciones.', duration: '5 horas', type: 'theory',
          resources: [{ id: 'r01', type: 'video', title: 'IA en AAPP', duration: '90 min', downloadable: false }],
          objectives: ['Conocer aplicaciones', 'Identificar oportunidades', 'Entender limitaciones'],
          keyPoints: ['Casos de uso', 'Oportunidades', 'Limitaciones'] }]
      },
      { id: 'm02', title: 'EU AI Act para AAPP', description: 'Regulación europea aplicada al sector público.', duration: '10 horas',
        lessons: [{ id: 'l02', title: 'Normativa pública', description: 'EU AI Act y normativa específica.', duration: '5 horas', type: 'theory',
          resources: [{ id: 'r02', type: 'pdf', title: 'Guía EU AI Act AAPP', pages: 30, downloadable: true }],
          objectives: ['Conocer normativa', 'Clasificar sistemas', 'Cumplir requisitos'],
          keyPoints: ['EU AI Act', 'Clasificación', 'Cumplimiento'] }]
      },
      { id: 'm03', title: 'Ética y Valores Públicos', description: 'Ética de IA en el servicio público.', duration: '10 horas',
        lessons: [{ id: 'l03', title: 'Ética pública', description: 'Principios éticos en el uso de IA.', duration: '5 horas', type: 'theory',
          resources: [{ id: 'r03', type: 'article', title: 'Ética IA pública', downloadable: true }],
          objectives: ['Aplicar principios éticos', 'Garantizar transparencia', 'Proteger derechos'],
          keyPoints: ['Ética', 'Transparencia', 'Derechos'] }]
      },
      { id: 'm04', title: 'Herramientas para AAPP', description: 'Herramientas de IA disponibles para empleados públicos.', duration: '8 horas',
        lessons: [{ id: 'l04', title: 'Herramientas públicas', description: 'Herramientas aprobadas para AAPP.', duration: '4 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Uso de herramientas', downloadable: true }],
          objectives: ['Usar herramientas', 'Aplicar a procedimientos', 'Mejorar servicio'],
          keyPoints: ['Herramientas', 'Procedimientos', 'Servicio'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía IA para empleados públicos', downloadable: true }],
    bibliography: ['EU AI Act', 'Esquema Nacional de Seguridad']
  },
  {
    productId: 'p34', productSlug: 'ia-procedimientos', productName: 'IA Generativa Aplicada a Procedimientos Administrativos',
    introduction: 'Aplicación de IA generativa a la tramitación de procedimientos administrativos con supervisión humana.',
    methodology: 'Casos prácticos reales, siempre con supervisión humana.',
    evaluationSystem: 'Redacción asistida de documentos administrativos.',
    certification: 'Certificado CESAC AI Public Sector (50 horas).',
    modules: [
      { id: 'm01', title: 'Redacción Asistida', description: 'Uso de IA para redactar documentos administrativos.', duration: '15 horas',
        lessons: [{ id: 'l01', title: 'Redacción con IA', description: 'Asistencia en redacción de resoluciones, informes.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Plantillas de documentos', downloadable: true }],
          objectives: ['Redactar con IA', 'Mantener rigor', 'Supervisar resultados'],
          keyPoints: ['Redacción', 'Rigor', 'Supervisión'] }]
      },
      { id: 'm02', title: 'Análisis Normativo', description: 'Análisis de normativa con apoyo de IA.', duration: '12 horas',
        lessons: [{ id: 'l02', title: 'Análisis con IA', description: 'Uso de IA para analizar normativa.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Análisis normativo', downloadable: true }],
          objectives: ['Analizar normativa', 'Identificar aplicabilidad', 'Sintetizar'],
          keyPoints: ['Análisis', 'Aplicabilidad', 'Síntesis'] }]
      },
      { id: 'm03', title: 'Atención al Ciudadano', description: 'Mejora de atención al ciudadano con IA.', duration: '12 horas',
        lessons: [{ id: 'l03', title: 'Atención con IA', description: 'Asistencia en atención al ciudadano.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Atención ciudadana', downloadable: true }],
          objectives: ['Mejorar atención', 'Automatizar consultas', 'Mantener calidad'],
          keyPoints: ['Atención', 'Automatización', 'Calidad'] }]
      },
      { id: 'm04', title: 'Supervisión Humana', description: 'Garantías de supervisión humana efectiva.', duration: '8 horas',
        lessons: [{ id: 'l04', title: 'Supervisión efectiva', description: 'Protocolos de supervisión humana.', duration: '4 horas', type: 'theory',
          resources: [{ id: 'r04', type: 'pdf', title: 'Protocolos de supervisión', downloadable: true }],
          objectives: ['Supervisar efectivamente', 'Validar resultados', 'Garantizar calidad'],
          keyPoints: ['Supervisión', 'Validación', 'Calidad'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de procedimientos con IA', downloadable: true }],
    bibliography: ['Ley 39/2015', 'EU AI Act']
  },
  {
    productId: 'p35', productSlug: 'ia-contratacion', productName: 'IA Aplicada a Contratación Pública',
    introduction: 'Optimización de procesos de contratación pública con IA: pliegos, evaluación, seguimiento.',
    methodology: 'Casos prácticos respetando garantías procedimentales.',
    evaluationSystem: 'Elaboración asistida de pliegos.',
    certification: 'Certificado CESAC AI Public Sector (50 horas).',
    modules: [
      { id: 'm01', title: 'Elaboración de Pliegos', description: 'Asistencia en redacción de pliegos con IA.', duration: '15 horas',
        lessons: [{ id: 'l01', title: 'Pliegos con IA', description: 'Redacción asistida de pliegos.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Plantillas de pliegos', downloadable: true }],
          objectives: ['Redactar pliegos', 'Usar IA como apoyo', 'Mantener legalidad'],
          keyPoints: ['Pliegos', 'IA apoyo', 'Legalidad'] }]
      },
      { id: 'm02', title: 'Análisis de Ofertas', description: 'Evaluación asistida de ofertas.', duration: '12 horas',
        lessons: [{ id: 'l02', title: 'Análisis con IA', description: 'Uso de IA para analizar ofertas.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Análisis de ofertas', downloadable: true }],
          objectives: ['Analizar ofertas', 'Comparar propuestas', 'Documentar'],
          keyPoints: ['Análisis', 'Comparación', 'Documentación'] }]
      },
      { id: 'm03', title: 'Seguimiento Contractual', description: 'Seguimiento de contratos con IA.', duration: '12 horas',
        lessons: [{ id: 'l03', title: 'Seguimiento con IA', description: 'Monitorización de ejecución contractual.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Seguimiento contractual', downloadable: true }],
          objectives: ['Seguir contratos', 'Detectar incidencias', 'Informar'],
          keyPoints: ['Seguimiento', 'Incidencias', 'Informes'] }]
      },
      { id: 'm04', title: 'Garantías Procedimentales', description: 'Mantenimiento de garantías en contratación.', duration: '8 horas',
        lessons: [{ id: 'l04', title: 'Garantías', description: 'Garantías del procedimiento de contratación.', duration: '4 horas', type: 'theory',
          resources: [{ id: 'r04', type: 'pdf', title: 'Guía de garantías', downloadable: true }],
          objectives: ['Conocer garantías', 'Aplicar principios', 'Documentar'],
          keyPoints: ['Garantías', 'Principios', 'Documentación'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de contratación con IA', downloadable: true }],
    bibliography: ['Ley 9/2017 LCSP', 'EU AI Act']
  },
  {
    productId: 'p36', productSlug: 'ia-documental', productName: 'IA Aplicada a Gestión Documental',
    introduction: 'Modernización de gestión documental con IA: clasificación, extracción, búsqueda, archivo.',
    methodology: 'Implementación práctica compatible con sistemas existentes.',
    evaluationSystem: 'Sistema de clasificación automática implementado.',
    certification: 'Certificado CESAC AI Public Sector (40 horas).',
    modules: [
      { id: 'm01', title: 'Clasificación Automática', description: 'Clasificación de documentos con IA.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Clasificación con IA', description: 'Sistemas de clasificación automática.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Sistema de clasificación', downloadable: true }],
          objectives: ['Clasificar documentos', 'Automatizar proceso', 'Validar resultados'],
          keyPoints: ['Clasificación', 'Automatización', 'Validación'] }]
      },
      { id: 'm02', title: 'Extracción de Datos', description: 'Extracción de información de documentos.', duration: '10 horas',
        lessons: [{ id: 'l02', title: 'Extracción con IA', description: 'OCR y extracción inteligente.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Extracción de datos', downloadable: true }],
          objectives: ['Extraer datos', 'Validar información', 'Integrar sistemas'],
          keyPoints: ['OCR', 'Extracción', 'Integración'] }]
      },
      { id: 'm03', title: 'Búsqueda Semántica', description: 'Búsqueda inteligente de documentos.', duration: '10 horas',
        lessons: [{ id: 'l03', title: 'Búsqueda con IA', description: 'Búsqueda semántica de documentos.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Sistema de búsqueda', downloadable: true }],
          objectives: ['Buscar semánticamente', 'Encontrar documentos', 'Optimizar tiempo'],
          keyPoints: ['Semántica', 'Búsqueda', 'Optimización'] }]
      },
      { id: 'm04', title: 'Archivo Inteligente', description: 'Organización inteligente del archivo.', duration: '8 horas',
        lessons: [{ id: 'l04', title: 'Archivo con IA', description: 'Organización automática del archivo.', duration: '4 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Archivo inteligente', downloadable: true }],
          objectives: ['Organizar archivo', 'Automatizar procesos', 'Mantener accesibilidad'],
          keyPoints: ['Organización', 'Automatización', 'Accesibilidad'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de gestión documental con IA', downloadable: true }],
    bibliography: ['Normativa de archivo', 'ENS']
  },
  {
    productId: 'p37', productSlug: 'ia-informes', productName: 'IA Aplicada a Elaboración de Informes',
    introduction: 'Elaboración de informes técnicos, memorias y dictámenes con apoyo de IA.',
    methodology: 'Práctica con informes reales, manteniendo responsabilidad del funcionario.',
    evaluationSystem: 'Elaboración asistida de informe técnico.',
    certification: 'Certificado CESAC AI Public Sector (30 horas).',
    modules: [
      { id: 'm01', title: 'Estructura de Informes', description: 'Estructuración de informes con IA.', duration: '8 horas',
        lessons: [{ id: 'l01', title: 'Estructura con IA', description: 'Organización automática de informes.', duration: '4 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Plantillas de informes', downloadable: true }],
          objectives: ['Estructurar informes', 'Organizar contenido', 'Mantener rigor'],
          keyPoints: ['Estructura', 'Contenido', 'Rigor'] }]
      },
      { id: 'm02', title: 'Redacción Asistida', description: 'Redacción de informes con apoyo de IA.', duration: '8 horas',
        lessons: [{ id: 'l02', title: 'Redacción con IA', description: 'Asistencia en redacción.', duration: '4 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Redacción asistida', downloadable: true }],
          objectives: ['Redactar con IA', 'Mantener estilo', 'Supervisar'],
          keyPoints: ['Redacción', 'Estilo', 'Supervisión'] }]
      },
      { id: 'm03', title: 'Verificación de Datos', description: 'Verificación de información con IA.', duration: '8 horas',
        lessons: [{ id: 'l03', title: 'Verificación con IA', description: 'Comprobación de datos y fuentes.', duration: '4 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Verificación de datos', downloadable: true }],
          objectives: ['Verificar datos', 'Comprobar fuentes', 'Garantizar exactitud'],
          keyPoints: ['Verificación', 'Fuentes', 'Exactitud'] }]
      },
      { id: 'm04', title: 'Ética en la Redacción', description: 'Responsabilidad y ética en redacción con IA.', duration: '4 horas',
        lessons: [{ id: 'l04', title: 'Ética y responsabilidad', description: 'Responsabilidad del funcionario.', duration: '2 horas', type: 'theory',
          resources: [{ id: 'r04', type: 'pdf', title: 'Guía ética', downloadable: true }],
          objectives: ['Conocer responsabilidad', 'Aplicar ética', 'Documentar'],
          keyPoints: ['Responsabilidad', 'Ética', 'Documentación'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de informes con IA', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p38', productSlug: 'ia-proyectos-publicos', productName: 'IA para Innovación y Diseño de Proyectos Públicos',
    introduction: 'Uso de IA en el ciclo completo de proyectos públicos: detección, diseño, planificación, evaluación.',
    methodology: 'Design thinking asistido por IA, proyectos reales.',
    evaluationSystem: 'Proyecto público innovador con análisis de impacto.',
    certification: 'Certificado CESAC AI Public Sector (60 horas).',
    modules: [
      { id: 'm01', title: 'Innovación Pública con IA', description: 'Metodologías de innovación asistidas por IA.', duration: '15 horas',
        lessons: [{ id: 'l01', title: 'Innovación con IA', description: 'Design thinking y metodologías ágiles con IA.', duration: '8 horas', type: 'workshop',
          resources: [{ id: 'r01', type: 'exercise', title: 'Taller de innovación', downloadable: true }],
          objectives: ['Aplicar innovación', 'Usar IA como apoyo', 'Diseñar soluciones'],
          keyPoints: ['Innovación', 'Design thinking', 'IA apoyo'] }]
      },
      { id: 'm02', title: 'Detección de Necesidades', description: 'Análisis de necesidades con IA.', duration: '12 horas',
        lessons: [{ id: 'l02', title: 'Análisis con IA', description: 'Detección de necesidades ciudadanas.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Análisis de necesidades', downloadable: true }],
          objectives: ['Detectar necesidades', 'Analizar datos', 'Priorizar'],
          keyPoints: ['Detección', 'Análisis', 'Priorización'] }]
      },
      { id: 'm03', title: 'Análisis de Impacto', description: 'Evaluación de impacto con IA.', duration: '15 horas',
        lessons: [{ id: 'l03', title: 'Impacto con IA', description: 'Evaluación de impacto de proyectos.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Análisis de impacto', downloadable: true }],
          objectives: ['Evaluar impacto', 'Medir resultados', 'Documentar'],
          keyPoints: ['Impacto', 'Medición', 'Documentación'] }]
      },
      { id: 'm04', title: 'Fondos Europeos e IA', description: 'Conexión entre IA y fondos Next Generation.', duration: '12 horas',
        lessons: [{ id: 'l04', title: 'Fondos y IA', description: 'Proyectos de IA financiados con fondos europeos.', duration: '6 horas', type: 'theory',
          resources: [{ id: 'r04', type: 'pdf', title: 'Guía fondos europeos', downloadable: true }],
          objectives: ['Conocer fondos', 'Diseñar proyectos', 'Solicitar financiación'],
          keyPoints: ['Fondos', 'Proyectos', 'Financiación'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de proyectos públicos con IA', downloadable: true }],
    bibliography: ['Fondos Next Generation', 'PRTR']
  }
];

export const aiGovernanceContent: CourseContent[] = [
  {
    productId: 'p39', productSlug: 'eu-ai-act', productName: 'EU AI Act para Organizaciones',
    introduction: 'Programa integral para comprender y cumplir con el EU AI Act: clasificación, riesgos, documentación y auditoría.',
    methodology: 'Talleres prácticos, plantillas de cumplimiento, casos reales.',
    evaluationSystem: 'Inventario de sistemas IA y documentación de cumplimiento.',
    certification: 'Certificado CESAC AI Governance (80 horas).',
    modules: [
      { id: 'm01', title: 'Introducción al EU AI Act', description: 'Marco regulatorio europeo de IA.', duration: '15 horas',
        lessons: [{ id: 'l01', title: 'El Reglamento', description: 'Estructura, objetivos, timeline del EU AI Act.', duration: '8 horas', type: 'theory',
          resources: [{ id: 'r01', type: 'pdf', title: 'Texto del Reglamento', pages: 100, downloadable: true }],
          objectives: ['Comprender el Reglamento', 'Identificar obligaciones', 'Planificar cumplimiento'],
          keyPoints: ['Estructura', 'Obligaciones', 'Timeline'] }]
      },
      { id: 'm02', title: 'Clasificación de Sistemas', description: 'Clasificación de sistemas de IA por riesgo.', duration: '20 horas',
        lessons: [{ id: 'l02', title: 'Clasificación por riesgo', description: 'Categorías: inaceptable, alto, limitado, mínimo.', duration: '10 horas', type: 'workshop',
          resources: [{ id: 'r02', type: 'exercise', title: 'Plantilla de clasificación', downloadable: true }],
          objectives: ['Clasificar sistemas', 'Identificar nivel de riesgo', 'Aplicar requisitos'],
          keyPoints: ['Riesgo inaceptable', 'Riesgo alto', 'Transparencia', 'Mínimo riesgo'] }]
      },
      { id: 'm03', title: 'Evaluación de Riesgos', description: 'Evaluación y mitigación de riesgos.', duration: '20 horas',
        lessons: [{ id: 'l03', title: 'Gestión de riesgos', description: 'Identificación, evaluación y mitigación.', duration: '10 horas', type: 'workshop',
          resources: [{ id: 'r03', type: 'exercise', title: 'Matriz de riesgos', downloadable: true }],
          objectives: ['Evaluar riesgos', 'Diseñar mitigaciones', 'Documentar'],
          keyPoints: ['Identificación', 'Evaluación', 'Mitigación'] }]
      },
      { id: 'm04', title: 'Documentación y Auditoría', description: 'Documentación técnica y preparación para auditorías.', duration: '20 horas',
        lessons: [{ id: 'l04', title: 'Documentación completa', description: 'Expediente técnico y preparación de auditorías.', duration: '10 horas', type: 'workshop',
          resources: [{ id: 'r04', type: 'exercise', title: 'Plantilla de documentación', downloadable: true }],
          objectives: ['Documentar sistemas', 'Preparar auditorías', 'Mantener cumplimiento'],
          keyPoints: ['Documentación', 'Auditoría', 'Cumplimiento'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Kit de cumplimiento EU AI Act', downloadable: true }],
    bibliography: ['EU AI Act', 'ISO 42001', 'NIST AI RMF']
  },
  {
    productId: 'p40', productSlug: 'ai-literacy-evidencia', productName: 'Programa de AI Literacy y Evidencia de Cumplimiento',
    introduction: 'Programa organizacional de AI Literacy que genera evidencias documentales de cumplimiento para auditorías.',
    methodology: 'Diagnóstico, formación segmentada, evaluación, certificación, expediente de evidencias.',
    evaluationSystem: 'Expediente de evidencias descargable y auditable.',
    certification: 'Certificado Organizacional CESAC AI Governance.',
    modules: [
      { id: 'm01', title: 'Diagnóstico de Competencias', description: 'Evaluación inicial de competencias en IA.', duration: '15 horas',
        lessons: [{ id: 'l01', title: 'Evaluación inicial', description: 'Diagnóstico de competencias por perfiles.', duration: '8 horas', type: 'evaluation',
          resources: [{ id: 'r01', type: 'exercise', title: 'Test de diagnóstico', downloadable: true }],
          objectives: ['Evaluar competencias', 'Identificar gaps', 'Planificar formación'],
          keyPoints: ['Diagnóstico', 'Gaps', 'Planificación'] }]
      },
      { id: 'm02', title: 'Formación por Perfiles', description: 'Formación segmentada por roles y necesidades.', duration: '30 horas',
        lessons: [{ id: 'l02', title: 'Formación personalizada', description: 'Programas adaptados a diferentes perfiles.', duration: '15 horas', type: 'theory',
          resources: [{ id: 'r02', type: 'video', title: 'Contenido por perfil', downloadable: false }],
          objectives: ['Formar por perfil', 'Adaptar contenido', 'Evaluar progreso'],
          keyPoints: ['Perfiles', 'Adaptación', 'Evaluación'] }]
      },
      { id: 'm03', title: 'Certificación Individual', description: 'Certificación de competencias individuales.', duration: '20 horas',
        lessons: [{ id: 'l03', title: 'Evaluación y certificación', description: 'Pruebas de competencia y certificación.', duration: '10 horas', type: 'evaluation',
          resources: [{ id: 'r03', type: 'exercise', title: 'Pruebas de certificación', downloadable: true }],
          objectives: ['Certificar competencias', 'Documentar logros', 'Generar evidencias'],
          keyPoints: ['Certificación', 'Documentación', 'Evidencias'] }]
      },
      { id: 'm04', title: 'Expediente de Evidencias', description: 'Generación de expediente auditable.', duration: '25 horas',
        lessons: [{ id: 'l04', title: 'Expediente completo', description: 'Compilación de evidencias de cumplimiento.', duration: '12 horas', type: 'workshop',
          resources: [{ id: 'r04', type: 'exercise', title: 'Plantilla de expediente', downloadable: true }],
          objectives: ['Compilar evidencias', 'Generar expediente', 'Preparar auditoría'],
          keyPoints: ['Evidencias', 'Expediente', 'Auditoría'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Kit de evidencias AI Literacy', downloadable: true }],
    bibliography: ['EU AI Act', 'ISO 42001']
  }
];
