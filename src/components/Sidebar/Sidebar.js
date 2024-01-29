import React from 'react'
import './index.css'
import home from '../../images/home_icon.png'
import experience from '../../images/exp_icon.png'
import contact from '../../images/contact_icon.png'
import user from '../../images/user_icon.png'
import {Link, animateScroll as scroll} from 'react-scroll'


const Sidebar = () => {

    const scrollToTop = () => {
            scroll.scrollToTop();
        }
  return (
    <nav className='sideContainer'>
        <div className='sideIconContainer' onClick={scrollToTop}>
            <img className='sideIcon' src={home} alt='home'/>
        </div>
        <div className='sideLine'/>
        <Link className='sideIconContainer' to='projects_main'
            smooth={true} duration={1000} spy={true} exact='true'>
            <img className='sideIcon' src={experience} alt='experience'/>
        </Link>
        <div className='sideLine'/>
        <div className='sideIconContainer'>
            <img className='sideIcon' src={contact} alt='contact'/>
        </div>
        <div className='sideLine'/>
        <div className='sideIconContainer'>
            <img className='sideIcon' src={user} alt='personal'/>   
        </div>
    </nav>
  )
}

export default Sidebar