'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp, notify, type UserRole } from '@/lib/store';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('STUDENT');
  const { dispatch } = useApp();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      const demoUser = {
        id: 'demo-1',
        email: email || 'demo@cesac.ai',
        name: name || 'Usuario Demo',
        role: role,
        enrolledCourses: ['p01', 'p16'],
        progress: { p01: 45, p16: 80 },
        certificates: ['cert-001']
      };
      dispatch({ type: 'LOGIN', payload: demoUser });
      notify(dispatch, 'success', 'Sesión iniciada correctamente');
      router.push('/dashboard');
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
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-cesac-900">{mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}</h1>
          <p className="text-gray-600 mt-1">{mode === 'login' ? 'Accede a tu panel de CESAC AI' : 'Regístrate en la plataforma CESAC AI'}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border shadow-sm p-6 space-y-4">
          {mode === 'register' && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Tu nombre" className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500" />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500" />
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
        </form>

        <div className="mt-4 text-center">
          <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="text-sm text-cesac-700 hover:underline">
            {mode === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>
      </div>
    </div>
  );
}
