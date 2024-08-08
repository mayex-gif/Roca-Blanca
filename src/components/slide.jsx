import slideImg1 from '../images/slideImg1.jpg';
import slideImg2 from '../images/slideImg2.jpg';
import slideImg3 from '../images/slideImg3.jpg';
import slideImg4 from '../images/slideImg4.jpg';
import '../css/slide.css'; // Importa el CSS personalizado

const Slide = () => {
    return (
        <>
            <div className='position-relative z-2'>
                <div className='container-fluid p-0 ride'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-interval="1000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" id='carousel-options' aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className='' id='carousel-options'></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className='' id='carousel-options'></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" className='' id='carousel-options'></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slideImg1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slideImg2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slideImg3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slideImg4} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slide;
