import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './lib/store';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Catalog, ProductDetail } from './pages/Products';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { Campus, AITutor } from './pages/Campus';
import { AdminPanel } from './pages/Admin';
import { About, Contact, UnitPage, Subscriptions, Cart, LegalPage } from './pages/Static';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/formacion" element={<Catalog />} />
            <Route path="/formacion/:slug" element={<ProductDetail />} />
            <Route path="/ia" element={<UnitPage unitId="ai-academy" />} />
            <Route path="/oposiciones" element={<UnitPage unitId="oposiciones" />} />
            <Route path="/educacion" element={<UnitPage unitId="educacion" />} />
            <Route path="/empresas" element={<UnitPage unitId="ai-business" />} />
            <Route path="/administraciones" element={<UnitPage unitId="ai-public" />} />
            <Route path="/governance" element={<UnitPage unitId="ai-governance" />} />
            <Route path="/governance/panel" element={<AdminPanel />} />
            <Route path="/lab" element={<UnitPage unitId="ai-lab" />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/consultoria" element={<UnitPage unitId="ai-consulting" />} />
            <Route path="/procurement" element={<UnitPage unitId="ai-procurement" />} />
            <Route path="/procurement/panel" element={<AdminPanel />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/profesor" element={<AdminPanel />} />
            <Route path="/ai-tutor" element={<AITutor />} />
            <Route path="/suscripciones" element={<Subscriptions />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/aviso-legal" element={<LegalPage type="aviso-legal" />} />
            <Route path="/privacidad" element={<LegalPage type="privacidad" />} />
            <Route path="/cookies" element={<LegalPage type="cookies" />} />
            <Route path="/condiciones" element={<LegalPage type="condiciones" />} />
            <Route path="*" element={
              <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold text-cesac-900 mb-4">404</h1>
                <p className="text-gray-600 mb-6">Página no encontrada</p>
                <a href="/" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium">Volver al inicio</a>
              </div>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
