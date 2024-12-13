import React from 'react';
import { Abril_Fatface } from 'next/font/google';
const abrilFatface = Abril_Fatface({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
});

const HeroSection = () => {
    return (
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
                    Design
                    <br />That Elevates
                </h2>
                <h1
                    className={`styles_headline__ceRGE headline animate-headline ${abrilFatface.className}`}
                    style={{ opacity: 1, paddingBottom: '3rem' }}
                >
                    <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>H</div>
                    <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>i</div>
                    <br />
                    <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>e</div>
                    <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>n</div>
                    <div style={{ position: 'relative', display: 'inline-block', transform: 'translate(0px, 0px)' }}>d</div>
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
                    <div className="styles_text__C1_W7 text animate-text" style={{ opacity: 1 }}>
                        <div
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                position: 'relative',
                                transform: 'translate(0px, 0px)',
                                opacity: 1,
                            }}
                        >
                            make your house
                        </div>
                        <div
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                position: 'relative',
                                transform: 'translate(0px, 0px)',
                                opacity: 1,
                            }}
                        >
                            aesthetically
                        </div>
                        <div
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                position: 'relative',
                                transform: 'translate(0px, 0px)',
                                opacity: 1,
                            }}
                        >
                            Modern and versatile.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
