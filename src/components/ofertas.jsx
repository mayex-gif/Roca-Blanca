import { Link } from 'react-router-dom';
import '../css/ofertas.css';

// import { useState, useEffect } from 'react';

import oferta1 from "../images/oferta1.jpg";
import oferta2 from "../images/oferta2.jpg";
import oferta3 from "../images/oferta3.jpg";
import oferta4 from "../images/oferta4.jpg";
import oferta5 from "../images/oferta5.jpg";

const Ofertas = () => {

    // const [productos, setProductos] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setProductos(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    return (
        <>
            <div className=''>
                <p className="fs-4 text-center row m-0 p-0"><strong>REBAJAS DE HASTA 50% OFF</strong></p>
                <div className="row m-0 p-0 justify-content-center">
                    <Link to={'/'} className='text-decoration-none col-6 col-md-4 col-lg-2'>
                        <div className="card  p-3" id='card2'>
                            <img src={oferta1} className="card-img p-0 m-0" alt="..." />
                            <div className="text-center">
                                <p className="fs-6 p-0 m-0 text-black">Pantalon Wrangler<br />
                                    $25,000.00 - </p> <text className='text-decoration-line-through text-muted'> $50,000.00</text>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/'} className="text-decoration-none col-6 col-md-4 col-lg-2">
                        <div className="card p-3" id='card2'>
                            <img src={oferta2} className="card-img p-0 m-0" alt="..." />
                            <div className="text-center">
                                <p className="fs-6 p-0 m-0 text-black">Short Jean Levi's<br />
                                    $37,500.00 - </p> <text className='text-decoration-line-through text-muted'> $75,000.00</text>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/'} className="text-decoration-none col-6 col-md-4 col-lg-2">
                        <div className="card p-3" id='card2'>
                            <img src={oferta3} className="card-img p-0 m-0" alt="..." />
                            <div className="text-center">
                                <p className="fs-6 p-0 m-0 text-black">Campera Jean Levi's<br />
                                    $16,500.00 - </p> <text className='text-decoration-line-through text-muted'> $33,000.00</text>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/'} className="text-decoration-none col-6 col-md-4 col-lg-2">
                        <div className="card p-3" id='card2'>
                            <img src={oferta4} className="card-img p-0 m-0" alt="..." />
                            <div className="text-center">
                                <p className="fs-6 p-0 m-0 text-black">Remera Lisa Calvin Clein<br />
                                    $24,999.99 - </p> <text className='text-decoration-line-through text-muted'> $49,999.99</text>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/'} className="text-decoration-none col-6 col-md-4 col-lg-2">
                        <div className="card p-3" id='card2'>
                            <img src={oferta5} className="card-img p-0 m-0" alt="..." />
                            <div className="text-center">
                                <p className="fs-6 p-0 m-0 text-black">Camisaco Hockerty<br />
                                    $32,500.00 - </p> <text className='text-decoration-line-through text-muted'> $65,000.00</text>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Ofertas;