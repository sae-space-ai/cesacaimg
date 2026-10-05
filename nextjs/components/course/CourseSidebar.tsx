'use client';

import type { Product } from '@/lib/data';
import { useApp, notify } from '@/lib/store';
import { ShoppingCart } from 'lucide-react';

interface CourseSidebarProps {
  product: Product;
}

export function CourseSidebar({ product }: CourseSidebarProps) {
  const { state, dispatch } = useApp();
  const isEnrolled = state.user?.enrolledCourses.includes(product.id);

  const handleEnroll = () => {
    if (!state.user) {
      notify(dispatch, 'warning', 'Inicia sesión para matricularte');
      return;
    }
    dispatch({ type: 'ENROLL_COURSE', payload: product.id });
    notify(dispatch, 'success', `Matriculado en ${product.name}`);
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, name: product.name, price: product.price, quantity: 1 } });
    notify(dispatch, 'success', `${product.name} añadido al carrito`);
  };

  return (
    <div className="sticky top-24 bg-white rounded-xl border shadow-sm p-6">
      {/* Precio principal */}
      <div className="text-center mb-4">
        <div className="text-4xl mb-3">{product.image}</div>
        <div className="text-3xl font-bold text-cesac-700">
          {product.price > 0 ? `${product.price}€` : 'Consultar'}
        </div>
        {product.iva > 0 && (
          <p className="text-xs text-gray-500">+ {product.iva}% IVA</p>
        )}
      </div>

      {/* Desglose de precios */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Precio empresa</span>
          <span className="font-medium">
            {product.priceCompany > 0 ? `${product.priceCompany}€` : 'Consultar'}
          </span>
        </div>
        {product.pricePublic > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Precio AAPP</span>
            <span className="font-medium">{product.pricePublic}€</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Inicio</span>
          <span className="font-medium">{product.startDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Certificación</span>
          <span className="font-medium text-right text-xs">{product.certification}</span>
        </div>
      </div>

      {/* Botones de acción */}
      {isEnrolled ? (
        <a
          href="/campus"
          className="block w-full py-3 bg-success-500 text-white text-center font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Acceder al curso
        </a>
      ) : (
        <div className="space-y-2">
          <button
            onClick={handleEnroll}
            className="w-full py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition"
          >
            Matricularme
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full py-3 border border-cesac-300 text-cesac-700 font-semibold rounded-lg hover:bg-cesac-50 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" /> Añadir al carrito
          </button>
        </div>
      )}

      {/* Garantía */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Garantía de satisfacción de 14 días
      </p>
    </div>
  );
}
