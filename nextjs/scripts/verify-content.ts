// Script de verificación de coherencia entre productos y contenido

import { products } from '@/lib/data';
import { allCourseContent } from '@/content';

export function verifyContentConsistency() {
  const results = {
    total: products.length,
    withContent: 0,
    withoutContent: 0,
    inconsistencies: [] as Array<{
      productId: string;
      productName: string;
      issue: string;
    }>,
  };

  products.forEach(product => {
    const content = allCourseContent.find(c => c.productSlug === product.slug);
    
    if (!content) {
      results.withoutContent++;
      results.inconsistencies.push({
        productId: product.id,
        productName: product.name,
        issue: 'No tiene contenido detallado',
      });
      return;
    }

    results.withContent++;

    // Verificar que el nombre coincida
    if (content.productName !== product.name) {
      results.inconsistencies.push({
        productId: product.id,
        productName: product.name,
        issue: `Nombre inconsistente: Producto="${product.name}" vs Contenido="${content.productName}"`,
      });
    }

    // Verificar que la introducción no esté vacía
    if (!content.introduction || content.introduction.trim() === '') {
      results.inconsistencies.push({
        productId: product.id,
        productName: product.name,
        issue: 'Introducción vacía',
      });
    }

    // Verificar que tenga al menos un módulo
    if (content.modules.length === 0) {
      results.inconsistencies.push({
        productId: product.id,
        productName: product.name,
        issue: 'No tiene módulos',
      });
    }

    // Verificar que cada módulo tenga al menos una lección
    content.modules.forEach(module => {
      if (module.lessons.length === 0) {
        results.inconsistencies.push({
          productId: product.id,
          productName: product.name,
          issue: `Módulo "${module.title}" no tiene lecciones`,
        });
      }
    });

    // Verificar que la metodología no esté vacía
    if (!content.methodology || content.methodology.trim() === '') {
      results.inconsistencies.push({
        productId: product.id,
        productName: product.name,
        issue: 'Metodología vacía',
      });
    }

    // Verificar que el sistema de evaluación no esté vacío
    if (!content.evaluationSystem || content.evaluationSystem.trim() === '') {
      results.inconsistencies.push({
        productId: product.id,
        productName: product.name,
        issue: 'Sistema de evaluación vacío',
      });
    }

    // Verificar que la certificación no esté vacía
    if (!content.certification || content.certification.trim() === '') {
      results.inconsistencies.push({
        productId: product.id,
        productName: product.name,
        issue: 'Certificación vacía',
      });
    }
  });

  return results;
}

// Ejecutar verificación
if (require.main === module) {
  const results = verifyContentConsistency();
  console.log('\n=== VERIFICACIÓN DE COHERENCIA ===\n');
  console.log(`Total de productos: ${results.total}`);
  console.log(`Con contenido: ${results.withContent}`);
  console.log(`Sin contenido: ${results.withoutContent}`);
  console.log(`Inconsistencias: ${results.inconsistencies.length}\n`);

  if (results.inconsistencies.length > 0) {
    console.log('Inconsistencias encontradas:');
    results.inconsistencies.forEach((inc, i) => {
      console.log(`${i + 1}. ${inc.productName} (${inc.productId}): ${inc.issue}`);
    });
  } else {
    console.log('✅ Todos los productos tienen contenido coherente y completo.');
  }
}
