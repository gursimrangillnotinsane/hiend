import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="styles_header__qc_3q styles_scrolled__no1II">
            <div className="styles_header__bar__SNNJD border-radius js-header-bar"></div>

            <Link
                aria-label="homepage link"
                className="styles_logoshape__Sq47Z js-internal-link border-radius styles_scrolled__WpWnI"
                href="/"
            >
                <svg viewBox="0 0 98 60" width="98" height="60" fill="none">
                    <path
                        d="M39.867 30.121v10.416c0 .593.318 1.138.826 1.426l8.942 5.208a1.655 1.655 0 001.636 0l8.927-5.208a1.64 1.64 0 00.826-1.426V30.12a1.64 1.64 0 00-.826-1.426l-3.51-2.051"
                        stroke="#010561"
                        strokeWidth="2.75"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M46.157 32.157V21.74a1.64 1.64 0 00-.826-1.426l-8.943-5.208a1.655 1.655 0 00-1.636 0l-8.926 5.208A1.64 1.64 0 0025 21.74v10.416c0 .592.318 1.137.826 1.426l8.942 5.208M65.058 35.842l7.116-4.15A1.64 1.64 0 0073 30.266V19.85a1.64 1.64 0 00-.826-1.426l-8.942-5.208a1.655 1.655 0 00-1.636 0l-8.943 5.208a1.64 1.64 0 00-.826 1.426v10.416"
                        stroke="#010561"
                        strokeWidth="2.75"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    ></path>
                </svg>
            </Link>

            <Link
                aria-label="homepage link"
                className="styles_logo__sRAMY styles_logo__ER0xG js-internal-link styles_scrolled__WpWnI styles_light__pfuV9"
                href="/"
            >

            </Link>

            <button
                aria-label="Toggle Nav"
                className="styles_button__SYQIC"
                onClick={toggleNav}
            >
                <svg viewBox="0 0 28 13" fill="none">
                    <path
                        d="M1 4.05882C1.89122 2.16577 3.53683 1 5.31927 1H23.9412"
                        stroke="#010561"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M5.58838 6.35303H22.4119"
                        stroke="#010561"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M26.9998 8.64697C26.1086 10.54 24.4629 11.7058 22.6805 11.7058L4.05859 11.7058"
                        stroke="#010561"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    ></path>
                </svg>
            </button>

            {isNavOpen &&
                <div
                    className={`styles_container__tSMES`}

                >
                    <div className="styles_header__bg__IxNtg"></div>
                    <nav className="styles_nav__ka1_N border-radius">
                        <div className="styles_nav__bg__WF8xS">
                            <div className='styles_nav__contents__VHDno nav-contents'>
                                <ul className="styles_nav__main__mKPx9">
                                    <li className="nav-item">
                                        <Link className="title js-internal-link" href="/gallery">
                                            Gallery
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="title js-internal-link" href="/lighting">
                                            Lighting
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="title js-internal-link" href="/curb">
                                            Curb
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="title js-internal-link" href="/contactus">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                                <div className="styles_nav__contact__S0xFm accent nav-item">
                                    <p>
                                        <Link href="mailto:hiendlights@gmail.co">hiendlights@gmail.com</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            }
        </header>
    );
};

export default Header;
