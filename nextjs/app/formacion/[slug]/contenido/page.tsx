import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CourseContentViewer } from '@/components/CourseContentViewer';
import { getCourseContentBySlug } from '@/content';
import { products } from '@/lib/data';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const content = getCourseContentBySlug(params.slug);
  const product = products.find(p => p.slug === params.slug);
  
  if (!content || !product) return { title: 'Contenido no encontrado' };
  
  return {
    title: `Contenido: ${product.name} | CESAC AI`,
    description: content.introduction.substring(0, 160),
  };
}

export default function CourseContentPage({ params }: { params: { slug: string } }) {
  const content = getCourseContentBySlug(params.slug);
  const product = products.find(p => p.slug === params.slug);

  if (!content || !product) {
    notFound();
  }

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-cesac-700">Inicio</Link>
          <span>›</span>
          <Link href="/formacion" className="hover:text-cesac-700">Formación</Link>
          <span>›</span>
          <Link href={`/formacion/${params.slug}`} className="hover:text-cesac-700">{product.name}</Link>
          <span>›</span>
          <span className="text-cesac-900 font-medium">Contenido</span>
        </nav>

        {/* Content Viewer */}
        <CourseContentViewer content={content} />

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-8 bg-gradient-to-r from-cesac-700 to-cesac-900 text-white rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">¿Listo para comenzar?</h3>
          <p className="text-blue-100 mb-4">Matricúlate ahora y accede a todo el contenido del curso.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={`/formacion/${params.slug}`} className="px-6 py-2.5 bg-white text-cesac-900 font-semibold rounded-lg hover:bg-blue-50 transition">
              Ver detalles del curso
            </Link>
            <Link href="/contacto" className="px-6 py-2.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Solicitar información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
