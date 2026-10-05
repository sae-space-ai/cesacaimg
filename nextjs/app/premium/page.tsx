import Link from 'next/link';
import { Crown, Star, Zap, Building2, Shield, Check, ArrowRight, Play, BookOpen, Users, Award } from 'lucide-react';

export const metadata = {
  title: 'CESAC AI Premium | Contenido Exclusivo y Beneficios Premium',
  description: 'Descubre CESAC AI Premium: contenido exclusivo, tutor IA ilimitado, comunidad privada, certificaciones premium y mucho más.',
};

export default function PremiumLandingPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cesac-700 via-cesac-800 to-cesac-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>CESAC AI Premium</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Lleva tu aprendizaje en IA al
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> siguiente nivel</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Accede a contenido exclusivo, tutor IA ilimitado, comunidad privada, certificaciones premium y mucho más.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/premium/planes" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
                Ver planes premium
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/premium/beneficios" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
                Explorar beneficios
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
              { value: '50+', label: 'Contenidos exclusivos' },
              { value: '∞', label: 'Consultas IA' },
              { value: '24/7', label: 'Soporte premium' },
              { value: '100%', label: 'Satisfacción' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-cesac-700 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios principales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Beneficios exclusivos premium
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitas para dominar la IA y llevar tu carrera al siguiente nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Contenido Exclusivo',
                description: 'Accede a masterclasses, casos de estudio y cursos premium no disponibles públicamente.',
                color: 'from-blue-500 to-blue-700',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Tutor IA Ilimitado',
                description: 'Consultas ilimitadas con agentes especializados y RAG personalizado para tu organización.',
                color: 'from-violet-500 to-violet-700',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Comunidad Privada',
                description: 'Networking con profesionales líderes, mentoría 1:1 y eventos exclusivos.',
                color: 'from-emerald-500 to-emerald-700',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Certificaciones Premium',
                description: 'Certificados destacados con verificación avanzada e integración con LinkedIn.',
                color: 'from-amber-500 to-amber-700',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Soporte Dedicado',
                description: 'Soporte prioritario, account manager dedicado y consultorías con expertos.',
                color: 'from-rose-500 to-rose-700',
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Acceso Anticipado',
                description: 'Sé el primero en acceder a nuevos cursos, características y contenido exclusivo.',
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

      {/* Planes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Elige tu plan premium
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Planes flexibles para individuos, profesionales y empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                tier: 'INDIVIDUAL',
                name: 'Individual',
                price: 29,
                icon: <Star className="w-8 h-8" />,
                color: 'from-blue-500 to-blue-700',
                features: ['Cursos exclusivos', 'Masterclasses', '100 consultas IA/mes', 'Foros privados', 'Certificados premium'],
              },
              {
                tier: 'PRO',
                name: 'Pro',
                price: 79,
                icon: <Zap className="w-8 h-8" />,
                color: 'from-violet-500 to-violet-700',
                features: ['Todo lo de Individual', 'Consultas IA ilimitadas', 'Casos de estudio', 'Mentoría 1:1', '2h consultoría/mes'],
                popular: true,
              },
              {
                tier: 'BUSINESS',
                name: 'Business',
                price: 299,
                icon: <Building2 className="w-8 h-8" />,
                color: 'from-amber-500 to-amber-700',
                features: ['Todo lo de Pro', 'Hasta 25 usuarios', '10h consultoría/mes', 'Account manager', 'Portal empresarial'],
              },
              {
                tier: 'GOVERNANCE',
                name: 'Governance',
                price: 499,
                icon: <Shield className="w-8 h-8" />,
                color: 'from-rose-500 to-rose-700',
                features: ['Todo lo de Business', 'Módulo Governance', '20h consultoría/mes', 'Auditorías incluidas', 'Soporte 24/7'],
              },
            ].map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-2xl border-2 ${plan.popular ? 'border-cesac-600 shadow-xl' : 'border-gray-200'} overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-cesac-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MÁS POPULAR
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon}
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">€{plan.price}</span>
                    <span className="text-sm opacity-80">/mes</span>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/premium/planes"
                    className={`block w-full py-3 rounded-lg font-semibold text-center transition ${
                      plan.popular
                        ? 'bg-cesac-700 text-white hover:bg-cesac-800'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Seleccionar plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/premium/comparativa" className="inline-flex items-center gap-2 text-cesac-700 font-semibold hover:underline">
              Ver comparativa completa de planes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">
              Lo que dicen nuestros miembros premium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'María García',
                role: 'Data Scientist',
                tier: 'PRO',
                text: 'El acceso a masterclasses y casos de estudio reales ha sido transformador para mi carrera. El tutor IA ilimitado es increíble.',
              },
              {
                name: 'Carlos Rodríguez',
                role: 'CTO en TechCorp',
                tier: 'BUSINESS',
                text: 'La membresía Business nos ha permitido formar a todo nuestro equipo en IA. El account manager dedicado es excelente.',
              },
              {
                name: 'Ana Martínez',
                role: 'Compliance Officer',
                tier: 'GOVERNANCE',
                text: 'El módulo de Governance y las consultorías incluidas nos han ayudado a cumplir con el EU AI Act sin problemas.',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cesac-600 to-cesac-800 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-cesac-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-semibold text-cesac-700">Miembro {testimonial.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-cesac-700 to-cesac-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Crown className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para dar el salto premium?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a miles de profesionales que ya están aprovechando las ventajas de CESAC AI Premium.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/premium/planes" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
              Comenzar prueba gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contacto" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
              Contactar con ventas
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            14 días de prueba gratuita · Sin compromiso · Cancela cuando quieras
          </p>
        </div>
      </section>
    </div>
  );
}
