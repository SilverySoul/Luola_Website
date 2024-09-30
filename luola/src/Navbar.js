import React, { useState, useEffect } from 'react';
import './App.css';
import luolaLogo from './assets/images/LuolaLogo512.png';
import LanguageToggle from './LanguageToggle.jsx';

const Navbar = ({ toggleLanguage, language, scrollToSection, homeRef, contactRef, partnerRef }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const ClubName = "Roolipelikerho\nLuola";

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileMenuOpen(false);
            }
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`navbar ${isMobileMenuOpen ? 'expanded' : ''}`}>
            <div className="logo">
                <img src={luolaLogo} alt="Logo" className="logo-image" />
                <div style={{ whiteSpace: 'pre-line' }} className="logo-text">
                    <a>{ClubName}</a>
                </div>
            </div>

            <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
                <li><a href="#home" onClick={() => scrollToSection(homeRef)}>{language === 'fi' ? 'Media' : 'Media'}</a></li>
                <li><a href="#partners" onClick={() => scrollToSection(partnerRef)}>{language === 'fi' ? 'Yhteistyökumppanit' : 'Partners'}</a></li>
                <li><a href="#contact" onClick={() => scrollToSection(contactRef)}>{language === 'fi' ? 'Yhteystiedot' : 'Contact'}</a></li>
                <li><LanguageToggle toggleLanguage={toggleLanguage} language={language} /></li>
            </ul>

            <div className="hamburger" onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}

export default Navbar;
