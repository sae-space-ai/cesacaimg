'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// ============================================
// AUTHENTICATION ACTIONS
// ============================================

export async function updateUserProfile(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return { error: 'No autorizado' };
  }

  const schema = z.object({
    name: z.string().min(2),
    avatar: z.string().url().optional(),
  });

  const validated = schema.safeParse({
    name: formData.get('name'),
    avatar: formData.get('avatar'),
  });

  if (!validated.success) {
    return { error: 'Datos inválidos' };
  }

  try {
    await prisma.user.update({
      where: { email: session.user.email },
      data: validated.data,
    });

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    return { error: 'Error al actualizar perfil' };
  }
}

// ============================================
// ENROLLMENT ACTIONS
// ============================================

export async function enrollInCourse(productId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect('/auth');
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return { error: 'Usuario no encontrado' };
  }

  const existingEnrollment = await prisma.enrollment.findUnique({
    where: {
      userId_productId: {
        userId: user.id,
        productId,
      },
    },
  });

  if (existingEnrollment) {
    return { error: 'Ya estás matriculado en este curso' };
  }

  try {
    await prisma.enrollment.create({
      data: {
        userId: user.id,
        productId,
        status: 'active',
        progress: 0,
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/campus');
    return { success: true };
  } catch (error) {
    return { error: 'Error al matricular' };
  }
}

export async function updateLessonProgress(enrollmentId: string, lessonId: string, completed: boolean) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return { error: 'No autorizado' };
  }

  try {
    await prisma.learningProgress.upsert({
      where: {
        enrollmentId_lessonId: {
          enrollmentId,
          lessonId,
        },
      },
      update: { completed },
      create: {
        enrollmentId,
        lessonId,
        completed,
      },
    });

    // Calculate overall progress
    const totalLessons = await prisma.lesson.count({
      where: {
        module: {
          course: {
            enrollments: {
              some: { id: enrollmentId },
            },
          },
        },
      },
    });

    const completedLessons = await prisma.learningProgress.count({
      where: {
        enrollmentId,
        completed: true,
      },
    });

    const progress = Math.round((completedLessons / totalLessons) * 100);

    await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: { progress },
    });

    revalidatePath('/campus');
    return { success: true, progress };
  } catch (error) {
    return { error: 'Error al actualizar progreso' };
  }
}

// ============================================
// CART & ORDER ACTIONS
// ============================================

export async function createOrder(items: Array<{ productId: string; quantity: number }>) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return { error: 'No autorizado' };
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return { error: 'Usuario no encontrado' };
  }

  // Fetch products and calculate totals
  const products = await prisma.product.findMany({
    where: {
      id: { in: items.map(i => i.productId) },
    },
  });

  const subtotal = products.reduce((sum, product) => {
    const item = items.find(i => i.productId === product.id);
    return sum + (product.price * (item?.quantity || 1));
  }, 0);

  const tax = Math.round(subtotal * 0.21); // 21% IVA
  const total = subtotal + tax;

  try {
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        status: 'PENDING',
        subtotal,
        tax,
        total,
        items: {
          create: items.map(item => {
            const product = products.find(p => p.id === item.productId);
            return {
              productId: item.productId,
              quantity: item.quantity,
              price: product?.price || 0,
              total: (product?.price || 0) * item.quantity,
            };
          }),
        },
      },
    });

    revalidatePath('/carrito');
    return { success: true, orderId: order.id };
  } catch (error) {
    return { error: 'Error al crear pedido' };
  }
}

// ============================================
// ADMIN ACTIONS
// ============================================

export async function updateProductStatus(productId: string, status: 'DRAFT' | 'REVIEW' | 'PUBLISHED' | 'ARCHIVED') {
  const session = await getServerSession(authOptions);
  if (!session?.user || !['ADMIN', 'SUPERADMIN', 'CONTENT_MANAGER'].includes(session.user.role)) {
    return { error: 'No autorizado' };
  }

  try {
    await prisma.product.update({
      where: { id: productId },
      data: { status },
    });

    revalidatePath('/admin');
    revalidatePath('/formacion');
    return { success: true };
  } catch (error) {
    return { error: 'Error al actualizar estado' };
  }
}

export async function createProduct(data: {
  name: string;
  slug: string;
  code: string;
  unitId: string;
  price: number;
  modality: 'online' | 'presencial' | 'hibrido' | 'asincrono';
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !['ADMIN', 'SUPERADMIN', 'CONTENT_MANAGER'].includes(session.user.role)) {
    return { error: 'No autorizado' };
  }

  try {
    const product = await prisma.product.create({
      data: {
        ...data,
        shortDescription: '',
        description: '',
        objectives: [],
        targetAudience: [],
        prerequisites: [],
        duration: '',
        hours: 0,
        iva: 21,
        priceCompany: 0,
        pricePublic: 0,
        program: [],
        competencies: [],
        learningOutcomes: [],
        certification: '',
        startDate: '',
        endDate: '',
        places: 0,
        category: 'general',
        status: 'DRAFT',
      },
    });

    revalidatePath('/admin');
    return { success: true, productId: product.id };
  } catch (error) {
    return { error: 'Error al crear producto' };
  }
}

