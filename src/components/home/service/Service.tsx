import React from 'react'
import styles from './Service.module.css'
import globalStyles from './../../../Global.module.css'
import HeroImage from '../../../assets/me.png'

interface ServiceProps {
    serviceIcon: string;
    serviceName: string;
    serviceDescription: string;
    serviceImage: string;
    goesLeft: boolean;
}

export const Service = ({ goesLeft, serviceDescription, serviceIcon, serviceImage, serviceName }: ServiceProps) => {
  return (
    <div className={`${styles.serviceContainer} ${ (goesLeft) ? styles.goesLeft : '' }`}>
        <div className={ styles.serviceContainerItem }>
            <div className={ styles.serviceIconContainer }>
                {/* <img /> */}
            </div>
            <p className={ globalStyles.subtitle }>
                Hola
            </p>
            <p className={ globalStyles.description }>
                Descripción
            </p>
        </div>
        <div className={ styles.serviceContainerItem }>
            <div className={ styles.containerImage }>
                <img 
                    className={ styles.image }
                    src={ HeroImage }
                />
            </div>
        </div>
    </div>
  )
}
