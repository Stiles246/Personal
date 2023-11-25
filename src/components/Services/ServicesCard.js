import React from 'react'
import './Services.css'

function servicesCard (props) {
  return (
    <>
       <div className="services-card">
            <div className="services-title">
                <img src={props.icon} alt="" className='services-title-icon' />                
                <h4 className="title-text">{props.title}</h4>                  
            </div>
            <p className='subtitle'>{props.description}</p>
            <div className="learn">
                <img src={props.plus} alt="" className='plus' />
                <span>{props.link}</span>
            </div>
        </div>
    </>
  )
}

export default servicesCard
