import React from 'react'
import './about.css'
import { AiOutlineDownload } from 'react-icons/ai'
import cv from '../../assets/mabior_cv.pdf'
import logo from '../../assets/igen-tan.png'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-container container">
          <div className="about-content">
            <br></br>
            <h3 className="about-title">More about me</h3>
            <p className="about-desc">Igen is the driving force behind local award-winning digital marketing agency, Absolute Digital. Eager to connect businesses with their target audience, Igen leverages his knowledge of technology and people’s skills to build a strong knit team of digital marketers to work on projects from local SMEs to $50 billion dollar companies.</p>
            <p className="about-desc">Before this, Igen was the Top Sales in a website design agency and a listed digital marketing agency which he found his interest in online marketing. Now, Igen spends his time coaching the next generation of sales leaders while building his own agency.</p>
            <p className="about-desc about-desc-mb">In a 2022 article by SMEstories, Igen talks about how he started his agency in the middle of the covid-19 pandemic, and how he managed to navigate his new company around uncertain times. Much like this GoodFirms CEO Interview where Igen shares how he managed to gain the trust of his clients by being transparent, and professional.</p>
            {/* <a href={cv} target="_blank" rel="noopener noreferrer">
                <button className="button about-button">Download CV <AiOutlineDownload className="download-icon" /></button>
            </a> */}
          </div>
          <div className="about-txt">
            <div className="about-txt-center">
                <h3 className="about-txt-h3"><img src={logo} className="about-logo-img" /></h3>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About