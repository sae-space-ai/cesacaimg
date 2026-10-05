import type { CourseContent } from '../content-types';

// CESAC OPOSICIONES - Contenido completo de los 8 programas

export const oposicionesContent: CourseContent[] = [
  {
    productId: 'p01',
    productSlug: 'policia-local',
    productName: 'Preparación Policía Local',
    introduction: 'Programa integral de preparación para las pruebas de acceso al cuerpo de Policía Local. Este curso te proporcionará todos los conocimientos teóricos y prácticos necesarios para superar con éxito todas las pruebas del proceso selectivo: examen tipo test, prueba de conocimientos específicos, pruebas físicas, reconocimiento médico y entrevista personal.',
    methodology: 'Metodología combinada presencial-online con clases teóricas, resolución de supuestos prácticos, simulacros cronometrados y seguimiento personalizado. Se utilizan técnicas de estudio activo, repetición espaciada y simulaciones reales de examen.',
    evaluationSystem: 'Evaluación continua mediante simulacros semanales, tests de progreso mensuales y simulacros generales trimestrales que reproducen fielmente las condiciones del examen oficial.',
    certification: 'Certificado de preparación CESAC Oposiciones con informe detallado de progreso y resultados.',
    modules: [
      {
        id: 'm01',
        title: 'Derecho Constitucional',
        description: 'Estudio de la Constitución Española de 1978: estructura, principios fundamentales, derechos y deberes, Corona, Cortes Generales, Gobierno y Administración, Poder Judicial.',
        duration: '80 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Estructura y principios de la Constitución',
            description: 'Análisis de la estructura de la CE: Título Preliminar, valores superiores, forma política del Estado, soberanía nacional.',
            duration: '8 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'Clase magistral: Estructura constitucional', duration: '90 min', downloadable: false },
              { id: 'r02', type: 'pdf', title: 'Manual de Derecho Constitucional', pages: 45, downloadable: true },
              { id: 'r03', type: 'presentation', title: 'Esquema visual Constitución', downloadable: true }
            ],
            objectives: ['Comprender la estructura de la CE', 'Identificar los valores superiores', 'Analizar la forma política del Estado'],
            keyPoints: ['Soberanía nacional', 'Monarquía parlamentaria', 'Estado social y democrático de derecho', 'Valores superiores del artículo 1']
          },
          {
            id: 'l02',
            title: 'Derechos y deberes fundamentales',
            description: 'Estudio detallado de la Sección 1ª y 2ª del Capítulo II del Título I. Derechos fundamentales, libertades públicas, derechos sociales.',
            duration: '10 horas',
            type: 'theory',
            resources: [
              { id: 'r04', type: 'video', title: 'Derechos fundamentales: análisis jurisprudencial', duration: '120 min', downloadable: false },
              { id: 'r05', type: 'article', title: 'STC relevantes sobre derechos fundamentales', downloadable: true }
            ],
            objectives: ['Diferenciar derechos fundamentales de principios rectores', 'Conocer el procedimiento del artículo 53', 'Analizar jurisprudencia constitucional'],
            keyPoints: ['Suspensión de derechos (art. 55)', 'Recurso de amparo', 'Defensor del Pueblo', 'Tutela judicial efectiva']
          }
        ],
        evaluation: {
          id: 'e01',
          title: 'Evaluación Módulo 1: Derecho Constitucional',
          type: 'test',
          description: 'Test de 50 preguntas tipo test sobre Derecho Constitucional con tiempo limitado de 45 minutos.',
          passingScore: 70,
          duration: '45 minutos',
          questions: [
            {
              id: 'q01',
              type: 'single-choice',
              text: '¿Cuál de los siguientes NO es un valor superior del ordenamiento jurídico según el artículo 1.1 CE?',
              options: ['Libertad', 'Justicia', 'Seguridad', 'Solidaridad'],
              correctAnswer: 'Seguridad',
              points: 1,
              explanation: 'Los valores superiores son libertad, justicia, igualdad y pluralismo político (art. 1.1 CE). La seguridad jurídica es un principio, no un valor superior.'
            }
          ]
        }
      },
      {
        id: 'm02',
        title: 'Derecho Administrativo',
        description: 'Organización administrativa, procedimiento administrativo común, actos administrativos, recursos administrativos, contratación del sector público.',
        duration: '100 horas',
        lessons: [
          {
            id: 'l03',
            title: 'Organización administrativa',
            description: 'Administración General del Estado, Administraciones territoriales, organismos autónomos, entidades públicas empresariales.',
            duration: '12 horas',
            type: 'theory',
            resources: [
              { id: 'r06', type: 'video', title: 'Organización administrativa española', duration: '100 min', downloadable: false },
              { id: 'r07', type: 'pdf', title: 'Esquema organización administrativa', downloadable: true }
            ],
            objectives: ['Diferenciar tipos de entidades públicas', 'Conocer la estructura ministerial', 'Identificar organismos autónomos'],
            keyPoints: ['AGE y CCAA', 'Entidades locales', 'Organismos autónomos vs entidades públicas empresariales']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Derecho Penal',
        description: 'Parte general del Código Penal: principios, delitos, penas, circunstancias modificativas. Parte especial: delitos más relevantes para Policía Local.',
        duration: '90 horas',
        lessons: [
          {
            id: 'l04',
            title: 'Principios del Derecho Penal',
            description: 'Principio de legalidad, tipicidad, antijuridicidad, culpabilidad. Aplicación de la ley penal.',
            duration: '10 horas',
            type: 'theory',
            resources: [
              { id: 'r08', type: 'video', title: 'Principios penales fundamentales', duration: '80 min', downloadable: false },
              { id: 'r09', type: 'case-study', title: 'Caso práctico: aplicación temporal de la ley penal', downloadable: true }
            ],
            objectives: ['Aplicar el principio de legalidad', 'Diferenciar tipos penales', 'Analizar la retroactividad'],
            keyPoints: ['Nullum crimen, nulla poena sine lege', 'Retroactividad de lo favorable', 'Irretroactividad de lo desfavorable']
          }
        ]
      },
      {
        id: 'm04',
        title: 'Ley de Tráfico y Seguridad Vial',
        description: 'Normativa de tráfico, infracciones y sanciones, procedimiento sancionador, permisos de conducir, responsabilidad en accidentes.',
        duration: '70 horas',
        lessons: [
          {
            id: 'l05',
            title: 'Infracciones de tráfico',
            description: 'Clasificación de infracciones: leves, graves y muy graves. Cuantía de las sanciones. Responsabilidad solidaria.',
            duration: '15 horas',
            type: 'theory',
            resources: [
              { id: 'r10', type: 'pdf', title: 'Tabla de infracciones y sanciones', pages: 28, downloadable: true },
              { id: 'r11', type: 'exercise', title: 'Supuestos prácticos de tráfico', downloadable: true }
            ],
            objectives: ['Clasificar infracciones correctamente', 'Determinar cuantía de sanciones', 'Aplicar responsabilidad solidaria'],
            keyPoints: ['Prescripción de infracciones', 'Pago con reducción', 'Retirada de puntos']
          }
        ]
      },
      {
        id: 'm05',
        title: 'Seguridad Ciudadana',
        description: 'Ley Orgánica 4/2015 de protección de la seguridad ciudadana. Protección de personas y bienes. Mantenimiento del orden público.',
        duration: '80 horas',
        lessons: [
          {
            id: 'l06',
            title: 'Infracciones administrativas en seguridad ciudadana',
            description: 'Análisis de las infracciones y sanciones de la LO 4/2015. Procedimiento sancionador.',
            duration: '20 horas',
            type: 'theory',
            resources: [
              { id: 'r12', type: 'video', title: 'LO 4/2015: análisis completo', duration: '150 min', downloadable: false },
              { id: 'r13', type: 'pdf', title: 'Guía práctica LO 4/2015', pages: 60, downloadable: true }
            ],
            objectives: ['Identificar infracciones graves y muy graves', 'Aplicar el procedimiento sancionador', 'Conocer las garantías del procedimiento'],
            keyPoints: ['Infracciones muy graves (art. 36)', 'Infracciones graves (art. 37)', 'Presunción de veracidad']
          }
        ]
      },
      {
        id: 'm06',
        title: 'Criminalística y Policía Científica',
        description: 'Técnicas de investigación criminal, preservación de la escena del crimen, cadena de custodia, identificación.',
        duration: '60 horas',
        lessons: [
          {
            id: 'l07',
            title: 'Preservación de la escena del crimen',
            description: 'Protocolos de actuación, aislamiento del lugar, recogida de evidencias, cadena de custodia.',
            duration: '15 horas',
            type: 'practice',
            resources: [
              { id: 'r14', type: 'video', title: 'Protocolo de actuación en escena', duration: '90 min', downloadable: false },
              { id: 'r15', type: 'case-study', title: 'Caso práctico: escena de accidente', downloadable: true }
            ],
            objectives: ['Aplicar protocolo de aislamiento', 'Recoger evidencias correctamente', 'Mantener cadena de custodia'],
            keyPoints: ['Primer interviniente', 'Fijación fotográfica', 'Cadena de custodia ininterrumpida']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Banco de 5.000+ preguntas tipo test', downloadable: true },
      { id: 'ar02', type: 'download', title: 'Simulacros de examen cronometrados', downloadable: true },
      { id: 'ar03', type: 'link', title: 'Plataforma de seguimiento de progreso', url: 'https://campus.cesac.ai', downloadable: false }
    ],
    bibliography: [
      'Constitución Española de 1978',
      'Ley Orgánica 2/1986 de Fuerzas y Cuerpos de Seguridad',
      'Ley Orgánica 4/2015 de protección de la seguridad ciudadana',
      'Código Penal (última edición)',
      'Real Decreto Legislativo 6/2015 (Texto Refundido de Tráfico)'
    ],
    tutorNotes: 'Se recomienda dedicar mínimo 4 horas diarias al estudio. Los simulacros deben realizarse en condiciones similares al examen real: sin consulta de material y con tiempo limitado.'
  },
  {
    productId: 'p02',
    productSlug: 'auxiliar-admin',
    productName: 'Auxiliar Administrativo',
    introduction: 'Programa completo para la preparación de oposiciones al cuerpo de Auxiliar Administrativo. Cubre el temario oficial con especial atención a la gestión administrativa, atención al ciudadano, ofimática y procedimientos.',
    methodology: 'Formación online con clases en directo semanales, materiales descargables, ejercicios prácticos y simulacros. Tutor personal asignado para resolver dudas.',
    evaluationSystem: 'Tests semanales de autoevaluación, simulacros mensuales y examen final que reproduce las condiciones oficiales.',
    certification: 'Certificado de preparación CESAC Oposiciones con informe de progreso.',
    modules: [
      {
        id: 'm01',
        title: 'Organización Administrativa',
        description: 'Administración Pública española: principios constitucionales, estructura, organismos y entidades.',
        duration: '60 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Principios constitucionales de la Administración',
            description: 'Artículo 103 CE: principios de eficacia, jerarquía, descentralización, desconcentración, coordinación y sometimiento pleno a la ley y al Derecho.',
            duration: '8 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'Principios constitucionales', duration: '75 min', downloadable: false },
              { id: 'r02', type: 'pdf', title: 'Esquema principios administrativos', downloadable: true }
            ],
            objectives: ['Conocer los principios del art. 103 CE', 'Diferenciar descentralización y desconcentración', 'Aplicar el principio de jerarquía'],
            keyPoints: ['Eficacia', 'Jerarquía', 'Descentralización', 'Sometimiento a la ley']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Procedimiento Administrativo',
        description: 'Ley 39/2015: fases del procedimiento, derechos de los interesados, actos administrativos, recursos.',
        duration: '100 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Fases del procedimiento administrativo',
            description: 'Iniciación, ordenación, instrucción, finalización. Plazos, notificaciones, registros.',
            duration: '20 horas',
            type: 'theory',
            resources: [
              { id: 'r03', type: 'video', title: 'Fases del procedimiento', duration: '120 min', downloadable: false },
              { id: 'r04', type: 'exercise', title: 'Supuestos prácticos de tramitación', downloadable: true }
            ],
            objectives: ['Identificar las fases del procedimiento', 'Aplicar plazos correctamente', 'Realizar notificaciones válidas'],
            keyPoints: ['Plazos por días hábiles', 'Notificaciones electrónicas', 'Silencio administrativo']
          }
        ]
      },
      {
        id: 'm03',
        title: 'Atención al Ciudadano',
        description: 'Sistemas de atención al público, registros, información administrativa, protección de datos.',
        duration: '50 horas',
        lessons: [
          {
            id: 'l03',
            title: 'Registros administrativos',
            description: 'Registro General, registros auxiliares, presentación electrónica, copia de documentos.',
            duration: '10 horas',
            type: 'practice',
            resources: [
              { id: 'r05', type: 'video', title: 'Gestión de registros', duration: '60 min', downloadable: false },
              { id: 'r06', type: 'pdf', title: 'Manual de registros', pages: 30, downloadable: true }
            ],
            objectives: ['Gestionar registros correctamente', 'Aplicar normativa de copia de documentos', 'Atender al ciudadano'],
            keyPoints: ['Registro electrónico general', 'Copia auténtica', 'Presentación de solicitudes']
          }
        ]
      },
      {
        id: 'm04',
        title: 'Ofimática',
        description: 'Procesador de textos, hoja de cálculo, bases de datos, presentaciones. Aplicación práctica en administración.',
        duration: '80 horas',
        lessons: [
          {
            id: 'l04',
            title: 'Procesador de textos avanzado',
            description: 'Formato de documentos, estilos, tablas, combinación de correspondencia, índices.',
            duration: '25 horas',
            type: 'practice',
            resources: [
              { id: 'r07', type: 'video', title: 'Word avanzado para administración', duration: '180 min', downloadable: false },
              { id: 'r08', type: 'exercise', title: 'Ejercicios prácticos de formato', downloadable: true }
            ],
            objectives: ['Dominar estilos y formatos', 'Crear documentos profesionales', 'Utilizar combinación de correspondencia'],
            keyPoints: ['Estilos de párrafo', 'Combinación de correspondencia', 'Índices automáticos']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Banco de 3.000+ preguntas', downloadable: true },
      { id: 'ar02', type: 'download', title: 'Simulacros de examen', downloadable: true }
    ],
    bibliography: [
      'Ley 39/2015 del Procedimiento Administrativo Común',
      'Ley 40/2015 de Régimen Jurídico del Sector Público',
      'Constitución Española',
      'Ley 7/1985 Reguladora de Bases del Régimen Local'
    ]
  },
  {
    productId: 'p03',
    productSlug: 'administrativo',
    productName: 'Administrativo',
    introduction: 'Formación especializada para el cuerpo de Administrativo con énfasis en contratación pública, gestión de RRHH y procedimientos avanzados.',
    methodology: 'Formación híbrida con sesiones presenciales mensuales y contenido online. Casos prácticos reales y simulacros.',
    evaluationSystem: 'Evaluación continua con tests, supuestos prácticos y simulacros generales.',
    certification: 'Certificado de preparación CESAC Oposiciones.',
    modules: [
      {
        id: 'm01',
        title: 'Contratación Pública',
        description: 'Ley 9/2017 de Contratos del Sector Público: tipos de contratos, procedimientos, preparación de pliegos.',
        duration: '120 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Tipos de contratos administrativos',
            description: 'Contratos de obras, concesión de obras, concesión de servicios, suministro, servicios, mixtos.',
            duration: '25 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'Tipología contractual', duration: '150 min', downloadable: false },
              { id: 'r02', type: 'pdf', title: 'Guía de contratos LCSP', pages: 80, downloadable: true }
            ],
            objectives: ['Diferenciar tipos de contratos', 'Conocer los umbrales', 'Aplicar procedimientos'],
            keyPoints: ['Contratos sujetos a regulación armonizada', 'Procedimiento abierto vs restringido', 'Criterios de adjudicación']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Gestión de Recursos Humanos',
        description: 'Estatuto Básico del Empleado Público, régimen disciplinario, situaciones administrativas, derechos retributivos.',
        duration: '100 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Situaciones administrativas',
            description: 'Servicio activo, servicios especiales, excedencia voluntaria/forzosa, suspensión de funciones.',
            duration: '20 horas',
            type: 'theory',
            resources: [
              { id: 'r03', type: 'video', title: 'Situaciones administrativas', duration: '120 min', downloadable: false }
            ],
            objectives: ['Identificar situaciones administrativas', 'Conocer efectos de cada situación', 'Aplicar normativa'],
            keyPoints: ['Excedencia voluntaria', 'Servicios especiales', 'Suspensión de funciones']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Modelos de pliegos', downloadable: true },
      { id: 'ar02', type: 'download', title: 'Banco de supuestos prácticos', downloadable: true }
    ],
    bibliography: [
      'Ley 9/2017 de Contratos del Sector Público',
      'Real Decreto Legislativo 5/2015 (TREBEP)',
      'Ley 39/2015 del Procedimiento Administrativo'
    ]
  },
  {
    productId: 'p04',
    productSlug: 'ses',
    productName: 'Servicio de Extremadura de Salud',
    introduction: 'Programa especializado para oposiciones del SES con temario específico de sanidad, estatuto marco y legislación sanitaria extremeña.',
    methodology: 'Formación online con materiales específicos del SES, simulacros y tutor especializado en sanidad.',
    evaluationSystem: 'Tests específicos del SES, simulacros con normativa sanitaria y supuestos prácticos.',
    certification: 'Certificado CESAC Oposiciones SES.',
    modules: [
      {
        id: 'm01',
        title: 'Estatuto Marco del Personal Estatutario',
        description: 'Ley 55/2003: clases de personal, derechos, deberes, régimen disciplinario, situaciones administrativas.',
        duration: '80 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Clases de personal estatutario',
            description: 'Personal funcionario, estatutario y laboral. Diferencias y régimen aplicable.',
            duration: '15 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'Clases de personal sanitario', duration: '90 min', downloadable: false },
              { id: 'r02', type: 'pdf', title: 'Cuadro comparativo de regímenes', downloadable: true }
            ],
            objectives: ['Diferenciar clases de personal', 'Conocer el régimen estatutario', 'Aplicar normativa específica'],
            keyPoints: ['Personal estatutario fijo/temporal', 'Personal funcionario', 'Personal laboral']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Legislación Sanitaria Extremeña',
        description: 'Organización sanitaria de Extremadura, SES, áreas de salud, hospitales, atención primaria.',
        duration: '70 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Organización del SES',
            description: 'Estructura del Servicio Extremeño de Salud, áreas de salud, zonas básicas, hospitales.',
            duration: '20 horas',
            type: 'theory',
            resources: [
              { id: 'r03', type: 'video', title: 'Organización SES', duration: '100 min', downloadable: false },
              { id: 'r04', type: 'pdf', title: 'Mapa sanitario de Extremadura', downloadable: true }
            ],
            objectives: ['Conocer la estructura del SES', 'Identificar áreas de salud', 'Comprender la organización territorial'],
            keyPoints: ['Áreas de salud', 'Zonas básicas de salud', 'Hospitales del SES']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Temario específico SES', downloadable: true },
      { id: 'ar02', type: 'download', title: 'Test específicos SES', downloadable: true }
    ],
    bibliography: [
      'Ley 55/2003 del Estatuto Marco',
      'Ley de Salud de Extremadura',
      'Decreto de estructura del SES'
    ]
  },
  {
    productId: 'p05',
    productSlug: 'junta-extremadura',
    productName: 'Junta de Extremadura',
    introduction: 'Preparación completa para oposiciones de la Junta de Extremadura con temario específico autonómico.',
    methodology: 'Formación híbrida con contenido específico de la normativa extremeña y simulacros adaptados.',
    evaluationSystem: 'Tests con normativa autonómica, supuestos prácticos y simulacros.',
    certification: 'Certificado CESAC Oposiciones Junta de Extremadura.',
    modules: [
      {
        id: 'm01',
        title: 'Estatuto de Autonomía de Extremadura',
        description: 'LO 1/2011: competencias, organización institucional, derechos y deberes de los extremeños.',
        duration: '80 horas',
        lessons: [
          {
            id: 'l01',
            title: 'Competencias de la Comunidad Autónoma',
            description: 'Competencias exclusivas, compartidas y de ejecución. Reforma del Estatuto.',
            duration: '25 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'Competencias autonómicas', duration: '120 min', downloadable: false },
              { id: 'r02', type: 'pdf', title: 'Cuadro de competencias', downloadable: true }
            ],
            objectives: ['Identificar competencias exclusivas', 'Diferenciar tipos de competencias', 'Conocer el procedimiento de reforma'],
            keyPoints: ['Competencias exclusivas', 'Legislación básica vs desarrollo', 'Reforma estatutaria']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Organización de la Junta de Extremadura',
        description: 'Presidente, Consejo de Gobierno, Consejerías, estructura administrativa.',
        duration: '70 horas',
        lessons: [
          {
            id: 'l02',
            title: 'El Presidente de la Junta',
            description: 'Elección, funciones, responsabilidad, cese. Relación con la Asamblea.',
            duration: '15 horas',
            type: 'theory',
            resources: [
              { id: 'r03', type: 'video', title: 'El Presidente de la Junta', duration: '80 min', downloadable: false }
            ],
            objectives: ['Conocer el proceso de elección', 'Identificar funciones', 'Comprender la responsabilidad política'],
            keyPoints: ['Investidura', 'Moción de censura', 'Cuestión de confianza']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Temario específico Junta', downloadable: true }
    ],
    bibliography: [
      'LO 1/2011 de Reforma del Estatuto de Autonomía de Extremadura',
      'Ley 1/2002 del Gobierno y de la Administración de la Comunidad Autónoma',
      'Constitución Española'
    ]
  },
  {
    productId: 'p06',
    productSlug: 'admin-local',
    productName: 'Administración Local',
    introduction: 'Formación para oposiciones en entidades locales: ayuntamientos, diputaciones y mancomunidades.',
    methodology: 'Formación online con casos prácticos de administración local y normativa específica.',
    evaluationSystem: 'Tests con normativa local, supuestos prácticos municipales.',
    certification: 'Certificado CESAC Oposiciones Administración Local.',
    modules: [
      {
        id: 'm01',
        title: 'Régimen Local',
        description: 'Ley 7/1985: municipios, provincias, islas, comarcas. Organización y competencias.',
        duration: '100 horas',
        lessons: [
          {
            id: 'l01',
            title: 'El Municipio',
            description: 'Elementos del municipio, población, término municipal, organización municipal.',
            duration: '25 horas',
            type: 'theory',
            resources: [
              { id: 'r01', type: 'video', title: 'El Municipio español', duration: '120 min', downloadable: false },
              { id: 'r02', type: 'pdf', title: 'Organización municipal', pages: 40, downloadable: true }
            ],
            objectives: ['Conocer elementos del municipio', 'Diferenciar órganos', 'Aplicar normativa local'],
            keyPoints: ['Alcalde, Pleno, Junta de Gobierno', 'Competencias municipales', 'Régimen de concejo abierto']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Hacienda Local',
        description: 'Ley Reguladora de las Haciendas Locales: tributos locales, presupuesto, patrimonio.',
        duration: '90 horas',
        lessons: [
          {
            id: 'l02',
            title: 'Tributos locales',
            description: 'Impuestos directos e indirectos, tasas, contribuciones especiales.',
            duration: '30 horas',
            type: 'theory',
            resources: [
              { id: 'r03', type: 'video', title: 'Tributos locales', duration: '150 min', downloadable: false }
            ],
            objectives: ['Identificar tributos locales', 'Conocer hechos imponibles', 'Aplicar normativa'],
            keyPoints: ['IBI, IAE, IVTM', 'Tasas municipales', 'Plusvalía']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Temario régimen local', downloadable: true }
    ],
    bibliography: [
      'Ley 7/1985 Reguladora de Bases del Régimen Local',
      'RD Legislativo 2/2004 (TRLRHL)',
      'Ley 39/2015 del Procedimiento Administrativo'
    ]
  },
  {
    productId: 'p07',
    productSlug: 'talleres-legislacion',
    productName: 'Talleres de Legislación y Preparación Específica',
    introduction: 'Talleres monográficos intensivos sobre materias específicas de dificultad para opositores.',
    methodology: 'Talleres intensivos de 4 semanas con sesiones en directo, materiales específicos y tutor personal.',
    evaluationSystem: 'Evaluación continua con ejercicios prácticos y test de progreso.',
    certification: 'Certificado de asistencia CESAC Oposiciones.',
    modules: [
      {
        id: 'm01',
        title: 'Taller de Derecho Constitucional Avanzado',
        description: 'Profundización en temas complejos: TC, derechos fundamentales, reforma constitucional.',
        duration: '40 horas',
        lessons: [
          {
            id: 'l01',
            title: 'El Tribunal Constitucional',
            description: 'Composición, competencias, procedimientos, recursos. Jurisprudencia relevante.',
            duration: '15 horas',
            type: 'workshop',
            resources: [
              { id: 'r01', type: 'video', title: 'El TC en profundidad', duration: '100 min', downloadable: false },
              { id: 'r02', type: 'article', title: 'STC más relevantes', downloadable: true }
            ],
            objectives: ['Conocer la composición del TC', 'Identificar sus competencias', 'Analizar jurisprudencia clave'],
            keyPoints: ['Recurso de inconstitucionalidad', 'Cuestión de inconstitucionalidad', 'Recurso de amparo']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Material del taller', downloadable: true }
    ],
    bibliography: [
      'LO 2/1979 del Tribunal Constitucional',
      'Constitución Española',
      'Jurisprudencia constitucional relevante'
    ]
  },
  {
    productId: 'p08',
    productSlug: 'simulacros-test',
    productName: 'Simulacros y Banco de Test',
    introduction: 'Plataforma digital con más de 15.000 preguntas organizadas por temas y simulacros cronometrados.',
    methodology: 'Autoestudio con plataforma online, estadísticas de rendimiento y sistema de repaso adaptativo.',
    evaluationSystem: 'Simulacros cronometrados que reproducen condiciones reales de examen.',
    certification: 'No incluye certificación, solo acceso a la plataforma.',
    modules: [
      {
        id: 'm01',
        title: 'Banco de Preguntas por Temas',
        description: 'Más de 15.000 preguntas organizadas por temas, subtemas y nivel de dificultad.',
        duration: 'Acceso 12 meses',
        lessons: [
          {
            id: 'l01',
            title: 'Preguntas de Derecho Constitucional',
            description: 'Más de 2.000 preguntas sobre Constitución Española.',
            duration: 'Autoestudio',
            type: 'practice',
            resources: [
              { id: 'r01', type: 'exercise', title: 'Test de Constitucional', downloadable: false }
            ],
            objectives: ['Practicar con preguntas reales', 'Identificar temas débiles', 'Mejorar velocidad'],
            keyPoints: ['Preguntas con respuesta justificada', 'Niveles de dificultad', 'Estadísticas de acierto']
          }
        ]
      },
      {
        id: 'm02',
        title: 'Simulacros Cronometrados',
        description: 'Simulacros que reproducen fielmente las condiciones del examen oficial.',
        duration: 'Acceso 12 meses',
        lessons: [
          {
            id: 'l02',
            title: 'Simulacro tipo examen oficial',
            description: 'Simulacro con mismo número de preguntas, tiempo y condiciones que el examen real.',
            duration: '2 horas',
            type: 'evaluation',
            resources: [
              { id: 'r02', type: 'quiz', title: 'Simulacro completo', downloadable: false }
            ],
            objectives: ['Simular condiciones reales', 'Gestionar el tiempo', 'Evaluar nivel real'],
            keyPoints: ['Tiempo limitado', 'Mismo formato que examen', 'Estadísticas detalladas']
          }
        ]
      }
    ],
    additionalResources: [
      { id: 'ar01', type: 'download', title: 'Informes de progreso', downloadable: true },
      { id: 'ar02', type: 'download', title: 'Análisis de temas débiles', downloadable: true }
    ],
    bibliography: []
  }
];
