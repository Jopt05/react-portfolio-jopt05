import React, { useContext, useEffect } from 'react'
import Logo from '../../../assets/logo.png'
import styles from './Header.module.css'
import Animations from '../../../Animations.module.css'
import globalStyles from '../../../Global.module.css'
import { AuthContext } from '../../../context/AuthContext'
import { ModalMessage } from '../modalMessage/ModalMessage'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/ThemeContext'

export const Header = () => {

  const { authState } = useContext( AuthContext );
  const { themeState, changeTheme } = useContext( ThemeContext );

  function handleChangeTheme() {
    changeTheme();
  }

  return (
    <>
      <div className={`${styles.headerContainer} ${Animations.fadeIn}`}>
        <div className={ styles.imageContainer }>
            <img 
              className={ styles.image }
              src={ Logo }
            />
        </div>
        <div className={ styles.navContainer }>
          <Link to='/' className={styles.link} >
            Home
          </Link>
          <Link to='/blogs' className={styles.link} >
            Blogs
          </Link>
        </div>
        <p className={ styles.text }>
            WEB DEVELOPMENT
        </p>
        <p className={ styles.text }>
            JOPT98@GMAIL.COM
        </p>
        <button 
          onClick={handleChangeTheme}
          className={`${styles.themeButton} ${(themeState.isDarkMode ? styles.themeButtonDark : '')}`}
        >
          <i className={`bx bxs-${themeState.isDarkMode ? 'sun' : 'moon'}`}></i>
        </button>
      </div>
      {
        (authState.isLoggedIn) && (  
          <div className={ styles.modalContainer }>
            <ModalMessage
              text='Estás en modo administrador'
            />
          </div>
        )
      }
    </>
  )
}
