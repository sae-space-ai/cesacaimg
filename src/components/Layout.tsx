import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, LogOut, ChevronDown, Search, Bell, GraduationCap, Building2, Scale, Cpu, BookOpen, Briefcase, Landmark, FlaskConical, MessageSquare, ClipboardList, Home, Crown, Factory, Sparkles, TrendingUp, Shield, Users, Award } from 'lucide-react';
import { useApp, canAccessAdmin, canAccessTeacher, canAccessGovernance, canAccessProcurement } from '../lib/store';
import { navItems } from '../lib/data';

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { state, dispatch } = useApp();
  const location = useLocation();

  const cartCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    setUserMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      
      {/* Top bar */}
      <div className="bg-cesac-900 text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Inteligencia Artificial · Educación · Empresa · Governance</span>
          <div className="flex gap-4">
            <Link to="/contacto" className="hover:text-cesac-300 transition">Contacto</Link>
            <Link to="/campus" className="hover:text-cesac-300 transition">Campus Virtual</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-cesac-900">CESAC</span>
                <span className="font-bold text-lg text-accent-600 ml-1">AI</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {navItems.slice(0, 8).map(item => {
                const isNew = ['Franquicias', 'Producción', 'Premium'].includes(item.label);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition ${
                      location.pathname === item.path
                        ? 'text-cesac-700 bg-cesac-50'
                        : 'text-gray-600 hover:text-cesac-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {isNew && (
                      <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-bold rounded-full">
                        NUEVO
                      </span>
                    )}
                  </Link>
                );
              })}
              <div className="relative group">
                <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-cesac-700 hover:bg-gray-50 flex items-center gap-1">
                  Más <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                  {/* Sección: Formación Especializada */}
                  <div className="px-4 py-2 bg-gray-50 border-b">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Formación Especializada</p>
                  </div>
                  <Link to="/oposiciones" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition">
                    <Award className="w-4 h-4 text-blue-500" />
                    <span>Oposiciones</span>
                  </Link>
                  <Link to="/educacion" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition">
                    <GraduationCap className="w-4 h-4 text-emerald-500" />
                    <span>Educación</span>
                  </Link>
                  <Link to="/ia" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition">
                    <Cpu className="w-4 h-4 text-violet-500" />
                    <span>Inteligencia Artificial</span>
                  </Link>
                  
                  {/* Sección: Servicios */}
                  <div className="px-4 py-2 bg-gray-50 border-y">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Servicios</p>
                  </div>
                  <Link to="/lab" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition">
                    <FlaskConical className="w-4 h-4 text-indigo-500" />
                    <span>AI Lab</span>
                  </Link>
                  <Link to="/campus" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition">
                    <BookOpen className="w-4 h-4 text-teal-500" />
                    <span>Campus Virtual</span>
                  </Link>
                  <Link to="/consultoria" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition">
                    <Briefcase className="w-4 h-4 text-slate-500" />
                    <span>Consultoría</span>
                  </Link>
                  <Link to="/procurement" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition">
                    <ClipboardList className="w-4 h-4 text-orange-500" />
                    <span>Contratación Pública</span>
                  </Link>
                  
                  {/* Sección: Información */}
                  <div className="px-4 py-2 bg-gray-50 border-y">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Información</p>
                  </div>
                  <Link to="/sobre" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>Sobre CESAC</span>
                  </Link>
                  <Link to="/contacto" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-cesac-50 hover:text-cesac-700 transition rounded-b-xl">
                    <MessageSquare className="w-4 h-4 text-gray-500" />
                    <span>Contacto</span>
                  </Link>
                </div>
              </div>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg text-gray-500 hover:text-cesac-700 hover:bg-gray-100 transition"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/carrito"
                className="p-2 rounded-lg text-gray-500 hover:text-cesac-700 hover:bg-gray-100 transition relative"
                aria-label={`Carrito (${cartCount} artículos)`}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-accent-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {state.user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="w-8 h-8 rounded-full bg-cesac-600 flex items-center justify-center text-white text-sm font-medium">
                      {state.user.name.charAt(0)}
                    </div>
                    <span className="hidden md:block text-sm font-medium text-gray-700">{state.user.name}</span>
                  </button>
                  {userMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border py-2 z-50">
                      <div className="px-4 py-2 border-b">
                        <p className="font-medium text-sm">{state.user.name}</p>
                        <p className="text-xs text-gray-500">{state.user.email}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-cesac-100 text-cesac-700 text-[10px] rounded-full font-medium">{state.user.role}</span>
                      </div>
                      <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>
                        <Home className="w-4 h-4 inline mr-2" />Mi Panel
                      </Link>
                      <Link to="/campus" className="block px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>
                        <GraduationCap className="w-4 h-4 inline mr-2" />Campus
                      </Link>
                      {canAccessTeacher(state.user.role) && (
                        <Link to="/profesor" className="block px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>
                          <BookOpen className="w-4 h-4 inline mr-2" />Aula del Profesor
                        </Link>
                      )}
                      {canAccessAdmin(state.user.role) && (
                        <Link to="/admin" className="block px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>
                          <Building2 className="w-4 h-4 inline mr-2" />Administración
                        </Link>
                      )}
                      {canAccessGovernance(state.user.role) && (
                        <Link to="/governance/panel" className="block px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>
                          <Scale className="w-4 h-4 inline mr-2" />Governance
                        </Link>
                      )}
                      {canAccessProcurement(state.user.role) && (
                        <Link to="/procurement/panel" className="block px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>
                          <ClipboardList className="w-4 h-4 inline mr-2" />Procurement
                        </Link>
                      )}
                      <hr className="my-1" />
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <LogOut className="w-4 h-4 inline mr-2" />Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-cesac-700 text-white text-sm font-medium rounded-lg hover:bg-cesac-800 transition"
                >
                  <User className="w-4 h-4" />Acceder
                </Link>
              )}

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                aria-label="Menú"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-3 animate-fade-in">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Buscar cursos, productos, FAQs..."
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500 focus:border-cesac-500"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="px-4 py-3 space-y-1">
              {/* Sección Principal */}
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Principal</div>
              {navItems.slice(0, 8).map(item => {
                const isNew = ['Franquicias', 'Producción', 'Premium'].includes(item.label);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                      location.pathname === item.path ? 'bg-cesac-50 text-cesac-700' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isNew && (
                      <span className="px-1.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-bold rounded-full">
                        NUEVO
                      </span>
                    )}
                  </Link>
                );
              })}
              
              {/* Sección Formación */}
              <div className="px-3 py-2 mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Formación</div>
              {navItems.slice(8, 11).map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    location.pathname === item.path ? 'bg-cesac-50 text-cesac-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Sección Servicios */}
              <div className="px-3 py-2 mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Servicios</div>
              {navItems.slice(11, 15).map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    location.pathname === item.path ? 'bg-cesac-50 text-cesac-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Sección Información */}
              <div className="px-3 py-2 mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Información</div>
              {navItems.slice(15).map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    location.pathname === item.path ? 'bg-cesac-50 text-cesac-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {!state.user && (
                <div className="pt-3 mt-3 border-t">
                  <Link to="/auth" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-center text-white bg-cesac-700 hover:bg-cesac-800 transition">
                    Acceder / Registrarse
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Notifications */}
      {state.notifications.length > 0 && (
        <div className="fixed top-20 right-4 z-[100] space-y-2">
          {state.notifications.map(n => (
            <div
              key={n.id}
              className={`px-4 py-3 rounded-lg shadow-lg text-sm font-medium animate-slide-in ${
                n.type === 'success' ? 'bg-green-500 text-white' :
                n.type === 'error' ? 'bg-red-500 text-white' :
                n.type === 'warning' ? 'bg-amber-500 text-white' :
                'bg-cesac-600 text-white'
              }`}
            >
              {n.message}
            </div>
          ))}
        </div>
      )}

      {/* Main content */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-cesac-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">CESAC <span className="text-accent-500">AI</span></span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Plataforma integral de formación, inteligencia artificial, oposiciones, consultoría y gobernanza para profesionales, empresas y administraciones.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Formación</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/oposiciones" className="hover:text-white transition">Oposiciones</Link></li>
                <li><Link to="/educacion" className="hover:text-white transition">Educación</Link></li>
                <li><Link to="/ia" className="hover:text-white transition">Inteligencia Artificial</Link></li>
                <li><Link to="/empresas" className="hover:text-white transition">Empresas</Link></li>
                <li><Link to="/administraciones" className="hover:text-white transition">Administraciones</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Plataforma</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/governance" className="hover:text-white transition">AI Governance</Link></li>
                <li><Link to="/lab" className="hover:text-white transition">AI Lab</Link></li>
                <li><Link to="/campus" className="hover:text-white transition">Campus Virtual</Link></li>
                <li><Link to="/consultoria" className="hover:text-white transition">Consultoría</Link></li>
                <li><Link to="/procurement" className="hover:text-white transition">Contratación Pública</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/aviso-legal" className="hover:text-white transition">Aviso Legal</Link></li>
                <li><Link to="/privacidad" className="hover:text-white transition">Privacidad</Link></li>
                <li><Link to="/cookies" className="hover:text-white transition">Cookies</Link></li>
                <li><Link to="/condiciones" className="hover:text-white transition">Condiciones</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 CESAC AI. Todos los derechos reservados.</p>
            <p className="text-xs text-gray-600">Inteligencia Artificial · Educación · Empresa · Governance</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
