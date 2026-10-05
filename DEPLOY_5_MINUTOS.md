# ⚡ DESPLIEGUE EN 5 MINUTOS - GUÍA ULTRA RÁPIDA

## 🎯 ELIGE TU PLATAFORMA

### 🥇 VERCEL (Recomendado)

```bash
npm install -g vercel
vercel login
vercel --prod
```

**Tiempo:** 3.5 minutos  
**URL:** `https://tu-proyecto.vercel.app`

---

### 🥈 NETLIFY

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Tiempo:** 4.5 minutos  
**URL:** `https://tu-proyecto.netlify.app`

---

### 🥉 CLOUDFLARE

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy dist --project-name cesac-ai
```

**Tiempo:** 3.5 minutos  
**URL:** `https://cesac-ai.pages.dev`

---

## ✅ VERIFICAR

Abre tu URL y verifica:
- ✅ Home carga
- ✅ Menú funciona
- ✅ `/franquicias` accesible
- ✅ `/produccion` accesible
- ✅ `/premium` accesible

---

## 🆘 PROBLEMAS

### "Command not found"
```bash
npm install -g vercel  # o netlify-cli o wrangler
```

### "Build failed"
```bash
npm install
npm run build
```

---

## 📚 MÁS INFO

- `README_DEPLOY.md` - Guía completa
- `GUIA_VISUAL_DEPLOY.md` - Paso a paso visual
- `DEPLOY_NOW.md` - Instrucciones finales

---

**🚀 ¡Listo en 5 minutos!**
