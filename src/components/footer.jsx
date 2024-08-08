import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="m-0 p-0">
                <div className="bg-dark border-top text-center">
                    <footer className="row justify-content-center m-0 p-0">
                        <div className="col-12 col-md-4 p-4">
                            <Link to={'/sobre-nosotros'} className="text-decoration-none text-white col-3">Sobre Nosotros</Link>
                        </div>
                        <div className="col-12 col-md-4 p-4">
                            <Link to={'/terminos-y-condiciones'} className="text-decoration-none text-white col-3">Términos y Condiciones</Link>
                        </div>
                        <div className="col-12 col-md-4 p-4">
                            <Link to={'/politicas-de-privacidad'} className="text-decoration-none text-white col-3">Políticas de Privacidad</Link>
                        </div>
                        <div className="text-white border-top p-4">
                            <p className="text-center text-white m-0 p-0">&copy; 2024 Roca Blanca, Argentina</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;