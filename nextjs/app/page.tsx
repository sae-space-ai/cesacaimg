import Link from 'next/link';
import { businessUnits, products } from '@/lib/data';

export default function HomePage() {
  const featuredProducts = products.filter(p => p.status === 'PUBLISHED').slice(0, 6);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-violet-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
              <span>🤖</span>
              <span>Plataforma integral de formación e IA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Formación, IA y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300">Gobernanza</span> para el presente y el futuro
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Oposiciones, teleformación, inteligencia artificial, AI Governance, consultoría y servicios tecnológicos. Un ecosistema completo para profesionales, empresas y Administraciones Públicas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/formacion" className="px-6 py-3 bg-white text-cesac-900 font-semibold rounded-lg hover:bg-blue-50 transition">
                Explorar formación →
              </Link>
              <Link href="/ia" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
                Descubrir IA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unidades de negocio */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-4">Un ecosistema completo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">10 unidades de negocio especializadas que comparten infraestructura, identidad y calidad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {businessUnits.map(unit => (
              <Link
                key={unit.id}
                href={`/${unit.id}`}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all border hover:border-cesac-200"
              >
                <div className="text-3xl mb-3">{unit.icon}</div>
                <h3 className="font-semibold text-sm text-cesac-900 group-hover:text-cesac-700 transition">{unit.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{unit.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos destacados */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-2">Formación destacada</h2>
              <p className="text-gray-600">Programas más demandados de nuestro catálogo</p>
            </div>
            <Link href="/formacion" className="hidden md:flex items-center gap-1 text-cesac-700 font-medium hover:text-cesac-800 transition">
              Ver todo →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <Link
                key={product.id}
                href={`/formacion/${product.slug}`}
                className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-40 gradient-card flex items-center justify-center text-5xl">
                  {product.image}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-cesac-600 bg-cesac-50 px-2 py-0.5 rounded">{product.unit}</span>
                    <span className="text-[10px] text-gray-500">{product.modality}</span>
                  </div>
                  <h3 className="font-semibold text-cesac-900 group-hover:text-cesac-700 transition mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-cesac-700">{product.price > 0 ? `${product.price}€` : 'Consultar'}</span>
                    <span className="text-xs text-gray-500">{product.hours > 0 ? `${product.hours}h` : product.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para dar el siguiente paso?</h2>
          <p className="text-lg text-blue-200 mb-8">Explora nuestro catálogo, solicita información o contacta con nuestro equipo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formacion" className="px-6 py-3 bg-white text-cesac-900 font-semibold rounded-lg hover:bg-blue-50 transition">
              Ver catálogo completo
            </Link>
            <Link href="/contacto" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
