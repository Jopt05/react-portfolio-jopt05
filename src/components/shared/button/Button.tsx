import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div className={ styles.buttonContainer }>
        <button 
            className={ styles.button }
            type='button'
            onClick={ (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClick(e) }
        >
            { text }
        </button>
    </div>
  )
}
