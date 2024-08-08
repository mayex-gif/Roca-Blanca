import '../css/navbar.css';
import Descuentos from './descuentos';
import logoRocaBlanca from '../images/rocablancapng.png';
import { Link } from 'react-router-dom';

const buscarProductos = () => {
    // Implementación de la función de búsqueda
};

function NavBar() {
    return (
        <>
            <Descuentos />

            <header className="bg-dark border-bottom">
                <div className="container py-3">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 text-center text-md-start mb-0 mb-md-0">
                            <Link to={'/'} className="text-decoration-none text-white fs-5 text"><strong>ROCA BLANCA</strong></Link>
                        </div>
                        <div className="col-12 col-md-4 text-center mb-2 mb-md-0">
                            <Link to={'/'}>
                                <img src={logoRocaBlanca} alt="Roca Blanca Logo" width="100" height="100" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
                            <form className="d-flex align-items-center" role="search">
                                {/* <input className="form-control text-white me-2" type="search" placeholder="Buscar..." aria-label="Search" /> */}
                                <button className="btn btn-light me-2" onClick={ buscarProductos } type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </form>
                            <a href='https://www.instagram.com/rocablanca.ok/' target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn me-2" id='instagram'>
                                    <i className="bi bi-instagram"></i>
                                </button>
                            </a>
                            <a href='https://www.facebook.com/rocablanca.ok/?locale=es_LA' target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn" id='facebook'>
                                    <i class="bi bi-facebook"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;
