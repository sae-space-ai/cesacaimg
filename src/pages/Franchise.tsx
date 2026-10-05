import { Link } from 'react-router-dom';
import { Crown, Building2, Star, Zap, Check, ArrowRight, BookOpen, Users, Award, TrendingUp, Factory, Calculator, Shield } from 'lucide-react';

export default function FranchisePage() {
  const tiers = [
    { tier: 'BASIC', name: 'Básica', price: '500', users: '5', commission: '85%', color: 'from-gray-500 to-gray-700', icon: <Star className="w-6 h-6" /> },
    { tier: 'STANDARD', name: 'Estándar', price: '1.500', users: '15', commission: '88%', color: 'from-blue-500 to-blue-700', icon: <Building2 className="w-6 h-6" /> },
    { tier: 'PREMIUM', name: 'Premium', price: '3.500', users: '50', commission: '90%', color: 'from-violet-500 to-violet-700', icon: <Zap className="w-6 h-6" />, popular: true },
    { tier: 'ENTERPRISE', name: 'Enterprise', price: '8.000', users: '∞', commission: '92%', color: 'from-amber-500 to-amber-700', icon: <Crown className="w-6 h-6" /> },
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
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Programa de Franquicias CESAC AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Conviértete en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Partner Oficial</span> de CESAC AI
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Accede a todo el catálogo de 40 productos, tutor IA, campus virtual y soporte dedicado. Opera en tu zona con el respaldo de una marca líder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition flex items-center gap-2">
                Solicitar franquicia <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#planes" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition">
                Ver planes
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

      {/* Acceso al catálogo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Acceso completo a todo el catálogo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Como franquiciado, tendrás acceso a todo lo que aparece en el Home de CESAC AI.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: '🏛️', title: 'Oposiciones', desc: '8 programas' },
              { icon: '📚', title: 'Educación', desc: '7 programas' },
              { icon: '🤖', title: 'AI Academy', desc: '10 cursos' },
              { icon: '💼', title: 'AI Business', desc: '7 programas' },
              { icon: '🏢', title: 'Public Sector', desc: '6 programas' },
              { icon: '⚖️', title: 'AI Governance', desc: '2 programas' },
              { icon: '🔬', title: 'AI Lab', desc: 'Innovación' },
              { icon: '🎓', title: 'Campus', desc: 'LMS completo' },
              { icon: '📊', title: 'Consulting', desc: 'Estrategia' },
              { icon: '📋', title: 'Procurement', desc: 'Licitaciones' },
            ].map((unit, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition">
                <div className="text-3xl mb-2">{unit.icon}</div>
                <h3 className="font-semibold text-cesac-900 text-sm mb-1">{unit.title}</h3>
                <p className="text-xs text-gray-500">{unit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Elige tu nivel de franquicia</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">4 niveles adaptados a diferentes necesidades y capacidades de inversión.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((plan) => (
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
                    <span className="text-sm opacity-80">/mes</span>
                  </div>
                  <p className="text-sm mt-2 opacity-90">Comisión: {plan.commission}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" /><span className="text-sm">Acceso a {plan.users === '∞' ? 'todos' : `hasta ${plan.users}`} usuarios</span></li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" /><span className="text-sm">Comisión del {plan.commission}</span></li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" /><span className="text-sm">Tutor IA incluido</span></li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" /><span className="text-sm">Soporte técnico</span></li>
                    {plan.popular && <li className="flex items-start gap-2"><Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" /><span className="text-sm">Certificados premium</span></li>}
                  </ul>
                  <Link to="/contacto" className={`block w-full py-3 rounded-lg font-semibold text-center transition ${plan.popular ? 'bg-cesac-700 text-white hover:bg-cesac-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Solicitar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cesac-900 mb-4">Beneficios exclusivos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="w-8 h-8" />, title: 'Catálogo Completo', desc: 'Acceso a los 40 productos con actualizaciones automáticas.', color: 'from-blue-500 to-blue-700' },
              { icon: <Users className="w-8 h-8" />, title: 'Tutor IA 24/7', desc: 'Tutor IA con RAG personalizado para tus estudiantes.', color: 'from-violet-500 to-violet-700' },
              { icon: <Award className="w-8 h-8" />, title: 'Certificaciones', desc: 'Emite certificados oficiales CESAC AI verificables.', color: 'from-emerald-500 to-emerald-700' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Altas Comisiones', desc: 'Desde 85% hasta 92% según el nivel de franquicia.', color: 'from-amber-500 to-amber-700' },
              { icon: <Crown className="w-8 h-8" />, title: 'Marca Reconocida', desc: 'Opera bajo la marca CESAC AI con respaldo institucional.', color: 'from-rose-500 to-rose-700' },
              { icon: <Shield className="w-8 h-8" />, title: 'Soporte Dedicado', desc: 'Equipo de soporte y account manager dedicado.', color: 'from-cyan-500 to-cyan-700' },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 hover:shadow-xl transition">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4`}>{benefit.icon}</div>
                <h3 className="text-xl font-bold text-cesac-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cesac-700 to-cesac-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Building2 className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">¿Listo para ser parte de CESAC AI?</h2>
          <p className="text-xl text-blue-100 mb-8">Únete a la red de franquicias más innovadora del sector de formación en IA.</p>
          <Link to="/contacto" className="px-8 py-4 bg-white text-cesac-900 font-bold rounded-xl hover:bg-blue-50 transition inline-flex items-center gap-2">
            Solicitar franquicia ahora <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
