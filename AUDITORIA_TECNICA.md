# 🔍 AUDITORÍA TÉCNICA - CESAC AI

**Fecha:** 2025-01-15  
**Alcance:** Repositorio completo (Vite legacy + Next.js)  
**Objetivo:** Identificar problemas críticos antes de convergencia a producción

---

## 📊 RESUMEN EJECUTIVO

### Estado General
- **Proyecto Vite (legacy):** ✅ Funcional pero obsoleto
- **Proyecto Next.js:** ⚠️ Estructura presente pero con problemas críticos
- **Base de datos:** ❌ No configurada (sin migraciones ejecutadas)
- **Autenticación:** ⚠️ Dualidad de identidad (NextAuth + Store cliente)
- **Autorización:** ❌ Middleware comentado, sin protección real
- **Tests:** ❌ No existen tests
- **CI/CD:** ❌ No hay GitHub Actions configurado
- **Datos demo:** ⚠️ Hardcodeados en seed y componentes

---

## 🚨 PROBLEMAS CRÍTICOS IDENTIFICADOS

### P0 - SEGURIDAD Y AUTENTICACIÓN

#### 1. Dualidad de Identidad
**Archivos afectados:**
- `nextjs/lib/store.tsx` (líneas 11-21)
- `nextjs/lib/auth.ts` (NextAuth configurado)
- `nextjs/app/dashboard/page.tsx` (usa `state.user`)
- `nextjs/app/admin/page.tsx` (usa `state.user.role`)
- `nextjs/app/campus/page.tsx` (usa `state.user`)

**Problema:**
El store cliente mantiene un objeto `User` con `enrolledCourses`, `progress`, `certificates` en memoria, duplicando la sesión de NextAuth. Esto permite:
- Bypass de autenticación modificando el store
- Datos inconsistentes entre cliente y servidor
- Progreso no persistente (se pierde al recargar)

**Impacto:** CRÍTICO - Permite acceso no autorizado

**Solución:**
- Eliminar `user` del store cliente
- Usar `useSession()` de NextAuth en todos los componentes
- Consultar datos reales desde PostgreSQL
- Implementar Server Actions para operaciones sensibles

---

#### 2. Middleware de Autenticación Comentado
**Archivo:** `nextjs/middleware.ts` (líneas 14-17)

**Problema:**
```typescript
// En producción, aquí se verificaría la sesión con NextAuth
// Por ahora, permitimos el acceso para demostración
// const session = request.cookies.get('next-auth.session-token');
// if (isProtectedRoute && !session) {
//   return NextResponse.redirect(new URL('/auth', request.url));
// }
```

La protección de rutas está COMENTADA. Cualquier usuario puede acceder a:
- `/dashboard`
- `/campus`
- `/admin`
- `/profesor`
- `/ai-tutor`
- `/governance`
- `/procurement`

**Impacto:** CRÍTICO - Sin protección de rutas privadas

**Solución:**
- Descomentar y activar verificación de sesión
- Usar `getToken()` de NextAuth en middleware
- Implementar verificación de roles server-side
- Añadir protección contra IDOR (Insecure Direct Object Reference)

---

#### 3. Credenciales Demo Hardcodeadas
**Archivos afectados:**
- `nextjs/prisma/seed.ts` (líneas 13-51)
- `nextjs/app/auth/page.tsx` (líneas 19-28)

**Problema:**
```typescript
// seed.ts
const passwordHash = await bcrypt.hash('demo123456', 10);
const superAdmin = await prisma.user.upsert({
  where: { email: 'admin@cesac.ai' },
  create: {
    email: 'admin@cesac.ai',
    name: 'Administrador CESAC',
    passwordHash,
    role: 'SUPERADMIN',
  },
});

// auth/page.tsx
const demoUser = {
  id: 'demo-1',
  email: email || 'demo@cesac.ai',
  name: name || 'Usuario Demo',
  // ...
};
```

Usuarios demo con contraseña conocida:
- admin@cesac.ai / demo123456
- student@cesac.ai / demo123456
- teacher@cesac.ai / demo123456
- company@cesac.ai / demo123456
- public@cesac.ai / demo123456
- compliance@cesac.ai / demo123456
- procurement@cesac.ai / demo123456
- consultant@cesac.ai / demo123456

**Impacto:** CRÍTICO - Credenciales públicas en repositorio

