import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
          return <div key={index} className='services-format'>
             <h3>{service.s_no}</h3>
             <h2>{service.s_name}</h2>
             <p>{service.s_desc}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
