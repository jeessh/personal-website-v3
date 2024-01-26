import React from 'react';
import Headshot from '../../../components/Headshot/Headshot';
import ContactIcon from '../../../components/ContactIcon/ContactIcon';
import './index.css';

import temp from '../../../images/headshot.jpeg';
import RandomActivity from '../../../components/RandomActivity/RandomActivity';


const Intro = () => {
    return (
        <section className='intro'>
            <div className='introContainer'>
                <Headshot/>
                <div className='introText'>
                    <RandomActivity/>
                    <h1 className='introTitle'>Hey, I'm Jesse!</h1>
                    <h2 className='introSubtitle'>I'm a dev guy yuh yuh help me pls im struggling</h2>
                    <h2 className='introSubtitle'>UW CS '27</h2>
                </div>
            </div>
            <div className='introContacts'>
                <ContactIcon image={temp} url="https://www.linkedin.com/feed/"/>
                <ContactIcon image={temp} url="https://www.linkedin.com/feed/"/>
                <ContactIcon image={temp} url="https://www.linkedin.com/feed/"/>
                <ContactIcon image={temp} url="https://www.linkedin.com/feed/"/>
            </div>
        </section>
    );
};

export default Intro;
