import React from 'react'
import './about.css'
import me from '../../assets/me_about.jpg'
import {GiSkills} from 'react-icons/gi'
import {AiFillLike} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src = {me} alt=''/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiSkills className= 'about__icon'/>
              <h5>Technologies</h5>
              <small> 2+ Years of experience in Java, Python, JavaScript with React, NESTJs, HTML and CSS.</small>
            </article>

            <article className='about__card'>
              <AiFillLike className= 'about__icon'/>
              <h5>Interests/Hobbies</h5>
              <small>I enjoy programming, playing video games, and hanging out with friends.</small>
            </article>
          </div> 
          <p>
          I am currently a fourth year Computer Science student at the University of Nebraska-Lincoln.
          I have great interest in full-stack development, artificial intelligence, human-computer interactions, and everything in between.
          </p>
          <a href="#contact" className='btn btn-primary'>Contact me</a> 
        </div>
      </div>
      
    </section>
  )
}

export default About