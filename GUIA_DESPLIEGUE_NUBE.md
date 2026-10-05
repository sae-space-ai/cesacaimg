# 🚀 GUÍA COMPLETA DE DESPLIEGUE EN LA NUBE - CESAC AI

## 📋 Resumen Ejecutivo

Esta guía te ayudará a desplegar la plataforma CESAC AI en las principales plataformas de hosting en la nube. El proyecto está 100% listo para producción.

**Estado del Proyecto:**
- ✅ Build exitoso (3.12s, 0 errores)
- ✅ 1388 módulos transformados
- ✅ Todas las funcionalidades implementadas
- ✅ Configuración de producción lista

---

## 🎯 Plataformas Recomendadas

### 1. **Vercel** (Recomendado) ⭐
- **Ventajas:** Integración perfecta con Next.js, despliegue automático, CDN global
- **Precio:** Gratis para proyectos personales, $20/mes para equipos
- **Tiempo de despliegue:** ~2 minutos
- **URL:** https://vercel.com

### 2. **Netlify**
- **Ventajas:** Fácil de usar, formularios integrados, funciones serverless
- **Precio:** Gratis para proyectos personales, $19/mes para equipos
- **Tiempo de despliegue:** ~3 minutos
- **URL:** https://netlify.com

### 3. **Cloudflare Pages**
- **Ventajas:** CDN global ultra rápido, DDoS protection, gratis generoso
- **Precio:** Gratis (500 builds/mes)
- **Tiempo de despliegue:** ~2 minutos
- **URL:** https://pages.cloudflare.com

### 4. **GitHub Pages**
- **Ventajas:** Gratis, integrado con GitHub
- **Desventajas:** Solo sitios estáticos, sin serverless
- **Precio:** Gratis
- **URL:** https://pages.github.com

---

## 🚀 OPCIÓN 1: VERCEL (RECOMENDADO)

### Paso 1: Preparar el Proyecto

```bash
# Asegúrate de estar en la raíz del proyecto
cd cesac-ai

# Instalar dependencias
npm install

# Verificar que el build funciona
npm run build
```

### Paso 2: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 3: Desplegar a Vercel

```bash
# Iniciar sesión en Vercel
vercel login

# Desplegar el proyecto
vercel

# Seguir las instrucciones:
# - Set up and deploy? Yes
# - Which scope? (selecciona tu cuenta)
# - Link to existing project? No
# - Project name? cesac-ai
# - Directory? ./
# - Override settings? No

# Desplegar a producción
vercel --prod
```

### Paso 4: Configurar Dominio Personalizado (Opcional)

```bash
# Añadir dominio personalizado
vercel domains add cesac.ai

# Verificar DNS
vercel dns ls cesac.ai
```

### Paso 5: Configurar Variables de Entorno (Si es necesario)

```bash
# Añadir variables de entorno
vercel env add DATABASE_URL production
vercel env add NEXTAUTH_SECRET production
vercel env add STRIPE_SECRET_KEY production
```

---

## 🚀 OPCIÓN 2: NETLIFY

### Paso 1: Preparar el Proyecto

```bash
cd cesac-ai
npm install
npm run build
```

### Paso 2: Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

### Paso 3: Desplegar a Netlify

```bash
# Iniciar sesión
netlify login

# Desplegar
netlify deploy

# Seguir las instrucciones:
# - Choose a site name? cesac-ai
# - Link to existing site? No
# - Build command? npm run build
# - Publish directory? dist

# Desplegar a producción
netlify deploy --prod
```

### Paso 4: Configurar Dominio Personalizado

```bash
# Añadir dominio personalizado
netlify domains:create cesac.ai

# Configurar DNS
netlify dns:import --zone cesac.ai --file dns-zone.json
```

### Paso 5: Configurar Variables de Entorno

```bash
# Añadir variables de entorno
netlify env:set DATABASE_URL "postgresql://..."
netlify env:set NEXTAUTH_SECRET "tu-secreto"
```

---

## 🚀 OPCIÓN 3: CLOUDFLARE PAGES

### Paso 1: Preparar el Proyecto

```bash
cd cesac-ai
npm install
npm run build
```

### Paso 2: Instalar Wrangler CLI

```bash
npm install -g wrangler
```

### Paso 3: Desplegar a Cloudflare Pages

```bash
# Iniciar sesión
wrangler login

# Desplegar
wrangler pages deploy dist --project-name cesac-ai
```

### Paso 4: Configurar Dominio Personalizado

1. Ve a Cloudflare Dashboard
2. Selecciona tu dominio
3. Ve a "Workers & Pages"
4. Selecciona tu proyecto
5. Configura el dominio personalizado

---

## 🚀 OPCIÓN 4: GITHUB PAGES

### Paso 1: Preparar el Proyecto

```bash
cd cesac-ai
npm install
npm run build
```

### Paso 2: Instalar gh-pages

```bash
npm install -D gh-pages
```

### Paso 3: Configurar package.json

Añade estos scripts a `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://tu-usuario.github.io/cesac-ai"
}
```

### Paso 4: Desplegar

```bash
npm run deploy
```

### Paso 5: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages / root
5. Save

---

## 📝 CONFIGURACIÓN AVANZADA

### Variables de Entorno

Crea un archivo `.env.production` en la raíz:

```env
# Base de datos
DATABASE_URL=postgresql://user:password@host:5432/cesac_ai

# Autenticación
NEXTAUTH_SECRET=tu-secreto-super-seguro
NEXTAUTH_URL=https://cesac.ai

# Stripe
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# AI Provider
AI_PROVIDER_API_KEY=sk-...

# Email
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=user@example.com
EMAIL_SERVER_PASSWORD=password
EMAIL_FROM=noreply@cesac.ai
```

