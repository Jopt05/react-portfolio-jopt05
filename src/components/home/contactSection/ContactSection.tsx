import React, { useState } from 'react'
import styles from './contactSection.module.css'
import { ContactCTA } from '../contactCTA/ContactCTA'
import { ContactForm } from '../contactForm/ContactForm'

export const ContactSection = () => {

  const [show, setShow] = useState(false);

  return (
    <div className={ styles.sectionContainer }>
        <ContactCTA 
          onClick={ () => setShow(true)}
        />
        <ContactForm 
          isShown={ show }
        />
    </div>
  )
}
