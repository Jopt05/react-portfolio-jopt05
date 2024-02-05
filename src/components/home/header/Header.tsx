import React, { useContext } from 'react'
import Logo from '../../../assets/logo.png'
import styles from './Header.module.css'
import Animations from '../../../Animations.module.css'
import globalStyles from '../../../Global.module.css'
import { AuthContext } from '../../../context/AuthContext'

export const Header = () => {

  const { authState } = useContext( AuthContext );

  return (
    <>
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
      {
        (authState.isLoggedIn) && (  
          <div className={styles.adminMesageContainer}>
            <p className={globalStyles.subtitle}>
              Hola Jesus!
            </p>
          </div>
        )
      }
    </>
  )
}
