import type { CourseContent } from '../content-types';

// CESAC AI ACADEMY - Contenido completo de los 10 programas

export const aiAcademyContent: CourseContent[] = [
  {
    productId: 'p16', productSlug: 'fundamentos-ia-generativa', productName: 'Fundamentos de IA Generativa para Profesionales',
    introduction: 'Curso introductorio diseñado para desmitificar la Inteligencia Artificial Generativa. Los participantes comprenderán cómo funcionan los LLMs, sus limitaciones actuales y cómo integrarlos éticamente en su flujo de trabajo diario sin necesidad de conocimientos técnicos avanzados.',
    methodology: '70% práctica guiada, 20% teoría aplicada, 10% reflexión. Sesiones sincrónicas semanales de 2h.',
    evaluationSystem: 'Test de conceptos fundamentales (30%). Informe de análisis de riesgo de una herramienta IA (70%).',
    certification: 'Certificado CESAC AI Academy (30 horas).',
    modules: [
      { id: 'm01', title: 'Historia y Evolución', description: 'De Turing a la Era Generativa. Hitos fundamentales y evolución tecnológica.', duration: '6 horas',
        lessons: [
          { id: 'l01', title: 'De Turing a ChatGPT', description: 'Recorrido histórico desde los primeros modelos hasta la revolución generativa.', duration: '3 horas', type: 'theory',
            resources: [{ id: 'r01', type: 'video', title: 'Historia de la IA', duration: '45 min', downloadable: false }, { id: 'r02', type: 'pdf', title: 'Timeline de la IA', pages: 10, downloadable: true }],
            objectives: ['Contextualizar la IA generativa', 'Identificar hitos clave', 'Comprender la evolución tecnológica'],
            keyPoints: ['Test de Turing', 'Redes neuronales', 'Deep Learning', 'Transformers']
          }
        ]
      },
      { id: 'm02', title: 'Cómo piensan las máquinas', description: 'Tokens, embeddings y probabilidad. Arquitectura básica de los LLMs.', duration: '8 horas',
        lessons: [
          { id: 'l02', title: 'Arquitectura de Transformers', description: 'Funcionamiento interno de los modelos de lenguaje. Tokens, embeddings y atención.', duration: '4 horas', type: 'theory',
            resources: [{ id: 'r03', type: 'video', title: 'Transformers explicados', duration: '60 min', downloadable: false }],
            objectives: ['Comprender la arquitectura Transformer', 'Entender el concepto de tokens', 'Analizar el mecanismo de atención'],
            keyPoints: ['Tokens', 'Embeddings', 'Self-attention', 'Probabilidad']
          }
        ]
      },
      { id: 'm03', title: 'El ecosistema 2026', description: 'Modelos propietarios vs. Open Source. Panorama actual de la IA generativa.', duration: '6 horas',
        lessons: [
          { id: 'l03', title: 'Modelos y proveedores', description: 'GPT-4, Claude, Gemini, Llama, Mistral. Comparativa y casos de uso.', duration: '3 horas', type: 'theory',
            resources: [{ id: 'r04', type: 'pdf', title: 'Comparativa de modelos 2026', pages: 15, downloadable: true }],
            objectives: ['Diferenciar modelos propietarios y open source', 'Identificar fortalezas de cada modelo', 'Seleccionar herramientas según caso de uso'],
            keyPoints: ['Modelos propietarios', 'Open Source', 'Casos de uso', 'Selección de herramientas']
          }
        ]
      },
      { id: 'm04', title: 'Ética y Seguridad', description: 'Deepfakes, propiedad intelectual y GDPR. Uso responsable de la IA.', duration: '6 horas',
        lessons: [
          { id: 'l04', title: 'Riesgos éticos y legales', description: 'Deepfakes, sesgos, privacidad y marco regulatorio. Principios de uso responsable.', duration: '3 horas', type: 'theory',
            resources: [{ id: 'r05', type: 'pdf', title: 'Guía de ética en IA', pages: 20, downloadable: true }],
            objectives: ['Identificar riesgos éticos', 'Aplicar principios de privacidad', 'Cumplir con GDPR en uso de IA'],
            keyPoints: ['Deepfakes', 'Propiedad intelectual', 'GDPR', 'Sesgos algorítmicos']
          }
        ]
      },
      { id: 'm05', title: 'Taller práctico', description: 'Primeros pasos con asistentes conversacionales. Aplicación real en flujo de trabajo.', duration: '4 horas',
        lessons: [
          { id: 'l05', title: 'Hands-on con LLMs', description: 'Práctica guiada con ChatGPT, Claude y otros asistentes. Casos de uso reales.', duration: '4 horas', type: 'practice',
            resources: [{ id: 'r06', type: 'exercise', title: 'Ejercicios prácticos', downloadable: true }],
            objectives: ['Usar asistentes conversacionales', 'Aplicar IA en tareas reales', 'Evaluar resultados críticamente'],
            keyPoints: ['Prompting básico', 'Evaluación de resultados', 'Integración en workflow']
          }
        ]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Guía de herramientas IA 2026', downloadable: true }],
    bibliography: ['EU AI Act', 'Libro blanco de IA de la Comisión Europea', 'Guidelines for AI Ethics']
  },
  {
    productId: 'p17', productSlug: 'prompt-engineering-avanzado', productName: 'Prompt Engineering Avanzado y Diseño de Instrucciones',
    introduction: 'Domina el arte de comunicarte con la IA. Este curso va más allá de preguntas simples, enseñando técnicas estructuradas como Chain-of-Thought, Few-Shot Learning y diseño de sistemas de prompts modulares para obtener resultados consistentes y profesionales.',
    methodology: 'Laboratorios de prompting en vivo. Uso de herramientas de evaluación automática de prompts.',
    evaluationSystem: 'Entrega de librería de prompts (50%). Proyecto de optimización de un flujo de trabajo real (50%).',
    certification: 'Certificado CESAC AI Academy (45 horas).',
    modules: [
      { id: 'm01', title: 'Fundamentos del Prompting', description: 'Contexto, instrucción y formato. Anatomía de un prompt efectivo.', duration: '8 horas',
        lessons: [
          { id: 'l01', title: 'Anatomía de un prompt', description: 'Estructura básica: contexto, instrucción, formato, ejemplos y restricciones.', duration: '4 horas', type: 'theory',
            resources: [{ id: 'r01', type: 'pdf', title: 'Guía de prompting', pages: 25, downloadable: true }],
            objectives: ['Estructurar prompts efectivos', 'Incluir elementos clave', 'Evitar ambigüedades'],
            keyPoints: ['Contexto', 'Instrucción clara', 'Formato de salida', 'Ejemplos']
          }
        ]
      },
      { id: 'm02', title: 'Técnicas Intermedias', description: 'Zero-shot vs. Few-shot learning. Cuándo y cómo usar cada técnica.', duration: '8 horas',
        lessons: [
          { id: 'l02', title: 'Zero-shot y Few-shot', description: 'Diferencias, casos de uso y mejores prácticas para cada enfoque.', duration: '4 horas', type: 'workshop',
            resources: [{ id: 'r02', type: 'exercise', title: 'Ejercicios de técnicas', downloadable: true }],
            objectives: ['Diferenciar zero-shot y few-shot', 'Aplicar cada técnica correctamente', 'Optimizar resultados'],
            keyPoints: ['Zero-shot', 'Few-shot', 'Ejemplos', 'Selección de técnica']
          }
        ]
      },
      { id: 'm03', title: 'Razonamiento Complejo', description: 'Tree-of-Thoughts y Self-Consistency. Técnicas avanzadas de razonamiento.', duration: '10 horas',
        lessons: [
          { id: 'l03', title: 'Chain-of-Thought avanzado', description: 'Tree-of-Thoughts, Self-Consistency y otras técnicas de razonamiento paso a paso.', duration: '5 horas', type: 'workshop',
            resources: [{ id: 'r03', type: 'exercise', title: 'Ejercicios de razonamiento', downloadable: true }],
            objectives: ['Implementar Chain-of-Thought', 'Usar Tree-of-Thoughts', 'Aplicar Self-Consistency'],
            keyPoints: ['Chain-of-Thought', 'Tree-of-Thoughts', 'Self-Consistency', 'Razonamiento estructurado']
          }
        ]
      },
      { id: 'm04', title: 'Prompting para Código y Datos', description: 'Estructuras JSON y SQL. Generación de código y análisis de datos con IA.', duration: '8 horas',
        lessons: [
          { id: 'l04', title: 'IA para desarrolladores', description: 'Prompts para generar código, consultas SQL y estructuras JSON.', duration: '4 horas', type: 'practice',
            resources: [{ id: 'r04', type: 'exercise', title: 'Ejercicios de código', downloadable: true }],
            objectives: ['Generar código con IA', 'Crear consultas SQL', 'Diseñar estructuras JSON'],
            keyPoints: ['Generación de código', 'SQL', 'JSON', 'Validación']
          }
        ]
      },
      { id: 'm05', title: 'Ingeniería de Sistemas', description: 'Variables, plantillas y metaprompts. Diseño de sistemas de prompts modulares.', duration: '6 horas',
        lessons: [
          { id: 'l05', title: 'Sistemas de prompts', description: 'Creación de plantillas reutilizables, variables y metaprompts para equipos.', duration: '3 horas', type: 'workshop',
            resources: [{ id: 'r05', type: 'exercise', title: 'Plantillas de prompts', downloadable: true }],
            objectives: ['Diseñar plantillas reutilizables', 'Implementar variables', 'Crear metaprompts'],
            keyPoints: ['Plantillas', 'Variables', 'Metaprompts', 'Reutilización']
          }
        ]
      },
      { id: 'm06', title: 'Optimización', description: 'Métricas de éxito y A/B testing de prompts. Evaluación y mejora continua.', duration: '5 horas',
        lessons: [
          { id: 'l06', title: 'Métricas y testing', description: 'Cómo medir el éxito de prompts y realizar A/B testing para optimización.', duration: '2.5 horas', type: 'workshop',
            resources: [{ id: 'r06', type: 'exercise', title: 'Ejercicios de optimización', downloadable: true }],
            objectives: ['Definir métricas de éxito', 'Realizar A/B testing', 'Optimizar prompts iterativamente'],
            keyPoints: ['Métricas', 'A/B testing', 'Optimización', 'Iteración']
          }
        ]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Biblioteca de prompts profesionales', downloadable: true }],
    bibliography: ['Anthropic Prompt Engineering Guide', 'OpenAI Cookbook', 'Prompt Engineering Best Practices']
  },
  {
    productId: 'p18', productSlug: 'estrategia-ia-empresarial', productName: 'Estrategia de IA Empresarial y Transformación Digital',
    introduction: 'Enfoque directivo para líderes que deben decidir dónde, cómo y por qué invertir en IA. Se centra en el alineamiento estratégico, el cálculo del ROI, la gestión del cambio cultural y la identificación de "quick wins" frente a proyectos transformadores a largo plazo.',
    methodology: 'Estudio de casos reales de empresas Fortune 500. Simulaciones de toma de decisiones directivas.',
    evaluationSystem: 'Plan Estratégico de IA (60%). Defensa oral del plan ante panel de expertos (40%).',
    certification: 'Certificado CESAC AI Academy (60 horas).',
    modules: [
      { id: 'm01', title: 'Auditoría de Madurez Digital', description: 'Evaluación del estado actual de la organización en transformación digital.', duration: '10 horas',
        lessons: [
          { id: 'l01', title: 'Diagnóstico inicial', description: 'Metodología para evaluar madurez digital y preparar el terreno para IA.', duration: '5 horas', type: 'workshop',
            resources: [{ id: 'r01', type: 'exercise', title: 'Cuestionario de madurez', downloadable: true }],
            objectives: ['Evaluar madurez digital', 'Identificar gaps', 'Establecer línea base'],
            keyPoints: ['Madurez digital', 'Gaps tecnológicos', 'Línea base']
          }
        ]
      },
      { id: 'm02', title: 'Identificación de Oportunidades', description: 'Matriz de impacto/esfuerzo para priorizar proyectos de IA.', duration: '10 horas',
        lessons: [
          { id: 'l02', title: 'Matriz de priorización', description: 'Herramientas para identificar y priorizar oportunidades de IA en la organización.', duration: '5 horas', type: 'workshop',
            resources: [{ id: 'r02', type: 'exercise', title: 'Matriz impacto/esfuerzo', downloadable: true }],
            objectives: ['Identificar oportunidades', 'Priorizar proyectos', 'Crear matriz de decisión'],
            keyPoints: ['Impacto', 'Esfuerzo', 'Priorización', 'Quick wins']
          }
        ]
      },
      { id: 'm03', title: 'Modelos de Negocio potenciados por IA', description: 'Cómo la IA transforma modelos de negocio existentes y crea nuevos.', duration: '12 horas',
        lessons: [
          { id: 'l03', title: 'Transformación de modelos', description: 'Análisis de modelos de negocio disruptivos habilitados por IA.', duration: '6 horas', type: 'theory',
            resources: [{ id: 'r03', type: 'pdf', title: 'Casos de estudio Fortune 500', pages: 30, downloadable: true }],
            objectives: ['Analizar modelos transformados', 'Identificar oportunidades', 'Diseñar nuevos modelos'],
            keyPoints: ['Modelos disruptivos', 'Casos reales', 'Oportunidades']
          }
        ]
      },
      { id: 'm04', title: 'Gestión de Talento', description: 'Upskilling y reskilling para la era de la IA.', duration: '8 horas',
        lessons: [
          { id: 'l04', title: 'Desarrollo de talento', description: 'Estrategias para upskilling y reskilling de equipos en competencias de IA.', duration: '4 horas', type: 'workshop',
            resources: [{ id: 'r04', type: 'exercise', title: 'Plan de desarrollo', downloadable: true }],
            objectives: ['Diseñar planes de upskilling', 'Implementar reskilling', 'Gestionar cambio cultural'],
            keyPoints: ['Upskilling', 'Reskilling', 'Cambio cultural']
          }
        ]
      },
      { id: 'm05', title: 'Presupuesto y Financiación', description: 'CAPEX vs. OPEX en proyectos de IA. Modelos de financiación.', duration: '10 horas',
        lessons: [
          { id: 'l05', title: 'Financiación de IA', description: 'Análisis de costes, ROI y modelos de financiación para proyectos de IA.', duration: '5 horas', type: 'theory',
            resources: [{ id: 'r05', type: 'exercise', title: 'Calculadora de ROI', downloadable: true }],
            objectives: ['Calcular ROI', 'Diferenciar CAPEX/OPEX', 'Diseñar modelos de financiación'],
            keyPoints: ['CAPEX', 'OPEX', 'ROI', 'Financiación']
          }
        ]
      },
      { id: 'm06', title: 'KPIs Estratégicos y gobierno de datos', description: 'Métricas de éxito y gobernanza de datos para IA empresarial.', duration: '10 horas',
        lessons: [
          { id: 'l06', title: 'Métricas y gobernanza', description: 'Definición de KPIs estratégicos y establecimiento de gobierno de datos.', duration: '5 horas', type: 'workshop',
            resources: [{ id: 'r06', type: 'exercise', title: 'Dashboard de KPIs', downloadable: true }],
            objectives: ['Definir KPIs estratégicos', 'Establecer gobierno de datos', 'Medir éxito de IA'],
            keyPoints: ['KPIs', 'Gobernanza', 'Métricas', 'Éxito']
          }
        ]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Plantilla de Plan Estratégico de IA', downloadable: true }],
    bibliography: ['Casos de estudio Fortune 500', 'McKinsey: The State of AI', 'Gartner: AI Strategy Guide']
  },
  {
    productId: 'p19', productSlug: 'etica-gobernanza-ia', productName: 'Ética, Gobernanza y Regulación de IA (EU AI Act)',
    introduction: 'Curso especializado en el marco legal y ético de la IA en 2026, con foco total en la aplicación práctica del EU AI Act y normativas globales emergentes. Ideal para oficiales de cumplimiento, legales y responsables de protección de datos.',
    methodology: 'Análisis de sentencias judiciales recientes y auditorías simuladas sobre datasets públicos.',
    evaluationSystem: 'Informe de clasificación de riesgo de un sistema (50%). Manual de políticas de uso interno (50%).',
    certification: 'Certificado CESAC AI Academy (40 horas).',
    modules: [
      { id: 'm01', title: 'Marco Legal Global', description: 'EU AI Act, leyes locales y estándares ISO. Panorama regulatorio completo.', duration: '8 horas',
        lessons: [
          { id: 'l01', title: 'Regulación global de IA', description: 'Análisis del EU AI Act, normativas locales y estándares internacionales.', duration: '4 horas', type: 'theory',
            resources: [{ id: 'r01', type: 'pdf', title: 'EU AI Act completo', pages: 50, downloadable: true }],
            objectives: ['Conocer EU AI Act', 'Entender normativas locales', 'Aplicar estándares ISO'],
            keyPoints: ['EU AI Act', 'Normativas locales', 'Estándares ISO', 'Cumplimiento']
          }
        ]
      },
      { id: 'm02', title: 'Clasificación de Riesgo', description: 'Prohibidas, alto riesgo, limitado y mínimo. Metodología de clasificación.', duration: '8 horas',
        lessons: [
          { id: 'l02', title: 'Niveles de riesgo', description: 'Clasificación de sistemas de IA según niveles de riesgo del EU AI Act.', duration: '4 horas', type: 'workshop',
            resources: [{ id: 'r02', type: 'exercise', title: 'Ejercicios de clasificación', downloadable: true }],
            objectives: ['Clasificar sistemas por riesgo', 'Aplicar metodología', 'Documentar decisiones'],
            keyPoints: ['Prohibidas', 'Alto riesgo', 'Limitado', 'Mínimo']
          }
        ]
      },
      { id: 'm03', title: 'Transparencia Algorítmica', description: 'Derecho a la explicación y protocolos de transparencia (XAI).', duration: '8 horas',
        lessons: [
          { id: 'l03', title: 'Explicabilidad (XAI)', description: 'Implementación de protocolos de transparencia y derecho a la explicación.', duration: '4 horas', type: 'theory',
            resources: [{ id: 'r03', type: 'pdf', title: 'Guía XAI', pages: 25, downloadable: true }],
            objectives: ['Implementar XAI', 'Garantizar transparencia', 'Cumplir derecho a explicación'],
            keyPoints: ['XAI', 'Transparencia', 'Derecho a explicación', 'Protocolos']
          }
        ]
      },
      { id: 'm04', title: 'Privacidad y Datos', description: 'Anonimización y federated learning. Protección de datos en IA.', duration: '6 horas',
        lessons: [
          { id: 'l04', title: 'Privacidad en IA', description: 'Técnicas de anonimización, federated learning y cumplimiento GDPR.', duration: '3 horas', type: 'theory',
            resources: [{ id: 'r04', type: 'exercise', title: 'Ejercicios de privacidad', downloadable: true }],
            objectives: ['Aplicar anonimización', 'Implementar federated learning', 'Cumplir GDPR'],
            keyPoints: ['Anonimización', 'Federated learning', 'GDPR', 'Privacidad']
          }
        ]
      },
      { id: 'm05', title: 'Auditoría Ética', description: 'Detección de sesgos y auditoría de algoritmos. Metodología completa.', duration: '6 horas',
        lessons: [
          { id: 'l05', title: 'Auditoría de sesgos', description: 'Metodología para auditar algoritmos y detectar sesgos discriminatorios.', duration: '3 horas', type: 'workshop',
            resources: [{ id: 'r05', type: 'exercise', title: 'Auditoría simulada', downloadable: true }],
            objectives: ['Auditar algoritmos', 'Detectar sesgos', 'Documentar hallazgos'],
            keyPoints: ['Auditoría', 'Sesgos', 'Discriminación', 'Documentación']
          }
        ]
      },
      { id: 'm06', title: 'Gobernanza Corporativa', description: 'Responsabilidades legales y estructura de gobernanza de IA.', duration: '4 horas',
        lessons: [
          { id: 'l06', title: 'Gobernanza de IA', description: 'Diseño de estructura de gobernanza y asignación de responsabilidades legales.', duration: '2 horas', type: 'theory',
            resources: [{ id: 'r06', type: 'pdf', title: 'Manual de gobernanza', pages: 20, downloadable: true }],
            objectives: ['Diseñar gobernanza', 'Asignar responsabilidades', 'Cumplir legalmente'],
            keyPoints: ['Gobernanza', 'Responsabilidades', 'Legal', 'Estructura']
          }
        ]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Manual de cumplimiento EU AI Act', downloadable: true }],
    bibliography: ['EU AI Act', 'ISO/IEC 42001', 'GDPR Guidelines for AI', 'Ethics Guidelines for Trustworthy AI']
  },
  {
    productId: 'p20', productSlug: 'ia-toma-decisiones', productName: 'IA para la Toma de Decisiones Estratégicas',
    introduction: 'Combina analítica de datos avanzada con modelos predictivos para apoyar la dirección estratégica. Los alumnos aprenderán a interpretar escenarios simulados por IA, reducir la incertidumbre en mercados volátiles y evitar sesgos cognitivos humanos mediante el apoyo de inteligencia artificial.',
    methodology: 'Uso de herramientas de simulación de negocios y análisis de grandes volúmenes de datos históricos.',
    evaluationSystem: 'Modelo predictivo aplicado a caso de estudio (60%). Presentación ejecutiva de resultados (40%).',
    certification: 'Certificado CESAC AI Academy (45 horas).',
    modules: [
      { id: 'm01', title: 'De BI a IA Predictiva', description: 'Evolución del Business Intelligence hacia la IA predictiva.', duration: '8 horas',
        lessons: [
          { id: 'l01', title: 'BI vs IA Predictiva', description: 'Diferencias entre Business Intelligence tradicional y IA predictiva.', duration: '4 horas', type: 'theory',
            resources: [{ id: 'r01', type: 'video', title: 'De BI a IA', duration: '60 min', downloadable: false }],
            objectives: ['Diferenciar BI de IA predictiva', 'Entender evolución', 'Identificar casos de uso'],
            keyPoints: ['BI tradicional', 'IA predictiva', 'Evolución', 'Casos de uso']
          }
        ]
      },
      { id: 'm02', title: 'Modelos de Forecasting', description: 'Series temporales y variables externas. Predicción de mercado.', duration: '8 horas',
        lessons: [
          { id: 'l02', title: 'Forecasting con IA', description: 'Modelos de series temporales y análisis de variables externas para predicción.', duration: '4 horas', type: 'practice',
            resources: [{ id: 'r02', type: 'exercise', title: 'Ejercicios de forecasting', downloadable: true }],
            objectives: ['Construir modelos de forecasting', 'Analizar series temporales', 'Incorporar variables externas'],
            keyPoints: ['Series temporales', 'Variables externas', 'Forecasting', 'Predicción']
          }
        ]
      },
      { id: 'm03', title: 'Simulación de Escenarios', description: 'Herramientas de Monte Carlo con IA. Análisis What-if.', duration: '10 horas',
        lessons: [
          { id: 'l03', title: 'Simulación Monte Carlo', description: 'Uso de simulación de Monte Carlo con IA para análisis de escenarios.', duration: '5 horas', type: 'practice',
            resources: [{ id: 'r03', type: 'exercise', title: 'Simulaciones', downloadable: true }],
            objectives: ['Implementar Monte Carlo', 'Analizar escenarios What-if', 'Interpretar resultados'],
            keyPoints: ['Monte Carlo', 'What-if', 'Escenarios', 'Simulación']
          }
        ]
      },
      { id: 'm04', title: 'Sesgos Cognitivos vs. Algorítmicos', description: 'Diferenciar y mitigar sesgos humanos y de IA en decisiones.', duration: '7 horas',
        lessons: [
          { id: 'l04', title: 'Sesgos en decisiones', description: 'Identificación y mitigación de sesgos cognitivos humanos y algorítmicos.', duration: '3.5 horas', type: 'theory',
            resources: [{ id: 'r04', type: 'pdf', title: 'Guía de sesgos', pages: 20, downloadable: true }],
            objectives: ['Identificar sesgos cognitivos', 'Detectar sesgos algorítmicos', 'Mitigar ambos tipos'],
            keyPoints: ['Sesgos cognitivos', 'Sesgos algorítmicos', 'Mitigación', 'Decisiones']
          }
        ]
      },
      { id: 'm05', title: 'Visualización Narrativa', description: 'Presentación efectiva de datos predictivos con storytelling.', duration: '6 horas',
        lessons: [
          { id: 'l05', title: 'Data storytelling', description: 'Técnicas de visualización narrativa para presentar datos predictivos.', duration: '3 horas', type: 'practice',
            resources: [{ id: 'r05', type: 'exercise', title: 'Ejercicios de visualización', downloadable: true }],
            objectives: ['Crear visualizaciones efectivas', 'Narrar con datos', 'Presentar insights'],
            keyPoints: ['Visualización', 'Narrativa', 'Storytelling', 'Insights']
          }
        ]
      },
      { id: 'm06', title: 'Casos de Estudio', description: 'Aplicaciones en Finanzas, Retail y Logística. Proyectos reales.', duration: '6 horas',
        lessons: [
          { id: 'l06', title: 'Casos sectoriales', description: 'Análisis de casos reales de IA para toma de decisiones en diferentes sectores.', duration: '3 horas', type: 'practice',
            resources: [{ id: 'r06', type: 'pdf', title: 'Casos de estudio', pages: 25, downloadable: true }],
            objectives: ['Analizar casos reales', 'Aplicar a tu sector', 'Extraer lecciones'],
            keyPoints: ['Finanzas', 'Retail', 'Logística', 'Casos reales']
          }
        ]
      }
    ],
    additionalResources: [{ id: 'ar01', type: 'download', title: 'Herramientas de simulación de negocios', downloadable: true }],
    bibliography: ['Predictive Analytics for Business', 'Data Science for Business', 'Case Studies in AI Decision Making']
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
