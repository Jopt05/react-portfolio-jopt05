import React from 'react'
import styles from './ServicesSection.module.css'
import { Service } from '../service/Service'

export const ServicesSection = () => {
  return (
    <div className={ styles.servicesContainer }>
        <Service 
            goesLeft
            serviceDescription="One of the best languages I've ever learned. I'll create your desired app with Python and its framework Django."
            serviceImage='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png'
            serviceIcon='fa-solid fa-laptop'
            serviceName='Python Development'
        />        
        <Service 
            goesLeft={ false }
            serviceDescription="I'll create your desired app with Javascript and it's frameworks like React and Express."
            serviceImage='https://mindinfoservices.com/assets/img/fullstack-development.png'
            serviceIcon='fa-solid fa-code'
            serviceName='Fullstack development'
        />        
    </div>
  )
}
