import React from 'react';
import './index.css';

const ContactIcon = ({ image, url }) => {
    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <img className="contactIcon"  src={image} alt="Contact Icon" onClick={handleClick} />
    );
};

export default ContactIcon;
