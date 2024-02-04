import React, { useEffect, useState } from 'react'
import styles from './ContactForm.module.css'
import globalStyles from '../../../Global.module.css'
import Animations from '../../../Animations.module.css'
import { Input } from '../../shared/Input/Input'
import image from '../../../assets/sittinperson.png'
import { Button } from '../../shared/button/Button'
import { useForm } from '../../../hooks/useForm'
import emailjs from '../../../api/emailJS'
import { EmailJSResponseStatus } from '@emailjs/browser'
import { Loader } from '../../shared/Loader/Loader'


type handleSubmitEvent = 
    | React.FormEvent<HTMLFormElement> 
    | React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface ContactFormProps {
    isShown: boolean;
    onSubmitted: (isShown: boolean) => void;
}

interface EmailDataState {
    data: EmailJSResponseStatus | null;
    isLoading: boolean;
    errorMessage: string | null;
}

const OUTLOOK_KEY = import.meta.env.VITE_EMAILJS_OUTLOOK_KEY;
const TEMPLATE_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;

export const ContactForm = ({ isShown, onSubmitted }: ContactFormProps) => {

    const [emailData, setEmailData] = useState<EmailDataState>({
        data: null,
        isLoading: false,
        errorMessage: null
    });

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
        setEmailData({
            ...emailData,
            isLoading: true
        });
        
        if( name == '' || email == '' || message == '' ) {
            setEmailData({
                ...emailData,
                isLoading: false,
                errorMessage: "Fill all the fields, please."
            })
            return;
        }

        const templateParams = {
            to_name: "Jesus Puentes",
            from_name: `${email}`,
            message
        }
        const emailResponse = await emailjs.send(
            OUTLOOK_KEY,
            TEMPLATE_KEY,
            templateParams
        );

        console.log({emailResponse});

        if( emailResponse.status != 200 ) {
            setEmailData({
                ...emailData,
                isLoading: false,
                errorMessage: 'There was a problem with the request'
            })
            return;
        }

        setEmailData({
            isLoading: false,
            data: emailResponse,
            errorMessage: 'Message sent!'
        })
        
        setTimeout(() => {
            onSubmitted( !isShown );
            resetForm();
            setEmailData({
                ...emailData,
                errorMessage: null
            })
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
