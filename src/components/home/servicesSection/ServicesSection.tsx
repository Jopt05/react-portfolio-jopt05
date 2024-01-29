import React from 'react'
import styles from './ServicesSection.module.css'
import { Service } from '../service/Service'

export const ServicesSection = () => {
  return (
    <div className={ styles.servicesContainer }>
        <Service 
            goesLeft
            serviceDescription='Desripción'
            serviceImage=''
            serviceIcon=''
            serviceName='Hola'
        />        
        <Service 
            goesLeft={ false }
            serviceDescription='Desripción'
            serviceImage=''
            serviceIcon=''
            serviceName='Hola'
        />        
        <Service 
            goesLeft
            serviceDescription='Desripción'
            serviceImage=''
            serviceIcon=''
            serviceName='Hola'
        />        
    </div>
  )
}
