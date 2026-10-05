'use client';

import { useApp, canAccessProcurement } from '@/lib/store';
import { ClipboardList, Plus } from 'lucide-react';

export default function ProcurementPanelPage() {
  const { state } = useApp();

  if (!state.user || !canAccessProcurement(state.user.role)) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <ClipboardList className="w-12 h-12 mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-cesac-900 mb-2">Acceso restringido</h1>
        <p className="text-gray-600">Necesitas permisos de Procurement Manager</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-cesac-900 mb-6">Procurement Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-cesac-900">8</p>
            <p className="text-sm text-gray-500">Oportunidades activas</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-blue-600">3</p>
            <p className="text-sm text-gray-500">En preparación</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-green-600">2</p>
            <p className="text-sm text-gray-500">Presentadas</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <p className="text-2xl font-bold text-amber-600">€245K</p>
            <p className="text-sm text-gray-500">Valor pipeline</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">Oportunidades</h3>
            <button className="px-3 py-1.5 bg-cesac-700 text-white text-xs font-medium rounded-lg flex items-center gap-1"><Plus className="w-3 h-3" />Registrar</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Expediente</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Órgano</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">CPV</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Presupuesto</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">BID/NO BID</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { exp: 'EXP-2025-001', org: 'Ayuntamiento de Demo', cpv: '80510000', budget: '€45.000', bid: 'BID' },
                  { exp: 'EXP-2025-002', org: 'Diputación Provincial', cpv: '80500000', budget: '€80.000', bid: 'BID' },
                  { exp: 'EXP-2025-003', org: 'Consejería Educación', cpv: '80521000', budget: '€120.000', bid: 'Evaluando' },
                  { exp: 'EXP-2025-004', org: 'Ministerio Transformación', cpv: '72220000', budget: '€200.000', bid: 'NO BID' }
                ].map((opp, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{opp.exp}</td>
                    <td className="px-4 py-3 text-gray-600">{opp.org}</td>
                    <td className="px-4 py-3 text-gray-500 font-mono text-xs">{opp.cpv}</td>
                    <td className="px-4 py-3 font-medium">{opp.budget}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        opp.bid === 'BID' ? 'bg-green-50 text-green-700' :
                        opp.bid === 'NO BID' ? 'bg-red-50 text-red-700' :
                        'bg-amber-50 text-amber-700'
                      }`}>{opp.bid}</span>
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
