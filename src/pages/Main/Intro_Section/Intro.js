import React from 'react';
import Headshot from '../../../components/Headshot/Headshot';
import ContactIcon from '../../../components/ContactIcon/ContactIcon';
import './index.css';

import temp from '../../../images/headshot.jpg';
import RandomActivity from '../../../components/RandomActivity/RandomActivity';


const Intro = () => {
    return (
        <section className='intro' id='intro_main'>
            <wrapper className='introContainer'>
                <Headshot/>
                <div className='introText'>
                    <RandomActivity/>
                    <h1 className='introTitle'>Hey, I'm Jesse!</h1>
                    <h2 className='introSubtitle'>I'm a dev guy yuh yuh help me pls im struggling</h2>
                    <h2 className='introSubtitle'>UW CS '27</h2>
                </div>
            </wrapper>
            <wrapper className='introContacts'>
                <ContactIcon image={temp} url="https://www.linkedin.com/feed/"/>
                <ContactIcon image={temp} url="https://www.linkedin.com/feed/"/>
                <ContactIcon image={temp} url="https://www.linkedin.com/feed/"/>
                <ContactIcon image={temp} url="https://www.linkedin.com/feed/"/>
            </wrapper>
        </section>
    );
};

export default Intro;
