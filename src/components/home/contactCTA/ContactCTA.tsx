import React from 'react'
import styles from './ContactCTA.module.css'
import globalStyles from '../../../Global.module.css'
import { Button } from '../../shared/button/Button'

interface ContactCTAProps {
    onClick: () => void;
}

export const ContactCTA = ({ onClick }: ContactCTAProps) => {
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
            onClick={ onClick }
        />
    </div>
  )
}
