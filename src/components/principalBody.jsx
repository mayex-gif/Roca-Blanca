import React, { useState, useEffect } from 'react';
import '../css/productCard.css';

const PrincipalBody = () => {
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
        <div className="text-bg-dark container">
            <div className="row">
                {productos.map(producto => (
                    <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div className="card text-white bg-dark h-100" data-bs-theme="dark" id='cardProduct'>
                            <img src={producto.images[0]} className="card-img-top" alt={producto.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fs-5">{producto.title}</h5>
                                <p className="card-text text-center mt-auto fs-6"><strong className='text-center'>Price: ${producto.price}</strong></p>
                                <div className='text-center mt-2'>
                                    <a href="/" className="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrincipalBody;
