'use client';

import Link from 'next/link';
import { useApp } from '@/lib/store';
import { products } from '@/lib/data';

export default function DashboardPage() {
  const { state } = useApp();
  const user = state.user;

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-cesac-900 mb-4">Acceso restringido</h1>
        <p className="text-gray-600 mb-6">Inicia sesión para acceder a tu panel</p>
        <Link href="/auth" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium hover:bg-cesac-800 transition">Iniciar sesión</Link>
      </div>
    );
  }

  const enrolledProducts = products.filter(p => user.enrolledCourses.includes(p.id));

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-cesac-900">Bienvenido, {user.name}</h1>
          <p className="text-gray-600">Perfil: <span className="font-medium">{user.role}</span></p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <p className="text-2xl font-bold text-cesac-900">{enrolledProducts.length}</p>
            <p className="text-xs text-gray-500">Cursos activos</p>
          </div>
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <p className="text-2xl font-bold text-cesac-900">
              {Math.round(Object.values(user.progress).reduce((a, b) => a + b, 0) / Math.max(Object.values(user.progress).length, 1))}%
            </p>
            <p className="text-xs text-gray-500">Progreso medio</p>
          </div>
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <p className="text-2xl font-bold text-cesac-900">{user.certificates.length}</p>
            <p className="text-xs text-gray-500">Certificados</p>
          </div>
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <p className="text-2xl font-bold text-cesac-900">48h</p>
            <p className="text-xs text-gray-500">Horas formadas</p>
          </div>
        </div>

        {/* Courses */}
        <div className="bg-white rounded-xl border shadow-sm">
          <div className="p-5 border-b">
            <h2 className="font-semibold text-cesac-900">Mis cursos</h2>
          </div>
          <div className="divide-y">
            {enrolledProducts.map(product => {
              const progress = user.progress[product.id] || 0;
              return (
                <div key={product.id} className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">
                  <div className="w-12 h-12 rounded-lg gradient-card flex items-center justify-center text-2xl shrink-0">{product.image}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-cesac-900 truncate">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.unit}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-cesac-600 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">{progress}%</span>
                    </div>
                  </div>
                  <Link href="/campus" className="px-3 py-1.5 bg-cesac-50 text-cesac-700 text-xs font-medium rounded-lg hover:bg-cesac-100 transition shrink-0">
                    Continuar
                  </Link>
                </div>
              );
            })}
            {enrolledProducts.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                <p className="text-sm">No tienes cursos activos</p>
                <Link href="/formacion" className="text-cesac-700 text-sm hover:underline mt-2 inline-block">Explorar catálogo</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
