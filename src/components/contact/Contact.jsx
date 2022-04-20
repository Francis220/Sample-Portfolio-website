import React, {useRef} from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0i0uceh', 'template_dhyivao', form.current, 'AD6n9chCh34qXrBRz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sergefrancis6@gmail.com</h5>
            <a href = "mailto:sergefrancis6@gmail.com">Send an email</a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Serge Francis</h5>
            <a href = "https://www.linkedin.com/in/francis360/" target={'blank'}>Connect on LinkedIn</a>
          </article>

          <article className='contact__option'>
            <AiOutlineGithub className='contact__option-icon' />
            <h4>GitHub</h4>
            <h5>Francis360-creator</h5>
            <a href = "https://github.com/Francis360-creator" target={'blank'}>Connect on GitHub</a>
          </article>
        </div>
         {/* End of Contact Options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact