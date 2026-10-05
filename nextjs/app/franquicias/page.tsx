import Link from 'next/link';
import { FranchiseCard } from '@/components/franchise/FranchiseComponents';
import { franchiseBenefits, franchiseRequirements } from '@/content/franchises';
import type { FranchiseTier } from '@/lib/franchise-types';
import { Crown, Building2, Star, Zap, Check, ArrowRight, BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Franquicias CESAC AI | Conviértete en Partner Oficial',
  description: 'Únete a la red de franquicias de CESAC AI y ofrece formación en IA, oposiciones y gobernanza en tu zona. Acceso completo al catálogo, tutor IA y soporte dedicado.',
};

export default function FranchiseLandingPage() {
  const tiers: FranchiseTier[] = ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cesac-700 via-cesac-800 to-cesac-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Programa de Franquicias CESAC AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Conviértete en
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> Partner Oficial</span>
              <br />de CESAC AI
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Accede a todo el catálogo de CESAC AI: 40 productos, tutor IA, campus virtual y soporte dedicado. Opera en tu zona con el respaldo de una marca líder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/franquicias/solicitar" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
                Solicitar franquicia
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/franquicias/beneficios" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
                Ver beneficios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '40+', label: 'Productos disponibles' },
              { value: '10', label: 'Unidades de negocio' },
              { value: '92%', label: 'Comisión máxima' },
              { value: '24/7', label: 'Soporte técnico' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-cesac-700 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceso a todo el Home */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Acceso completo a todo el catálogo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Como franquiciado, tendrás acceso a todo lo que aparece en el Home de CESAC AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: '🏛️', title: 'Oposiciones', desc: '8 programas de preparación' },
              { icon: '📚', title: 'Educación', desc: '7 programas para docentes' },
              { icon: '🤖', title: 'AI Academy', desc: '10 cursos de IA' },
              { icon: '💼', title: 'AI Business', desc: '7 programas empresariales' },
              { icon: '🏢', title: 'Public Sector', desc: '6 programas para AAPP' },
              { icon: '⚖️', title: 'AI Governance', desc: '2 programas de compliance' },
              { icon: '🔬', title: 'AI Lab', desc: 'Laboratorio de innovación' },
              { icon: '🎓', title: 'Campus', desc: 'LMS completo' },
              { icon: '📊', title: 'Consulting', desc: 'Consultoría estratégica' },
              { icon: '📋', title: 'Procurement', desc: 'Contratación pública' },
            ].map((unit, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition">
                <div className="text-3xl mb-2">{unit.icon}</div>
                <h3 className="font-semibold text-cesac-900 text-sm mb-1">{unit.title}</h3>
                <p className="text-xs text-gray-500">{unit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/formacion" className="inline-flex items-center gap-2 text-cesac-700 font-semibold hover:underline">
              Ver catálogo completo de 40 productos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Planes de Franquicia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Elige tu nivel de franquicia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 niveles adaptados a diferentes necesidades y capacidades de inversión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {tiers.map((tier, i) => (
              <FranchiseCard
                key={tier}
                tier={tier}
                popular={tier === 'PREMIUM'}
                onSelect={() => {}}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/franquicias/comparativa" className="inline-flex items-center gap-2 text-cesac-700 font-semibold hover:underline">
              Ver comparativa completa de planes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios destacados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Beneficios exclusivos para franquicias
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitas para operar con éxito en tu zona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Catálogo Completo',
                description: 'Acceso a los 40 productos de CESAC AI con actualizaciones automáticas.',
                color: 'from-blue-500 to-blue-700',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Tutor IA 24/7',
                description: 'Tutor IA con RAG personalizado para atender a tus estudiantes en cualquier momento.',
                color: 'from-violet-500 to-violet-700',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Certificaciones Oficiales',
                description: 'Emite certificados oficiales CESAC AI con verificación y validez nacional.',
                color: 'from-emerald-500 to-emerald-700',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Altas Comisiones',
                description: 'Comisiones desde el 85% hasta el 92% según el nivel de franquicia.',
                color: 'from-amber-500 to-amber-700',
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: 'Marca Reconocida',
                description: 'Opera bajo la marca CESAC AI con todo el respaldo institucional y marketing.',
                color: 'from-rose-500 to-rose-700',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Soporte Dedicado',
                description: 'Equipo de soporte técnico y account manager para ayudarte en todo momento.',
                color: 'from-cyan-500 to-cyan-700',
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 hover:shadow-xl transition">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-cesac-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de solicitud */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Proceso de solicitud sencillo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En 4 pasos puedes convertirte en franquiciado de CESAC AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Solicitud', desc: 'Completa el formulario con la información de tu empresa.', icon: '📝' },
              { step: '2', title: 'Evaluación', desc: 'Nuestro equipo evalúa tu solicitud en 5-7 días laborables.', icon: '🔍' },
              { step: '3', title: 'Aprobación', desc: 'Si cumples los requisitos, aprobamos tu solicitud.', icon: '✅' },
              { step: '4', title: 'Activación', desc: 'Firmas el contrato y activamos tu franquicia.', icon: '🚀' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-cesac-100 flex items-center justify-center text-3xl mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="inline-block px-3 py-1 bg-cesac-700 text-white text-sm font-bold rounded-full mb-2">
                  Paso {step.step}
                </div>
                <h3 className="font-bold text-cesac-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/franquicias/solicitar" className="px-8 py-4 bg-cesac-700 text-white font-bold rounded-xl hover:bg-cesac-800 transition inline-flex items-center gap-2">
              Iniciar solicitud
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Lo que dicen nuestros franquiciados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'María González',
                franchise: 'CESAC AI Madrid Centro',
                tier: 'PREMIUM',
                text: 'La mejor decisión que tomé. El soporte es excelente y el catálogo de cursos es impresionante. En 6 meses ya tenía 200 estudiantes.',
              },
              {
                name: 'Carlos Rodríguez',
                franchise: 'CESAC AI Barcelona',
                tier: 'ENTERPRISE',
                text: 'El nivel Enterprise nos permite personalizar todo y tener usuarios ilimitados. La comisión del 92% es inmejorable.',
              },
              {
                name: 'Ana Martínez',
                franchise: 'CESAC AI Valencia',
                tier: 'STANDARD',
                text: 'Empecé con el plan Estándar y en un año ya upgrade a Premium. El tutor IA es lo que más valoran mis estudiantes.',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cesac-600 to-cesac-800 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-cesac-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.franchise}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-cesac-600" />
                  <span className="text-xs font-semibold text-cesac-700">Franquicia {testimonial.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-cesac-700 to-cesac-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Building2 className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para ser parte de CESAC AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a la red de franquicias más innovadora del sector de formación en IA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/franquicias/solicitar" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
              Solicitar franquicia ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contacto" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
              Contactar con ventas
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Sin inversión inicial · Sin permanencia · Soporte completo
          </p>
        </div>
      </section>
    </div>
  );
}
