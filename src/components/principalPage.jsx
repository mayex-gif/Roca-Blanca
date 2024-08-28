import '../css/principalPage.css'

import ropaImg from '../images/ropa.jpg'
import calzadosImg from '../images/calzado.jpg'

import { Link } from 'react-router-dom';

import Slide from '../components/slide';
import Ofertas from '../components/ofertas';

const PrincipalPage = () => {
    return (
        <>
            <Slide />

            <Ofertas categoryId={5} titulo={'💸 REBAJAS DE HASTA 50% OFF 💸'}/>

            <div id='' className='pb-5'>
                <div className='row m-0 p-0 d-flex justify-content-center'>
                    <div className="card p-0 m-5 col-11 col-md-5" id='card1'>
                        <img src={calzadosImg} className="card-img p-0 m-0" id='card-img' alt="..." />
                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <div>
                                <h5 className="card-title text-white text-center fs-4"><strong>CALZADOS</strong></h5>
                                <p className="card-text text-white text-center">Calzados aptos para mujeres y hombres.</p>
                                <div className='text-center'>
                                    <Link to={'calzados'} className="btn btn-outline-light text-center" id='card-btn'><strong>IR AHORA</strong></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-0 m-5 col-11 col-md-5" id='card1'>
                        <img src={ropaImg} className="card-img-top p-0 m-0" id='card-img' alt="..." />
                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <div>
                                <h5 className="card-title text-white text-center fs-4"><strong>VESTIMENTA</strong></h5>
                                <p className="card-text text-white text-center">Vestimenta apta para mujeres y hombres.</p>
                                <div className='text-center'>
                                    <Link to={'vestimentas'} className="btn btn-outline-light text-center" id='card-btn'><strong>IR AHORA</strong></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default PrincipalPage;
