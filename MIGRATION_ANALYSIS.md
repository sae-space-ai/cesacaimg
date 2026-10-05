# 📋 INFORME DE MIGRACIÓN: Vite/React → Next.js App Router

**Proyecto:** CESAC AI  
**Fecha:** 2025-01-15  
**Arquitecto:** Senior Software Architect  
**Estado:** FASE 1 — ANÁLISIS Y PREPARACIÓN (Pendiente de aprobación)

---

## 🎯 OBJETIVO

Migrar la plataforma CESAC AI de Vite/React a Next.js App Router manteniendo:
- ✅ 100% funcionalidad actual (40 productos, RBAC, LMS, Tutor IA, CRM, etc.)
- ✅ Los 16 roles RBAC intactos
- ✅ Store y estado global preservados
- ✅ Estrategia Strangler Fig (coexistencia durante transición)

---

## 📊 ANÁLISIS DE COMPATIBILIDAD

### ✅ Archivos 100% Compatibles con Next.js Server Components

| Archivo | Líneas | Uso de Hooks | Cliente/Servidor | Notas |
|---------|--------|--------------|------------------|-------|
| `lib/data.ts` | 829 | ❌ Ninguno | **SERVIDOR** ✅ | Datos estáticos, tipos, interfaces. Perfecto para Server Components. |
| `pages/Home.tsx` | ~250 | ❌ Ninguno | **SERVIDOR** ✅ | Solo Link y datos estáticos. Migración directa. |
| `pages/Static.tsx` | ~350 | ⚠️ `useApp` en Cart | **HÍBRIDO** | Cart necesita `'use client'`, resto puede ser Server. |

### ⚠️ Archivos que Requieren `'use client'`

| Archivo | Líneas | Hooks Usados | Razón |
|---------|--------|--------------|-------|
| `lib/store.tsx` | 132 | `createContext`, `useContext`, `useReducer` | **Estado global con Context API** — OBLIGATORIO cliente |
| `components/Layout.tsx` | ~250 | `useState` | Menú móvil, dropdowns, notificaciones |
| `pages/Auth.tsx` | ~150 | `useState` | Formularios de login/registro |
| `pages/Dashboard.tsx` | ~200 | `useApp` | Lee estado del usuario |
| `pages/Campus.tsx` | ~300 | `useState`, `useApp` | LMS interactivo, tutor IA |
| `pages/Products.tsx` | ~250 | `useState`, `useMemo`, `useApp` | Filtros, búsqueda, carrito |
| `pages/Admin.tsx` | ~800 | `useState`, `useApp` | Panel admin completo |

### 📦 Dependencias Actuales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",        // ❌ Se reemplaza por Next.js routing
  "lucide-react": "^0.294.0",          // ✅ Compatible
  "framer-motion": "^11.16.1",         // ✅ Compatible (requiere 'use client')
  "recharts": "^2.10.0",               // ✅ Compatible (requiere 'use client')
  "uuid": "^9.0.1",                    // ✅ Compatible
  "date-fns": "^2.30.0",               // ✅ Compatible
  "@dnd-kit/*": "^6.x",                // ✅ Compatible (requiere 'use client')
  "@supabase/supabase-js": "^2.98.0",  // ⚠️ Requiere migración a Server Actions
  "canvas-confetti": "^1.9.3"          // ✅ Compatible (requiere 'use client')
}
```

---

## 🗺️ MAPA DE COMPONENTES: CLIENTE vs SERVIDOR

### 🔵 SERVER COMPONENTS (Next.js App Router)

```
app/
├── page.tsx                          ← Home (Server)
├── formacion/
│   ├── page.tsx                      ← Catalog (Server + Client filters)
│   └── [slug]/page.tsx               ← ProductDetail (Server)
├── ia/page.tsx                       ← UnitPage (Server)
├── oposiciones/page.tsx              ← UnitPage (Server)
├── educacion/page.tsx                ← UnitPage (Server)
├── empresas/page.tsx                 ← UnitPage (Server)
├── administraciones/page.tsx         ← UnitPage (Server)
├── governance/page.tsx               ← UnitPage (Server)
├── lab/page.tsx                      ← UnitPage (Server)
├── consultoria/page.tsx              ← UnitPage (Server)
├── procurement/page.tsx              ← UnitPage (Server)
├── sobre/page.tsx                    ← About (Server)
├── contacto/page.tsx                 ← Contact (Server)
├── suscripciones/page.tsx            ← Subscriptions (Server)
├── aviso-legal/page.tsx              ← Legal (Server)
├── privacidad/page.tsx               ← Legal (Server)
├── cookies/page.tsx                  ← Legal (Server)
└── condiciones/page.tsx              ← Legal (Server)
```

### 🟢 CLIENT COMPONENTS (`'use client'`)

```
components/
├── Layout.tsx                        ← 'use client' (useState para menús)
├── providers/
│   └── AppProvider.tsx               ← 'use client' (Context + useReducer)
└── ui/
    ├── Notifications.tsx             ← 'use client'
    └── MobileMenu.tsx                ← 'use client'

