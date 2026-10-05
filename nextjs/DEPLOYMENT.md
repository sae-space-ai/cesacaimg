# 🚀 DESPLIEGUE - CESAC AI

Guía completa para desplegar la plataforma CESAC AI en producción.

## 📋 Requisitos Previos

### Cuentas Necesarias
- [ ] **Vercel** - Hosting y despliegue
- [ ] **PostgreSQL** - Base de datos (Supabase, Neon, o Railway)
- [ ] **Stripe** - Procesamiento de pagos
- [ ] **OpenAI/Anthropic** - API de IA (opcional)
- [ ] **Resend/SendGrid** - Email transaccional (opcional)

### Herramientas
- Node.js 20+
- npm o pnpm
- Git
- Vercel CLI (`npm i -g vercel`)

---

## 🗄️ 1. BASE DE DATOS

### Opción A: Supabase (Recomendado)

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Obtener credenciales:
   ```
   Settings → Database → Connection string
   ```
3. Copiar el connection string (formato PostgreSQL)

### Opción B: Neon

1. Crear proyecto en [neon.tech](https://neon.tech)
2. Crear base de datos
3. Copiar connection string

### Opción C: Railway

1. Crear proyecto en [railway.app](https://railway.app)
2. Añadir PostgreSQL
3. Copiar connection string

### Habilitar pgvector (para RAG)

```sql
-- Ejecutar en la base de datos
CREATE EXTENSION IF NOT EXISTS vector;
```

---

## 🔐 2. CONFIGURAR VARIABLES DE ENTORNO

### En Vercel

1. Ir a tu proyecto en Vercel
2. **Settings → Environment Variables**
3. Añadir todas las variables de `.env.example`

### Variables Críticas

```bash
# Base de datos
DATABASE_URL="postgresql://..."

# Autenticación
AUTH_SECRET="genera-uno-con-openssl-rand-base64-32"
NEXTAUTH_URL="https://tu-dominio.vercel.app"

# Stripe
STRIPE_SECRET_KEY="sk_live_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# IA (opcional)
AI_PROVIDER_API_KEY="sk-..."
```

### Generar AUTH_SECRET

```bash
openssl rand -base64 32
```

---

## 🚀 3. DESPLIEGUE EN VERCEL

### Método 1: Desde GitHub (Recomendado)

1. **Conectar repositorio**
   ```bash
   vercel link
   ```

2. **Configurar proyecto**
   - Framework: Next.js
   - Build Command: `prisma generate && next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Desplegar**
   ```bash
   vercel --prod
   ```

### Método 2: CLI

```bash
# Login
vercel login

# Deploy preview
vercel

# Deploy production
vercel --prod
```

---

## 🗃️ 4. MIGRACIONES DE BASE DE DATOS

### Primera vez

```bash
# Generar cliente Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma migrate deploy

# Ejecutar seed
npm run seed
```

### En Vercel (automático)

Añadir al `package.json`:
```json
{
  "scripts": {
    "postinstall": "prisma generate",
    "build": "prisma migrate deploy && next build"
  }
}
```

---

## 💳 5. CONFIGURAR STRIPE

### Crear productos y precios

1. Ir a [Stripe Dashboard](https://dashboard.stripe.com)
2. **Products → Add product**
3. Crear planes de suscripción:
   - CESAC AI Individual (€29/mes)
   - CESAC AI Pro (€79/mes)
   - CESAC AI Business (€299/mes)
   - CESAC AI Governance (€499/mes)

### Configurar webhooks

1. **Developers → Webhooks → Add endpoint**
2. URL: `https://tu-dominio.vercel.app/api/webhooks/stripe`
3. Eventos a escuchar:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`

4. Copiar **Signing secret** y añadirlo a `STRIPE_WEBHOOK_SECRET`

### Modo test

Para pruebas, usar claves `sk_test_...` y `pk_test_...`

---

## 🤖 6. CONFIGURAR IA (OPCIONAL)

### OpenAI

1. Ir a [platform.openai.com](https://platform.openai.com)
2. Crear API key
3. Añadir a `AI_PROVIDER_API_KEY`

### Anthropic (Claude)

1. Ir a [console.anthropic.com](https://console.anthropic.com)
2. Crear API key
3. Configurar:
   ```
   AI_PROVIDER="anthropic"
   AI_PROVIDER_API_KEY="sk-ant-..."
   AI_MODEL="claude-3-opus-20240229"
   ```

---

## 📧 7. CONFIGURAR EMAIL (OPCIONAL)

### Resend (Recomendado)

1. Ir a [resend.com](https://resend.com)
2. Crear API key
3. Configurar:
   ```
   RESEND_API_KEY="re_..."
   EMAIL_FROM="noreply@tu-dominio.com"
   ```

### SMTP tradicional

```
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="tu-email@gmail.com"
EMAIL_SERVER_PASSWORD="app-password"
```

---

## ✅ 8. VERIFICACIÓN POST-DEPLOYMENT

### Checklist

- [ ] **Health check**: `https://tu-dominio.vercel.app/api/health`
  - Debe retornar `{"status":"ok"}`
  
- [ ] **Base de datos**: Verificar conexión
  ```bash
  vercel logs --follow
  ```

- [ ] **Autenticación**: Probar login con cuentas demo
  - admin@cesac.ai / demo123456
  - student@cesac.ai / demo123456

- [ ] **Productos**: Verificar catálogo en `/formacion`

- [ ] **Stripe**: Probar pago de prueba con tarjeta `4242 4242 4242 4242`

- [ ] **Tutor IA**: Probar consulta en `/ai-tutor`

- [ ] **Webhooks**: Verificar en Stripe Dashboard que se reciben

### Logs en tiempo real

```bash
vercel logs --follow
```

---

## 🔒 9. SEGURIDAD

### Headers de seguridad

Ya configurados en `vercel.json`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=()

### Rate limiting

Implementar en middleware para APIs críticas:
- `/api/auth/*` - 5 req/min
- `/api/ai/tutor` - 50 req/hour
- `/api/webhooks/*` - Sin límite

### Protección de rutas

Middleware ya configurado para:
- `/dashboard` - Requiere autenticación
- `/admin` - Requiere rol ADMIN/SUPERADMIN
- `/campus` - Requiere autenticación

---

## 📊 10. MONITORIZACIÓN

### Vercel Analytics

1. Habilitar en **Settings → Analytics**
2. Ver métricas de rendimiento

### Logs

```bash
# Ver logs en tiempo real
vercel logs --follow

# Filtrar por nivel
vercel logs --follow | grep ERROR
```

### Errores

Configurar Sentry (opcional):
```bash
SENTRY_DSN="https://..."
```

---

## 🔄 11. ACTUALIZACIONES

### Desplegar cambios

```bash
# Commit y push
git add .
git commit -m "feat: nueva funcionalidad"
git push

# Vercel despliega automáticamente
```

### Migraciones de base de datos

```bash
# Crear migración
npx prisma migrate dev --name add_new_field

# Aplicar en producción
npx prisma migrate deploy
```

---

## 🆘 12. SOLUCIÓN DE PROBLEMAS

### Error: "Database connection failed"

**Causa**: DATABASE_URL incorrecta o base de datos inaccesible

**Solución**:
1. Verificar credenciales en Supabase/Neon
2. Comprobar que la IP está allowlisted
3. Probar conexión local:
   ```bash
   psql $DATABASE_URL -c "SELECT 1"
   ```

### Error: "Stripe webhook signature verification failed"

**Causa**: STRIPE_WEBHOOK_SECRET incorrecto

**Solución**:
1. Regenerar webhook secret en Stripe Dashboard
2. Actualizar variable en Vercel
3. Redeploy

### Error: "Authentication failed"

**Causa**: AUTH_SECRET incorrecto o NextAuth mal configurado

**Solución**:
1. Regenerar AUTH_SECRET: `openssl rand -base64 32`
2. Verificar NEXTAUTH_URL coincide con dominio
3. Limpiar cookies del navegador

---

## 📚 13. RECURSOS

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Prisma](https://www.prisma.io/docs)
- [Documentación Stripe](https://stripe.com/docs)
- [Documentación Vercel](https://vercel.com/docs)
- [Documentación NextAuth](https://next-auth.js.org)

---

## 🎯 CHECKLIST FINAL

Antes de lanzar a producción:

- [ ] Base de datos configurada y migrada
- [ ] Variables de entorno completas en Vercel
- [ ] Stripe configurado con webhooks
- [ ] Email transaccional configurado
- [ ] Health check funcionando
- [ ] Autenticación probada
- [ ] Pagos de prueba realizados
- [ ] Tutor IA probado
- [ ] Logs monitorizados
- [ ] Seguridad verificada
- [ ] Documentación actualizada
- [ ] Backups configurados

---

**¿Necesitas ayuda?** Contacta con el equipo de desarrollo.
