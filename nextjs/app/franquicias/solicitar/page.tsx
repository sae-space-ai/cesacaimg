'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, User, Mail, Phone, MapPin, Briefcase, Euro, CheckCircle, ArrowLeft } from 'lucide-react';
import type { FranchiseTier } from '@/lib/franchise-types';
import { FRANCHISE_TIERS_CONFIG } from '@/lib/franchise-types';

export default function FranchiseApplicationPage() {
  const [selectedTier, setSelectedTier] = useState<FranchiseTier>('STANDARD');
  const [formData, setFormData] = useState({
    companyName: '',
    legalName: '',
    taxId: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    businessAddress: '',
    city: '',
    country: 'España',
    postalCode: '',
    website: '',
    businessType: '',
    yearsInBusiness: '',
    currentRevenue: '',
    numberOfEmployees: '',
    whyInterested: '',
    relevantExperience: '',
    targetMarket: '',
    investmentCapacity: '',
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar la solicitud
    alert('Solicitud enviada correctamente. Nos pondremos en contacto contigo en 5-7 días laborables.');
  };

  const tiers: FranchiseTier[] = ['BASIC', 'STANDARD', 'PREMIUM', 'ENTERPRISE'];

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/franquicias" className="inline-flex items-center gap-2 text-cesac-700 hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            Volver a franquicias
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cesac-600 to-cesac-800 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cesac-900">Solicitar Franquicia</h1>
              <p className="text-gray-600">Completa el formulario para solicitar tu franquicia CESAC AI</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Selección de Tier */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-bold text-cesac-900 mb-4">1. Selecciona tu nivel de franquicia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tiers.map(tier => {
                const config = FRANCHISE_TIERS_CONFIG[tier];
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`p-4 rounded-lg border-2 text-left transition ${
                      selectedTier === tier
                        ? 'border-cesac-600 bg-cesac-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-cesac-900">{config.name}</h3>
                      {selectedTier === tier && <CheckCircle className="w-5 h-5 text-cesac-600" />}
                    </div>
                    <p className="text-2xl font-bold text-cesac-700 mb-1">€{config.price}/mes</p>
                    <p className="text-sm text-gray-600">Comisión: {100 - config.commissionRate}% · {config.maxUsers === -1 ? 'Usuarios ilimitados' : `Hasta ${config.maxUsers} usuarios`}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Información de la empresa */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-bold text-cesac-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-cesac-600" />
              2. Información de la empresa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre comercial *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="Ej: CESAC AI Madrid"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Razón social *</label>
                <input
                  type="text"
                  name="legalName"
                  value={formData.legalName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="Ej: Centro de Formación Madrid SL"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">NIF/CIF *</label>
                <input
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="Ej: B12345678"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sitio web</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="https://www.ejemplo.com"
                />
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-bold text-cesac-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-cesac-600" />
              3. Información de contacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
          </div>

          {/* Dirección */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-bold text-cesac-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cesac-600" />
              4. Dirección del negocio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección completa *</label>
                <input
                  type="text"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="Calle, número, piso, puerta"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="Madrid"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Código postal *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="28001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">País *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                />
              </div>
            </div>
          </div>

          {/* Información del negocio */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-bold text-cesac-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cesac-600" />
              5. Información del negocio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de negocio *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                >
                  <option value="">Selecciona...</option>
                  <option value="educacion">Centro de formación</option>
                  <option value="consultoria">Consultoría</option>
                  <option value="tecnologia">Empresa tecnológica</option>
                  <option value="rrhh">Recursos humanos</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Años en el mercado *</label>
                <input
                  type="number"
                  name="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facturación anual *</label>
                <select
                  name="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                >
                  <option value="">Selecciona...</option>
                  <option value="<100k">Menos de 100.000€</option>
                  <option value="100k-500k">100.000€ - 500.000€</option>
                  <option value="500k-1m">500.000€ - 1.000.000€</option>
                  <option value="1m-5m">1.000.000€ - 5.000.000€</option>
                  <option value=">5m">Más de 5.000.000€</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número de empleados *</label>
                <select
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                >
                  <option value="">Selecciona...</option>
                  <option value="1-5">1-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="51-200">51-200</option>
                  <option value=">200">Más de 200</option>
                </select>
              </div>
            </div>
          </div>

          {/* Motivación */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-bold text-cesac-900 mb-4">6. Cuéntanos más sobre ti</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">¿Por qué quieres ser franquiciado de CESAC AI? *</label>
                <textarea
                  name="whyInterested"
                  value={formData.whyInterested}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="Cuéntanos tu motivación..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experiencia relevante en el sector *</label>
                <textarea
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="Describe tu experiencia en educación, formación o tecnología..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mercado objetivo *</label>
                <textarea
                  name="targetMarket"
                  value={formData.targetMarket}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cesac-500"
                  placeholder="¿A qué tipo de clientes quieres dirigirte?"
                />
              </div>
            </div>
          </div>

          {/* Términos y condiciones */}
          <div className="bg-white rounded-xl border p-6">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
                className="mt-1 rounded border-gray-300"
              />
              <div>
                <label className="text-sm text-gray-700">
                  He leído y acepto los{' '}
                  <Link href="/condiciones" className="text-cesac-700 hover:underline">
                    términos y condiciones
                  </Link>{' '}
                  del programa de franquicias de CESAC AI. Entiendo que esta solicitud no garantiza la aprobación y que CESAC AI se reserva el derecho de evaluar cada solicitud individualmente.
                </label>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-4 bg-cesac-700 text-white font-bold rounded-xl hover:bg-cesac-800 transition"
            >
              Enviar solicitud de franquicia
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Recibirás una respuesta en 5-7 días laborables. Nuestro equipo se pondrá en contacto contigo para los siguientes pasos.
          </p>
        </form>
      </div>
    </div>
  );
}
