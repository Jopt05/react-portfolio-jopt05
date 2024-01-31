import React from 'react'
import styles from './contactSection.module.css'
import { ContactCTA } from '../contactCTA/ContactCTA'
import { ContactForm } from '../contactForm/ContactForm'

export const ContactSection = () => {
  return (
    <div className={ styles.sectionContainer }>
        <ContactCTA />
        <ContactForm />
    </div>
  )
}
