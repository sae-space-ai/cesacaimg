'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/store';
import { products, businessUnits } from '@/lib/data';
import { FranchiseStats, FranchiseAccessBadge } from '@/components/franchise/FranchiseComponents';
import type { FranchiseTier } from '@/lib/franchise-types';
import { 
  Building2, BookOpen, Users, TrendingUp, Award, 
  Calendar, MessageSquare, Settings, ChevronRight,
  Star, Zap, Crown, Target
} from 'lucide-react';

export default function FranchiseDashboardPage() {
  const { state } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'catalog' | 'students' | 'analytics' | 'settings'>('overview');

  // Simular datos de franquicia (en producción vendría de la base de datos)
  const franchiseTier: FranchiseTier = 'PREMIUM';
  const franchiseData = {
    name: 'CESAC AI Madrid Centro',
    totalRevenue: 45680,
    activeStudents: 127,
    completedCourses: 89,
    commissionRate: 90,
  };

  const tabs = [
    { id: 'overview', label: 'Resumen', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'catalog', label: 'Catálogo Completo', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'students', label: 'Mis Estudiantes', icon: <Users className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analíticas', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'settings', label: 'Configuración', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-cesac-700 via-cesac-800 to-cesac-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8" />
              <h1 className="text-3xl font-bold">{franchiseData.name}</h1>
              <FranchiseAccessBadge tier={franchiseTier} size="lg" />
            </div>
            <p className="text-blue-100 mb-6">
              Panel de control de tu franquicia. Accede a todo el catálogo de CESAC AI y gestiona tus estudiantes.
            </p>
            
            <FranchiseStats
              totalRevenue={franchiseData.totalRevenue}
              activeStudents={franchiseData.activeStudents}
              completedCourses={franchiseData.completedCourses}
              commissionRate={franchiseData.commissionRate}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-cesac-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Acceso rápido al catálogo */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-bold text-cesac-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cesac-600" />
                Acceso completo al catálogo CESAC AI
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Como franquicia {franchiseTier}, tienes acceso a todas las unidades de negocio y productos de CESAC AI.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {businessUnits.slice(0, 10).map(unit => (
                  <Link
                    key={unit.id}
                    href={`/franquicias/catalogo/${unit.id}`}
                    className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition"
                  >
                    <div className="text-2xl mb-1">{unit.icon}</div>
                    <p className="text-xs font-medium text-cesac-900">{unit.shortName}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Productos destacados */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-bold text-cesac-900 mb-4">Productos destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.slice(0, 3).map(product => (
                  <Link
                    key={product.id}
                    href={`/franquicias/producto/${product.slug}`}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="text-3xl mb-2">{product.image}</div>
                    <h3 className="font-semibold text-sm text-cesac-900 mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.unit}</p>
                    <p className="text-sm font-bold text-cesac-700 mt-2">{product.price}€</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Accesos rápidos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/ai-tutor" className="bg-white rounded-xl border p-5 hover:shadow-md transition">
                <MessageSquare className="w-8 h-8 text-cesac-600 mb-2" />
                <h3 className="font-semibold text-cesac-900 mb-1">Tutor IA</h3>
                <p className="text-sm text-gray-600">Accede al tutor IA para tus estudiantes</p>
              </Link>
              <Link href="/campus" className="bg-white rounded-xl border p-5 hover:shadow-md transition">
                <BookOpen className="w-8 h-8 text-cesac-600 mb-2" />
                <h3 className="font-semibold text-cesac-900 mb-1">Campus Virtual</h3>
                <p className="text-sm text-gray-600">Gestiona cursos y estudiantes</p>
              </Link>
              <Link href="/premium/contenido" className="bg-white rounded-xl border p-5 hover:shadow-md transition">
                <Award className="w-8 h-8 text-cesac-600 mb-2" />
                <h3 className="font-semibold text-cesac-900 mb-1">Contenido Premium</h3>
                <p className="text-sm text-gray-600">Masterclasses y casos de estudio</p>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-6">
            {/* Filtros por unidad de negocio */}
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-bold text-cesac-900 mb-4">Catálogo completo - 40 productos</h2>
              <p className="text-sm text-gray-600 mb-4">
                Acceso completo a todos los productos de CESAC AI organizados por unidad de negocio.
              </p>
              
              <div className="space-y-6">
                {businessUnits.map(unit => {
                  const unitProducts = products.filter(p => p.unitId === unit.id || 
                    (unit.id === 'ai-academy' && p.unitId === 'ai-academy') ||
                    (unit.id === 'ai-business' && p.unitId === 'ai-business') ||
                    (unit.id === 'ai-public' && p.unitId === 'ai-public') ||
                    (unit.id === 'ai-governance' && p.unitId === 'ai-governance')
                  );
                  
                  if (unitProducts.length === 0) return null;
                  
                  return (
                    <div key={unit.id}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{unit.icon}</span>
                        <h3 className="font-bold text-cesac-900">{unit.name}</h3>
                        <span className="text-xs bg-cesac-100 text-cesac-700 px-2 py-0.5 rounded-full">
                          {unitProducts.length} productos
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {unitProducts.slice(0, 6).map(product => (
                          <Link
                            key={product.id}
                            href={`/franquicias/producto/${product.slug}`}
                            className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xl">{product.image}</span>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm text-cesac-900">{product.name}</h4>
                                <p className="text-xs text-gray-500">{product.duration}</p>
                              </div>
                            </div>
                            <p className="text-sm font-bold text-cesac-700">{product.price}€</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-bold text-cesac-900 mb-4">Mis Estudiantes</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Estudiante</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Curso</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Progreso</th>
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { name: 'María García', course: 'Agentes de IA', progress: 75, status: 'Activo' },
                      { name: 'Juan López', course: 'Prompt Engineering', progress: 100, status: 'Completado' },
                      { name: 'Ana Martínez', course: 'AI Literacy', progress: 45, status: 'Activo' },
                      { name: 'Carlos Rodríguez', course: 'EU AI Act', progress: 30, status: 'Activo' },
                    ].map((student, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{student.name}</td>
                        <td className="px-4 py-3 text-gray-600">{student.course}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-cesac-600 rounded-full" style={{ width: `${student.progress}%` }}></div>
                            </div>
                            <span className="text-xs text-gray-500">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            student.status === 'Completado' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                          }`}>{student.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-cesac-900 mb-4">Facturación mensual</h3>
                <div className="space-y-3">
                  {['Enero', 'Febrero', 'Marzo', 'Abril'].map((month, i) => {
                    const amount = [8500, 10200, 12800, 14180][i];
                    return (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{month}</span>
                          <span className="font-medium">€{amount.toLocaleString()}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-cesac-600 rounded-full" style={{ width: `${(amount / 14180) * 100}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-cesac-900 mb-4">Cursos más vendidos</h3>
                <div className="space-y-3">
                  {[
                    { name: 'AI Literacy', students: 45 },
                    { name: 'Prompt Engineering', students: 32 },
                    { name: 'Agentes de IA', students: 28 },
                    { name: 'EU AI Act', students: 22 },
                  ].map((course, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">{course.name}</span>
                      <span className="text-sm text-gray-500">{course.students} estudiantes</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-bold text-cesac-900 mb-4">Configuración de la franquicia</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la franquicia</label>
                  <input type="text" defaultValue={franchiseData.name} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email de contacto</label>
                  <input type="email" defaultValue="madrid@cesac-ai.franchise" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" defaultValue="+34 910 000 000" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <button className="px-6 py-2 bg-cesac-700 text-white font-medium rounded-lg hover:bg-cesac-800 transition">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
