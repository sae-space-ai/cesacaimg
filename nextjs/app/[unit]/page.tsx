import Link from 'next/link';
import { notFound } from 'next/navigation';
import { businessUnits, products } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

const unitContent: Record<string, { title: string; subtitle: string; description: string; features: string[] }> = {
  'oposiciones': { title: 'CESAC Oposiciones', subtitle: 'Tu futuro en la Administración Pública', description: 'Preparación integral para oposiciones con metodología probada, simulacros reales, banco de test actualizado y tutorización personalizada.', features: ['Temario actualizado', 'Simulacros cronometrados', 'Banco de 15.000+ preguntas', 'Tutor personal', 'Preparación física', 'Supuestos prácticos'] },
  'educacion': { title: 'CESAC Educación', subtitle: 'Innovación pedagógica con IA', description: 'Formación para docentes, equipos directivos y centros educativos. Integramos la IA en la práctica educativa de forma responsable.', features: ['IA para docentes', 'Programación didáctica con IA', 'Evaluación innovadora', 'Planes de centro', 'Bonificable FUNDAE', 'Acompañamiento integral'] },
  'ia': { title: 'CESAC AI Academy', subtitle: 'De la alfabetización a la especialización', description: 'La academia de IA más completa: desde AI Literacy hasta desarrollo de agentes, RAG y automatización.', features: ['AI Literacy', 'Prompt Engineering', 'Agentes de IA', 'RAG y bases de conocimiento', 'Automatización', 'Programa profesional completo'] },
  'empresas': { title: 'CESAC AI Business', subtitle: 'Transformación con IA para tu empresa', description: 'Ayudamos a autónomos, pymes y empresas a integrar la IA de forma estratégica.', features: ['Diagnóstico empresarial', 'Plan de implantación', 'Automatización administrativa', 'IA para marketing', 'IA para atención al cliente', 'Consultoría estratégica'] },
  'administraciones': { title: 'CESAC AI Public Sector', subtitle: 'Modernización de las Administraciones', description: 'Programas específicos para empleados públicos y Administraciones.', features: ['AI Literacy para empleados públicos', 'IA en procedimientos', 'IA en contratación pública', 'Gestión documental inteligente', 'Diseño de proyectos públicos', 'Evidencias de ejecución'] },
  'governance': { title: 'CESAC AI Governance', subtitle: 'Cumplimiento del EU AI Act', description: 'Prepara tu organización para el Reglamento Europeo de IA.', features: ['Inventario de sistemas IA', 'Clasificación de riesgos', 'Evaluación de cumplimiento', 'Documentación técnica', 'Evidencias auditables', 'Formación organizacional'] },
  'lab': { title: 'CESAC AI Lab', subtitle: 'Innovación y desarrollo a medida', description: 'Laboratorio de innovación donde diseñamos soluciones de IA personalizadas.', features: ['Desarrollo de agentes', 'Automatizaciones a medida', 'Sistemas RAG personalizados', 'Prototipado rápido', 'Integración de APIs', 'Pruebas y validación'] },
  'campus': { title: 'CESAC AI Campus', subtitle: 'Tu campus virtual completo', description: 'Plataforma LMS con tutor IA, evaluaciones, certificados verificables y seguimiento personalizado.', features: ['LMS completo', 'Tutor IA integrado', 'Evaluaciones adaptativas', 'Certificados verificables', 'Sesiones en directo', 'Comunidad de aprendizaje'] },
  'consultoria': { title: 'CESAC AI Consulting', subtitle: 'Consultoría estratégica en IA', description: 'Acompañamiento estratégico para organizaciones que quieren integrar la IA.', features: ['Diagnóstico de madurez', 'Estrategia de IA', 'Gestión del cambio', 'Selección de proveedores', 'Formación de equipos', 'Seguimiento y medición'] },
  'procurement': { title: 'CESAC AI Procurement', subtitle: 'Contratación pública inteligente', description: 'Monitorización de licitaciones y gestión del ciclo completo de contratación pública.', features: ['Monitorización de licitaciones', 'Análisis de requisitos', 'Preparación de ofertas', 'Evaluación BID/NO BID', 'Gestión documental', 'Seguimiento de expedientes'] }
};

export function generateStaticParams() {
  const slugs = ['oposiciones', 'educacion', 'ia', 'empresas', 'administraciones', 'governance', 'lab', 'campus', 'consultoria', 'procurement'];
  return slugs.map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const content = unitContent[params.slug];
  if (!content) return { title: 'Página no encontrada' };
  return {
    title: `${content.title} | CESAC AI`,
    description: content.description,
  };
}

export default function UnitPage({ params }: { params: { slug: string } }) {
  const content = unitContent[params.slug];
  const unit = businessUnits.find(u => u.id === params.slug || (params.slug === 'ia' && u.id === 'ai-academy') || (params.slug === 'empresas' && u.id === 'ai-business') || (params.slug === 'administraciones' && u.id === 'ai-public') || (params.slug === 'governance' && u.id === 'ai-governance') || (params.slug === 'lab' && u.id === 'ai-lab') || (params.slug === 'campus' && u.id === 'ai-campus') || (params.slug === 'consultoria' && u.id === 'ai-consulting') || (params.slug === 'procurement' && u.id === 'ai-procurement'));

  if (!content) {
    notFound();
  }

  const unitId = unit?.id || params.slug;
  const unitProducts = products.filter(p => p.unitId === unitId);

  return (
    <div className="animate-fade-in">
      <div className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-5xl mb-4">{unit?.icon || '🎯'}</div>
          <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
          <p className="text-xl text-blue-200">{content.subtitle}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{content.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {content.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-success-500" />
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cesac-50 rounded-xl p-6 border">
            <h3 className="font-semibold text-cesac-900 mb-4">¿Te interesa?</h3>
            <p className="text-sm text-gray-600 mb-4">Solicita información sin compromiso o explora nuestros programas.</p>
            <div className="space-y-2">
              <Link href="/formacion" className="block w-full py-2.5 bg-cesac-700 text-white text-center text-sm font-medium rounded-lg hover:bg-cesac-800 transition">
                Ver programas
              </Link>
              <Link href="/contacto" className="block w-full py-2.5 border border-cesac-300 text-cesac-700 text-center text-sm font-medium rounded-lg hover:bg-white transition">
                Solicitar información
              </Link>
            </div>
          </div>
        </div>

        {unitProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-cesac-900 mb-6">Programas disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unitProducts.map(product => (
                <Link key={product.id} href={`/formacion/${product.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-md transition group">
                  <div className="text-3xl mb-2">{product.image}</div>
                  <h3 className="font-semibold text-cesac-900 group-hover:text-cesac-700 transition mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-cesac-700">{product.price > 0 ? `${product.price}€` : 'Consultar'}</span>
                    <span className="text-xs text-gray-500">{product.hours > 0 ? `${product.hours}h` : product.duration}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
