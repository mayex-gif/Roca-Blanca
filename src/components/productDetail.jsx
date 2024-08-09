import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Direccion from './direccion';
import '../css/productDetail.css'

const ProductDetail = () => {
    const { slug } = useParams(); // Obtener el slug de la URL
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true); // Inicia el loading cuando se monta el componente
        const url = slug.split('-').pop(); // Extrae el ID del slug
        fetch(`https://api.escuelajs.co/api/v1/products/${url}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProducto(data); // Guarda el producto obtenido
                setLoading(false); // Desactiva el loading una vez que se carga el producto
            })
            .catch(error => {
                setError(error.message); // Guarda el mensaje de error en caso de fallo
                setLoading(false); // Desactiva el loading en caso de error
            });
    }, [slug]); // Dependencia en slug para cargar el producto correcto

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Direccion />

            <div className='m-5'>
                <div className='row p-0 m-0'>
                    <div className='card p-0 m-0 col-12 col-md-6' id='bord0'>
                        <img src={producto.images[0]} alt={producto.title} className='' />
                    </div>
                    <div className='p-0 m-0 col-12 col-md-2'>
                        <div className=''>
                            <div className='card m-0 p-0' id='bord0'>
                                <img src={producto.images[0]} alt={producto.title} />
                            </div>
                            <div className='card m-0 p-0' id='bord0'>
                                <img src={producto.images[1]} alt={producto.title} />
                            </div>
                            <div className='card m-0 p-0' id='bord0'>
                                <img src={producto.images[2]} alt={producto.title} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <p className='fs-2'><strong>{producto.title}</strong></p>
                        <p className='fs-4'>${producto.price * 1350}</p>
                        <div className='text-center'>
                            <button className='btn bg-black text-white' id='bord0'>AGREGAR AL CARRITO</button>
                        </div>
                        <p className='fs-4'>{producto.description}</p>
                    </div>
                </div>
            </div>
            {/* <div className='p-5'>
                <h1>{producto.title}</h1>
                <img src={producto.images[0]} alt={producto.title} />
                <p>{producto.description}</p>
                <p>Price: ${producto.price}</p>
            </div> */}
        </>
    );
};

export default ProductDetail;
