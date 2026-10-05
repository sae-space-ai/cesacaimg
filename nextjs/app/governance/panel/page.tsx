'use client';

import { useApp, canAccessGovernance } from '@/lib/store';
import { Shield, Plus, AlertTriangle, CheckCircle } from 'lucide-react';

export default function GovernancePanelPage() {
  const { state } = useApp();

  if (!state.user || !canAccessGovernance(state.user.role)) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <Shield className="w-12 h-12 mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-cesac-900 mb-2">Acceso restringido</h1>
        <p className="text-gray-600">Necesitas permisos de Compliance Officer</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-cesac-900 mb-6">AI Governance Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-cesac-900">12</p>
            <p className="text-sm text-gray-500">Sistemas IA registrados</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-amber-600">3</p>
            <p className="text-sm text-gray-500">Evaluaciones pendientes</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-green-600">9</p>
            <p className="text-sm text-gray-500">Sistemas conformes</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">Inventario de Sistemas IA</h3>
            <button className="px-3 py-1.5 bg-cesac-700 text-white text-xs font-medium rounded-lg flex items-center gap-1"><Plus className="w-3 h-3" />Registrar sistema</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Sistema</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Finalidad</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Riesgo</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { name: 'Tutor IA CESAC', purpose: 'Asistencia educativa', risk: 'Limitado', status: 'Conforme' },
                  { name: 'Chatbot atención', purpose: 'Atención al cliente', risk: 'Mínimo', status: 'Conforme' },
                  { name: 'Análisis de ofertas', purpose: 'Evaluación automática', risk: 'Alto', status: 'En revisión' },
                  { name: 'Generación informes', purpose: 'Redacción asistida', risk: 'Limitado', status: 'Conforme' }
                ].map((sys, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{sys.name}</td>
                    <td className="px-4 py-3 text-gray-600">{sys.purpose}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        sys.risk === 'Alto' ? 'bg-red-50 text-red-700' :
                        sys.risk === 'Limitado' ? 'bg-amber-50 text-amber-700' :
                        'bg-green-50 text-green-700'
                      }`}>{sys.risk}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        sys.status === 'Conforme' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                      }`}>{sys.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
