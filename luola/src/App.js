import { Helmet } from 'react-helmet';
import React, { lazy, Suspense, useState, useRef } from 'react';
import Navbar from './Navbar';
import ContactInfo from './ContactInfo';
import ErrorBoundary from './ErrorBoundary';
import ScrollToTopButton from './ScrollToTopButton';
import './App.css';
import noppajakoynnosvalkoinen from './assets/images/noppajakoynnosvalkoinen.png';
import luolamaskotti from './assets/images/luolamaskotti_color.png';
import fi from './assets/locales/fi.json';
import en from './assets/locales/en.json';
import istagramIcon from './assets/images/social_media/instagram_logo.png';
import facebookIcon from './assets/images/social_media/facebook_logo.png';

const InstagramFeed = lazy(() => import('./InstagramFeed'));
const Partners = lazy(() => import('./Partners'));

const App = () => {

    // Language change
    const [language, setLanguage] = useState('fi');
    const texts = language === 'fi' ? fi : en;
    const toggleLanguage = () => {
        setLanguage(language === 'fi' ? 'en' : 'fi');
    };

    // Refs for the different sections
    const homeRef = useRef(null);
    const contactRef = useRef(null);
    const partnerRef = useRef(null);

    // Function to scroll to the section
    const scrollToSection = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Helmet>
                <title>Roolipelikerho Luola - Role-playing Club</title>
                <meta name="description" content="Roolipelikerho Luola niin uusille, kuin vanhoille pelaajille ja pelinjohtajille." />
                    <meta name="keywords" content="roolipelikerho, pöytäroolipeli, Oulu, yhteisö tapahtuma, rope, pöytärope, pelinjohtaja, dungeons and dragons, dnd" />
                <meta property="og:title" content="Roolipelikerho Luola" />
                <meta property="og:description" content="Tule pelaamaan pöytäroolipelejä joka Torstai Oulussa, Tuiran yhteisötilassa." />
                <meta property="og:url" content="https://yourdomain.com" />
                <meta property="og:image" content="https://yourdomain.com/path-to-image.png" />
            </Helmet>
            <Navbar
                toggleLanguage={toggleLanguage}
                language={language}
                scrollToSection={scrollToSection}
                homeRef={homeRef}
                contactRef={contactRef}
                partnerRef={partnerRef}
            />
            <ScrollToTopButton />
            <div className="home-page">
                <div className="container">
                    <img src={noppajakoynnosvalkoinen} alt="Roolipelikerho Luola" className="image" loading="lazy" />
                </div>
                <div className="container">
                    <div className="introduction-text">
                        <h1 className="logo-text">{texts.welcome}</h1>
                        <p>{texts.introduction_1}</p>
                        <p>{texts.introduction_2}</p>
                        <b>{texts.introduction_3}</b>
                        <p>{texts.introduction_4}</p>
                        <p>{texts.introduction_5}</p>
                        <p>{texts.introduction_6}</p>
                    </div>
                </div>
                <div className="container">
                <div ref={homeRef} className="instagram">
                    <Suspense fallback={<div className="skeleton" />}>
                        <ErrorBoundary>
                            <InstagramFeed />
                        </ErrorBoundary>
                        </Suspense>
                        <div className="container">
                        <div ref={partnerRef} className="introduction-text">
                            <h2>{texts.social_media}</h2>
                            <p>{texts.social_info_1}</p>
                            <div className="social-links">
                                <a
                                    href="https://www.instagram.com/roolipelikerho_luola/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="https://www.instagram.com/roolipelikerho_luola/">
                                    <img src={istagramIcon} alt="Instagram" className="social-icon" width="30" height="30" />
                                    Instagram
                                </a>
                                <a
                                    href="https://www.facebook.com/groups/luola/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="https://www.facebook.com/groups/luola/">
                                    <img src={facebookIcon} alt="Facebook" className="social-icon" width="30" height="30" />
                                    Facebook
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div ref={partnerRef}>
                        <h1 className="partner">{texts.partners}</h1>
                        <Suspense fallback={<div className="skeleton" />}>
                            <ErrorBoundary>
                                <Partners />
                            </ErrorBoundary>
                        </Suspense>
                    </div>
                </div>
                <div className="container">
                    <div ref={contactRef} className="introduction-text">
                        <h2>{texts.contactInformation}</h2>
                        <p>{texts.contact_1}</p>
                        <ContactInfo />
                        <p>{texts.social_info_2}</p>
                        <img src={luolamaskotti} alt="Roolipelikerho Luola karhu" className="bear" loading="lazy" />
                    </div>
                </div>
                <footer className="footer">
                    <p>&copy; 2024 Roolipelikerho Luola. All Rights Reserved.</p>
                </footer>
            </div>
            
        </div>
  );
}

export default App;