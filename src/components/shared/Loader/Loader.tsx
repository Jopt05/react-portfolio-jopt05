import React from 'react'
import styles from './Loader.module.css'
import LoaderSvg from '../../../assets/loader.svg'

export const Loader = () => {
  return (
    <div className={ styles.loaderContainer }>
        <img 
        src={ LoaderSvg }
        />
    </div>
  )
}
