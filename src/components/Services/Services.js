import React from 'react'
import './Services.css'
import ServicesCard from './ServicesCard'
import { servicesData } from '../Data'

function Services() {
  const servicesElements = servicesData.map(item => {
    return ( 
    <ServicesCard
        key={item.id}
        icon={item.icon}
        title={item.title}
        description={item.description}
        plus={item.plus}
        link={item.link} 
        />
      )
    }) 
  return (
    <>
      <div className="services-section">
        <div className="container">
            <div className="services-content">
                <div className="services-header">
                    <h5 className='topline'>SERVICES</h5>
                    <h2 className='headline'>How I Can Help You With</h2>                   
                </div>

                <div className="services-cards">
                  { servicesElements }
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Services
