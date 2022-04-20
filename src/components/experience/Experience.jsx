import React from 'react'
import './experience.css'
import JobList from '../JobList'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience">
        </div>
        <JobList></JobList>
      </div>
    </section>
  )
}

export default Experience