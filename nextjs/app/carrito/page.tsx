'use client';

import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { useApp } from '@/lib/store';

export default function CartPage() {
  const { state, dispatch } = useApp();
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-cesac-900 mb-6">Carrito de compra</h1>
      {state.cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
          <Link href="/formacion" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium">Explorar catálogo</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {state.cart.map(item => (
              <div key={item.productId} className="bg-white rounded-xl border p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-cesac-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-cesac-700">{item.price * item.quantity}€</span>
                  <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.productId })} className="p-1.5 text-gray-400 hover:text-red-500 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border p-5 h-fit">
            <h3 className="font-semibold text-cesac-900 mb-4">Resumen</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span>{total}€</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">IVA</span><span>Calculado al finalizar</span></div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span className="text-cesac-700">{total}€</span></div>
            </div>
            <button className="w-full py-3 bg-cesac-700 text-white font-semibold rounded-lg hover:bg-cesac-800 transition">
              Finalizar compra
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">Pago seguro con Stripe</p>
          </div>
        </div>
      )}
    </div>
  );
}
