import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Cpu } from 'lucide-react';
import { useApp, notify, type UserRole } from '../lib/store';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('STUDENT');
  const [showPassword, setShowPassword] = useState(false);
  const { state, dispatch } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      // Demo login
      const demoUser = {
        id: 'demo-1',
        email: email || 'demo@cesac.ai',
        name: name || 'Usuario Demo',
        role: role,
        enrolledCourses: ['p01', 'p16', 'p25'],
        progress: { p01: 45, p16: 80, p25: 20 },
        certificates: ['cert-001']
      };
      dispatch({ type: 'LOGIN', payload: demoUser });
      notify(dispatch, 'success', 'Sesión iniciada correctamente');
      navigate('/dashboard');
    } else {
      if (!email || !password || !name) {
        notify(dispatch, 'error', 'Completa todos los campos');
        return;
      }
      const newUser = {
        id: 'user-' + Date.now(),
        email,
        name,
        role,
        enrolledCourses: [],
        progress: {},
        certificates: []
      };
      dispatch({ type: 'LOGIN', payload: newUser });
      notify(dispatch, 'success', 'Cuenta creada correctamente');
      navigate('/dashboard');
    }
  };

  const quickLogin = (r: UserRole) => {
    const names: Record<string, string> = {
      'STUDENT': 'Alumno Demo',
      'ADMIN': 'Administrador',
      'TEACHER': 'Profesor Demo',
      'COMPANY_ADMIN': 'Admin Empresa',
      'COMPLIANCE_OFFICER': 'Compliance Officer',
      'PROCUREMENT_MANAGER': 'Responsable Licitaciones'
    };
    const user = {
      id: 'quick-' + r,
      email: r.toLowerCase() + '@cesac.ai',
      name: names[r] || r,
      role: r,
      enrolledCourses: ['p01', 'p16'],
      progress: { p01: 45, p16: 80 },
      certificates: ['cert-001']
    };
    dispatch({ type: 'LOGIN', payload: user });
    notify(dispatch, 'success', `Sesión iniciada como ${names[r]}`);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-cesac-900">{mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}</h1>
          <p className="text-gray-600 mt-1">{mode === 'login' ? 'Accede a tu panel de CESAC AI' : 'Regístrate en la plataforma CESAC AI'}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border shadow-sm p-6 space-y-4">
          {mode === 'register' && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Tu nombre" className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500 focus:border-cesac-500" />
              </div>
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500 focus:border-cesac-500" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500 focus:border-cesac-500" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          {mode === 'register' && (
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Perfil</label>
              <select id="role" value={role} onChange={e => setRole(e.target.value as UserRole)} className="w-full px-3 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500">
                <option value="STUDENT">Alumno particular</option>
                <option value="PROFESSIONAL">Profesional</option>
                <option value="COMPANY_USER">Empleado de empresa</option>
                <option value="PUBLIC_EMPLOYEE">Empleado público</option>
                <option value="TEACHER">Profesor</option>
              </select>
            </div>
          )}
          <button type="submit" className="w-full py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition">
            {mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
          </button>
          {mode === 'login' && (
            <p className="text-center text-sm">
              <button type="button" className="text-cesac-700 hover:underline">¿Olvidaste tu contraseña?</button>
            </p>
          )}
        </form>

        <div className="mt-4 text-center">
          <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="text-sm text-cesac-700 hover:underline">
            {mode === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>

        {/* Quick access for demo */}
        <div className="mt-8 bg-gray-50 rounded-xl p-4 border">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Acceso rápido (demo)</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { role: 'STUDENT' as UserRole, label: 'Alumno' },
              { role: 'ADMIN' as UserRole, label: 'Admin' },
              { role: 'TEACHER' as UserRole, label: 'Profesor' },
              { role: 'COMPANY_ADMIN' as UserRole, label: 'Empresa' },
              { role: 'COMPLIANCE_OFFICER' as UserRole, label: 'Compliance' },
              { role: 'PROCUREMENT_MANAGER' as UserRole, label: 'Procurement' }
            ].map(item => (
              <button key={item.role} onClick={() => quickLogin(item.role)} className="px-3 py-2 text-xs font-medium bg-white border rounded-lg hover:bg-cesac-50 hover:border-cesac-300 transition">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
