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
import Producto from './components/producto';
import PrincipalBody from './components/principalBody';



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
        <Route path="calzados/calzados-mujer" element={<CalzadosMujer />} />
        <Route path="calzados/calzados-hombre" element={<CalzadosHombre />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/principalbody" element={<PrincipalBody />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