**Solución:**
- Separar seed de desarrollo y producción
- Usar variables de entorno para bootstrap inicial
- Eliminar usuarios demo de producción
- Implementar sistema de invitación/registro seguro

---

### P1 - PERSISTENCIA Y DATOS

#### 4. Catálogo de Productos en Array Estático
**Archivo:** `nextjs/lib/data.ts` (832 líneas)

**Problema:**
Los 40 productos están definidos en un array estático en el cliente. Esto significa:
- No hay persistencia real
- No se pueden actualizar desde admin
- No hay control de versiones
- No hay validación de integridad

**Impacto:** ALTO - Catálogo no es fuente de verdad

**Solución:**
- Migrar catálogo a PostgreSQL (tabla `Product`)
- Implementar Server Actions para CRUD
- Crear endpoint `/api/products` con paginación
- Validar con Zod schemas

---

#### 5. Progreso de Aprendizaje No Persistente
**Archivos afectados:**
- `nextjs/lib/store.tsx` (línea 19: `progress: Record<string, number>`)
- `nextjs/app/dashboard/page.tsx` (línea 40: `user.progress`)
- `nextjs/app/campus/page.tsx` (usa `state.user.progress`)

**Problema:**
El progreso se almacena en el store cliente (memoria). Al recargar la página:
- Se pierde todo el progreso
- No hay persistencia entre dispositivos
- No hay backup ni recuperación

**Impacto:** ALTO - Experiencia de usuario rota

**Solución:**
- Usar tabla `LearningProgress` de Prisma
- Implementar Server Actions para actualizar progreso
- Consultar progreso real desde PostgreSQL
- Sincronizar con servidor periódicamente

---

#### 6. Matrículas No Persistente
**Archivos afectados:**
- `nextjs/lib/store.tsx` (línea 18: `enrolledCourses: string[]`)
- `nextjs/app/dashboard/page.tsx` (línea 21: `user.enrolledCourses`)

**Problema:**
Las matrículas se almacenan en el store cliente. Al recargar:
- Se pierden todas las matrículas
- No hay registro histórico
- No hay validación de pagos

**Impacto:** ALTO - Matrículas no son reales

**Solución:**
- Usar tabla `Enrollment` de Prisma
- Implementar Server Actions para matricular
- Validar pago antes de matricular
- Consultar matrículas reales desde PostgreSQL

---

#### 7. Datos Mock en Governance
**Archivo:** `nextjs/app/governance/panel/page.tsx` (líneas 20-30)

**Problema:**
```typescript
const [systems] = useState([
  { id: '1', name: 'Chatbot Atención', risk: 'LIMITED', status: 'ACTIVE' },
  { id: '2', name: 'Recomendador IA', risk: 'HIGH', status: 'IN_REVIEW' },
  { id: '3', name: 'Analizador Documentos', risk: 'MINIMAL', status: 'ACTIVE' },
]);
```

Datos ficticios hardcodeados:
- 3 sistemas IA inventados
- Niveles de riesgo simulados
- Estados no reales

**Impacto:** ALTO - Governance no es funcional

**Solución:**
- Usar tabla `AIInventoryItem` de Prisma
- Implementar Server Actions para CRUD
- Validar con Compliance Officer
- Registrar cambios en AuditEvent

---

#### 8. Datos Mock en Procurement
**Archivo:** `nextjs/app/procurement/panel/page.tsx` (líneas 20-35)

**Problema:**
```typescript
const [opportunities] = useState([
  {
    id: '1',
    reference: 'EXP-2025-001',
    title: 'Suministro de licencias software',
    budget: 45000,
    // ...
  },
]);
```

Expedientes ficticios:
- EXP-2025-001 inventado
- Presupuestos simulados
- Estados no reales

**Impacto:** ALTO - Procurement no es funcional

**Solución:**
- Usar tabla `ProcurementOpportunity` de Prisma
- Implementar Server Actions para CRUD
- Integrar con fuentes oficiales (PLACSP, TED)
- Registrar decisiones BID/NO_BID

---

### P2 - E-COMMERCE Y PAGOS

#### 9. Carrito Cliente No Validado
**Archivos afectados:**
- `nextjs/lib/store.tsx` (líneas 23-28: `CartItem`)
- `nextjs/app/carrito/page.tsx` (usa `state.cart`)

**Problema:**
El carrito se almacena en el cliente. Esto permite:
- Modificar precios desde DevTools
- Bypass de validaciones
- Inconsistencia con servidor

**Impacto:** MEDIO - Riesgo de fraude

