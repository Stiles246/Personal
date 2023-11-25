import React from 'react'
import './Portfolio.css'
import PorfolioItem from './PorfolioItem'

function Portfolio({topline, headline, buttonLabel}) {
  return (
    <>
        <div className="portfolio-section">
            <div className="container">
                <div className="portfolio-content">
                    <div className="portfolio-header">
                        <div>
                            <h5 className='portfolio-topline'>{topline}</h5>
                            <h3 className='portfolio-headline'>{headline}</h3>
                        </div>
                        <button className='btn btn-outline'>{buttonLabel}</button>
                    </div>
                    <div className="portfolio-displays">
                        <PorfolioItem 
                            img='./images/sofa.svg'
                            tag='Design'
                            text='Sofa'
                        />
                        <PorfolioItem 
                            img='./images/keyboard.svg'
                            tag='Branding'
                            text='Keybaord'
                        />
                        <PorfolioItem 
                            img='./images/work.svg'
                            tag='Illustration'
                            text='Work Media'
                        />
                    </div>
                </div>
            </div>
        </div>     
    </>
  )
}

export default Portfolio
