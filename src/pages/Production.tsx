import { Link } from 'react-router-dom';
import { Calculator, Factory, TrendingUp, DollarSign, Users, Target, ArrowRight, Zap, CheckCircle, AlertCircle } from 'lucide-react';

export default function ProductionPage() {
  const scenarios = [
    {
      name: 'PYME',
      employees: 100,
      cost: '€4.263',
      roi: '210%',
      payback: '1.9 meses',
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Empresa Mediana',
      employees: 500,
      cost: '€19.655',
      roi: '460%',
      payback: '0.8 meses',
      color: 'from-violet-500 to-violet-700',
    },
    {
      name: 'Gran Empresa',
      employees: 2000,
      cost: '€69.528',
      roi: '520%',
      payback: '0.8 meses',
      color: 'from-emerald-500 to-emerald-700',
    },
    {
      name: 'Gigafactoría',
      employees: 10000,
      cost: '€341.355',
      roi: '780%',
      payback: '0.6 meses',
      color: 'from-amber-500 to-amber-700',
      popular: true,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cesac-700 via-cesac-800 to-cesac-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
              <Factory className="w-4 h-4 text-emerald-400" />
              <span>Análisis de Producción y Coste IA</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Coste Real de la Plataforma IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">en Producción</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Análisis completo del ROI, TCO y proyecciones de producción para diferentes escenarios: desde PYMEs hasta gigafactorías con 10,000+ empleados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#calculadora" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
                Calcular mi escenario <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#gigafactoria" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
                Caso Gigafactoría
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5', label: 'Escenarios analizados', icon: <Target className="w-6 h-6 mx-auto text-cesac-600" /> },
              { value: '780%', label: 'ROI máximo', icon: <TrendingUp className="w-6 h-6 mx-auto text-success-500" /> },
              { value: '0.6m', label: 'Payback más rápido', icon: <DollarSign className="w-6 h-6 mx-auto text-emerald-500" /> },
              { value: '10K+', label: 'Empleados (max)', icon: <Users className="w-6 h-6 mx-auto text-blue-500" /> },
            ].map((stat, i) => (
              <div key={i}>
                {stat.icon}
                <p className="text-4xl font-bold text-cesac-700 mb-1 mt-2">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escenarios */}
      <section id="calculadora" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Escenarios de Producción</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Análisis detallado de costes, ROI y proyecciones para diferentes tamaños de empresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, i) => (
              <div key={i} className={`bg-white rounded-2xl border-2 ${scenario.popular ? 'border-cesac-600 shadow-xl' : 'border-gray-200'} overflow-hidden hover:shadow-lg transition`}>
                {scenario.popular && (
                  <div className="bg-cesac-600 text-white text-xs font-bold px-3 py-1 text-center">MÁS POPULAR</div>
                )}
                <div className={`bg-gradient-to-r ${scenario.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{scenario.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{scenario.employees.toLocaleString()}</span>
                    <span className="text-sm opacity-80">empleados</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Coste mensual:</span>
                    <span className="font-bold text-cesac-700">{scenario.cost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">ROI 12 meses:</span>
                    <span className="font-bold text-success-500">{scenario.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Payback:</span>
                    <span className="font-bold text-cesac-900">{scenario.payback}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caso Gigafactoría */}
      <section id="gigafactoria" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Caso Especial: Gigafactoría</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Análisis detallado del despliegue en una gigafactoría con 10,000+ empleados.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Costes actuales */}
            <div className="bg-white rounded-xl border-2 border-red-200 p-6">
              <h3 className="text-xl font-bold text-cesac-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-red-500" />
                Costes Actuales (sin IA)
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-sm text-gray-700">Formación tradicional</span>
                  <span className="font-bold text-red-700">€2.000.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-sm text-gray-700">Coste de defectos</span>
                  <span className="font-bold text-red-700">€15.000.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-sm text-gray-700">Coste de downtime</span>
                  <span className="font-bold text-red-700">€7.500.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-100 rounded-lg border-2 border-red-200 mt-4">
                  <span className="font-semibold text-gray-900">TOTAL ANUAL</span>
                  <span className="text-xl font-bold text-red-800">€24.500.000</span>
                </div>
              </div>
            </div>

            {/* Costes con IA */}
            <div className="bg-white rounded-xl border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-cesac-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-success-500" />
                Costes con Plataforma IA
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-700">Plataforma CESAC AI</span>
                  <span className="font-bold text-green-700">€4.096.260</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-700">Formación con IA</span>
                  <span className="font-bold text-green-700">€800.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-700">Coste de defectos</span>
                  <span className="font-bold text-green-700">€7.500.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-700">Coste de downtime</span>
                  <span className="font-bold text-green-700">€4.500.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border-2 border-green-200 mt-4">
                  <span className="font-semibold text-gray-900">TOTAL ANUAL</span>
                  <span className="text-xl font-bold text-green-800">€16.896.260</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ahorros */}
          <div className="bg-gradient-to-r from-success-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Ahorros Anuales con CESAC AI</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">€7.6M</p>
                <p className="text-sm opacity-90">Ahorro total</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">186%</p>
                <p className="text-sm opacity-90">ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">60%</p>
                <p className="text-sm opacity-90">Reducción formación</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">50%</p>
                <p className="text-sm opacity-90">Reducción defectos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Comparativa con Formación Tradicional</h2>
          </div>
          <div className="bg-white rounded-xl border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-cesac-900">Modelo</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Coste/empleado</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Coste/hora</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Escalabilidad</th>
                  <th className="text-center px-4 py-4 font-semibold text-gray-600">Disponibilidad</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-4 font-medium">Con Instructor</td>
                  <td className="px-4 py-4 text-center">€800</td>
                  <td className="px-4 py-4 text-center">€80</td>
                  <td className="px-4 py-4 text-center">Limitada</td>
                  <td className="px-4 py-4 text-center">Programada</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">E-learning Tradicional</td>
                  <td className="px-4 py-4 text-center">€300</td>
                  <td className="px-4 py-4 text-center">€30</td>
                  <td className="px-4 py-4 text-center">Media</td>
                  <td className="px-4 py-4 text-center">Bajo demanda</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Blended</td>
                  <td className="px-4 py-4 text-center">€550</td>
                  <td className="px-4 py-4 text-center">€55</td>
                  <td className="px-4 py-4 text-center">Media</td>
                  <td className="px-4 py-4 text-center">Híbrida</td>
                </tr>
                <tr className="bg-success-50">
                  <td className="px-6 py-4 font-bold text-success-700">IA Primero (CESAC) ⭐</td>
                  <td className="px-4 py-4 text-center font-bold text-success-700">€150</td>
                  <td className="px-4 py-4 text-center font-bold text-success-700">€15</td>
                  <td className="px-4 py-4 text-center font-bold text-success-700">Ilimitada</td>
                  <td className="px-4 py-4 text-center font-bold text-success-700">24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-cesac-900">Reducción de costes: <span className="text-success-500">81%</span> vs. formación tradicional</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cesac-700 to-cesac-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Calculator className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">¿Listo para calcular tu escenario?</h2>
          <p className="text-xl text-blue-100 mb-8">Contacta con nuestro equipo para obtener proyecciones personalizadas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link to="/contacto" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition inline-flex items-center gap-2">
              Contactar con un experto <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="mailto:pergolessi9@gmail.com?subject=Consulta%20Análisis%20de%20Producción%20CESAC%20AI"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-cesac-900 transition"
            >
              Enviar Email
            </a>
          </div>
          <p className="text-sm text-blue-200">
            También puedes escribirnos directamente a: <a href="mailto:pergolessi9@gmail.com" className="underline hover:text-white">pergolessi9@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