app/
├── auth/page.tsx                     ← 'use client' (formularios)
├── dashboard/page.tsx                ← 'use client' (useApp)
├── campus/page.tsx                   ← 'use client' (LMS interactivo)
├── ai-tutor/page.tsx                 ← 'use client' (chat IA)
├── admin/page.tsx                    ← 'use client' (panel completo)
├── profesor/page.tsx                 ← 'use client'
├── carrito/page.tsx                  ← 'use client' (useApp)
├── governance/panel/page.tsx         ← 'use client'
└── procurement/panel/page.tsx        ← 'use client'
```

---

## 🏗️ ESTRUCTURA NEXT.JS PROPUESTA

```
cesac-ai-nextjs/
├── app/                              ← App Router
│   ├── layout.tsx                    ← Root layout (Server)
│   ├── page.tsx                      ← Home (Server)
│   ├── globals.css                   ← Tailwind CSS
│   │
│   ├── (public)/                     ← Grupo: páginas públicas
│   │   ├── formacion/
│   │   │   ├── page.tsx              ← Catalog
│   │   │   └── [slug]/page.tsx       ← ProductDetail
│   │   ├── ia/page.tsx
│   │   ├── oposiciones/page.tsx
│   │   ├── educacion/page.tsx
│   │   ├── empresas/page.tsx
│   │   ├── administraciones/page.tsx
│   │   ├── governance/page.tsx
│   │   ├── lab/page.tsx
│   │   ├── consultoria/page.tsx
│   │   ├── procurement/page.tsx
│   │   ├── sobre/page.tsx
│   │   ├── contacto/page.tsx
│   │   ├── suscripciones/page.tsx
│   │   └── [legal]/page.tsx          ← Aviso legal, privacidad, etc.
│   │
│   ├── (auth)/                       ← Grupo: autenticación
│   │   └── auth/page.tsx             ← 'use client'
│   │
│   ├── (protected)/                  ← Grupo: rutas protegidas
│   │   ├── dashboard/page.tsx        ← 'use client'
│   │   ├── campus/page.tsx           ← 'use client'
│   │   ├── ai-tutor/page.tsx         ← 'use client'
│   │   ├── admin/page.tsx            ← 'use client'
│   │   ├── profesor/page.tsx         ← 'use client'
│   │   ├── carrito/page.tsx          ← 'use client'
│   │   ├── governance/panel/page.tsx ← 'use client'
│   │   └── procurement/panel/page.tsx← 'use client'
│   │
│   └── api/                          ← API Routes
│       ├── auth/[...nextauth]/route.ts
│       ├── products/route.ts
│       ├── users/route.ts
│       └── ai/tutor/route.ts
│
├── components/
│   ├── Layout.tsx                    ← 'use client'
│   ├── providers/
│   │   └── AppProvider.tsx           ← 'use client'
│   └── ui/                           ← Componentes reutilizables
│
├── lib/
│   ├── data.ts                       ← ✅ Copiar tal cual (Server)
│   ├── store.tsx                     ← ✅ Copiar tal cual (Client)
│   ├── auth.ts                       ← NextAuth config
│   ├── db.ts                         ← Prisma client
│   └── utils.ts                      ← Funciones helper
│
├── prisma/
│   └── schema.prisma                 ← Modelo de datos
│
├── public/
│   └── images/
│
├── middleware.ts                     ← Protección de rutas
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔄 ESTRATEGIA DE MIGRACIÓN: STRANGLER FIG

### Fase 1: Preparación (ACTUAL)
- ✅ Análisis completado
- ⏳ Crear proyecto Next.js en paralelo
- ⏳ Copiar archivos compatibles sin modificar originales

### Fase 2: Coexistencia
- 🔄 Ambos proyectos (Vite + Next.js) corren simultáneamente
- 🔄 Next.js usa los mismos datos de `lib/data.ts`
- 🔄 Migración progresiva ruta por ruta

### Fase 3: Migración de Rutas
```
Semana 1: Páginas públicas (Home, formación, unidades)
Semana 2: Autenticación y dashboard
Semana 3: Campus/LMS y Tutor IA
Semana 4: Admin, CRM, Governance, Procurement
```

### Fase 4: Cutover Final
- 🔄 Redirección de dominio a Next.js
- 🔄 Desactivar proyecto Vite
- 🔄 Integración con PostgreSQL + Prisma + NextAuth

---

## 📝 SCRIPT DE SETUP SEGURO (PENDIENTE DE APROBACIÓN)

```bash
#!/bin/bash
# setup-nextjs-parallel.sh
# Crea proyecto Next.js en paralelo SIN modificar Vite actual

set -e

echo "🚀 Configurando Next.js en paralelo..."

# 1. Crear directorio para Next.js
mkdir -p cesac-nextjs
cd cesac-nextjs

# 2. Inicializar Next.js
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# 3. Copiar archivos compatibles (SOLO LECTURA desde origen)
echo "📋 Copiando archivos compatibles..."

# Datos maestros (Server Component compatible)
cp ../src/lib/data.ts ./lib/data.ts

# Store (requiere 'use client' pero se copia tal cual)
cp ../src/lib/store.tsx ./lib/store.tsx

# Componentes UI (se añadirá 'use client' manualmente)
mkdir -p ./components
cp ../src/components/Layout.tsx ./components/Layout.tsx

# Páginas estáticas (Server Components)
mkdir -p ./app
cp ../src/pages/Home.tsx ./app/page.tsx

echo "✅ Setup completado. Revisa los archivos copiados."
echo "⚠️  NO se ha modificado ningún archivo del proyecto Vite original."
```

