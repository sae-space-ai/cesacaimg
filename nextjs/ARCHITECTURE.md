# 🏗️ ARQUITECTURA - CESAC AI

## 📊 VISIÓN GENERAL

CESAC AI es una plataforma full-stack construida con Next.js 14 (App Router), diseñada como un **modular monolith** que puede escalar a microservicios si es necesario.

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENTE                              │
│  (Browser / Mobile / PWA)                                   │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTPS
┌────────────────────▼────────────────────────────────────────┐
│                    VERCEL EDGE NETWORK                       │
│  (CDN + Edge Functions + Serverless)                        │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                  NEXT.JS APPLICATION                         │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Server       │  │ Client       │  │ API Routes   │     │
│  │ Components   │  │ Components   │  │              │     │
│  │ (SSR/SSG)    │  │ ('use client')│ │ (REST)       │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Server       │  │ Middleware   │  │ Edge         │     │
│  │ Actions      │  │ (Auth/RBAC)  │  │ Functions    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
┌───────▼──────┐ ┌──▼──────┐ ┌──▼──────┐
│ PostgreSQL   │ │ Stripe  │ │ AI APIs │
│ + pgvector   │ │         │ │ (RAG)   │
└──────────────┘ └─────────┘ └─────────┘
```

---

## 🗂️ ESTRUCTURA DE DIRECTORIOS

```
nextjs/
├── app/                          # App Router (Next.js 14)
│   ├── (public)/                 # Grupo: Páginas públicas
│   │   ├── page.tsx              # Home (Server Component)
│   │   ├── formacion/            # Catálogo y detalle
│   │   ├── [unit]/               # Páginas de unidades
│   │   ├── sobre/
│   │   └── contacto/
│   │
│   ├── (auth)/                   # Grupo: Autenticación
│   │   └── auth/page.tsx         # Login/Registro
│   │
│   ├── (protected)/              # Grupo: Rutas protegidas
│   │   ├── dashboard/            # Panel de usuario
│   │   ├── campus/               # LMS
│   │   ├── ai-tutor/             # Tutor IA
│   │   ├── admin/                # Panel admin
│   │   ├── profesor/             # Aula profesor
│   │   └── carrito/              # Ecommerce
│   │
│   ├── api/                      # API Routes
│   │   ├── health/               # Health check
│   │   ├── products/             # CRUD productos
│   │   ├── ai/tutor/             # Tutor IA (RAG)
│   │   └── webhooks/stripe/      # Webhooks de pago
│   │
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Estilos globales
│
├── components/                   # Componentes React
│   ├── Layout.tsx                # Layout principal
│   └── ui/                       # Componentes UI reutilizables
│
├── lib/                          # Lógica de negocio
│   ├── actions.ts                # Server Actions
│   ├── auth.ts                   # NextAuth config
│   ├── prisma.ts                 # Prisma client
│   ├── stripe.ts                 # Stripe integration
│   ├── data.ts                   # Datos maestros
│   └── store.tsx                 # Estado global (RBAC)
│
├── prisma/                       # Base de datos
│   ├── schema.prisma             # Modelo de datos
│   ├── migrations/               # Migraciones
│   └── seed.ts                   # Datos iniciales
│
├── middleware.ts                 # Middleware (auth, security)
├── next.config.js                # Configuración Next.js
└── vercel.json                   # Configuración Vercel
```

---

## 🎨 ARQUITECTURA DE COMPONENTES

### Server Components (SSR/SSG)

**Ventajas:**
- Menor bundle size (no se envía JS al cliente)
- SEO optimizado
- Fetching directo en servidor
- Streaming

**Uso:**
- Páginas estáticas (Home, About, Legal)
- Catálogo de productos (SSG con `generateStaticParams`)
- Detalle de producto (SSR)
- Metadata dinámica

### Client Components (`'use client'`)

**Ventajas:**
- Interactividad completa
- Estado local (useState, useReducer)
- Event handlers
- Browser APIs

**Uso:**
- Formularios (auth, contacto)
- Filtros y búsqueda
- Dashboard interactivo
- Campus/LMS
- Tutor IA (chat)
- Panel admin

---

## 🔐 ARQUITECTURA DE AUTENTICACIÓN

### NextAuth.js con JWT

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Login   │────▶│  NextAuth│────▶│   JWT    │
│  Form    │     │  Handler │     │  Token   │
└──────────┘     └──────────┘     └──────────┘
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │  Middleware  │
                                  │  (Validate)  │
                                  └──────────────┘
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │ Server       │
                                  │ Components   │
                                  └──────────────┘
```

