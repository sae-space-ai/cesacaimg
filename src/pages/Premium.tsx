import { Link } from 'react-router-dom';
import { Crown, Star, Zap, Building2, Shield, Check, ArrowRight, BookOpen, Users, Award, TrendingUp, MessageSquare, Headphones } from 'lucide-react';

export default function PremiumPage() {
  const plans = [
    {
      tier: 'INDIVIDUAL',
      name: 'Individual',
      price: 29,
      period: 'mes',
      description: 'Perfecto para comenzar tu aprendizaje en IA',
      features: [
        'Acceso a cursos básicos',
        '10 consultas IA/mes',
        'Comunidad general',
        'Certificados básicos',
        'Soporte por email',
      ],
      color: 'from-blue-500 to-blue-700',
      icon: <Star className="w-8 h-8" />,
    },
    {
      tier: 'PRO',
      name: 'Pro',
      price: 79,
      period: 'mes',
      description: 'Para profesionales que buscan excelencia',
      features: [
        'Todo lo de Individual, más:',
        'Consultas IA ilimitadas',
        'Casos de estudio reales',
        'Agentes IA especializados',
        'RAG personalizado',
        'Networking exclusivo',
        'Mentoría 1:1',
        '2h consultoría/mes',
        'Informes personalizados',
      ],
      color: 'from-violet-500 to-violet-700',
      icon: <Zap className="w-8 h-8" />,
      popular: true,
    },
    {
      tier: 'BUSINESS',
      name: 'Business',
      price: 299,
      period: 'mes',
      description: 'Para empresas que quieren transformar con IA',
      features: [
        'Todo lo de Pro, más:',
        'Hasta 25 usuarios',
        'Portal empresarial',
        '10h consultoría/mes',
        'Account manager dedicado',
        'Informes de equipo',
        'API access',
        'Onboarding personalizado',
        'SLA garantizado',
      ],
      color: 'from-amber-500 to-amber-700',
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      tier: 'GOVERNANCE',
      name: 'Governance',
      price: 499,
      period: 'mes',
      description: 'Para organizaciones que necesitan cumplimiento IA',
      features: [
        'Todo lo de Business, más:',
        'Módulo Governance completo',
        'Inventario de sistemas IA',
        'Evaluación de riesgos',
        '20h consultoría/mes',
        'Auditorías incluidas',
        'Evidencias de cumplimiento',
        'Soporte 24/7',
        'Cumplimiento EU AI Act',
      ],
      color: 'from-rose-500 to-rose-700',
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  const benefits = [
    { icon: <BookOpen className="w-8 h-8" />, title: 'Contenido Exclusivo', desc: 'Cursos, masterclasses y casos de estudio no disponibles públicamente', color: 'from-blue-500 to-blue-700' },
    { icon: <Zap className="w-8 h-8" />, title: 'Tutor IA Premium', desc: 'Consultas ilimitadas con agentes especializados y RAG personalizado', color: 'from-violet-500 to-violet-700' },
    { icon: <Users className="w-8 h-8" />, title: 'Comunidad Privada', desc: 'Networking con profesionales y acceso a eventos exclusivos', color: 'from-emerald-500 to-emerald-700' },
    { icon: <Award className="w-8 h-8" />, title: 'Certificaciones Premium', desc: 'Certificados destacados con verificación y badges para LinkedIn', color: 'from-amber-500 to-amber-700' },
    { icon: <Headphones className="w-8 h-8" />, title: 'Soporte Dedicado', desc: 'Soporte prioritario, account manager y consultorías con expertos', color: 'from-rose-500 to-rose-700' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Analíticas Avanzadas', desc: 'Dashboard con métricas detalladas e informes personalizados', color: 'from-cyan-500 to-cyan-700' },
  ];

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
              <span>Planes Premium CESAC AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Elige tu plan <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">premium</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Accede a contenido exclusivo, tutor IA ilimitado, comunidad privada y mucho más.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#planes" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
                Ver planes <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#beneficios" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
                Explorar beneficios
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

      {/* Planes */}
      <section id="planes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Planes Premium</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Planes flexibles para individuos, profesionales y empresas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div key={plan.tier} className={`relative bg-white rounded-2xl border-2 ${plan.popular ? 'border-cesac-600 shadow-xl' : 'border-gray-200'} overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-cesac-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MÁS POPULAR</div>
                )}
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon}
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">€{plan.price}</span>
                    <span className="text-sm opacity-80">/{plan.period}</span>
                  </div>
                  <p className="text-sm mt-2 opacity-90">{plan.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/auth" className={`block w-full py-3 rounded-lg font-semibold text-center transition ${plan.popular ? 'bg-cesac-700 text-white hover:bg-cesac-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {plan.tier === 'INDIVIDUAL' ? 'Comenzar prueba gratuita' : 'Seleccionar plan'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Beneficios exclusivos premium</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Todo lo que necesitas para dominar la IA y llevar tu carrera al siguiente nivel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6 hover:shadow-xl transition">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-cesac-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Comparativa de características</h2>
          </div>
          <div className="bg-white rounded-xl border overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-cesac-900">Característica</th>
                  <th className="text-center px-4 py-4 font-semibold text-blue-600">Individual</th>
                  <th className="text-center px-4 py-4 font-semibold text-violet-600">Pro</th>
                  <th className="text-center px-4 py-4 font-semibold text-amber-600">Business</th>
                  <th className="text-center px-4 py-4 font-semibold text-rose-600">Governance</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { feature: 'Cursos básicos', values: [true, true, true, true] },
                  { feature: 'Cursos exclusivos', values: [true, true, true, true] },
                  { feature: 'Masterclasses', values: [true, true, true, true] },
                  { feature: 'Casos de estudio', values: [false, true, true, true] },
                  { feature: 'Consultas IA/mes', values: ['100', '∞', '∞', '∞'] },
                  { feature: 'Agentes especializados', values: [false, true, true, true] },
                  { feature: 'RAG personalizado', values: [false, true, true, true] },
                  { feature: 'Foros privados', values: [true, true, true, true] },
                  { feature: 'Networking', values: [false, true, true, true] },
                  { feature: 'Mentoría 1:1', values: [false, true, true, true] },
                  { feature: 'Consultoría/mes', values: ['0h', '2h', '10h', '20h'] },
                  { feature: 'Certificados premium', values: [true, true, true, true] },
                  { feature: 'Analíticas avanzadas', values: [true, true, true, true] },
                  { feature: 'Informes personalizados', values: [false, true, true, true] },
                  { feature: 'Soporte', values: ['Email', 'Prioritario', 'Dedicado', '24/7'] },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-cesac-900">{row.feature}</td>
                    {row.values.map((value, j) => (
                      <td key={j} className="px-4 py-4 text-center">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="w-5 h-5 text-success-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-sm font-medium text-gray-700">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Lo que dicen nuestros miembros premium</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'María García', role: 'Data Scientist', tier: 'PRO', text: 'El acceso a masterclasses y casos de estudio reales ha sido transformador para mi carrera. El tutor IA ilimitado es increíble.' },
              { name: 'Carlos Rodríguez', role: 'CTO en TechCorp', tier: 'BUSINESS', text: 'La membresía Business nos ha permitido formar a todo nuestro equipo en IA. El account manager dedicado es excelente.' },
              { name: 'Ana Martínez', role: 'Compliance Officer', tier: 'GOVERNANCE', text: 'El módulo de Governance y las consultorías incluidas nos han ayudado a cumplir con el EU AI Act sin problemas.' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6 shadow-sm">
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
          <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-xl text-blue-100 mb-8">Únete a miles de profesionales que ya están aprovechando las ventajas de CESAC AI Premium.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/auth" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
              Comenzar prueba gratuita <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contacto" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
              Contactar con ventas
            </Link>
          </div>
          <p className="text-sm text-blue-200 mb-2">14 días de prueba gratuita · Sin compromiso · Cancela cuando quieras</p>
          <p className="text-sm text-blue-200">
            ¿Dudas? Escríbenos a: <a href="mailto:pergolessi9@gmail.com?subject=Consulta%20Premium%20CESAC%20AI" className="underline hover:text-white">pergolessi9@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
