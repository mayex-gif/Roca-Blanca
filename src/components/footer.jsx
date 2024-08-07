import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="m-0 p-0">
                <div className="bg-dark border-top text-align-center">
                    <footer className="py-3 my-0">
                        <div className="row justify-content-center border-bottom pb-3 mb-3 text-center mx-0 px-0">
                            <Link className="text-decoration-none text-white col-3">Home</Link>
                            <Link className="text-decoration-none text-white col-3">Home</Link>
                            <Link className="text-decoration-none text-white col-3">Home</Link>
                        </div>
                        <div className="text-white">
                            <p className="text-center text-white">&copy; 2024 Company, Inc</p>
                        </div>

                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;