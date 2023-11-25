import React from 'react'
import './Banner.css'

function Banner({topline, headline, description, buttonLabel, img}) {
  return (
    <>
        <div className="banner-section">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-header">
                        <h5 className='banner-topline'>{topline}</h5>
                        <h4 className='banner-headline'>{headline}</h4>
                        <button className='btn'>{buttonLabel}</button>
                    </div>
                    <div className='sub-banner'>
                        <p className="sub-text">{description}</p>
                        <img src={img} alt="" className='banner-illus' />
                    </div>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Banner