---

## ✅ CHECKLIST DE VERIFICACIÓN POST-MIGRACIÓN

### Por Módulo

#### 🏠 Home y Páginas Públicas
- [ ] Home renderiza correctamente (Server Component)
- [ ] 40 productos visibles en catálogo
- [ ] Filtros funcionan (cliente)
- [ ] Detalle de producto con SEO
- [ ] Páginas de unidades (10) funcionan
- [ ] About, Contact, Legal pages OK

#### 🔐 Autenticación y RBAC
- [ ] Login/registro funcionan
- [ ] 16 roles reconocidos correctamente
- [ ] `canAccessAdmin()`, `canAccessTeacher()`, etc. funcionan
- [ ] Middleware protege rutas `/dashboard`, `/admin`, etc.
- [ ] NextAuth integrado con PostgreSQL

#### 🎓 Campus / LMS
- [ ] Alumno ve sus cursos matriculados
- [ ] Progreso se actualiza
- [ ] Lecciones se marcan como completadas
- [ ] Evaluaciones funcionan
- [ ] Certificados se generan

#### 🤖 Tutor IA
- [ ] Chat funciona en tiempo real
- [ ] Fuentes y citas se muestran
- [ ] Selección de curso funciona
- [ ] Anti-alucinación activo

#### 👨‍💼 Panel Admin
- [ ] Dashboard con métricas
- [ ] Gestión de usuarios (16 roles)
- [ ] Gestión de productos (40)
- [ ] Pedidos y facturación
- [ ] CRM con pipeline
- [ ] Governance con inventario IA
- [ ] Procurement con licitaciones
- [ ] Analítica con eventos

#### 🛒 Ecommerce
- [ ] Carrito funciona
- [ ] Checkout preparado para Stripe
- [ ] Suscripciones (4 planes)
- [ ] Cupones y descuentos

#### 🔒 Seguridad y Performance
- [ ] Server Components donde aplica
- [ ] Client Components minimizados
- [ ] Middleware de autenticación
- [ ] Rate limiting en APIs
- [ ] SEO optimizado (metadata, sitemap)
- [ ] Lighthouse score > 90

---

## 🎯 PRÓXIMOS PASOS (PENDIENTES DE APROBACIÓN)

### Paso 1: Crear Proyecto Next.js en Paralelo
```bash
# Ejecutar script de setup seguro
bash setup-nextjs-parallel.sh
```

### Paso 2: Configurar Estructura de Carpetas
- Crear `app/` con grupos de rutas
- Crear `components/providers/AppProvider.tsx` con `'use client'`
- Configurar `middleware.ts` para protección de rutas

### Paso 3: Migrar Página por Página
- Empezar con `/` (Home) como Server Component
- Migrar `/formacion` con filtros como Client Component
- Continuar con páginas estáticas
- Finalmente migrar rutas protegidas

### Paso 4: Integrar Backend
- Configurar NextAuth con PostgreSQL
- Migrar Supabase a Server Actions
- Conectar Prisma ORM
- Implementar API routes

### Paso 5: Testing y Cutover
- Probar todos los módulos en Next.js
- Comparar funcionalidad con Vite
- Redirigir dominio
- Desactivar Vite

---

## ⚠️ RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Pérdida de estado global | Media | Alto | Preservar `store.tsx` tal cual, añadir `'use client'` |
| Rutas dinámicas rotas | Baja | Alto | Usar `[slug]` y `[legal]` correctamente |
| SEO degradado | Baja | Medio | Usar `generateMetadata()` en Server Components |
| Performance inferior | Baja | Medio | Aprovechar Server Components y caching |
| Tiempo de migración | Alta | Medio | Estrategia Strangler Fig (progresiva) |

---

## 📞 CRITERIOS DE APROBACIÓN

Para proceder con la migración, necesito tu aprobación explícita en:

1. ✅ **Estructura de carpetas propuesta** (¿OK o ajustes?)
2. ✅ **Script de setup seguro** (¿Ejecutar o modificar?)
3. ✅ **Orden de migración** (¿Home primero o diferente prioridad?)
4. ✅ **Criterios de éxito** (¿Checklist completo o agregar algo?)

**NO se ejecutará ningún cambio hasta tu confirmación.**

---

## 📚 REFERENCIAS TÉCNICAS

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Server vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-and-client-components)
- [Migration Guide: Pages Router → App Router](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [NextAuth.js with App Router](https://next-auth.js.org/configuration/initialization#route-handlers-app-router)

---

**Fin del informe. Esperando aprobación para proceder.**
