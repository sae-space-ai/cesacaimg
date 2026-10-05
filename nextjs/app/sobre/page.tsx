import { CheckCircle } from 'lucide-react';
import { businessUnits } from '@/lib/data';

export const metadata = {
  title: 'Sobre CESAC AI | Inteligencia Artificial · Educación · Empresa · Governance',
  description: 'Conoce CESAC AI, plataforma integral de formación, inteligencia artificial, gobernanza y servicios tecnológicos.',
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="bg-cesac-50 py-16 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-cesac-900 mb-4">Sobre CESAC AI</h1>
          <p className="text-lg text-gray-600 max-w-3xl">Plataforma integral de formación, inteligencia artificial, gobernanza y servicios tecnológicos para profesionales, empresas y Administraciones Públicas.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-cesac-900 mb-4">Nuestra misión</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              CESAC AI nace de la evolución de una academia presencial y online consolidada, transformándose en un ecosistema tecnológico completo que integra formación tradicional, inteligencia artificial, gobernanza y consultoría.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nuestro objetivo es democratizar el acceso a la formación de calidad en inteligencia artificial, preparar a los profesionales para las oposiciones del futuro, y ayudar a empresas y Administraciones Públicas a navegar la transformación digital con rigor y responsabilidad.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Creemos en una IA responsable, supervisada por humanos, con fuentes verificadas y al servicio de las personas.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cesac-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-cesac-900 mb-6">Principios</h3>
            <div className="space-y-4">
              {[
                { title: 'Rigor académico', desc: 'Contenidos validados por expertos.' },
                { title: 'IA responsable', desc: 'Supervisión humana, fuentes verificadas.' },
                { title: 'Accesibilidad', desc: 'Formación para todos los perfiles.' },
                { title: 'Transparencia', desc: 'Sin datos inventados ni reseñas falsas.' },
                { title: 'Privacidad por diseño', desc: 'Minimización y cumplimiento normativo.' }
              ].map((p, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-cesac-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-cesac-900">{p.title}</h4>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-cesac-900 mb-6">Ecosistema CESAC AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessUnits.map(unit => (
            <div key={unit.id} className="bg-white rounded-xl border p-5 hover:shadow-sm transition">
              <div className="text-3xl mb-3">{unit.icon}</div>
              <h3 className="font-semibold text-cesac-900 mb-1">{unit.name}</h3>
              <p className="text-sm text-gray-600">{unit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
