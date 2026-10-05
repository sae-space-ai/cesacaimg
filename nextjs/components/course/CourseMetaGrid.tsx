import type { Product } from '@/lib/data';
import { Clock, MapPin, Users, Award } from 'lucide-react';

interface CourseMetaGridProps {
  product: Product;
}

export function CourseMetaGrid({ product }: CourseMetaGridProps) {
  const metaItems = [
    {
      icon: <Clock className="w-5 h-5 text-cesac-600" />,
      label: product.duration,
      sublabel: product.hours > 0 ? `${product.hours} horas` : 'Autoestudio'
    },
    {
      icon: <MapPin className="w-5 h-5 text-cesac-600" />,
      label: product.modality.charAt(0).toUpperCase() + product.modality.slice(1),
      sublabel: 'Modalidad'
    },
    {
      icon: <Users className="w-5 h-5 text-cesac-600" />,
      label: product.places.toString(),
      sublabel: 'Plazas'
    },
    {
      icon: <Award className="w-5 h-5 text-cesac-600" />,
      label: 'Certificado',
      sublabel: 'Verificable'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {metaItems.map((item, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="flex justify-center mb-1">{item.icon}</div>
          <p className="text-sm font-medium text-cesac-900">{item.label}</p>
          <p className="text-xs text-gray-500">{item.sublabel}</p>
        </div>
      ))}
    </div>
  );
}
