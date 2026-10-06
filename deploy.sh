#!/bin/bash

# Script de despliegue rápido para CESAC AI
# Uso: ./deploy.sh [vercel|netlify|cloudflare]

set -e

echo "🚀 CESAC AI - Script de Despliegue Rápido"
echo "=========================================="

# Verificar que estamos en la raíz del proyecto
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado"
    echo "Por favor, ejecuta este script desde la raíz del proyecto"
    exit 1
fi

# Función para verificar dependencias
check_dependencies() {
    echo "📦 Verificando dependencias..."
    if [ ! -d "node_modules" ]; then
        echo "Instalando dependencias..."
        npm install
    fi
}

# Función para hacer build
build_project() {
    echo "🔨 Construyendo el proyecto..."
    npm run build
    
    if [ ! -d "dist" ]; then
        echo "❌ Error: Build falló"
        exit 1
    fi
    
    echo "✅ Build completado exitosamente"
}

# Función para desplegar a Vercel
deploy_vercel() {
    echo "🌐 Desplegando a Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        echo "Instalando Vercel CLI..."
        npm install -g vercel
    fi
    
    vercel --prod
    echo "✅ Desplegado a Vercel exitosamente"
}

# Función para desplegar a Netlify
deploy_netlify() {
    echo "🌐 Desplegando a Netlify..."
    
    if ! command -v netlify &> /dev/null; then
        echo "Instalando Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    netlify deploy --prod
    echo "✅ Desplegado a Netlify exitosamente"
}

# Función para desplegar a Cloudflare Pages
deploy_cloudflare() {
    echo "🌐 Desplegando a Cloudflare Pages..."
    
    if ! command -v wrangler &> /dev/null; then
        echo "Instalando Wrangler CLI..."
        npm install -g wrangler
    fi
    
    wrangler pages deploy dist --project-name cesac-ai
    echo "✅ Desplegado a Cloudflare Pages exitosamente"
}

# Función para mostrar ayuda
show_help() {
    echo "Uso: ./deploy.sh [plataforma]"
    echo ""
    echo "Plataformas disponibles:"
    echo "  vercel      - Desplegar a Vercel (recomendado)"
    echo "  netlify     - Desplegar a Netlify"
    echo "  cloudflare  - Desplegar a Cloudflare Pages"
    echo ""
    echo "Ejemplos:"
    echo "  ./deploy.sh vercel"
    echo "  ./deploy.sh netlify"
    echo "  ./deploy.sh cloudflare"
    echo ""
    echo "Si no se especifica plataforma, se mostrará este mensaje de ayuda."
}

# Main
check_dependencies
build_project

case "$1" in
    vercel)
        deploy_vercel
        ;;
    netlify)
        deploy_netlify
        ;;
    cloudflare)
        deploy_cloudflare
        ;;
    *)
        show_help
        exit 1
        ;;
esac

echo ""
echo "🎉 ¡Despliegue completado!"
echo "📊 Verifica tu sitio en la plataforma seleccionada"
