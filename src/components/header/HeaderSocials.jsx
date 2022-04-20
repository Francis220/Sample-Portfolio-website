import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {MdOutgoingMail} from 'react-icons/md'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/francis360/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Francis360-creator" target="_blank" rel='noreferrer'><BsGithub /></a>
        <a href="mailto:sergefrancis6@gmail.com" target="_blank" rel='noreferrer'><MdOutgoingMail /></a>
    </div>
  )
}

export default HeaderSocials