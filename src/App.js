import './css/App.css';

import NavBar from './components/navbar';
import Footer from './components/footer';
import Boton from './components/boton';
import Fomulario from './components/formulario';
// import PrincipalBody from './components/principalBody';
import PrincipalPage from './components/principalPage';

import { Route, Routes } from 'react-router-dom';
// import React from 'react';

function App() {
  return (
    <>
      <NavBar />

      {/* <PrincipalBody /> */}
      <Routes>
        <Route path="/boton" element={<Boton />} />
        <Route path="/formulario" element={ <Fomulario /> } />
        <Route path="/" element={<PrincipalPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
