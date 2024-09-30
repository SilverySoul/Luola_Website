import React from 'react';

const ContactInfo = () => {
    const emailPart1 = 'roolipelikerholuola';
    const emailPart2 = 'gmail.com';
    const email = `${emailPart1}@${emailPart2}`;

    return (
        <div>
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    );
};

export default ContactInfo;
