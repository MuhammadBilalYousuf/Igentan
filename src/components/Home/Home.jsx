import React from 'react'
import './home.css'
import mabior from '../../assets/mabior.png'

const Home = () => {
  return (
    <section className="lines home section" id="home">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      <div className="home-container container grid">
        <p className="home-subtitle">Hi, welcome to my portfolio, I'm</p>
        <div className="home-image-container">
          <img src={mabior} alt="logo" className="home-image" />
        </div>
        <p className="home-desc">
        Accomplished and highly-driven Founder & Sales Director {' '}
          <span className="home-span">
          with a Bachelor's Degree in Internet Marketing and Business Management <span className="and">and</span> over 6 years of professional experience managing complex deals and motivating sales teams to achieve their targets.</span>
        </p>
      </div>
      <div className="line"></div>
    </section>
  )
}

export default Home