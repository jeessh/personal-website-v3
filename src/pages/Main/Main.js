import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './index.css'
import Intro from './Intro_Section/Intro'
import Projects from './Projects_Section/Projects'

const Main = () => {


  return (
    <main className='main'>
      <Sidebar />
      <Intro/>
      <Projects/>
    </main>
  )
}

export default Main