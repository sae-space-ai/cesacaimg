'use client';

import type { FranchiseTier } from '@/lib/franchise-types';
import { FRANCHISE_TIERS_CONFIG } from '@/lib/franchise-types';
import { Check, Crown, Building2, Star, Zap, Briefcase } from 'lucide-react';

interface FranchiseCardProps {
  tier: FranchiseTier;
  popular?: boolean;
  onSelect: () => void;
}

export function FranchiseCard({ tier, popular, onSelect }: FranchiseCardProps) {
  const config = FRANCHISE_TIERS_CONFIG[tier];
  
  const tierIcons = {
    BASIC: <Star className="w-8 h-8" />,
    STANDARD: <Building2 className="w-8 h-8" />,
    PREMIUM: <Zap className="w-8 h-8" />,
    ENTERPRISE: <Crown className="w-8 h-8" />,
  };

  const tierColors = {
    BASIC: 'from-gray-500 to-gray-700',
    STANDARD: 'from-blue-500 to-blue-700',
    PREMIUM: 'from-violet-500 to-violet-700',
    ENTERPRISE: 'from-amber-500 to-amber-700',
  };

  return (
    <div className={`relative bg-white rounded-2xl border-2 ${popular ? 'border-cesac-600 shadow-xl' : 'border-gray-200'} overflow-hidden`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-cesac-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          MÁS POPULAR
        </div>
      )}
      
      <div className={`bg-gradient-to-r ${tierColors[tier]} p-6 text-white`}>
        <div className="flex items-center gap-3 mb-4">
          {tierIcons[tier]}
          <h3 className="text-2xl font-bold">{config.name}</h3>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">€{config.price}</span>
          <span className="text-sm opacity-80">/{config.period}</span>
        </div>
        <p className="text-sm mt-2 opacity-90">Comisión: {100 - config.commissionRate}%</p>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {config.features.map((feature, i) => (
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
          Solicitar esta franquicia
        </button>
      </div>
    </div>
  );
}

interface FranchiseAccessBadgeProps {
  tier: FranchiseTier;
  size?: 'sm' | 'md' | 'lg';
}

export function FranchiseAccessBadge({ tier, size = 'md' }: FranchiseAccessBadgeProps) {
  const tierConfig = {
    BASIC: { label: 'Básica', color: 'bg-gray-100 text-gray-700', icon: <Star className="w-3 h-3" /> },
    STANDARD: { label: 'Estándar', color: 'bg-blue-100 text-blue-700', icon: <Building2 className="w-3 h-3" /> },
    PREMIUM: { label: 'Premium', color: 'bg-violet-100 text-violet-700', icon: <Zap className="w-3 h-3" /> },
    ENTERPRISE: { label: 'Enterprise', color: 'bg-amber-100 text-amber-700', icon: <Crown className="w-3 h-3" /> },
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
      Franquicia {config.label}
    </span>
  );
}

interface FranchiseStatsProps {
  totalRevenue: number;
  activeStudents: number;
  completedCourses: number;
  commissionRate: number;
}

export function FranchiseStats({ totalRevenue, activeStudents, completedCourses, commissionRate }: FranchiseStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl border p-4">
        <p className="text-2xl font-bold text-cesac-900">€{totalRevenue.toLocaleString()}</p>
        <p className="text-xs text-gray-500">Facturación Total</p>
      </div>
      <div className="bg-white rounded-xl border p-4">
        <p className="text-2xl font-bold text-cesac-900">{activeStudents}</p>
        <p className="text-xs text-gray-500">Estudiantes Activos</p>
      </div>
      <div className="bg-white rounded-xl border p-4">
        <p className="text-2xl font-bold text-cesac-900">{completedCourses}</p>
        <p className="text-xs text-gray-500">Cursos Completados</p>
      </div>
      <div className="bg-white rounded-xl border p-4">
        <p className="text-2xl font-bold text-cesac-900">{commissionRate}%</p>
        <p className="text-xs text-gray-500">Tu Comisión</p>
      </div>
    </div>
  );
}
