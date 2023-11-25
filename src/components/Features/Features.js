import React from 'react'
import './Features.css'

function Features({topline, headline, description, img, icon}) {
  return (
    <>
      <div className="features-section">
        <div className="container">
            <div className="features-content">
                <div className="features-illus">
                    <img src={img} alt="" />
                </div>
                <div className="features-text">
                    <h5 className="topline">
                        {topline}
                    </h5>
                    <h1 className="features-heading">
                        {headline}
                    </h1>
                    <p className='features-subtitle'>
                        {description}
                    </p>
                    <div className="features-lists">
                        <div className="features-list">
                            <img src={icon} alt="" className='list-icon' />
                            <p className='list-text text'>Range including technical skills</p>
                        </div>
                        
                        <div className="features-list">
                            <img src={icon} alt="" className='list-icon' />
                            <p className='list-text text'>Range including technical skills</p>
                        </div>

                        <div className="features-list">
                            <img src={icon} alt="" className='list-icon' />
                            <p className='list-text text'>Range including technical skills</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>      
    </>
  )
}

export default Features
