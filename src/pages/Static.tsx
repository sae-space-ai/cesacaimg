import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Building2, GraduationCap, Cpu, Briefcase, Landmark, Scale, FlaskConical, BookOpen, ClipboardList, Users, Award, Target, CheckCircle, ArrowRight, Shield, Bot, Zap, Trash2 } from 'lucide-react';
import { businessUnits, products, subscriptionPlans } from '../lib/data';
import { useApp } from '../lib/store';

export function About() {
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
              Creemos en una IA responsable, supervisada por humanos, con fuentes verificadas y al servicio de las personas. No sustituimos el criterio profesional: lo potenciamos.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cesac-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-cesac-900 mb-6">Principios</h3>
            <div className="space-y-4">
              {[
                { title: 'Rigor académico', desc: 'Contenidos validados por expertos y actualizados constantemente.' },
                { title: 'IA responsable', desc: 'Supervisión humana, fuentes verificadas, trazabilidad completa.' },
                { title: 'Accesibilidad', desc: 'Formación para todos los perfiles, desde principiantes hasta expertos.' },
                { title: 'Transparencia', desc: 'Sin datos inventados, sin reseñas falsas, sin cifras no acreditadas.' },
                { title: 'Privacidad por diseño', desc: 'Minimización de datos, auditoría y cumplimiento normativo.' }
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

export function Contact() {
  return (
    <div className="animate-fade-in">
      <div className="bg-cesac-50 py-16 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-cesac-900 mb-4">Contacto</h1>
          <p className="text-lg text-gray-600">Estamos aquí para ayudarte. Escríbenos y te responderemos en menos de 24 horas.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-cesac-900 mb-6">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de consulta</label>
                <select className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500">
                  <option>Información sobre formación</option>
                  <option>Formación para empresas</option>
                  <option>Formación para Administraciones</option>
                  <option>AI Governance y compliance</option>
                  <option>Consultoría</option>
                  <option>Soporte técnico</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea rows={5} className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500 resize-none" placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="privacy" className="mt-1 rounded border-gray-300" />
                <label htmlFor="privacy" className="text-xs text-gray-600">He leído y acepto la <Link to="/privacidad" className="text-cesac-700 hover:underline">política de privacidad</Link>.</label>
              </div>
              <button type="submit" className="px-6 py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition flex items-center gap-2">
                <Send className="w-4 h-4" /> Enviar mensaje
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-cesac-900 mb-6">Información de contacto</h2>
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'info@cesac.ai' },
                { icon: <Phone className="w-5 h-5" />, label: 'Teléfono', value: 'PENDIENTE DE VERIFICACIÓN' },
                { icon: <MapPin className="w-5 h-5" />, label: 'Dirección', value: 'PENDIENTE DE VERIFICACIÓN' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cesac-50 flex items-center justify-center text-cesac-600 shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-gradient-to-br from-violet-50 to-blue-50 rounded-xl border">
              <h3 className="font-semibold text-cesac-900 mb-2">¿Eres empresa o Administración?</h3>
              <p className="text-sm text-gray-600 mb-3">Solicita una consulta personalizada para programas formativos a medida.</p>
              <Link to="/empresas" className="text-sm text-cesac-700 font-medium hover:underline flex items-center gap-1">
                Conocer soluciones B2B <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UnitPage({ unitId }: { unitId: string }) {
  const unit = businessUnits.find(u => u.id === unitId);
  const unitProducts = products.filter(p => p.unitId === unitId);

  const unitContent: Record<string, { title: string; subtitle: string; description: string; features: string[] }> = {
    'oposiciones': { title: 'CESAC Oposiciones', subtitle: 'Tu futuro en la Administración Pública', description: 'Preparación integral para oposiciones con metodología probada, simulacros reales, banco de test actualizado y tutorización personalizada. Presencial y online.', features: ['Temario actualizado', 'Simulacros cronometrados', 'Banco de 15.000+ preguntas', 'Tutor personal', 'Preparación física', 'Supuestos prácticos'] },
    'educacion': { title: 'CESAC Educación', subtitle: 'Innovación pedagógica con IA', description: 'Formación para docentes, equipos directivos y centros educativos. Integramos la inteligencia artificial en la práctica educativa de forma responsable y eficaz.', features: ['IA para docentes', 'Programación didáctica con IA', 'Evaluación innovadora', 'Planes de centro', 'Bonificable FUNDAE', 'Acompañamiento integral'] },
    'ai-academy': { title: 'CESAC AI Academy', subtitle: 'De la alfabetización a la especialización', description: 'La academia de IA más completa: desde AI Literacy hasta desarrollo de agentes, RAG y automatización. Programas para todos los niveles.', features: ['AI Literacy', 'Prompt Engineering', 'Agentes de IA', 'RAG y bases de conocimiento', 'Automatización', 'Programa profesional completo'] },
    'ai-business': { title: 'CESAC AI Business', subtitle: 'Transformación con IA para tu empresa', description: 'Ayudamos a autónomos, pymes y empresas a integrar la IA de forma estratégica. Desde el diagnóstico hasta la implantación completa.', features: ['Diagnóstico empresarial', 'Plan de implantación', 'Automatización administrativa', 'IA para marketing', 'IA para atención al cliente', 'Consultoría estratégica'] },
    'ai-public': { title: 'CESAC AI Public Sector', subtitle: 'Modernización de las Administraciones', description: 'Programas específicos para empleados públicos y Administraciones. IA aplicada a procedimientos, contratación, gestión documental e innovación.', features: ['AI Literacy para empleados públicos', 'IA en procedimientos', 'IA en contratación pública', 'Gestión documental inteligente', 'Diseño de proyectos públicos', 'Evidencias de ejecución'] },
    'ai-governance': { title: 'CESAC AI Governance', subtitle: 'Cumplimiento del EU AI Act', description: 'Prepara tu organización para el Reglamento Europeo de IA. Inventario de sistemas, evaluación de riesgos, documentación y evidencias de cumplimiento.', features: ['Inventario de sistemas IA', 'Clasificación de riesgos', 'Evaluación de cumplimiento', 'Documentación técnica', 'Evidencias auditables', 'Formación organizacional'] },
    'ai-lab': { title: 'CESAC AI Lab', subtitle: 'Innovación y desarrollo a medida', description: 'Laboratorio de innovación donde diseñamos y desarrollamos soluciones de IA personalizadas: agentes, automatizaciones, RAG y proyectos a medida.', features: ['Desarrollo de agentes', 'Automatizaciones a medida', 'Sistemas RAG personalizados', 'Prototipado rápido', 'Integración de APIs', 'Pruebas y validación'] },
    'ai-campus': { title: 'CESAC AI Campus', subtitle: 'Tu campus virtual completo', description: 'Plataforma LMS con tutor IA, evaluaciones, certificados verificables, foros, sesiones en directo y seguimiento personalizado del progreso.', features: ['LMS completo', 'Tutor IA integrado', 'Evaluaciones adaptativas', 'Certificados verificables', 'Sesiones en directo', 'Comunidad de aprendizaje'] },
    'ai-consulting': { title: 'CESAC AI Consulting', subtitle: 'Consultoría estratégica en IA', description: 'Acompañamiento estratégico para organizaciones que quieren integrar la IA de forma responsable y eficaz. Diagnóstico, estrategia e implantación.', features: ['Diagnóstico de madurez', 'Estrategia de IA', 'Gestión del cambio', 'Selección de proveedores', 'Formación de equipos', 'Seguimiento y medición'] },
    'ai-procurement': { title: 'CESAC AI Procurement', subtitle: 'Contratación pública inteligente', description: 'Monitorización de licitaciones, preparación de ofertas y gestión del ciclo completo de contratación pública con apoyo de IA.', features: ['Monitorización de licitaciones', 'Análisis de requisitos', 'Preparación de ofertas', 'Evaluación BID/NO BID', 'Gestión documental', 'Seguimiento de expedientes'] }
  };

  const content = unitContent[unitId] || unitContent['ai-lab'];

  return (
    <div className="animate-fade-in">
      <div className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-5xl mb-4">{unit?.icon}</div>
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
              <Link to="/formacion" className="block w-full py-2.5 bg-cesac-700 text-white text-center text-sm font-medium rounded-lg hover:bg-cesac-800 transition">
                Ver programas
              </Link>
              <Link to="/contacto" className="block w-full py-2.5 border border-cesac-300 text-cesac-700 text-center text-sm font-medium rounded-lg hover:bg-white transition">
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
                <Link key={product.id} to={`/formacion/${product.slug}`} className="bg-white rounded-xl border p-5 hover:shadow-md transition group">
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

export function Subscriptions() {
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

export function Cart() {
  const { state, dispatch } = useApp();
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">Carrito de compra</h1>
      {state.cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
          <Link to="/formacion" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium">Explorar catálogo</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {state.cart.map(item => (
              <div key={item.productId} className="bg-white rounded-xl border p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-cesac-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-cesac-700">{item.price * item.quantity}€</span>
                  <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.productId })} className="p-1.5 text-gray-400 hover:text-red-500 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border p-5 h-fit">
            <h3 className="font-semibold text-cesac-900 mb-4">Resumen</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span>{total}€</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">IVA</span><span>Calculado al finalizar</span></div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span className="text-cesac-700">{total}€</span></div>
            </div>
            <button className="w-full py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition">
              Finalizar compra
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">Pago seguro con Stripe</p>
          </div>
        </div>
      )}
    </div>
  );
}



export function LegalPage({ type }: { type: string }) {
  const titles: Record<string, string> = {
    'aviso-legal': 'Aviso Legal',
    'privacidad': 'Política de Privacidad',
    'cookies': 'Política de Cookies',
    'condiciones': 'Condiciones Generales de Contratación'
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-cesac-900 mb-6">{titles[type] || 'Información Legal'}</h1>
      <div className="prose max-w-none">
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
          <p className="text-sm text-amber-800">⚠️ Este documento está pendiente de validación jurídica definitiva. La información aquí contenida no constituye asesoramiento legal.</p>
        </div>
        <div className="bg-white rounded-xl border p-6 space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>El presente documento establece las condiciones aplicables al uso de la plataforma CESAC AI, de conformidad con la legislación vigente en materia de servicios de la sociedad de la información, protección de datos y defensa de consumidores.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">1. Identificación</h2>
          <p>Los datos identificativos del titular de la plataforma se encuentran disponibles en la configuración administrativa y serán comunicados previa solicitud a través de los canales de contacto habilitados.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">2. Objeto</h2>
          <p>La plataforma CESAC AI ofrece servicios de formación, teleformación, consultoría en inteligencia artificial, gobernanza de IA y servicios tecnológicos relacionados.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">3. Protección de datos</h2>
          <p>Los datos personales recogidos serán tratados conforme a la política de privacidad, con respeto al RGPD y la LOPDGDD. Se aplican los principios de minimización, limitación de finalidad y privacidad por diseño.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">4. Propiedad intelectual</h2>
          <p>Todos los contenidos de la plataforma (textos, imágenes, materiales formativos, software) son propiedad de CESAC AI o cuentan con la autorización correspondiente para su uso.</p>
          <h2 className="text-lg font-semibold text-cesac-900 pt-4">5. Inteligencia Artificial</h2>
          <p>La plataforma utiliza sistemas de inteligencia artificial asistida. Las respuestas generadas por IA no constituyen asesoramiento profesional y deben ser verificadas por el usuario. CESAC AI no se responsabiliza del uso indebido de las respuestas generadas por IA.</p>
        </div>
      </div>
    </div>
  );
}
