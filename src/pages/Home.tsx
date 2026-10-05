import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Building2, GraduationCap, Shield, Cpu, BookOpen, Briefcase, Landmark, FlaskConical, Scale, ClipboardList, Star, TrendingUp, Award, Zap } from 'lucide-react';
import { businessUnits, products } from '../lib/data';

export default function Home() {
  const featuredProducts = products.filter(p => p.status === 'PUBLISHED').slice(0, 6);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-violet-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-accent-400" />
              <span>Plataforma integral de formación e IA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Formación, IA y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300">Gobernanza</span> para el presente y el futuro
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Oposiciones, teleformación, inteligencia artificial, AI Governance, consultoría y servicios tecnológicos. Un ecosistema completo para profesionales, empresas y Administraciones Públicas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/formacion" className="px-6 py-3 bg-white text-cesac-900 font-semibold rounded-lg hover:bg-blue-50 transition flex items-center gap-2">
                Explorar formación <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ia" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
                Descubrir IA
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /> +2.000 alumnos</div>
              <div className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> 40+ programas</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4" /> Certificación oficial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unidades de negocio */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-4">Un ecosistema completo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">10 unidades de negocio especializadas que comparten infraestructura, identidad y calidad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {businessUnits.map(unit => (
              <Link
                key={unit.id}
                to={`/${unit.id === 'ai-academy' ? 'ia' : unit.id === 'ai-business' ? 'empresas' : unit.id === 'ai-public' ? 'administraciones' : unit.id === 'ai-governance' ? 'governance' : unit.id === 'ai-lab' ? 'lab' : unit.id === 'ai-campus' ? 'campus' : unit.id === 'ai-consulting' ? 'consultoria' : unit.id === 'ai-procurement' ? 'procurement' : unit.id}`}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all border hover:border-cesac-200"
              >
                <div className="text-3xl mb-3">{unit.icon}</div>
                <h3 className="font-semibold text-sm text-cesac-900 group-hover:text-cesac-700 transition">{unit.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{unit.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos destacados */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-2">Formación destacada</h2>
              <p className="text-gray-600">Programas más demandados de nuestro catálogo</p>
            </div>
            <Link to="/formacion" className="hidden md:flex items-center gap-1 text-cesac-700 font-medium hover:text-cesac-800 transition">
              Ver todo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <Link
                key={product.id}
                to={`/formacion/${product.slug}`}
                className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-40 gradient-card flex items-center justify-center text-5xl">
                  {product.image}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-cesac-600 bg-cesac-50 px-2 py-0.5 rounded">{product.unit}</span>
                    <span className="text-[10px] text-gray-500">{product.modality}</span>
                  </div>
                  <h3 className="font-semibold text-cesac-900 group-hover:text-cesac-700 transition mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-cesac-700">{product.price > 0 ? `${product.price}€` : 'Consultar'}</span>
                    <span className="text-xs text-gray-500">{product.hours > 0 ? `${product.hours}h` : product.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/formacion" className="inline-flex items-center gap-1 text-cesac-700 font-medium">
              Ver todo el catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-16 md:py-20 bg-cesac-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluciones para cada perfil</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">Desde el opositor que prepara su futuro hasta la Administración que necesita transformar sus servicios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <GraduationCap className="w-8 h-8" />, title: 'Particulares', desc: 'Oposiciones, formación en IA y desarrollo profesional.', link: '/formacion', color: 'from-blue-500 to-blue-700' },
              { icon: <Briefcase className="w-8 h-8" />, title: 'Empresas', desc: 'Transformación con IA, formación de equipos y consultoría.', link: '/empresas', color: 'from-violet-500 to-violet-700' },
              { icon: <Landmark className="w-8 h-8" />, title: 'Administraciones', desc: 'Modernización, IA aplicada y formación para empleados públicos.', link: '/administraciones', color: 'from-cyan-500 to-cyan-700' },
              { icon: <Scale className="w-8 h-8" />, title: 'Compliance', desc: 'AI Governance, EU AI Act, inventario y auditoría de sistemas IA.', link: '/governance', color: 'from-rose-500 to-rose-700' }
            ].map((item, i) => (
              <Link key={i} to={item.link} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 text-white`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-blue-200 mb-4">{item.desc}</p>
                <span className="text-sm font-medium text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explorar <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-6">Metodología CESAC AI</h2>
              <p className="text-lg text-gray-600 mb-8">Combinamos formación presencial, teleformación, inteligencia artificial y acompañamiento personalizado para garantizar resultados medibles.</p>
              <div className="space-y-4">
                {[
                  { title: 'Diagnóstico personalizado', desc: 'Evaluamos tu punto de partida y definimos objetivos claros.' },
                  { title: 'Contenido actualizado', desc: 'Materiales revisados constantemente con las últimas novedades.' },
                  { title: 'Tutor IA 24/7', desc: 'Asistente inteligente con fuentes verificadas y citas documentales.' },
                  { title: 'Evaluación continua', desc: 'Seguimiento del progreso con métricas y feedback personalizado.' },
                  { title: 'Certificación verificable', desc: 'Certificados con código de verificación único y QR.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-cesac-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-cesac-50 to-blue-50 rounded-2xl p-8 border">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '40+', label: 'Programas formativos' },
                  { value: '10', label: 'Unidades de negocio' },
                  { value: '98%', label: 'Satisfacción' },
                  { value: '24/7', label: 'Tutor IA disponible' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-cesac-700">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cesac-900">Tutor IA CESAC</p>
                    <p className="text-xs text-gray-500">Respuestas con fuentes verificadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas y Administraciones */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border shadow-sm">
              <Building2 className="w-10 h-10 text-violet-600 mb-4" />
              <h3 className="text-2xl font-bold text-cesac-900 mb-3">Para Empresas</h3>
              <p className="text-gray-600 mb-6">Portal B2B completo: gestiona la formación de tu equipo, haz seguimiento del progreso, descarga certificados y accede a consultoría especializada.</p>
              <ul className="space-y-2 mb-6">
                {['Portal empresarial personalizado', 'Asignación de cursos y cohortes', 'Seguimiento de progreso en tiempo real', 'Informes y evidencias descargables', 'Facturación centralizada'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-success-500" />{item}
                  </li>
                ))}
              </ul>
              <Link to="/empresas" className="inline-flex items-center gap-2 text-violet-700 font-medium hover:text-violet-800">
                Conocer más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border shadow-sm">
              <Landmark className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold text-cesac-900 mb-3">Para Administraciones</h3>
              <p className="text-gray-600 mb-6">Programas formativos adaptados al sector público, con evidencias de ejecución, memorias y documentación para justificación contractual.</p>
              <ul className="space-y-2 mb-6">
                {['Programas adaptados a cada administración', 'Cohortes y grupos personalizados', 'Evidencias de ejecución completas', 'Memorias de formación', 'Certificados oficiales verificables'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-success-500" />{item}
                  </li>
                ))}
              </ul>
              <Link to="/administraciones" className="inline-flex items-center gap-2 text-cyan-700 font-medium hover:text-cyan-800">
                Conocer más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Governance CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-rose-50 to-violet-50 rounded-2xl p-8 md:p-12 border border-rose-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                  <Shield className="w-4 h-4" /> Nuevo: EU AI Act
                </div>
                <h2 className="text-3xl font-bold text-cesac-900 mb-4">AI Governance y Cumplimiento Normativo</h2>
                <p className="text-gray-600 mb-6">Prepara tu organización para el Reglamento Europeo de IA. Inventario de sistemas, evaluación de riesgos, documentación de cumplimiento y evidencias auditables.</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/governance" className="px-5 py-2.5 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition">
                    Conocer Governance
                  </Link>
                  <Link to="/formacion/eu-ai-act" className="px-5 py-2.5 border border-rose-300 text-rose-700 font-medium rounded-lg hover:bg-rose-50 transition">
                    Curso EU AI Act
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Scale className="w-6 h-6" />, title: 'Inventario IA', desc: 'Registro de sistemas' },
                  { icon: <Shield className="w-6 h-6" />, title: 'Evaluación', desc: 'Análisis de riesgos' },
                  { icon: <BookOpen className="w-6 h-6" />, title: 'Documentación', desc: 'Expediente completo' },
                  { icon: <Award className="w-6 h-6" />, title: 'Evidencias', desc: 'Auditoría preparada' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-rose-600 mb-2">{item.icon}</div>
                    <h4 className="font-medium text-sm text-cesac-900">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para dar el siguiente paso?</h2>
          <p className="text-lg text-blue-200 mb-8">Explora nuestro catálogo, solicita información o contacta con nuestro equipo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/formacion" className="px-6 py-3 bg-white text-cesac-900 font-semibold rounded-lg hover:bg-blue-50 transition">
              Ver catálogo completo
            </Link>
            <Link to="/contacto" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
