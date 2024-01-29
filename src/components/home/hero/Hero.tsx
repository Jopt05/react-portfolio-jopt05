import React from 'react'
import styles from './Hero.module.css'
import globalStyles from '../../../Global.module.css'
import HeroImage from '../../../assets/me.png'
import Animations from '../../../Animations.module.css'

export const Hero = () => {
  return (
    <div className={`${styles.heroContainer} ${Animations.fadeIn}`}>
        <div className={ styles.heroContainerItem }>
            <p className={ globalStyles.title }>
                Jesús Puentes
            </p>
            <p className={ globalStyles.subtitle }>
                Fullstack developer and mechatronics engineer
            </p>
            <p className={ globalStyles.description }>
                I'm at your service in any coding and web development need.
            </p>
        </div>
        <div className={ styles.heroContainerItem }>
            <div className={ styles.imageContainer }>
                <img 
                    className={ styles.image }
                    src={ HeroImage }
                />
            </div>
        </div>
    </div>
  )
}
