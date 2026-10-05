'use client';

import { useApp, canAccessTeacher } from '@/lib/store';
import { BookOpen, Users, CheckCircle, Edit, BarChart3 } from 'lucide-react';
import { products } from '@/lib/data';

export default function TeacherPanelPage() {
  const { state } = useApp();

  if (!state.user || !canAccessTeacher(state.user.role)) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-cesac-900 mb-2">Acceso restringido</h1>
        <p className="text-gray-600">Necesitas permisos de profesor</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-cesac-900 mb-6">Aula del Profesor</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border p-4">
            <BookOpen className="w-5 h-5 text-cesac-600 mb-2" />
            <p className="text-2xl font-bold">5</p>
            <p className="text-xs text-gray-500">Cursos asignados</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <Users className="w-5 h-5 text-blue-600 mb-2" />
            <p className="text-2xl font-bold">127</p>
            <p className="text-xs text-gray-500">Alumnos activos</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
            <p className="text-2xl font-bold">34</p>
            <p className="text-xs text-gray-500">Tareas corregidas</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <BarChart3 className="w-5 h-5 text-violet-600 mb-2" />
            <p className="text-2xl font-bold">78%</p>
            <p className="text-xs text-gray-500">Progreso medio</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border">
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="font-semibold text-cesac-900">Mis cursos</h2>
            <button className="px-3 py-1.5 bg-cesac-700 text-white text-xs font-medium rounded-lg flex items-center gap-1"><Edit className="w-3 h-3" />Editar contenidos</button>
          </div>
          <div className="divide-y">
            {products.slice(0, 5).map(product => (
              <div key={product.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{product.image}</span>
                  <div>
                    <h3 className="font-medium text-sm">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.students || 25} alumnos · {product.program.length} módulos</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-xs font-medium text-cesac-700 bg-cesac-50 rounded-lg hover:bg-cesac-100">Gestionar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
