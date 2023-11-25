import React from 'react'
import { Link } from "react-router-dom";
import './About.css'
import AboutCardItem from '../About/AboutCardItem'

function About({topline, headline, subline, description, buttonLabel, img}) {
  return (
    <>
      <div className="about-section">
        <div className="container">
            <div className="about-content">
                <div className='about-info'>
                    <div className="about-illus">
                        <img src={img} alt="" />
                    </div>
                    <div className="about-text">
                        <h5 className="topline">
                            {topline}
                        </h5>
                        <h1 className="about-heading">
                            {headline}
                        </h1>
                        <p className="text-big subline">{subline}</p>
                        <p className='about-subtitle'>
                            {description}
                        </p>
                        <Link>
                            <button className='btn btn-secondary'>{buttonLabel} </button>
                        </Link>
                    </div>
                </div>

                <div className="about-card-items">
                    <AboutCardItem 
                        img='./images/year.svg'
                        text='42%'
                        subline='Years of experience'
                    /> 
                    <AboutCardItem 
                        img='./images/project.svg'
                        text='73+'
                        subline='Project Done'
                    />
                </div>

            </div>
        </div>
      </div>      
    </>
  )
}

export default About
