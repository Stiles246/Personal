import React from 'react'

function TestimonialCard(props) {
    const cardClass = `testimonial-card ${props.card}`
  return (
    <div>
        <div className={cardClass}>
            <div className="stars">
                <img src={props.star} alt="" className='star'/>
                <img src={props.star} alt="" className='star'/>
                <img src={props.star} alt="" className='star'/>
                <img src={props.star} alt="" className='star'/>
                <img src={props.star} alt="" className='star'/>
            </div>
            <p className="testimonial-text">{props.description}</p>
            <div className="user">
                <img src={props.avatar} alt="" className='avatar'/>
                <div className="avatar-text">
                    <h4 className="name">
                        {props.name}
                    </h4>
                    <p className="company">{props.company}</p>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default TestimonialCard