### RBAC (Role-Based Access Control)

**16 Roles:**
```typescript
type UserRole = 
  | 'VISITOR' | 'STUDENT' | 'PROFESSIONAL' 
  | 'COMPANY_USER' | 'COMPANY_ADMIN' 
  | 'PUBLIC_EMPLOYEE' | 'PUBLIC_ORG_ADMIN' 
  | 'TEACHER' | 'TUTOR' | 'CONSULTANT' 
  | 'CONTENT_MANAGER' | 'SALES' 
  | 'PROCUREMENT_MANAGER' | 'COMPLIANCE_OFFICER' 
  | 'ADMIN' | 'SUPERADMIN';
```

**Funciones de autorización:**
```typescript
canAccessAdmin(role)        // ADMIN, SUPERADMIN
canAccessTeacher(role)      // TEACHER, TUTOR, ADMIN, etc.
canAccessGovernance(role)   // COMPLIANCE_OFFICER, ADMIN, etc.
canAccessProcurement(role)  // PROCUREMENT_MANAGER, ADMIN, etc.
```

---

## 💾 ARQUITECTURA DE DATOS

### PostgreSQL + Prisma ORM

```
┌─────────────────────────────────────────┐
│           PostgreSQL + pgvector         │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │ Users    │  │ Products │           │
│  └──────────┘  └──────────┘           │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │ Orders   │  │ Enrollments│         │
│  └──────────┘  └──────────┘           │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │ AI       │  │ Audit    │           │
│  │ Knowledge│  │ Events   │           │
│  └──────────┘  └──────────┘           │
└─────────────────────────────────────────┘
```

### Entidades Principales

**Usuarios y Autenticación:**
- User, Account, Session, VerificationToken

**Organizaciones:**
- Organization, OrganizationMember

**Catálogo:**
- Product, ProductVersion

**LMS:**
- Course, CourseModule, Lesson, Enrollment, Cohort, LearningProgress

**Evaluación:**
- Assessment, Question, ExamAttempt, Answer

**Comercio:**
- Order, OrderItem, Payment, Coupon, Subscription

**IA:**
- AIKnowledgeSource, AIConversation, AIMessage, AIAgent, AgentExecution

**Governance:**
- AIInventoryItem, RiskAssessment

**Procurement:**
- ProcurementOpportunity, Bid

**Auditoría:**
- AuditEvent, Consent, PrivacyRequest

---

## 🤖 ARQUITECTURA DE IA (RAG)

### Retrieval-Augmented Generation

```
┌──────────┐
│  Usuario │
└────┬─────┘
     │ Pregunta
     ▼
┌──────────────────┐
│  AI Tutor API    │
└────┬─────────────┘
     │
     ├──────────────┐
     │              │
     ▼              ▼
┌─────────┐   ┌──────────┐
│ Retrieve│   │ Generate │
│ Sources │   │ Response │
└────┬────┘   └────┬─────┘
     │              │
     ▼              │
┌─────────┐         │
│ pgvector│         │
│ Search  │         │
└────┬────┘         │
     │              │
     └──────────────┘
            │
            ▼
     ┌──────────┐
     │ Response │
     │ + Sources│
     └──────────┘
```

### Pipeline RAG

1. **Ingesta**: Documentos → Chunking → Embeddings → pgvector
2. **Recuperación**: Query → Embedding → Similarity search → Top K
3. **Generación**: Context + Query → LLM → Response + Citations
4. **Validación**: Confidence score + Source verification

### Agentes IA

```typescript
// Agentes disponibles
- CESAC Tutor Agent      // Asistencia educativa
- CESAC Opposition Agent // Preparación oposiciones
- CESAC Teacher Agent    // Asistencia profesores
- CESAC Business Agent   // Consultoría empresarial
- CESAC Governance Agent // Compliance AI Act
- CESAC Procurement Agent// Licitaciones
```

---

## 💳 ARQUITECTURA DE PAGOS

### Stripe Integration

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Carrito │────▶│  Create  │────▶│  Stripe  │
│          │     │  Order   │     │  Payment │
└──────────┘     └──────────┘     └──────────┘
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │  Webhook     │
                                  │  Handler     │
                                  └──────────────┘
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │  Auto-       │
                                  │  Enroll      │
                                  └──────────────┘
