import React from 'react'
import './contact.css'
import {AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container-container container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-desc">Connect with Igen on Email, Linkedin, Instagram.</p>

        <div className="contact-mail">
          <a href="mailto:igentan@gmail.com" target="_blank" className="contact-link">igentan@gmail.com</a>
        </div>

        <div className="contact-social">
          <a href="https://www.linkedin.com/in/igentan" target="_blank" className="container-link-bottom">
            <p className="contact_p">Linkedin</p><AiFillLinkedin className="contact-icon" />
          </a>
          <a href="https://www.instagram.com/igentan" target="_blank" className="container-link-bottom">
            <p className="contact_p">Instagram</p><AiOutlineInstagram className="contact-icon" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact