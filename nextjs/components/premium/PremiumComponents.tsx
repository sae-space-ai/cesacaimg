'use client';

import type { PremiumTier, PremiumFeatures } from '@/lib/premium-types';
import { PREMIUM_FEATURES } from '@/lib/premium-types';
import { Check, X, Crown, Star, Zap, Building2, Shield } from 'lucide-react';

interface PremiumBadgeProps {
  tier: PremiumTier;
  size?: 'sm' | 'md' | 'lg';
}

export function PremiumBadge({ tier, size = 'md' }: PremiumBadgeProps) {
  const tierConfig = {
    FREE: { label: 'Free', color: 'bg-gray-100 text-gray-700', icon: null },
    INDIVIDUAL: { label: 'Individual', color: 'bg-blue-100 text-blue-700', icon: <Star className="w-3 h-3" /> },
    PRO: { label: 'Pro', color: 'bg-violet-100 text-violet-700', icon: <Zap className="w-3 h-3" /> },
    BUSINESS: { label: 'Business', color: 'bg-amber-100 text-amber-700', icon: <Building2 className="w-3 h-3" /> },
    GOVERNANCE: { label: 'Governance', color: 'bg-rose-100 text-rose-700', icon: <Shield className="w-3 h-3" /> },
  };

  const config = tierConfig[tier];
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-semibold ${config.color} ${sizeClasses[size]}`}>
      {config.icon}
      {config.label}
    </span>
  );
}

interface PremiumCardProps {
  tier: PremiumTier;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  onSelect: () => void;
}

export function PremiumCard({ tier, price, period, features, popular, onSelect }: PremiumCardProps) {
  const tierConfig = {
    FREE: { gradient: 'from-gray-500 to-gray-700', icon: <Star className="w-8 h-8" /> },
    INDIVIDUAL: { gradient: 'from-blue-500 to-blue-700', icon: <Star className="w-8 h-8" /> },
    PRO: { gradient: 'from-violet-500 to-violet-700', icon: <Zap className="w-8 h-8" /> },
    BUSINESS: { gradient: 'from-amber-500 to-amber-700', icon: <Building2 className="w-8 h-8" /> },
    GOVERNANCE: { gradient: 'from-rose-500 to-rose-700', icon: <Shield className="w-8 h-8" /> },
  };

  const config = tierConfig[tier];

  return (
    <div className={`relative bg-white rounded-2xl border-2 ${popular ? 'border-cesac-600 shadow-xl' : 'border-gray-200'} overflow-hidden`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-cesac-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          MÁS POPULAR
        </div>
      )}
      
      <div className={`bg-gradient-to-r ${config.gradient} p-6 text-white`}>
        <div className="flex items-center gap-3 mb-4">
          {config.icon}
          <h3 className="text-2xl font-bold">{tier}</h3>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">€{price}</span>
          <span className="text-sm opacity-80">/{period}</span>
        </div>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onSelect}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            popular
              ? 'bg-cesac-700 text-white hover:bg-cesac-800'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {tier === 'FREE' ? 'Plan Actual' : 'Seleccionar Plan'}
        </button>
      </div>
    </div>
  );
}

interface PremiumFeatureListProps {
  features: PremiumFeatures;
}

export function PremiumFeatureList({ features }: PremiumFeatureListProps) {
  const featureGroups = [
    {
      title: 'Contenido',
      items: [
        { label: 'Cursos Exclusivos', enabled: features.exclusiveCourses },
        { label: 'Masterclasses', enabled: features.masterclasses },
        { label: 'Casos de Estudio', enabled: features.caseStudies },
        { label: 'Acceso Anticipado', enabled: features.earlyAccess },
      ],
    },
    {
      title: 'Tutor IA',
      items: [
        { label: `Consultas: ${features.aiQueriesLimit === -1 ? 'Ilimitadas' : features.aiQueriesLimit}/mes`, enabled: features.aiQueriesLimit > 10 },
        { label: 'Soporte Prioritario', enabled: features.prioritySupport },
        { label: 'Agentes Especializados', enabled: features.specializedAgents },
        { label: 'RAG Personalizado', enabled: features.customRAG },
      ],
    },
    {
      title: 'Comunidad',
      items: [
        { label: 'Foros Privados', enabled: features.privateForums },
        { label: 'Networking', enabled: features.networking },
        { label: 'Mentoría', enabled: features.mentorship },
        { label: 'Eventos Exclusivos', enabled: features.events },
      ],
    },
    {
      title: 'Certificaciones',
      items: [
        { label: 'Certificados Premium', enabled: features.premiumCertificates },
        { label: 'Badges Verificados', enabled: features.verifiedBadges },
        { label: 'Integración LinkedIn', enabled: features.linkedinIntegration },
      ],
    },
    {
      title: 'Soporte',
      items: [
        { label: `Nivel: ${features.supportLevel}`, enabled: features.supportLevel !== 'basic' },
        { label: `${features.consultationHours}h consultoría/mes`, enabled: features.consultationHours > 0 },
      ],
    },
    {
      title: 'Analíticas',
      items: [
        { label: 'Analíticas Avanzadas', enabled: features.advancedAnalytics },
        { label: 'Seguimiento de Progreso', enabled: features.progressTracking },
        { label: 'Informes Personalizados', enabled: features.customReports },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featureGroups.map((group, i) => (
        <div key={i} className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold text-cesac-900 mb-3">{group.title}</h3>
          <ul className="space-y-2">
            {group.items.map((item, j) => (
              <li key={j} className="flex items-center gap-2">
                {item.enabled ? (
                  <Check className="w-4 h-4 text-success-500" />
                ) : (
                  <X className="w-4 h-4 text-gray-300" />
                )}
                <span className={`text-sm ${item.enabled ? 'text-gray-700' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

interface PremiumCrownProps {
  size?: 'sm' | 'md' | 'lg';
}

export function PremiumCrown({ size = 'md' }: PremiumCrownProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`inline-flex items-center justify-center ${sizeClasses[size]}`}>
      <Crown className="w-full h-full text-amber-500" />
    </div>
  );
}
