'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, CheckCircle, FileText, Download, Video, Headphones, Presentation, BookOpen } from 'lucide-react';
import { useApp } from '@/lib/store';
import { products } from '@/lib/data';

export default function CampusPage() {
  const { state } = useApp();
  const user = state.user;
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Accede al Campus</h1>
        <Link href="/auth" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium">Iniciar sesión</Link>
      </div>
    );
  }

  const enrolledProducts = products.filter(p => user.enrolledCourses.includes(p.id));
  const activeCourse = selectedCourse ? products.find(p => p.id === selectedCourse) : enrolledProducts[0];

  if (activeCourse) {
    return (
      <div className="animate-fade-in min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/dashboard" className="p-2 rounded-lg hover:bg-white transition"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-xl font-bold text-cesac-900">{activeCourse.name}</h1>
              <p className="text-sm text-gray-500">{activeCourse.unit}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar - modules */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border shadow-sm">
                <div className="p-4 border-b">
                  <h3 className="font-semibold text-sm">Contenido del curso</h3>
                  <div className="mt-2 h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-cesac-600 rounded-full" style={{ width: `${user.progress[activeCourse.id] || 0}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{user.progress[activeCourse.id] || 0}% completado</p>
                </div>
                <div className="p-2">
                  {activeCourse.program.map((mod, i) => {
                    const completed = i < Math.floor((user.progress[activeCourse.id] || 0) / 100 * activeCourse.program.length);
                    return (
                      <button key={i} className={`w-full text-left p-3 rounded-lg text-sm flex items-center gap-2 transition ${completed ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50 text-gray-700'}`}>
                        {completed ? <CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> : <div className="w-4 h-4 rounded-full border-2 border-gray-300 shrink-0"></div>}
                        <span className="truncate">{mod}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border shadow-sm">
                <div className="aspect-video bg-gradient-to-br from-cesac-800 to-cesac-900 rounded-t-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-3 opacity-80" />
                    <p className="text-sm opacity-70">Contenido de la lección</p>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-cesac-900 mb-2">{activeCourse.program[0]}</h2>
                  <p className="text-gray-600 mb-4">Módulo introductorio del programa. En este módulo se presentan los conceptos fundamentales y se establecen las bases para el resto del curso.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                      { icon: <Video className="w-4 h-4" />, label: 'Vídeo', time: '45 min' },
                      { icon: <FileText className="w-4 h-4" />, label: 'Documento', time: 'PDF' },
                      { icon: <Presentation className="w-4 h-4" />, label: 'Presentación', time: '30 slides' },
                      { icon: <Headphones className="w-4 h-4" />, label: 'Audio', time: '20 min' }
                    ].map((resource, i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded-lg text-center">
                        <div className="text-cesac-600 flex justify-center mb-1">{resource.icon}</div>
                        <p className="text-xs font-medium">{resource.label}</p>
                        <p className="text-[10px] text-gray-500">{resource.time}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-cesac-700 text-white text-sm font-medium rounded-lg hover:bg-cesac-800 transition flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" /> Marcar como completado
                    </button>
                    <button className="px-4 py-2 border text-sm font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                      <Download className="w-4 h-4" /> Descargar material
                    </button>
                  </div>
                </div>
              </div>

              {/* Evaluation */}
              <div className="bg-white rounded-xl border shadow-sm mt-6 p-6">
                <h3 className="font-semibold text-cesac-900 mb-3">Evaluación del módulo</h3>
                <p className="text-sm text-gray-600 mb-4">Realiza el test de evaluación para verificar tu comprensión del contenido.</p>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm font-medium mb-2">1. ¿Cuál es el concepto fundamental del módulo?</p>
                    <div className="space-y-2">
                      {['Opción A - Concepto básico', 'Opción B - Concepto avanzado', 'Opción C - Concepto intermedio', 'Opción D - Ninguna anterior'].map((opt, i) => (
                        <label key={i} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                          <input type="radio" name="q1" className="rounded border-gray-300" /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-success-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition">
                    Enviar respuesta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-center">
      <BookOpen className="w-12 h-12 mx-auto text-gray-300 mb-4" />
      <h2 className="text-xl font-bold text-cesac-900 mb-2">No tienes cursos activos</h2>
      <p className="text-gray-600 mb-4">Explora nuestro catálogo y matricúlate en un programa</p>
      <Link href="/formacion" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium">Ver catálogo</Link>
    </div>
  );
}
