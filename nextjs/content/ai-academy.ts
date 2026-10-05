import type { CourseContent } from '../content-types';

// CESAC AI ACADEMY - Contenido completo de los 10 programas

export const aiAcademyContent: CourseContent[] = [
  {
    productId: 'p16', productSlug: 'ai-literacy', productName: 'AI Literacy',
    introduction: 'Curso fundamental para comprender la IA sin conocimientos técnicos previos. Cubre fundamentos, aplicaciones, limitaciones, ética y marco regulatorio EU AI Act.',
    methodology: 'Aprendizaje práctico con casos reales, ejercicios interactivos y discusión de implicaciones éticas.',
    evaluationSystem: 'Tests de comprensión, caso práctico final y proyecto de aplicación en tu sector.',
    certification: 'Certificado CESAC AI Academy (30 horas).',
    modules: [
      { id: 'm01', title: 'Fundamentos de IA', description: 'Qué es la IA, historia, tipos de sistemas, cómo funciona.', duration: '8 horas',
        lessons: [
          { id: 'l01', title: '¿Qué es la Inteligencia Artificial?', description: 'Definiciones, historia, tipos de IA: débil vs fuerte, estrecha vs general.', duration: '3 horas', type: 'theory',
            resources: [{ id: 'r01', type: 'video', title: 'Historia de la IA', duration: '45 min', downloadable: false }, { id: 'r02', type: 'pdf', title: 'Glosario de IA', pages: 15, downloadable: true }],
            objectives: ['Definir IA correctamente', 'Diferenciar tipos de IA', 'Conocer hitos históricos'],
            keyPoints: ['Test de Turing', 'Machine Learning', 'Deep Learning', 'IA generativa']
          }
        ]
      },
      { id: 'm02', title: 'Machine Learning y Deep Learning', description: 'Cómo aprenden las máquinas: algoritmos, redes neuronales, entrenamiento.', duration: '8 horas',
        lessons: [
          { id: 'l02', title: 'Algoritmos de aprendizaje', description: 'Supervisado, no supervisado, por refuerzo. Redes neuronales básicas.', duration: '4 horas', type: 'theory',
            resources: [{ id: 'r03', type: 'video', title: 'ML explicado sin matemáticas', duration: '60 min', downloadable: false }],
            objectives: ['Comprender ML básico', 'Diferenciar tipos de aprendizaje', 'Entender redes neuronales'],
            keyPoints: ['Datos de entrenamiento', 'Modelos predictivos', 'Redes neuronales']
          }
        ]
      },
      { id: 'm03', title: 'IA Generativa', description: 'ChatGPT, Claude, Gemini, DALL-E, Midjourney. Cómo funcionan y aplicaciones.', duration: '8 horas',
        lessons: [
          { id: 'l03', title: 'Modelos de lenguaje', description: 'Transformers, tokens, contexto, generación de texto.', duration: '4 horas', type: 'theory',
            resources: [{ id: 'r04', type: 'video', title: 'Cómo funciona ChatGPT', duration: '50 min', downloadable: false }],
            objectives: ['Entender LLMs', 'Conocer limitaciones', 'Identificar aplicaciones'],
            keyPoints: ['Transformers', 'Tokens', 'Contexto', 'Alucinaciones']
          }
        ]
      },
      { id: 'm04', title: 'Ética y EU AI Act', description: 'Sesgos, privacidad, transparencia, marco regulatorio europeo.', duration: '6 horas',
        lessons: [
          { id: 'l04', title: 'Regulación europea de IA', description: 'EU AI Act: clasificación de riesgos, obligaciones, timeline.', duration: '3 horas', type: 'theory',
            resources: [{ id: 'r05', type: 'pdf', title: 'Resumen EU AI Act', pages: 20, downloadable: true }],
            objectives: ['Conocer el EU AI Act', 'Clasificar sistemas por riesgo', 'Entender obligaciones'],
            keyPoints: ['Riesgo inaceptable', 'Riesgo alto', 'Transparencia', 'Supervisión humana']
          }
        ]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de herramientas IA', downloadable: true }],
    bibliography: ['EU AI Act', 'Libro blanco de IA de la Comisión Europea']
  },
  {
    productId: 'p17', productSlug: 'ia-generativa', productName: 'Introducción Práctica a IA Generativa',
    introduction: 'Formación práctica e intensiva en las principales herramientas de IA generativa: chatbots, imágenes, audio, vídeo y código.',
    methodology: '100% práctico con ejercicios reales del entorno profesional.',
    evaluationSystem: 'Proyecto final: workflow automatizado con múltiples herramientas de IA.',
    certification: 'Certificado CESAC AI Academy (45 horas).',
    modules: [
      { id: 'm01', title: 'Chatbots: ChatGPT y Claude', description: 'Uso avanzado de asistentes conversacionales.', duration: '12 horas',
        lessons: [
          { id: 'l01', title: 'ChatGPT en profundidad', description: 'Funciones avanzadas, GPTs personalizados, análisis de datos.', duration: '6 horas', type: 'practice',
            resources: [{ id: 'r01', type: 'video', title: 'ChatGPT avanzado', duration: '90 min', downloadable: false }],
            objectives: ['Dominar ChatGPT', 'Crear GPTs personalizados', 'Analizar datos'],
            keyPoints: ['Prompts avanzados', 'GPTs personalizados', 'Análisis de datos']
          }
        ]
      },
      { id: 'm02', title: 'Generación de Imágenes', description: 'DALL-E, Midjourney, Stable Diffusion.', duration: '10 horas',
        lessons: [
          { id: 'l02', title: 'Diseño con IA', description: 'Prompts para imágenes, estilos, iteración.', duration: '5 horas', type: 'practice',
            resources: [{ id: 'r02', type: 'exercise', title: 'Ejercicios de diseño', downloadable: true }],
            objectives: ['Generar imágenes con IA', 'Dominar prompts visuales', 'Iterar diseños'],
            keyPoints: ['Prompts visuales', 'Estilos artísticos', 'Iteración']
          }
        ]
      },
      { id: 'm03', title: 'IA para Audio y Vídeo', description: 'Whisper, ElevenLabs, herramientas de vídeo con IA.', duration: '10 horas',
        lessons: [
          { id: 'l03', title: 'Audio y vídeo con IA', description: 'Transcripción, generación de voz, edición de vídeo.', duration: '5 horas', type: 'practice',
            resources: [{ id: 'r03', type: 'video', title: 'Herramientas de audio/vídeo', duration: '75 min', downloadable: false }],
            objectives: ['Transcribir audio', 'Generar voz', 'Editar vídeo con IA'],
            keyPoints: ['Transcripción', 'Text-to-speech', 'Edición automática']
          }
        ]
      },
      { id: 'm04', title: 'Asistentes de Código', description: 'GitHub Copilot, Cursor, Codeium.', duration: '8 horas',
        lessons: [
          { id: 'l04', title: 'Programación con IA', description: 'Autocompletado, generación de código, debugging.', duration: '4 horas', type: 'practice',
            resources: [{ id: 'r04', type: 'exercise', title: 'Ejercicios de código', downloadable: true }],
            objectives: ['Usar asistentes de código', 'Generar código con IA', 'Depurar con IA'],
            keyPoints: ['Autocompletado', 'Generación de funciones', 'Refactoring']
          }
        ]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Biblioteca de prompts', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p18', productSlug: 'prompt-engineering', productName: 'Prompt Engineering',
    introduction: 'Curso especializado en creación de prompts efectivos para obtener resultados óptimos de modelos de IA generativa.',
    methodology: 'Práctica intensiva con casos reales, análisis de resultados y optimización iterativa.',
    evaluationSystem: 'Biblioteca personal de 20+ prompts profesionales validados.',
    certification: 'Certificado CESAC AI Academy (40 horas).',
    modules: [
      { id: 'm01', title: 'Fundamentos del Prompting', description: 'Principios básicos, estructura de prompts, elementos clave.', duration: '8 horas',
        lessons: [
          { id: 'l01', title: 'Anatomía de un prompt', description: 'Contexto, instrucción, formato, ejemplos, restricciones.', duration: '4 horas', type: 'theory',
            resources: [{ id: 'r01', type: 'pdf', title: 'Guía de prompting', pages: 25, downloadable: true }],
            objectives: ['Estructurar prompts', 'Incluir elementos clave', 'Evitar ambigüedades'],
            keyPoints: ['Contexto', 'Instrucción clara', 'Formato de salida', 'Ejemplos']
          }
        ]
      },
      { id: 'm02', title: 'Técnicas Avanzadas', description: 'Chain-of-thought, few-shot, role prompting, self-consistency.', duration: '12 horas',
        lessons: [
          { id: 'l02', title: 'Chain-of-thought', description: 'Pensamiento paso a paso para problemas complejos.', duration: '4 horas', type: 'workshop',
            resources: [{ id: 'r02', type: 'exercise', title: 'Ejercicios CoT', downloadable: true }],
            objectives: ['Aplicar CoT', 'Resolver problemas complejos', 'Mejorar razonamiento'],
            keyPoints: ['Pensamiento paso a paso', 'Descomposición', 'Verificación']
          }
        ]
      },
      { id: 'm03', title: 'Prompting para Casos Específicos', description: 'Código, análisis de datos, creación de contenido, investigación.', duration: '12 horas',
        lessons: [
          { id: 'l03', title: 'Prompts para código', description: 'Generación, debugging, documentación, testing.', duration: '4 horas', type: 'practice',
            resources: [{ id: 'r03', type: 'exercise', title: 'Prompts de código', downloadable: true }],
            objectives: ['Generar código con IA', 'Depurar con prompts', 'Documentar automáticamente'],
            keyPoints: ['Especificación clara', 'Ejemplos de entrada/salida', 'Iteración']
          }
        ]
      },
      { id: 'm04', title: 'Frameworks y Bibliotecas', description: 'Creación de bibliotecas reutilizables, sistemas de prompts.', duration: '8 horas',
        lessons: [
          { id: 'l04', title: 'Sistemas de prompts', description: 'Organización, versionado, testing de prompts.', duration: '4 horas', type: 'workshop',
            resources: [{ id: 'r04', type: 'exercise', title: 'Plantilla de biblioteca', downloadable: true }],
            objectives: ['Crear biblioteca de prompts', 'Versionar prompts', 'Testear eficacia'],
            keyPoints: ['Organización', 'Versionado', 'Testing A/B']
          }
        ]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Biblioteca de 100+ prompts', downloadable: true }],
    bibliography: ['Anthropic Prompt Engineering Guide', 'OpenAI Cookbook']
  },
  {
    productId: 'p19', productSlug: 'productividad-ia', productName: 'Productividad Profesional con IA',
    introduction: 'Transforma tu productividad integrando IA en email, documentos, presentaciones, análisis y gestión de proyectos.',
    methodology: 'Automatizaciones listas para implementar en tu trabajo diario.',
    evaluationSystem: 'Implementación de 10 automatizaciones reales en tu entorno laboral.',
    certification: 'Certificado CESAC AI Academy (50 horas).',
    modules: [
      { id: 'm01', title: 'IA para Email y Comunicación', description: 'Gestión de email, redacción, traducción, resumen de reuniones.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Email con IA', description: 'Automatización de respuestas, redacción profesional, resúmenes.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Automatizaciones de email', downloadable: true }],
          objectives: ['Automatizar email', 'Redactar con IA', 'Resumir reuniones'],
          keyPoints: ['Plantillas inteligentes', 'Respuestas automáticas', 'Resúmenes'] }]
      },
      { id: 'm02', title: 'Documentos y Presentaciones', description: 'Creación de documentos, informes, presentaciones con IA.', duration: '12 horas',
        lessons: [{ id: 'l02', title: 'Documentos con IA', description: 'Generación de informes, presentaciones, propuestas.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Plantillas de documentos', downloadable: true }],
          objectives: ['Crear documentos con IA', 'Generar presentaciones', 'Automatizar informes'],
          keyPoints: ['Plantillas', 'Generación automática', 'Personalización'] }]
      },
      { id: 'm03', title: 'Análisis de Datos', description: 'Excel, hojas de cálculo, análisis con IA, visualización.', duration: '12 horas',
        lessons: [{ id: 'l03', title: 'Datos con IA', description: 'Análisis, limpieza, visualización con IA.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Ejercicios de análisis', downloadable: true }],
          objectives: ['Analizar datos con IA', 'Limpiar datos', 'Visualizar resultados'],
          keyPoints: ['Fórmulas IA', 'Limpieza automática', 'Gráficos'] }]
      },
      { id: 'm04', title: 'Gestión de Proyectos', description: 'Planificación, seguimiento, reporting con IA.', duration: '10 horas',
        lessons: [{ id: 'l04', title: 'Proyectos con IA', description: 'Automatización de gestión de proyectos.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Plantillas de gestión', downloadable: true }],
          objectives: ['Planificar con IA', 'Automatizar seguimiento', 'Generar reportes'],
          keyPoints: ['Planificación automática', 'Seguimiento', 'Reportes'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Kit de productividad con IA', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p20', productSlug: 'investigacion-ia', productName: 'Investigación Asistida por IA',
    introduction: 'Metodología de investigación potenciada con IA: búsqueda avanzada, análisis de fuentes, síntesis y redacción académica.',
    methodology: 'Proyecto de investigación real con apoyo de IA.',
    evaluationSystem: 'Revisión bibliográfica asistida por IA.',
    certification: 'Certificado CESAC AI Academy (45 horas).',
    modules: [
      { id: 'm01', title: 'Búsqueda Avanzada', description: 'Estrategias de búsqueda, bases de datos, IA para descubrimiento.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Búsqueda con IA', description: 'Herramientas de búsqueda asistida por IA.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Ejercicios de búsqueda', downloadable: true }],
          objectives: ['Buscar eficientemente', 'Usar IA para descubrimiento', 'Evaluar fuentes'],
          keyPoints: ['Búsqueda semántica', 'Filtros avanzados', 'Evaluación de fuentes'] }]
      },
      { id: 'm02', title: 'Análisis de Fuentes', description: 'Lectura crítica, extracción de información, detección de sesgos.', duration: '12 horas',
        lessons: [{ id: 'l02', title: 'Análisis con IA', description: 'Uso de IA para analizar papers y documentos.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Análisis de papers', downloadable: true }],
          objectives: ['Analizar con IA', 'Detectar sesgos', 'Extraer información clave'],
          keyPoints: ['Resumen automático', 'Detección de sesgos', 'Extracción de datos'] }]
      },
      { id: 'm03', title: 'Síntesis y Redacción', description: 'Síntesis de literatura, redacción académica, citación.', duration: '12 horas',
        lessons: [{ id: 'l03', title: 'Redacción con IA', description: 'Asistencia en redacción manteniendo rigor.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Ejercicios de redacción', downloadable: true }],
          objectives: ['Sintetizar con IA', 'Redactar con asistencia', 'Citar correctamente'],
          keyPoints: ['Síntesis', 'Parafraseo', 'Citación'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de investigación con IA', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p21', productSlug: 'automatizacion-ia', productName: 'Automatización con IA',
    introduction: 'Diseño e implementación de automatizaciones inteligentes combinando IA, APIs y flujos de trabajo no-code.',
    methodology: 'Proyectos reales de automatización desde el primer día.',
    evaluationSystem: '5 automatizaciones completas implementadas.',
    certification: 'Certificado CESAC AI Academy (60 horas).',
    modules: [
      { id: 'm01', title: 'Fundamentos de Automatización', description: 'Conceptos, flujos, triggers, acciones.', duration: '10 horas',
        lessons: [{ id: 'l01', title: 'Automatización básica', description: 'Principios y herramientas no-code.', duration: '5 horas', type: 'theory',
          resources: [{ id: 'r01', type: 'video', title: 'Introducción a automatización', duration: '60 min', downloadable: false }],
          objectives: ['Entender automatización', 'Identificar oportunidades', 'Diseñar flujos'],
          keyPoints: ['Triggers', 'Acciones', 'Flujos'] }]
      },
      { id: 'm02', title: 'Plataformas No-Code', description: 'Make, Zapier, n8n: comparación y uso avanzado.', duration: '15 horas',
        lessons: [{ id: 'l02', title: 'Make y Zapier', description: 'Creación de automatizaciones complejas.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Automatizaciones Make', downloadable: true }],
          objectives: ['Usar Make/Zapier', 'Crear flujos complejos', 'Integrar APIs'],
          keyPoints: ['Escenarios', 'Módulos', 'Webhooks'] }]
      },
      { id: 'm03', title: 'APIs y Webhooks', description: 'Conexión entre servicios, APIs REST, webhooks.', duration: '15 horas',
        lessons: [{ id: 'l03', title: 'APIs en automatización', description: 'Uso de APIs para conectar servicios.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Ejercicios de APIs', downloadable: true }],
          objectives: ['Consumir APIs', 'Configurar webhooks', 'Transformar datos'],
          keyPoints: ['REST APIs', 'JSON', 'Autenticación'] }]
      },
      { id: 'm04', title: 'IA en Automatizaciones', description: 'Integración de IA en flujos: decisiones, generación, análisis.', duration: '15 horas',
        lessons: [{ id: 'l04', title: 'IA en flujos', description: 'Uso de IA para decisiones y generación en automatizaciones.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Automatizaciones con IA', downloadable: true }],
          objectives: ['Integrar IA en flujos', 'Tomar decisiones con IA', 'Generar contenido'],
          keyPoints: ['Módulos de IA', 'Decisiones automáticas', 'Generación'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Biblioteca de automatizaciones', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p22', productSlug: 'agentes-ia', productName: 'Agentes de IA',
    introduction: 'Diseño y construcción de agentes de IA autónomos con planificación, herramientas y memoria.',
    methodology: 'Proyecto final: agente funcional con herramientas reales.',
    evaluationSystem: 'Agente funcional desplegado.',
    certification: 'Certificado CESAC AI Academy (80 horas).',
    modules: [
      { id: 'm01', title: 'Arquitectura de Agentes', description: 'Componentes, patrones, frameworks.', duration: '15 horas',
        lessons: [{ id: 'l01', title: 'Fundamentos de agentes', description: 'Qué son, cómo funcionan, tipos.', duration: '8 horas', type: 'theory',
          resources: [{ id: 'r01', type: 'video', title: 'Arquitectura de agentes', duration: '120 min', downloadable: false }],
          objectives: ['Entender agentes', 'Identificar componentes', 'Diseñar arquitecturas'],
          keyPoints: ['Percepción', 'Decisión', 'Acción', 'Memoria'] }]
      },
      { id: 'm02', title: 'Frameworks: LangChain y CrewAI', description: 'Implementación práctica con frameworks populares.', duration: '25 horas',
        lessons: [{ id: 'l02', title: 'LangChain en profundidad', description: 'Cadenas, agentes, herramientas, memoria.', duration: '12 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Ejercicios LangChain', downloadable: true }],
          objectives: ['Usar LangChain', 'Crear agentes', 'Integrar herramientas'],
          keyPoints: ['Cadenas', 'Agentes', 'Herramientas', 'Memoria'] }]
      },
      { id: 'm03', title: 'Uso de Herramientas', description: 'APIs, bases de datos, búsqueda web, ejecución de código.', duration: '20 horas',
        lessons: [{ id: 'l03', title: 'Herramientas para agentes', description: 'Integración de herramientas externas.', duration: '10 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Integración de herramientas', downloadable: true }],
          objectives: ['Integrar herramientas', 'Usar APIs', 'Ejecutar código'],
          keyPoints: ['Funciones tool', 'APIs externas', 'Sandbox'] }]
      },
      { id: 'm04', title: 'Multi-Agentes', description: 'Sistemas colaborativos de múltiples agentes.', duration: '15 horas',
        lessons: [{ id: 'l04', title: 'Sistemas multi-agente', description: 'Coordinación, roles, comunicación.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Ejercicios multi-agente', downloadable: true }],
          objectives: ['Diseñar sistemas multi-agente', 'Coordinar agentes', 'Resolver tareas complejas'],
          keyPoints: ['Roles', 'Comunicación', 'Coordinación'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Templates de agentes', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p23', productSlug: 'rag-conocimiento', productName: 'RAG y Bases de Conocimiento',
    introduction: 'Construcción de sistemas RAG para crear asistentes con conocimiento específico de tu organización.',
    methodology: 'Implementación práctica de un sistema RAG completo.',
    evaluationSystem: 'Sistema RAG funcional con evaluación de calidad.',
    certification: 'Certificado CESAC AI Academy (65 horas).',
    modules: [
      { id: 'm01', title: 'Fundamentos de RAG', description: 'Arquitectura, componentes, casos de uso.', duration: '12 horas',
        lessons: [{ id: 'l01', title: 'Qué es RAG', description: 'Retrieval-Augmented Generation: conceptos y arquitectura.', duration: '6 horas', type: 'theory',
          resources: [{ id: 'r01', type: 'video', title: 'Introducción a RAG', duration: '90 min', downloadable: false }],
          objectives: ['Entender RAG', 'Identificar componentes', 'Diseñar arquitectura'],
          keyPoints: ['Retrieval', 'Augmentation', 'Generation', 'Citas'] }]
      },
      { id: 'm02', title: 'Procesamiento de Documentos', description: 'Ingesta, chunking, metadatos, limpieza.', duration: '15 horas',
        lessons: [{ id: 'l02', title: 'Pipeline de ingesta', description: 'Extracción, segmentación, enriquecimiento.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Pipeline de ingesta', downloadable: true }],
          objectives: ['Procesar documentos', 'Segmentar contenido', 'Enriquecer metadatos'],
          keyPoints: ['Chunking', 'Metadatos', 'Limpieza'] }]
      },
      { id: 'm03', title: 'Embeddings y Bases Vectoriales', description: 'Vectorización, Pinecone, Weaviate, pgvector.', duration: '18 horas',
        lessons: [{ id: 'l03', title: 'Bases vectoriales', description: 'Almacenamiento y búsqueda de embeddings.', duration: '9 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Ejercicios con vectores', downloadable: true }],
          objectives: ['Vectorizar texto', 'Usar bases vectoriales', 'Buscar semánticamente'],
          keyPoints: ['Embeddings', 'Similitud coseno', 'Búsqueda vectorial'] }]
      },
      { id: 'm04', title: 'Generación con Citas', description: 'Prompting para RAG, citación, evaluación de calidad.', duration: '15 horas',
        lessons: [{ id: 'l04', title: 'Generación citada', description: 'Generar respuestas con citas a fuentes.', duration: '8 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Ejercicios de citación', downloadable: true }],
          objectives: ['Generar con citas', 'Evaluar calidad', 'Reducir alucinaciones'],
          keyPoints: ['Prompts RAG', 'Citas', 'Evaluación'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Template RAG completo', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p24', productSlug: 'ia-multimodal', productName: 'IA Multimodal',
    introduction: 'Exploración de sistemas de IA que procesan y generan múltiples modalidades: texto, imagen, audio y vídeo.',
    methodology: 'Proyectos multimodales con casos de uso reales.',
    evaluationSystem: 'Proyecto multimodal completo.',
    certification: 'Certificado CESAC AI Academy (50 horas).',
    modules: [
      { id: 'm01', title: 'Visión por Computador', description: 'GPT-4V, análisis de imágenes, OCR, detección.', duration: '12 horas',
        lessons: [{ id: 'l01', title: 'Análisis de imágenes', description: 'Uso de modelos multimodales para analizar imágenes.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r01', type: 'exercise', title: 'Ejercicios de visión', downloadable: true }],
          objectives: ['Analizar imágenes con IA', 'Extraer información', 'Aplicar OCR'],
          keyPoints: ['Modelos multimodales', 'OCR', 'Detección'] }]
      },
      { id: 'm02', title: 'Generación de Imágenes', description: 'DALL-E 3, Midjourney, Stable Diffusion avanzado.', duration: '12 horas',
        lessons: [{ id: 'l02', title: 'Generación avanzada', description: 'Técnicas avanzadas de generación de imágenes.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Ejercicios de generación', downloadable: true }],
          objectives: ['Generar imágenes complejas', 'Controlar estilo', 'Iterar diseños'],
          keyPoints: ['Prompts avanzados', 'Control de estilo', 'Iteración'] }]
      },
      { id: 'm03', title: 'Audio y Voz', description: 'Whisper, TTS, clonación de voz, música con IA.', duration: '12 horas',
        lessons: [{ id: 'l03', title: 'Procesamiento de audio', description: 'Transcripción, generación de voz, análisis.', duration: '6 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Ejercicios de audio', downloadable: true }],
          objectives: ['Transcribir audio', 'Generar voz', 'Analizar audio'],
          keyPoints: ['ASR', 'TTS', 'Análisis'] }]
      },
      { id: 'm04', title: 'Vídeo con IA', description: 'Sora, Runway, edición automática, generación.', duration: '10 horas',
        lessons: [{ id: 'l04', title: 'Vídeo generativo', description: 'Herramientas actuales de vídeo con IA.', duration: '5 horas', type: 'practice',
          resources: [{ id: 'r04', type: 'exercise', title: 'Ejercicios de vídeo', downloadable: true }],
          objectives: ['Generar vídeo con IA', 'Editar automáticamente', 'Combinar modalidades'],
          keyPoints: ['Generación', 'Edición', 'Combinación'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de herramientas multimodales', downloadable: true }],
    bibliography: []
  },
  {
    productId: 'p25', productSlug: 'programa-profesional', productName: 'Programa Profesional CESAC AI',
    introduction: 'Itinerario formativo completo de 6 meses que lleva del nivel básico a la especialización avanzada en IA.',
    methodology: 'Mentoría individual, proyectos reales, aprendizaje progresivo.',
    evaluationSystem: 'Proyectos por módulo, proyecto final, defensa oral.',
    certification: 'Certificación Profesional CESAC AI (300 horas).',
    modules: [
      { id: 'm01', title: 'Módulo 1: AI Literacy', description: 'Fundamentos de IA para todos los profesionales.', duration: '30 horas',
        lessons: [{ id: 'l01', title: 'Fundamentos', description: 'Curso completo de AI Literacy.', duration: '30 horas', type: 'theory',
          resources: [{ id: 'r01', type: 'video', title: 'Contenido completo', downloadable: false }],
          objectives: ['Comprender IA', 'Identificar aplicaciones', 'Evaluar riesgos'],
          keyPoints: ['Fundamentos', 'Aplicaciones', 'Ética'] }]
      },
      { id: 'm02', title: 'Módulo 2: IA Generativa y Prompting', description: 'Dominio de herramientas generativas y técnicas de prompting.', duration: '60 horas',
        lessons: [{ id: 'l02', title: 'Generativa y prompting', description: 'Cursos de IA generativa y prompt engineering.', duration: '60 horas', type: 'practice',
          resources: [{ id: 'r02', type: 'exercise', title: 'Práctica intensiva', downloadable: true }],
          objectives: ['Dominar herramientas', 'Crear prompts efectivos', 'Automatizar tareas'],
          keyPoints: ['Herramientas', 'Prompts', 'Automatización'] }]
      },
      { id: 'm03', title: 'Módulo 3: Especialización', description: 'Elige tu especialización: Agentes, RAG, Automatización o Governance.', duration: '80 horas',
        lessons: [{ id: 'l03', title: 'Especialización', description: 'Curso completo de tu especialización elegida.', duration: '80 horas', type: 'practice',
          resources: [{ id: 'r03', type: 'exercise', title: 'Proyecto especializado', downloadable: true }],
          objectives: ['Especializarte', 'Desarrollar proyecto', 'Dominar área'],
          keyPoints: ['Especialización', 'Proyecto', 'Dominio'] }]
      },
      { id: 'm04', title: 'Módulo 4: Proyecto Final', description: 'Desarrollo de proyecto real con mentoría.', duration: '100 horas',
        lessons: [{ id: 'l04', title: 'Proyecto final', description: 'Desarrollo y defensa de proyecto real.', duration: '100 horas', type: 'workshop',
          resources: [{ id: 'r04', type: 'exercise', title: 'Guía de proyecto', downloadable: true }],
          objectives: ['Desarrollar proyecto', 'Aplicar conocimientos', 'Defender resultados'],
          keyPoints: ['Proyecto real', 'Mentoría', 'Defensa'] }]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Recursos completos del programa', downloadable: true }],
    bibliography: ['Bibliografía completa de todos los módulos']
  }
];
