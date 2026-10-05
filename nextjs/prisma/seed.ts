import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // ============================================
  // CREATE ROLES AND USERS
  // ============================================
  
  const passwordHash = await bcrypt.hash('demo123456', 10);

  // Super Admin
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@cesac.ai' },
    update: {},
    create: {
      email: 'admin@cesac.ai',
      name: 'Administrador CESAC',
      passwordHash,
      role: 'SUPERADMIN',
      emailVerified: new Date(),
    },
  });

  // Demo users for each role
  const demoUsers = [
    { email: 'student@cesac.ai', name: 'Alumno Demo', role: 'STUDENT' as const },
    { email: 'teacher@cesac.ai', name: 'Profesor Demo', role: 'TEACHER' as const },
    { email: 'company@cesac.ai', name: 'Admin Empresa', role: 'COMPANY_ADMIN' as const },
    { email: 'public@cesac.ai', name: 'Admin Público', role: 'PUBLIC_ORG_ADMIN' as const },
    { email: 'compliance@cesac.ai', name: 'Compliance Officer', role: 'COMPLIANCE_OFFICER' as const },
    { email: 'procurement@cesac.ai', name: 'Procurement Manager', role: 'PROCUREMENT_MANAGER' as const },
    { email: 'consultant@cesac.ai', name: 'Consultor Demo', role: 'CONSULTANT' as const },
  ];

  for (const user of demoUsers) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        name: user.name,
        passwordHash,
        role: user.role,
        emailVerified: new Date(),
      },
    });
  }

  console.log('✅ Users created');

  // ============================================
  // CREATE SUBSCRIPTION PLANS
  // ============================================

  const plans = [
    {
      name: 'CESAC AI Individual',
      price: 2900, // €29.00 en centavos
      period: 'month',
      features: ['Acceso a cursos de AI Literacy', 'Tutor IA básico', 'Comunidad', 'Certificados básicos'],
    },
    {
      name: 'CESAC AI Pro',
      price: 7900,
      period: 'month',
      features: ['Todos los cursos AI Academy', 'Tutor IA avanzado', 'RAG personalizado', 'Certificados profesionales', 'Soporte prioritario'],
    },
    {
      name: 'CESAC AI Business',
      price: 29900,
      period: 'month',
      features: ['Hasta 25 usuarios', 'Todos los cursos', 'Portal empresarial', 'CRM integrado', 'Analítica avanzada', 'Account manager'],
    },
    {
      name: 'CESAC AI Governance',
      price: 49900,
      period: 'month',
      features: ['Todo lo de Business', 'Módulo Governance', 'Inventario IA', 'Evaluación de riesgos', 'Evidencias de cumplimiento', 'Consultoría incluida'],
    },
  ];

  for (const plan of plans) {
    await prisma.subscriptionPlan.upsert({
      where: { name: plan.name },
      update: {},
      create: plan,
    });
  }

  console.log('✅ Subscription plans created');

  // ============================================
  // CREATE SAMPLE PRODUCTS (5 representative)
  // ============================================

  const products = [
    {
      slug: 'policia-local',
      code: 'CESAC-OP-001',
      name: 'Preparación Policía Local',
      unitId: 'oposiciones',
      shortDescription: 'Preparación completa para las pruebas de acceso a Policía Local.',
      description: 'Programa integral de preparación para las pruebas de acceso al cuerpo de Policía Local.',
      objectives: ['Dominar el temario completo', 'Alcanzar velocidad en test', 'Resolver supuestos prácticos'],
      targetAudience: ['Mayores de 18 años', 'ESO o equivalente'],
      prerequisites: ['Dedicación mínima 4h/día'],
      modality: 'hibrido' as const,
      duration: '12 meses',
      hours: 800,
      price: 180000, // €1,800.00
      iva: 0,
      priceCompany: 150000,
      pricePublic: 0,
      image: '👮',
      category: 'oposiciones',
      program: ['Derecho Constitucional', 'Derecho Administrativo', 'Derecho Penal', 'Ley de Tráfico', 'Seguridad Ciudadana'],
      competencies: ['Conocimiento normativo', 'Resolución de supuestos'],
      learningOutcomes: ['Aplicar normativa en supuestos', 'Resolver test con 85% acierto'],
      certification: 'Certificado CESAC Oposiciones',
      startDate: '2025-02-01',
      endDate: '2026-01-31',
      places: 50,
      status: 'PUBLISHED' as const,
    },
    {
      slug: 'ai-literacy',
      code: 'CESAC-AI-001',
      name: 'AI Literacy',
      unitId: 'ai-academy',
      shortDescription: 'Programa de alfabetización en IA para profesionales.',
      description: 'Curso fundamental para comprender la IA sin conocimientos técnicos previos.',
      objectives: ['Comprender fundamentos de IA', 'Identificar aplicaciones', 'Conocer riesgos y ética'],
      targetAudience: ['Profesionales', 'Directivos', 'Sin formación técnica'],
      prerequisites: ['Ninguno'],
      modality: 'online' as const,
      duration: '4 semanas',
      hours: 30,
      price: 20000,
      iva: 21,
      priceCompany: 17000,
      pricePublic: 15000,
      image: '🎯',
      category: 'ia-academy',
      program: ['¿Qué es la IA?', 'Tipos de sistemas', 'IA generativa', 'Ética y EU AI Act'],
      competencies: ['Comprensión de IA', 'Pensamiento crítico'],
      learningOutcomes: ['Explicar IA a terceros', 'Identificar oportunidades'],
      certification: 'Certificado CESAC AI Academy (30h)',
      startDate: '2025-01-15',
      endDate: '2025-12-15',
      places: 100,
      status: 'PUBLISHED' as const,
    },
    {
      slug: 'prompt-engineering',
      code: 'CESAC-AI-003',
      name: 'Prompt Engineering',
      unitId: 'ai-academy',
      shortDescription: 'Técnicas avanzadas de ingeniería de prompts.',
      description: 'Curso especializado en creación de prompts efectivos para IA generativa.',
      objectives: ['Dominar prompt engineering', 'Obtener resultados consistentes', 'Diseñar prompts complejos'],
      targetAudience: ['Profesionales', 'Desarrolladores', 'Consultores'],
      prerequisites: ['Experiencia básica con ChatGPT'],
      modality: 'online' as const,
      duration: '5 semanas',
      hours: 40,
      price: 35000,
      iva: 21,
      priceCompany: 30000,
      pricePublic: 27000,
      image: '💬',
      category: 'ia-academy',
      program: ['Fundamentos', 'Chain-of-thought', 'Role prompting', 'Frameworks profesionales'],
      competencies: ['Comunicación con IA', 'Pensamiento estructurado'],
      learningOutcomes: ['Crear prompts consistentes', 'Diseñar biblioteca de prompts'],
      certification: 'Certificado CESAC AI Academy (40h)',
      startDate: '2025-02-01',
      endDate: '2025-12-31',
      places: 40,
      status: 'PUBLISHED' as const,
    },
    {
      slug: 'eu-ai-act',
      code: 'CESAC-GV-001',
      name: 'EU AI Act para Organizaciones',
      unitId: 'ai-governance',
      shortDescription: 'Cumplimiento del Reglamento Europeo de IA.',
      description: 'Programa integral para cumplir con el EU AI Act: clasificación, riesgos y documentación.',
      objectives: ['Clasificar sistemas IA', 'Evaluar riesgos', 'Documentar cumplimiento'],
      targetAudience: ['Responsables compliance', 'DPOs', 'CTOs'],
      prerequisites: ['Organización con IA'],
      modality: 'hibrido' as const,
      duration: '10 semanas',
      hours: 80,
      price: 150000,
      iva: 21,
      priceCompany: 130000,
      pricePublic: 120000,
      image: '⚖️',
      category: 'governance',
      program: ['EU AI Act', 'Clasificación', 'Evaluación de riesgos', 'Documentación técnica'],
      competencies: ['Cumplimiento normativo', 'Gestión de riesgos'],
      learningOutcomes: ['Completar inventario IA', 'Elaborar documentación'],
      certification: 'Certificado CESAC AI Governance (80h)',
      startDate: '2025-03-01',
      endDate: '2025-12-31',
      places: 25,
      status: 'PUBLISHED' as const,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }

  console.log('✅ Sample products created');

  // ============================================
  // CREATE SYSTEM SETTINGS
  // ============================================

  const settings = [
    { key: 'platform.name', value: 'CESAC AI', category: 'general' },
    { key: 'platform.url', value: 'https://cesac.ai', category: 'general' },
    { key: 'platform.email', value: 'info@cesac.ai', category: 'general' },
    { key: 'registration.enabled', value: 'true', category: 'auth' },
    { key: 'registration.requireEmailVerification', value: 'true', category: 'auth' },
    { key: 'ai.tutor.enabled', value: 'true', category: 'ai' },
    { key: 'ai.tutor.maxQueriesPerDay', value: '50', category: 'ai' },
    { key: 'ecommerce.currency', value: 'EUR', category: 'ecommerce' },
    { key: 'ecommerce.defaultIva', value: '21', category: 'ecommerce' },
  ];

  for (const setting of settings) {
    await prisma.systemSetting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  console.log('✅ System settings created');

  console.log('🎉 Seed completed successfully!');
  console.log('\n📧 Demo accounts:');
  console.log('   admin@cesac.ai / demo123456 (SUPERADMIN)');
  console.log('   student@cesac.ai / demo123456 (STUDENT)');
  console.log('   teacher@cesac.ai / demo123456 (TEACHER)');
  console.log('   company@cesac.ai / demo123456 (COMPANY_ADMIN)');
  console.log('   public@cesac.ai / demo123456 (PUBLIC_ORG_ADMIN)');
  console.log('   compliance@cesac.ai / demo123456 (COMPLIANCE_OFFICER)');
  console.log('   procurement@cesac.ai / demo123456 (PROCUREMENT_MANAGER)');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
