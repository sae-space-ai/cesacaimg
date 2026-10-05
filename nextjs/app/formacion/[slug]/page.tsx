import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/data';
import { CourseHeader, CourseMetaGrid, CourseSidebar, ModuleList, TargetAudienceTags, FAQAccordion } from '@/components/course';
import { CheckCircle, Target, GraduationCap, ChevronRight, BookOpen } from 'lucide-react';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return { title: 'Producto no encontrado' };
  
  return {
    title: `${product.name} | ${product.unit}`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      type: 'article',
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-cesac-700">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/formacion" className="hover:text-cesac-700">Formación</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cesac-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Contenido principal */}
          <div className="lg:col-span-2">
            {/* Header del curso */}
            <CourseHeader product={product} />

            {/* Grid de metadatos */}
            <CourseMetaGrid product={product} />

            {/* Descripción */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3">Descripción</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Objetivos */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-cesac-600" />
                Objetivos
              </h2>
              <ul className="space-y-2">
                {product.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-success-500 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programa - Lista de módulos */}
            <ModuleList modules={product.program} />

            {/* Destinatarios - Tags */}
            <TargetAudienceTags audience={product.targetAudience} />

            {/* Resultados de aprendizaje */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cesac-600" />
                Resultados de aprendizaje
              </h2>
              <ul className="space-y-2">
                {product.learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-cesac-500 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ - Acordeón */}
            <FAQAccordion faqs={product.faqs} />

            {/* Enlace al contenido completo */}
            <div className="mt-12 bg-gradient-to-r from-cesac-50 to-blue-50 rounded-xl border-2 border-cesac-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cesac-600 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-cesac-900 mb-2">
                    ¿Quieres ver el contenido completo del programa?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Accede al programa detallado con módulos, lecciones, recursos descargables, evaluaciones y bibliografía completa.
                  </p>
                  <Link
                    href={`/formacion/${product.slug}/contenido`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition"
                  >
                    <BookOpen className="w-5 h-5" />
                    Ver contenido completo del programa
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Sidebar sticky */}
          <div className="lg:col-span-1">
            <CourseSidebar product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
