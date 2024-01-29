import React from 'react'
import Project_H from '../../../components/Project_Horiz/Project_H'
import './index.css'

const Projects = () => {
  return (
    <section className='projects' id='projects_main'>
        <Project_H title='Project 1'/>
        <Project_H title='Project 2'/>
        <div>
            <h2 className='viewMore'>
                View More Projects
            </h2>
        </div>
    </section>
  )
}

export default Projects