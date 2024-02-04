import React from 'react'
import styles from './Button.module.css'
import { Loader } from '../Loader/Loader';

interface ButtonProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isLoadingAction?: boolean;
}

export const Button = ({ text, onClick, isLoadingAction }: ButtonProps) => {
  return (
    <div className={ styles.buttonContainer }>
      {
        (isLoadingAction == true)
          ? <Loader />
          : <button 
                className={ styles.button }
                type='button'
                onClick={ (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClick(e) }
            >
                { text }
            </button>
      }
    </div>
  )
}
