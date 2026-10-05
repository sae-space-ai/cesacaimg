'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export default function ContactPage() {
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
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea rows={5} className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-cesac-500 resize-none" placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="privacy" className="mt-1 rounded border-gray-300" />
                <label htmlFor="privacy" className="text-xs text-gray-600">He leído y acepto la <Link href="/privacidad" className="text-cesac-700 hover:underline">política de privacidad</Link>.</label>
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
              <Link href="/empresas" className="text-sm text-cesac-700 font-medium hover:underline flex items-center gap-1">
                Conocer soluciones B2B <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
