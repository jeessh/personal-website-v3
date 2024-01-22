import React from 'react'
import './index.css'
import home from '../images/home_icon.png'
import experience from '../images/exp_icon.png'
import contact from '../images/contact_icon.png'
import user from '../images/user_icon.png'

const Sidebar = () => {
  return (
    <nav className='sideContainer'>
        <div className='sideIconContainer'>
            <img className='sideIcon' src={home}/>
        </div>
        <div className='sideIconContainer'>
            <img className='sideIcon' src={experience}/>
        </div>
        <div className='sideIconContainer'>
            <img className='sideIcon' src={contact}/>
        </div>
        <div className='sideIconContainer'>
            <img className='sideIcon' src={user}/>   
        </div>
    </nav>
  )
}

export default Sidebar