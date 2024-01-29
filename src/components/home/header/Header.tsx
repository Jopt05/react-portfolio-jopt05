import React from 'react'
import Logo from '../../../assets/logo.png'
import styles from './Header.module.css'
import Animations from '../../../Animations.module.css'

export const Header = () => {
  return (
    <div className={`${styles.headerContainer} ${Animations.fadeIn}`}>
        <div className={ styles.imageContainer }>
            <img 
              className={ styles.image }
              src={ Logo }
            />
        </div>
        <p className={ styles.text }>
            WEB DEVELOPMENT
        </p>
        <p className={ styles.text }>
            JOPT98@GMAIL.COM
        </p>
    </div>
  )
}
