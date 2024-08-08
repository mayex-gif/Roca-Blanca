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
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        <Route path="/politicas-de-privacidad" element={<PoliticasDePrivacidad />} />
        <Route path="/vestimentas" element={<Vestimentas />} />
        <Route path="/calzados" element={<Calzados />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
