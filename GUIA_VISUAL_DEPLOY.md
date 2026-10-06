# 🚀 GUÍA VISUAL DE DESPLIEGUE - PASO A PASO

## 📋 ANTES DE EMPEZAR

✅ **Build verificado:** 3.13s, 0 errores  
✅ **Archivos de configuración:** Creados  
✅ **Proyecto listo:** 100%

---

## 🎯 OPCIÓN 1: VERCEL (RECOMENDADO) ⭐

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

**Espera:** ~30 segundos

---

### Paso 2: Iniciar Sesión

```bash
vercel login
```

**Opciones:**
- GitHub (recomendado)
- GitLab
- Bitbucket
- Email

**Selecciona:** GitHub → Te redirige al navegador → Autoriza

---

### Paso 3: Desplegar

```bash
vercel --prod
```

**Preguntas:**
```
? Set up and deploy "~/proyecto"? [Y/n]
→ Y

? Which scope do you want to deploy to?
→ Selecciona tu cuenta

? Link to existing project? [y/N]
→ N

? What's your project's name?
→ cesac-ai

? In which directory is your code located?
→ ./

? Want to override the settings? [y/N]
→ N
```

**Espera:** ~2 minutos

**Resultado:**
```
✅ Production: https://cesac-ai.vercel.app [copied to clipboard]
```

---

### Paso 4: Verificar

Abre: `https://cesac-ai.vercel.app`

✅ Home carga  
✅ Menú funciona  
✅ Franquicias accesible  
✅ Producción accesible  
✅ Premium accesible  

---

### Paso 5: Dominio Personalizado (Opcional)

```bash
vercel domains add cesac.ai
```

**Configura DNS:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Espera:** ~5 minutos para propagación

---

## 🎯 OPCIÓN 2: NETLIFY

### Paso 1: Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

---

### Paso 2: Iniciar Sesión

```bash
netlify login
```

**Selecciona:** GitHub → Autoriza

---

### Paso 3: Desplegar

```bash
netlify deploy --prod
```

**Preguntas:**
```
? Please choose a site name or leave blank for a random name:
→ cesac-ai

? Is cesac-ai correct? [Y/n]
→ Y

? No build command found, please specify a build command:
→ npm run build

? No publish directory was configured, please specify a publish directory:
→ dist
```

**Espera:** ~3 minutos

**Resultado:**
```
✅ Deploy is live!
   URL: https://cesac-ai.netlify.app
```

---

### Paso 4: Verificar

Abre: `https://cesac-ai.netlify.app`

---

### Paso 5: Dominio Personalizado (Opcional)

```bash
netlify domains:create cesac.ai
```

**Configura DNS:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: cesac-ai.netlify.app
```

---

## 🎯 OPCIÓN 3: CLOUDFLARE PAGES

### Paso 1: Instalar Wrangler CLI

```bash
npm install -g wrangler
```

---

### Paso 2: Iniciar Sesión

```bash
wrangler login
```

**Selecciona:** Allow → Te redirige al navegador → Autoriza

---

### Paso 3: Desplegar

```bash
wrangler pages deploy dist --project-name cesac-ai
```

**Espera:** ~2 minutos

**Resultado:**
```
✅ Success!
   Deployed to: https://cesac-ai.pages.dev
```

---

### Paso 4: Verificar

Abre: `https://cesac-ai.pages.dev`

---

### Paso 5: Dominio Personalizado (Opcional)

1. Ve a Cloudflare Dashboard
2. Selecciona tu dominio
3. Workers & Pages → cesac-ai
4. Custom domains → Add
5. Sigue las instrucciones DNS

---

## 🎯 OPCIÓN 4: GITHUB PAGES

### Paso 1: Instalar gh-pages

```bash
npm install -D gh-pages
```

---

### Paso 2: Configurar package.json

Añade:
```json
{
  "homepage": "https://tu-usuario.github.io/cesac-ai",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

### Paso 3: Desplegar

```bash
npm run deploy
```

**Espera:** ~1 minuto

---

### Paso 4: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages / root
5. Save

**Espera:** ~5 minutos

**Resultado:**
```
✅ Your site is live at: https://tu-usuario.github.io/cesac-ai
```

---

## 📊 COMPARATIVA DE TIEMPOS

| Plataforma | Instalación | Login | Deploy | Total |
|-----------|-------------|-------|--------|-------|
| **Vercel** | 30s | 1m | 2m | **3.5m** |
| **Netlify** | 30s | 1m | 3m | **4.5m** |
| **Cloudflare** | 30s | 1m | 2m | **3.5m** |
| **GitHub Pages** | 30s | 0s | 1m | **1.5m** |

---

## ✅ CHECKLIST FINAL

### Antes de Desplegar
- [ ] Build funciona (`npm run build`)
- [ ] Todas las rutas funcionan localmente
- [ ] Variables de entorno configuradas (si aplica)
- [ ] Dominio personalizado decidido (si aplica)

### Después de Desplegar
- [ ] Sitio carga correctamente
- [ ] Home funciona
- [ ] Menú de 2 filas visible
- [ ] `/franquicias` accesible
- [ ] `/produccion` accesible
- [ ] `/premium` accesible
- [ ] `/formacion/agentes-ia` funciona
- [ ] HTTPS activo
- [ ] Performance buena

---

## 🆘 PROBLEMAS COMUNES

### Problema: "Command not found: vercel"
**Solución:**
```bash
npm install -g vercel
```

### Problema: "Build failed"
**Solución:**
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Problema: "Permission denied"
**Solución:**
```bash
chmod +x deploy.sh
```

### Problema: "Site not found"
**Solución:** Espera 5 minutos (propagación DNS)

---

## 📞 SOPORTE RÁPIDO

### Vercel
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

### Netlify
- Dashboard: https://app.netlify.com
- Docs: https://docs.netlify.com
- Support: https://netlify.com/support

### Cloudflare
- Dashboard: https://dash.cloudflare.com
- Docs: https://developers.cloudflare.com/pages
- Support: https://support.cloudflare.com

---

## 🎉 ¡LISTO!

Tu proyecto CESAC AI está en la nube en **menos de 5 minutos**.

**Próximos pasos:**
1. ✅ Desplegar (3-5 minutos)
2. ✅ Verificar (1 minuto)
3. ✅ Configurar dominio (opcional, 5 minutos)
4. ✅ ¡Disfrutar! 🎊

---

**¿Necesitas ayuda?**
- Consulta: `README_DEPLOY.md`
- Guía rápida: `DEPLOY_RAPIDO.md`
- Guía completa: `GUIA_DESPLIEGUE_NUBE.md`

---

**🚀 ¡Tu proyecto está listo para conquistar la nube!**
