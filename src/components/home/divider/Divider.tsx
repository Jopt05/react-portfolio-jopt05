import React from 'react'
import styles from './Divider.module.css'

interface DividerProps {
    title: string;
}

export const Divider = ({ title }: DividerProps) => {
  return (
    <div className={ styles.dividerContainer }>
        <h1 className={ styles.dividerText }>{title}</h1>
    </div>
  )
}
