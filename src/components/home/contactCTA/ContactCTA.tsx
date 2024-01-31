import React from 'react'
import styles from './ContactCTA.module.css'
import globalStyles from '../../../Global.module.css'
import { Button } from '../../shared/button/Button'

export const ContactCTA = () => {
  return (
    <div className={ styles.container }>
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
            onClick={ (e) => console.log("Click") }
        />
    </div>
  )
}
