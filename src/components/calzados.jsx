import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Direccion from './direccion';
import '../css/Cards.css';

import calzadoMujer from "../images/calzadoMujer.jpg";
import calzadoHombre from "../images/calzadoHombre.jpg";
import Ofertas from './ofertas';

const Calzados = () => {
    return (
        <>
            <Direccion />

            <Ofertas categoryId={2} titulo={'CALZADOS EN DESCUENTO'} />

            <div className='row m-0 p-0 d-flex justify-content-center'>
                <div className="card p-0 mx-5 mb-5 col-11 col-md-5" id='card1'>
                    <img src={calzadoMujer} className="card-img p-0 m-0" id='card-img' alt="..." />
                    <div className="card-img-overlay d-flex align-items-end justify-content-center">
                        <div>
                            <h5 className="card-title text-white text-center fs-4"><strong>MUJERES</strong></h5>
                            <div className='text-center'>
                                <Link to={'calzados-mujer'} className="btn btn-outline-light text-center" id='card-btn'><strong>IR AHORA</strong></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card p-0 mx-5 mb-5 col-11 col-md-5" id='card1'>
                    <img src={calzadoHombre} className="card-img-top p-0 m-0" id='card-img' alt="..." />
                    <div className="card-img-overlay d-flex align-items-end justify-content-center">
                        <div>
                            <h5 className="card-title text-white text-center fs-4"><strong>HOMBRES</strong></h5>
                            <div className='text-center'>
                                <Link to={'calzados-hombre'} className="btn btn-outline-light text-center" id='card-btn'><strong>IR AHORA</strong></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calzados;
