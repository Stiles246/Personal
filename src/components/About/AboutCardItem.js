import React from 'react'

function AboutCardItem(props) {
  return (
    <>
      <div className="about-card-item">
        <img src={props.img} alt="" className='about-card-img'/>
        <div className="about-card-text">
            <h3 className='about-card-heading'>{props.text}</h3>
            <p className='about-card-subtitle'>{props.subline}</p>
        </div>
      </div>
    </>
  )
}

export default AboutCardItem