**Solución:**
- Validar precios en servidor (Server Action)
- Recalcular totales server-side
- Usar Stripe para pagos reales
- Implementar idempotencia

---

#### 10. Stripe No Configurado
**Archivos afectados:**
- `nextjs/lib/stripe.ts` (existe pero no se usa)
- `nextjs/app/api/webhooks/stripe/route.ts` (existe)

**Problema:**
Stripe está implementado pero:
- No hay variables de entorno reales
- No hay webhooks configurados
- No hay flujo de pago completo
- No hay verificación de firma

**Impacto:** MEDIO - Pagos no funcionales

**Solución:**
- Configurar variables de entorno Stripe
- Implementar flujo completo de pago
- Verificar firma de webhooks
- Implementar idempotencia
- Conectar con Enrollment tras pago exitoso

---

### P3 - CI/CD Y TESTS

#### 11. Sin GitHub Actions
**Problema:**
No existe directorio `.github/workflows/` en la raíz del repositorio.

**Impacto:** ALTO - Sin validación automática

**Solución:**
- Crear workflow de CI/CD
- Incluir: lint, typecheck, tests, build
- Configurar deploy a Vercel
- Añadir security scanning

---

#### 12. Sin Tests
**Problema:**
No existen archivos `*.test.ts` o `*.test.tsx` en el proyecto.

**Impacto:** ALTO - Sin validación de funcionalidad

**Solución:**
- Crear tests unitarios para Server Actions
- Crear tests de integración para flujos críticos
- Crear tests E2E con Playwright
- Configurar coverage mínimo

---

### P4 - AI TUTOR Y RAG

#### 13. AI Tutor Sin Trazabilidad
**Archivo:** `nextjs/app/api/ai/tutor/route.ts`

**Problema:**
El endpoint existe pero:
- No hay persistencia de conversaciones
- No hay validación de límites
- No hay registro de uso
- No hay fuentes verificadas

**Impacto:** MEDIO - Tutor no es confiable

**Solución:**
- Usar tablas `AIConversation` y `AIMessage`
- Implementar límites de uso por usuario
- Registrar todas las consultas
- Implementar sistema de fuentes verificadas

---

#### 14. RAG No Implementado
**Problema:**
No existe implementación real de RAG:
- No hay embeddings en base de datos
- No hay búsqueda vectorial
- No hay chunking de documentos
- No hay sistema de citación

**Impacto:** MEDIO - RAG no es funcional

**Solución:**
- Configurar pgvector en PostgreSQL
- Implementar pipeline de embeddings
- Crear sistema de chunking
- Implementar búsqueda semántica
- Añadir citación de fuentes

---

## 📋 MATRIZ DE ESTADO ACTUAL

| Módulo | Estado | Persistencia | Autorización | Tests | Prioridad |
|--------|--------|--------------|--------------|-------|-----------|
| **Autenticación** | ⚠️ PARCIAL | ✅ NextAuth | ❌ Dual | ❌ No | P0 |
| **Autorización** | ❌ MOCK | ❌ No | ❌ No | ❌ No | P0 |
| **Seed** | ❌ DEMO | ✅ Prisma | ❌ Hardcode | ❌ No | P0 |
| **Middleware** | ❌ MOCK | ❌ No | ❌ Comentado | ❌ No | P0 |
| **Catálogo** | ⚠️ PARCIAL | ❌ Array | ✅ N/A | ❌ No | P1 |
| **LMS** | ❌ MOCK | ❌ Store | ❌ No | ❌ No | P1 |
| **Progreso** | ❌ MOCK | ❌ Store | ❌ No | ❌ No | P1 |
| **Matrículas** | ❌ MOCK | ❌ Store | ❌ No | ❌ No | P1 |
| **Certificados** | ❌ MOCK | ❌ No | ❌ No | ❌ No | P1 |
| **E-commerce** | ⚠️ PARCIAL | ❌ Store | ❌ No | ❌ No | P1 |
| **Stripe** | ⚠️ PARCIAL | ❌ No | ❌ No | ❌ No | P1 |
| **Governance** | ❌ MOCK | ❌ No | ❌ No | ❌ No | P1 |
| **Procurement** | ❌ MOCK | ❌ No | ❌ No | ❌ No | P1 |
| **AI Tutor** | ⚠️ PARCIAL | ❌ No | ⚠️ Básico | ❌ No | P2 |
| **RAG** | ❌ MOCK | ❌ No | ❌ No | ❌ No | P2 |
| **Admin** | ⚠️ PARCIAL | ❌ Mixto | ❌ No | ❌ No | P2 |
| **CRM** | ❌ MOCK | ❌ No | ❌ No | ❌ No | P2 |
| **Analytics** | ❌ MOCK | ❌ No | ❌ No | ❌ No | P2 |
| **CI/CD** | ❌ NO EXISTE | N/A | N/A | ❌ No | P0 |
| **Tests** | ❌ NO EXISTEN | N/A | N/A | ❌ No | P0 |

