import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './index.css'
import Intro from './Intro_Section/Intro'

const Main = () => {
  return (
    <main className='main'>
      <Sidebar />
      <Intro/>
    </main>
  )
}

export default Main