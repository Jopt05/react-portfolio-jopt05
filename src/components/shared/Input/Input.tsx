import React from 'react'
import styles from './Input.module.css'

interface InputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: React.HTMLInputTypeAttribute;
}

export const Input = ({ name, value, onChange, placeholder, type = 'text' }: InputProps) => {
  return (
    <div className={ styles.inputContainer }>
        <input 
            className={ styles.input }
            name={ name }
            onChange={ (e) => onChange(e) }
            value={ value }
            placeholder={ placeholder }
            type={ type }
        />
    </div>
  )
}