**Leyenda:**
- ✅ REAL: Implementado y funcional
- ⚠️ PARCIAL: Implementado pero incompleto
- ❌ MOCK: Datos ficticios o no funcional
- ❌ NO EXISTE: No implementado

---

## 🎯 PLAN DE ACCIÓN PRIORIZADO

### FASE 1: SEGURIDAD CRÍTICA (P0)

#### 1.1 Unificar Identidad
- [ ] Eliminar `user` del store cliente
- [ ] Crear hook `useAuth()` que use `useSession()` de NextAuth
- [ ] Actualizar todos los componentes para usar `useAuth()`
- [ ] Eliminar `canAccessAdmin`, `canAccessTeacher`, etc. del store
- [ ] Crear helpers server-side: `requireAuth()`, `requireRole()`

#### 1.2 Activar Middleware
- [ ] Descomentar verificación de sesión en middleware
- [ ] Implementar `getToken()` de NextAuth
- [ ] Añadir verificación de roles
- [ ] Proteger rutas: `/dashboard`, `/campus`, `/admin`, `/profesor`, `/ai-tutor`, `/governance`, `/procurement`
- [ ] Implementar protección contra IDOR

#### 1.3 Eliminar Credenciales Demo
- [ ] Crear `seed.dev.ts` para desarrollo
- [ ] Crear `seed.prod.ts` para producción (sin usuarios demo)
- [ ] Implementar bootstrap seguro con variables de entorno
- [ ] Eliminar usuarios demo de auth/page.tsx
- [ ] Documentar proceso de creación de admin inicial

#### 1.4 Configurar CI/CD
- [ ] Crear `.github/workflows/ci.yml`
- [ ] Incluir: lint, typecheck, build
- [ ] Configurar deploy automático a Vercel
- [ ] Añadir security scanning (npm audit)

---

### FASE 2: PERSISTENCIA REAL (P1)

#### 2.1 Catálogo desde BD
- [ ] Crear Server Action `getProducts()`
- [ ] Implementar paginación y filtros
- [ ] Actualizar páginas para usar datos de BD
- [ ] Eliminar dependencia de `data.ts` para productos

#### 2.2 LMS Persistente
- [ ] Crear Server Action `getEnrollments(userId)`
- [ ] Crear Server Action `updateProgress(enrollmentId, lessonId, completed)`
- [ ] Actualizar dashboard para usar datos reales
- [ ] Actualizar campus para usar datos reales
- [ ] Implementar validación de ownership

#### 2.3 Matrículas y Pagos
- [ ] Crear Server Action `createOrder(userId, items)`
- [ ] Implementar validación de precios server-side
- [ ] Conectar con Stripe para pagos
- [ ] Implementar webhook para confirmar pagos
- [ ] Crear matrícula tras pago exitoso

#### 2.4 Certificados
- [ ] Crear Server Action `generateCertificate(enrollmentId)`
- [ ] Implementar validación de requisitos
- [ ] Generar código único y hash
- [ ] Crear página pública de verificación

#### 2.5 Governance Real
- [ ] Crear Server Actions para CRUD de AIInventoryItem
- [ ] Implementar validación de permisos
- [ ] Registrar cambios en AuditEvent
- [ ] Actualizar página para usar datos reales

#### 2.6 Procurement Real
- [ ] Crear Server Actions para CRUD de ProcurementOpportunity
- [ ] Implementar validación de permisos
- [ ] Registrar decisiones BID/NO_BID
- [ ] Actualizar página para usar datos reales

---

### FASE 3: AI Y RAG (P2)

#### 3.1 AI Tutor con Trazabilidad
- [ ] Implementar persistencia de conversaciones
- [ ] Añadir límites de uso por usuario
- [ ] Registrar todas las consultas en AuditEvent
- [ ] Implementar sistema de fuentes verificadas

