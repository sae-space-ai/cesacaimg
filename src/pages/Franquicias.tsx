import React from 'react';
import { Link } from 'react-router-dom';

const Franquicias: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-4">
          NUEVO
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
          Únete a la Revolución de la IA con CESAC AI
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Sé parte de nuestra red de franquicias y lleva la educación en Inteligencia Artificial, 
          Governance y Transformación Digital a tu ciudad. Modelo de negocio probado y escalable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-bold text-lg mb-2">Modelo Escalable</h3>
            <p className="text-gray-500 text-sm">Infraestructura tecnológica lista para desplegar en semanas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-bold text-lg mb-2">Formación Exclusiva</h3>
            <p className="text-gray-500 text-sm">Acceso total a nuestro LMS, Tutor IA y contenidos premium.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-bold text-lg mb-2">Soporte 360º</h3>
            <p className="text-gray-500 text-sm">Acompañamiento en marketing, ventas y operaciones.</p>
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">¿Interesado en abrir tu centro CESAC AI?</h2>
          <p className="mb-6 opacity-90">Déjanos tus datos y nuestro equipo de expansión te contactará en menos de 24h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contacto"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Dossier Informativo
            </Link>
            <a 
              href="mailto:pergolessi9@gmail.com?subject=Consulta%20Franquicias%20CESAC%20AI"
              className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contactar por Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franquicias;
