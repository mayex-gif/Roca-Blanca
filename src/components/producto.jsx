import Direccion from "./direccion"
import React, { useState, useEffect } from 'react';
import '../css/productCard.css';

const Producto = () => {
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

            <div className="container">
                <div className="row">
                    {productos.map(producto => (
                        <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                            <div className="card text-white bg-dark h-100" data-bs-theme="dark" id='cardProduct'>
                                <img src={producto.images[0]} className="card-img-top" alt={producto.title} />
                                <div className="card-body d-flex flex-column">
                                    <div className="text-center">
                                        <text className="fs-6 p-0 m-0">{producto.title}<br />
                                            ${producto.price * 1350} {/*-  </text> <text className='text-decoration-line-through text-muted'> $50,000.00 */}
                                        </text>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <a href="/" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Producto;
