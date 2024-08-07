import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Descuentos = () => {
    const [mostrar, setMostrar] = useState(false);

    const mostrarDescuentos = (e) => {
        e.preventDefault();
        setMostrar(!mostrar);
    };

    return (
        <div className="">
            <div className=' my-0 py-0 bg-black d-flex justify-content-center'>
                <Link className="text-decoration-none text-white" onClick={mostrarDescuentos}>
                    <strong className='text-center'>DESCUENTOS <i className="bi bi-caret-down-fill"></i></strong>
                </Link>
            </div>
            {mostrar && (
                <div className="bg-white text-black position-absolute w-100 h-10 p-3">
                    <div className='text-center'>
                        <div className="">
                            <div className="d-flex flex-wrap align-items-center justify-content-center">
                                <div className='px-md-5 mt-2 fs-5'>
                                    <strong>50% OFF EN ROMPE VIENTOS</strong><br />
                                    <Link to="/" className='text-decoration-none text-black'><u>Ir ahora</u></Link>
                                </div>
                                <div className='px-md-5 mt-2 fs-5'>
                                    <strong>HASTA 20% OFF EN CAMPERAS PARA DAMA</strong> <br />
                                    <Link to="/" className='text-decoration-none text-black subrayed'><u>Ir ahora</u></Link>
                                </div>
                                <div className='px-md-5 mt-2 fs-5'>
                                    <strong>💸 FORMAS DE PAGO 💸</strong> <br />
                                    <p> Las formas de pago validas para los descuentos son: <br /> <u><strong>Trasnferencias bancarias y Efectivo</strong></u></p>
                                    {/* <Link to="/" className='text-decoration-none text-black'>Ir ahora</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Descuentos;
