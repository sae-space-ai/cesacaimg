import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/data';

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
            <span>›</span>
            <Link href="/formacion" className="hover:text-cesac-700">Formación</Link>
            <span>›</span>
            <span className="text-cesac-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-cesac-600 bg-cesac-50 px-2 py-0.5 rounded">{product.unit}</span>
              <span className="text-xs text-gray-500">Código: {product.code}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>

            {/* Key info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-sm font-medium">{product.duration}</p>
                <p className="text-xs text-gray-500">{product.hours > 0 ? `${product.hours} horas` : 'Autoestudio'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-sm font-medium capitalize">{product.modality}</p>
                <p className="text-xs text-gray-500">Modalidad</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-sm font-medium">{product.places}</p>
                <p className="text-xs text-gray-500">Plazas</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-sm font-medium">Certificado</p>
                <p className="text-xs text-gray-500">Verificable</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3">Descripción</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Objectives */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3">Objetivos</h2>
              <ul className="space-y-2">
                {product.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-success-500">✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3">Programa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.program.map((mod, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-cesac-100 text-cesac-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                    <span className="text-sm text-gray-700">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl font-bold text-cesac-900 mb-3">Preguntas frecuentes</h2>
              <div className="space-y-3">
                {product.faqs.map((faq, i) => (
                  <details key={i} className="group bg-gray-50 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-sm text-cesac-900 hover:text-cesac-700 list-none flex justify-between items-center">
                      {faq.q}
                      <span className="transition group-open:rotate-90">›</span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl border shadow-sm p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{product.image}</div>
                <div className="text-3xl font-bold text-cesac-700">{product.price > 0 ? `${product.price}€` : 'Consultar'}</div>
                {product.iva > 0 && <p className="text-xs text-gray-500">+ {product.iva}% IVA</p>}
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Precio empresa</span>
                  <span className="font-medium">{product.priceCompany > 0 ? `${product.priceCompany}€` : 'Consultar'}</span>
                </div>
                {product.pricePublic > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Precio AAPP</span>
                    <span className="font-medium">{product.pricePublic}€</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Inicio</span>
                  <span className="font-medium">{product.startDate}</span>
                </div>
              </div>
              <button className="w-full py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition">
                Matricularme
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">Garantía de satisfacción de 14 días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
