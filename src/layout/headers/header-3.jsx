import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import Image from 'next/legacy/image';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes'; // Import useTheme

import logo from "../../../public/assets/img/logo/logo-dark.svg";

const HeaderThree = () => {
    const { sticky } = useSticky();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { theme, setTheme } = useTheme(); // Hook from next-themes

    return (
        <>
            <header className="tp-header-height">
                <div id="header-sticky" className={`header-bottom__area header__space header-sticky-bg-2 header-bottom__transparent z-index-5 ${sticky && "header-sticky"}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                                <div className="header-bottom__logo">
                                    <Link href="/"><Image src={logo} alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                                <div className="header-bottom__main-menu header-bottom__main-menu-3">
                                    <nav id="mobile-menu">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-6">
                                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                                    <div className="header-bottom__btn d-flex align-items-center">
                                        <Link className="tp-btn-blue-sm d-none d-md-inline-block tp-btn-hover alt-color-black" href="/contact">
                                            <span>Get Started</span>
                                            <b></b>
                                        </Link>
                                        {/* Theme Toggle Button */}
                                        <button
                                            className="theme-toggle-btn"
                                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} // Toggle theme
                                            aria-label="Toggle Dark Mode"
                                        >
                                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                                        </button>
                                        <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}>
                                            <i className="fal fa-bars"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Dark/Light Mode CSS */}
            <style jsx>{`
                .theme-toggle-btn {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: inherit;
                    margin-left: 10px;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
};

export default HeaderThree;
