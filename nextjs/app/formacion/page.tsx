'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { products, businessUnits } from '@/lib/data';

export default function FormacionPage() {
  const [search, setSearch] = useState('');
  const [unitFilter, setUnitFilter] = useState('');
  const [modalityFilter, setModalityFilter] = useState('');

  const filtered = useMemo(() => {
    let result = products.filter(p => p.status === 'PUBLISHED');
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q));
    }
    if (unitFilter) result = result.filter(p => p.unitId === unitFilter);
    if (modalityFilter) result = result.filter(p => p.modality === modalityFilter);
    return result.sort((a, b) => a.name.localeCompare(b.name));
  }, [search, unitFilter, modalityFilter]);

  return (
    <div className="animate-fade-in">
      <div className="bg-cesac-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-2">Catálogo de Formación</h1>
          <p className="text-gray-600">Programas formativos en 10 unidades de negocio</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white rounded-xl border shadow-sm">
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="search"
              placeholder="Buscar cursos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500 focus:border-cesac-500"
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
          </select>
        </div>

        <p className="text-sm text-gray-500 mb-4">{filtered.length} resultados</p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <Link key={product.id} href={`/formacion/${product.slug}`} className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all overflow-hidden">
              <div className="h-36 gradient-card flex items-center justify-center text-5xl relative">
                {product.image}
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 text-[10px] font-semibold uppercase rounded-full text-cesac-700">{product.modality}</span>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cesac-600">{product.unit}</span>
                <h3 className="font-semibold text-cesac-900 group-hover:text-cesac-700 transition mt-1 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.shortDescription}</p>
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="text-lg font-bold text-cesac-700">{product.price > 0 ? `${product.price}€` : 'Consultar'}</span>
                  <span className="text-xs text-gray-500">{product.hours > 0 ? `${product.hours}h` : product.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No se encontraron resultados</p>
          </div>
        )}
      </div>
    </div>
  );
}
