import React from 'react'
import styles from './ModalMessage.module.css'

interface ModalMessageProps {
    text: string;
}

export const ModalMessage = ({ text }: ModalMessageProps) => {
  return (
    <div className={ styles.modalContainer }>
        <p className={styles.modalText}>
            { text }
        </p>
    </div>
  )
}
