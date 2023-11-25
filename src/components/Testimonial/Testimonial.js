import React from 'react'
import './Testimonial.css'
import { testimonialData } from '../Data'
import TestimonialCard from './TestimonialCard'

function Testimonial() {
    const testimonialElements = testimonialData.map(item => {
        return (
            <TestimonialCard
            key={item.id}
            avatar={item.avatar}
            star={item.star}
            description={item.description} 
            name={item.name}
            company={item.company}
            card={item.card}
            />
        )
    })
  return (
    <>
      <div className="testimonial-section">
      <div className="container">
        <div className="testimonial-content">
                <div className="testimonial-header">
                    <h5>TESTIMONIAL</h5>
                    <h2 className='testimonial-header-text'>What My Clients Saying</h2>
                </div>
                <div className="testimonial-cards">
                    {testimonialElements}
                </div>
                <button className='btn btn-secondary testimonial-btn'>SEE ALL</button>
            </div>
        </div>    
      </div>
    </>
  )
}

export default Testimonial
