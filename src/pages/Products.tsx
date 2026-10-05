import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, Filter, Clock, Users, Award, CheckCircle, ChevronRight, ShoppingCart, BookOpen, Target, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { products, businessUnits, type Product } from '../lib/data';
import { useApp, notify } from '../lib/store';

export function Catalog() {
  const [search, setSearch] = useState('');
  const [unitFilter, setUnitFilter] = useState('');
  const [modalityFilter, setModalityFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filtered = useMemo(() => {
    let result = products.filter(p => p.status === 'PUBLISHED');
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q) || p.unit.toLowerCase().includes(q));
    }
    if (unitFilter) result = result.filter(p => p.unitId === unitFilter);
    if (modalityFilter) result = result.filter(p => p.modality === modalityFilter);
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'hours') result.sort((a, b) => b.hours - a.hours);
    else result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, unitFilter, modalityFilter, sortBy]);

  return (
    <div className="animate-fade-in">
      <div className="bg-cesac-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-2">Catálogo de Formación</h1>
          <p className="text-gray-600">40 programas formativos en 10 unidades de negocio</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white rounded-xl border shadow-sm">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Buscar cursos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500 focus:border-cesac-500"
            />
          </div>
          <select value={unitFilter} onChange={e => setUnitFilter(e.target.value)} className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500">
            <option value="">Todas las unidades</option>
            {businessUnits.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
          <select value={modalityFilter} onChange={e => setModalityFilter(e.target.value)} className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500">
            <option value="">Todas las modalidades</option>
            <option value="online">Online</option>
            <option value="presencial">Presencial</option>
            <option value="hibrido">Híbrido</option>
            <option value="asincrono">Asíncrono</option>
          </select>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500">
            <option value="name">Ordenar: Nombre</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="hours">Horas: mayor a menor</option>
          </select>
        </div>

        <p className="text-sm text-gray-500 mb-4">{filtered.length} resultados</p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No se encontraron resultados</p>
            <p className="text-sm">Prueba a modificar los filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useApp();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, name: product.name, price: product.price, quantity: 1 } });
    notify(dispatch, 'success', `${product.name} añadido al carrito`);
  };

  return (
    <Link to={`/formacion/${product.slug}`} className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all overflow-hidden">
      <div className="h-36 gradient-card flex items-center justify-center text-5xl relative">
        {product.image}
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 text-[10px] font-semibold uppercase rounded-full text-cesac-700">{product.modality}</span>
      </div>
      <div className="p-5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-cesac-600">{product.unit}</span>
        <h3 className="font-semibold text-cesac-900 group-hover:text-cesac-700 transition mt-1 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.shortDescription}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          {product.hours > 0 && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{product.hours}h</span>}
          <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{product.program.length} módulos</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t">
          <span className="text-lg font-bold text-cesac-700">{product.price > 0 ? `${product.price}€` : 'Consultar'}</span>
          <button onClick={handleAddToCart} className="p-2 rounded-lg bg-cesac-50 text-cesac-700 hover:bg-cesac-100 transition" aria-label="Añadir al carrito">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { state, dispatch } = useApp();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-cesac-900 mb-4">Producto no encontrado</h1>
        <Link to="/formacion" className="text-cesac-700 hover:underline">Volver al catálogo</Link>
      </div>
    );
  }

  const handleEnroll = () => {
    if (!state.user) {
      notify(dispatch, 'warning', 'Inicia sesión para matricularte');
      return;
    }
    dispatch({ type: 'ENROLL_COURSE', payload: product.id });
    notify(dispatch, 'success', `Matriculado en ${product.name}`);
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, name: product.name, price: product.price, quantity: 1 } });
    notify(dispatch, 'success', `${product.name} añadido al carrito`);
  };

  const isEnrolled = state.user?.enrolledCourses.includes(product.id);

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-cesac-700">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/formacion" className="hover:text-cesac-700">Formación</Link>
            <ChevronRight className="w-3 h-3" />
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
                <Clock className="w-5 h-5 mx-auto text-cesac-600 mb-1" />
                <p className="text-sm font-medium">{product.duration}</p>
                <p className="text-xs text-gray-500">{product.hours > 0 ? `${product.hours} horas` : 'Autoestudio'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <MapPin className="w-5 h-5 mx-auto text-cesac-600 mb-1" />
                <p className="text-sm font-medium capitalize">{product.modality}</p>
                <p className="text-xs text-gray-500">Modalidad</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <Users className="w-5 h-5 mx-auto text-cesac-600 mb-1" />
                <p className="text-sm font-medium">{product.places}</p>
                <p className="text-xs text-gray-500">Plazas</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <Award className="w-5 h-5 mx-auto text-cesac-600 mb-1" />
                <p className="text-sm font-medium">Certificado</p>
                <p className="text-xs text-gray-500">Verificable</p>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3">Descripción</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Objectives */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-cesac-600" />Objetivos</h2>
              <ul className="space-y-2">
                {product.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-success-500 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-cesac-600" />Programa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.program.map((mod, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-cesac-100 text-cesac-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                    <span className="text-sm text-gray-700">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target audience */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3">Destinatarios</h2>
              <div className="flex flex-wrap gap-2">
                {product.targetAudience.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 bg-cesac-50 text-cesac-700 text-sm rounded-lg">{t}</span>
                ))}
              </div>
            </div>

            {/* Learning outcomes */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cesac-900 mb-3 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-cesac-600" />Resultados de aprendizaje</h2>
              <ul className="space-y-2">
                {product.learningOutcomes.map((lo, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-cesac-500 shrink-0 mt-0.5" />
                    <span>{lo}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl font-bold text-cesac-900 mb-3">Preguntas frecuentes</h2>
              <div className="space-y-3">
                {product.faqs.map((faq, i) => (
                  <details key={i} className="group bg-gray-50 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-sm text-cesac-900 hover:text-cesac-700 list-none flex justify-between items-center">
                      {faq.q}
                      <ChevronRight className="w-4 h-4 transition group-open:rotate-90" />
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
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Certificación</span>
                  <span className="font-medium text-right text-xs">{product.certification}</span>
                </div>
              </div>
              {isEnrolled ? (
                <Link to="/campus" className="block w-full py-3 bg-success-500 text-white text-center font-semibold rounded-lg hover:bg-green-600 transition">
                  Acceder al curso
                </Link>
              ) : (
                <div className="space-y-2">
                  <button onClick={handleEnroll} className="w-full py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition">
                    Matricularme
                  </button>
                  <button onClick={handleAddToCart} className="w-full py-3 border border-cesac-300 text-cesac-700 font-semibold rounded-lg hover:bg-cesac-50 transition flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" /> Añadir al carrito
                  </button>
                </div>
              )}
              <p className="text-xs text-gray-500 text-center mt-4">Garantía de satisfacción de 14 días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
