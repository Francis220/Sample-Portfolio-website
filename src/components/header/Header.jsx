import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me_picture.png'
import HeaderSocial from './HeaderSocials'
import Typist from 'react-typist'
import "react-typist/dist/Typist.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <Typist avgTypingDelay = {150}>
        <h1>Serge Francis</h1>
        </Typist>
        <h5 className="text-light">Computer Science Student</h5>
        <HeaderSocial />
        <CTA/>
        <div className= "me">
          <img src={me} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a> 
      </div>
    </header>
  )
}

export default Header