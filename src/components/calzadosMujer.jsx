import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Direccion from '../components/direccion'; // Suponiendo que tienes este componente

const CalzadosMujer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProductos(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Direccion />

            <div className="container pt-5">
            <h1 className='fs-3'><strong>Calzados Mujer</strong></h1>
                <div className="row justify-content-center">
                    {productos.map(producto => (
                        <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <Link to={'/'} className="text-decoration-none">
                                <div className="card text-white bg-dark h-100" data-bs-theme="dark" id='cardProduct'>
                                    <img src={producto.images[0]} className="card-img-top" alt={producto.title} />
                                    <div className="card-body d-flex flex-column">
                                        <div className="text-center">
                                            <p className="fs-6 m-0">{producto.title}</p>
                                            <p className="m-0">${producto.price * 1350}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CalzadosMujer;
