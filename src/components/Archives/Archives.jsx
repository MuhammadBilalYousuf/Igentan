import React from 'react'
import './archives.css'
import { archivesData } from '../Constants/Constants'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiLink} from 'react-icons/bi'

const Archives = () => {
  return (
    <section className="archives section" id="archives">
      <div className="projects-title-wrapper container">
        <h1 className="projects-title">CLIENTS</h1>
      </div>
      
      <div className="archives-container container">
        { archivesData.map (({ id, title, desc, live, code, image }) => {
          return(
            <div key={id} className="archives-box">
                <div className="archives-bottom">
                    <img src={image} alt={title} className="project-img" />
                </div>
            </div>
          )})
        }
      </div>
      
    </section>
  )
}

export default Archives