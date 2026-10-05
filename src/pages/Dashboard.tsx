import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, TrendingUp, Calendar, MessageSquare, FileText, CreditCard, Bell, ChevronRight, Play, CheckCircle2, Target, BarChart3 } from 'lucide-react';
import { useApp } from '../lib/store';
import { products } from '../lib/data';

export default function Dashboard() {
  const { state } = useApp();
  const user = state.user;

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-cesac-900 mb-4">Acceso restringido</h1>
        <p className="text-gray-600 mb-6">Inicia sesión para acceder a tu panel</p>
        <Link to="/auth" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium hover:bg-cesac-800 transition">Iniciar sesión</Link>
      </div>
    );
  }

  const enrolledProducts = products.filter(p => user.enrolledCourses.includes(p.id));

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-cesac-900">Bienvenido, {user.name}</h1>
              <p className="text-gray-600">Perfil: <span className="font-medium">{user.role}</span> {user.organization && `· ${user.organization}`}</p>
            </div>
            <div className="flex gap-3">
              <Link to="/campus" className="px-4 py-2 bg-cesac-700 text-white text-sm font-medium rounded-lg hover:bg-cesac-800 transition flex items-center gap-2">
                <Play className="w-4 h-4" /> Ir al Campus
              </Link>
              <Link to="/ai-tutor" className="px-4 py-2 border text-sm font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Tutor IA
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: <BookOpen className="w-5 h-5" />, label: 'Cursos activos', value: enrolledProducts.length, color: 'bg-blue-50 text-blue-600' },
            { icon: <TrendingUp className="w-5 h-5" />, label: 'Progreso medio', value: `${Math.round(Object.values(user.progress).reduce((a, b) => a + b, 0) / Math.max(Object.values(user.progress).length, 1))}%`, color: 'bg-green-50 text-green-600' },
            { icon: <Award className="w-5 h-5" />, label: 'Certificados', value: user.certificates.length, color: 'bg-violet-50 text-violet-600' },
            { icon: <Clock className="w-5 h-5" />, label: 'Horas formadas', value: '48h', color: 'bg-amber-50 text-amber-600' }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border shadow-sm p-4">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>{stat.icon}</div>
              <p className="text-2xl font-bold text-cesac-900">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Courses in progress */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-5 border-b flex justify-between items-center">
                <h2 className="font-semibold text-cesac-900">Mis cursos</h2>
                <Link to="/campus" className="text-sm text-cesac-700 hover:underline flex items-center gap-1">Ver todos <ChevronRight className="w-3 h-3" /></Link>
              </div>
              <div className="divide-y">
                {enrolledProducts.map(product => {
                  const progress = user.progress[product.id] || 0;
                  return (
                    <div key={product.id} className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">
                      <div className="w-12 h-12 rounded-lg gradient-card flex items-center justify-center text-2xl shrink-0">{product.image}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-cesac-900 truncate">{product.name}</h3>
                        <p className="text-xs text-gray-500">{product.unit} · {product.modality}</p>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-cesac-600 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                          </div>
                          <span className="text-xs font-medium text-gray-600">{progress}%</span>
                        </div>
                      </div>
                      <Link to="/campus" className="px-3 py-1.5 bg-cesac-50 text-cesac-700 text-xs font-medium rounded-lg hover:bg-cesac-100 transition shrink-0">
                        Continuar
                      </Link>
                    </div>
                  );
                })}
                {enrolledProducts.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">No tienes cursos activos</p>
                    <Link to="/formacion" className="text-cesac-700 text-sm hover:underline mt-2 inline-block">Explorar catálogo</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Upcoming */}
            <div className="bg-white rounded-xl border shadow-sm mt-6">
              <div className="p-5 border-b">
                <h2 className="font-semibold text-cesac-900">Próximas sesiones</h2>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { date: 'Hoy, 18:00', title: 'Sesión en directo: Prompt Engineering', type: 'live' },
                  { date: 'Mañana, 10:00', title: 'Tutoría grupal: AI Literacy', type: 'tutorial' },
                  { date: 'Vie 15, 17:00', title: 'Evaluación: Módulo 3', type: 'exam' }
                ].map((session, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-4 h-4 text-cesac-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-cesac-900">{session.title}</p>
                      <p className="text-xs text-gray-500">{session.date}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      session.type === 'live' ? 'bg-red-50 text-red-600' :
                      session.type === 'exam' ? 'bg-amber-50 text-amber-600' :
                      'bg-blue-50 text-blue-600'
                    }`}>{session.type === 'live' ? 'EN DIRECTO' : session.type === 'exam' ? 'EVALUACIÓN' : 'TUTORÍA'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Tutor */}
            <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-cesac-900">Tutor IA</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">Resuelve dudas con fuentes verificadas y citas documentales.</p>
              <Link to="/ai-tutor" className="block w-full py-2 bg-white text-cesac-700 text-sm font-medium text-center rounded-lg border hover:bg-cesac-50 transition">
                Consultar al tutor
              </Link>
            </div>

            {/* Certificates */}
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <h3 className="font-semibold text-cesac-900 mb-3 flex items-center gap-2"><Award className="w-4 h-4 text-cesac-600" />Certificados</h3>
              {user.certificates.length > 0 ? (
                <div className="space-y-2">
                  {user.certificates.map((cert, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-800">Certificado #{cert}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">Completa un curso para obtener tu certificado</p>
              )}
            </div>

            {/* Quick actions */}
            <div className="bg-white rounded-xl border shadow-sm p-5">
              <h3 className="font-semibold text-cesac-900 mb-3">Accesos rápidos</h3>
              <div className="space-y-2">
                {[
                  { icon: <FileText className="w-4 h-4" />, label: 'Mis documentos', to: '#' },
                  { icon: <CreditCard className="w-4 h-4" />, label: 'Facturas', to: '#' },
                  { icon: <BarChart3 className="w-4 h-4" />, label: 'Mi progreso', to: '#' },
                  { icon: <Bell className="w-4 h-4" />, label: 'Notificaciones', to: '#' }
                ].map((item, i) => (
                  <Link key={i} to={item.to} className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition">
                    {item.icon} {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
