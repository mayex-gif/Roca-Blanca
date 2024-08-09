import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Direccion from '../components/direccion'; // Suponiendo que tienes este componente
import '../css/calzadosCards.css';

import { createProductSlug } from './utils/slugify';

const CalzadosHombre = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para manejar el loading
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        setLoading(true); // Inicia el loading cuando se monta el componente
        fetch("https://fakestoreapi.com/products/category/electronics")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Filtra los productos por categoría
                // const productosFiltrados = data.filter(producto => producto.category === 'women'); // Si para filtrar los datos
                setProductos(data); // Guarda los datos obtenidos
                console.log(data);
                setLoading(false); // Desactiva el loading una vez que se cargan los datos
            })
            .catch(error => {
                setError(error.message); // Guarda el mensaje de error en caso de fallo
                setLoading(false); // Desactiva el loading en caso de error
            });
    }, []);

    if (loading) {
        return (
            <>
                <Direccion />
                <div className='m-5'><strong>Cargando productos...</strong></div>
            </>
        )
    }

    if (error) {

        return (
            <>
                <Direccion />
                <div className='m-5'><strong>Error: {error}</strong></div>
            </>
        )
    }


    return (
        <>
            <Direccion />

            <div className="container pt-5">
                <h1 className='fs-3'><strong>Calzados Hombre</strong></h1>
                <div className="row justify-content-center">
                    {productos.map(producto => {
                        const slug = createProductSlug(producto.title, producto.id); // Generar el slug aquí
                        return (
                            <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                                <Link to={`${slug}`} className="text-decoration-none">
                                    <div className="card text-white bg-dark h-100" id='product'>
                                        <img src={producto.image} className="card-img-top" alt={producto.title} />
                                        <div className="card-body">
                                            <div className="text-center">
                                                <p className="fs-6 m-0">{producto.title}</p>
                                                <p className="m-0"><strong>${producto.price * 1350}</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CalzadosHombre;
