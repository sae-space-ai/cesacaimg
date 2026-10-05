import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/store';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'CESAC AI — Inteligencia Artificial · Educación · Empresa · Governance',
  description: 'Plataforma integral de formación, inteligencia artificial, oposiciones, consultoría y gobernanza para profesionales, empresas y Administraciones Públicas.',
  keywords: ['CESAC', 'IA', 'inteligencia artificial', 'formación', 'oposiciones', 'educación', 'empresa', 'governance', 'LMS'],
  openGraph: {
    title: 'CESAC AI - Plataforma Integral de Formación e Inteligencia Artificial',
    description: 'Formación, IA, oposiciones, empresa, Administraciones Públicas, AI Governance y consultoría.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AppProvider>
          <Layout>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  );
}
