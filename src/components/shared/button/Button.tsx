import React from 'react'
import styles from './Button.module.css'
import { Loader } from '../Loader/Loader';

interface ButtonProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isLoadingAction?: boolean;
    type?: "button" | "submit" | "reset";
}

export const Button = ({ text, onClick, isLoadingAction, type = 'button' }: ButtonProps) => {
  return (
    <div className={ styles.buttonContainer }>
      {
        (isLoadingAction == true)
          ? <Loader />
          : <button 
                className={ styles.button }
                type={ type }
                onClick={ (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClick(e) }
            >
                { text }
            </button>
      }
    </div>
  )
}
