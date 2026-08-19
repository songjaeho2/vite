    import React, { useState } from 'react';
    import { headerMenus } from '../../data/header.jsx';
    import { Link, useLocation } from 'react-router-dom';
    import { FaInstagram } from 'react-icons/fa';
    import { FiMenu, FiX } from 'react-icons/fi';

    const Menu = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
        <button className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul className="menu">
            {headerMenus.map((menu, index) => (
                <li key={index} className={location.pathname === menu.src ? 'active' : ''}>
                <Link to={menu.src} onClick={() => setIsOpen(false)}>
                    {menu.icon}
                    <span>{menu.title}</span>
                </Link>
                </li>
            ))}
            </ul>

            <div className="divider" />

            <div className="profile-box">
            <span className="profile-title">PROFILE</span>
            <div className="profile-row">
                <span className="label">TOP</span>
                <span className="value">100–105</span>
            </div>
            <div className="profile-row">
                <span className="label">PANTS</span>
                <span className="value">28–30</span>
            </div>
            <div className="profile-row">
                <span className="label">SHOES</span>
                <span className="value">280 mm</span>
            </div>

            <div className="divider" />

            <div className="profile-sub">
                <div className="profile-metric">
                    <span className="label">HEIGHT</span>
                    <span className="number">180 <small>cm</small></span>
                </div>
                <div className="profile-metric">
                    <span className="label">WEIGHT</span>
                    <span className="number">70 <small>kg</small></span>
                </div>
            </div>
            </div>

            <div className="divider" />

            <a
            href="https://instagram.com/jhooooooooooooooo"
            className="instagram-btn"
            target="_blank"
            rel="noreferrer"
            >
            <FaInstagram className="insta-icon" />
            <span>Instagram</span>
            </a>
        </nav>
        </>
    );
    };

    export default Menu;
