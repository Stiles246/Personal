import React from 'react'
import { Link } from "react-router-dom";
import './Display.css'

function Display({topline, headline, description, buttonLabel, img}) {
  return (
    <>
      <div className="display-section">
        <div className="container">
            <div className="display-content">
                <div className="display-illus">
                    <img src={img} alt="" />
                </div>

                <div className="display-text">
                    <h5 className="display-topline">
                        {topline}
                    </h5>
                    <h1 className="display-heading">
                        {headline}
                    </h1>
                    <p className='display-subtitle'>
                        {description}
                    </p>
                    <Link>
                        <button className='btn'>{buttonLabel} </button>
                    </Link>
                </div>

            </div>
        </div>

                    <div className="display-bitmaps">
                        <img src="./images/bitmap1.svg" alt="" />
                        <img src="./images/bitmap2.svg" alt="" />
                        <img src="./images/bitmap3.svg" alt="" />
                        <img src="./images/bitmap4.svg" alt="" />
                        <img src="./images/bitmap5.svg" alt="" />
                        <img src="./images/bitmap6.svg" alt="" />
                    </div> 

      </div>
    </>
  )
}

export default Display
