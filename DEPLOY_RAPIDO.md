# 🚀 DESPLIEGUE RÁPIDO EN LA NUBE - CESAC AI

## ⚡ DESPLIEGUE EN 3 PASOS

### 1️⃣ Preparar el Proyecto

```bash
# Instalar dependencias
npm install

# Verificar que el build funciona
npm run build
```

### 2️⃣ Elegir Plataforma y Desplegar

#### Opción A: Vercel (Recomendado) ⭐

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel --prod
```

**Resultado:** Tu sitio estará en `https://tu-proyecto.vercel.app`

---

#### Opción B: Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Desplegar
netlify deploy --prod
```

**Resultado:** Tu sitio estará en `https://tu-proyecto.netlify.app`

---

#### Opción C: Cloudflare Pages

```bash
# Instalar Wrangler CLI
npm install -g wrangler

# Desplegar
wrangler pages deploy dist --project-name cesac-ai
```

**Resultado:** Tu sitio estará en `https://cesac-ai.pages.dev`

---

### 3️⃣ Verificar el Despliegue

Abre tu URL y verifica:
- ✅ Home carga correctamente
- ✅ Menú de 2 filas visible
- ✅ Franquicias accesible (`/franquicias`)
- ✅ Producción accesible (`/produccion`)
- ✅ Premium accesible (`/premium`)

---

## 📋 ARCHIVOS DE CONFIGURACIÓN CREADOS

| Archivo | Plataforma | Estado |
|---------|-----------|--------|
| `vercel.json` | Vercel | ✅ Creado |
| `netlify.toml` | Netlify | ✅ Creado |
| `wrangler.toml` | Cloudflare Pages | ✅ Creado |
| `deploy.sh` | Multi-plataforma | ✅ Creado |
| `GUIA_DESPLIEGUE_NUBE.md` | Todas | ✅ Creado |

---

## 🎯 DESPLIEGUE CON SCRIPT AUTOMATIZADO

Si prefieres usar el script automatizado:

```bash
# Hacer el script ejecutable (solo la primera vez)
chmod +x deploy.sh

# Desplegar a Vercel
./deploy.sh vercel

# O desplegar a Netlify
./deploy.sh netlify

# O desplegar a Cloudflare
./deploy.sh cloudflare
```

---

## 🔧 CONFIGURACIÓN AVANZADA

### Variables de Entorno

Si necesitas variables de entorno, créalas en la plataforma:

#### Vercel
```bash
vercel env add DATABASE_URL production
vercel env add NEXTAUTH_SECRET production
```

#### Netlify
```bash
netlify env:set DATABASE_URL "postgresql://..."
netlify env:set NEXTAUTH_SECRET "tu-secreto"
```

### Dominio Personalizado

#### Vercel
```bash
vercel domains add cesac.ai
```

#### Netlify
```bash
netlify domains:create cesac.ai
```

---

## 📊 COMPARATIVA DE PLATAFORMAS

| Característica | Vercel | Netlify | Cloudflare Pages |
|----------------|--------|---------|------------------|
| **Precio** | Gratis/$20/mes | Gratis/$19/mes | Gratis |
| **Velocidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Facilidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **CDN Global** | ✅ | ✅ | ✅ |
| **HTTPS** | ✅ | ✅ | ✅ |
| **Serverless** | ✅ | ✅ | ✅ |
| **Analytics** | ✅ | ✅ | ✅ |
| **Formularios** | ❌ | ✅ | ❌ |

**Recomendación:** Usa **Vercel** para la mejor experiencia.

---

## ✅ CHECKLIST ANTES DE DESPLEGAR

- [ ] Build funciona sin errores (`npm run build`)
- [ ] Todas las rutas funcionan localmente
- [ ] Variables de entorno configuradas (si aplica)
- [ ] Dominio personalizado configurado (si aplica)
- [ ] Analytics configurado (opcional)

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: "Build failed"
```bash
# Limpiar caché y reinstalar
rm -rf node_modules dist
npm install
npm run build
```

### Error: "Command not found: vercel"
```bash
# Instalar Vercel CLI
npm install -g vercel
```

### Error: "Command not found: netlify"
```bash
# Instalar Netlify CLI
npm install -g netlify-cli
```

### Error: "Command not found: wrangler"
```bash
# Instalar Wrangler CLI
npm install -g wrangler
```

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

## 🎉 ¡LISTO PARA DESPLEGAR!

Tu proyecto CESAC AI está 100% listo para producción. Solo necesitas:

1. Ejecutar `npm install`
2. Ejecutar `npm run build`
3. Desplegar con tu plataforma preferida

**¡Buena suerte con tu despliegue!** 🚀

---

**¿Necesitas ayuda?** Consulta la guía completa en `GUIA_DESPLIEGUE_NUBE.md`
