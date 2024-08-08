import { Link } from 'react-router-dom';
import '../css/calzados.css';

// import { Link } from "react-router-dom";
import calzado1 from "../images/calzado1.jpg";
import calzado2 from "../images/calzado2.jpg";
import calzado3 from "../images/calzado3.jpg";
import calzado4 from "../images/calzado4.jpg";
import calzado5 from "../images/calzado5.jpg";

import calzadoMujer from "../images/calzadoMujer.jpg";
import calzadoHombre from "../images/calzadoHombre.jpg";


const Calzados = () => {
    return (
        <>
            <div className='mt-5'>
                <p className="fs-4 text-center row m-0 p-0"><strong>CALZADOS CON DESCUENTOS</strong></p>
                <div className="row m-0 p-0 justify-content-center">
                    <div className="card col-6 col-md-4 col-lg-2 p-3" id='card2'>
                        <img src={calzado1} className="card-img p-0 m-0" alt="..." />
                        <div className="text-center">
                            <text className="fs-6 p-0 m-0 text-black">Pantalon Wrangler<br />
                                $25,000.00 - </text> <text className='text-decoration-line-through text-muted'> $50,000.00</text>
                        </div>
                    </div>
                    <div className="card col-6 col-md-4 col-lg-2 p-3" id='card2'>
                        <img src={calzado2} className="card-img p-0 m-0" alt="..." />
                        <div className="text-center">
                            <text className="fs-6 p-0 m-0 text-black">Short Jean Levi's<br />
                                $37,500.00 - </text> <text className='text-decoration-line-through text-muted'> $75,000.00</text>
                        </div>
                    </div>
                    <div className="card col-6 col-md-4 col-lg-2 p-3" id='card2'>
                        <img src={calzado3} className="card-img p-0 m-0" alt="..." />
                        <div className="text-center">
                            <text className="fs-6 p-0 m-0 text-black">Campera Jean Levi's<br />
                                $16,500.00 - </text> <text className='text-decoration-line-through text-muted'> $33,000.00</text>
                        </div>
                    </div>
                    <div className="card col-6 col-md-4 col-lg-2 p-3" id='card2'>
                        <img src={calzado4} className="card-img p-0 m-0" alt="..." />
                        <div className="text-center">
                            <text className="fs-6 p-0 m-0 text-black">Remera Lisa Calvin Clein<br />
                                $24,999.99 - </text> <text className='text-decoration-line-through text-muted'> $49,999.99</text>
                        </div>
                    </div>
                    <div className="card col-6 col-md-4 col-lg-2 p-3" id='card2'>
                        <img src={calzado5} className="card-img p-0 m-0" alt="..." />
                        <div className="text-center">
                            <text className="fs-6 p-0 m-0 text-black">Camisaco Hockerty<br />
                                $32,500.00 - </text> <text className='text-decoration-line-through text-muted'> $65,000.00</text>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='row m-0 p-0 d-flex justify-content-center'>
                    <div className="card p-0 m-5 col-11 col-md-5" id='card1'>
                        <img src={calzadoMujer} className="card-img p-0 m-0" id='card-img' alt="..." />
                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <div>
                                <h5 className="card-title text-white text-center fs-4"><strong>MUJERES</strong></h5>
                                <div className='text-center'>
                                    <Link to={'/calzados-mujer'} className="btn btn-outline-light text-center" id='card-btn'><strong>IR AHORA</strong></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-0 m-5 col-11 col-md-5" id='card1'>
                        <img src={calzadoHombre} className="card-img-top p-0 m-0" id='card-img' alt="..." />
                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <div>
                                <h5 className="card-title text-white text-center fs-4"><strong>HOMBRES</strong></h5>
                                <div className='text-center'>
                                    <Link to={'/calzados-hombre'} className="btn btn-outline-light text-center" id='card-btn'><strong>IR AHORA</strong></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calzados;