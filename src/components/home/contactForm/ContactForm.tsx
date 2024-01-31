import React from 'react'
import styles from './ContactForm.module.css'
import globalStyles from '../../../Global.module.css'
import { Input } from '../../shared/Input/Input'
import image from '../../../assets/sittinperson.png'
import { Button } from '../../shared/button/Button'
import { useForm } from '../../../hooks/useForm'

export const ContactForm = () => {

    const { email, handleChange, message, name } = useForm({
        name: '',
        email: '',
        message: ''
    })

  return (
    <form className={ styles.formContainer }>
        <div className={ styles.formImageContainer }>
            <img 
                className={ styles.formImage }
                src={ image }
            />
        </div>
        <p className={ globalStyles.subtitle }>
            Send me a message!
        </p>
        <Input 
            name='name'
            onChange={ (e) => handleChange( e.target.value, 'name' ) }
            value={ name }
            placeholder='Enter your name'
        />
        <Input 
            name='email'
            onChange={ (e) => handleChange( e.target.value, 'email' ) }
            value={ email }
            placeholder='Enter your email'
        />
        <div className={ styles.textAreaContainer }>
            <textarea 
                name='message'
                value={ message }
                placeholder='Enter your message'
                className={ styles.textArea }
                onChange={ (e) => handleChange( e.target.value, 'message' ) }
            />
        </div>
        <Button 
            text='Submit'
            onClick={ (e) => console.log("Hola!") }
        />
    </form>
  )
}
