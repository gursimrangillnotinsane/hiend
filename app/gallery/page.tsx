

'use client';

import { useState } from 'react';

import Footer from "@/components/footer";
import HeaderComponent from "@/components/header";
import Gradient from '@/components/gradient';

export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/IMG-8102.jpg',
        '/IMG_3553.jpg',
        '/IMG_3556.jpg',
        '/IMG_3557.jpg',
        '/IMG_3800.jpg',
        '/IMG_3832.jpg',
        '/IMG_3833.jpg',
        '/IMG_3850.jpg',
        '/IMG_3851.jpg',
        '/IMG_3907.jpg',
        '/IMG_3922.jpg',
        '/IMG_3970.jpg',
        '/IMG_3973.jpg',
        '/IMG_4014.jpg',
    ];

    interface GalleryProps {
        index: number;
    }

    const openModal = (index: number): void => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
        console.log('Opening modal for index:', index); // Debug
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    interface NavigateFunction {
        (direction: number): void;
    }

    const navigate: NavigateFunction = (direction) => {
        const newIndex = (currentImageIndex + direction + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };
    return (
        <div>
            <HeaderComponent />

            <section
                data-header-theme="light"
                className="styles_hero__XVQM0"
                data-slice-type="home_hero"
                data-slice-variation="homeHero"
            >
                <div className="styles_container__YgRn2">
                    <h2
                        className="styles_subheading__W7b9Z accent accent-40 animate-fadeinup"
                        style={{ translate: 'none', rotate: 'none', scale: 'none', letterSpacing: '0vw', transform: 'translate(0px, 0px)', opacity: 1 }}
                    >
                        Our
                        <br />Work
                    </h2>
                    <h1
                        className="styles_headline__ceRGE headline animate-headline"
                        style={{ opacity: 1, paddingBottom: '3rem', fontSize: '20vw' }}
                    >
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>G</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>a</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>l</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>l</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>e</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>r</div>
                        <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>y</div>
                    </h1>
                    <div className="styles_bottom__zJSuB">
                        <div className="styles_scroll__X10_m styles_scroll__W_lzX">
                            <svg
                                viewBox="0 0 20 59"
                                fill="none"
                                style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
                            >
                                <path
                                    d="M1 1.264V55.2c0 1.786 2.163 2.676 3.42 1.408L19 41.9"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <p
                                style={{
                                    transform: 'translate(0px, 0px)',
                                    opacity: 1,
                                }}
                            >
                                Scroll
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="mx-8 p-8 bg-white rounded-xl">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                    {images.map((src, index) => (

                        <div key={index}
                            className="styles_right__image__w3IUx styles_image__TrEqJ galleryimg"><div
                                style={{ paddingBottom: '67.71037181996086%' }}><img
                                    loading="lazy" width="511" height="346"
                                    decoding="async" data-nimg="1"
                                    style={{ color: "transparent", cursor: "pointer" }}
                                    srcSet={src}

                                    onClick={() => openModal(index)} /></div></div>
                    ))}
                </div>

                {isModalOpen && (
                    <div id="myModal" className="modal">
                        <span
                            className="close"
                            onClick={closeModal}
                        >
                            &times;
                        </span>
                        <div className="modal-content">
                            <img
                                id="modalImage"
                                src={images[currentImageIndex]}
                                alt={`Full screen view of Image ${currentImageIndex + 1}`}
                            />
                            <button
                                className="prev"
                                onClick={() => navigate(-1)}
                            >
                                &#10094;
                            </button>
                            <button
                                className="next"
                                onClick={() => navigate(1)}
                            >
                                &#10095;
                            </button>
                        </div>
                    </div>
                )}
            </section>
            <Gradient />
            <Footer />
        </div>

    )
}