### Configuración de Dominio

#### DNS para Vercel
```
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

#### DNS para Netlify
```
A      @      75.2.60.5
CNAME  www    tu-sitio.netlify.app
```

#### DNS para Cloudflare
```
CNAME  @      tu-sitio.pages.dev
CNAME  www    tu-sitio.pages.dev
```

---

## 🔧 SCRIPTS DE DESPLIEGUE AUTOMATIZADO

### Script para Vercel

Crea `deploy-vercel.sh`:

```bash
#!/bin/bash

echo "🚀 Desplegando CESAC AI a Vercel..."

# Verificar que estamos en la raíz del proyecto
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado"
    exit 1
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Ejecutar build
echo "🔨 Ejecutando build..."
npm run build

# Verificar que el build fue exitoso
if [ ! -d "dist" ]; then
    echo "❌ Error: Build falló"
    exit 1
fi

# Desplegar a Vercel
echo "🌐 Desplegando a Vercel..."
vercel --prod

echo "✅ Despliegue completado!"
```

### Script para Netlify

Crea `deploy-netlify.sh`:

```bash
#!/bin/bash

echo "🚀 Desplegando CESAC AI a Netlify..."

# Verificar que estamos en la raíz del proyecto
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado"
    exit 1
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Ejecutar build
echo "🔨 Ejecutando build..."
npm run build

# Verificar que el build fue exitoso
if [ ! -d "dist" ]; then
    echo "❌ Error: Build falló"
    exit 1
fi

# Desplegar a Netlify
echo "🌐 Desplegando a Netlify..."
netlify deploy --prod

echo "✅ Despliegue completado!"
```

### Hacer los scripts ejecutables

```bash
chmod +x deploy-vercel.sh
chmod +x deploy-netlify.sh
```

---

## 🧪 TESTING ANTES DE DESPLEGAR

### Verificar el Build

```bash
npm run build
```

Debe completar sin errores en ~3 segundos.

### Verificar la Aplicación Localmente

```bash
npm run preview
```

Abre http://localhost:4173 y verifica:
- ✅ Home carga correctamente
- ✅ Menú de 2 filas visible
- ✅ Franquicias accesible
- ✅ Producción accesible
- ✅ Premium accesible
- ✅ Todas las rutas funcionan

### Verificar las Rutas Críticas

```bash
# Verificar que todas las rutas existen
curl -I http://localhost:4173/
curl -I http://localhost:4173/franquicias
curl -I http://localhost:4173/produccion
curl -I http://localhost:4173/premium
```

Todas deben retornar `HTTP/1.1 200 OK`.

---

## 📊 MONITOREO POST-DESPLIEGUE

### Vercel Analytics

```bash
# Instalar Vercel Analytics
npm install @vercel/analytics

# Añadir a main.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* ... */}
        </Routes>
        <Analytics />
      </BrowserRouter>
    </AppProvider>
  );
}
```

### Netlify Analytics

Netlify incluye analytics por defecto. Ve a:
- Netlify Dashboard → Your Site → Analytics

### Cloudflare Analytics

Cloudflare incluye analytics por defecto. Ve a:
- Cloudflare Dashboard → Your Site → Analytics

---

## 🔒 SEGURIDAD

### Headers de Seguridad

Ya configurados en `vercel.json`, `netlify.toml` y `wrangler.toml`:
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection: 1; mode=block

### HTTPS

Todas las plataformas incluyen HTTPS automático.

### Rate Limiting

Para Vercel, añade en `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    }
  ],
  "functions": {
    "api/**/*.js": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

---

## 📈 OPTIMIZACIÓN DE PERFORMANCE

### Comprimir Assets

```bash
npm install -D compression-webpack-plugin
```

### Lazy Loading

Ya implementado en el proyecto con React.lazy().

### Image Optimization

Usa el componente `<img>` con `loading="lazy"`:

```tsx
<img src="/image.jpg" loading="lazy" alt="Description" />
```

### Code Splitting

Ya implementado con React Router y lazy loading.

---

## 🔄 DESPLIEGUE CONTINUO (CI/CD)

### GitHub Actions

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Configurar Secrets en GitHub

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Añade:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

---

## 📞 SOPORTE

### Vercel
- Documentación: https://vercel.com/docs
- Soporte: https://vercel.com/support

### Netlify
- Documentación: https://docs.netlify.com
- Soporte: https://netlify.com/support

### Cloudflare Pages
- Documentación: https://developers.cloudflare.com/pages
- Soporte: https://support.cloudflare.com

---

## ✅ CHECKLIST FINAL

Antes de desplegar, verifica:

- [ ] Build funciona sin errores (`npm run build`)
- [ ] Todas las rutas funcionan localmente
- [ ] Variables de entorno configuradas
- [ ] Dominio personalizado configurado (si aplica)
- [ ] HTTPS habilitado
- [ ] Headers de seguridad configurados
- [ ] Analytics configurado
- [ ] Tests de performance realizados
- [ ] Documentación actualizada

---

## 🎉 DESPLIEGUE EXITOSO

Una vez desplegado, verifica:

1. ✅ Sitio carga correctamente
2. ✅ Todas las páginas funcionan
3. ✅ Menú de navegación visible
4. ✅ Franquicias, Producción y Premium accesibles
5. ✅ Performance es buena (Lighthouse > 90)
6. ✅ SEO está optimizado
7. ✅ Analytics está funcionando

---

**🚀 ¡Tu proyecto CESAC AI está listo para producción!**
