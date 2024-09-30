import React from 'react';
import RinkiLogo from './assets/images/KuudesRinki_varit.png';
import TuonelaLogo from './assets/images/TuonelaLogo.png';
import CryoLogo from './assets/images/lohikaarmelogo.jpg';
import TuirakasLogo from './assets/images/tuirakasLogo.png';
import SRSLogo from './assets/images/Suomen_roolipeliseura_logo_color.jpg';
import PelitoimintaaSuomessaLogo from './assets/images/PelitoimintaaSuomessaLogo.jpg';
import SaagasiLogo from './assets/images/SaagasiLogo.png';
import './App.css';
import websiteIcon from './assets/images/social_media/globe_internet_icon.png';
import istagramIcon from './assets/images/social_media/instagram_logo.png';
import facebookIcon from './assets/images/social_media/facebook_logo.png';

const partnersData = [
    {
        name: 'Kuudes Rinki ry',
        logo: RinkiLogo,
        website: 'http://www.kuudesrinki.fi/',
        instagram: 'https://www.instagram.com/kuudesrinki/',
        facebook: 'https://www.facebook.com/kuudesrinki',
    },
    {
        name: 'CRYO ry',
        logo: CryoLogo,
        website: 'https://www.cryo.fi/wordpress/.',
        instagram: 'https://www.instagram.com/roolipelikerho_cryo/',
        facebook: 'https://www.facebook.com/groups/CRYORY/',
    },
    {
        name: 'Tuonelan pelikerho',
        logo: TuonelaLogo,
        website: '',
        instagram: 'https://www.instagram.com/tuonelan_pelikerho ',
        facebook: 'https://www.facebook.com/groups/TuonelanPelikerho',
    },
    {
        name: 'Pelitoimintaa Suomessa',
        logo: PelitoimintaaSuomessaLogo,
        website: 'https://www.pelitoimintaasuomessa.fi/',
        instagram: 'https://www.instagram.com/pelitoimintaasuomessa',
        facebook: 'https://www.facebook.com/pelitoimintaasuomessa/',
    },
    {
        name: 'Tuiran yhteisötila Tuirakas',
        logo: TuirakasLogo,
        website: 'https://tuirakas.fi/',
        instagram: 'https://www.instagram.com/tuirakas/',
        facebook: 'https://www.facebook.com/Tuiranasukasyhdistys/',
    },
    {
        name: 'Suomen Roolipeliseura',
        logo: SRSLogo,
        website: 'https://suomenroolipeliseura.fi/',
        instagram: 'https://www.instagram.com/suomenroolipeliseura/',
        facebook: 'https://www.facebook.com/suomenropeseura/',
    },
    {
        name: 'Saagasi Events',
        logo: SaagasiLogo,
        website: 'https://www.saagasi.fi/',
        instagram: 'https://www.instagram.com/saagasievents/',
        facebook: 'https://www.facebook.com/saagasievents/',
    },
];

const Partner = ({ logo, name, facebook, instagram, website }) => {
    return (
        <div className="partner-card">
            <img src={logo} alt={name} className="partner-logo" loading="lazy" />
            <h3>{name}</h3>
            <div className="partner-socials">
                {website && (
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={website}>
                        <img src={websiteIcon} alt="Facebook" width="30" height="30" />
                        Website
                    </a>
                )}
                {instagram && (
                    <a
                        href={instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={instagram}>
                        <img className="social-icons" src={istagramIcon} alt="Facebook" width="30" height="30" />
                        Instagram
                    </a>
                )}
                {facebook && (
                    <a
                        href={facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={facebook}>
                        <img className="social-icons" src={facebookIcon} alt="Facebook" width="30" height="30" />
                        Facebook
                    </a>
                )}
            </div>
        </div>
    );
};

const Partners = () => {
    return (
        <div className="partners-section">
            <div className="partners-container">
                {partnersData.map((partner, index) => (
                    <Partner key={index} {...partner} />
                ))}
            </div>
        </div>
    );
};

export default Partners;