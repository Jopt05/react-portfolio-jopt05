import React from 'react'
import styles from './FadeInMessage.module.css'
import globalStyles from '../../../Global.module.css'
import Animations from '../../../Animations.module.css'

interface FadeInMessageProps {
    text: string;
    indicator: any;
}

export const FadeInMessage = ({ text, indicator }: FadeInMessageProps) => {
  return (
    <div className={ styles.feedbackContainer }>
        {
            (indicator != null ) && (
                <p className={`${globalStyles.description} ${ Animations.fadeIn }`}>
                    { text }
                </p>
            )
        }
    </div>
  )
}
