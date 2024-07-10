import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Home = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="home" id="home">
            <div className="welcome-message">
                <h1>Bienvenido a la Galería de Gloria Gómez-Calcerrada</h1>
                <p>Explora el mundo de la creatividad y la pasión a través de las obras de Gloria.</p>
                <nav>
                    <Link to="/biography">
                        <button className="nav-button">Sobre la artista</button>
                    </Link>
                    <Link to="/gallery">
                        <button className="nav-button">Galería</button>
                    </Link>
                    <Link to="/contact">
                        <button className="nav-button">Contacto</button>
                    </Link>
                </nav>
            </div>
            <div className="highlight-gallery">
                <Carousel responsive={responsive}>
                    <div class="carousel-container">
                        <div className="carousel-img image-1"></div>
                    </div>
                    <div class="carousel-container">
                        <div className="carousel-img image-2"></div>
                    </div>
                    <div class="carousel-container">
                        <div className="carousel-img image-3"></div>
                    </div>
                    <div class="carousel-container">
                        <div className="carousel-img image-4"></div>
                    </div>
                    <div class="carousel-container">
                        <div className="carousel-img image-5"></div>
                    </div>
                    <div class="carousel-container">
                        <div className="carousel-img image-6"></div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
