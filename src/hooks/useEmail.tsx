import { EmailJSResponseStatus } from "@emailjs/browser";
import { useState } from "react";
import emailjs from "../api/emailJS";

interface EmailDataState {
    data: EmailJSResponseStatus | null;
    isLoading: boolean;
    errorMessage: string | null;
}

const OUTLOOK_KEY = import.meta.env.VITE_EMAILJS_OUTLOOK_KEY;
const TEMPLATE_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;

export const useEmail = () => {

    const [emailData, setEmailData] = useState<EmailDataState>({
        data: null,
        isLoading: false,
        errorMessage: null
    });

    const sendEmail = async(name: string, email: string, message: string) => {
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
        });
        
        setTimeout(() => {
            setEmailData({
                ...emailData,
                errorMessage: null
            })
        }, 1500);
    }

    return {
        emailData,
        sendEmail
    }

}