import React, { useEffect, useState } from 'react'
import styles from './ContactForm.module.css'
import globalStyles from '../../../Global.module.css'
import Animations from '../../../Animations.module.css'
import { Input } from '../../shared/Input/Input'
import image from '../../../assets/sittinperson.png'
import { Button } from '../../shared/button/Button'
import { useForm } from '../../../hooks/useForm'
import { useEmail } from '../../../hooks/useEmail'


type handleSubmitEvent = 
    | React.FormEvent<HTMLFormElement> 
    | React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface ContactFormProps {
    isShown: boolean;
    onSubmitted: (isShown: boolean) => void;
}

export const ContactForm = ({ isShown, onSubmitted }: ContactFormProps) => {

    const { emailData, sendEmail } = useEmail();

    const { email, handleChange, message, name, resetForm } = useForm({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        if( !isShown ) return;
        setTimeout(() => {
            document.querySelector('form').scrollIntoView({behavior: 'smooth'})
        }, 1000);
    }, [isShown])

    const handleSubmit = async(event: handleSubmitEvent) => {
        event.preventDefault();
        await sendEmail(name, email, message);
        setTimeout(() => {
            onSubmitted( !isShown );
            resetForm();
        }, 1500);
    }
    
    
  return (
    <form 
        className={`${ styles.formContainer } ${ isShown ? `${Animations.bounceIn} ${ styles.formContainerShown }` : '' }`}
        onSubmit={ (e) => handleSubmit(e) }
    >
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
        <div className={ styles.feedbackContainer }>
            {
                (emailData.errorMessage != null ) && (
                    <p className={`${globalStyles.description} ${ Animations.fadeIn }`}>
                        { emailData.errorMessage }
                    </p>
                )
            }
        </div>
        <Button 
            text='Submit'
            onClick={ (e) => handleSubmit(e) }
            isLoadingAction={ emailData.isLoading }
        />
    </form>
  )
}
