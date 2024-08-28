import './css/App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Formulario from './components/formulario';
import PrincipalPage from './components/principalPage';
import SobreNosotros from './components/sobrenosotros';
import TerminosYCondiciones from './components/terminosycondiciones';
import PoliticasDePrivacidad from './components/politicasdeprivacidad';
import Vestimentas from './components/vestimentas';
import Calzados from './components/calzados';
import ScrollToTop from './components/scrollToTop';
// import Direccion from './components/direccion';
import { Route, Routes } from 'react-router-dom';
import CalzadosMujer from './components/calzadosMujer';
import CalzadosHombre from './components/calzadosHombre';
import ProductDetail from './components/productDetail';
import VestimentasHombre from './components/vestimentasHombre';
import VestimentasMujer from './components/vestimentasMujer';



function App() {
  return (
    <>
      <NavBar />
      {/* <Direccion /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        <Route path="/politicas-de-privacidad" element={<PoliticasDePrivacidad />} />
        <Route path="/vestimentas" element={<Vestimentas />} />
        <Route path="/calzados" element={<Calzados />} />
        <Route path="/vestimentas/:slug" element={<ProductDetail />} />
        <Route path="/calzados/:slug" element={<ProductDetail />} />
        <Route path="calzados/calzados-mujer" element={<CalzadosMujer />} />
        <Route path="calzados/calzados-hombre" element={<CalzadosHombre />} />
        {/* <Route path="/calzados/:slug" element={<ProductDetail />} /> */}
        <Route path="/calzados/calzados-mujer/:slug" element={<ProductDetail />} />
        <Route path="/calzados/calzados-hombre/:slug" element={<ProductDetail />} />
        {/* <Route path="/vestimentas/:slug" element={<ProductDetail />} /> */}
        <Route path="/vestimentas/vestimentas-hombre" element={<VestimentasHombre />} />
        <Route path="/vestimentas/vestimentas-mujer" element={<VestimentasMujer />} />
        <Route path="/vestimentas/vestimentas-hombre/:slug" element={<ProductDetail />} />
        <Route path="/vestimentas/vestimentas-mujer/:slug" element={<ProductDetail />} />
        <Route path="/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
