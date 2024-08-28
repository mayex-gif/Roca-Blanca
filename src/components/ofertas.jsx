import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/Cards.css';

import { createProductSlug } from './utils/slugify';

const Ofertas = ({ categoryId, titulo }) => {  // Aquí recibes el prop categoryId
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const productosFiltrados = data.filter(producto => producto.category.id === categoryId);  // Usas categoryId en lugar de un número fijo
                setProductos(productosFiltrados);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [categoryId]);  // Añadimos categoryId como dependencia del useEffect

    if (loading) {
        return (
            <>
                <div className='m-5'><strong>Cargando productos...</strong></div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <div className='m-5'><strong>Error: {error}</strong></div>
            </>
        )
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <>
            <div className="m-5">
                <h1 className='fs-3 text-center'><strong>{ titulo }</strong></h1>
                <Carousel responsive={responsive} infinite={true}>
                    {productos.map(producto => {
                        const slug = createProductSlug(producto.title, producto.id);
                        return (
                            <div key={producto.id} className="p-2"> {/* Aquí aplica margen alrededor de las tarjetas */}
                                <Link to={`${slug}`} className="text-decoration-none">
                                    <div className="card text-white bg-dark h-100" id='product'>
                                        <img src={producto.images[0]} className="card-img-top" alt={producto.title} />
                                        <div className="card-body">
                                            <div className="text-center">
                                                <p className="fs-6 m-0">{producto.title}</p>
                                                <div className=''>
                                                    <p className="m-0"><strong>${(producto.price * 1350) / 2} - </strong> <span className="text-decoration-line-through p-0 m-0">${(producto.price * 1350)}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Ofertas;
