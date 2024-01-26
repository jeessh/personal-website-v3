import React from 'react'
import './index.css'
import home from '../../images/home_icon.png'
import experience from '../../images/exp_icon.png'
import contact from '../../images/contact_icon.png'
import user from '../../images/user_icon.png'


const Sidebar = () => {
  return (
    <nav className='sideContainer'>
        <div className='sideIconContainer'>
            <img className='sideIcon' src={home} alt='home'/>
        </div>
        <div className='sideLine'/>
        <div className='sideIconContainer'>
            <img className='sideIcon' src={experience} alt='experience'/>
        </div>
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