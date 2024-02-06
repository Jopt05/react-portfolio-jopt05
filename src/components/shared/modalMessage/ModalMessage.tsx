import React, { useState } from 'react'
import styles from './ModalMessage.module.css'

interface ModalMessageProps {
    text: string;
    children?: JSX.Element
}

export const ModalMessage = ({ text, children }: ModalMessageProps) => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${styles.modalContainer} ${ isOpen ? styles.openedModal : '' }`}>
      <div className={ styles.buttonContainer }>
        <button
          onClick={ () => setIsOpen(!isOpen) }
          className={ styles.button }
        >
          { '>' }
        </button>
      </div>
      {
        ( children == undefined ) && (
          <p className={styles.modalText}>
              { text }
          </p>
        )
      }
      {
        ( children != undefined ) && ( children )
      }
    </div>
  )
}
