import React from 'react';

const LanguageToggle = ({ toggleLanguage, language }) => {
    return (
        <button className="nav-link" onClick={toggleLanguage}>
            {language === 'fi' ? 'English' : 'Suomeksi'}
        </button>
    );
};

export default LanguageToggle;
