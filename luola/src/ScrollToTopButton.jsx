import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import './App.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = debounce(() => {
            if (window.scrollY > 100) { // Using scrollY instead of pageYOffset
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, 200);

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-button">
                    ↑ Top
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