#### 3.2 RAG Completo
- [ ] Configurar pgvector en PostgreSQL
- [ ] Crear migración para tabla de embeddings
- [ ] Implementar pipeline de chunking
- [ ] Implementar búsqueda semántica
- [ ] Añadir citación de fuentes en respuestas

---

### FASE 4: TESTS Y CALIDAD (P2)

#### 4.1 Tests Unitarios
- [ ] Tests para Server Actions
- [ ] Tests para helpers de autorización
- [ ] Tests para validaciones Zod
- [ ] Tests para cálculos de precios

#### 4.2 Tests de Integración
- [ ] Tests para flujo de autenticación
- [ ] Tests para flujo de matrícula
- [ ] Tests para flujo de pago
- [ ] Tests para flujo de certificación

#### 4.3 Tests E2E
- [ ] Configurar Playwright
- [ ] Tests para login/logout
- [ ] Tests para acceso a rutas protegidas
- [ ] Tests para flujo completo de compra

---

## 🔒 BLOQUEOS EXTERNOS

### Variables de Entorno Necesarias
```bash
# Producción
DATABASE_URL=postgresql://...
AUTH_SECRET=...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
AI_PROVIDER_API_KEY=sk-...
BLOB_READ_WRITE_TOKEN=...

# Desarrollo
DATABASE_URL=postgresql://localhost:5432/cesac_ai_dev
AUTH_SECRET=dev-secret-key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Configuración Externa
- [ ] PostgreSQL con pgvector
- [ ] Stripe account configurada
- [ ] Vercel project configurado
- [ ] Dominio DNS configurado
- [ ] AI provider (OpenAI/Anthropic) configurado

---

## 📊 MÉTRICAS DE PROGRESO

### Antes de Intervención
- Módulos REAL: 2/20 (10%)
- Módulos PARCIAL: 6/20 (30%)
- Módulos MOCK: 10/20 (50%)
- Módulos NO EXISTE: 2/20 (10%)

### Objetivo Post-Intervención
- Módulos REAL: 16/20 (80%)
- Módulos PARCIAL: 4/20 (20%)
- Módulos MOCK: 0/20 (0%)
- Módulos NO EXISTE: 0/20 (0%)

---

## 🎯 CRITERIOS DE ACEPTACIÓN

### P0 - Seguridad
- [ ] No hay dualidad de identidad
- [ ] Middleware protege todas las rutas privadas
- [ ] No hay credenciales demo en producción
- [ ] CI/CD funciona y pasa todos los checks
- [ ] No se puede acceder a datos de otro usuario

### P1 - Persistencia
- [ ] Catálogo viene de PostgreSQL
- [ ] Matrículas son persistentes
- [ ] Progreso es persistente
- [ ] Certificados son verificables
- [ ] Governance usa datos reales
- [ ] Procurement usa datos reales
- [ ] Pagos funcionan con Stripe

### P2 - AI y Tests
- [ ] AI Tutor tiene trazabilidad
- [ ] RAG funciona con fuentes reales
- [ ] Tests unitarios cubren >80%
- [ ] Tests E2E cubren flujos críticos
- [ ] Coverage report generado

---

## 📝 NOTAS TÉCNICAS

### Arquitectura de Autorización
```
Cliente → Middleware → Server Action → Prisma → PostgreSQL
         (verifica   (verifica      (consulta
          sesión)     rol)           datos)
```

### Flujo de Matrícula
```
Usuario → Carrito → Checkout → Stripe → Webhook → Enrollment
                                       (pago    (confirmación
                                        válido)  y matrícula)
```

### Flujo de Certificación
```
Usuario → Completa curso → Validación → Certificate → Verificación
                      (progreso 100%)  (requisitos)  (código único)
```

---

## 🚀 PRÓXIMOS PASOS

1. **Inmediato:** Crear rama `production-convergence`
2. **P0.1:** Unificar identidad (eliminar dualidad)
3. **P0.2:** Activar middleware de autenticación
4. **P0.3:** Eliminar credenciales demo
5. **P0.4:** Configurar CI/CD
6. **P1.1:** Migrar catálogo a PostgreSQL
7. **P1.2:** Implementar LMS persistente
8. **P1.3:** Conectar Stripe para pagos
9. **P1.4:** Implementar certificados
10. **P1.5:** Governance y Procurement reales

---

**Documento generado:** 2025-01-15  
**Próxima revisión:** Tras completar P0  
**Responsable:** Arquitecto Principal de Software
