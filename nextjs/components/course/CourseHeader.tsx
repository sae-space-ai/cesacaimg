import type { Product } from '@/lib/data';

interface CourseHeaderProps {
  product: Product;
}

export function CourseHeader({ product }: CourseHeaderProps) {
  return (
    <div className="mb-6">
      {/* Badge de unidad */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-cesac-600 bg-cesac-50 px-2 py-0.5 rounded">
          {product.unit}
        </span>
        <span className="text-xs text-gray-500">Código: {product.code}</span>
      </div>

      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-cesac-900 mb-4">
        {product.name}
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-600">{product.shortDescription}</p>
    </div>
  );
}
