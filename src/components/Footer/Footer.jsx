import React from 'react'
import './footer.css'
import { BsArrowUp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
          <p className="copyright">© Copyright – 2023</p>
          <a href="#home" className="back-top-btn">
            <span className="footer_span">Back To Top</span>
            <BsArrowUp />
          </a>
      </div>
    </footer>
  )
}

export default Footer