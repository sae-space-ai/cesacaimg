import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Users, BookOpen, CreditCard, TrendingUp, Package, Settings, Shield, ClipboardList, Building2, GraduationCap, Award, AlertTriangle, CheckCircle, Plus, Search, Filter, Eye, Edit, Trash2, Download, Upload, Activity, Globe, Zap, Database, Server, Bell } from 'lucide-react';
import { useApp, canAccessAdmin } from '../lib/store';
import { products, businessUnits } from '../lib/data';

export function AdminPanel() {
  const { state } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!state.user || !canAccessAdmin(state.user.role)) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <Shield className="w-12 h-12 mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-cesac-900 mb-2">Acceso restringido</h1>
        <p className="text-gray-600">Necesitas permisos de administrador</p>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'users', label: 'Usuarios', icon: <Users className="w-4 h-4" /> },
    { id: 'products', label: 'Productos', icon: <Package className="w-4 h-4" /> },
    { id: 'orders', label: 'Pedidos', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'courses', label: 'Cursos', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'crm', label: 'CRM', icon: <Activity className="w-4 h-4" /> },
    { id: 'governance', label: 'Governance', icon: <Shield className="w-4 h-4" /> },
    { id: 'procurement', label: 'Procurement', icon: <ClipboardList className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analítica', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'settings', label: 'Configuración', icon: <Settings className="w-4 h-4" /> }
  ];

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen hidden lg:block">
          <div className="p-4 border-b">
            <h2 className="font-bold text-cesac-900">Panel Admin</h2>
            <p className="text-xs text-gray-500">CESAC AI Management</p>
          </div>
          <nav className="p-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  activeTab === tab.id ? 'bg-cesac-50 text-cesac-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile tabs */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50 overflow-x-auto">
          <div className="flex">
            {tabs.slice(0, 5).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-2 text-[10px] ${activeTab === tab.id ? 'text-cesac-700' : 'text-gray-500'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 p-6 pb-20 lg:pb-6">
          {activeTab === 'dashboard' && <AdminDashboard />}
          {activeTab === 'users' && <AdminUsers />}
          {activeTab === 'products' && <AdminProducts />}
          {activeTab === 'orders' && <AdminOrders />}
          {activeTab === 'courses' && <AdminCourses />}
          {activeTab === 'crm' && <AdminCRM />}
          {activeTab === 'governance' && <AdminGovernance />}
          {activeTab === 'procurement' && <AdminProcurement />}
          {activeTab === 'analytics' && <AdminAnalytics />}
          {activeTab === 'settings' && <AdminSettings />}
        </main>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Ingresos (mes)', value: '€24.580', change: '+12%', icon: <CreditCard className="w-5 h-5" />, color: 'bg-green-50 text-green-600' },
          { label: 'Matrículas', value: '156', change: '+8%', icon: <GraduationCap className="w-5 h-5" />, color: 'bg-blue-50 text-blue-600' },
          { label: 'Alumnos activos', value: '1.247', change: '+5%', icon: <Users className="w-5 h-5" />, color: 'bg-violet-50 text-violet-600' },
          { label: 'MRR', value: '€18.320', change: '+15%', icon: <TrendingUp className="w-5 h-5" />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Empresas', value: '34', change: '+3', icon: <Building2 className="w-5 h-5" />, color: 'bg-cyan-50 text-cyan-600' },
          { label: 'Certificados', value: '89', change: '+12', icon: <Award className="w-5 h-5" />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Leads', value: '234', change: '+18%', icon: <Activity className="w-5 h-5" />, color: 'bg-rose-50 text-rose-600' },
          { label: 'Conversión', value: '23%', change: '+2%', icon: <Zap className="w-5 h-5" />, color: 'bg-indigo-50 text-indigo-600' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border p-4">
            <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>{stat.icon}</div>
            <p className="text-xl font-bold text-cesac-900">{stat.value}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">{stat.label}</p>
              <span className="text-[10px] text-green-600 font-medium">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold text-cesac-900 mb-4">Últimas matrículas</h3>
          <div className="space-y-3">
            {[
              { name: 'María García', course: 'AI Literacy', time: 'Hace 5 min' },
              { name: 'Juan López', course: 'Policía Local', time: 'Hace 12 min' },
              { name: 'Empresa XYZ', course: 'IA para Pymes (10 plazas)', time: 'Hace 1h' },
              { name: 'Ana Martínez', course: 'EU AI Act', time: 'Hace 2h' },
              { name: 'Ayuntamiento de...', course: 'IA Procedimientos (25 plazas)', time: 'Hace 3h' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.course}</p>
                </div>
                <span className="text-[10px] text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold text-cesac-900 mb-4">Alertas del sistema</h3>
          <div className="space-y-3">
            {[
              { type: 'warning', msg: '3 licitaciones próximas a vencer' },
              { type: 'success', msg: 'Backup completado correctamente' },
              { type: 'info', msg: '15 nuevos leads hoy' },
              { type: 'warning', msg: '2 certificados pendientes de emisión' },
              { type: 'success', msg: 'Módulo Governance actualizado' }
            ].map((alert, i) => (
              <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${
                alert.type === 'warning' ? 'bg-amber-50' :
                alert.type === 'success' ? 'bg-green-50' : 'bg-blue-50'
              }`}>
                {alert.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-amber-600" /> :
                 alert.type === 'success' ? <CheckCircle className="w-4 h-4 text-green-600" /> :
                 <Bell className="w-4 h-4 text-blue-600" />}
                <span className="text-sm">{alert.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminUsers() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-cesac-900">Usuarios</h1>
        <button className="px-4 py-2 bg-cesac-700 text-white text-sm font-medium rounded-lg flex items-center gap-2"><Plus className="w-4 h-4" />Nuevo usuario</button>
      </div>
      <div className="bg-white rounded-xl border">
        <div className="p-4 border-b flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="search" placeholder="Buscar usuarios..." className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm" />
          </div>
          <select className="px-3 py-2 border rounded-lg text-sm">
            <option>Todos los roles</option>
            <option>Alumnos</option>
            <option>Profesores</option>
            <option>Empresas</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Usuario</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Rol</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Organización</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Cursos</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Estado</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { name: 'María García', email: 'maria@email.com', role: 'STUDENT', org: '-', courses: 3, active: true },
                { name: 'Prof. Carlos Ruiz', email: 'carlos@cesac.ai', role: 'TEACHER', org: 'CESAC AI', courses: 0, active: true },
                { name: 'Empresa TechSolutions', email: 'admin@tech.com', role: 'COMPANY_ADMIN', org: 'TechSolutions SL', courses: 10, active: true },
                { name: 'Ayuntamiento Demo', email: 'formacion@ayto.es', role: 'PUBLIC_ORG_ADMIN', org: 'Ayuntamiento de Demo', courses: 25, active: true },
                { name: 'Ana Compliance', email: 'ana@corp.com', role: 'COMPLIANCE_OFFICER', org: 'Corp SA', courses: 2, active: true }
              ].map((user, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-cesac-50 text-cesac-700 text-xs rounded-full">{user.role}</span></td>
                  <td className="px-4 py-3 text-gray-600">{user.org}</td>
                  <td className="px-4 py-3 text-gray-600">{user.courses}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 text-xs rounded-full ${user.active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{user.active ? 'Activo' : 'Inactivo'}</span></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button className="p-1.5 rounded hover:bg-gray-100"><Eye className="w-3.5 h-3.5 text-gray-500" /></button>
                      <button className="p-1.5 rounded hover:bg-gray-100"><Edit className="w-3.5 h-3.5 text-gray-500" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AdminProducts() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-cesac-900">Productos ({products.length})</h1>
        <div className="flex gap-2">
          <button className="px-3 py-2 border text-sm font-medium rounded-lg flex items-center gap-2"><Upload className="w-4 h-4" />Importar</button>
          <button className="px-4 py-2 bg-cesac-700 text-white text-sm font-medium rounded-lg flex items-center gap-2"><Plus className="w-4 h-4" />Nuevo</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.slice(0, 12).map(product => (
          <div key={product.id} className="bg-white rounded-xl border p-4 hover:shadow-sm transition">
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">{product.image}</span>
              <span className={`px-2 py-0.5 text-[10px] rounded-full font-medium ${
                product.status === 'PUBLISHED' ? 'bg-green-50 text-green-700' :
                product.status === 'DRAFT' ? 'bg-gray-100 text-gray-600' :
                'bg-amber-50 text-amber-700'
              }`}>{product.status}</span>
            </div>
            <h3 className="font-medium text-sm text-cesac-900 truncate">{product.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{product.unit}</p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <span className="text-sm font-bold text-cesac-700">{product.price}€</span>
              <div className="flex gap-1">
                <button className="p-1.5 rounded hover:bg-gray-100"><Edit className="w-3.5 h-3.5 text-gray-500" /></button>
                <button className="p-1.5 rounded hover:bg-gray-100"><Eye className="w-3.5 h-3.5 text-gray-500" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminOrders() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">Pedidos y Facturación</h1>
      <div className="bg-white rounded-xl border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Pedido</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Cliente</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Producto</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Importe</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Estado</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { id: 'ORD-001', client: 'María García', product: 'AI Literacy', amount: '200€', status: 'Pagado', date: '2025-01-15' },
                { id: 'ORD-002', client: 'TechSolutions SL', product: 'IA para Pymes (10)', amount: '3.000€', status: 'Pagado', date: '2025-01-14' },
                { id: 'ORD-003', client: 'Juan López', product: 'Policía Local', amount: '1.800€', status: 'Pendiente', date: '2025-01-14' },
                { id: 'ORD-004', client: 'Ayuntamiento Demo', product: 'IA Procedimientos (25)', amount: '7.000€', status: 'Facturado', date: '2025-01-13' }
              ].map((order, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">{order.client}</td>
                  <td className="px-4 py-3 text-gray-600">{order.product}</td>
                  <td className="px-4 py-3 font-medium">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      order.status === 'Pagado' ? 'bg-green-50 text-green-700' :
                      order.status === 'Pendiente' ? 'bg-amber-50 text-amber-700' :
                      'bg-blue-50 text-blue-700'
                    }`}>{order.status}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AdminCourses() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">Gestión de Cursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.slice(0, 8).map(product => (
          <div key={product.id} className="bg-white rounded-xl border p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{product.image}</span>
              <div>
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.program.length} módulos · {product.hours}h</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">12 alumnos</span>
                <span className="text-[10px] px-2 py-0.5 bg-green-50 text-green-700 rounded-full">68% progreso medio</span>
              </div>
              <button className="text-xs text-cesac-700 font-medium hover:underline">Gestionar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminCRM() {
  const stages = ['LEAD', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'NEGOTIATION', 'WON', 'LOST'];
  return (
    <div>
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">CRM - Pipeline Comercial</h1>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map(stage => (
          <div key={stage} className="min-w-[200px] bg-white rounded-xl border p-3">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">{stage}</h3>
            <div className="space-y-2">
              {stage === 'LEAD' && [
                { name: 'Web Lead - Form IA', value: '€200' },
                { name: 'Referido - Empresa ABC', value: '€3.000' }
              ].map((lead, i) => (
                <div key={i} className="p-2 bg-gray-50 rounded-lg text-xs">
                  <p className="font-medium">{lead.name}</p>
                  <p className="text-gray-500">{lead.value}</p>
                </div>
              ))}
              {stage === 'PROPOSAL' && [
                { name: 'Ayuntamiento Demo', value: '€15.000' },
                { name: 'Corp SA - Governance', value: '€8.000' }
              ].map((lead, i) => (
                <div key={i} className="p-2 bg-gray-50 rounded-lg text-xs">
                  <p className="font-medium">{lead.name}</p>
                  <p className="text-gray-500">{lead.value}</p>
                </div>
              ))}
              {stage === 'WON' && [
                { name: 'TechSolutions SL', value: '€12.000' }
              ].map((lead, i) => (
                <div key={i} className="p-2 bg-green-50 rounded-lg text-xs">
                  <p className="font-medium text-green-800">{lead.name}</p>
                  <p className="text-green-600">{lead.value}</p>
                </div>
              ))}
              {stage !== 'LEAD' && stage !== 'PROPOSAL' && stage !== 'WON' && (
                <p className="text-xs text-gray-400 text-center py-4">—</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminGovernance() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">AI Governance</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border p-4">
          <p className="text-2xl font-bold text-cesac-900">12</p>
          <p className="text-sm text-gray-500">Sistemas IA registrados</p>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-2xl font-bold text-amber-600">3</p>
          <p className="text-sm text-gray-500">Evaluaciones pendientes</p>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-2xl font-bold text-green-600">9</p>
          <p className="text-sm text-gray-500">Sistemas conformes</p>
        </div>
      </div>
      <div className="bg-white rounded-xl border">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">Inventario de Sistemas IA</h3>
          <button className="px-3 py-1.5 bg-cesac-700 text-white text-xs font-medium rounded-lg flex items-center gap-1"><Plus className="w-3 h-3" />Registrar sistema</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Sistema</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Finalidad</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Riesgo</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { name: 'Tutor IA CESAC', purpose: 'Asistencia educativa', risk: 'Limitado', status: 'Conforme' },
                { name: 'Chatbot atención', purpose: 'Atención al cliente', risk: 'Mínimo', status: 'Conforme' },
                { name: 'Análisis de ofertas', purpose: 'Evaluación automática', risk: 'Alto', status: 'En revisión' },
                { name: 'Generación informes', purpose: 'Redacción asistida', risk: 'Limitado', status: 'Conforme' }
              ].map((sys, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{sys.name}</td>
                  <td className="px-4 py-3 text-gray-600">{sys.purpose}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      sys.risk === 'Alto' ? 'bg-red-50 text-red-700' :
                      sys.risk === 'Limitado' ? 'bg-amber-50 text-amber-700' :
                      'bg-green-50 text-green-700'
                    }`}>{sys.risk}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      sys.status === 'Conforme' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                    }`}>{sys.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AdminProcurement() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">Procurement - Licitaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border p-4">
          <p className="text-2xl font-bold text-cesac-900">8</p>
          <p className="text-sm text-gray-500">Oportunidades activas</p>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-2xl font-bold text-blue-600">3</p>
          <p className="text-sm text-gray-500">En preparación</p>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-2xl font-bold text-green-600">2</p>
          <p className="text-sm text-gray-500">Presentadas</p>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-2xl font-bold text-amber-600">€245K</p>
          <p className="text-sm text-gray-500">Valor pipeline</p>
        </div>
      </div>
      <div className="bg-white rounded-xl border">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">Oportunidades</h3>
          <button className="px-3 py-1.5 bg-cesac-700 text-white text-xs font-medium rounded-lg flex items-center gap-1"><Plus className="w-3 h-3" />Registrar</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Expediente</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Órgano</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">CPV</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Presupuesto</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Plazo</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">BID/NO BID</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { exp: 'EXP-2025-001', org: 'Ayuntamiento de Demo', cpv: '80510000', budget: '€45.000', deadline: '2025-02-15', bid: 'BID' },
                { exp: 'EXP-2025-002', org: 'Diputación Provincial', cpv: '80500000', budget: '€80.000', deadline: '2025-02-28', bid: 'BID' },
                { exp: 'EXP-2025-003', org: 'Consejería Educación', cpv: '80521000', budget: '€120.000', deadline: '2025-03-10', bid: 'Evaluando' },
                { exp: 'EXP-2025-004', org: 'Ministerio Transformación', cpv: '72220000', budget: '€200.000', deadline: '2025-03-20', bid: 'NO BID' }
              ].map((opp, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{opp.exp}</td>
                  <td className="px-4 py-3 text-gray-600">{opp.org}</td>
                  <td className="px-4 py-3 text-gray-500 font-mono text-xs">{opp.cpv}</td>
                  <td className="px-4 py-3 font-medium">{opp.budget}</td>
                  <td className="px-4 py-3 text-gray-500">{opp.deadline}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      opp.bid === 'BID' ? 'bg-green-50 text-green-700' :
                      opp.bid === 'NO BID' ? 'bg-red-50 text-red-700' :
                      'bg-amber-50 text-amber-700'
                    }`}>{opp.bid}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AdminAnalytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">Analítica</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold mb-4">Eventos (últimos 30 días)</h3>
          <div className="space-y-3">
            {[
              { event: 'page_view', count: 12450 },
              { event: 'registration', count: 234 },
              { event: 'checkout', count: 156 },
              { event: 'purchase', count: 89 },
              { event: 'enrollment', count: 92 },
              { event: 'lesson_completed', count: 1247 },
              { event: 'assessment_completed', count: 342 },
              { event: 'certificate_issued', count: 89 },
              { event: 'ai_query', count: 2340 },
              { event: 'subscription_started', count: 34 }
            ].map((ev, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 font-mono">{ev.event}</span>
                <span className="text-sm font-bold">{ev.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold mb-4">Rendimiento por unidad</h3>
          <div className="space-y-3">
            {businessUnits.slice(0, 6).map((unit, i) => {
              const revenue = [8500, 4200, 6800, 3100, 2800, 1900][i];
              return (
                <div key={unit.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{unit.shortName}</span>
                    <span className="font-medium">€{revenue.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-cesac-600 rounded-full" style={{ width: `${(revenue / 8500) * 100}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminSettings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">Configuración</h1>
      <div className="space-y-6">
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold mb-4">General</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la plataforma</label>
              <input type="text" defaultValue="CESAC AI" className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL del sitio</label>
              <input type="text" defaultValue="https://cesac.ai" className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email de contacto</label>
            <input type="email" defaultValue="pergolessi9@gmail.com" className="w-full px-3 py-2 border rounded-lg text-sm" />
          </div>            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zona horaria</label>
              <select className="w-full px-3 py-2 border rounded-lg text-sm">
                <option>Europe/Madrid (UTC+1)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold mb-4">Datos empresariales (pendientes de verificación)</h3>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg mb-4">
            <p className="text-sm text-amber-800">⚠️ Los siguientes campos están pendientes de datos empresariales confirmados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Razón social</label>
              <input type="text" placeholder="PENDIENTE DE VERIFICACIÓN" className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CIF</label>
              <input type="text" placeholder="PENDIENTE DE VERIFICACIÓN" className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dirección fiscal</label>
              <input type="text" placeholder="PENDIENTE DE VERIFICACIÓN" className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Número registro mercantil</label>
              <input type="text" placeholder="PENDIENTE DE VERIFICACIÓN" className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold mb-4">Integraciones</h3>
          <div className="space-y-3">
            {[
              { name: 'Stripe (pagos)', status: 'Configurar', configured: false },
              { name: 'AI Provider (LLM)', status: 'Configurar', configured: false },
              { name: 'Email (SMTP)', status: 'Configurar', configured: false },
              { name: 'Almacenamiento (Blob)', status: 'Configurar', configured: false }
            ].map((integration, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium">{integration.name}</span>
                <span className={`px-2 py-0.5 text-xs rounded-full ${integration.configured ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>{integration.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
