import React, { useEffect, useState } from 'react';
import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';
import { FiArrowUp } from 'react-icons/fi';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header id='header' role='banner' className={isScrolled ? 'is-scrolled' : ''}>
                <Logo />
                <Menu />
                <Sns />
            </header>
            <button
                type="button"
                className={`back-to-top ${isScrolled ? 'is-visible' : ''}`}
                onClick={scrollToTop}
                aria-label="페이지 맨 위로 이동"
            >
                <FiArrowUp aria-hidden="true" />
            </button>
        </>
    );
};

export default Header;
