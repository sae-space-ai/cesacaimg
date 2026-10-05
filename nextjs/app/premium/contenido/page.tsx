'use client';

import { useState } from 'react';
import Link from 'next/link';
import { premiumContent, getPremiumContentByType } from '@/content/premium';
import { PremiumBadge } from '@/components/premium/PremiumComponents';
import type { PremiumTier } from '@/lib/premium-types';
import { BookOpen, Play, Download, Calendar, Clock, Users, Filter, Search } from 'lucide-react';

export default function PremiumContentPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Simular tier del usuario
  const userTier: PremiumTier = 'PRO';

  const types = [
    { id: 'all', label: 'Todos', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'masterclass', label: 'Masterclasses', icon: <Play className="w-4 h-4" /> },
    { id: 'case-study', label: 'Casos de Estudio', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'exclusive-course', label: 'Cursos Exclusivos', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'webinar', label: 'Webinars', icon: <Users className="w-4 h-4" /> },
    { id: 'workshop', label: 'Workshops', icon: <BookOpen className="w-4 h-4" /> },
  ];

  const filteredContent = premiumContent.filter(content => {
    const matchesType = selectedType === 'all' || content.type === selectedType;
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier = content.tier.includes(userTier);
    return matchesType && matchesSearch && matchesTier;
  });

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cesac-900">Contenido Premium</h1>
              <p className="text-gray-600">Contenido exclusivo para miembros premium</p>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-xl border p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Búsqueda */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                placeholder="Buscar contenido..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500"
              />
            </div>

            {/* Filtro por tipo */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {types.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                    selectedType === type.id
                      ? 'bg-cesac-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type.icon}
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-cesac-900">{filteredContent.length}</p>
            <p className="text-xs text-gray-500">Contenido disponible</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-cesac-900">
              {filteredContent.filter(c => c.type === 'masterclass').length}
            </p>
            <p className="text-xs text-gray-500">Masterclasses</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-cesac-900">
              {filteredContent.filter(c => c.type === 'case-study').length}
            </p>
            <p className="text-xs text-gray-500">Casos de estudio</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-cesac-900">
              {filteredContent.reduce((sum, c) => sum + parseInt(c.duration), 0)}h
            </p>
            <p className="text-xs text-gray-500">Horas de contenido</p>
          </div>
        </div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(content => (
            <div key={content.id} className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition group">
              <div className="h-40 bg-gradient-to-br from-cesac-100 to-blue-100 flex items-center justify-center text-6xl relative">
                {content.thumbnail}
                {content.isExclusive && (
                  <div className="absolute top-3 right-3">
                    <PremiumBadge tier={content.tier[0]} size="sm" />
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase text-cesac-600 bg-cesac-50 px-2 py-0.5 rounded">
                    {content.type.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {content.duration}
                  </span>
                </div>
                <h3 className="font-semibold text-cesac-900 mb-2 group-hover:text-cesac-700 transition">
                  {content.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{content.description}</p>
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="text-xs text-gray-500">{content.instructor}</span>
                  <button className="flex items-center gap-1 text-sm text-cesac-700 font-medium hover:underline">
                    <Play className="w-4 h-4" />
                    Acceder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No se encontró contenido con los filtros seleccionados</p>
          </div>
        )}
      </div>
    </div>
  );
}
