import React, { useContext } from 'react'
import styles from './Service.module.css'
import globalStyles from './../../../Global.module.css'
import Animations from './../../../Animations.module.css'
import { ThemeContext } from '../../../context/ThemeContext';

interface ServiceProps {
    serviceIcon: string;
    serviceName: string;
    serviceDescription: string;
    serviceImage: string;
    goesLeft: boolean;
}

export const Service = ({ goesLeft, serviceDescription, serviceIcon, serviceImage, serviceName }: ServiceProps) => {

    const { themeState } = useContext( ThemeContext );

  return (
    <div className={`${styles.serviceContainer} ${ Animations.bounceIn } ${ (goesLeft) ? styles.goesLeft : '' } ${( themeState.isDarkMode ) ? globalStyles.darkSBackground : ''}`}>
        <div className={ styles.serviceContainerItem }>
            <div className={ styles.serviceIconContainer }>
                <i className={ serviceIcon }></i>
            </div>
            <p className={ globalStyles.subtitle }>
                { serviceName }
            </p>
            <p className={ globalStyles.description }>
                { serviceDescription }
            </p>
        </div>
        <div className={ styles.serviceContainerItem }>
            <div className={ styles.containerImage }>
                <img 
                    className={ styles.image }
                    src={ serviceImage }
                />
            </div>
        </div>
    </div>
  )
}
