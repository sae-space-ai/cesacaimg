import { subscriptionPlans } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Planes de Suscripción | CESAC AI',
  description: 'Accede a todo el ecosistema CESAC AI con un plan adaptado a tus necesidades.',
};

export default function SubscriptionsPage() {
  return (
    <div className="animate-fade-in">
      <div className="bg-cesac-50 py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-cesac-900 mb-4">Planes de Suscripción</h1>
          <p className="text-lg text-gray-600">Accede a todo el ecosistema CESAC AI con un plan adaptado a tus necesidades.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subscriptionPlans.map((plan, i) => (
            <div key={plan.id} className={`bg-white rounded-xl border p-6 ${i === 1 ? 'ring-2 ring-cesac-600 relative' : ''}`}>
              {i === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-cesac-700 text-white text-xs font-medium rounded-full">Recomendado</span>}
              <h3 className="font-bold text-cesac-900 mb-1">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-cesac-700">€{plan.price}</span>
                <span className="text-sm text-gray-500">/{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-success-500 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 bg-cesac-700 text-white text-sm font-medium rounded-lg hover:bg-cesac-800 transition">
                Suscribirme
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
