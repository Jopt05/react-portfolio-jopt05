import React, { useContext } from 'react'
import styles from './ContactCTA.module.css'
import globalStyles from '../../../Global.module.css'
import { Button } from '../../shared/button/Button'
import { ThemeContext } from '../../../context/ThemeContext';

interface ContactCTAProps {
    onClick: () => void;
}

export const ContactCTA = ({ onClick }: ContactCTAProps) => {

    const {themeState} = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${( themeState.isDarkMode ) ? globalStyles.darkSBackground : ''} `}>
        <div className={ styles.textContainer }>
            <p className={ globalStyles.title }>
                Stay in touch
            </p>
            <p className={ globalStyles.description }>
                Leave a message and i'll contact you as soon as possible.
            </p>
        </div>
        <Button 
            text="Let's chat"
            onClick={ onClick }
        />
    </div>
  )
}