```

### Flujos

**Compra única:**
1. Usuario añade productos al carrito
2. Crea Order (status: PENDING)
3. Crea PaymentIntent en Stripe
4. Usuario completa pago
5. Webhook actualiza Order (status: PAID)
6. Auto-enroll en productos

**Suscripción:**
1. Usuario elige plan
2. Crea Customer en Stripe
3. Crea Subscription
4. Webhook actualiza estado
5. Renovación automática

---

## 🔒 ARQUITECTURA DE SEGURIDAD

### Capas de Seguridad

```
┌─────────────────────────────────────┐
│  1. Edge Network (Vercel)           │
│     - DDoS protection               │
│     - Rate limiting                 │
└─────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  2. Middleware                      │
│     - Authentication                │
│     - Authorization (RBAC)          │
│     - Security headers              │
└─────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  3. Server Actions / API Routes     │
│     - Input validation (Zod)        │
│     - Business logic validation     │
│     - Audit logging                 │
└─────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  4. Database                        │
│     - Prisma (SQL injection safe)   │
│     - Row-level security            │
│     - Encrypted secrets             │
└─────────────────────────────────────┘
```

### Headers de Seguridad

```typescript
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Protección de Rutas

```typescript
// middleware.ts
const protectedRoutes = ['/dashboard', '/campus', '/admin'];
const adminRoutes = ['/admin'];

if (isProtectedRoute && !session) {
  return NextResponse.redirect('/auth');
}

if (isAdminRoute && !canAccessAdmin(user.role)) {
  return NextResponse.redirect('/dashboard');
}
```

---

## 📊 ARQUITECTURA DE ANALYTICS

### Event Tracking

```typescript
// Eventos tracked
- page_view
- registration
- checkout_started
- purchase_completed
- enrollment_completed
- lesson_started
- lesson_completed
- assessment_started
- assessment_completed
- certificate_issued
- ai_query
- subscription_started
```

### Audit Trail

```typescript
// AuditEvent model
{
  actorId: string,      // Quién
  action: string,       // Qué
  entity: string,       // Sobre qué
  entityId: string,     // ID específico
  metadata: Json,       // Detalles
  timestamp: DateTime   // Cuándo
}
```

---

## 🚀 ESCALABILIDAD

### Horizontal Scaling

- **Vercel Serverless**: Auto-scaling automático
- **PostgreSQL**: Read replicas (Supabase/Neon)
- **CDN**: Edge caching para estáticos

### Optimizaciones

- **Server Components**: Menor bundle size
- **Static Generation**: SSG para páginas públicas
- **Incremental Static Regeneration**: ISR para catálogo
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automático por ruta

### Límites Actuales

- **Usuarios concurrentes**: ~10,000 (Vercel Pro)
- **API requests/second**: ~1,000 (serverless)
- **Database connections**: ~100 (connection pooling)
- **File storage**: Unlimited (Vercel Blob)

---

## 🔄 FLUJOS PRINCIPALES

### Flujo B2C (Particular)

```
Descubrir → Registrarse → Comprar → Matricular → Aprender → Evaluar → Certificar
```

### Flujo B2B (Empresa)

```
Lead → Diagnóstico → Propuesta → Organización → Usuarios → Formación → Evidencias
```

### Flujo B2G (Administración)

```
Oportunidad → BID/NO BID → Oferta → Adjudicación → Cohortes → Formación → Memoria
```

### Flujo Governance

```
Organización → Inventario IA → Evaluación → Riesgo → Controles → Evidencias
```

---

## 📚 TECNOLOGÍAS

### Frontend
- **Next.js 14** (App Router)
- **React 18** (Server Components)
- **TypeScript** (Estricto)
- **Tailwind CSS 4**
- **Lucide React** (Iconos)

### Backend
- **Next.js API Routes**
- **Server Actions**
- **NextAuth.js** (Autenticación)
- **Prisma ORM**
- **PostgreSQL** + **pgvector**

### Integraciones
- **Stripe** (Pagos)
- **OpenAI/Anthropic** (IA)
- **Resend** (Email)
- **Vercel Blob** (Storage)

### Deploy
- **Vercel** (Hosting)
- **GitHub Actions** (CI/CD)
- **Supabase/Neon** (Database)

---

**Última actualización:** 2025-01-15  
**Versión:** 1.0.0
