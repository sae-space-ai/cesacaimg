import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// AI Tutor API - RAG-based responses with source citations
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const { message, conversationId, courseId } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 });
    }

    // 1. Retrieve relevant knowledge sources (RAG)
    const relevantSources = await retrieveRelevantSources(message, courseId);

    // 2. Generate response using AI provider
    const aiResponse = await generateAIResponse(message, relevantSources);

    // 3. Save conversation
    let convId = conversationId;
    if (!convId) {
      const conversation = await prisma.aIConversation.create({
        data: {
          userId: session.user.id,
          title: message.substring(0, 50),
        },
      });
      convId = conversation.id;
    }

    // Save user message
    await prisma.aIMessage.create({
      data: {
        conversationId: convId,
        role: 'user',
        content: message,
      },
    });

    // Save AI response
    await prisma.aIMessage.create({
      data: {
        conversationId: convId,
        role: 'assistant',
        content: aiResponse.content,
        sources: aiResponse.sources,
        confidence: aiResponse.confidence,
      },
    });

    // Log AI query event
    await prisma.auditEvent.create({
      data: {
        actorId: session.user.id,
        action: 'AI_QUERY',
        entity: 'AIConversation',
        entityId: convId,
        metadata: { messageLength: message.length, sourcesCount: relevantSources.length },
      },
    });

    return NextResponse.json({
      conversationId: convId,
      response: aiResponse,
    });
  } catch (error) {
    console.error('AI Tutor error:', error);
    return NextResponse.json(
      { error: 'Error procesando consulta' },
      { status: 500 }
    );
  }
}

// RAG: Retrieve relevant sources from knowledge base
async function retrieveRelevantSources(query: string, courseId?: string) {
  // In production, use pgvector for semantic search
  // For now, return mock sources based on query keywords
  const sources = [];

  if (query.toLowerCase().includes('ai act') || query.toLowerCase().includes('reglamento')) {
    sources.push({
      type: 'OFICIAL',
      title: 'EU AI Act - Reglamento (UE) 2024/1689',
      page: 1,
      content: 'El Reglamento de Inteligencia Artificial establece un marco jurídico...',
    });
  }

  if (query.toLowerCase().includes('oposicion') || query.toLowerCase().includes('administracion')) {
    sources.push({
      type: 'CESAC',
      title: 'Módulo 1 - Derecho Administrativo',
      page: 15,
      content: 'El procedimiento administrativo común se rige por la Ley 39/2015...',
    });
  }

  if (query.toLowerCase().includes('prompt') || query.toLowerCase().includes('ia generativa')) {
    sources.push({
      type: 'CESAC',
      title: 'Prompt Engineering - Módulo 3',
      page: 28,
      content: 'Las técnicas de prompting incluyen zero-shot, few-shot y chain-of-thought...',
    });
  }

  // Default source if no specific match
  if (sources.length === 0) {
    sources.push({
      type: 'INTERPRETACIÓN',
      title: 'Base de conocimiento CESAC AI',
      page: 0,
      content: 'Información general basada en materiales de formación CESAC.',
    });
  }

  return sources;
}

// Generate AI response using configured provider
async function generateAIResponse(query: string, sources: any[]) {
  // In production, call OpenAI/Anthropic/etc.
  // For now, return a structured mock response
  
  const context = sources.map(s => s.content).join('\n\n');
  
  // Simulate AI generation
  const response = {
    content: `Basándome en las fuentes disponibles:\n\n${sources.map(s => `- ${s.title}: ${s.content}`).join('\n')}\n\n**Nivel de confianza:** ${sources.some(s => s.type === 'OFICIAL') ? 'Alto (92%)' : 'Medio (75%)}\n\n⚠️ Esta respuesta es generada por IA. Verifica la información crítica con las fuentes oficiales.`,
    sources: sources.map(s => ({
      type: s.type,
      title: s.title,
      page: s.page,
    })),
    confidence: sources.some(s => s.type === 'OFICIAL') ? 0.92 : 0.75,
  };

  return response;
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;
  const conversationId = searchParams.get('conversationId');

  try {
    if (conversationId) {
      const conversation = await prisma.aIConversation.findUnique({
        where: { id: conversationId, userId: session.user.id },
        include: {
          messages: {
            orderBy: { createdAt: 'asc' },
          },
        },
      });

      return NextResponse.json(conversation);
    }

    // List conversations
    const conversations = await prisma.aIConversation.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: 'desc' },
      take: 20,
      include: {
        messages: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return NextResponse.json(conversations);
  } catch (error) {
    console.error('AI Tutor GET error:', error);
    return NextResponse.json(
      { error: 'Error obteniendo conversaciones' },
      { status: 500 }
    );
  }
}
