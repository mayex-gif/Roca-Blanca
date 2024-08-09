import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Direccion from './direccion';
import '../css/productDetail.css';

const ProductDetail = () => {
    const { slug } = useParams(); // Obtener el slug de la URL
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imagenPrincipal, setImagenPrincipal] = useState(''); // Estado para la imagen principal

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
                setImagenPrincipal(data.images[0]); // Establece la primera imagen como la principal
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

    // Función para cambiar la imagen principal
    const cambiarImagen = (nuevaImagen) => {
        setImagenPrincipal(nuevaImagen);
    }

    return (
        <>
            <Direccion />

            <div className='m-5'>
                <div className='row p-0 m-0'>
                    <div className='card p-0 m-0 col-12 col-lg-6' id='bord0'>
                        {/* Mostrar la imagen principal */}
                        <img src={imagenPrincipal} alt={producto.title} className='' />
                    </div>
                    <div className='p-0 m-0 col-12 col-lg-2'>
                        <div className='row m-0 p-0'>
                            {/* Botones para cambiar la imagen principal */}
                            {producto.images.map((imagen, index) => (
                                <div key={index} className='card m-0 p-0 col-4 col-lg-12' id='bord0'>
                                    <img src={imagen} alt={producto.title} onClick={() => cambiarImagen(imagen)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <p className='fs-2'><strong>{producto.title}</strong></p>
                        <p className='fs-4'>${producto.price * 1350}</p>
                        <div className='text-center'>
                            <button className='btn bg-black text-white' id='bord0'>AGREGAR AL CARRITO</button>
                        </div>
                        <p className='fs-6'>{producto.description}</p>
                        <div className=''>
                            <p className='p-0 m-0'>COLOR: </p>
                            <button className="bg-black text-white text-center text-decoration-none" id="">NEGRO <i className="bi bi-caret-down-fill"></i></button>
                        </div>
                        <div className='mt-2'>
                            <p className='p-0 m-0'>TALLE: </p>
                            <button className="text-black text-center text-decoration-none" id="bord0">XXS <i className="bi bi-caret-down-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
