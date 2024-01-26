import React from 'react';
import './index.css';
import headshot from '../../images/headshot.jpeg';

const Headshot = () => {
    return (
        <div className="headshotContainer">
            <img src={headshot} className='headshot' alt="Headshot"/>
        </div>
    );
};

export default Headshot;