export async function updateUserRole(userId: string, role: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !['ADMIN', 'SUPERADMIN'].includes(session.user.role)) {
    return { error: 'No autorizado' };
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { role: role as any },
    });

    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { error: 'Error al actualizar rol' };
  }
}

// ============================================
// AI TUTOR ACTIONS
// ============================================

export async function saveConversation(userId: string, messages: any[]) {
  try {
    const conversation = await prisma.aIConversation.create({
      data: {
        userId,
        messages: {
          create: messages.map(msg => ({
            role: msg.role,
            content: msg.content,
            sources: msg.sources,
            confidence: msg.confidence,
          })),
        },
      },
    });

    return { success: true, conversationId: conversation.id };
  } catch (error) {
    return { error: 'Error al guardar conversación' };
  }
}

export async function getConversationHistory(userId: string, limit = 10) {
  try {
    const conversations = await prisma.aIConversation.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        messages: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    return { success: true, conversations };
  } catch (error) {
    return { error: 'Error al obtener historial' };
  }
}

// ============================================
// GOVERNANCE ACTIONS
// ============================================

export async function registerAIInventoryItem(data: {
  name: string;
  purpose: string;
  provider?: string;
  model?: string;
  riskLevel: 'MINIMAL' | 'LIMITED' | 'HIGH' | 'PROHIBITED';
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !['ADMIN', 'SUPERADMIN', 'COMPLIANCE_OFFICER'].includes(session.user.role)) {
    return { error: 'No autorizado' };
  }

  try {
    const item = await prisma.aIInventoryItem.create({
      data,
    });

    revalidatePath('/governance');
    return { success: true, itemId: item.id };
  } catch (error) {
    return { error: 'Error al registrar sistema IA' };
  }
}

export async function createRiskAssessment(inventoryItemId: string, assessment: {
  riskLevel: string;
  findings: any;
  mitigations?: any;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !['ADMIN', 'SUPERADMIN', 'COMPLIANCE_OFFICER'].includes(session.user.role)) {
    return { error: 'No autorizado' };
  }

  try {
    const risk = await prisma.riskAssessment.create({
      data: {
        inventoryItemId,
        assessor: session.user.email!,
        riskLevel: assessment.riskLevel as any,
        findings: assessment.findings,
        mitigations: assessment.mitigations,
      },
    });

    revalidatePath('/governance');
    return { success: true, assessmentId: risk.id };
  } catch (error) {
    return { error: 'Error al crear evaluación de riesgo' };
  }
}

// ============================================
// PROCUREMENT ACTIONS
// ============================================

export async function createProcurementOpportunity(data: {
  reference: string;
  title: string;
  contractingAuthority: string;
  cpv: string;
  budget?: number;
  deadline: Date;
  url?: string;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !['ADMIN', 'SUPERADMIN', 'PROCUREMENT_MANAGER'].includes(session.user.role)) {
    return { error: 'No autorizado' };
  }

  try {
    const opportunity = await prisma.procurementOpportunity.create({
      data,
    });

    revalidatePath('/procurement');
    return { success: true, opportunityId: opportunity.id };
  } catch (error) {
    return { error: 'Error al crear oportunidad' };
  }
}

export async function updateBidDecision(opportunityId: string, decision: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !['ADMIN', 'SUPERADMIN', 'PROCUREMENT_MANAGER'].includes(session.user.role)) {
    return { error: 'No autorizado' };
  }

  try {
    await prisma.procurementOpportunity.update({
      where: { id: opportunityId },
      data: {
        bidDecision: decision,
        status: decision === 'BID' ? 'BID' : 'NO_BID',
      },
    });

    revalidatePath('/procurement');
    return { success: true };
  } catch (error) {
    return { error: 'Error al actualizar decisión' };
  }
}

// ============================================
// AUDIT ACTIONS
// ============================================

export async function logAuditEvent(data: {
  action: string;
  entity: string;
  entityId?: string;
  metadata?: any;
}) {
  const session = await getServerSession(authOptions);

  try {
    await prisma.auditEvent.create({
      data: {
        actorId: session?.user?.id,
        action: data.action,
        entity: data.entity,
        entityId: data.entityId,
        metadata: data.metadata,
        ipAddress: '', // TODO: Get from request
        userAgent: '', // TODO: Get from request
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error logging audit event:', error);
    return { error: 'Error al registrar evento' };
  }
}

export async function getAuditLogs(filters?: {
  entity?: string;
  actorId?: string;
  startDate?: Date;
  endDate?: Date;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !['ADMIN', 'SUPERADMIN'].includes(session.user.role)) {
    return { error: 'No autorizado' };
  }

  try {
    const logs = await prisma.auditEvent.findMany({
      where: filters,
      orderBy: { createdAt: 'desc' },
      take: 100,
      include: {
        actor: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return { success: true, logs };
  } catch (error) {
    return { error: 'Error al obtener logs' };
  }
}
