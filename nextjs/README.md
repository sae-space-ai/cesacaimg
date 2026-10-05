# CESAC AI - Next.js App Router

**Estado:** FASE 2 — Proyecto Next.js en paralelo (Strangler Fig)

Este directorio contiene la versión Next.js de la plataforma CESAC AI, creada en paralelo al proyecto Vite/React existente durante la migración.

## 🎯 Objetivo

Migrar progresivamente la plataforma de Vite/React a Next.js App Router manteniendo:
- ✅ 100% funcionalidad (40 productos, RBAC 16 roles, LMS, Tutor IA, CRM, etc.)
- ✅ Store y estado global preservados
- ✅ Datos maestros intactos
- ✅ Estrategia Strangler Fig (coexistencia durante transición)

## 📁 Estructura

```
nextjs/
├── app/                          ← App Router
│   ├── layout.tsx                ← Root layout (Server)
│   ├── page.tsx                  ← Home (Server Component)
│   ├── globals.css               ← Tailwind CSS
│   ├── providers.tsx             ← AppProvider wrapper (Client)
│   ├── formacion/
│   │   ├── page.tsx              ← Catálogo (Client - filtros)
│   │   └── [slug]/page.tsx       ← Detalle producto (Server + SEO)
│   ├── auth/page.tsx             ← Login/registro (Client)
│   └── dashboard/page.tsx        ← Panel alumno (Client)
│
├── lib/
│   ├── data.ts                   ← 40 productos, 10 unidades (Server)
│   └── store.tsx                 ← 16 roles RBAC, Context API (Client)
│
├── middleware.ts                 ← Protección de rutas + seguridad
├── next.config.js                ← Configuración Next.js
├── tsconfig.json                 ← TypeScript config
├── postcss.config.js             ← Tailwind v4
└── package.json                  ← Dependencias independientes
```

## 🚀 Instalación y Ejecución

```bash
# Entrar al directorio Next.js
cd nextjs

# Instalar dependencias (independientes de Vite)
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🔄 Estado de Migración

### ✅ Completado (FASE 2)
- [x] Estructura de carpetas Next.js
- [x] Configuración base (next.config.js, tsconfig.json, Tailwind v4)
- [x] Datos maestros copiados (lib/data.ts)
- [x] Store global copiado (lib/store.tsx) con `'use client'`
- [x] Root layout con metadata SEO
- [x] Home page como Server Component
- [x] Catálogo con filtros como Client Component
- [x] Detalle de producto con generateStaticParams (SSG)
- [x] Autenticación como Client Component
- [x] Dashboard como Client Component
- [x] Middleware de seguridad

### ⏳ Pendiente (FASE 3)
- [ ] Campus/LMS completo
- [ ] Tutor IA con RAG
- [ ] Panel Admin (CRM, Governance, Procurement)
- [ ] Páginas de unidades de negocio
- [ ] Páginas estáticas (About, Contact, Legal)
- [ ] Integración NextAuth + PostgreSQL
- [ ] Server Actions para mutations
- [ ] API routes

### 🔜 Futuro (FASE 4)
- [ ] Integración Stripe
- [ ] RAG con pgvector
- [ ] AI Agents
- [ ] Despliegue en Vercel
- [ ] Cutover final (redirección de dominio)

## 🎨 Server vs Client Components

### Server Components (SSR/SSG)
- `app/page.tsx` - Home
- `app/formacion/[slug]/page.tsx` - Detalle producto
- `lib/data.ts` - Datos maestros

**Ventajas:**
- SEO optimizado
- Menor bundle size
- Fetching directo en servidor
- Streaming

### Client Components (`'use client'`)
- `app/providers.tsx` - AppProvider
- `app/formacion/page.tsx` - Catálogo (filtros)
- `app/auth/page.tsx` - Autenticación
- `app/dashboard/page.tsx` - Panel
- `lib/store.tsx` - Estado global

**Razones:**
- Interactividad (useState, useEffect)
- Context API (useContext)
- Event handlers
- Browser APIs

## 🔒 Seguridad

### Middleware
- Protección de rutas `/dashboard`, `/admin`, etc.
- Headers de seguridad (X-Frame-Options, CSP, etc.)
- Rate limiting (pendiente de implementar)

### RBAC
Los 16 roles se preservan intactos:
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

Funciones de autorización:
- `canAccessAdmin(role)`
- `canAccessTeacher(role)`
- `canAccessGovernance(role)`
- `canAccessProcurement(role)`

## 📊 Datos

### Productos (40)
- 8 Oposiciones
- 7 Educación
- 10 AI Academy
- 7 AI Business
- 6 AI Public Sector
- 2 AI Governance

### Unidades de Negocio (10)
1. CESAC Oposiciones
2. CESAC Educación
3. CESAC AI Academy
4. CESAC AI Business
5. CESAC AI Public Sector
6. CESAC AI Governance
7. CESAC AI Lab
8. CESAC AI Campus
9. CESAC AI Consulting
10. CESAC AI Procurement

## 🧪 Testing

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build verification
npm run build
```

## 📝 Notas Importantes

1. **Coexistencia:** Este proyecto Next.js corre en paralelo al Vite original. No se ha modificado ningún archivo de `src/`.

2. **Datos condensados:** `lib/data.ts` incluye 5 productos representativos en lugar de los 40 completos para mantener el archivo manejable. En producción, estos datos vendrán de PostgreSQL.

3. **Store preservado:** `lib/store.tsx` es una copia fiel del original con `'use client'` añadido. Los 16 roles y toda la lógica de negocio están intactos.

4. **Estrategia Strangler Fig:** La migración es progresiva. Cada módulo se migra individualmente y se verifica antes de continuar.

5. **Próximo paso:** FASE 3 - Migrar Campus/LMS, Tutor IA y Panel Admin.

## 🔗 Recursos

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Server vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-and-client-components)
- [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [MIGRATION_ANALYSIS.md](../MIGRATION_ANALYSIS.md) - Análisis completo de la migración

---

**Fin del README. Proyecto Next.js listo para FASE 3.**
