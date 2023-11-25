import React from 'react'
import { Link } from "react-router-dom";
import './HeroSection.css'

function HeroSection({topline, headline, description, buttonLabel, img}) {
  return (
    <>
      <div className="hero-section">
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <h5 className="topline">
                        {topline}
                    </h5>
                    <h1 className="heading">
                        {headline}
                    </h1>
                    <p className='hero-subtitle'>
                        {description}
                    </p>
                    <Link>
                        <button className='btn'>{buttonLabel} </button>
                    </Link>
                </div>
                <div className="hero-illus">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
